namespace casualgf {
 
    export class FBInstantService {
 
        //Instance of the Facebook Service
        protected static Instance: FBInstantService = null;
        protected hasInstant: boolean = false;
 
        //Static method to get the instance
        public static getInstance(): FBInstantService {
            if (FBInstantService.Instance === null) {
                FBInstantService.Instance = new FBInstantService();
            }
            return FBInstantService.Instance;
        }

        //Starting the Facebook Service
        public async initialize(world: ut.World) {
            try {                          
                FBInstant; // this will error out if it's not available
                this.hasInstant = true;
                // let's do our async and goto main menu.
                await FBInstant.initializeAsync();
                    FBInstant.setLoadingProgress(50);
                    //TODO Dinamic loading of assets  
                FBInstant.onPause(()=>{
                    //console.log("Paused");
                }) ;   
                
                //Starts the game asynchronusly
                return await FBInstant.startGameAsync().then(()=>{
                    //Gets the foto URL
                    let imageURL = FBInstant.player.getPhoto();
                    let downloadedImg = new Image;
                    downloadedImg.crossOrigin = "Anonymous";
                    //This is necesary to get the photo because its a crossOrigin link
                    downloadedImg.onload = function(){       
                        let canvas = document.createElement("canvas");
                        let context = canvas.getContext("2d");
            
                        canvas.width = downloadedImg.width;
                        canvas.height = downloadedImg.height;
                        context.drawImage(downloadedImg, 0, 0);
                        
                        //Sets the photo in the canvas bellow the data to call after and paste inside the game
                        document.getElementsByTagName("body")[0].appendChild(canvas);        
                            try {                                                    
                                localStorage.setItem(FBInstant.player.getID(), canvas.toDataURL("image/jpeg")); 
                                FBInstant.setLoadingProgress(100);    
                                let entity = world.getEntityByName("FBItem");   

                                //Sets the player data into the player data component
                                let playerData = new casualgf.InitializeFBInstantComponent;
                                playerData.PlayerID =  FBInstant.player.getID();
                                playerData.PlayerName = FBInstant.player.getName();               
                                playerData.Image = FBInstant.player.getPhoto(); 
                                playerData.Loaded = true;
                                world.setComponentData(entity, playerData);        
                                FBInstantService.getInstance().GetCoins();                                       
                                FBInstantService.getInstance().GetFreeRewardsValues();       
                                FBInstantService.getInstance().DoesPlayTutorial();  
                            }
                            catch (err) {
                                //console.log("Error: " + err);
                            }
                    };
                    downloadedImg.src = imageURL;                
                });
            } catch (e) {                
                // Error charging the FbInstant sdk
                this.hasInstant = false;
                GameSystem.ShowMainScreen(world);        
            }
            
            return;
        }

        //Sets the coins value into the fb user data
        public SetCoins(coins:number){
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

        //Gets the number of coins stored in the fb user data
        public GetCoins(){
            
            if(this.hasInstant){
                FBInstant.player
                .getDataAsync(['currentCoins'])
                .then(function(data) {
                    ////console.log('data is loaded');
                    //If its the first time playing, set it as 0
                    if(data['currentCoins'] == undefined){
                        GameSystem.SetCoin(0);
                    }
                    else{
                        //Sets the current data
                        GameSystem.SetCoin( data['currentCoins']);
                    }
                }); 
            }
        }

        //Method to check the state of the rewarded ads and set the values of the componets
        public GetFreeRewardsValues(){
            if(this.hasInstant){
                FBInstant.player
                //Tries to get the time to reset and the index of the current reward unlocked
                .getDataAsync(['freeRewardsResetTime', 'freeRewardsCurrentIndex'])
                .then(function(data) {
                    ////console.log('data is loaded');
                    let helperEntity = GameSystem.world.getEntityByName("Spawners");
                    GameSystem.world.usingComponentData(helperEntity, [casualgf.FreeRewardsHelper], (helper)=>{
                        //If its the first time , sets the data as ""
                        if(data['freeRewardsResetTime'] == undefined){       
                                helper.ResetDateTime = "";
                            } else{                         
                                helper.ResetDateTime = data['freeRewardsResetTime'];
                            }      

                            if(data['freeRewardsCurrentIndex'] == undefined){     
                                helper.CurrentIndex = 0;
                            } else{
                               helper.CurrentIndex = data['freeRewardsCurrentIndex'];
                            }      
                    });
                }); 
            }
        }

        //Adds the reward reset time to the user fb data
        public SetFreeRewardsResetTime(date:String){          
            if(this.hasInstant){
                FBInstant.player
                .setDataAsync({
                    freeRewardsResetTime: date,
                })
                .then(function() {
                    //console.log('data updated');
                });
            }
        }

        //Sets the current index of awarded ads
        public SetFreeRewardsCurrentIndex(index:number){   
            if(this.hasInstant){
                FBInstant.player
                .setDataAsync({
                    freeRewardsCurrentIndex: index,
                })
                .then(function() {
                    //console.log('data updated');
                });
            }
        }


        //Checks if the player has player the tutorial
        public DoesPlayTutorial(){  
            
            if(this.hasInstant){
                FBInstant.player
                .getDataAsync(['playTutorial'])
                .then(function(data) {
                    ////console.log('data is loaded');
                    //Checks if the attribute playTutorial exist or is false to set the value inside the world object
                    if(data['playTutorial'] == undefined || data['playTutorial'] == false){
                        TutorialSystem.playTutorial = true;
                        FBInstant.player
                        .setDataAsync({
                            //Sets the value in the fb value
                            playTutorial: true,
                        })
                        .then(function() {
                            //console.log('data updated');
                        });
                    }   else {
                        //Starts the main scene
                        GameSystem.ShowMainScreen(this.world);               
                    }                   
                }); 
            }
        }

        //Sets the profile pic previously loaded into the sprite in the world
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
            
                // Image2DLoadFromFile Loads the image into the loader
                let loader = new ut.Core2D.Image2DLoadFromFile();
                loader.imageFile = imageBase64;
                world.addComponentData(imgEntity, loader);
            
                // Sprite2D from the loader
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


        //---------------------------------------
        //Analytics
        //---------------------------------------

        //Level passed event
        public SuccessLevelEvent(group:number, levelIndex: number){
            if(this.hasInstant){
                var params = [];
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                FBInstant.logEvent("level_passed",null, params);
            }
        }

        //Level failed event
        public FailedLevelEvent(group:number, levelIndex: number){
            if(this.hasInstant){
                var params = [];  
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                FBInstant.logEvent("level_failed",null, params);
            }
        }
        //Respawned in the level using coins event
        public Respawned(group:number, levelIndex: number, coinsSpend:number){
            if(this.hasInstant){
                var params = [];  
                params['GROUP'] = group;
                params['LEVEL'] = levelIndex;
                params['COINS'] = coinsSpend;
                FBInstant.logEvent("respawned",null, params);
            }
        }
    }
 
 
    export enum ContextFilter {
        NEW_CONTEXT_ONLY = "NEW_CONTEXT_ONLY",
        INCLUDE_EXISTING_CHALLENGES = "INCLUDE_EXISTING_CHALLENGES",
        NEW_PLAYERS_ONLY = "NEW_PLAYERS_ONLY",
    }
}
 