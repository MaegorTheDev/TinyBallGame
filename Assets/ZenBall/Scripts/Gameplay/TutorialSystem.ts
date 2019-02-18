
namespace game {

    @ut.executeBefore(game.GameSystem)
    /** New System */
    export class TutorialSystem extends ut.ComponentSystem {
        static index = -1; 
        static firstTutorial = false;
        static nextTutorial = true;
        static waitForClick = false;

        public tutorials:Array<ut.Entity>;

        public TutorialEntity;
        static maxIndex = 0;
        static ShowingFeedbackScreen;
        static resetTutorial = false;
        
        OnUpdate():void {       
            let playTutorial = false               
            this.world.forEach([game.TutorialHelper], (tutorial ) => {        
                playTutorial = tutorial.PlayTutorial;  
            });           

            if(playTutorial){
                GameSystem.isInTutorial = true;
                if(!TutorialSystem.firstTutorial){    
                    this.TutorialEntity = ut.EntityGroup.instantiate(this.world, 'game.TutorialEntityGroup');
                    GameSystem.CurrentGameMode = GameState.Tutorial;    
                    TutorialSystem.firstTutorial= true;
                }

                if(TutorialSystem.nextTutorial){
                    this.NextTutorial();
                }

                if(TutorialSystem.waitForClick){      
                    if(!ut.Core2D.Input.isTouchSupported()){
                        if (ut.Runtime.Input.getMouseButtonUp(0)) {                                 
                            if(TutorialSystem.ShowingFeedbackScreen == true){
                                //hide the screens                                
                                TutorialSystem.HideFeedBack(this.world);
                                return;
                            }             
                            this.NextTutorial();
                        }
                    } 
                    else {
                        if (ut.Core2D.Input.touchCount() > 0) {                            
                        let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                            if (touch.phase == ut.Core2D.TouchState.Ended){                                                          
                                if(TutorialSystem.ShowingFeedbackScreen == true){
                                    //hide the screens
                                    TutorialSystem.HideFeedBack(this.world);
                                    return;
                                }                                       
                                this.NextTutorial();
                            }
                        }
                    }        

                }
            }

        }
      
