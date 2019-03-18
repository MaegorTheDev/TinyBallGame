
namespace game {
    
    /** New System */
    export class BorderSystem extends ut.ComponentSystem {
        static calculateOnce = true;
        OnUpdate():void {
            
            const display = this.world.getConfigData(ut.Core2D.DisplayInfo);            
            const borders = this.world.getEntityByName("Borders");		        
            let border = this.world.getComponentData(borders, game.Borders);

            if(border.Width != display.frameWidth || border.Height != display.frameHeight){
                border.Height = display.frameHeight;
                border.Width = display.frameWidth;                  
                border.WorldHeight = 100;      
                border.WorldWidth = 56;  
                this.world.setComponentData(borders, border);
                BoxingSystem.Boxing = true;                
            }
        }
    }
}
