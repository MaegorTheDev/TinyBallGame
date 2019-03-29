
namespace casualgf {

    /** New System */
    export class ObstacleSpawnSystem extends ut.ComponentSystem {
        
        static totalArea = (38*50);
        OnUpdate():void {
            
            let areaPercerntage;
            let XValues;
            let YValues;
            let borderOffset;            
            let spawnMode;
            
            if(!GameSystem.isInTutorial){
                return;
            }
               
            let objectSpawner = this.world.getEntityByName("Spawners");
            if(objectSpawner.isNone()){
                return;
            }
            this.world.usingComponentData(objectSpawner, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{        
                areaPercerntage = helper.AreaPercentage;
                XValues = helper.XScaleValues;
                YValues = helper.YScaleValues;
                borderOffset = helper.BorderOffset;        
                spawnMode = helper.SpawnMode;            
            });        

            
            if(spawnMode != ObstacleSpawnerMode.Random){
                return;
            } 
/** 
            if(GameSystem.spawnObstacles){  
                const borders = this.world.getEntityByName("Borders");	                            
                this.world.usingComponentData(borders, [casualgf.Borders], 
                    (borders)=>{ 
                    ObstacleSpawnSystem.totalArea = borders.WorldHeight * borders.WorldWidth;
                });                   
                let obstacleArea = ObstacleSpawnSystem.totalArea * areaPercerntage;
                let currentArea = 0;            
                let index = 0;

                while (currentArea < obstacleArea && index < 100){          
                    let randomScaleX = GameSystem.randomIntFromInterval(XValues.x, XValues.y);                
                    let randomScaleY = GameSystem.randomIntFromInterval(YValues.x, YValues.y);
                    let currentObstacleArea = randomScaleX * randomScaleY;                     

                    if(currentObstacleArea + currentArea < obstacleArea){
                        if(ObstacleSpawnSystem.spawnObstacle(this.world, "casualgf.Obstacle", randomScaleX, randomScaleY, borderOffset, borders)){
                            currentArea += currentObstacleArea;
                        }
                    }
                    index ++;
                }               

               // GameSystem.spawnCoins = true;
                //GameSystem.spawnObstacles = false;
            }*/
        }

        static spawnObstacle(world: ut.World, entityGroup: string, xScale, yScale, offset, borders):boolean{   
            let randomPos;
            let halfWidth;
            let halfHeigth;
                        
            world.usingComponentData(borders, [casualgf.Borders], 
                (borders)=>{    
                halfWidth = borders.WorldWidth/2;
                halfHeigth = borders.WorldHeight/2;      
            });                   


            let findLocation = false;
            let index = 0;
                        
            while (!findLocation && index < 250){                    
                randomPos = new Vector3(GameSystem.randomIntFromInterval((-halfWidth + offset) + xScale/2, (halfWidth - offset) - xScale/2),                
                    GameSystem.randomIntFromInterval((-halfHeigth + offset) + yScale/2, (halfHeigth - offset) - yScale/2));    

                let coinInside = false;
                
                world.forEach([casualgf.Object, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale],
                    (obstacle, transform, scale) => { 
                    if( (transform.position.x - scale.scale.x/2 - offset < randomPos.x - xScale/2 &&
                        transform.position.x + scale.scale.x/2 + offset > randomPos.x + xScale/2 )||(
                        transform.position.y - scale.scale.y/2 - offset < randomPos.y - yScale/2 &&
                        transform.position.y + scale.scale.y/2 + offset > randomPos.y + yScale/2) &&
                        (Math.abs(transform.position.y - randomPos.y) > yScale && Math.abs(transform.position.x - randomPos.x) > xScale) ){
                            coinInside = true;
                        }                            
                    });
                
                let player = world.getEntityByName("Ball");   
                if(player != null){
                    world.usingComponentData(player, [ut.Core2D.TransformLocalPosition], 
                        (localBallPosition)=>{        
                            if(localBallPosition!=null){
                                if(randomPos.x - xScale/2 < localBallPosition.position.x-2 && randomPos.x + xScale/2 > localBallPosition.position.x+2 || 
                                    randomPos.y - yScale/2 < localBallPosition.position.y-2 && randomPos.y + yScale/2 > localBallPosition.position.y+2){
                                         coinInside = true;
                                 }                    
                            }
                    });      
                }      
                if(!coinInside){
                    findLocation = true;
                }
                
                index++;
            }
                         
            let obstacle;
            if(findLocation){ 
                obstacle = ut.EntityGroup.instantiate(world, entityGroup)[0];            
                world.usingComponentData(obstacle, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], 
                    (positionObstacle, obstacleScale)=>{        
                    positionObstacle.position = randomPos;
                    obstacleScale.scale = new Vector3 (xScale, yScale);
                });           

            }          
            return findLocation;            
        }
    }
}
