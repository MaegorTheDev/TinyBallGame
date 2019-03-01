
namespace game {
    
    /** New System */
    export class BorderSystem extends ut.ComponentSystem {
        static calculateOnce = true;
        OnUpdate():void {
            
            BoxingSystem.Boxing = false;
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);            
            const borders = this.world.getEntityByName("Borders");		        
            this.world.usingComponentData(borders, [game.Borders], 
                (borders)=>{    
                    borders.Height = display.frameHeight;
                    borders.Width = display.frameWidth;  
                    //worldHeight = borders.WorldHeight = (halfSize * 2) - 8;  
                    //HardCoded  
                    borders.WorldHeight = 100;      
                    borders.WorldWidth = 56;            
            });      
            BoxingSystem.Boxing = true;
            return;
            //This changed the position of the borders, not anymore
            /** 
            if(BorderSystem.calculateOnce){		
                //CalculateSize
                

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

                BorderSystem.calculateOnce = false;
            }            
            */            
                                
            

        }
    }
}
