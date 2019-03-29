
namespace casualgf {    
    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class BallSystem extends ut.ComponentSystem {
        
        static lastVelocity = new Vector2(0,0);
        static BallEntity:ut.Entity;

        OnUpdate():void {         
            if(BallSystem.BallEntity == undefined || BallSystem.BallEntity.isNone()){                
                BallSystem.BallEntity =  this.world.getEntityByName("Ball");	  
                return;
            }
            this.world.usingComponentData(BallSystem.BallEntity ,[ut.Entity, casualgf.Ball, casualgf.InputHelper, ut.Physics2D.Velocity2D], 
                (entity, ball, inputHelper, velocity ) => {

                if( GameSystem.CurrentGameMode != GameState.Aiming ){
                    return;
                }

                //Stop Ball
               if(inputHelper.IsClickDown ){      
                   if(BallSystem.lastVelocity.x == 0 && BallSystem.lastVelocity.y == 0){
                        BallSystem.lastVelocity = velocity.velocity;    
                   }
			        let newVelocity = new Vector2(0, 0);                      
                    //BallSystem.ChangeBallSpeed(newVelocity, ballEntity, this.world);
               }
               //Shoot!
                else if(ball.Shoot){   
                    let velocity = new Vector2(ball.MoveDirection.x * ball.MaxPower, ball.MoveDirection.y * ball.MaxPower);  
                    BallSystem.ChangeBallSpeed(velocity , this.world);                                            
                    BallSystem.ResetBallInput(ball);
                    BallSystem.lastVelocity = new Vector2(0,0);

                    SpeedLethalitySystem.SetStartingVelocity(velocity);
             
                    GameSystem.CurrentGameMode = casualgf.GameState.Playing;
                }
                
        });
    }

        static SetBallPosition(spawnPosition:Vector3, world:ut.World){
              
            if (BallSystem.BallEntity.isNone()) {       
                BallSystem.BallEntity = ut.EntityGroup.instantiate(world, 'casualgf.BallGroup')[0];
            }                 
            world.usingComponentData( BallSystem.BallEntity, [ut.Entity, ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], (entity, position, velocity ) => {          
                position.position = spawnPosition; 
                let setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = new Vector2(0,0);                              
                if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                    world.setComponentData(entity, setVelocity);
                else
                    world.addComponentData(entity, setVelocity);                                                        
            });           
        }

        static GetBallPosition(world:ut.World):Vector3{
            let result:Vector3;
            if (BallSystem.BallEntity.isNone()) {       
                BallSystem.BallEntity = ut.EntityGroup.instantiate(world, 'casualgf.BallGroup')[0];
            }                 
            world.usingComponentData( BallSystem.BallEntity, [ut.Entity, ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], (entity, position, velocity ) => {          
                result = position.position;                                                    
            });    
            
            return result;
        }

        static ChangeBallSpeed(newSpeed:Vector2, world:ut.World){
            if (BallSystem.BallEntity.isNone()) {       
                BallSystem.BallEntity = ut.EntityGroup.instantiate(world, 'casualgf.BallGroup')[0];
            }     
            let setVelocity = new ut.Physics2D.SetVelocity2D;
            setVelocity.velocity = newSpeed;                            
            if (world.hasComponent(BallSystem.BallEntity, ut.Physics2D.SetVelocity2D))
                world.setComponentData(BallSystem.BallEntity, setVelocity);
            else
                world.addComponentData(BallSystem.BallEntity, setVelocity);
        }
        
        static ChangeBallSpeedAndPosition(newSpeed:Vector2, newPosition:Vector3, entity:ut.Entity, world:ut.World){
            world.usingComponentData(entity, [ut.Entity, ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], (entity, position ) => {          
                position.position = newPosition;        
                let setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = newSpeed;                              
                if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                    world.setComponentData(entity, setVelocity);
                else
                    world.addComponentData(entity, setVelocity);   
                                              
            });               
        }

        static ResetBallInput(ball:casualgf.Ball){
            ball.Power = 0;
            ball.MoveDirection = new Vector2(0,0);
            ball.Shoot = false;
        }

        static SetPuttPosition(world:ut.World, pos:Vector3){
            let putt = world.getEntityByName("Putt");
            if(!putt.isNone()){
                world.usingComponentData(putt,  [ut.Core2D.TransformLocalPosition], 
                    (position,)=>{   
                        position.position = pos;
                    });
            }
        }
        
    }
}

