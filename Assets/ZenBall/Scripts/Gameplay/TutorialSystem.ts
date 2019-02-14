
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
                            this.NextTutorial();
                        }
                    } 
                    else {
                        if (ut.Core2D.Input.touchCount() > 0) {                            
                        let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                            if (touch.phase == ut.Core2D.TouchState.Ended){                            
                                this.NextTutorial();
                            }
                        }
                    }        

                }
            }

        }
        static ResetTutorial(world: ut.World){
            let entityBall = world.getEntityByName("Ball");
            if(!entityBall.isNone()){
              BallSystem.ChangeBallSpeedAndPosition(new Vector2(0,0), new Vector3(0,-20), entityBall, world);
            }
            world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                    if(tutorial.Index == TutorialSystem.index){                        
                        if(tutorial.Tries > 0){                            
                            GameSystem.currentPlays = tutorial.Tries;                        
                            TutorialSystem.waitForClick = false;
                        } else {
                            GameSystem.CurrentGameMode = GameState.Tutorial;                            
                            TutorialSystem.waitForClick = true;
                        }    
                        ShotsUISystem.UpdateShotsPeg(world);                 
                    }
                });      
                
                GameSystem.SetScore(0, world);     
        }

        public NextTutorial(){        
            TutorialSystem.index++;          
            //Iterate Over tutorials and change            
            TutorialSystem.nextTutorial = false;   
            
            //Ending tutorials!
            if(TutorialSystem.index  > TutorialSystem.maxIndex){
                this.world.forEach([game.TutorialHelper], (tutorial) => {        
                    tutorial.PlayTutorial = false;  
                });         
                TutorialSystem.waitForClick = false;    
                ut.EntityGroup.destroyAll(this.world, 'game.TutorialEntityGroup'); 
                GameSystem.PlayGame(this.world);
                return;
            }

            //Get Current tutorial and update
            this.CheckTutorialObjectsStatus();
            let tutorialObjectList;
            let tries;   
            this.world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index){
                    tutorialObjectList = tutorial.ChildEntities;
                    tries = tutorial.Tries;
                }              
            });        

            //Start new tutorial
            if(tries > 0){              
                BallSystem.SetBallPosition(new Vector3(0,-20), this.world);
                GameSystem.currentPlays = tries;                      
                TutorialSystem.waitForClick = false;                
                ShotsUISystem.UpdateShotsPeg(this.world);            
                
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
        
        public CheckTutorialObjectsStatus(){
            this.world.forEach([ut.Entity, game.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index < TutorialSystem.index ){
                        ut.Core2D.TransformService.destroyTree(this.world, entity);     
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
