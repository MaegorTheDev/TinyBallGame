namespace game {
 
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
                    console.log("Starting game async...");   
                     
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

                                let playerData = new game.InitializeFBInstantComponent;
                                playerData.PlayerID =  FBInstant.player.getID();
                                playerData.PlayerName = FBInstant.player.getName();               
                                playerData.Image = FBInstant.player.getPhoto(); 
                                playerData.Loaded = true;
                                world.setComponentData(entity, playerData);        
                                FBInstantService.getInstance().SetCoins();  
                            }
                            catch (err) {
                                console.log("Error: " + err);
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
                    console.log('data updated');
                });
            }
        }

        public SetCoins(){
            
            if(this.hasInstant){
                FBInstant.player
                .getDataAsync(['currentCoins'])
                .then(function(data) {
                    //console.log('data is loaded');
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
 