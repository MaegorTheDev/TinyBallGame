
namespace game {

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
                this.world.usingComponentData(coinScore, [game.NumberObject], (numberObject)=>{
                   // console.log("GameSystem current coins "  + GameSystem.coins);
                    numberObject.Number = GameSystem.coins;
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
            //CoinSpawnSystem.resetRandomInterval();              
            //GameSystem.currentPlays =  GameSystem.initialPlays;  
            PoolObstacleSpawnerSystem.ResetGroups(world);     
            RespawnSystem.RestartRespawns();     
            GameSystem.CurrentGameMode = game.GameState.Waiting;
            PoolObstacleSpawnerSystem.SpawnObstacles(world);
        }

        static NewLevel(world: ut.World){
            
            if(GameSystem.BallRadius == 0){
                const ball = world.getEntityByName("Ball");	  
                world.usingComponentData(ball,[game.Ball, ut.Core2D.TransformLocalScale], (ball, scale) => {
                    GameSystem.BallRadius = scale.scale.x/2;
                });   
            }                       
            if(GameSystem.isInTutorial){
                TutorialSystem.ShowTutorialWinScreen(world);
                return;
            }
            //ShotsUISystem.UpdateShotsPeg(world);     
            PoolObstacleSpawnerSystem.SpawnObstacles(world); 
            
            
            //GameSystem.DestroyObjects(world);
            //CoinSpawnSystem.increaseRandomInterval();
            //GameSystem.currentPlays +=  GameSystem.playsPerLevel;
        }

        
        static Play(world){
        // if(GameSystem.currentPlays != 0){
        // this.currentPlays --;                
        //    ShotsUISystem.UpdateShotsPeg(world);       
        // }            
        }
        static EndGame(world:ut.World){
            if(!GameSystem.isInTutorial){
                //HideThePutt
                let putt = world.getEntityByName("Putt");
                if(!putt.isNone()){
                    world.usingComponentData(putt,  [ut.Core2D.TransformLocalPosition], 
                        (position,)=>{   
                            position.position = new Vector3(0, -100);
                        });
                }
                ut.EntityGroup.instantiate(world, 'game.GameOverScreen');
                FBInstantService.getInstance().FailedLevelEvent(PoolObstacleSpawnerSystem.CurrentGroup,    PoolObstacleSpawnerSystem.CurrenLevelIndex);  
                //console.log("Spawned " + GameSystem.GameOverScreen[0].index);
                GameSystem.CurrentGameMode = GameState.GameEnd;
                //PoolObstacleSpawnerSystem.EndGame(world);
                let coinsToRespawn = world.getEntityByName("RespawnCoinNumberRender") ;
                if(!coinsToRespawn.isNone()){
                    world.usingComponentData(coinsToRespawn, [game.NumberObject], (numberObject)=>{
                        numberObject.Number = RespawnSystem.actualRespawns * 10;
                        let numberObjects = numberObject.CurrentNumbers;
                        for(let i = 0; i<numberObjects.length;i++){
                            world.usingComponentData(numberObjects[i], [ut.Core2D.Sprite2DRenderer], (sprite) =>{
                                sprite.color = new ut.Core2D.Color(sprite.color.r, sprite.color.g, sprite.color.b, 1);
                            });
                        }
                    });
                }
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
            ut.EntityGroup.instantiate(world, 'game.GameStart'); 
            GameSystem.CurrentGameMode = GameState.GameStart;      
            GameSystem.loaded = true;      
            if(FBInstantService.getInstance().isAvailable){
                let profilePhoto = world.getEntityByName("GameStartPhoto");
                let fbItem = world.getEntityByName("FBItem");
                let playerData = world.getComponentData(fbItem, game.InitializeFBInstantComponent);
                let imageBase64 =  localStorage.getItem(playerData.PlayerID);
    
                 // Image2D
                let imgEntity = this.world.createEntity();
                this.world.addComponent(imgEntity, ut.Core2D.Image2D);
                let image = new ut.Core2D.Image2D();
                image.pixelsToWorldUnits = 1;
                this.world.setComponentData(imgEntity, image);
            
                // Image2DLoadFromFile
                let loader = new ut.Core2D.Image2DLoadFromFile();
                loader.imageFile = imageBase64;
                this.world.addComponentData(imgEntity, loader);
            
                // Sprite2D
                let sprite2DEntity = this.world.createEntity();
                let sprite2D = new ut.Core2D.Sprite2D();
                sprite2D.image = imgEntity;
                sprite2D.imageRegion = new ut.Math.Rect(0, 0, 1, 1);            
                sprite2D.pivot = new ut.Math.Vector2(0.5,0.5);
                this.world.addComponentData(sprite2DEntity, sprite2D);
            
               //Sprite2DRenderer
                var sprite2DRenderer = this.world.getComponentData(profilePhoto, ut.Core2D.Sprite2DRenderer);
                sprite2DRenderer.sprite = sprite2DEntity;
                this.world.setComponentData(profilePhoto, sprite2DRenderer);                
            }            
        }
        static DestroyMainScreen(world:ut.World){
            
            ut.EntityGroup.destroyAll(this.world, "game.GameStart");
           // GameSystem.MainScreen.forEach(element => { 
           //     console.log("Delete " + world.exists(element))   
            //    if(world.exists(element))                    
            //        ut.Core2D.TransformService.destroyTree(world, element);
            //});
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RestartWorld(world);
        }

        
        static DestroyEndScreen(world:ut.World){

            let coinsToRespawn = world.getEntityByName("RespawnCoinNumberRender") ;
            if(!coinsToRespawn.isNone()){                
                world.usingComponentData(coinsToRespawn, [game.NumberObject], (numberObject)=>{ 
                    let numberObjects = numberObject.CurrentNumbers;
                    for(let i = 0; i<numberObjects.length;i++){
                        world.usingComponentData(numberObjects[i], [ut.Core2D.Sprite2DRenderer], (sprite) =>{
                            sprite.color = new ut.Core2D.Color(sprite.color.r, sprite.color.g, sprite.color.b, 0);
                        });
                    }
                });
            }

            //GameSystem.GameOverScreen.forEach(element => {                
            //    ut.Core2D.TransformService.destroyTree(world, element);
            //});
            
            ut.EntityGroup.destroyAll(world,"game.GameOverScreen");
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RestartWorld(world);
        }     
        
        static RespawnEndScreen(world:ut.World){
            let coinsToRespawn = world.getEntityByName("RespawnCoinNumberRender") ;
            if(!coinsToRespawn.isNone()){
                world.usingComponentData(coinsToRespawn, [game.NumberObject], (numberObject)=>{ 
                    let numberObjects = numberObject.CurrentNumbers;
                    for(let i = 0; i<numberObjects.length;i++){
                        world.usingComponentData(numberObjects[i], [ut.Core2D.Sprite2DRenderer], (sprite) =>{
                            sprite.color = new ut.Core2D.Color(sprite.color.r, sprite.color.g, sprite.color.b, 0);
                        });
                    }
                });
            }
            ut.EntityGroup.destroyAll(world,"game.GameOverScreen");
        }     
        
        
        static NoShotsSound(world: ut.World){            
            const source = world.getEntityByName("NoShots");	  
            if (!world.hasComponent(source, ut.Audio.AudioSourceStart))
                world.addComponent(source, ut.Audio.AudioSourceStart);
       
        }

        static DestroyObjects(world: ut.World){
            //ut.EntityGroup.destroyAll(world, 'game.Coin');            
            //ut.EntityGroup.destroyAll(world, 'game.Obstacle');  
            //ut.EntityGroup.destroyAll(world, 'game.Hole');
        }

        static randomIntFromInterval(min,max)  // min and max included
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
    }   
}


