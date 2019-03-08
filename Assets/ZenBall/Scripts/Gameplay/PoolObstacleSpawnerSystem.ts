
namespace game {

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
           let entity = world.getEntityByName("Spawners");
           let result = false;
           world.usingComponentData(entity, [game.ObstacleSpawnerHelper],
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
                ut.EntityGroup.destroyAll(world,  "game.Group" + PoolObstacleSpawnerSystem.CurrentGroup);
            }           

            //Instantiate next Group
            PoolObstacleSpawnerSystem.CurrentGroup++;

            let group = ut.EntityGroup.instantiate(world, "game.Group" + PoolObstacleSpawnerSystem.CurrentGroup); 

            PoolObstacleSpawnerSystem.CurrentLevel = 0;
            let currentGroup = group[0];
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [game.ObstacleSpawnerHelper], 
                (helper)=>{                     
                helper.CurrentGroup = group[0];
                //console.log("Change level group" + helper.CurrentGroup.index);
            });


            let currentIndexLevel = 0;
            for(let i=0; i< group.length; i++){
                if(world.hasComponent(group[i], game.Level)){  
                    world.usingComponentData(currentGroup, [game.LevelGroup],(Levelgroup) => {
                        if(world.exists(group[i])){
                            Levelgroup.Levels[Levelgroup.Levels.length] = group[i];
                        }
                    });                 
                    world.usingComponentData(group[i], [ut.Core2D.TransformLocalPosition, game.Level], (transform, level) =>{
                        transform.position = new Vector3(0,-250);
                        level.Index = currentIndexLevel; 
                        currentIndexLevel++;
                    });
                } else if(!world.hasComponent(group[i], game.LevelGroup)){

                  
                  
                    world.usingComponentData(group[i], [ut.Core2D.TransformNode, ut.Core2D.TransformLocalPosition],(node, position) => {
                        //level.EntityChildren[level.EntityChildren.length] = group[i];
                        if(!node.parent.isNone()){
                            world.usingComponentData(node.parent,[game.Level], (level) =>{
                                level.EntityChildren[level.EntityChildren.length] = group[i];
                                if(world.hasComponent(group[i],game.Hole)){                                   
                                    level.HolePosition = position.position;
                                }
                            });
                        }
                    });    
                    world.usingComponentData(group[i], [game.MovingObject, ut.Core2D.TransformLocalPosition], 
                        (movingObject, position) => {
                            movingObject.StartingPosition = position.position;
                        });
                }               
                
            }
        }

        static SpawnLevel(world:ut.World){                              
            let levels;            
            //Hiding last one
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [game.ObstacleSpawnerHelper], 
                (helper)=>{                    
                //console.log("Spawn level " + helper.CurrentGroup.index);
                world.usingComponentData(helper.CurrentGroup, [game.LevelGroup], (levelGroup) =>{
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
                world.usingComponentData(randomLevel, [game.Level, ut.Core2D.TransformLocalPosition], 
                    (level, position) =>{                   
                    BallSystem.SetBallPosition(level.StartingPosition, world);
                    let putt = world.getEntityByName("Putt");
                    if(!putt.isNone()){
                        world.usingComponentData(putt,  [ut.Core2D.TransformLocalPosition], 
                            (puttPosition,)=>{   
                                puttPosition.position = level.StartingPosition;                                
                            });
                    }
                    position.position = new Vector3(0,0);           
                    PoolObstacleSpawnerSystem.CurrenLevelIndex = level.Index;         
                });
                //Current Level
                world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [game.ObstacleSpawnerHelper], 
                    (helper)=>{ 
                    helper.CurrentLevel = randomLevel;                
                });
                PoolObstacleSpawnerSystem.CurrentLevel++;
                CoinSpawnSystem.SpawnCoins(world);                
                PoolObstacleSpawnerSystem.ActivateLevel(world, randomLevel);                  
        }

        static ResetGroups(world){
            let currentGroup = world.getEntityByName("game.Group"+PoolObstacleSpawnerSystem.CurrentGroup);   
            if(!currentGroup.isNone())
                ut.Core2D.TransformService.destroyTree(world, currentGroup);  

                
            PoolObstacleSpawnerSystem.CurrentGroup = 0;            
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
        }       

        static GetCurrentLevelHolePosition(world:ut.World):Vector3{
            let result;
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, [game.ObstacleSpawnerHelper], 
                (helper)=>{ 
                let positionObject = world.getComponentData(helper.CurrentLevel, game.Level);    
                result = positionObject.HolePosition;
            });
            return result;
        }

        static ActivateLevel(world:ut.World, level:ut.Entity){
           world.usingComponentData(level, [game.Level], (level)=>{
               for(let i=0; i<level.EntityChildren.length; i++){

                if(world.exists(level.EntityChildren[i])){
                    let rotating:boolean = world.hasComponent(level.EntityChildren[i], game.RotatingObject);
                    let moving:boolean = world.hasComponent(level.EntityChildren[i], game.MovingObject);
 
                    if(moving){
                        world.usingComponentData(level.EntityChildren[i], [game.MovingObject], 
                         (movingObject) => {
                             movingObject.Active = true;
                         });
                    } 
                    if(rotating){
                         world.usingComponentData(level.EntityChildren[i], [game.RotatingObject], 
                         (rotatingObject) => { 
                             rotatingObject.Active = true;
                         });
                    }
                }                   
               }
           });            
        }
        static DeactivateLevel(world:ut.World, level:ut.Entity){
            world.usingComponentData(level, [game.Level], (level)=>{
                for(let i=0; i<level.EntityChildren.length; i++){
                    if(world.hasComponent(level.EntityChildren[i], game.MovingObject)){
                        world.usingComponentData(level.EntityChildren[i], [game.MovingObject, ut.Core2D.TransformLocalPosition], 
                         (movingObject, position) => {
                             movingObject.Active = false;
                             position.position = movingObject.StartingPosition;     
                        });              
                    }
                    if(world.hasComponent(level.EntityChildren[i], game.RotatingObject)){
                        world.usingComponentData(level.EntityChildren[i], [game.RotatingObject], 
                         (rotatingObject) => {
                            rotatingObject.Active = false;
                        });              
                    }
                }
            });            
        }

        static EndGame(world:ut.World){             
            world.usingComponentData(PoolObstacleSpawnerSystem.HelperEntity, 
                [game.ObstacleSpawnerHelper], (helper) =>{
                 PoolObstacleSpawnerSystem.DeactivateLevel(world, helper.CurrentLevel);              
            });
        }


    }
}

/**if(world.exists(level) && !level.isNone()){
               
            } */