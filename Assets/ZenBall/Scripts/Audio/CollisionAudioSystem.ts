namespace game {
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(ut.Physics2D.ColliderContacts)
    @ut.requiredComponents(ut.Core2D.Sprite2DRenderer)
    export class CollisionAudioSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            const hitAudioObject = this.world.getEntityByName("HitObject");    
            this.world.forEach([ut.Entity ,ut.Physics2D.ColliderContacts, game.Ball],
                (entity, collidercontacts) => {      
                    if (collidercontacts.contacts.length == 0 ){
                        return;
                    }
                    for (let i = 0; i < collidercontacts.contacts.length; i++) {
                        let otherEntity = collidercontacts.contacts[i];
                        if(!this.world.exists(otherEntity)){
                          continue;
                        }
            
                        if(this.world.hasComponent(otherEntity, game.HitSound)){
                            this.world.usingComponentData(hitAudioObject,
                                [ut.Entity, game.HitAudio, ut.Audio.AudioSource], 
                                (entity, hitAudio, audiosource) => {     
                                    let randomAudioClip= 
                                        hitAudio.HitAudioClips[ GameSystem.randomIntFromInterval(0, hitAudio.HitAudioClips.length - 1)];
                                        audiosource.clip = randomAudioClip;
                                    
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
