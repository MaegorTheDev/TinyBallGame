
namespace casualgf {

    /** New System */
    //System to to manage the rewarded ads
    export class FreeRewardSystem extends ut.ComponentSystem {
        
        //Reward system instance
        protected static Instance: FreeRewardSystem = null;
        public static getInstance(): FreeRewardSystem {
            if (FreeRewardSystem.Instance === null) {
                FreeRewardSystem.Instance = new FreeRewardSystem();
            }
            return FreeRewardSystem.Instance;
        }
        public entityGroup:ut.Entity[];
        static active:boolean;

        
        public preloadedRewardedVideo;

        OnUpdate():void {
            if(FreeRewardSystem.active){
                //Checks the state of all the rewards
                FreeRewardSystem.CheckStateOfItems();

                //Checks the player input
                let hit = FreeRewardSystem.Instance.GetCurrentEntityHit();

                if(hit != undefined && !hit.entityHit.isNone() && this.world.getEntityName(hit.entityHit) == "GoBack") 
                    FreeRewardSystem.Instance.HideFreeRewardMenu();  
                else if(hit!=undefined && !hit.entityHit.isNone() && this.world.hasComponent(hit.entityHit, casualgf.FreeRewardedAd))  {
                    //Preloads the video for the next ad
                    if(this.preloadedRewardedVideo == undefined){
                        FreeRewardSystem.PreLoadAdd(true, hit.entityHit);
                    }else {
                        //Shows the previously loaded ad
                        FreeRewardSystem.ShowRewardedAdd(hit.entityHit);
                    }
                }
            }
        }

        //Shows the free reward screen
        public ShowFreeRewardMenu(){    
            GameSystem.DestroyMainScreen(GameSystem.world, false); 
            this.entityGroup = ut.EntityGroup.instantiate(GameSystem.world, 'casualgf.FreeRewardMenu'); 
            FreeRewardSystem.active = true;
            FreeRewardSystem.PreLoadAdd(false);
        }
        //Destroys the free reward screen
        public HideFreeRewardMenu(){
            ut.EntityGroup.destroyAll(GameSystem.world, 'casualgf.FreeRewardMenu');
            GameSystem.ShowMainScreen(); 
            FreeRewardSystem.active = false;
        }


        //Checks the input from the player
        public GetCurrentEntityHit():ut.HitBox2D.HitTestResult{

            if(!ut.Core2D.Input.isTouchSupported()){
                if (ut.Runtime.Input.getMouseButtonUp(0)) {
                    let mousePos = ut.Core2D.Input.getWorldInputPosition(GameSystem.world);
                    let hit = ut.HitBox2D.HitBox2DService.hitTest(GameSystem.world, mousePos, GameSystem.world.getEntityByName("Camera"));
                    return hit;               
                }
            }				
            else {
                if (ut.Core2D.Input.touchCount() > 0) {
                    let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                        if (touch.phase == ut.Core2D.TouchState.Ended){    
                            let mousePos = ut.Core2D.Input.getWorldInputPosition(GameSystem.world);
                            let hit = ut.HitBox2D.HitBox2DService.hitTest(GameSystem.world, mousePos, GameSystem.world.getEntityByName("Camera"));
                            return hit;   
                                          
                        }	
                    }
                }
        }

