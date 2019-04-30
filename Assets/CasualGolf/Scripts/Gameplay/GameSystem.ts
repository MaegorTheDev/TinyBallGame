
namespace casualgf {

    /** New System */
    export class GameSystem extends ut.ComponentSystem {
        static BallRadius = 0; 
        static world:ut.World;
        
        static coins = 0;
        static CurrentGameMode;
        static isInTutorial = false;
        static fbloadEntity: ut.Entity;        
        static loaded = false;

        OnUpdate():void {                 
            
            const coinScore = this.world.getEntityByName("CoinsRender");	  
            if(!coinScore.isNone()){
                this.world.usingComponentData(coinScore, [casualgf.NumberObject], (numberObject)=>{
                   // updates the coin score number to render
                   if(GameSystem.coins != numberObject.Number){
                      numberObject.Number = GameSystem.coins;
                      numberObject.Render = true;
                   }
                });
            }
            //Gets the entity of the object
            GameSystem.fbloadEntity = this.world.getEntityByName("FBItem");	
            GameSystem.world = this.world;
        }

        //Starts the game
        static PlayGame(world: ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;   
            GameSystem.isInTutorial = false;            
        }      

        //Adds a Coin to the total
        static AddCoin(world:ut.World){
            GameSystem.coins++;
//            ScoreSystem.UpdateScore(world);
            //Updates the coins in the fb object
            FBInstantService.getInstance().SetCoins(GameSystem.coins);
        }
        

        //Adds more than 1 coin 
        static AddCoins(world:ut.World, coins){
            GameSystem.coins += coins;
            //ScoreSystem.UpdateScore(world);
            FBInstantService.getInstance().SetCoins(GameSystem.coins);
        }

        //Changes the coin number to the parameter
        static SetCoin(coinNumber:number){
            GameSystem.coins = coinNumber;
        }

        //Resets all the systems and the positions and then spawns the next obstacles
        static RestartWorld(world: ut.World){        
            if(GameSystem.isInTutorial){
                TutorialSystem.ResetTutorial(world);
                return;
            }       
            PoolObstacleSpawnerSystem.ResetGroups(world);     

            RespawnSystem.RestartRespawns();                 
            RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 0);

            GameSystem.CurrentGameMode = casualgf.GameState.Waiting;
            PoolObstacleSpawnerSystem.SpawnObstacles(world);
        }

        //Starts a new level
        static NewLevel(world: ut.World){            
            //Updates the Tutorial system if its in tutoral                 
            if(GameSystem.isInTutorial){
                TutorialSystem.nextTutorial = true;
                return;
            }
            //If its playing the game, spawns a new level
            PoolObstacleSpawnerSystem.SpawnObstacles(world); 
        }

        static EndGame(world:ut.World){
            if(!GameSystem.isInTutorial){
                //HideThePutt
                BallSystem.SetPuttPosition(world, new Vector3(0,-100));
                //Shows the game over screen
                ut.EntityGroup.instantiate(world, 'casualgf.GameOverScreen');
                //Sends the event
                FBInstantService.getInstance().FailedLevelEvent(PoolObstacleSpawnerSystem.CurrentGroup,    PoolObstacleSpawnerSystem.CurrenLevelIndex);  
                
                GameSystem.CurrentGameMode = GameState.GameEnd;                
                RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 1);
                //GameSystem.DestroyObjects(world);
            } else {
                TutorialSystem.ResetTutorial(world);
            }
        }

        static MainScreen:ut.Entity[];
        //Shows the menu screen
        static ShowMainScreen(worldP?:ut.World){   
            let world = worldP;                       
            if(TutorialSystem.playTutorial){
                return;
            } 
            if(world == null || world == undefined){
                //Sets the world 
                world = GameSystem.world;
            }
            ut.EntityGroup.instantiate(world, 'casualgf.GameStart'); 
            GameSystem.CurrentGameMode = GameState.GameStart;      
            GameSystem.loaded = true;      
            if(FBInstantService.getInstance().isAvailable){
                //Shows the profile picture if the instant service is available
                FBInstantService.getInstance().ShowProfilePic(world);
            }            
        }
        //Destroys the Main scene
        static DestroyMainScreen(world:ut.World, RestartWorld:boolean = true){            
            ut.EntityGroup.destroyAll(this.world, "casualgf.GameStart");
            if(RestartWorld){
                GameSystem.CurrentGameMode = GameState.Waiting;
                GameSystem.RestartWorld(world);
            }
        }
        
        static DestroyEndScreen(world:ut.World){   
            //Check if it should show an ad                         
            RespawnSystem.ChangeAlphaRespawnCoinNumber(world, 0);
            ut.EntityGroup.destroyAll(world,"casualgf.GameOverScreen");       

            let fbOject = world.getEntityByName("FBItem");

            //Check if the game must show an add now
            if(FBInstantService.getInstance().isAvailable){
                world.usingComponentData(fbOject, [casualgf.AdControlerHelper], (adObjectData)=>{
                    adObjectData.CurrentGamesLosed++;                        
                    //Not enough games losed, preload an add
                    if(adObjectData.CurrentGamesLosed < adObjectData.GamesToAd){                   
                        GameOverAdClass.getInstance().PreLoadAdd();       
                        GameSystem.RestartWorld(world);                
                    } else {
                        //shows the ad and then restarts the world
                        adObjectData.CurrentGamesLosed = 0;
                        GameOverAdClass.getInstance().ShowIntersititialAd().then(function() {
                            // Perform post-ad success operation
                            console.log('Interstitial ad finished successfully');                              
                            GameSystem.RestartWorld(world);                  
                        }) 
                        .catch(function(e) {
                            console.error(e.message);
                        });
                    }
                });
            } else {                
                GameSystem.RestartWorld(world);                
            }         

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


