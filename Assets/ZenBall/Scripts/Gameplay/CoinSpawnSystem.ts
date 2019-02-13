
namespace game {
    
    /** New System */
    export class CoinSpawnSystem extends ut.ComponentSystem {
        static maxCoins;
        static spawnedCoins = 0;

        static randomInterval = new Vector2(2,4);

        OnUpdate():void {

            let height;
            let width;
            
            const borders = this.world.getEntityByName("Borders");	                            
            this.world.usingComponentData(borders, [game.Borders], 
                (borders)=>{ 
                    height = borders.WorldHeight;
                    width = borders.WorldWidth;
            });       

            //Spawning Coins

            if(GameSystem.spawnCoins){        
                NextLevelSystem.checkNextLevel = false;    
                CoinSpawnSystem.maxCoins = GameSystem.randomIntFromInterval(CoinSpawnSystem.randomInterval.x, CoinSpawnSystem.randomInterval.y);  
                CoinSpawnSystem.spawnedCoins = 0;
                for(let i = 0; i<CoinSpawnSystem.maxCoins; i++){
                    if(i % 4 ==0){
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", 0, width/2 - 3, 0, height/2 - 5);
                    }
                    else if(i % 4 == 1){
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", 0, width/2 - 3, -height/2 + 3 , 0);
                    }
                    else if(i % 4 == 2){
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width/2 + 3 , 0, 0, height/2 - 5);
                    }
                    else if(i % 4 == 3){
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width/2 + 3 , 0, -height/2 + 3, 0);
                    }
                    else if(i % 4 == 4){
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width/4 + 2, width/4 - 2, -height/4 + 2, height/4 - 2);
                    }
                }    
                    
                GameSystem.spawnCoins = false;  
                NextLevelSystem.checkNextLevel = true;
            }
          
        }

        static spawnCoins(world: ut.World, entityGroup: string, minX, maxX, minY, maxY):ut.Entity{  
            //console.log("Spawn coin");
            let findLocation = false;
            let index = 0;
            let randomPos:Vector3;
        
            while (!findLocation && index < 250){                    
                randomPos = new Vector3(GameSystem.randomIntFromInterval(minX,maxX),
                        GameSystem.randomIntFromInterval(minY, maxY));
                let coinInside = false;
                if(CoinSpawnSystem.DoesHitObstacle(world, randomPos)){
                    coinInside = true;
                }             
                world.forEach([game.Coin, ut.Core2D.TransformLocalPosition],
                    (coin, transform) => { 
                       let deltaX = transform.position.x - randomPos.x;
                       let deltaY = transform.position.y - randomPos.y;
                       let magnitude = deltaX * deltaX + deltaY  * deltaY ;
                       if(magnitude < 100) {
                            coinInside = true;
                       }
          
                });     
                
               
                if(!coinInside){
                    findLocation = true;
                }

                index++;
            }
            
            let coin;
            if(findLocation){  
                coin = ut.EntityGroup.instantiate(world, entityGroup)[0];        
                world.usingComponentData(coin, [ut.Core2D.TransformLocalPosition], (transformLocalPosition)=>{
                    transformLocalPosition.position = randomPos;
                });              
                
                CoinSpawnSystem.spawnedCoins++;
            }          
         
            return coin;            
        }

        static increaseRandomInterval(){
            let current = CoinSpawnSystem.randomInterval;
            CoinSpawnSystem.randomInterval = new Vector2(current.x + 1, current.y + 1);
        }

        static resetRandomInterval(){            
            CoinSpawnSystem.randomInterval = new Vector2(1, 3);            
        }

        static DoesHitObstacle(world:ut.World, position:Vector3):boolean{
            
            const camera = world.getEntityByName("Camera");

            let hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }            
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x+1.5, position.y-1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y+1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x-1.5, position.y-1.5),camera);
            if(!hit.entityHit.isNone()){
                return true;
            }

            return false;
            
        }

       
    }
}