        //
        static CheckStateOfItems(){
            let helperEntity = GameSystem.world.getEntityByName("Spawners");
            let helperData = GameSystem.world.getComponentData(helperEntity, casualgf.FreeRewardsHelper);
            //Checks the time to reset the rewards
            if(helperData.ResetDateTime != ""){
                let date = new Date(helperData.ResetDateTime);
                if(date < new Date()){
                    //Resets
                    helperData.CurrentIndex = 0;
                    GameSystem.world.setComponentData(helperEntity, helperData);
                }
            }
            
            GameSystem.world.forEach([ut.Entity, casualgf.FreeRewardedAd, ut.Core2D.Sprite2DRenderer], (entity, item, renderer) => {
                if(item.Index == helperData.CurrentIndex){
                    //Current ad too see
                    if(GameSystem.world.exists(item.UnactiveSpriteEntity) && item.Available){
                        GameSystem.world.usingComponentData(item.UnactiveSpriteEntity, [ut.Core2D.Sprite2DRenderer], (renderer)=>{
                            renderer.color = new ut.Core2D.Color(renderer.color.r, renderer.color.g, renderer.color.b, 0);
                        });
                    }
                    renderer.sprite = item.AvailableSprite;
                    item.Available = true;
                }else if(item.Index < helperData.CurrentIndex){
                    //Consumed add, shows the unactive sprite entity                    
                    renderer.sprite = item.CollectedSprite;                    
                    item.Available = false;
                    GameSystem.world.usingComponentData(item.UnactiveSpriteEntity, [ut.Core2D.Sprite2DRenderer], (renderer)=>{
                        renderer.color = new ut.Core2D.Color(renderer.color.r, renderer.color.g, renderer.color.b, 0);
                    });

                } else if(item.Index > helperData.CurrentIndex){
                    //Not available until the previous ad is consumed.
                    GameSystem.world.usingComponentData(item.UnactiveSpriteEntity, [ut.Core2D.Sprite2DRenderer], (renderer)=>{
                        renderer.color = new ut.Core2D.Color(renderer.color.r, renderer.color.g, renderer.color.b, 1);
                    });            
                    renderer.sprite = item.AvailableSprite;                      
                    item.Available = false;
                }
            });

        }

        //Preloads the rewarded video
        static PreLoadAdd(instaPlay:boolean, hitEntity?:ut.Entity){
            if(FBInstantService.getInstance().isAvailable){

                FBInstant.getRewardedVideoAsync(
                '308143733181634_318327658829908', // Your Ad Placement Id
                ).then(function(rewarded) {
                // Load the Ad asynchronously
                    FreeRewardSystem.Instance.preloadedRewardedVideo = rewarded;
                    return  rewarded.loadAsync();
                    }).then(function() {
                        console.log('Rewarded preloaded')
                        if(instaPlay){
                            FreeRewardSystem.ShowRewardedAdd(hitEntity);
                        }
                    }).catch(function(err){
                        FreeRewardSystem.Instance.preloadedRewardedVideo=undefined;
                        console.error('Rewarded failed to preload: ' + err.message);
                    });
            }    
        }

        //Shows the add
        static ShowRewardedAdd(hitEntity:ut.Entity) {
                FBInstant; // this will error out if it's not available

                if(FreeRewardSystem.Instance.preloadedRewardedVideo == undefined){
                    console.log("No ad was loaded");
                    return;
                }
            
                FreeRewardSystem.Instance.preloadedRewardedVideo.showAsync()
                    .then(function() {
                    // Perform post-ad success operation
                        //console.log('Interstitial ad finished successfully'); 
                        let helperEntity = GameSystem.world.getEntityByName("Spawners"); 
                        let hit =  GameSystem.world.getComponentData(hitEntity, casualgf.FreeRewardedAd);
                      
                        GameSystem.world.usingComponentData(helperEntity, [casualgf.FreeRewardsHelper], (helper)=>{
                            if(hit.Available){
                                if(helper.CurrentIndex == 0){
                                    var dt = new Date();
                                    //Set the next reward time
                                    dt.setHours( dt.getHours() + 2 );
                                    //dt.setSeconds(dt.getSeconds() + 30);
                                    helper.ResetDateTime = dt.toString();
                                    FBInstantService.getInstance().SetFreeRewardsResetTime(dt.toString());
                                }
                                //Sets the player values
                                helper.CurrentIndex = helper.CurrentIndex + 1 ;
                                FBInstantService.getInstance().SetFreeRewardsCurrentIndex(helper.CurrentIndex);
                                GameSystem.AddCoins( GameSystem.world, hit.Reward);                                
                                FreeRewardSystem.PreLoadAdd(false);
                            }
                        });    
                    })
                    .catch(function(e) {
                        console.error(e.message);
                    });
        }

    }
}

    
    

