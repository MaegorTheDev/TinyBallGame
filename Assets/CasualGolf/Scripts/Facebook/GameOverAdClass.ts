
namespace casualgf {

    /** New System */
    //This Class manages the game over ads
    export class GameOverAdClass {
 
        protected static Instance: GameOverAdClass = null;
        protected hasInstant: boolean = false;
        public preloadedInterstitial;

        
        public static getInstance(): GameOverAdClass {
            if (GameOverAdClass.Instance === null) {
                GameOverAdClass.Instance = new GameOverAdClass();
            }
            return GameOverAdClass.Instance;
        }

        //Preload the ad
        public PreLoadAdd(){
            GameOverAdClass.Instance.preloadedInterstitial = null;
            if(FBInstantService.getInstance().isAvailable){

                FBInstant.getInterstitialAdAsync(
                '308143733181634_318329855496355', // Your Ad Placement Id
                ).then(function(interstitial) {
                // Load the Ad asynchronously
                    GameOverAdClass.Instance.preloadedInterstitial = interstitial;
                    return  GameOverAdClass.Instance.preloadedInterstitial.loadAsync();
                    }).then(function() {
                        console.log('Interstitial preloaded')
                    }).catch(function(err){
                        console.error('Interstitial failed to preload: ' + err.message);
                    });
            }    
        }

        //Shows the Ad
        public async ShowIntersititialAd() {
                FBInstant; // this will error out if it's not available

                if(GameOverAdClass.Instance.preloadedInterstitial == undefined){
                    console.log("No ad was loaded");
                    return;
                }
            
                return await GameOverAdClass.Instance.preloadedInterstitial.showAsync()
                    .then(function() {
                    // Perform post-ad success operation
                        console.log('Interstitial ad finished successfully');        
                    })
                    .catch(function(e) {
                        console.error(e.message);
                    });
        }

    }
}
