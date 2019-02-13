
namespace game {

    /** New System */
    export class HoleSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Hole],
                (entity, hitboxoverlapresults, coin) => {
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, game.Ball)){ 
                            HoleSystem.NextLevel(this.world);
                        }
                        
                    }                
            });
        }
        
        static NextLevel(world:ut.World){
            GameSystem.CurrentGameMode = GameState.Waiting;
            GameSystem.NewLevel(world);
        }
       
    }
}