        public NextTutorial(){        
            TutorialSystem.index++;                 
            TutorialSystem.nextTutorial = false;              
            if(this.FinishTutorial()){
                return;
            }

            //Get Current tutorial and update
            this.CheckTutorialObjectsStatus();
            let tutorialObjectList;
            let tries;   
            let startingPosition;
            this.world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index){
                    tutorialObjectList = tutorial.ChildEntities;
                    tries = tutorial.Tries;
                    startingPosition = tutorial.BallPosition;
                }              
            });        

            //Start new tutorial
            if(tries > 0){              
                BallSystem.SetBallPosition( startingPosition, this.world);       
                GameSystem.currentPlays = tries;                      
                TutorialSystem.waitForClick = false;                
                //ShotsUISystem.UpdateShotsPeg(this.world);                            
                GameSystem.AddScore(0, this.world);
            } else {                
                GameSystem.CurrentGameMode = GameState.Tutorial;
                TutorialSystem.waitForClick = true;
                //ut.EntityGroup.destroyAll(this.world, "game.BallGroup");                
                BallSystem.SetBallPosition(new Vector3(-75,-75), this.world);
                ScoreSystem.CleanScore(this.world);
            }          
            
            //Set Active the current tutorial objects
            for(let i = 0; i < tutorialObjectList.length; i++){    
                TutorialSystem.setEntityEnabled(this.world, tutorialObjectList[i], true);
            }                  
            //HoleSystem.CheckNewLevel = true; 
        }
        public FinishTutorial():boolean{             
            //Ending tutorials!
            if(TutorialSystem.index  > TutorialSystem.maxIndex){
                this.world.forEach([game.TutorialHelper], (tutorial) => {        
                    tutorial.PlayTutorial = false;  
                });         
                TutorialSystem.waitForClick = false;    
                ut.EntityGroup.destroyAll(this.world, 'game.TutorialEntityGroup'); 
                GameSystem.PlayGame(this.world);
                return true;
            }
            return false;
        }

        static ResetTutorial(world: ut.World){
            let entityBall = world.getEntityByName("Ball");
            world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {  
                       
                    if(tutorial.Index == TutorialSystem.index){                        
                        if(tutorial.Tries > 0){                            
                            GameSystem.currentPlays = tutorial.Tries;                        
                            TutorialSystem.waitForClick = false;
                            if(!entityBall.isNone()){
                                BallSystem.ChangeBallSpeedAndPosition(new Vector2(0,0), tutorial.BallPosition, entityBall, world);
                            }    
                        } else {
                            GameSystem.CurrentGameMode = GameState.Tutorial;                            
                            TutorialSystem.waitForClick = true;
                        }    
                    }
                });      
                TutorialSystem.ShowCurrentTutorialObjects(world);       
                GameSystem.SetScore(0, world);     
        }

        static HideFeedBack(world:ut.World){
            let tutorialEntity = world.getEntityByName("Tutorial");
            if(!tutorialEntity.isNone()){   
                world.usingComponentData(tutorialEntity, [game.TutorialScreens], (TutorialScreens)=>{
                    TutorialSystem.setEntityEnabled(world, TutorialScreens.Win, false);
                    TutorialSystem.setEntityEnabled(world, TutorialScreens.Lose, false);
                });
            }

            if(TutorialSystem.resetTutorial){
                TutorialSystem.ResetTutorial(world);
            } 
            else {
                TutorialSystem.nextTutorial = true;
            }

            
            TutorialSystem.ShowingFeedbackScreen = false;            
            TutorialSystem.waitForClick = false;            
        }

        static ShowTutorialWinScreen(world:ut.World){     
            
            TutorialSystem.HideCurrentTutorialObjects(world);                       
            BallSystem.SetBallPosition(new Vector3(-75,-75), world);       
            let tutorialEntity = world.getEntityByName("Tutorial");
            if(!tutorialEntity.isNone()){   
                world.usingComponentData(tutorialEntity, [game.TutorialScreens], (TutorialScreens)=>{
                    TutorialSystem.setEntityEnabled(world, TutorialScreens.Win, true);
                });
            }
            TutorialSystem.ShowingFeedbackScreen = true;            
            TutorialSystem.waitForClick = true;            
            TutorialSystem.resetTutorial = false;
        }

        static ShowTutorialFailScreen(world:ut.World){
            
            TutorialSystem.HideCurrentTutorialObjects(world);                      
            BallSystem.SetBallPosition(new Vector3(-75,-75), world);
            let tutorialEntity = world.getEntityByName("Tutorial");
            if(!tutorialEntity.isNone()){   
                world.usingComponentData(tutorialEntity, [game.TutorialScreens], (TutorialScreens)=>{
                    TutorialSystem.setEntityEnabled(world, TutorialScreens.Lose, true);
                });
            }            
            TutorialSystem.ShowingFeedbackScreen = true;            
            TutorialSystem.waitForClick = true;   
            TutorialSystem.resetTutorial = true;
        }

        static HideCurrentTutorialObjects(world:ut.World){            
            world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index) {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        TutorialSystem.setEntityEnabled(world, tutorial.ChildEntities[i], false);
                    }
                }
            });         
        }

        static ShowCurrentTutorialObjects(world:ut.World){
            world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index) {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        TutorialSystem.setEntityEnabled(world, tutorial.ChildEntities[i], true);
                    }
                }
            });         
        }

        
        public CheckTutorialObjectsStatus(){
            this.world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index < TutorialSystem.index ){
                        for(let i = 0; i < tutorial.ChildEntities.length; i++){
                            if(this.world.exists(tutorial.ChildEntities[i]))
                                ut.Core2D.TransformService.destroyTree(this.world, tutorial.ChildEntities[i], true); 
                         }
                       //TutorialSystem.setEntityEnabled(this.world, entity, false);
                } else {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        TutorialSystem.setEntityEnabled(this.world, tutorial.ChildEntities[i], false);
                    }
                    if(TutorialSystem.maxIndex < tutorial.Index ){
                        TutorialSystem.maxIndex = tutorial.Index;
                    }
                }
            });         

        }
        static setEntityEnabled(world: ut.World, entity: ut.Entity, enabled: boolean) {
            if(world.exists(entity)){                
                let hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
                if (enabled && hasDisabledComponent) {                                    
                    world.removeComponent(entity, ut.Disabled);
                }
                else if (!enabled && !hasDisabledComponent) {  
                    world.addComponent(entity, ut.Disabled);
                }
            }
        }
    }
}
