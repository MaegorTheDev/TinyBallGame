
namespace game {    
    @ut.executeAfter(game.CoinSpawnSystem)
    /** New System */
    export class NextLevelSystem extends ut.ComponentSystem {
        static checkNextLevel = false;
        static actualCoins = 0;
        
        OnUpdate():void {
            //We just need to start the new level when hitting the hole
                 

            if(!NextLevelSystem.checkNextLevel){
                return;
            }
            this.CheckCollisions();
            
            return;
            if(GameSystem.isInTutorial ){                
                if(GameSystem.CurrentGameMode != GameState.Tutorial && !TutorialSystem.waitForClick){
                    this.CheckTutorial();  
                }   
               return;           
            }     
            if(NextLevelSystem.actualCoins >= CoinSpawnSystem.spawnedCoins && CoinSpawnSystem.spawnedCoins != 0){   
                           
               // NextLevelSystem.checkNextLevel = false;
               // NextLevelSystem.actualCoins = 0 ;
               // GameSystem.NewLevel(this.world);
            }
           
        }

        static NextLevel(world:ut.World){
            NextLevelSystem.checkNextLevel = false;
            NextLevelSystem.actualCoins = 0 ;
            GameSystem.NewLevel(world);
        }


        public CheckTutorial(){
            let currentCoins = 0;
            this.world.forEach([ut.Entity, game.Coin],
                (entity, coin) => {
                    if(!this.world.hasComponent(entity, ut.Disabled)){
                        currentCoins++;
                    }
            });
            if(currentCoins == 0){
                GameSystem.NewLevel(this.world);
            }
        }

        public CheckCollisions(){
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Coin],
                (entity, hitboxoverlapresults, coin) => {
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, game.Ball)){ 
                            if(this.world.exists(entity) &&  this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)){
                                ut.Core2D.TransformService.destroyTree(this.world, entity);     
                                TimeLethalitySystem.ResetTimer();   
                                CollisionAudioSystem.PlayCoinSound(this.world);               
                                NextLevelSystem.actualCoins++;
                            }                 
                        }
                        
                    }                
            });
        }
    }
}
