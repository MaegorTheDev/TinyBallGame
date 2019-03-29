
namespace casualgf {

    /** New System */
    export class PoolObstacleSpawnerSystem extends ut.ComponentSystem {
        static CurrentGroup = 0;
        static CurrentLevel = 0;
        static CurrenLevelIndex = 0;

        static HelperEntity:ut.Entity;

        OnUpdate():void {            
            PoolObstacleSpawnerSystem.HelperEntity = this.world.getEntityByName("Spawners");
        }

        static SpawnObstacles(world:ut.World){
            let changedGroup = PoolObstacleSpawnerSystem.CheckGroupStatus(world);
            //Change group
            if(changedGroup){
              PoolObstacleSpawnerSystem.ChangeCurrentLevelGroup(world);  
            }               
            //Spawn a level
            PoolObstacleSpawnerSystem.SpawnLevel(world);            
        }

        static CheckGroupStatus(world:ut.World): boolean{         
           let result = false;
           world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper],
               (helper)=>{  
                if(PoolObstacleSpawnerSystem.CurrentGroup == 0 || 
                    PoolObstacleSpawnerSystem.CurrentLevel == helper.LevelsPerPool){
                        PoolObstacleSpawnerSystem.CurrentLevel = 0;
                        if(PoolObstacleSpawnerSystem.CurrentGroup<helper.Pools){   
                            result = true;
                        }
                }     
           }); 
            
