
namespace game {

    /** New System */
    export class ScoreSystem extends ut.ComponentSystem {
        static textEntity:ut.Entity;        
        OnUpdate():void {

        }
        static UpdateScore(world:ut.World){
            return;
            if(ScoreSystem.textEntity == undefined || ScoreSystem.textEntity.isNone()){
                ScoreSystem.textEntity = world.getEntityByName("ScoreText");
            }

            world.usingComponentData(ScoreSystem.textEntity,[ut.Entity, ut.Text.Text2DRenderer], 
                (entity, text ) => {
                text.text = GameSystem.coins + "";
            });
        }

        static CleanScore(world:ut.World){
            return;
            if(ScoreSystem.textEntity == undefined || ScoreSystem.textEntity.isNone()){
                ScoreSystem.textEntity = world.getEntityByName("ScoreText");
            }

            world.usingComponentData(ScoreSystem.textEntity,[ut.Entity, ut.Text.Text2DRenderer], 
                (entity, text ) => {
                text.text = "";
            });
        }
    }
}
