
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

            BallSystem.SetPuttPosition(world, startingPosition);
            BallSystem.SetBallPosition(startingPosition, world);            
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RespawnEndScreen(world);
        }

        static RestartRespawns(){
            RespawnSystem.actualRespawns = 1;
        }

        static ChangeAlphaRespawnCoinNumber(world:ut.World, alpha:number){            
            let coinsToRespawn = world.getEntityByName("RespawnCoinNumberRender") ;
            if(!coinsToRespawn.isNone()){
                world.usingComponentData(coinsToRespawn, [game.NumberObject], (numberObject)=>{
                    if(RespawnSystem.actualRespawns * 10 != numberObject.Number){
                        numberObject.Number = RespawnSystem.actualRespawns * 10;
                        numberObject.Render = true;
                     }

                    let numberObjects = numberObject.CurrentNumbers;
                    for(let i = 0; i<numberObjects.length;i++){
                        world.usingComponentData(numberObjects[i], [ut.Core2D.Sprite2DRenderer], (sprite) =>{
                            sprite.color = new ut.Core2D.Color(sprite.color.r, sprite.color.g, sprite.color.b, alpha);
                        });
                    }
                });
            }
        }
    }
}
