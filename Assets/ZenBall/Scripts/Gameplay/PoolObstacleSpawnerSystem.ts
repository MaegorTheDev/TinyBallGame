
namespace game {

    /** New System */
    export class PoolObstacleSpawnerSystem extends ut.ComponentSystem {
        static CurrentGroup = 0;
        static CurrentLevel = 0;

        OnUpdate():void {
        }

        static SpawnObstacles(world:ut.World){
            let objectSpawner = world.getEntityByName("Spawners");
            if(objectSpawner.isNone()){                  
                ut.EntityGroup.instantiate(world, 'game.GameplayEntityGroup');   
                objectSpawner  = world.getEntityByName("Spawners");
            }
            let changedGroup = PoolObstacleSpawnerSystem.CheckGroupStatus(world, objectSpawner);
            //Change group
            if(changedGroup){
              PoolObstacleSpawnerSystem.ChangeCurrentLevelGroup(world, objectSpawner);
            }               
            //Spawn a level
            PoolObstacleSpawnerSystem.SpawnLevel(world, objectSpawner);
        }

        static CheckGroupStatus(world:ut.World, objectSpawner:ut.Entity): boolean{
            let result = false;
            world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
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

        static ChangeCurrentLevelGroup(world: ut.World, objectSpawner:ut.Entity){
            //Destroy last group   
            if(PoolObstacleSpawnerSystem.CurrentGroup > 0){         
                world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
                    (helper)=>{ 
                        ut.Core2D.TransformService.destroyTree(world, helper.CurrentGroup);  
                });       
            }           

            //Instantiate next Group
            PoolObstacleSpawnerSystem.CurrentGroup++;
            let group = ut.EntityGroup.instantiate(world, "game.Group"+PoolObstacleSpawnerSystem.CurrentGroup); 
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
            let currentGroup = group[0];
            world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
                (helper)=>{ 
                helper.CurrentGroup = group[0];
            });

            let index = 0;
            for(let i=0; i< group.length; i++){
                if(world.hasComponent(group[i], game.Level)){   
                    world.usingComponentData(currentGroup, [game.LevelGroup],(Levelgroup) => {
                        if(world.exists(group[i])){
                            Levelgroup.Levels[index] = group[i];
                            index++;
                        }
                    });  
               
                    world.usingComponentData(group[i], [ut.Core2D.TransformLocalPosition], (transform) =>{
                        transform.position = new Vector3(0,-250);
                    });
                }                
                
            }
        }

        static SpawnLevel(world:ut.World, objectSpawner:ut.Entity){            
            CoinSpawnSystem.ResetCoins(world);
            let levels;            
            world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
                (helper)=>{ 
                world.usingComponentData(helper.CurrentGroup, [game.LevelGroup], (levelGroup) =>{
                    levels = levelGroup.Levels;
                });
                if(!helper.CurrentLevel.isNone() && world.exists(helper.CurrentLevel)){
                    world.usingComponentData(helper.CurrentLevel, [ut.Core2D.TransformLocalPosition], (position) =>{
                        position.position = new Vector3(0,-200);                    
                    });
                }
            });
           

            let randomIndex = Math.floor(Math.random() * levels.length);
            let randomLevel:ut.Entity = levels[randomIndex];
            if(!randomLevel.isNone()){                     
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
                    
                });
                world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
                    (helper)=>{ 
                    helper.CurrentLevel = randomLevel;
                });
                PoolObstacleSpawnerSystem.CurrentLevel++;
                CoinSpawnSystem.SpawnCoins(world);
            }        
        }

        static ResetGroups(world){
            PoolObstacleSpawnerSystem.CurrentGroup = 0;            
            PoolObstacleSpawnerSystem.CurrentLevel = 0;
            let currentGroup = world.getEntityByName("game.Group"+PoolObstacleSpawnerSystem.CurrentGroup);             
            
            if(!currentGroup.isNone())
                ut.Core2D.TransformService.destroyTree(world, currentGroup);  
        }


    }
}
