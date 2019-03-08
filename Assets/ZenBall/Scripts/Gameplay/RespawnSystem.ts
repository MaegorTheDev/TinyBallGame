
namespace game {

    /** New System */
    export class RespawnSystem extends ut.ComponentSystem {
        static actualRespawns:number = 1;
        OnUpdate():void {

        }
        static Respawn(world:ut.World){
            if(RespawnSystem.actualRespawns * 10 > GameSystem.coins){
                return;
            } 
            GameSystem.coins -= (RespawnSystem.actualRespawns * 10);       

            FBInstantService.getInstance().UpdateCoins(GameSystem.coins);
            FBInstantService.getInstance().Respawned(PoolObstacleSpawnerSystem.CurrentGroup,   
                 PoolObstacleSpawnerSystem.CurrenLevelIndex, RespawnSystem.actualRespawns * 10);  
               
            ScoreSystem.UpdateScore(world);
            RespawnSystem.actualRespawns++;
            let objectSpawner = world.getEntityByName("Spawners");
            if(objectSpawner.isNone()){                  
                return;
            }
            let startingPosition;
            world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], (helper) =>{
                world.usingComponentData(helper.CurrentLevel, [game.Level], (level)=>{
                    startingPosition = level.StartingPosition;
                });
            });
            let putt = world.getEntityByName("Putt");
            if(!putt.isNone()){
                world.usingComponentData(putt,  [ut.Core2D.TransformLocalPosition], 
                    (position,)=>{   
                        position.position = startingPosition;
                    });
            }

            BallSystem.SetBallPosition(startingPosition, world);            
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RespawnEndScreen(world);
        }

        static RestartRespawns(){
            RespawnSystem.actualRespawns = 1;
        }
    }
}
