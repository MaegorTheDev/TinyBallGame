
namespace casualgf {

    export class NumberRendererBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position: ut.Core2D.TransformLocalPosition;
        scale: ut.Core2D.TransformLocalScale;
        numberObject: casualgf.NumberObject;
    }

    export class NumberRendererBehaviour extends ut.ComponentBehaviour {

        data: NumberRendererBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, once when enabled
        OnEntityEnable():void {
            if(this.data.numberObject.BackgroundImage != undefined && this.world.exists(this.data.numberObject.BackgroundImage)){
                this.world.usingComponentData(this.data.numberObject.BackgroundImage, 
                    [casualgf.InitialImageSize, ut.Core2D.Sprite2DRendererOptions], 
                    (helper, renderer) => {
                    helper.InitialSize = renderer.size.x;
                });
            }
        }
        
        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
            if(!this.data.numberObject.Render){
                return;
            }

            let numberToRender = this.data.numberObject.Number.toString();
            let lastSpriteObjets = this.data.numberObject.CurrentNumbers;

            
            ////console.log("EntityUpdate number to render:" + numberToRender);
            ////console.log("Entity name: " + this.world.getEntityName(this.entity));

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
                    ////console.log("Replace digit");
                }
                else {
                    digit = ut.EntityGroup.instantiate(this.world, "casualgf.DigitSprite")[0];    
                    ////console.log("Instantiate digit ");    
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

            if(this.data.numberObject.BackgroundImage != undefined && this.world.exists(this.data.numberObject.BackgroundImage)){
                this.world.usingComponentData(this.data.numberObject.BackgroundImage, 
                    [ut.Core2D.Sprite2DRendererOptions, casualgf.InitialImageSize], 
                    (renderer, helper) => {
                    let currentSize = helper.InitialSize;
                    currentSize += this.data.numberObject.Spacing * numberToRender.length;
                    renderer.size.setX(currentSize);
                });

            }

        }

        // this method is called for each entity matching the NumberRendererBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
