namespace casualgf {
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(ut.Physics2D.ColliderContacts)
    @ut.requiredComponents(ut.Core2D.Sprite2DRenderer)

    //This system monitores the collisions of marked items, and check if the collision is with the ball to play a sound
    export class CollisionAudioSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            
            //Dont play on ending.
            if(GameSystem.CurrentGameMode == GameState.GameEnd){
                return;
            }
            //Get the object with the component of "hit".
            const hitAudioObject = this.world.getEntityByName("HitObject");    
            this.world.forEach([ut.Entity ,ut.Physics2D.ColliderContacts, casualgf.Ball],
                (entity, collidercontacts) => {      
                    if (collidercontacts.contacts.length == 0 ){
                        return;
                    }
                    for (let i = 0; i < collidercontacts.contacts.length; i++) {
                        let otherEntity = collidercontacts.contacts[i];
                        //If they dont exist then continue, to avoy nullpointers
                        if(!this.world.exists(otherEntity)){
                          continue;
                        }
            
                        if(this.world.hasComponent(otherEntity, casualgf.HitSound)){
                            this.world.usingComponentData(hitAudioObject,
                                [ut.Entity, casualgf.HitAudio, ut.Audio.AudioSource], 
                                (entity, hitAudio, audiosource) => {     
                                    //Pick a random audio
                                    let randomAudioClip= 
                                        hitAudio.HitAudioClips[ GameSystem.randomIntFromInterval(0, hitAudio.HitAudioClips.length - 1)];
                                        audiosource.clip = randomAudioClip;
                                    //Play the clip
                                    if (!this.world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                                        this.world.addComponent(entity, ut.Audio.AudioSourceStart);
                                    }                    
                            });        
        
                            return;
                        }                           
                    }
                });
        }

        static PlayCoinSound(world){            
            //Plays a clip when the ball collides with an object
            const coinAudioObject = world.getEntityByName("CoinAudio");    

            world.usingComponentData(coinAudioObject,
                [ut.Entity, ut.Audio.AudioSource], 
                (entity, audiosource) => {    
                    if (!world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                        world.addComponent(entity, ut.Audio.AudioSourceStart);
                    }                    
            });        
        }
        
    }
}
