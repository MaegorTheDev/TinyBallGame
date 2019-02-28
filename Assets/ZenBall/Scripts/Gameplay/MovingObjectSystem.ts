
namespace game {

    /** New System */
    export class MovingObjectSystem extends ut.ComponentSystem {
        static firstFrame;
        OnUpdate():void {
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition ,game.MovingObject], 
                (entity,position, movingObject) =>{
                //If the object is not active, keep it in starting position;
                if(!movingObject.Active || movingObject.TimeToGetToLimit == 0){   
                    position.position = movingObject.StartingPosition;
                    let setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(0,0);                             
                    if (this.world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                        this.world.setComponentData(entity, setVelocity);
                    else
                        this.world.addComponentData(entity, setVelocity);     
                    return;
                } 
   
                if(movingObject.Speed.x == 0 && movingObject.Speed.y == 0){
                    //Calculate Speed
                    movingObject.StartingPosition = position.position;
                    let diference = new Vector2(movingObject.Limit.x - position.position.x, movingObject.Limit.y - position.position.y);
			        let magnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
                    let normalized =  diference.normalize();

                    let speedMagnitude = magnitude / movingObject.TimeToGetToLimit;
                    let speedVector = normalized.multiplyScalar(speedMagnitude);

                    movingObject.Speed = speedVector;        
                    movingObject.Direction = 1;
                    movingObject.HasPong = true;
                }
                //Add an speed component
                if(!this.world.hasComponent(entity, ut.Physics2D.Velocity2D)){
                    this.world.addComponent(entity, ut.Physics2D.Velocity2D);  
                };

                //Set the calculated speed
                let setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = movingObject.Speed.multiplyScalar(movingObject.Direction) ;                             
                if (this.world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                    this.world.setComponentData(entity, setVelocity);
                else
                    this.world.addComponentData(entity, setVelocity);     


                //Ping pong it
                let currentPosDiference;
                let currentMagnitude
                
                if(movingObject.HasPong){
                    currentPosDiference = new Vector2(movingObject.Limit.x - position.position.x, 
                        movingObject.Limit.y - position.position.y);
                    currentMagnitude = Math.sqrt(currentPosDiference.x * currentPosDiference.x + currentPosDiference.y * currentPosDiference.y);               
                }
                else if( movingObject.HasPing){
                    currentPosDiference = new Vector2(position.position.x - movingObject.StartingPosition.x, 
                        position.position.y - movingObject.StartingPosition.y );
                    currentMagnitude = Math.sqrt(currentPosDiference.x * currentPosDiference.x + currentPosDiference.y * currentPosDiference.y);
                }                                
                //check Ping
                if(movingObject.HasPong  && currentMagnitude <= 1){                     
                     movingObject.Direction *= -1; 
                     movingObject.HasPing = true;
                     movingObject.HasPong = false;                    
                }
                //check Pong
                else if(movingObject.HasPing && currentMagnitude <= 1){
                    movingObject.Direction *= -1;                        
                    movingObject.HasPing = false;
                    movingObject.HasPong = true;                                    
               }
                
            });
        }

        
    }
}
