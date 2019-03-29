
namespace casualgf {

    export class CoinCheckBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        coinChecker: casualgf.CoinCheck;
        renderer: ut.Core2D.Sprite2DRenderer;
        position?: ut.Core2D.TransformLocalPosition;        
    }

    export class CoinCheckBehaviour extends ut.ComponentBehaviour {

        data: CoinCheckBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the CoinCheckBehaviourFilter signature, once when enabled
        OnEntityEnable():void { 
            if(GameSystem.coins < RespawnSystem.actualRespawns * 10){
                let currentColor = this.data.renderer.color;
                this.data.renderer.color = new ut.Core2D.Color(currentColor.r, currentColor.g, currentColor.b, 1);
            }else { 
                let currentColor = this.data.renderer.color;
                this.data.renderer.color = new ut.Core2D.Color(currentColor.r, currentColor.g, currentColor.b, 0);      
            }
        }
        
        // this method is called for each entity matching the CoinCheckBehaviourFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the CoinCheckBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
