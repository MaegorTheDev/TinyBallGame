
namespace game {
    /** New System */
    export class JsonObstacleSpawner extends ut.ComponentSystem {
        static loaded = false;
        static load = true;
        static levels:Levels;

        static currentGroup = 0;

        OnUpdate():void {   
            let spawnMode;

            if(GameSystem.isInTutorial){
                return;
            }
               
            let objectSpawner = this.world.getEntityByName("Spawners");
            if(objectSpawner.isNone()){                  
                ut.EntityGroup.instantiate(this.world, 'game.GameplayEntityGroup');   
                objectSpawner  = this.world.getEntityByName("Spawners");
            }                     
               
            this.world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], 
                (helper)=>{               
                    spawnMode = helper.SpawnMode;            
                });     
            
                         

            if(spawnMode != ObstacleSpawnerMode.Json){
                return;
            } 

            if(JsonObstacleSpawner.load){                  
                JsonObstacleSpawner.load= false; 
                ut.JsonUtils.loadAssetAsync("levels", (error, data) => {
                    if (error) {                                
                      JsonObstacleSpawner.load = true; 
                      console.error(error);
                      return;
                    }                                     
                    JsonObstacleSpawner.loadLevels(data);
                    
                  });
            }
            if(GameSystem.spawnObstacles && JsonObstacleSpawner.loaded){
                //SpawnObjects                
                let cGroup = JsonObstacleSpawner.levels.Groups[JsonObstacleSpawner.currentGroup];     
                JsonObstacleSpawner.SpawnRoom(cGroup.RandomRoom(), this.world);   
                if(JsonObstacleSpawner.currentGroup <  JsonObstacleSpawner.levels.Groups.length - 1){
                    JsonObstacleSpawner.currentGroup++;
                }

                GameSystem.spawnCoins = true;
                GameSystem.spawnObstacles = false;
            }
        }

        static loadLevels(data){
            JsonObstacleSpawner.levels  = new Levels(data);               
            JsonObstacleSpawner.loaded = true; 
        }

        static SpawnRoom(room:Room, world:ut.World){            	  
            BallSystem.SetBallPosition(room.initialBallPos, world);

            let putt = world.getEntityByName("Putt");
            if(!putt.isNone()){
                world.usingComponentData(putt,  [ut.Core2D.TransformLocalPosition], 
                    (position,)=>{   
                        position.position = room.initialBallPos;
                    });
            }

            let hole = ut.EntityGroup.instantiate(world, "game.Hole")[0];
            world.usingComponentData(hole,  [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], 
                (position, scale)=>{   
                    position.position = room.HolePos;
                    scale.scale = room.HoleScale;
                });
            for(let i = 0; i<room.ObstacleData.length; i++){
                let obstacle = ut.EntityGroup.instantiate(world, "game.Obstacle")[0];      
                world.usingComponentData(obstacle, 
                    [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.HitBox2D.RectHitBox2D, ut.Physics2D.BoxCollider2D], 
                    (positionObstacle, rotation,  renderer, rendererOptions, hitbox, boxCollider)=>{     
                    positionObstacle.position = new Vector3(room.ObstacleData[i].X, room.ObstacleData[i].Y)
                    rotation.rotation.setFromAxisAngle(new Vector3(0,0,1),room.ObstacleData[i].Rotation * Math.PI / 180);
                    
                    //Scaleing 
                    rendererOptions.size = new Vector2(room.ObstacleData[i].ScaleX,room.ObstacleData[i].ScaleY);
                    boxCollider.size = new Vector2(room.ObstacleData[i].ScaleX,room.ObstacleData[i].ScaleY);
                    hitbox.box.x = room.ObstacleData[i].ScaleX;
                    hitbox.box.y = room.ObstacleData[i].ScaleY;
                    hitbox.box.width = -1*(room.ObstacleData[i].ScaleX/2);                    
                    hitbox.box.heighta = -1*(room.ObstacleData[i].ScaleY/2);


                    if(room.ObstacleData[i].Type == "L"){
                        renderer.color = new ut.Core2D.Color(212/255, 108/255, 75/255, 1);
                        world.addComponent(obstacle, game.Lethal);
                    }
                });           
            }
            
        }
       
    }

    export class Levels {
        constructor(data) {      
            this.Groups =  new Array(data.Groups.length);
            for(let i = 0; i< this.Groups.length; i++){
                this.Groups[i]=new Group(data.Groups[i]);
            }
        }

        public Groups:Group[];
    }
    export class Group{
        constructor(data) {
            this.Rooms =  new Array(data.RoomGroup.length);        
            for(let i = 0; i< this.Rooms.length; i++){
                let ballPosition = new Vector3(data.RoomGroup[i].BPosX,data.RoomGroup[i].BPosY);
                let holePosition = new Vector3(data.RoomGroup[i].HPosX,data.RoomGroup[i].HPosY);                
                let holeScale = new Vector3(data.RoomGroup[i].HSclX,data.RoomGroup[i].HSclY);
                this.Rooms[i]=new Room(data.RoomGroup[i].Room, ballPosition, holePosition, holeScale);
            }
        }
        public Rooms:Room[];

        public RandomRoom():Room{
            let random = GameSystem.randomIntFromInterval(0,this.Rooms.length-1);
            //console.log("RandomRoom " + random);
            return this.Rooms[random];
        }
    }
    export class Room{
        
        constructor(data, BallPos, HolePos, HoleScale) {
            this.ObstacleData = data;
            this.initialBallPos = BallPos;
            this.HolePos = HolePos;
            this.HoleScale = HoleScale;
            //console.log(this);
        }        
        public ObstacleData;
        public initialBallPos:Vector3;
        public HolePos:Vector3;
        public HoleScale:Vector3;

    }

    
}
