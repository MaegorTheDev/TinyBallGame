
namespace casualgf {
    //@ut.executeBefore(casualgf.BallShootingSystem)
    /** New System */
    export class ShotsUISystem extends ut.ComponentSystem {
        OnUpdate():void {           
        }

        static UpdateShotsPeg(world){
              
            return;
            ut.EntityGroup.destroyAll(world, 'casualgf.ShotPeg');               
            let borders = world.getEntityByName("Borders");
            let numberOfShots = 0;	              
            
            let pegSize;
            let pegYPos;
            let currentX;

            world.usingComponentData(borders, [casualgf.Borders], 
                (borders)=>{
                    pegSize =   ((borders.WorldWidth - ((numberOfShots-1) * 0.75)) - 5)  / numberOfShots;
                    pegYPos = (borders.WorldHeight/2) - 0.5;
                    currentX = ((-borders.WorldWidth/2)  + pegSize/2) + 2.5;
          
            });      
            for(let i =0; i < numberOfShots; i++){
                let peg = ut.EntityGroup.instantiate(world, "casualgf.ShotPeg")[0];        
                world.usingComponentData(peg, [ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRendererOptions], 
                    (transformLocalPosition, options)=>{
                        let pos = new Vector3(currentX, pegYPos);   
                        transformLocalPosition.position = pos;
                        let scale = new Vector2(pegSize, 3);      
                        options.size = scale;       
                });         
                currentX += pegSize + 0.75;
            }
            
        }

        static Initialize(world): void{                    

            //let numberOfShots = GameSystem.MaxPlays;
           
        }

        /** LEGACY CODE Limited SHOTS!
         * 
        static initialized = false; 
        static animationActive = false;
        static frameCount = 0;
         *    if(!ShotsUISystem.initialized){
                return;
            }
            let index = 1;
            let currentPlays = GameSystem.currentPlays;
            let isClickDown = false;
            this.world.forEach([casualgf.Ball, casualgf.InputHelper, ut.Entity],
                (ball, helper, entity) => { 
                    isClickDown = helper.IsClickDown;
            });

            if(isClickDown && currentPlays == 0){
                ShotsUISystem.frameCount++;
                if(ShotsUISystem.frameCount % 14 == 0){
                    this.world.forEach([casualgf.NoShotsSprite, ut.Core2D.Sprite2DRenderer],
                        (peg, renderer) => { 
                        renderer.sprite = peg.NoShots;
                    });
                } else if (ShotsUISystem.frameCount % 14 == 7){
                    this.world.forEach([casualgf.NoShotsSprite, ut.Core2D.Sprite2DRenderer],
                        (peg, renderer) => { 
                        renderer.sprite = peg.DefaultSprite;
                    });
                }

            }
            else  {                 
                ShotsUISystem.frameCount = 0; 
                this.world.forEach([casualgf.ShotPeg, ut.Core2D.Sprite2DRenderer],
                    (peg, renderer) => { 
                    if(index < currentPlays){
                        renderer.sprite = peg.InitialSprite;
                    } else if (index == currentPlays){
                        if(isClickDown){
                            renderer.sprite = peg.CurrentSprite;
                        }
                        else{
                            renderer.sprite = peg.InitialSprite;
                        }
                    }
                    else{
                        renderer.sprite = peg.UsedSprite;
                    }
                    index++;
                });
            }          
         */

    }
}
