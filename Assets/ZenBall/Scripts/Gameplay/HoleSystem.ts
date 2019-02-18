
namespace game {

    /** New System */
    export class HoleSystem extends ut.ComponentSystem {
        OnUpdate():void {
            //console.log ("Checking " + HoleSystem.CheckNewLevel);
            if( GameSystem.CurrentGameMode != GameState.Playing){
                return;
            } 
            
            const HoleAudioSource = this.world.getEntityByName("HoleAudioSource");
            
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Hole],
                (entity, hitboxoverlapresults, coin) => {
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, game.Ball)){        
                            HoleSystem.NextLevel(this.world);
                            if(!HoleAudioSource.isNone()){
                                if (!this.world.hasComponent(HoleAudioSource, ut.Audio.AudioSourceStart)) {
                                    this.world.addComponent(HoleAudioSource, ut.Audio.AudioSourceStart);
                                }         

                            }
                        }
                        
                    }                
            });
        }
        
        static NextLevel(world:ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.NewLevel(world);      
            
            const winAudioObject = world.getEntityByName("WinLevel");    

            world.usingComponentData(winAudioObject,
                [ut.Entity, ut.Audio.AudioSource], 
                (entity, audiosource) => {    
                    if (!world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                        world.addComponent(entity, ut.Audio.AudioSourceStart);
                    }                    
            });        

            GameSystem.AddScore(10, world);
        }
       
    }
}

