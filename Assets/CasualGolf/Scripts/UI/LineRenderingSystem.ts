
namespace casualgf {

    /** New System */
    export class LineRenderingSystem extends ut.ComponentSystem {
        static pressed = false; 

        OnUpdate():void {            
            const line = this.world.getEntityByName("Guideline");    
                       
            if(line.isNone()){
                return;
            }

            let render:boolean = !(GameSystem.CurrentGameMode == GameState.GameEnd || line.isNone() || GameSystem.CurrentGameMode == GameState.Playing || GameSystem.CurrentGameMode == GameState.Tutorial);

           		if(!ut.Core2D.Input.isTouchSupported()){            
                       
                    let mousePos = ut.Core2D.Input.getInputPosition();
                    if(ut.Runtime.Input.getMouseButtonDown(0) && render){   
                        this.ProcessOnStart(mousePos);
                    }
					else if(ut.Runtime.Input.getMouseButton(0) && render){   
                        this.ProcessOnPressed(line, mousePos);
                    }
					else if (ut.Runtime.Input.getMouseButtonUp(0)) {
						this.ProcessFinishInput(line);
					}
				}				
				else {
					if (ut.Core2D.Input.touchCount() > 0) {
                        
                        let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                        if (touch.phase == ut.Core2D.TouchState.Began && render) {
                            this.ProcessOnStart(new Vector2(touch.x, touch.y));
                            ////console.log("moved: " + ut.Core2D.Input.touchCount());
                        }                        
						else if ((touch.phase == ut.Core2D.TouchState.Moved || touch.phase == ut.Core2D.TouchState.Stationary) && render) {
                            this.ProcessOnPressed(line, new Vector2(touch.x, touch.y));
                            ////console.log("moved: " + ut.Core2D.Input.touchCount());
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended){	
                            this.ProcessFinishInput(line);
                            
            //let dt = this.scheduler.pause();
						}	
					}
				}
        }

        ProcessOnStart(touchPosition:Vector2):void{      
            //Sets the first touch sprite to the first touch position and shows it      
            const firstTouch = this.world.getEntityByName("FirstTouchSprite");        
            var worldPoss = this.ScreenToWorldCoordenates(touchPosition);
            this.world.usingComponentData(firstTouch, [ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRenderer], 
                (position, renderer) => {
                    position.position = new Vector3(worldPoss.x, worldPoss.y);
                    renderer.color =  new ut.Core2D.Color(1, 1, 1, 1);   
                });

            LineRenderingSystem.pressed = true;
        }


        ProcessOnPressed(entity: ut.Entity, touchPosition: Vector2):void{        
            LineRenderingSystem.pressed = true;
            let ball = this.world.getEntityByName("Ball");  
            let coordinates= this.ScreenToWorldCoordenates(touchPosition);
            

            let linePosition;
            let lineRotation;

            this.world.usingComponentData(ball, [ut.Core2D.TransformLocalPosition, casualgf.InputHelper], 
                (position, helper) => {      
                    let diference = new Vector2(helper.FirstTouchData.x - coordinates.x, helper.FirstTouchData.y - coordinates.y);   
                    let normalized = diference.normalize();
                    //Calculates the position and the rotation of the vector between the first touch and the current position
                    lineRotation = Math.atan2(normalized.y, normalized.x);                    
                    linePosition = new Vector3 (position.position.x, position.position.y);                   
                });              

            this.world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions], 
                (position, rotation, renderer, options) => {   
                    //Moves the line around the ball depending on the rotation
                    renderer.color = new ut.Core2D.Color(1, 1, 1, 1);                   
            
                    let sprite = this.world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(0, 0.5);              
                    this.world.setComponentData(renderer.sprite, sprite);   
            
                    position.position = linePosition;   
                    rotation.rotation.setFromAxisAngle(new Vector3(0,0,1), lineRotation);
                });          
                
                //shows the second touch sprite in the current position
            const secondTouch = this.world.getEntityByName("SecondTouchSprite");     
            this.world.usingComponentData(secondTouch, [ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRenderer], 
                (position, renderer) => {
                    position.position = new Vector3(coordinates.x, coordinates.y);
                    renderer.color =  new ut.Core2D.Color(1, 1, 1, 1);   
                });
        }

		ProcessFinishInput(entity: ut.Entity):void{		
            //Hides all the ui feedback inputs
            this.world.usingComponentData(entity, [ut.Core2D.Sprite2DRenderer], 
                (renderer) => {
                    renderer.color = new ut.Core2D.Color(1, 1, 1, 0);   
                });		

            const firstTouch = this.world.getEntityByName("FirstTouchSprite");        
                this.world.usingComponentData(firstTouch, [ut.Core2D.Sprite2DRenderer], 
                    (renderer) => {
                        renderer.color =  new ut.Core2D.Color(1, 1, 1, 0);   
                    });
                
            const secondTouch = this.world.getEntityByName("SecondTouchSprite");        
                this.world.usingComponentData(secondTouch, [ut.Core2D.Sprite2DRenderer], 
                    ( renderer) => {
                        renderer.color =  new ut.Core2D.Color(1, 1, 1, 0);   
                    });

                    
            LineRenderingSystem.pressed = false;
        }
        
        //Transformation from screen to world coordenates
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
