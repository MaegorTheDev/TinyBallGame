
namespace casualgf {
    
    /** New System */
    export class CoinSpawnSystem extends ut.ComponentSystem {
        //_Max number of coins to spawn
        static maxCoins = 3;
        //Spawned coins
        static spawnedCoins = 0;

        static randomInterval = new Vector2(1, CoinSpawnSystem.maxCoins);
        static objectSpawner:ut.Entity;
        OnUpdate():void {     

            //Spawning Coins
            CoinSpawnSystem.objectSpawner = this.world.getEntityByName("Spawners");

            let CoinSpawner = this.world.getComponentData(CoinSpawnSystem.objectSpawner, casualgf.CoinSpawnerHelper);
            if(CoinSpawner.CoinsSpawned.length == 0 ){
                //Instantiates the max number of coins to use as an object pool
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

        //Method to spawn coins
        static SpawnCoins(world: ut.World){                 
            CoinSpawnSystem.ResetCoins(world);
            let height;
            let width;
            
            let borders = world.getEntityByName("Borders");	     
            if(!borders.isNone())                      {
                world.usingComponentData(borders,[casualgf.Borders], 
                    (borders)=>{ 
                        height = borders.WorldHeight;
                        width = borders.WorldWidth;
                });       
            }                 
            //Sets a random number
            CoinSpawnSystem.maxCoins = GameSystem.randomIntFromInterval(CoinSpawnSystem.randomInterval.x, CoinSpawnSystem.randomInterval.y);  
            CoinSpawnSystem.spawnedCoins = 0;
            for(let i = 0; i<CoinSpawnSystem.maxCoins; i++){   
                //Moves the necessary coins  
                CoinSpawnSystem.spawnCoin(world, -width/2 + 10, width/2 - 10, -height/2 + 10, height/2 - 10);    
            }           
        }

        //Spawns a Coin into the level, the values are the border positions as the random area
        static spawnCoin(world: ut.World, minX, maxX, minY, maxY):ut.Entity{  
            let findLocation = false;
            let index = 0;
            let randomPos:Vector3;
        
            //Iterate until it finds a location up to 500 times
            while (!findLocation && index < 500){                 
                //Gets a random pos   
                randomPos = new Vector3(GameSystem.randomIntFromInterval(minX,maxX),
                        GameSystem.randomIntFromInterval(minY, maxY));
                        
                if(CoinSpawnSystem.DoesHitObstacle(world, randomPos)){   
                    //Hit an obstacle, go to next random position        
                    index++;
                   continue;
                }             
                else if(!CoinSpawnSystem.IsVisibleFromBall(world, randomPos) && CoinSpawnSystem.spawnedCoins==0){   
                   //The coin is not visible from the ball, only the first coin has to be visible from the ball
                   index++;                   
                   continue;
                }
                else if(CoinSpawnSystem.spawnedCoins > 0 && !CoinSpawnSystem.IsVisibleFromOtherCoins(world, randomPos)){                     
                   //If there is more than 0 coins, check if the position is visible from some other coin
                   index++;
                   continue;
                }

                if(CoinSpawnSystem.spawnedCoins > 0){
                    let tooClose = false;
                    //Compares the position to the other coins, if its too close, recalculate the position
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
                        //GoNext
                        index++;
                        continue;
                    }
                }
                //Check coin distance from ball            
                let ballPosition = BallSystem.GetBallPosition(world);
                let deltaX = ballPosition.x - randomPos.x;
                let deltaY = ballPosition.y - randomPos.y;
                let magnitude = deltaX * deltaX + deltaY  * deltaY ;
                //if its too close, go to the next pos                          
                if(magnitude < 50) {                                        
                    index++;
                    continue;
                } 
                                    
                //Checks if its close to the hole
                let holePosition = PoolObstacleSpawnerSystem.GetCurrentLevelHolePosition(world); 
                deltaX = holePosition.x - randomPos.x;
                deltaY = holePosition.y - randomPos.y;
                magnitude = deltaX * deltaX + deltaY  * deltaY ;                    
                //if its too close, go to the next pos                                             
                if(magnitude < 50) {
                    index++;
                    continue;
                } 
                findLocation = true;
            }
            
            let coin:ut.Entity;
            //If it found the location, move an spawned coin
            if(findLocation){  
                world.usingComponentData(CoinSpawnSystem.objectSpawner, [casualgf.CoinSpawnerHelper], 
                    ( helper)=>{ 
                    let entityCoin = helper.CoinsSpawned[CoinSpawnSystem.spawnedCoins];
                    world.usingComponentData(entityCoin, [ut.Core2D.TransformLocalPosition], (transform) =>{
                        transform.position = randomPos;                        
                    });
                });
                CoinSpawnSystem.spawnedCoins++;
            }          
       
            return coin;            
        }

        //Hides the coin into a far away position
        static DestroyCoin(world:ut.World, entity:ut.Entity){
            world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                transformLocalPosition.position = new Vector3(-100,0);
            });  
        }

        //Increase the interval of maximun coins
        static increaseRandomInterval(){
            let current = CoinSpawnSystem.randomInterval;
            CoinSpawnSystem.randomInterval = new Vector2(current.x + 1, current.y + 1);
        }
        
        //resets the interval of maximun coins
        static resetRandomInterval(){            
            CoinSpawnSystem.randomInterval = new Vector2(1, 3);            
        }

        //Checks if the coin hits an obstacle.
        static DoesHitObstacle(world:ut.World, position:Vector3):boolean{
            
            let hit;
            const camera = world.getEntityByName("Camera");
            let hitsObstacle = false;
            let obstacles = PoolObstacleSpawnerSystem.GetCurrentLevelEntites(world); 
                    
            for( let i = 0; i<obstacles.length; i++){
                let entity = obstacles[i];
                if(world.exists(entity) && world.hasComponent(entity, casualgf.Obstacle) &&world.hasComponent(entity, ut.Core2D.TransformLocalRotation)){
                       if(world.hasComponent(entity, ut.Core2D.TransformLocalPosition) 
                        && world.hasComponent(entity, ut.Core2D.Sprite2DRendererOptions)){
                            let obstaclePosition = world.getComponentData(entity,ut.Core2D.TransformLocalPosition);
                            let options =  world.getComponentData(entity,ut.Core2D.Sprite2DRendererOptions);       
                            //Checks if the position is inside an obstacle
                            if(obstaclePosition.position.x + (options.size.x/2) >= position.x - 1.5&& 
                            obstaclePosition.position.x - (options.size.x/2) <= position.x +  1.5){
                               
                                if(obstaclePosition.position.y + (options.size.y/2) >= position.y  - 1.5 && 
                                obstaclePosition.position.y - (options.size.y/2) <= position.y +  1.5){
                                    hitsObstacle = true;
                                    return true;
                                }
                            }
                    }
                } 
            }
            if(hitsObstacle){
                return true;
            }

            //Checks around the area to see if it hits an obstacle in 9 different points
            //1
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
            //2
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
            //3
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }             
            //4
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }          
            //5
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }     
            //6
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+2, position.y),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }    
            //7
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-2, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }    
            //8           
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                return true;
            } 
            //9            
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+2, position.y-2),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
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
