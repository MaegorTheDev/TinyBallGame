
namespace game {    
    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class BallSystem extends ut.ComponentSystem {
        
        static lastVelocity = new Vector2(0,0);

        OnUpdate():void {       
            let ballEntity =  this.world.getEntityByName("Ball");	    
            if(ballEntity.isNone()){
                return;
            }
            this.world.usingComponentData(ballEntity,[ut.Entity, game.Ball, game.InputHelper, ut.Physics2D.Velocity2D], 
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
                else if(ball.Shoot && GameSystem.currentPlays > 0){   
                    let velocity = new Vector2(ball.MoveDirection.x * ball.MaxPower, ball.MoveDirection.y * ball.MaxPower);  
                    BallSystem.ChangeBallSpeed(velocity, ballEntity, this.world);                                            
                    BallSystem.ResetBallInput(ball);
                    BallSystem.lastVelocity = new Vector2(0,0);

                    SpeedLethalitySystem.SetStartingVelocity(velocity);

                    GameSystem.Play(this.world);                    
                    GameSystem.CurrentGameMode = game.GameState.Playing;
                }
                //Continue the movement
                /** 
                else{
                    let newVelocity = BallSystem.lastVelocity;                  
                    BallSystem.ChangeBallSpeed(newVelocity, ballEntity, this.world);
                    BallSystem.ResetBallInput(ball);
                    BallSystem.lastVelocity = new Vector2(0,0);
                    
                    GameSystem.NoShotsSound(this.world);
                    GameSystem.CurrentGameMode = game.GameState.Playing;
                }*/
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

