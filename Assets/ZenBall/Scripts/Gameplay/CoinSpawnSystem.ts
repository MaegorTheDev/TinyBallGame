
namespace casualgf {
    
    /** New System */
    export class CoinSpawnSystem extends ut.ComponentSystem {
        static maxCoins = 3;
        static spawnedCoins = 0;

        static randomInterval = new Vector2(1, CoinSpawnSystem.maxCoins);
        static objectSpawner:ut.Entity;
        OnUpdate():void {     

            //Spawning Coins
            CoinSpawnSystem.objectSpawner = this.world.getEntityByName("Spawners");

            let CoinSpawner = this.world.getComponentData(CoinSpawnSystem.objectSpawner, casualgf.CoinSpawnerHelper);
            if(CoinSpawner.CoinsSpawned.length == 0 ){
                for(let i =0; i<CoinSpawnSystem.maxCoins; i++){
                    let coin = ut.EntityGroup.instantiate(this.world, "casualgf.Coin")[0];  
                    this.world.usingComponentData(coin, [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                        transformLocalPosition.position = new Vector3(-100,0);
                    });                                                
                    CoinSpawner.CoinsSpawned[CoinSpawner.CoinsSpawned.length] = coin;
                }

                this.world.setComponentData(CoinSpawnSystem.objectSpawner, CoinSpawner);
            }
        }

        static SpawnCoins(world: ut.World){                 
            CoinSpawnSystem.ResetCoins(world);
            let height;
            let width;
            
            let borders = world.getEntityByName("Borders");	                            
            world.usingComponentData(borders,[casualgf.Borders], 
                (borders)=>{ 
                    height = borders.WorldHeight;
                    width = borders.WorldWidth;
            });             
            CoinSpawnSystem.maxCoins = GameSystem.randomIntFromInterval(CoinSpawnSystem.randomInterval.x, CoinSpawnSystem.randomInterval.y);  
            CoinSpawnSystem.spawnedCoins = 0;
            for(let i = 0; i<CoinSpawnSystem.maxCoins; i++){     
                CoinSpawnSystem.spawnCoin(world, -width/2 + 10, width/2 - 10, -height/2 + 10, height/2 - 10);    
            }           
        }

        static spawnCoin(world: ut.World, minX, maxX, minY, maxY):ut.Entity{  
            let findLocation = false;
            let index = 0;
            let randomPos:Vector3;
            //console.log("////////////////////////////Starting//////////////////////////");
        
            while (!findLocation && index < 500){                    
                randomPos = new Vector3(GameSystem.randomIntFromInterval(minX,maxX),
                        GameSystem.randomIntFromInterval(minY, maxY));
                //console.log("Starting index " +index );
                if(CoinSpawnSystem.DoesHitObstacle(world, randomPos)){   
                    //console.log("Hits obstacle " + index);            
                    index++;
                   continue;
                }             
                else if(!CoinSpawnSystem.IsVisibleFromBall(world, randomPos) && CoinSpawnSystem.spawnedCoins==0){   
                   //console.log("NotVisible " + index);  
                   index++;                   
                   continue;
                }
                else if(CoinSpawnSystem.spawnedCoins > 0 && !CoinSpawnSystem.IsVisibleFromOtherCoins(world, randomPos)){ 
                    
                   //console.log("Is not visible " + index);
                   index++;
                   continue;
                }

                if(CoinSpawnSystem.spawnedCoins > 0){
                    let tooClose = false;
                    world.usingComponentData(CoinSpawnSystem.objectSpawner, [casualgf.CoinSpawnerHelper], 
                        (helper)=>{ 
                        for(let i = 0; i< helper.CoinsSpawned.length && !tooClose; i++){
                            if(world.exists(helper.CoinsSpawned[i])){
                                let transform = world.getComponentData(helper.CoinsSpawned[i], ut.Core2D.TransformLocalPosition);
                                let deltaX = transform.position.x - randomPos.x;
                                let deltaY = transform.position.y - randomPos.y;
                                let magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                                if(magnitude < 500) {
                                    tooClose = true;      
                                }   
                            }                    
                        } 
                    }); 
                    if(tooClose){                 
                        
                   //console.log("Too close Coin " + index);
                        index++;
                        continue;
                    }
                }
                //Check ball distance           
                let ballPosition = BallSystem.GetBallPosition(world);
                let deltaX = ballPosition.x - randomPos.x;
                let deltaY = ballPosition.y - randomPos.y;
                let magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                if(magnitude < 50) {                                        
                    index++;
                    //console.log("Too close Ball " + index);
                    continue;
                } 
                                    
                let holePosition = PoolObstacleSpawnerSystem.GetCurrentLevelHolePosition(world); 
                deltaX = holePosition.x - randomPos.x;
                deltaY = holePosition.y - randomPos.y;
                magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                if(magnitude < 50) {
                    index++;
                    
                   //console.log("Too close hole " + index);
                    continue;
                } 

                //console.log("Finish " + index);
                findLocation = true;
            }
            
            let coin:ut.Entity;
            if(findLocation){  
                world.usingComponentData(CoinSpawnSystem.objectSpawner, [casualgf.CoinSpawnerHelper], 
                    ( helper)=>{ 
                    let entityCoin = helper.CoinsSpawned[CoinSpawnSystem.spawnedCoins];
                    world.usingComponentData(entityCoin, [ut.Core2D.TransformLocalPosition], (transform) =>{
                        transform.position = randomPos;                        
                        //console.log("////////////////////////////Set location " + randomPos.x + " " + randomPos.y);
                    });
                });
                CoinSpawnSystem.spawnedCoins++;
            }          
       
            return coin;            
        }

