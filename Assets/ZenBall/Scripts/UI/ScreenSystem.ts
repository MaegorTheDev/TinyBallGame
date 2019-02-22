
namespace game {

    /** New System */
    export class ScreenSystem extends ut.ComponentSystem {
        
        OnUpdate():void {            
            if(GameSystem.CurrentGameMode != GameState.GameEnd && GameSystem.CurrentGameMode != GameState.GameStart){
                return;
            }
            
            if(!ut.Core2D.Input.isTouchSupported()){
                if (ut.Runtime.Input.getMouseButtonUp(0)) {
                    let mousePos = ut.Core2D.Input.getWorldInputPosition(this.world);
                    let hit = ut.HitBox2D.HitBox2DService.hitTest(this.world, mousePos, this.world.getEntityByName("Camera"));
                    
                    if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "GameStartButton") {
                        GameSystem.DestroyMainScreen(this.world);
                    } else if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "RestartGameButton") {
                        GameSystem.DestroyEndScreen(this.world);
                    } else if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "RespawnGameButton") {
                        RespawnSystem.Respawn(this.world);                        
                    }
                    
                }
            }				
            else {
                if (ut.Core2D.Input.touchCount() > 0) {
                    let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                    if (touch.phase == ut.Core2D.TouchState.Ended){    
                        let mousePos = ut.Core2D.Input.getWorldInputPosition(this.world);
                        let hit = ut.HitBox2D.HitBox2DService.hitTest(this.world, mousePos, this.world.getEntityByName("Camera"));
                        
                        if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "GameStartButton") {
                            GameSystem.DestroyMainScreen(this.world);
                        } else if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "RestartGameButton") {
                            GameSystem.DestroyEndScreen(this.world);
                        } else if(!hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "RespawnGameButton") {
                            RespawnSystem.Respawn(this.world);
                        }                          
                    }	
                }
            }
         
        }
    }
}
/** 
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
            }*/