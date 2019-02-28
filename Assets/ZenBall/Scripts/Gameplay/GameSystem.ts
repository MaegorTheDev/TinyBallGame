
namespace game {

    /** New System */
    export class GameSystem extends ut.ComponentSystem {
        static BallRadius = 0; 

        //static playsPerLevel = 1;
       //static currentPlays  = 0;
        //static initialPlays = 1;

        //static score = 0;
        static coins = 10;
        static CurrentGameMode;
        static StartFirstLevel = true;
        static isInTutorial = false;

        OnUpdate():void {                   
            if(GameSystem.StartFirstLevel && !GameSystem.isInTutorial){
                GameSystem.ShowMainScreen(this.world);
                GameSystem.StartFirstLevel = false;
            }     

            
            const coinScore = this.world.getEntityByName("CoinsRender");	  
            if(!coinScore.isNone()){
                this.world.usingComponentData(coinScore, [game.NumberObject], (numberObject)=>{
                    numberObject.Number = GameSystem.coins;
                });
            }
        }
        static PlayGame(world: ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;   
            GameSystem.isInTutorial = false;              
            //GameSystem.DestroyObjects(world);      
            //GameSystem.currentPlays = 0 ;                                   
            //GameSystem.RestartWorld(world);
        }      

        static AddCoin(world:ut.World){
            GameSystem.coins++;
            ScoreSystem.UpdateScore(world);
        }

        static SetCoin(coinNumber:number, world:ut.World){
            GameSystem.coins = coinNumber;
            ScoreSystem.UpdateScore(world);
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
                ut.EntityGroup.instantiate(world, 'game.GameOver'); 
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
        static ShowMainScreen(world:ut.World){
            GameSystem.MainScreen = ut.EntityGroup.instantiate(world, 'game.GameStart'); 
            GameSystem.CurrentGameMode = GameState.GameStart;
        }

        static DestroyMainScreen(world:ut.World){
            GameSystem.MainScreen.forEach(element => {                        
                ut.Core2D.TransformService.destroyTree(world, element);
            });
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
            
            ut.EntityGroup.destroyAll(world,"game.GameOver");
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
            ut.EntityGroup.destroyAll(world,"game.GameOver");
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


