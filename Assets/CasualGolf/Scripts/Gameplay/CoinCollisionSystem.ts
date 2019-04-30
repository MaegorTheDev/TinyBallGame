
namespace casualgf {    
    /** New System */
    export class CoinCollisionSystem extends ut.ComponentSystem {
        static actualCoins = 0;
        
        OnUpdate():void {          
            this.CheckCollisions();          
        }
        //Check the collisions of the coins to collect them
        public CheckCollisions(){
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, casualgf.Coin],
                (entity, hitboxoverlapresults, coin) => {
                    for (let i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                        let otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                        if(!this.world.exists(otherEntity) || this.world.hasComponent(otherEntity, casualgf.Ball)){ 
                            if(this.world.exists(entity) &&  this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)){
                                CoinSpawnSystem.DestroyCoin(this.world, entity);     
                                //TimeLethalitySystem.ResetTimer();   
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
