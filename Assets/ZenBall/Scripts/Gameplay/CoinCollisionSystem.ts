
namespace casualgf {    
    /** New System */
    export class CoinCollisionSystem extends ut.ComponentSystem {
        static actualCoins = 0;
        
        OnUpdate():void {
            //We just need to start the new level when hitting the hole
            this.CheckCollisions();          
        }

        static NextLevel(world:ut.World){
            CoinCollisionSystem.actualCoins = 0 ;
            GameSystem.NewLevel(world);
        }


        public CheckTutorial(){
            let currentCoins = 0;
            this.world.forEach([ut.Entity, casualgf.Coin],
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
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, casualgf.Coin],
                (entity, hitboxoverlapresults, coin) => {
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, casualgf.Ball)){ 
                            if(this.world.exists(entity) &&  this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)){
                                CoinSpawnSystem.DestroyCoin(this.world, entity);     
                                TimeLethalitySystem.ResetTimer();   
                                CollisionAudioSystem.PlayCoinSound(this.world);               
                                CoinCollisionSystem.actualCoins++;                                
                                GameSystem.AddCoin(this.world);
                            }                 
                        }
                        
                    }                
            });
        }
    }
}
