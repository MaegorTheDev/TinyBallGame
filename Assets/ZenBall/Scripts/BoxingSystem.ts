
namespace game {

    /** New System */
    export class BoxingSystem extends ut.ComponentSystem {
        static Boxing = false;
        static currentRenderingAspect = 0;
    
        OnUpdate():void {
            if(!BoxingSystem.Boxing){
                return;
            }

            const camera = this.world.getEntityByName("Camera");		            
            const borders = this.world.getEntityByName("Borders");	        
            
            
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            const cameraData = this.world.getComponentData(camera,ut.Core2D.Camera2D);
            const halfSize = cameraData.halfVerticalSize;
            
            //let aspectRatio = display.frameHeight / display.frameWidth;
            let limitPosition = new Vector2(display.frameWidth / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize), 
                                display.frameHeight / (display.frameHeight / 2) * halfSize);
            let borderData = this.world.getComponentData(borders, game.Borders);
            let worldAspect = borderData.WorldWidth/borderData.WorldHeight;
            let currentAspect = borderData.Width/borderData.Height;

            let diference = ((worldAspect+0.0075) - currentAspect);

            if(worldAspect+0.0075>=currentAspect){                    
                cameraData.halfVerticalSize = borderData.WorldHeight/2 * (1+diference);  
                BoxingSystem.SetBordersTopDown(this.world, borderData, limitPosition);     
            }                      
            else if(worldAspect+0.0075<currentAspect){
                cameraData.halfVerticalSize = borderData.WorldHeight/2;                
                BoxingSystem.SetBordersOnSide(this.world, borderData, limitPosition);
            }            
                
            BoxingSystem.currentRenderingAspect = diference;
            this.world.setComponentData(camera, cameraData);

             
            
            //console.log(limitPosition);
           
        }

        static SetBordersOnSide(world:ut.World, borderData, limitPosition){
            let index = 0 ;
            world.forEach([ut.Core2D.TransformLocalPosition, game.SideSpritesUI, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalScale], 
                (position, sideUIMask, renderer, scale) => {
                
                let diference = limitPosition.x - (borderData.WorldWidth/2);

            if(index%2==0){
                    let sprite = world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(0, 0.5);              
                    world.setComponentData(renderer.sprite, sprite);  

                    position.position = new Vector3(borderData.WorldWidth/2);  
                    scale.scale = new Vector3(diference, borderData.WorldHeight+2);                  
                } else {
                    let sprite = world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(1, 0.5);              
                    world.setComponentData(renderer.sprite, sprite);  

                    position.position = new Vector3(-borderData.WorldWidth/2);                      
                    scale.scale = new Vector3(diference, borderData.WorldHeight+2);
                }
                
                index++;                
            });
        }

        static SetBordersTopDown(world:ut.World, borderData, limitPosition){
            let index = 0 ;
            world.forEach([ut.Core2D.TransformLocalPosition, game.SideSpritesUI, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalScale], 
                (position, sideUIMask, renderer, scale) => {
                
                let diference = limitPosition.y - (borderData.WorldHeight/2);

            if(index%2==0){
                    let sprite = world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(0.5, 0);              
                    world.setComponentData(renderer.sprite, sprite);  

                    position.position = new Vector3(0, borderData.WorldHeight/2);  
                    scale.scale = new Vector3(borderData.WorldWidth+2,diference);                  
                } else {
                    let sprite = world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                    sprite.pivot = new Vector2(0.5, 1);              
                    world.setComponentData(renderer.sprite, sprite);  

                    position.position = new Vector3(0, -borderData.WorldHeight/2);                      
                    scale.scale = new Vector3(borderData.WorldWidth+2, borderData.WorldHeight+2);
                }
                
                index++;                
            });
        }
    }
}
