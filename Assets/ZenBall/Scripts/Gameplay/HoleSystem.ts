
namespace casualgf {

    /** New System */
    export class HoleSystem extends ut.ComponentSystem {
        OnUpdate():void {
            ////console.log ("Checking " + HoleSystem.CheckNewLevel);
            if( GameSystem.CurrentGameMode != GameState.Playing){
                return;
            } 
            
            const HoleAudioSource = this.world.getEntityByName("HoleAudioSource");
            
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, casualgf.Hole],
                (entity, hitboxoverlapresults, hole) => {
                    if(!hole.Active){
                        return;
                    }                    
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, casualgf.Ball)){        
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
            FBInstantService.getInstance().SuccessLevelEvent(PoolObstacleSpawnerSystem.CurrentGroup,    PoolObstacleSpawnerSystem.CurrenLevelIndex); 
            GameSystem.NewLevel(world);       
        }
       
    }
}