        static DestroyCoin(world:ut.World, entity:ut.Entity){
            world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                transformLocalPosition.position = new Vector3(-100,0);
            });  
        }

        static increaseRandomInterval(){
            let current = CoinSpawnSystem.randomInterval;
            CoinSpawnSystem.randomInterval = new Vector2(current.x + 1, current.y + 1);
        }

        static resetRandomInterval(){            
            CoinSpawnSystem.randomInterval = new Vector2(1, 3);            
        }

        static DoesHitObstacle(world:ut.World, position:Vector3):boolean{
            
            let hit;
            const camera = world.getEntityByName("Camera");
            //console.log("HitsObstacle!!!!!!!!!!");
            let hitsObstacle = false;
            let obstacles = PoolObstacleSpawnerSystem.GetCurrentLevelEntites(world); 
                    
            for( let i = 0; i<obstacles.length; i++){
                let entity = obstacles[i];
                if(world.exists(entity) && world.hasComponent(entity, casualgf.Obstacle) &&world.hasComponent(entity, ut.Core2D.TransformLocalRotation)){
                    //let rotation = world.getComponentData(entity,ut.Core2D.TransformLocalRotation);
                   // if(rotation.rotation.x == 0 && rotation.rotation.y == 0 && rotation.rotation.z == 0
                        if(world.hasComponent(entity, ut.Core2D.TransformLocalPosition) 
                        && world.hasComponent(entity, ut.Core2D.Sprite2DRendererOptions)){
                        //Is not rotated
                            let obstaclePosition = world.getComponentData(entity,ut.Core2D.TransformLocalPosition);
                            let options =  world.getComponentData(entity,ut.Core2D.Sprite2DRendererOptions);       
                        
                            if(obstaclePosition.position.x + (options.size.x/2) >= position.x - 1.5&& 
                            obstaclePosition.position.x - (options.size.x/2) <= position.x +  1.5){
                                ////console.log("Obstacle posiition x inside");
                                if(obstaclePosition.position.y + (options.size.y/2) >= position.y  - 1.5 && 
                                obstaclePosition.position.y - (options.size.y/2) <= position.y +  1.5){
                                    
                                ////console.log("Obstacle posiition y inside");
                                    hitsObstacle = true;
                                    //console.log("HitsObstacle!!!!!!!!!!INSIDEOBJECT");
                                    return true;
                                }
                            }
                    }
                } 
            }
                              
            

            if(hitsObstacle){
                //console.log("HitsObstacle!!!!!!!!!!return1");
                return true;
            }

            //1
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit1");
                
                //console.log("HitsObstacle!!!!!!!!!!return1");
                return true;
            }
            //2
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit2");
                return true;
            }
            //3
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit3");
                return true;
            }             
            //4
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit4");
                return true;
            }          
            //5
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit5");
                return true;
            }     
            //6
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+2, position.y),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit6");
                return true;
            }    
            //7
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-2, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit7");
                return true;
            }    
            //8           
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit8");
                return true;
            } 
            //9            
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+2, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                ////console.log("hit9");
                return true;
            }
            ////console.log("NoHit");

            //console.log("NOT !!!!!!!!!!");
            return false;
            
        }

        static IsVisibleFromBall(world:ut.World, positionToSpawn:Vector3):boolean{
            let ballEntity = BallSystem.BallEntity;
            let result:boolean;           
            const camera = world.getEntityByName("Camera");
            if(ballEntity.isNone()){
                return false;
            }
            world.usingComponentData(ballEntity,[ut.Core2D.TransformLocalPosition],(position) => {
                let hit = ut.HitBox2D.HitBox2DService.rayCast(world, positionToSpawn, position.position, camera);
                if(!hit.entityHit.isNone() && !world.hasComponent(hit.entityHit, casualgf.Ball)){
                    result = false;                    
                }else {
                    result = true;
                }
            });
            return result;
        }

        static IsVisibleFromOtherCoins(world:ut.World, positionToSpawn:Vector3):boolean{                  
            const camera = world.getEntityByName("Camera");

            let result:boolean = false;           
            world.usingComponentData(CoinSpawnSystem.objectSpawner, [casualgf.CoinSpawnerHelper], 
                (helper)=>{ 
                for(let i = 0; i< helper.CoinsSpawned.length; i++){
                    if(world.exists(helper.CoinsSpawned[i])){
                       let position = world.getComponentData(helper.CoinsSpawned[i], ut.Core2D.TransformLocalPosition);

                        let hit = ut.HitBox2D.HitBox2DService.rayCast(world, positionToSpawn, position.position, camera);
                        if(!hit.entityHit.isNone() && !world.hasComponent(hit.entityHit, casualgf.Coin)){
                            result = result || false;
                        }
                        else{
                            result = result || true;
                        }
                    }                    
                } 
            });
            return result;
            
        }

        static ResetCoins(world:ut.World){
            world.usingComponentData(CoinSpawnSystem.objectSpawner, [casualgf.CoinSpawnerHelper], 
                (helper)=>{ 
                for(let i=0; i<helper.CoinsSpawned.length; i++){
                    if(world.exists(helper.CoinsSpawned[i])&& !helper.CoinsSpawned[i].isNone()){                      
                        //ut.Core2D.TransformService.destroyTree(world, helper.CoinsSpawned[i]);                    
                        //world.destroyEntity(helper.CoinsSpawned[i]);
                        world.usingComponentData(helper.CoinsSpawned[i], [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                            transformLocalPosition.position = new Vector3(-100,0);
                        });      
                    }
                }
            });
        }

       
    }
}
