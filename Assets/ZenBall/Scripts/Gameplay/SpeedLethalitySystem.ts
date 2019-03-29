
namespace casualgf {

    /** New System */
    export class SpeedLethalitySystem extends ut.ComponentSystem {
        static decayTime = 5;    

        static CurrentTime = 0;        
        static StartingVelocity:Vector3;
        static VelocityDeltaPerSecond;
        
        OnUpdate():void {
            if(GameSystem.CurrentGameMode != GameState.Playing){
                return;
            }
            const ball = this.world.getEntityByName("Ball");
            
            let dt = this.scheduler.deltaTime();
            SpeedLethalitySystem.CurrentTime += dt;     

            this.world.usingComponentData(ball, [ut.Entity, ut.Physics2D.Velocity2D], 
                (entity, velocity) => {   
                    if(velocity.velocity.x == 0 && velocity.velocity.y == 0){                        
                        //This literally does nothing                        
                        //Don't delete this
                        //It doesn't work without this
                        //¯\_(ツ)_/¯ 
                        ////console.log("Empty velocity");
                        return;
                    }       
                    else if(SpeedLethalitySystem.CurrentTime <=  SpeedLethalitySystem.decayTime)
                    {
                        let StartingVelocityMagnitude = SpeedLethalitySystem.StartingVelocity.length();

                        let currentDirection = velocity.velocity.normalize();
                        let percentage = 1 - SpeedLethalitySystem.CurrentTime / SpeedLethalitySystem.decayTime;
                        let speedMagnitude = StartingVelocityMagnitude * percentage;
    
                        let newVelocity = new Vector2(currentDirection.x * speedMagnitude, currentDirection.y * speedMagnitude);  
                        
                        ////console.log("Lowering " + percentage);
                        let setVelocity = new ut.Physics2D.SetVelocity2D;
                        setVelocity.velocity = newVelocity;                            
                        if (this.world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                            this.world.setComponentData(entity, setVelocity);
                        else
                            this.world.addComponentData(entity, setVelocity);
                    }                     
                    else if(SpeedLethalitySystem.CurrentTime > SpeedLethalitySystem.decayTime){
                        
                        ////console.log("EndGame");
                        SpeedLethalitySystem.CurrentTime = 0;
                        SpeedLethalitySystem.EndGame(this.world);
                    }          
                });   
            
        }

        static EndGame(world:ut.World){
            GameSystem.EndGame(world);            
            const loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }                      
           
        }


        static SetStartingVelocity(velocity){
            SpeedLethalitySystem.StartingVelocity = velocity;
            SpeedLethalitySystem.CurrentTime = 0;            
            SpeedLethalitySystem.VelocityDeltaPerSecond = velocity.length() / SpeedLethalitySystem.decayTime;
        }
    }
}
