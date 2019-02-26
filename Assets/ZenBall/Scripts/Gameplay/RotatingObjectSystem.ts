
namespace game {

    /** New System */
    export class RotatingObjectSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalRotation ,game.RotatingObject], 
                (entity,rotation, RotatingObject) =>{         
                    if(RotatingObject.InitialRotation == new Quaternion){
                        RotatingObject.InitialRotation = rotation.rotation;
                    }

                    if(!RotatingObject.Active){
                        rotation.rotation = RotatingObject.InitialRotation;
                        return;
                    }
                                                     
                    let rotationQuaternion = new Quaternion().setFromAxisAngle(new Vector3(0,0,1), RotatingObject.Speed/100);
                    rotation.rotation = rotation.rotation.multiplyQuaternions(rotation.rotation, rotationQuaternion);                   
                    
                });
        }
    }
}