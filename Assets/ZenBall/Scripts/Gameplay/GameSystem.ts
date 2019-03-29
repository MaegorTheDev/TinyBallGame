
namespace casualgf {

    /** New System */
    export class GameSystem extends ut.ComponentSystem {
        static BallRadius = 0; 
        static world;
        //static playsPerLevel = 1;
       //static currentPlays  = 0;
        //static initialPlays = 1;

        //static score = 0;
        static coins = 0;
        static CurrentGameMode;
        static isInTutorial = false;
        static fbloadEntity: ut.Entity;        
        static loaded = false;

        OnUpdate():void {                 
            const coinScore = this.world.getEntityByName("CoinsRender");	  
            if(!coinScore.isNone()){
                this.world.usingComponentData(coinScore, [casualgf.NumberObject], (numberObject)=>{
                   // //console.log("GameSystem current coins "  + GameSystem.coins);
                   if(GameSystem.coins != numberObject.Number){
                      numberObject.Number = GameSystem.coins;
                      numberObject.Render = true;
                   }
                });
            }
            GameSystem.fbloadEntity = this.world.getEntityByName("FBItem");	
            GameSystem.world = this.world;
        }

        static PlayGame(world: ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;   
            GameSystem.isInTutorial = false;            
        }      

        static AddCoin(world:ut.World){
            GameSystem.coins++;
            ScoreSystem.UpdateScore(world);
            FBInstantService.getInstance().UpdateCoins(GameSystem.coins);
        }

        static SetCoin(coinNumber:number){
            GameSystem.coins = coinNumber;
        }


        static RestartWorld(world: ut.World){        
            if(GameSystem.isInTutorial){
                TutorialSystem.ResetTutorial(world);
                return;
            }       
            PoolObstacleSpawnerSystem.ResetGroups(world);     
            RespawnSystem.RestartRespawns();     

            GameSystem.CurrentGameMode = casualgf.GameState.Waiting;
            PoolObstacleSpawnerSystem.SpawnObstacles(world);
        }

        static NewLevel(world: ut.World){            
            if(GameSystem.BallRadius == 0){
                const ball = world.getEntityByName("Ball");	  
                world.usingComponentData(ball,[casualgf.Ball, ut.Core2D.TransformLocalScale], (ball, scale) => {
                    GameSystem.BallRadius = scale.scale.x/2;
                });   
            }                       
            if(GameSystem.isInTutorial){
                TutorialSystem.ShowTutorialWinScreen(world);
                return;
            }
            PoolObstacleSpawnerSystem.SpawnObstacles(world); 
        }

        static EndGame(world:ut.World){
            if(!GameSystem.isInTutorial){
                //HideThePutt
                BallSystem.SetPuttPosition(world, new Vector3(0,-100));
                ut.EntityGroup.instantiate(world, 'casualgf.GameOverScreen');
                FBInstantService.getInstance().FailedLevelEvent(PoolObstacleSpawnerSystem.CurrentGroup,    PoolObstacleSpawnerSystem.CurrenLevelIndex);  
                
                GameSystem.CurrentGameMode = GameState.GameEnd;                
                RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 1);
                //GameSystem.DestroyObjects(world);
            } else {
                TutorialSystem.ShowTutorialFailScreen(world);
            }
        }

        static MainScreen:ut.Entity[];
        static ShowMainScreen(worldP?:ut.World){
            let world = worldP;
            if(world == null || world == undefined){
                world = GameSystem.world;
            }
            ut.EntityGroup.instantiate(world, 'casualgf.GameStart'); 
            GameSystem.CurrentGameMode = GameState.GameStart;      
            GameSystem.loaded = true;      
            if(FBInstantService.getInstance().isAvailable){
                FBInstantService.getInstance().ShowProfilePic(world);
            }            
        }

        static DestroyMainScreen(world:ut.World){            
            ut.EntityGroup.destroyAll(this.world, "casualgf.GameStart");
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RestartWorld(world);
        }
        
        static DestroyEndScreen(world:ut.World){            
            RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 0);
            ut.EntityGroup.destroyAll(world,"casualgf.GameOverScreen");
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RestartWorld(world);
        }     
        
        static RespawnEndScreen(world:ut.World){           
            RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 0);
            ut.EntityGroup.destroyAll(world,"casualgf.GameOverScreen");
        }             

        static randomIntFromInterval(min,max)  // min and max included
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
    }   
}


