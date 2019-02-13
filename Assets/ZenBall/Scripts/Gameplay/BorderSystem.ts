
namespace game {
    /** New System */
    export class BorderSystem extends ut.ComponentSystem {
        static calculateOnce = true;
        OnUpdate():void {
            
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            const camera = this.world.getEntityByName("Camera");		            
            const borders = this.world.getEntityByName("Borders");		                            
            const background = this.world.getEntityByName("Background");		
            
            const halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;
            
            if(BorderSystem.calculateOnce){		
                let height;
                let width;
                let worldHeight;
                let worldWidth

                //CalculateSize
                this.world.usingComponentData(borders, [game.Borders], 
                    (borders)=>{    
                        height = borders.Height = display.frameHeight;
                        width = borders.Width = display.frameWidth;  
                        //worldHeight = borders.WorldHeight = (halfSize * 2) - 8;    
                        worldHeight = borders.WorldHeight = (halfSize * 2);                    
                        if(display.frameHeight < display.frameWidth){
                            worldWidth = borders.WorldWidth = (halfSize * 2 * 0.35)*2;
                        } else {
                            worldWidth = borders.WorldWidth  = ((halfSize*width)/height)*2;
                        }
                });      

                //Set borders
                let index = 0;
                this.world.forEach([game.Wall, ut.Core2D.TransformLocalPosition],
                    (wall, transform) => { 
                        if(index == 0){
                            transform.position = new Vector3((-worldWidth/2), 0); 
                        }
                        else if(index == 1){             
                          transform.position = new Vector3((worldWidth/2), 0); 
                        }        
                        else {
                            return;
                        }         
                        index++;       
                });

                this.world.usingComponentData(background, [ut.Core2D.TransformLocalScale], 
                    (scale)=>{    
                    scale.scale = new Vector3(worldWidth , (halfSize * 2));           
                 });        

                 //Finish this
                ShotsUISystem.Initialize(this.world);
                GameSystem.spawnObstacles = true;
                BorderSystem.calculateOnce = false;
            }
        }
    }
}
