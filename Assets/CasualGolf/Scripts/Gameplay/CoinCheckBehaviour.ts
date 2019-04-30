
namespace casualgf {

    export class CoinCheckBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        coinChecker: casualgf.CoinCheck;
        renderer: ut.Core2D.Sprite2DRenderer;
        position?: ut.Core2D.TransformLocalPosition;        
    }

    export class CoinCheckBehaviour extends ut.ComponentBehaviour {

        data: CoinCheckBehaviourFilter;

        OnEntityEnable():void { 
            //Check if the number of coins is less than the number necessary to respawn
            if(GameSystem.coins < RespawnSystem.actualRespawns * 10){
                let currentColor = this.data.renderer.color;
                this.data.renderer.color = new ut.Core2D.Color(currentColor.r, currentColor.g, currentColor.b, 1);
            }else { 
                let currentColor = this.data.renderer.color;
                this.data.renderer.color = new ut.Core2D.Color(currentColor.r, currentColor.g, currentColor.b, 0);      
            }
        }
        
    }
}