            return result;
        }

        static ChangeCurrentLevelGroup(world: ut.World){
            //Destroy last group               
            if(PoolObstacleSpawnerSystem.CurrentGroup > 0){  
                ut.EntityGroup.destroyAll(world,  "casualgf.Group" + PoolObstacleSpawnerSystem.CurrentGroup);
            }           
            //Instantiate next Group
            PoolObstacleSpawnerSystem.CurrentGroup++;
            let group = ut.EntityGroup.instantiate(world, "casualgf.Group" + PoolObstacleSpawnerSystem.CurrentGroup); 
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
            let currentGroup = group[0];
            
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{                     
                helper.CurrentGroup = group[0];
                ////console.log("Change level group" + helper.CurrentGroup.index);
            });


            let currentIndexLevel = 0;
            for(let i=0; i< group.length; i++){
                if(world.hasComponent(group[i], casualgf.Level)){  
                    world.usingComponentData(currentGroup, [casualgf.LevelGroup],(Levelgroup) => {
                        if(world.exists(group[i])){
                            Levelgroup.Levels[Levelgroup.Levels.length] = group[i];
                        }
                    });                 
                    world.usingComponentData(group[i], [ut.Core2D.TransformLocalPosition, casualgf.Level], (transform, level) =>{
                        transform.position = new Vector3(0,-250);
                        level.Index = currentIndexLevel; 
                        currentIndexLevel++;
                    });
                } else if(!world.hasComponent(group[i], casualgf.LevelGroup)){                 
                  
                    world.usingComponentData(group[i], [ut.Core2D.TransformNode, ut.Core2D.TransformLocalPosition],(node, position) => {
                        //level.EntityChildren[level.EntityChildren.length] = group[i];
                        if(!node.parent.isNone()){
                            world.usingComponentData(node.parent,[casualgf.Level], (level) =>{
                                level.EntityChildren[level.EntityChildren.length] = group[i];
                                if(world.hasComponent(group[i],casualgf.Hole)){                                   
                                    level.HolePosition = position.position;
                                }
                            });
                        }
                    });    
                    world.usingComponentData(group[i], [casualgf.MovingObject, ut.Core2D.TransformLocalPosition], 
                        (movingObject, position) => {
                            movingObject.StartingPosition = position.position;
                        });
                }               
                
            }
            
        }

        static SpawnLevel(world:ut.World){                              
            let levels;            
            //Hiding last one
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{                    
                ////console.log("Spawn level " + helper.CurrentGroup.index);
                world.usingComponentData(helper.CurrentGroup, [casualgf.LevelGroup], (levelGroup) =>{
                    levels = levelGroup.Levels;
                });                
                if(!helper.CurrentLevel.isNone() && world.exists(helper.CurrentLevel)){                       
                PoolObstacleSpawnerSystem.DeactivateLevel(world, helper.CurrentLevel); 
                    world.usingComponentData(helper.CurrentLevel, [ut.Core2D.TransformLocalPosition], (position) =>{
                        position.position = new Vector3(0,-200);                    
                    });                    
                }                
            });
            let randomIndex = Math.floor(Math.random() * levels.length);
            let randomLevel:ut.Entity = levels[randomIndex];            
            while(randomLevel.isNone()){      
                randomIndex = Math.floor(Math.random() * levels.length);
                randomLevel = levels[randomIndex];
            }        
                
                //StartingLevel
                world.usingComponentData(randomLevel, [casualgf.Level, ut.Core2D.TransformLocalPosition], 
                    (level, position) =>{                   
                    BallSystem.SetBallPosition(level.StartingPosition, world);
                    BallSystem.SetPuttPosition(world, level.StartingPosition);                   
                    position.position = new Vector3(0,0);           
                    PoolObstacleSpawnerSystem.CurrenLevelIndex = level.Index;         
                });
                //Current Level
                world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                    (helper)=>{ 
                    helper.CurrentLevel = randomLevel;                
                });
                PoolObstacleSpawnerSystem.CurrentLevel++;          
                PoolObstacleSpawnerSystem.ActivateLevel(world, randomLevel);           

                
                CoinSpawnSystem.SpawnCoins(world);      
        }

        static ResetGroups(world){
            if(PoolObstacleSpawnerSystem.CurrentGroup > 0 ){
                ut.EntityGroup.destroyAll(world,  "casualgf.Group" + PoolObstacleSpawnerSystem.CurrentGroup); 
            }               
            PoolObstacleSpawnerSystem.CurrentGroup = 0;            
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
        }       

        static GetCurrentLevelHolePosition(world:ut.World):Vector3{
            let result;  
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{ 
                let positionObject = world.getComponentData(helper.CurrentLevel, casualgf.Level);    
                result = positionObject.HolePosition;
            });
            return result;
        }

        static GetCurrentLevelEntites(world:ut.World):ut.Entity[]{
            let result;  
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{ 
                let level = world.getComponentData(helper.CurrentLevel, casualgf.Level);    
                result = level.EntityChildren;
            });
            return result;
        }

        static ActivateLevel(world:ut.World, level:ut.Entity){
           world.usingComponentData(level, [casualgf.Level], (level)=>{
               for(let i=0; i<level.EntityChildren.length; i++){

                if(world.exists(level.EntityChildren[i])){
                    let rotating:boolean = world.hasComponent(level.EntityChildren[i], casualgf.RotatingObject);
                    let moving:boolean = world.hasComponent(level.EntityChildren[i], casualgf.MovingObject);
                    let hole:boolean =  world.hasComponent(level.EntityChildren[i], casualgf.Hole);
 
                    if(moving){
                        world.usingComponentData(level.EntityChildren[i], [casualgf.MovingObject], 
                         (movingObject) => {
                             movingObject.Active = true;
                         });
                    } 
                    if(rotating){
                         world.usingComponentData(level.EntityChildren[i], [casualgf.RotatingObject], 
                         (rotatingObject) => { 
                             rotatingObject.Active = true;
                         });
                    }

                    if(hole){
                        world.usingComponentData(level.EntityChildren[i], [casualgf.Hole], 
                        (holeComponent) => { 
                            holeComponent.Active = true;
                        });
                   }

                }                   
               }
           });            
        }
        static DeactivateLevel(world:ut.World, level:ut.Entity){
            world.usingComponentData(level, [casualgf.Level], (level)=>{
                for(let i=0; i<level.EntityChildren.length; i++){
                    if(world.exists(level.EntityChildren[i])){
                        if(world.hasComponent(level.EntityChildren[i], casualgf.MovingObject)){
                            world.usingComponentData(level.EntityChildren[i], [casualgf.MovingObject, ut.Core2D.TransformLocalPosition], 
                             (movingObject, position) => {
                                 movingObject.Active = false;
                                 position.position = movingObject.StartingPosition;     
                            });              
                        }
                        if(world.hasComponent(level.EntityChildren[i], casualgf.RotatingObject)){
                            world.usingComponentData(level.EntityChildren[i], [casualgf.RotatingObject], 
                             (rotatingObject) => {
                                rotatingObject.Active = false;
                            });              
                        }
                        if(world.hasComponent(level.EntityChildren[i], casualgf.Hole)){
                            world.usingComponentData(level.EntityChildren[i], [casualgf.Hole], 
                            (holeComponent) => { 
                                holeComponent.Active = false;
                            });
                       }
                    }
                   
                }
            });            
        }

        static EndGame(world:ut.World){        
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, 
                [casualgf.ObstacleSpawnerHelper], (helper) =>{
                 PoolObstacleSpawnerSystem.DeactivateLevel(world, helper.CurrentLevel);              
            });
        }


    }
}

/**if(world.exists(level) && !level.isNone()){
               
            } */