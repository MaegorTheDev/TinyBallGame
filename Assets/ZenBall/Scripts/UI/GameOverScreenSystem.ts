
namespace game {

    /** New System */
    export class GameOverScreenSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            
            if(GameSystem.CurrentGameMode != GameState.GameEnd){
                return;
            }

            if(!ut.Core2D.Input.isTouchSupported()){
                if (ut.Runtime.Input.getMouseButtonUp(0)) {
                    GameSystem.DestroyEndScreen(this.world);
                }
            }				
            else {
                if (ut.Core2D.Input.touchCount() > 0) {
                    let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                    if (touch.phase == ut.Core2D.TouchState.Ended){
                        GameSystem.DestroyEndScreen(this.world);                                               
                    }	
                }
            }
        }
    }
}
