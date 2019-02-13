
namespace game {

    /** New System */
    export class TimeLethalitySystem extends ut.ComponentSystem {
        static TimeToGetNextCoin = 8;
        static TimeToStartBlinking = 3;
        static CurrentTime=0;
        static frameCount;

        
        //static frameCount = 0;
        
        OnUpdate():void {      
            
            return;
                 

            //Dont use this.
            const audioSource = this.world.getEntityByName("LowLive");	      
            if(GameSystem.CurrentGameMode == GameState.Tutorial){
                return;
            }

            if(GameSystem.CurrentGameMode != game.GameState.Playing){
                if(TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime < TimeLethalitySystem.TimeToStartBlinking){                   
                    TimeLethalitySystem.PlayLowHealthAudio(this.world);
                }
                
                return; 
            }       
            
            let dt = this.scheduler.deltaTime();
            TimeLethalitySystem.CurrentTime += dt;     

            //console.log(TimeLethalitySystem.CurrentTime );
            if(TimeLethalitySystem.CurrentTime > TimeLethalitySystem.TimeToGetNextCoin){
               TimeLethalitySystem.EndGame(this.world, audioSource);
                                
            } else {                
                TimeLethalitySystem.CheckBlinking(this.world, audioSource);       
            }
            TimeLethalitySystem.frameCount ++;
        }

        static CheckBlinking(world:ut.World, audioSource:ut.Entity){
            let percentage = (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime)/3;     
                if(TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime < TimeLethalitySystem.TimeToStartBlinking){
                    world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], (entity, ball, player ) => {               
                        player.paused = false;                       
                        player.speed = 7 * (1 - percentage)  ;
                    });        
                    TimeLethalitySystem.PlayLowHealthAudio(world);   
                }else {
                    world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], (entity, ball, player ) => {               
                        player.paused = true;
                        player.time = 0;
                    });
                    if(world.hasComponent(audioSource, ut.Audio.AudioSourceStop)){                        
                        world.addComponent(audioSource, ut.Audio.AudioSourceStop);  
                    }                  
                    TimeLethalitySystem.frameCount = 0;                                
                }

        }

        static EndGame(world:ut.World, audioSource:ut.Entity){
            GameSystem.EndGame(world);
            TimeLethalitySystem.CurrentTime = 0;
            
            const loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }               
            world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], (entity, ball, player ) => {               
                player.paused = true;
                player.time = 0;
            });
            
            world.addComponent(audioSource, ut.Audio.AudioSourceStop);
            TimeLethalitySystem.frameCount = 0;

        }

        static PlayLowHealthAudio(world: ut.World ){
            
            const audioSource = world.getEntityByName("LowLive");	
            let percentage = (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime)/3; 
            if(percentage > 0.60){
                if(TimeLethalitySystem.frameCount % 40 == 0 ){                        
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }
            }
            else if(percentage >= 0.10){
                if(TimeLethalitySystem.frameCount % 20 == 0 ){                        
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }

            } else {                
                if(TimeLethalitySystem.frameCount % 10 == 0 ){                        
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }

            }
            
        }

        static ResetTimer(){
            TimeLethalitySystem.CurrentTime = 0;
        }
    }
}
