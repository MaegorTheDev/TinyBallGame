
namespace game {    
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
            this.world.usingComponentData(BallSystem.BallEntity ,[ut.Entity, game.Ball, game.InputHelper, ut.Physics2D.Velocity2D], 
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
                    BallSystem.ChangeBallSpeed(velocity, BallSystem.BallEntity , this.world);                                            
                    BallSystem.ResetBallInput(ball);
                    BallSystem.lastVelocity = new Vector2(0,0);

                    SpeedLethalitySystem.SetStartingVelocity(velocity);

                    GameSystem.Play(this.world);                    
                    GameSystem.CurrentGameMode = game.GameState.Playing;
                }
                
        });
    }

        static SetBallPosition(spawnPosition:Vector3, world:ut.World){
              
            if (BallSystem.BallEntity.isNone()) {       
                BallSystem.BallEntity = ut.EntityGroup.instantiate(world, 'game.BallGroup')[0];
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

        static ChangeBallSpeed(newSpeed:Vector2, entity:ut.Entity, world:ut.World){
            let setVelocity = new ut.Physics2D.SetVelocity2D;
            setVelocity.velocity = newSpeed;                            
            if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                world.setComponentData(entity, setVelocity);
            else
                world.addComponentData(entity, setVelocity);
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

        static ResetBallInput(ball:game.Ball){
            ball.Power = 0;
            ball.MoveDirection = new Vector2(0,0);
            ball.Shoot = false;
        }
        
    }
}

