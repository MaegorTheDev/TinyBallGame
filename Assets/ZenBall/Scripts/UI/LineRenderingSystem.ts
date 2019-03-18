
namespace game {

    /** New System */
    export class LineRenderingSystem extends ut.ComponentSystem {
        static pressed = false; 

        OnUpdate():void {            
            const line = this.world.getEntityByName("Guideline");      
            
            if(LineRenderingSystem.pressed){
                this.ProcessFinishInput(line);
                
            }  
            
            if(GameSystem.CurrentGameMode == GameState.GameEnd || line.isNone() || GameSystem.CurrentGameMode == GameState.Playing){
                return;
            }

           		if(!ut.Core2D.Input.isTouchSupported()){            
                       
                    let mousePos = ut.Core2D.Input.getInputPosition();
					if(ut.Runtime.Input.getMouseButton(0)){   
                        this.ProcessOnPressed(line, mousePos);
                    }
					else if (ut.Runtime.Input.getMouseButtonUp(0)) {
						this.ProcessFinishInput(line);
					}
				}				
				else {
					if (ut.Core2D.Input.touchCount() > 0) {
                        
                        let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                        
						if (touch.phase == ut.Core2D.TouchState.Moved || touch.phase == ut.Core2D.TouchState.Stationary) {
                            this.ProcessOnPressed(line, new Vector2(touch.x, touch.y));
                            //console.log("moved: " + ut.Core2D.Input.touchCount());
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended){		
							this.ProcessFinishInput(line);
						}	
					}
				}
        }


        ProcessOnPressed(entity: ut.Entity, touchPosition: Vector2):void{        
            LineRenderingSystem.pressed = true;
            let ball = this.world.getEntityByName("Ball");  
            let coordinates= this.ScreenToWorldCoordenates(touchPosition);


            let linePosition;
            let lineRotation;
            let lineMagnitude;

            this.world.usingComponentData(ball, [ut.Core2D.TransformLocalPosition], 
                (position) => {      
                    let diference = new Vector2(coordinates.x - position.position.x, coordinates.y -  position.position.y);   
                    lineMagnitude= Math.sqrt(diference.x*diference.x + diference.y * diference.y);
                   
                    let normalized = diference.normalize().multiplyScalar(-1);
                    lineRotation = Math.atan2(normalized.y, normalized.x);                    
                    linePosition = new Vector3 (position.position.x, position.position.y);
                   
                });              

            this.world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions], 
                (position, rotation, renderer, options) => {   
                    renderer.color = new ut.Core2D.Color(1, 1, 1, 1);                   
            
                    let sprite = this.world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(0, 0.5);              
                    this.world.setComponentData(renderer.sprite, sprite);   
            
                    position.position = linePosition;   
                    rotation.rotation.setFromAxisAngle(new Vector3(0,0,1), lineRotation);
                   //options.size = new Vector2(lineMagnitude, 3.3);
                });                                     
        }

		ProcessFinishInput(entity: ut.Entity):void{		              
            LineRenderingSystem.pressed = false;
            this.world.usingComponentData(entity, [ut.Core2D.Sprite2DRenderer], 
                (renderer) => {
                    renderer.color = new ut.Core2D.Color(1, 1, 1, 0);   
                });				
        }
        
        ScreenToWorldCoordenates(screenPos: Vector2):Vector3{
            let position = screenPos;

            const camera = this.world.getEntityByName("Camera");			
       
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            const halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;		
				
            position.x -= display.frameWidth / 2;
            position.y -= display.frameHeight / 2;

            //Mouse world position
            const worldPos = new Vector3(
            position.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize),
            position.y / (display.frameHeight / 2) * halfSize);	
            return worldPos;
        }
    }
}
