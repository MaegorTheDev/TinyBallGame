
namespace casualgf {

    @ut.executeBefore(casualgf.GameSystem)
    /** New System */
    export class TutorialSystem extends ut.ComponentSystem {
        static index = -1; 
        static firstTutorial = false;
        static nextTutorial = true;
        static waitForClick = false;

        public static playTutorial:boolean;

        public tutorials:Array<ut.Entity>;

        public TutorialEntity;
        static maxIndex = 0;
        static ShowingFeedbackScreen;
        static resetTutorial = false;
        
        OnUpdate():void {                 

            if(TutorialSystem.playTutorial){
                GameSystem.isInTutorial = true;
                if(!TutorialSystem.firstTutorial){    
                    this.TutorialEntity = ut.EntityGroup.instantiate(this.world, 'casualgf.TutorialEntityGroup');
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
            this.world.forEach([ut.Entity, casualgf.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index){
                    tutorialObjectList = tutorial.ChildEntities;
                    tries = tutorial.Tries;
                    startingPosition = tutorial.BallPosition;
                }              
            });        

            //Start new tutorial
            if(tries > 0){              
                BallSystem.SetBallPosition( startingPosition, this.world);       
                TutorialSystem.waitForClick = false;      
                GameSystem.CurrentGameMode = GameState.Waiting;                             
                //GameSystem.AddCoin(this.world);
            } else {                
                //if tries is less than 1, then its an static tutorial to wait for the click
                GameSystem.CurrentGameMode = GameState.Tutorial;
                TutorialSystem.waitForClick = true;
                             
                BallSystem.SetBallPosition(new Vector3(-75,-75), this.world);
            }          

            
            
            //Set Active the current tutorial objects
            for(let i = 0; i < tutorialObjectList.length; i++){      
                TutorialSystem.setEntityEnabled(this.world, tutorialObjectList[i], true);
            }                  
        }

        public FinishTutorial():boolean{             
            //Ending tutorials!
            if(TutorialSystem.index  > TutorialSystem.maxIndex){
                TutorialSystem.playTutorial = false;
                TutorialSystem.waitForClick = false;                  
                GameSystem.isInTutorial = false;  
                ut.EntityGroup.destroyAll(this.world, 'casualgf.TutorialEntityGroup'); 
                GameSystem.ShowMainScreen(this.world);
                return true;
            }
            return false;
        }

        public static ResetTutorial(world: ut.World){
            let entityBall = world.getEntityByName("Ball");
            world.forEach([ut.Entity, casualgf.Tutorial], (entity, tutorial ) => {  
                       
                    if(tutorial.Index == TutorialSystem.index){                        
                        if(tutorial.Tries > 0){                            
                            //GameSystem.currentPlays = tutorial.Tries;                        
                            TutorialSystem.waitForClick = false;                            
                            GameSystem.CurrentGameMode = GameState.Waiting;  

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
                //GameSystem.SetScore(0, world);     
        }

        static HideCurrentTutorialObjects(world:ut.World){            
            world.forEach([ut.Entity, casualgf.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index) {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        TutorialSystem.setEntityEnabled(world, tutorial.ChildEntities[i], false);
                    }
                }
            });         
        }

        static ShowCurrentTutorialObjects(world:ut.World){
            world.forEach([ut.Entity, casualgf.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index == TutorialSystem.index) {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        TutorialSystem.setEntityEnabled(world, tutorial.ChildEntities[i], true);
                    }
                }
            });         
        }

        
        public CheckTutorialObjectsStatus(){
            this.world.forEach([ut.Entity, casualgf.Tutorial], (entity, tutorial ) => {          
                if(tutorial.Index < TutorialSystem.index ){
                        for(let i = 0; i < tutorial.ChildEntities.length; i++){
                            if(this.world.exists(tutorial.ChildEntities[i]))
                                ut.Core2D.TransformService.destroyTree(this.world, tutorial.ChildEntities[i], true); 
                         }
                       //TutorialSystem.setEntityEnabled(this.world, entity, false);
                } else {
                    for(let i = 0; i < tutorial.ChildEntities.length; i++){
                        //console.log("Deactivating object " + this.world.getEntityName(tutorial.ChildEntities[i]));
                        TutorialSystem.setEntityEnabled(this.world, tutorial.ChildEntities[i], false);
                    }
                    if(TutorialSystem.maxIndex < tutorial.Index ){
                        TutorialSystem.maxIndex = tutorial.Index;
                    }
                }
            });      

        }
        static setEntityEnabled(world: ut.World, entity: ut.Entity, enabled: boolean) {            
            if(!entity.isNone()){                
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
