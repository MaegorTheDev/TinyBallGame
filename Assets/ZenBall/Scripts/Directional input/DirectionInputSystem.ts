
namespace game {
	//@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** InputHandlingSystem */
    export class DirectionInputSystem extends ut.ComponentSystem {
        OnUpdate():void {	
			
			const display = this.world.getConfigData(ut.Core2D.DisplayInfo);
			const camera = this.world.getEntityByName("Camera");			

			const cameraPos = this.world.getComponentData(camera, ut.Core2D.TransformLocalPosition).position;
			const halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;		

            this.world.forEach([ut.Entity, game.Ball, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalPosition, game.InputHelper], (entity, ball, velocity, localPosition , inputHelper ) => {
				if(inputHelper.InputType == game.InputType.Power){
					return;
				}
				if(GameSystem.CurrentGameMode == GameState.GameEnd || GameSystem.currentPlays <= 0){
					return;
				}
				if(!ut.Core2D.Input.isTouchSupported()){

					if( ut.Runtime.Input.getMouseButton(0)){
						this.ProcessStartInput(entity, velocity, inputHelper);
					}
					else if (ut.Runtime.Input.getMouseButtonUp(0)) {
						let mousePos = ut.Core2D.Input.getInputPosition();
						// adjust 0,0 to the center of the screen
						mousePos.x -= display.frameWidth / 2;
						mousePos.y -= display.frameHeight / 2;

						//Mouse world position
						const mouseWorldPos = new Vector2(
						cameraPos.x + mousePos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
						cameraPos.y + mousePos.y / (display.frameHeight / 2) * halfSize);

						this.ProcessFinishInput(mouseWorldPos, ball, localPosition, inputHelper);
					}
				}				
				else {
					if (ut.Core2D.Input.touchCount() > 0) {
						let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
						if (touch.phase == ut.Core2D.TouchState.Began) {
							//console.log("began: " + ut.Core2D.Input.touchCount());							
							this.ProcessStartInput(entity, velocity, inputHelper);
						}else if (touch.phase == ut.Core2D.TouchState.Ended){
							let pos = new Vector2 (touch.x, touch.y);

							pos.x -= display.frameWidth / 2;
							pos.y -= display.frameHeight / 2;
	
							//Mouse world position
							const mouseWorldPos = new Vector2(
							cameraPos.x + pos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
							cameraPos.y + pos.y / (display.frameHeight / 2) * halfSize);
	
							this.ProcessFinishInput(mouseWorldPos, ball, localPosition, inputHelper);
						}	
					}
				}
			});	
		}
		ProcessStartInput(entity, velocity, inputHelper):void
		{				
			inputHelper.IsClickDown = true;					
			GameSystem.CurrentGameMode = GameState.Aiming;	
			//console.log("StartInput");			
		}

		ProcessFinishInput(worldPosition: Vector2,ball , localPosition, inputHelper):void
		{
			let playerWorldPosition = localPosition.position;
			let diference = new Vector2(worldPosition.x - playerWorldPosition.x, worldPosition.y - playerWorldPosition.y);
			
			let magnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
			let normalized = new Vector2(diference.x/magnitude, diference.y/magnitude);

			inputHelper.IsClickDown = false;

			ball.MoveDirection = normalized;
			ball.Shoot = true;			
			
		}
    }  
}

/**
 * 		this.ProcessTouchInput(localPosition, speed.speed * dt);
 * 		ProcessTouchInput(position: Vector3, speed):void
		{
			if (ut.Core2D.Input.isTouchSupported()) {
				if (ut.Core2D.Input.touchCount() > 0) {
					let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
					let player = this.world.getEntityByName("Player");
					let playerWorldPos = ut.Core2D.TransformService.computeWorldPosition(this.world, player);
					let transPos = ut.Core2D.TransformService.worldToWindow(this.world, this.world.getEntityByName("Camera"), playerWorldPos, new Vector2(600,800));

					if (touch.x >= transPos.x){
						position.x += speed;
					}
					else if (touch.x < transPos.x){
						position.x -= speed;
					}
					if (touch.y >= transPos.y){
						position.y += speed;
					}
					else if (touch.y < transPos.y){
						position.y -= speed;
					}

					if (touch.phase == ut.Core2D.TouchState.Moved) {
						//console.log("moved: " + ut.Core2D.Input.touchCount());
					}
					else if (touch.phase == ut.Core2D.TouchState.Ended) {
						//console.log("ended: " + ut.Core2D.Input.touchCount());
					}
					else if (touch.phase == ut.Core2D.TouchState.Stationary) {
						//console.log("holding: " + ut.Core2D.Input.touchCount());
					}
					else if (touch.phase == ut.Core2D.TouchState.Canceled) {
						//console.log("cancelled: " + ut.Core2D.Input.touchCount());
					}
					else if (touch.phase == ut.Core2D.TouchState.Began) {
						//console.log("began: " + ut.Core2D.Input.touchCount());
					}
					else {
						console.log("NO TOUCH STATE!!!");
					}
				}
			}
			else {
				//console.log("TOUCH IS DISABLED!!!");
			}
		}
 * 
 */