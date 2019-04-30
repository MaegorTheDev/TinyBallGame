
namespace casualgf {

    /** New System */
    export class RespawnSystem extends ut.ComponentSystem {
        //Keeps taps in the number of respawns 
        static actualRespawns:number = 1;
        OnUpdate():void {
            //Nothing to update
        }

        static Respawn(world:ut.World){
            //If it doesnt have enough coins, dont do anything
            if(RespawnSystem.actualRespawns * 10 > GameSystem.coins){
                return;
            } 
            //Lower the coins
            GameSystem.coins -= (RespawnSystem.actualRespawns * 10);       

            //Saves the values in the fb user data
            FBInstantService.getInstance().SetCoins(GameSystem.coins);
            FBInstantService.getInstance().Respawned(PoolObstacleSpawnerSystem.CurrentGroup,   
                 PoolObstacleSpawnerSystem.CurrenLevelIndex, RespawnSystem.actualRespawns * 10);  
               
            //Changes the score
            //ScoreSystem.UpdateScore(world);
            //Adds one to the respawns
            RespawnSystem.actualRespawns++;
            let objectSpawner = world.getEntityByName("Spawners");
            if(objectSpawner.isNone()){                  
                return;
            }
            //Restarts the ball and the level
            let startingPosition;
            world.usingComponentData(objectSpawner, [casualgf.ObstacleSpawnerHelper], (helper) =>{
                world.usingComponentData(helper.CurrentLevel, [casualgf.Level], (level)=>{
                    startingPosition = level.StartingPosition;
                });
            });

            BallSystem.SetPuttPosition(world, startingPosition);
            BallSystem.SetBallPosition(startingPosition, world);            
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RespawnEndScreen(world);
        }

        //Restart the current number of respawns
        static RestartRespawns(){
            RespawnSystem.actualRespawns = 1;
        }

        //hides/shows of the number renderer
        static ChangeAlphaRespawnCoinNumber(world:ut.World, alpha:number){    
            let coinsToRespawn = world.getEntityByName("RespawnCoinNumberRender") ;
            if(!coinsToRespawn.isNone()){
                world.usingComponentData(coinsToRespawn, [casualgf.NumberObject], (numberObject)=>{
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
