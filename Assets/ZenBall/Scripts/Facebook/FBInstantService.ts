namespace casualgf {
 
    export class FBInstantService {
 
        protected static Instance: FBInstantService = null;
        protected hasInstant: boolean = false;
 
        public static getInstance(): FBInstantService {
            if (FBInstantService.Instance === null) {
                FBInstantService.Instance = new FBInstantService();
            }
            return FBInstantService.Instance;
        }
 
        public async initialize(world: ut.World) {
            try {                          
                FBInstant; // this will error out if it's not available
                this.hasInstant = true;
                // let's do our async and goto main menu.
                await FBInstant.initializeAsync();
                    FBInstant.setLoadingProgress(50);
                    //console.log("Starting casualgf async...");   
                FBInstant.onPause(()=>{
                    //console.log("Paused");
                }) ;   
                
                return await FBInstant.startGameAsync().then(()=>{
                    let imageURL = FBInstant.player.getPhoto();
                    let downloadedImg = new Image;
                    downloadedImg.crossOrigin = "Anonymous";
                    downloadedImg.onload = function(){       
                        let canvas = document.createElement("canvas");
                        let context = canvas.getContext("2d");
            
                        canvas.width = downloadedImg.width;
                        canvas.height = downloadedImg.height;
                        context.drawImage(downloadedImg, 0, 0);
                        document.getElementsByTagName("body")[0].appendChild(canvas);        
                            try {                                                    
                                localStorage.setItem(FBInstant.player.getID(), canvas.toDataURL("image/jpeg")); 
                                FBInstant.setLoadingProgress(100);    
                                let entity = world.getEntityByName("FBItem");   

                                let playerData = new casualgf.InitializeFBInstantComponent;
                                playerData.PlayerID =  FBInstant.player.getID();
                                playerData.PlayerName = FBInstant.player.getName();               
                                playerData.Image = FBInstant.player.getPhoto(); 
                                playerData.Loaded = true;
                                world.setComponentData(entity, playerData);        
                                FBInstantService.getInstance().SetCoins();  
                            }
                            catch (err) {
                                //console.log("Error: " + err);
                            }
                    };
                    downloadedImg.src = imageURL;                
                });
            } catch (e) {                
                // We don't have this, so let's  just goto the main menu state
                this.hasInstant = false;
                GameSystem.ShowMainScreen(world);        
            }
            
            return;
        }

        public UpdateCoins(coins:number){
            if(this.hasInstant){
                FBInstant.player
                .setDataAsync({
                    currentCoins: coins,
                })
                .then(function() {
                    //console.log('data updated');
                });
            }
        }

        public SetCoins(){
            
            if(this.hasInstant){
                FBInstant.player
                .getDataAsync(['currentCoins'])
                .then(function(data) {
                    ////console.log('data is loaded');
                    if(data['currentCoins'] == undefined){
                        GameSystem.SetCoin(0);
                    }
                    else{
                        GameSystem.SetCoin( data['currentCoins']);
                    }
                }); 
            }
        }

        public SuccessLevelEvent(group:number, levelIndex: number){
            if(this.hasInstant){
                var params = [];
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                FBInstant.logEvent("level_passed",null, params);
            }
        }

        public FailedLevelEvent(group:number, levelIndex: number){
            if(this.hasInstant){
                var params = [];  
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                FBInstant.logEvent("level_failed",null, params);
            }
        }

        public Respawned(group:number, levelIndex: number, coinsSpend:number){
            if(this.hasInstant){
                var params = [];  
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                params['COINS'] = coinsSpend;
                FBInstant.logEvent("respawned",null, params);
            }
        }

        public ShowProfilePic(world:ut.World){
            let profilePhoto = world.getEntityByName("GameStartPhoto");
                let fbItem = world.getEntityByName("FBItem");
                let playerData = world.getComponentData(fbItem, casualgf.InitializeFBInstantComponent);
                let imageBase64 =  localStorage.getItem(playerData.PlayerID);
    
                 // Image2D
                let imgEntity = world.createEntity();
                world.addComponent(imgEntity, ut.Core2D.Image2D);
                let image = new ut.Core2D.Image2D();
                image.pixelsToWorldUnits = 1;
                world.setComponentData(imgEntity, image);
            
                // Image2DLoadFromFile
                let loader = new ut.Core2D.Image2DLoadFromFile();
                loader.imageFile = imageBase64;
                world.addComponentData(imgEntity, loader);
            
                // Sprite2D
                let sprite2DEntity = world.createEntity();
                let sprite2D = new ut.Core2D.Sprite2D();
                sprite2D.image = imgEntity;
                sprite2D.imageRegion = new ut.Math.Rect(0, 0, 1, 1);            
                sprite2D.pivot = new ut.Math.Vector2(0.5,0.5);
                world.addComponentData(sprite2DEntity, sprite2D);
            
               //Sprite2DRenderer
                var sprite2DRenderer = world.getComponentData(profilePhoto, ut.Core2D.Sprite2DRenderer);
                sprite2DRenderer.sprite = sprite2DEntity;
                world.setComponentData(profilePhoto, sprite2DRenderer);                
        }

 
        public get isAvailable(): boolean {
            return this.hasInstant;
        }

        
    }
 
 
    export enum ContextFilter {
        NEW_CONTEXT_ONLY = "NEW_CONTEXT_ONLY",
        INCLUDE_EXISTING_CHALLENGES = "INCLUDE_EXISTING_CHALLENGES",
        NEW_PLAYERS_ONLY = "NEW_PLAYERS_ONLY",
    }
}
 