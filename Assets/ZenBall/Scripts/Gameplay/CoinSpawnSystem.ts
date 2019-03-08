
namespace game {
    
    /** New System */
    export class CoinSpawnSystem extends ut.ComponentSystem {
        static maxCoins;
        static spawnedCoins = 0;

        static randomInterval = new Vector2(1,3);
        static objectSpawner:ut.Entity;
        OnUpdate():void {     

            //Spawning Coins
            CoinSpawnSystem.objectSpawner = this.world.getEntityByName("Spawners");
        }

        static SpawnCoins(world: ut.World){                 
            CoinSpawnSystem.ResetCoins(world);
            let height;
            let width;
            
            let borders = world.getEntityByName("Borders");	                            
            world.usingComponentData(borders,[game.Borders], 
                (borders)=>{ 
                    height = borders.WorldHeight;
                    width = borders.WorldWidth;
            });             
            CoinSpawnSystem.maxCoins = GameSystem.randomIntFromInterval(CoinSpawnSystem.randomInterval.x, CoinSpawnSystem.randomInterval.y);  
            CoinSpawnSystem.spawnedCoins = 0;
            for(let i = 0; i<CoinSpawnSystem.maxCoins; i++){     
                CoinSpawnSystem.spawnCoin(world, "game.Coin", -width/2 + 10, width/2 - 10, -height/2 + 10, height/2 - 10);    
            }           
        }

        static spawnCoin(world: ut.World, entityGroup: string, minX, maxX, minY, maxY):ut.Entity{  
            let findLocation = false;
            let index = 0;
            let randomPos:Vector3;
        
            while (!findLocation && index < 500){                    
                randomPos = new Vector3(GameSystem.randomIntFromInterval(minX,maxX),
                        GameSystem.randomIntFromInterval(minY, maxY));
                let imposibleCoin = false;               
                
                if(CoinSpawnSystem.DoesHitObstacle(world, randomPos)){  
                   imposibleCoin = true;
                }             
                else if(!CoinSpawnSystem.IsVisibleFromBall(world, randomPos) && CoinSpawnSystem.spawnedCoins==0){                    
                   imposibleCoin = true;
                }
                else if(CoinSpawnSystem.spawnedCoins > 0 && !CoinSpawnSystem.IsVisibleFromOtherCoins(world, randomPos)){ 
                   imposibleCoin = true;
                }

                if(CoinSpawnSystem.spawnedCoins > 0 && !imposibleCoin){
                    world.usingComponentData(CoinSpawnSystem.objectSpawner, [game.CoinSpawnerHelper], 
                        (helper)=>{ 
                        for(let i = 0; i< helper.CoinsSpawned.length; i++){
                            if(world.exists(helper.CoinsSpawned[i])){
                                let transform = world.getComponentData(helper.CoinsSpawned[i], ut.Core2D.TransformLocalPosition);
                                let deltaX = transform.position.x - randomPos.x;
                                let deltaY = transform.position.y - randomPos.y;
                                let magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                                if(magnitude < 500) {
                                        imposibleCoin = true;
                                }   
                            }                    
                        } 
                    }); 
                }
                //Check ball distance
                if(!imposibleCoin){                    
                    let ballPosition = BallSystem.GetBallPosition(world);
                    let deltaX = ballPosition.x - randomPos.x;
                    let deltaY = ballPosition.y - randomPos.y;
                    let magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                    if(magnitude < 50) {
                        imposibleCoin = true;
                    } 
                }
                if(!imposibleCoin){                    
                    let holePosition = PoolObstacleSpawnerSystem.GetCurrentLevelHolePosition(world); 
                    let deltaX = holePosition.x - randomPos.x;
                    let deltaY = holePosition.y - randomPos.y;
                    let magnitude = deltaX * deltaX + deltaY  * deltaY ;                          
                    if(magnitude < 50) {
                         imposibleCoin = true;
                    } 
                }

                //Check hole distance
                

                if(!imposibleCoin){
                    findLocation = true;
                }

                index++;
            }
            
            let coin:ut.Entity;
            if(findLocation){  
                coin = ut.EntityGroup.instantiate(world, entityGroup)[0];                    
                world.usingComponentData(coin, [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                    transformLocalPosition.position = randomPos;
                });                              
                world.usingComponentData(CoinSpawnSystem.objectSpawner, [game.CoinSpawnerHelper], 
                        (helper)=>{ 
                        helper.CoinsSpawned[helper.CoinsSpawned.length] = coin;
                });
                                          
                
                CoinSpawnSystem.spawnedCoins++;
            }          
         
            return coin;            
        }

        static DestroyCoin(world:ut.World, entity:ut.Entity){
            if(world.exists(entity)){
                ut.Core2D.TransformService.destroyTree(world, entity);    
            }
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
                if(!hit.entityHit.isNone() && !world.hasComponent(hit.entityHit, game.Ball)){
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
            world.usingComponentData(CoinSpawnSystem.objectSpawner, [game.CoinSpawnerHelper], 
                (helper)=>{ 
                for(let i = 0; i< helper.CoinsSpawned.length; i++){
                    if(world.exists(helper.CoinsSpawned[i])){
                       let position = world.getComponentData(helper.CoinsSpawned[i], ut.Core2D.TransformLocalPosition);

                        let hit = ut.HitBox2D.HitBox2DService.rayCast(world, positionToSpawn, position.position, camera);
                        if(!hit.entityHit.isNone() && !world.hasComponent(hit.entityHit, game.Coin)){
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
            world.usingComponentData(CoinSpawnSystem.objectSpawner, [game.CoinSpawnerHelper], 
                (helper)=>{ 
                for(let i=0; i<helper.CoinsSpawned.length; i++){
                    if(world.exists(helper.CoinsSpawned[i])&& !helper.CoinsSpawned[i].isNone()){                      
                        //ut.Core2D.TransformService.destroyTree(world, helper.CoinsSpawned[i]);                    
                        world.destroyEntity(helper.CoinsSpawned[i]);
                    }
                }
            });
        }

       
    }
}
