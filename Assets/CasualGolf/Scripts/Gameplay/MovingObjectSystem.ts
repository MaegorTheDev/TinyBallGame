
namespace casualgf {

    /** New System */
    export class MovingObjectSystem extends ut.ComponentSystem {
        OnUpdate():void {                        
        //Iterates over all Moving objects and applies the movement
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition ,casualgf.MovingObject], 
                (entity,position, movingObject) =>{

                //If the object is not active, keep it in starting position with velocity ;
                if(!movingObject.Active || movingObject.TimeToGetToLimit == 0){   
                    position.position = movingObject.StartingPosition;
                    MovingObjectSystem.SetVelocity(this.world, entity, new Vector2);
                    return;
                } 
                //If the game is over, set the velocity to 0
                if(GameSystem.CurrentGameMode == GameState.GameEnd){                     
                    MovingObjectSystem.SetVelocity(this.world, entity, new Vector2);
                    return;
                }
                //Initialize the moving object
                if(!movingObject.Initialized && movingObject.Speed.x == 0 && movingObject.Speed.y == 0){
                    //Calculate Speed
                    MovingObjectSystem.Initialize(this.world, entity);
                }
                //Sets the calculated velocity by the direction
                MovingObjectSystem.SetVelocity(this.world, entity, movingObject.Speed.multiplyScalar(movingObject.Direction) );
                
                //Move the object
                MovingObjectSystem.Move(this.world, entity);
                
            });
        }

        static SetVelocity(world:ut.World, entity:ut.Entity, newVelocity:Vector2){
            let setVelocity = new ut.Physics2D.SetVelocity2D;
            setVelocity.velocity = newVelocity;                             
            if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                world.setComponentData(entity, setVelocity);
            else
                world.addComponentData(entity, setVelocity);     
            return;
        }

        //Initializes the moving object
        static Initialize(world:ut.World, entity:ut.Entity){
            let movingObject =  world.getComponentData(entity, casualgf.MovingObject);
            movingObject.StartingPosition = world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
            let diference = new Vector2(movingObject.Limit.x - movingObject.StartingPosition.x, 
                movingObject.Limit.y - movingObject.StartingPosition.y);
            //Gets the distance between the points
            let magnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
            let normalized =  diference.normalize();

            //Calculates the speed based on the time
            let speedMagnitude = magnitude / movingObject.TimeToGetToLimit;
            let speedVector = normalized.multiplyScalar(speedMagnitude);
            
            //Starts the direction and pongs it
            movingObject.Speed = speedVector;        
            movingObject.Direction = 1;
            movingObject.HasPong = true;


            movingObject.Initialized = true;
            world.setComponentData(entity, movingObject);
            
            if(!world.hasComponent(entity, ut.Physics2D.Velocity2D)){
                world.addComponent(entity, ut.Physics2D.Velocity2D);  
            };
        }

        static Move(world:ut.World, entity:ut.Entity){
            let currentPosDiference;
            let currentMagnitude;
            let movingObject = world.getComponentData(entity, casualgf.MovingObject);
            let position = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
            //Moves the object to the limit position
            if(movingObject.HasPong){
                currentPosDiference = new Vector2(movingObject.Limit.x - position.position.x, 
                movingObject.Limit.y - position.position.y);
                currentMagnitude = Math.sqrt(currentPosDiference.x * currentPosDiference.x + currentPosDiference.y * currentPosDiference.y);               
            }
            //Moves the object to the starting position
            else if( movingObject.HasPing){
                currentPosDiference = new Vector2(position.position.x - movingObject.StartingPosition.x, 
                position.position.y - movingObject.StartingPosition.y );
                currentMagnitude = Math.sqrt(currentPosDiference.x * currentPosDiference.x + currentPosDiference.y * currentPosDiference.y);
            }                         
            //check if it has Ping
            if(movingObject.HasPong  && currentMagnitude <= 1.5){                     
                movingObject.Direction *= -1; 
                movingObject.HasPing = true;
                movingObject.HasPong = false;                    
            }
            //check if it has Pong
            else if(movingObject.HasPing && currentMagnitude <= 1.5){
                movingObject.Direction *= -1;                        
                movingObject.HasPing = false;
                movingObject.HasPong = true;                                    
            }            
            world.setComponentData(entity, movingObject);       
            //Sets the velocity            
            MovingObjectSystem.SetVelocity(world, entity, movingObject.Speed.multiplyScalar(movingObject.Direction));
        }

        
    }
}
