
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
                    //If the ball hits an object with a Lethal component
                    if(this.world.hasComponent(otherEntity, casualgf.Lethal)){
                           //Ends the game   
                           LethalObstaclesSystem.EndGame(this.world);                 
                        return;
                    }                           
                }             
            });

        }
        static EndGame(world:ut.World){
            //Stops the ball and ends the game
            BallSystem.ChangeBallSpeed(new Vector2, world);
            GameSystem.EndGame(world);            
            const loseGameSound = world.getEntityByName("Lose");
            //Lose game sound effect
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }                
        }

    }
}
