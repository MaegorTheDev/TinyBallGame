
namespace game {

    /** New System */
    export class GameSystem extends ut.ComponentSystem {
        static BallRadius = 0; 
        static spawnCoins;
        static spawnObstacles = false;

        static playsPerLevel = 1;
        static currentPlays  = 0;
        static initialPlays = 1;

        static score = 0;
 
        static CurrentGameMode;
        static StartFirstLevel = true;
        static isInTutorial = false;

        OnUpdate():void {                   
            if(GameSystem.StartFirstLevel && !GameSystem.isInTutorial){
                GameSystem.ShowMainScreen(this.world);
                GameSystem.StartFirstLevel = false;
            }     
        }
        static PlayGame(world: ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;
            ut.EntityGroup.instantiate(world, 'game.GameplayEntityGroup');            
            GameSystem.DestroyObjects(world);      
            GameSystem.currentPlays = 0 ;                           
            GameSystem.isInTutorial = false;              
            //GameSystem.RestartWorld(world);
        }      

        static AddScore(score:number, world:ut.World){
            GameSystem.score += score;
            ScoreSystem.UpdateScore(world);
        }

        static SetScore(score:number, world:ut.World){
            GameSystem.score = score;
            ScoreSystem.UpdateScore(world);
        }


        static RestartWorld(world: ut.World){        
            if(GameSystem.isInTutorial){
                TutorialSystem.ResetTutorial(world);
                return;
            }
            GameSystem.StartBall(world);            
            //CoinSpawnSystem.resetRandomInterval();    
          
            GameSystem.CurrentGameMode = game.GameState.Waiting;
            GameSystem.currentPlays =  GameSystem.initialPlays;
            JsonObstacleSpawner.currentGroup = 0;            
            CoinCollisionSystem.actualCoins = 0 ;               

            GameSystem.spawnObstacles = true;     
            GameSystem.SetScore(0, world); 
            ShotsUISystem.UpdateShotsPeg(world);
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
            GameSystem.DestroyObjects(world);
            //CoinSpawnSystem.increaseRandomInterval();
            GameSystem.currentPlays +=  GameSystem.playsPerLevel;
            ShotsUISystem.UpdateShotsPeg(world);            
            CoinCollisionSystem.actualCoins = 0 ;  
            GameSystem.spawnObstacles = true;                  
        }

        
        static Play(world){
            if(GameSystem.currentPlays != 0){
                this.currentPlays --;                
                ShotsUISystem.UpdateShotsPeg(world);       
            }            
        }
        static GameOverScreen:ut.Entity[];
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
                GameSystem.GameOverScreen = ut.EntityGroup.instantiate(world, 'game.GameOver'); 
                GameSystem.CurrentGameMode = GameState.GameEnd;
                GameSystem.DestroyObjects(world);
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
            GameSystem.GameOverScreen.forEach(element => {                
                ut.Core2D.TransformService.destroyTree(world, element);
            });
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.RestartWorld(world);
        }

        static StartBall(world: ut.World){
            const ball = world.getEntityByName("Ball");	  
            if(ball.isNone()){                
                ut.EntityGroup.instantiate(world, 'game.BallGroup'); 
            }              
            else{ 
                world.usingComponentData(ball,[ut.Entity, game.Ball, ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRendererOptions], (entity, ball, position, renderer) => {
                    let setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(0,0);                              
                    if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                        
                        world.setComponentData(entity, setVelocity);
                    else
                        world.addComponentData(entity, setVelocity);
                                            
                    ball.Power = 0;
                    ball.MoveDirection = new Vector2(0,0);
                    ball.Shoot = false;
                    position.position = new Vector3(0,0);
                    //renderer.size = new Vector2(1,1.2);
            
             });
            }          
           
        }
        
        
        static NoShotsSound(world: ut.World){            
            const source = world.getEntityByName("NoShots");	  
            if (!world.hasComponent(source, ut.Audio.AudioSourceStart))
                world.addComponent(source, ut.Audio.AudioSourceStart);
       
        }

        static DestroyObjects(world: ut.World){
            ut.EntityGroup.destroyAll(world, 'game.Coin');            
            ut.EntityGroup.destroyAll(world, 'game.Obstacle');  
            ut.EntityGroup.destroyAll(world, 'game.Hole');
        }

        static randomIntFromInterval(min,max)  // min and max included
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
    }   
}


