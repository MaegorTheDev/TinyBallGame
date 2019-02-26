
namespace game {

    export class NumberRendererBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position: ut.Core2D.TransformLocalPosition;
        scale: ut.Core2D.TransformLocalScale;
        numberObject: game.NumberObject;
    }

    export class NumberRendererBehaviour extends ut.ComponentBehaviour {

        data: NumberRendererBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, once when enabled
        //OnEntityEnable():void { }
        
        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
            let numberToRender = this.data.numberObject.Number.toString();
            let lastSpriteObjets = this.data.numberObject.CurrentNumbers;

            if(numberToRender.length < lastSpriteObjets.length){
                for(let i = lastSpriteObjets.length-1; i>=numberToRender.length;i--){
                    ut.Core2D.TransformService.destroyTree(this.world,lastSpriteObjets[i]);
                }
                lastSpriteObjets.length = numberToRender.length;                
            }

            let currentX = this.data.position.position.x;
            let positionY = this.data.position.position.y;

            for(let i = 0; i<numberToRender.length; i++){
                let sprite = this.data.numberObject.Digits[parseInt(numberToRender[i])];
                let digit;
                if(lastSpriteObjets.length > i){
                    digit = lastSpriteObjets[i];
                }
                else {
                    digit = ut.EntityGroup.instantiate(this.world, "game.DigitSprite")[0];        
                    this.data.numberObject.CurrentNumbers[i] = digit;
                }               
                
                this.world.usingComponentData(digit, [ut.Core2D.TransformNode, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, ut.Core2D.Sprite2DRenderer], 
                    (node, position,scale, renderer) => {
                    node.parent = this.data.node.parent;
                    position.position = new Vector3(currentX, positionY);
                    renderer.sprite = sprite;
                    scale.scale = new Vector3(this.data.scale.scale.x, this.data.scale.scale.y,1);
                    renderer.color = this.data.numberObject.Color;
                });
                currentX += this.data.numberObject.Spacing * this.data.scale.scale.x;
            }


        }

        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
