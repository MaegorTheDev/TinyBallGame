
namespace casualgf {
    
    /** New System */
    export class BorderSystem extends ut.ComponentSystem {
        static calculateOnce = true;
        OnUpdate():void {
            //The first time the game starts, sets the height and the width of the display
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);            
            const borders = this.world.getEntityByName("Borders");	
            if(!borders.isNone()){
                let border = this.world.getComponentData(borders, casualgf.Borders);

                if(border.Width != display.frameWidth || border.Height != display.frameHeight){
                    border.Height = display.frameHeight;
                    border.Width = display.frameWidth;                  
                    border.WorldHeight = 100;      
                    border.WorldWidth = 56;  
                    this.world.setComponentData(borders, border);
                    //Lets the boxing system know that the borders are ready to calculate
                    BoxingSystem.Boxing = true;                
                }
            }	       
        }
    }
}
