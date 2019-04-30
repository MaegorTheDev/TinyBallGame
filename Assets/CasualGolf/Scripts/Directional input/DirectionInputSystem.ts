
namespace casualgf {
	//@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
	/** InputHandlingSystem */
	
	//Input System
    export class DirectionInputSystem extends ut.ComponentSystem {
        OnUpdate():void {	
			
			const display = this.world.getConfigData(ut.Core2D.DisplayInfo);
			const camera = this.world.getEntityByName("Camera");			

			const cameraPos = this.world.getComponentData(camera, ut.Core2D.TransformLocalPosition).position;
			const halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;		

			this.world.forEach([ut.Entity, casualgf.InputHelper], 
				(entity, inputHelper ) => {
				// Dont check for input if its not in Aiming mode or waiting mode
				if(GameSystem.CurrentGameMode != GameState.Waiting && GameSystem.CurrentGameMode != GameState.Aiming ){
					////console.log(GameSystem.CurrentGameMode);
					return;
				}
				//If the system doesn't suppports touch it means its in a browser player
				if(!ut.Core2D.Input.isTouchSupported()){	
					//On Input start 
					if( ut.Runtime.Input.getMouseButtonDown(0)){
						let mousePos = ut.Core2D.Input.getInputPosition();
						// adjust 0,0 to the center of the screen
						mousePos.x -= display.frameWidth / 2;
						mousePos.y -= display.frameHeight / 2;

						//get mouse world position
						const mouseWorldPos = new Vector2(
						cameraPos.x + mousePos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
						cameraPos.y + mousePos.y / (display.frameHeight / 2) * halfSize);

						this.ProcessStartInput(entity, mouseWorldPos);
					}
					//On input finish
					else if (ut.Runtime.Input.getMouseButtonUp(0)) {
						let mousePos = ut.Core2D.Input.getInputPosition();
						// adjust 0,0 to the center of the screen
						mousePos.x -= display.frameWidth / 2;
						mousePos.y -= display.frameHeight / 2;

						//get mouse world position
						const mouseWorldPos = new Vector2(
						cameraPos.x + mousePos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
						cameraPos.y + mousePos.y / (display.frameHeight / 2) * halfSize);

						this.ProcessFinishInput(entity, mouseWorldPos);
					}
				}				
				//For touch devices
				else {
					if (ut.Core2D.Input.touchCount() > 0) {
						let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
						if (touch.phase == ut.Core2D.TouchState.Began) {
							//Begining of the touch
							let pos = new Vector2 (touch.x, touch.y);
							//Centering the display at 0,0,
							pos.x -= display.frameWidth / 2;
							pos.y -= display.frameHeight / 2;
	
							//touch world position
							const mouseWorldPos = new Vector2(
							cameraPos.x + pos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
							cameraPos.y + pos.y / (display.frameHeight / 2) * halfSize);

							this.ProcessStartInput(entity, mouseWorldPos);
						}
						//The touch is ending
						else if (touch.phase == ut.Core2D.TouchState.Ended){
							let pos = new Vector2 (touch.x, touch.y);

							pos.x -= display.frameWidth / 2;
							pos.y -= display.frameHeight / 2;
	
							//Touch world position
							const mouseWorldPos = new Vector2(
							cameraPos.x + pos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
							cameraPos.y + pos.y / (display.frameHeight / 2) * halfSize);
	
							this.ProcessFinishInput(entity, mouseWorldPos);
						}	
					}
				}
			});	
		}
		//Method to Start the input
		ProcessStartInput(entity, worldPosition):void
		{	
			//Sets the data in the helper item
			this.world.usingComponentData(entity, [casualgf.InputHelper], (inputHelper) => {
				inputHelper.IsClickDown = true;					
				inputHelper.FirstTouchData = worldPosition;
			});
			//Changes the state to aiming
			GameSystem.CurrentGameMode = GameState.Aiming;	
			////console.log("StartInput");			
		}

		//Method to finish the input
		//TODO handle the case when this method is not called due to skiping in frames
		ProcessFinishInput(entity:ut.Entity, worldPosition: Vector2):void
		{
			//Gets the last value
			let inputHelper = this.world.getComponentData(entity, casualgf.InputHelper);
			// finds the diference vector between the points
			let diference = new Vector2(inputHelper.FirstTouchData.x - worldPosition.x  , inputHelper.FirstTouchData.y-worldPosition.y);
			
			let magnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
			//Normalizes and inverts the vector to find the direction of the shot
			let normalized = new Vector2(diference.x/magnitude, diference.y/magnitude).multiplyScalar(-1);

			//Changes the helper status
			inputHelper.IsClickDown = false;
			this.world.setComponentData(entity, inputHelper);

			//Sets the ball values and sets the Shoot attribute to true so the shooting system shoot.
			this.world.usingComponentData(entity, [casualgf.Ball], (ball)=>{
				ball.MoveDirection = normalized.multiplyScalar(-1);
				ball.Shoot = true;	
			});		
			
		}
    }  
}