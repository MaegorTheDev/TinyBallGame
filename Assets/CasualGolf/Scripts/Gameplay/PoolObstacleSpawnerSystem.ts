
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

        //Spawns the obstacles of the new level
        static SpawnObstacles(world:ut.World){
            //Checks if it need to change the group
            let changedGroup = PoolObstacleSpawnerSystem.CheckGroupStatus(world);
            
            if(changedGroup){
            //Changes the group and spawns the next one
              PoolObstacleSpawnerSystem.ChangeCurrentLevelGroup(world);  
            }               
            //Spawn a level
            PoolObstacleSpawnerSystem.SpawnLevel(world);            
        }

        //Checks the status and if it needs to change the group
        static CheckGroupStatus(world:ut.World): boolean{         
           let result = false;
           world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper],
               (helper)=>{  
                if(PoolObstacleSpawnerSystem.CurrentGroup == 0 || 
                    PoolObstacleSpawnerSystem.CurrentLevel == helper.LevelsPerPool){
                        //Resets the number of levels of the group
                        PoolObstacleSpawnerSystem.CurrentLevel = 0;
                        //Stops at last pool
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
            //Instantiate next Group and updates the current group
            PoolObstacleSpawnerSystem.CurrentGroup++;
            let group = ut.EntityGroup.instantiate(world, "casualgf.Group" + PoolObstacleSpawnerSystem.CurrentGroup); 
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
            //The first object is the group entity
            let currentGroup = group[0];
            //Saves the entity of the current group
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{                     
                helper.CurrentGroup = group[0];
            });

            //Saves the entity references in the level components for later use.
            let currentIndexLevel = 0;
            for(let i=0; i< group.length; i++){
                if(world.hasComponent(group[i], casualgf.Level)){  
                    world.usingComponentData(currentGroup, [casualgf.LevelGroup],(Levelgroup) => {
                        if(world.exists(group[i])){
                            //Saves the level entity
                            Levelgroup.Levels[Levelgroup.Levels.length] = group[i];
                        }
                    });                 

                    world.usingComponentData(group[i], [ut.Core2D.TransformLocalPosition, casualgf.Level], (transform, level) =>{
                        //Moves the level to a position outside the screen
                        transform.position = new Vector3(0,-250);
                        level.Index = currentIndexLevel; 
                        currentIndexLevel++;
                    });
                } else if(!world.hasComponent(group[i], casualgf.LevelGroup)){                
                  //Saves the levels inside the level group data 
                    world.usingComponentData(group[i], [ut.Core2D.TransformNode, ut.Core2D.TransformLocalPosition],(node, position) => {                      
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
            //Get random index
            let randomIndex = Math.floor(Math.random() * levels.length);
            let randomLevel:ut.Entity = levels[randomIndex];     
            //Force a random level entity       
            while(randomLevel.isNone()){      
                randomIndex = Math.floor(Math.random() * levels.length);
                randomLevel = levels[randomIndex];
            }        
                
            //StartingLevel
                world.usingComponentData(randomLevel, [casualgf.Level, ut.Core2D.TransformLocalPosition], 
                    (level, position) =>{                   
                    BallSystem.SetBallPosition(level.StartingPosition, world);
                    BallSystem.SetPuttPosition(world, level.StartingPosition);                  
                    //Moves the level to the starting position 
                    position.position = new Vector3(0,0);           
                    PoolObstacleSpawnerSystem.CurrenLevelIndex = level.Index;         
                });
                //sets the Current Level entity
                world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                    (helper)=>{ 
                    helper.CurrentLevel = randomLevel;                
                });
                PoolObstacleSpawnerSystem.CurrentLevel++;          
                PoolObstacleSpawnerSystem.ActivateLevel(world, randomLevel);           

                //Spawns coins
                CoinSpawnSystem.SpawnCoins(world);      
        }

        //Resets the indexes of group and level
        static ResetGroups(world){
            if(PoolObstacleSpawnerSystem.CurrentGroup > 0 ){
                ut.EntityGroup.destroyAll(world,  "casualgf.Group" + PoolObstacleSpawnerSystem.CurrentGroup); 
            }               
            PoolObstacleSpawnerSystem.CurrentGroup = 0;            
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
        }       
        //Finds the position of the hole of the current level
        static GetCurrentLevelHolePosition(world:ut.World):Vector3{
            let result;  
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [casualgf.ObstacleSpawnerHelper], 
                (helper)=>{ 
                let positionObject = world.getComponentData(helper.CurrentLevel, casualgf.Level);    
                result = positionObject.HolePosition;
            });
            return result;
        }
        //Finds the Entities of the current level
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
            //Activate the rotating, moving objects and activates the hole of the level. 
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
        //Deactivates the moving objects and the hole of the current level
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
        //Deactivates the current level
        static EndGame(world:ut.World){        
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, 
                [casualgf.ObstacleSpawnerHelper], (helper) =>{
                 PoolObstacleSpawnerSystem.DeactivateLevel(world, helper.CurrentLevel);              
            });
        }


    }
}