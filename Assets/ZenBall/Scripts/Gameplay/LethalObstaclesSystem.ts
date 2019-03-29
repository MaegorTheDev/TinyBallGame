
namespace casualgf {

    /** New System */
    export class LethalObstaclesSystem extends ut.ComponentSystem {
        
        OnUpdate():void { 
            this.world.forEach([ut.Entity ,ut.Physics2D.ColliderContacts, casualgf.Ball],
            (entity, collidercontacts) => {      
                if (collidercontacts.contacts.length == 0 ){
                    return;
                }
                for (let i = 0; i < collidercontacts.contacts.length; i++) {
                    let otherEntity = collidercontacts.contacts[i];
                    if(!this.world.exists(otherEntity)){
                      continue;
                    }
        
                    if(this.world.hasComponent(otherEntity, casualgf.Lethal)){
                           // //console.log("LethalObstacleSystem " + this.world.getEntityName(entity));      
                           LethalObstaclesSystem.EndGame(this.world);                 
                        return;
                    }                           
                }             
            });

        }
        static EndGame(world:ut.World){
            BallSystem.ChangeBallSpeed(new Vector2, world);
            GameSystem.EndGame(world);            
            const loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }                
        }

    }
}
