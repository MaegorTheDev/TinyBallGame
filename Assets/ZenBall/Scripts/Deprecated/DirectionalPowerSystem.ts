
namespace casualgf {

    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class DirectionalPowerSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            /**
            this.world.forEach([casualgf.Ball, casualgf.InputHelper], (ball, inputHelper) => {
                
                const powerDelta = ball.MaxPower / 100;
				if(inputHelper.InputType == casualgf.InputType.Power){
					return;
                }

                if(inputHelper.IsClickDown){
                    ball.Power = 0;
                    let currentPower = ball.Power;
                    if(currentPower <= ball.MaxPower && currentPower >= 0){
                        ball.Power = currentPower + (powerDelta * ball.DeltaDirection);
                    } else {
                        if(currentPower <= 0){
                            ball.DeltaDirection = 1;
                            ball.Power = 0;
                        }
                        else {
                            ball.DeltaDirection = -1;
                            ball.Power = ball.MaxPower;
                        }
                    }

                                                       
                }
            }); */

        }
    }
}
0