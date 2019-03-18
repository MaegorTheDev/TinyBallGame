
namespace game {

    /** New System */
    export class RotatingObjectSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            if(GameSystem.CurrentGameMode == GameState.GameEnd){
                return;
            }

            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalRotation ,game.RotatingObject], 
                (entity,rotation, RotatingObject) =>{                        
                    if(!RotatingObject.Active){
                        return;
                    }                             
                    if(RotatingObject.InitialRotation == new Quaternion){
                        RotatingObject.InitialRotation = rotation.rotation;
                    }                            
                    let rotationQuaternion = new Quaternion().setFromAxisAngle(new Vector3(0,0,1), RotatingObject.Speed/100);
                    rotation.rotation = rotation.rotation.multiplyQuaternions(rotation.rotation, rotationQuaternion);                   
                    
                });
        }

        static DeactivateRotatingObjects(world:ut.World){
            world.forEach([ut.Entity, game.RotatingObject], 
                (entity, RotatingObject) =>{       
                    RotatingObject.Active = false;
                });
        }
    }
}