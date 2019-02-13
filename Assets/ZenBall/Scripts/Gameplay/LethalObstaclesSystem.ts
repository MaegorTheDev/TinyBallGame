
namespace game {

    /** New System */
    export class LethalObstaclesSystem extends ut.ComponentSystem {
        
        OnUpdate():void { 
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
        
                    if(this.world.hasComponent(otherEntity, game.Lethal)){
                           // console.log("LethalObstacleSystem " + this.world.getEntityName(entity));      
                           LethalObstaclesSystem.EndGame(this.world);                 
                        return;
                    }                           
                }             
            });

        }
        static EndGame(world:ut.World){
            GameSystem.EndGame(world);
            
            const loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }          
            
            //TimeLethalitySystem.CurrentTime = 0;     
            /** 
            world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], (entity, ball, player ) => {               
                player.paused = true;
                player.time = 0;
            });*/
            

        }

    }
}
