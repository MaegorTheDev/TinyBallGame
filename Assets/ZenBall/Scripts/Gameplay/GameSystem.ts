
namespace game {

    /** New System */
    export class GameSystem extends ut.ComponentSystem {
        static BallRadius = 0;
 
        static spawnCoins;
        static spawnObstacles = false;


        //static MaxPlays = 3;

        //TODO Might Change
        static playsPerLevel = 1;
        static currentPlays  = 0;
        static initialPlays = 1;

        static CurrentGameMode;
        static StartFirstLevel = true;
        static isInTutorial = false;

        OnUpdate():void {                   
            if(GameSystem.StartFirstLevel && !GameSystem.isInTutorial){
                GameSystem.RestartWorld(this.world);
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


        static RestartWorld(world: ut.World){
            if(GameSystem.isInTutorial){
                TutorialSystem.ResetTutorial(world);
                return;
            }
            NextLevelSystem.checkNextLevel = false; 
            GameSystem.StartBall(world);            
            //CoinSpawnSystem.resetRandomInterval();    
          
            GameSystem.CurrentGameMode = game.GameState.Waiting;
            GameSystem.currentPlays =  GameSystem.initialPlays;
            JsonObstacleSpawner.currentGroup = 0;            
            NextLevelSystem.actualCoins = 0 ;               

            GameSystem.spawnObstacles = true;     

            GameSystem.ShowMainScreen(world);      
            ShotsUISystem.UpdateShotsPeg(world);
        }

        static NewLevel(world: ut.World){
            NextLevelSystem.checkNextLevel = false;
            if(GameSystem.BallRadius == 0){
                const ball = world.getEntityByName("Ball");	  
                world.usingComponentData(ball,[game.Ball, ut.Core2D.TransformLocalScale], (ball, scale) => {
                    GameSystem.BallRadius = scale.scale.x/2;
                });   
            }                       
            if(GameSystem.isInTutorial){
                TutorialSystem.nextTutorial = true;
                return;
            }
            GameSystem.DestroyObjects(world);
            //CoinSpawnSystem.increaseRandomInterval();
            GameSystem.currentPlays +=  GameSystem.playsPerLevel;
            ShotsUISystem.UpdateShotsPeg(world);            
            NextLevelSystem.actualCoins = 0 ;  
            GameSystem.spawnObstacles = true;                  
        }

        
        static Play(world){
            if(GameSystem.currentPlays != 0){
                this.currentPlays --;                
                ShotsUISystem.UpdateShotsPeg(world);                
                GameSystem.DestroyMainScreen(world);
            }
            
            GameSystem.DestroyMainScreen(world);
        }
        
        static NoShotsSound(world: ut.World){            
            const source = world.getEntityByName("NoShots");	  
            if (!world.hasComponent(source, ut.Audio.AudioSourceStart))
                world.addComponent(source, ut.Audio.AudioSourceStart);
       
        }

        static ShowMainScreen(world:ut.World){
            ut.EntityGroup.instantiate(world, 'game.GameStart'); 
        }

        static DestroyMainScreen(world:ut.World){
            ut.EntityGroup.destroyAll(world, 'game.GameStart');
        }

        static EndGame(world:ut.World){
            if(!GameSystem.isInTutorial){
                ut.EntityGroup.instantiate(world, 'game.GameOver'); 
                GameSystem.CurrentGameMode = GameState.GameEnd;
                GameSystem.DestroyObjects(world);
            } else {
                GameSystem.RestartWorld(world);
            }
        }

        static DestroyEndScreen(world:ut.World){
            ut.EntityGroup.destroyAll(world, 'game.GameOver');
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
                    renderer.size = new Vector2(1,1);
            
             });
            }          
           
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


