var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var CollisionAudioSystem = /** @class */ (function (_super) {
        __extends(CollisionAudioSystem, _super);
        function CollisionAudioSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionAudioSystem.prototype.OnUpdate = function () {
            var _this = this;
            var hitAudioObject = this.world.getEntityByName("HitObject");
            this.world.forEach([ut.Entity, ut.Physics2D.ColliderContacts, game.Ball], function (entity, collidercontacts) {
                if (collidercontacts.contacts.length == 0) {
                    return;
                }
                for (var i = 0; i < collidercontacts.contacts.length; i++) {
                    var otherEntity = collidercontacts.contacts[i];
                    if (!_this.world.exists(otherEntity)) {
                        continue;
                    }
                    if (_this.world.hasComponent(otherEntity, game.HitSound)) {
                        _this.world.usingComponentData(hitAudioObject, [ut.Entity, game.HitAudio, ut.Audio.AudioSource], function (entity, hitAudio, audiosource) {
                            var randomAudioClip = hitAudio.HitAudioClips[game.GameSystem.randomIntFromInterval(0, hitAudio.HitAudioClips.length - 1)];
                            audiosource.clip = randomAudioClip;
                            if (!_this.world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                                _this.world.addComponent(entity, ut.Audio.AudioSourceStart);
                            }
                        });
                        return;
                    }
                }
            });
        };
        CollisionAudioSystem.PlayCoinSound = function (world) {
            var coinAudioObject = world.getEntityByName("CoinAudio");
            world.usingComponentData(coinAudioObject, [ut.Entity, ut.Audio.AudioSource], function (entity, audiosource) {
                if (!world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                    world.addComponent(entity, ut.Audio.AudioSourceStart);
                }
            });
        };
        CollisionAudioSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.Physics2D.ColliderContacts),
            ut.requiredComponents(ut.Core2D.Sprite2DRenderer)
        ], CollisionAudioSystem);
        return CollisionAudioSystem;
    }(ut.ComponentSystem));
    game.CollisionAudioSystem = CollisionAudioSystem;
})(game || (game = {}));
var game;
(function (game) {
    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    var DirectionalPowerSystem = /** @class */ (function (_super) {
        __extends(DirectionalPowerSystem, _super);
        function DirectionalPowerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DirectionalPowerSystem.prototype.OnUpdate = function () {
            /**
            this.world.forEach([game.Ball, game.InputHelper], (ball, inputHelper) => {
                
                const powerDelta = ball.MaxPower / 100;
                if(inputHelper.InputType == game.InputType.Power){
                    return;
                }

                if(inputHelper.IsClickDown){
                    ball.Power = 0;
                    let currentPower = ball.Power;
                    if(currentPower <= ball.MaxPower && currentPower >= 0){
                        ball.Power = currentPower + (powerDelta * ball.DeltaDirection);
                    } else {
                        if(currentPower <= 0){
                            ball.DeltaDirection = 1;
                            ball.Power = 0;
                        }
                        else {
                            ball.DeltaDirection = -1;
                            ball.Power = ball.MaxPower;
                        }
                    }

                                                       
                }
            }); */
        };
        return DirectionalPowerSystem;
    }(ut.ComponentSystem));
    game.DirectionalPowerSystem = DirectionalPowerSystem;
})(game || (game = {}));
0;
var game;
(function (game) {
    /** New System */
    var ObstacleSpawnSystem = /** @class */ (function (_super) {
        __extends(ObstacleSpawnSystem, _super);
        function ObstacleSpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ObstacleSpawnSystem.prototype.OnUpdate = function () {
            var areaPercerntage;
            var XValues;
            var YValues;
            var borderOffset;
            var spawnMode;
            if (!game.GameSystem.isInTutorial) {
                return;
            }
            var objectSpawner = this.world.getEntityByName("Spawners");
            if (objectSpawner.isNone()) {
                return;
            }
            this.world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], function (helper) {
                areaPercerntage = helper.AreaPercentage;
                XValues = helper.XScaleValues;
                YValues = helper.YScaleValues;
                borderOffset = helper.BorderOffset;
                spawnMode = helper.SpawnMode;
            });
            if (spawnMode != game.ObstacleSpawnerMode.Random) {
                return;
            }
            if (game.GameSystem.spawnObstacles) {
                var borders = this.world.getEntityByName("Borders");
                this.world.usingComponentData(borders, [game.Borders], function (borders) {
                    ObstacleSpawnSystem.totalArea = borders.WorldHeight * borders.WorldWidth;
                });
                var obstacleArea = ObstacleSpawnSystem.totalArea * areaPercerntage;
                var currentArea = 0;
                var index = 0;
                while (currentArea < obstacleArea && index < 100) {
                    var randomScaleX = game.GameSystem.randomIntFromInterval(XValues.x, XValues.y);
                    var randomScaleY = game.GameSystem.randomIntFromInterval(YValues.x, YValues.y);
                    var currentObstacleArea = randomScaleX * randomScaleY;
                    if (currentObstacleArea + currentArea < obstacleArea) {
                        if (ObstacleSpawnSystem.spawnObstacle(this.world, "game.Obstacle", randomScaleX, randomScaleY, borderOffset, borders)) {
                            currentArea += currentObstacleArea;
                        }
                    }
                    index++;
                }
                game.GameSystem.spawnCoins = true;
                game.GameSystem.spawnObstacles = false;
            }
        };
        ObstacleSpawnSystem.spawnObstacle = function (world, entityGroup, xScale, yScale, offset, borders) {
            var randomPos;
            var halfWidth;
            var halfHeigth;
            world.usingComponentData(borders, [game.Borders], function (borders) {
                halfWidth = borders.WorldWidth / 2;
                halfHeigth = borders.WorldHeight / 2;
            });
            var findLocation = false;
            var index = 0;
            var _loop_1 = function () {
                randomPos = new Vector3(game.GameSystem.randomIntFromInterval((-halfWidth + offset) + xScale / 2, (halfWidth - offset) - xScale / 2), game.GameSystem.randomIntFromInterval((-halfHeigth + offset) + yScale / 2, (halfHeigth - offset) - yScale / 2));
                var coinInside = false;
                world.forEach([game.Object, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (obstacle, transform, scale) {
                    if ((transform.position.x - scale.scale.x / 2 - offset < randomPos.x - xScale / 2 &&
                        transform.position.x + scale.scale.x / 2 + offset > randomPos.x + xScale / 2) || (transform.position.y - scale.scale.y / 2 - offset < randomPos.y - yScale / 2 &&
                        transform.position.y + scale.scale.y / 2 + offset > randomPos.y + yScale / 2) &&
                        (Math.abs(transform.position.y - randomPos.y) > yScale && Math.abs(transform.position.x - randomPos.x) > xScale)) {
                        coinInside = true;
                    }
                });
                var player = world.getEntityByName("Ball");
                if (player != null) {
                    world.usingComponentData(player, [ut.Core2D.TransformLocalPosition], function (localBallPosition) {
                        if (localBallPosition != null) {
                            if (randomPos.x - xScale / 2 < localBallPosition.position.x - 2 && randomPos.x + xScale / 2 > localBallPosition.position.x + 2 ||
                                randomPos.y - yScale / 2 < localBallPosition.position.y - 2 && randomPos.y + yScale / 2 > localBallPosition.position.y + 2) {
                                coinInside = true;
                            }
                        }
                    });
                }
                if (!coinInside) {
                    findLocation = true;
                }
                index++;
            };
            while (!findLocation && index < 250) {
                _loop_1();
            }
            var obstacle;
            if (findLocation) {
                obstacle = ut.EntityGroup.instantiate(world, entityGroup)[0];
                world.usingComponentData(obstacle, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (positionObstacle, obstacleScale) {
                    positionObstacle.position = randomPos;
                    obstacleScale.scale = new Vector3(xScale, yScale);
                });
            }
            return findLocation;
        };
        ObstacleSpawnSystem.totalArea = (38 * 50);
        return ObstacleSpawnSystem;
    }(ut.ComponentSystem));
    game.ObstacleSpawnSystem = ObstacleSpawnSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var TimeLethalitySystem = /** @class */ (function (_super) {
        __extends(TimeLethalitySystem, _super);
        function TimeLethalitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //static frameCount = 0;
        TimeLethalitySystem.prototype.OnUpdate = function () {
            return;
            //Dont use this.
            var audioSource = this.world.getEntityByName("LowLive");
            if (game.GameSystem.CurrentGameMode == game.GameState.Tutorial) {
                return;
            }
            if (game.GameSystem.CurrentGameMode != game.GameState.Playing) {
                if (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime < TimeLethalitySystem.TimeToStartBlinking) {
                    TimeLethalitySystem.PlayLowHealthAudio(this.world);
                }
                return;
            }
            var dt = this.scheduler.deltaTime();
            TimeLethalitySystem.CurrentTime += dt;
            //console.log(TimeLethalitySystem.CurrentTime );
            if (TimeLethalitySystem.CurrentTime > TimeLethalitySystem.TimeToGetNextCoin) {
                TimeLethalitySystem.EndGame(this.world, audioSource);
            }
            else {
                TimeLethalitySystem.CheckBlinking(this.world, audioSource);
            }
            TimeLethalitySystem.frameCount++;
        };
        TimeLethalitySystem.CheckBlinking = function (world, audioSource) {
            var percentage = (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime) / 3;
            if (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime < TimeLethalitySystem.TimeToStartBlinking) {
                world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], function (entity, ball, player) {
                    player.paused = false;
                    player.speed = 7 * (1 - percentage);
                });
                TimeLethalitySystem.PlayLowHealthAudio(world);
            }
            else {
                world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], function (entity, ball, player) {
                    player.paused = true;
                    player.time = 0;
                });
                if (world.hasComponent(audioSource, ut.Audio.AudioSourceStop)) {
                    world.addComponent(audioSource, ut.Audio.AudioSourceStop);
                }
                TimeLethalitySystem.frameCount = 0;
            }
        };
        TimeLethalitySystem.EndGame = function (world, audioSource) {
            game.GameSystem.EndGame(world);
            TimeLethalitySystem.CurrentTime = 0;
            var loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }
            world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], function (entity, ball, player) {
                player.paused = true;
                player.time = 0;
            });
            world.addComponent(audioSource, ut.Audio.AudioSourceStop);
            TimeLethalitySystem.frameCount = 0;
        };
        TimeLethalitySystem.PlayLowHealthAudio = function (world) {
            var audioSource = world.getEntityByName("LowLive");
            var percentage = (TimeLethalitySystem.TimeToGetNextCoin - TimeLethalitySystem.CurrentTime) / 3;
            if (percentage > 0.60) {
                if (TimeLethalitySystem.frameCount % 40 == 0) {
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }
            }
            else if (percentage >= 0.10) {
                if (TimeLethalitySystem.frameCount % 20 == 0) {
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }
            }
            else {
                if (TimeLethalitySystem.frameCount % 10 == 0) {
                    world.addComponent(audioSource, ut.Audio.AudioSourceStart);
                }
            }
        };
        TimeLethalitySystem.ResetTimer = function () {
            TimeLethalitySystem.CurrentTime = 0;
        };
        TimeLethalitySystem.TimeToGetNextCoin = 8;
        TimeLethalitySystem.TimeToStartBlinking = 3;
        TimeLethalitySystem.CurrentTime = 0;
        return TimeLethalitySystem;
    }(ut.ComponentSystem));
    game.TimeLethalitySystem = TimeLethalitySystem;
})(game || (game = {}));
var game;
(function (game) {
    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** InputHandlingSystem */
    var DirectionInputSystem = /** @class */ (function (_super) {
        __extends(DirectionInputSystem, _super);
        function DirectionInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DirectionInputSystem.prototype.OnUpdate = function () {
            var _this = this;
            var display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            var camera = this.world.getEntityByName("Camera");
            var cameraPos = this.world.getComponentData(camera, ut.Core2D.TransformLocalPosition).position;
            var halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;
            this.world.forEach([ut.Entity, game.Ball, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalPosition, game.InputHelper], function (entity, ball, velocity, localPosition, inputHelper) {
                if (inputHelper.InputType == game.InputType.Power) {
                    return;
                }
                if (game.GameSystem.CurrentGameMode == game.GameState.GameEnd || game.GameSystem.currentPlays <= 0) {
                    return;
                }
                if (!ut.Core2D.Input.isTouchSupported()) {
                    if (ut.Runtime.Input.getMouseButton(0)) {
                        _this.ProcessStartInput(entity, velocity, inputHelper);
                    }
                    else if (ut.Runtime.Input.getMouseButtonUp(0)) {
                        var mousePos = ut.Core2D.Input.getInputPosition();
                        // adjust 0,0 to the center of the screen
                        mousePos.x -= display.frameWidth / 2;
                        mousePos.y -= display.frameHeight / 2;
                        //Mouse world position
                        var mouseWorldPos = new Vector2(cameraPos.x + mousePos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize), cameraPos.y + mousePos.y / (display.frameHeight / 2) * halfSize);
                        _this.ProcessFinishInput(mouseWorldPos, ball, localPosition, inputHelper);
                    }
                }
                else {
                    if (ut.Core2D.Input.touchCount() > 0) {
                        var touch = ut.Core2D.Input.getTouch(0);
                        if (touch.phase == ut.Core2D.TouchState.Began) {
                            //console.log("began: " + ut.Core2D.Input.touchCount());							
                            _this.ProcessStartInput(entity, velocity, inputHelper);
                        }
                        else if (touch.phase == ut.Core2D.TouchState.Ended) {
                            var pos = new Vector2(touch.x, touch.y);
                            pos.x -= display.frameWidth / 2;
                            pos.y -= display.frameHeight / 2;
                            //Mouse world position
                            var mouseWorldPos = new Vector2(cameraPos.x + pos.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize), cameraPos.y + pos.y / (display.frameHeight / 2) * halfSize);
                            _this.ProcessFinishInput(mouseWorldPos, ball, localPosition, inputHelper);
                        }
                    }
                }
            });
        };
        DirectionInputSystem.prototype.ProcessStartInput = function (entity, velocity, inputHelper) {
            inputHelper.IsClickDown = true;
            game.GameSystem.CurrentGameMode = game.GameState.Aiming;
            //console.log("StartInput");			
        };
        DirectionInputSystem.prototype.ProcessFinishInput = function (worldPosition, ball, localPosition, inputHelper) {
            var playerWorldPosition = localPosition.position;
            var diference = new Vector2(worldPosition.x - playerWorldPosition.x, worldPosition.y - playerWorldPosition.y);
            var magnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
            var normalized = new Vector2(diference.x / magnitude, diference.y / magnitude);
            inputHelper.IsClickDown = false;
            ball.MoveDirection = normalized;
            ball.Shoot = true;
        };
        return DirectionInputSystem;
    }(ut.ComponentSystem));
    game.DirectionInputSystem = DirectionInputSystem;
})(game || (game = {}));
/**
 * 		this.ProcessTouchInput(localPosition, speed.speed * dt);
 * 		ProcessTouchInput(position: Vector3, speed):void
        {
            if (ut.Core2D.Input.isTouchSupported()) {
                if (ut.Core2D.Input.touchCount() > 0) {
                    let touch: ut.Core2D.Touch = ut.Core2D.Input.getTouch(0);
                    let player = this.world.getEntityByName("Player");
                    let playerWorldPos = ut.Core2D.TransformService.computeWorldPosition(this.world, player);
                    let transPos = ut.Core2D.TransformService.worldToWindow(this.world, this.world.getEntityByName("Camera"), playerWorldPos, new Vector2(600,800));

                    if (touch.x >= transPos.x){
                        position.x += speed;
                    }
                    else if (touch.x < transPos.x){
                        position.x -= speed;
                    }
                    if (touch.y >= transPos.y){
                        position.y += speed;
                    }
                    else if (touch.y < transPos.y){
                        position.y -= speed;
                    }

                    if (touch.phase == ut.Core2D.TouchState.Moved) {
                        //console.log("moved: " + ut.Core2D.Input.touchCount());
                    }
                    else if (touch.phase == ut.Core2D.TouchState.Ended) {
                        //console.log("ended: " + ut.Core2D.Input.touchCount());
                    }
                    else if (touch.phase == ut.Core2D.TouchState.Stationary) {
                        //console.log("holding: " + ut.Core2D.Input.touchCount());
                    }
                    else if (touch.phase == ut.Core2D.TouchState.Canceled) {
                        //console.log("cancelled: " + ut.Core2D.Input.touchCount());
                    }
                    else if (touch.phase == ut.Core2D.TouchState.Began) {
                        //console.log("began: " + ut.Core2D.Input.touchCount());
                    }
                    else {
                        console.log("NO TOUCH STATE!!!");
                    }
                }
            }
            else {
                //console.log("TOUCH IS DISABLED!!!");
            }
        }
 *
 */ 
var game;
(function (game) {
    //@ut.executeAfter(ut.Shared.UserCodeStart)
    //@ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    var BallSystem = /** @class */ (function (_super) {
        __extends(BallSystem, _super);
        function BallSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BallSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (BallSystem.BallEntity == undefined || BallSystem.BallEntity.isNone()) {
                BallSystem.BallEntity = this.world.getEntityByName("Ball");
                return;
            }
            this.world.usingComponentData(BallSystem.BallEntity, [ut.Entity, game.Ball, game.InputHelper, ut.Physics2D.Velocity2D], function (entity, ball, inputHelper, velocity) {
                if (game.GameSystem.CurrentGameMode != game.GameState.Aiming) {
                    return;
                }
                //Stop Ball
                if (inputHelper.IsClickDown) {
                    if (BallSystem.lastVelocity.x == 0 && BallSystem.lastVelocity.y == 0) {
                        BallSystem.lastVelocity = velocity.velocity;
                    }
                    var newVelocity = new Vector2(0, 0);
                    //BallSystem.ChangeBallSpeed(newVelocity, ballEntity, this.world);
                }
                //Shoot!
                else if (ball.Shoot && game.GameSystem.currentPlays > 0) {
                    var velocity_1 = new Vector2(ball.MoveDirection.x * ball.MaxPower, ball.MoveDirection.y * ball.MaxPower);
                    BallSystem.ChangeBallSpeed(velocity_1, BallSystem.BallEntity, _this.world);
                    BallSystem.ResetBallInput(ball);
                    BallSystem.lastVelocity = new Vector2(0, 0);
                    game.SpeedLethalitySystem.SetStartingVelocity(velocity_1);
                    game.GameSystem.Play(_this.world);
                    game.GameSystem.CurrentGameMode = game.GameState.Playing;
                }
            });
        };
        BallSystem.SetBallPosition = function (spawnPosition, world) {
            if (BallSystem.BallEntity.isNone()) {
                BallSystem.BallEntity = ut.EntityGroup.instantiate(world, 'game.BallGroup')[0];
            }
            world.usingComponentData(BallSystem.BallEntity, [ut.Entity, ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], function (entity, position, velocity) {
                position.position = spawnPosition;
                var setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = new Vector2(0, 0);
                if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                    world.setComponentData(entity, setVelocity);
                else
                    world.addComponentData(entity, setVelocity);
            });
        };
        BallSystem.ChangeBallSpeed = function (newSpeed, entity, world) {
            var setVelocity = new ut.Physics2D.SetVelocity2D;
            setVelocity.velocity = newSpeed;
            if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                world.setComponentData(entity, setVelocity);
            else
                world.addComponentData(entity, setVelocity);
        };
        BallSystem.ChangeBallSpeedAndPosition = function (newSpeed, newPosition, entity, world) {
            world.usingComponentData(entity, [ut.Entity, ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], function (entity, position) {
                position.position = newPosition;
                var setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = newSpeed;
                if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                    world.setComponentData(entity, setVelocity);
                else
                    world.addComponentData(entity, setVelocity);
            });
        };
        BallSystem.ResetBallInput = function (ball) {
            ball.Power = 0;
            ball.MoveDirection = new Vector2(0, 0);
            ball.Shoot = false;
        };
        BallSystem.lastVelocity = new Vector2(0, 0);
        return BallSystem;
    }(ut.ComponentSystem));
    game.BallSystem = BallSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var BorderSystem = /** @class */ (function (_super) {
        __extends(BorderSystem, _super);
        function BorderSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BorderSystem.prototype.OnUpdate = function () {
            var display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            var camera = this.world.getEntityByName("Camera");
            var borders = this.world.getEntityByName("Borders");
            var background = this.world.getEntityByName("Background");
            var halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;
            if (BorderSystem.calculateOnce) {
                var height_1;
                var width_1;
                var worldHeight_1;
                var worldWidth_1;
                //CalculateSize
                this.world.usingComponentData(borders, [game.Borders], function (borders) {
                    height_1 = borders.Height = display.frameHeight;
                    width_1 = borders.Width = display.frameWidth;
                    //worldHeight = borders.WorldHeight = (halfSize * 2) - 8;    
                    worldHeight_1 = borders.WorldHeight = (halfSize * 2);
                    if (display.frameHeight < display.frameWidth) {
                        worldWidth_1 = borders.WorldWidth = (halfSize * 2 * 0.35) * 2;
                    }
                    else {
                        worldWidth_1 = borders.WorldWidth = ((halfSize * width_1) / height_1) * 2;
                    }
                });
                //Set borders
                var index_1 = 0;
                this.world.forEach([game.Wall, ut.Core2D.TransformLocalPosition], function (wall, transform) {
                    if (index_1 == 0) {
                        transform.position = new Vector3((-worldWidth_1 / 2), 0);
                    }
                    else if (index_1 == 1) {
                        transform.position = new Vector3((worldWidth_1 / 2), 0);
                    }
                    else {
                        return;
                    }
                    index_1++;
                });
                this.world.usingComponentData(background, [ut.Core2D.TransformLocalScale], function (scale) {
                    scale.scale = new Vector3(worldWidth_1, (halfSize * 2));
                });
                //Finish this
                game.ShotsUISystem.Initialize(this.world);
                game.GameSystem.spawnObstacles = true;
                BorderSystem.calculateOnce = false;
            }
        };
        BorderSystem.calculateOnce = true;
        return BorderSystem;
    }(ut.ComponentSystem));
    game.BorderSystem = BorderSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var CoinCollisionSystem = /** @class */ (function (_super) {
        __extends(CoinCollisionSystem, _super);
        function CoinCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CoinCollisionSystem.prototype.OnUpdate = function () {
            //We just need to start the new level when hitting the hole
            this.CheckCollisions();
        };
        CoinCollisionSystem.NextLevel = function (world) {
            CoinCollisionSystem.actualCoins = 0;
            game.GameSystem.NewLevel(world);
        };
        CoinCollisionSystem.prototype.CheckTutorial = function () {
            var _this = this;
            var currentCoins = 0;
            this.world.forEach([ut.Entity, game.Coin], function (entity, coin) {
                if (!_this.world.hasComponent(entity, ut.Disabled)) {
                    currentCoins++;
                }
            });
            if (currentCoins == 0) {
                game.GameSystem.NewLevel(this.world);
            }
        };
        CoinCollisionSystem.prototype.CheckCollisions = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Coin], function (entity, hitboxoverlapresults, coin) {
                for (var i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                    var otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                    if (!_this.world.exists(otherEntity) || _this.world.hasComponent(otherEntity, game.Ball)) {
                        if (_this.world.exists(entity) && _this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)) {
                            ut.Core2D.TransformService.destroyTree(_this.world, entity);
                            game.TimeLethalitySystem.ResetTimer();
                            game.CollisionAudioSystem.PlayCoinSound(_this.world);
                            CoinCollisionSystem.actualCoins++;
                            game.GameSystem.AddScore(5, _this.world);
                        }
                    }
                }
            });
        };
        CoinCollisionSystem.actualCoins = 0;
        return CoinCollisionSystem;
    }(ut.ComponentSystem));
    game.CoinCollisionSystem = CoinCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var CoinSpawnSystem = /** @class */ (function (_super) {
        __extends(CoinSpawnSystem, _super);
        function CoinSpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CoinSpawnSystem.prototype.OnUpdate = function () {
            var height;
            var width;
            var borders = this.world.getEntityByName("Borders");
            this.world.usingComponentData(borders, [game.Borders], function (borders) {
                height = borders.WorldHeight;
                width = borders.WorldWidth;
            });
            //Spawning Coins
            if (game.GameSystem.spawnCoins) {
                CoinSpawnSystem.maxCoins = game.GameSystem.randomIntFromInterval(CoinSpawnSystem.randomInterval.x, CoinSpawnSystem.randomInterval.y);
                CoinSpawnSystem.spawnedCoins = 0;
                for (var i = 0; i < CoinSpawnSystem.maxCoins; i++) {
                    if (i % 4 == 0) {
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", 0, width / 2 - 3, 0, height / 2 - 5);
                    }
                    else if (i % 4 == 1) {
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", 0, width / 2 - 3, -height / 2 + 3, 0);
                    }
                    else if (i % 4 == 2) {
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width / 2 + 3, 0, 0, height / 2 - 5);
                    }
                    else if (i % 4 == 3) {
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width / 2 + 3, 0, -height / 2 + 3, 0);
                    }
                    else if (i % 4 == 4) {
                        CoinSpawnSystem.spawnCoins(this.world, "game.Coin", -width / 4 + 2, width / 4 - 2, -height / 4 + 2, height / 4 - 2);
                    }
                }
                game.GameSystem.spawnCoins = false;
            }
        };
        CoinSpawnSystem.spawnCoins = function (world, entityGroup, minX, maxX, minY, maxY) {
            //console.log("Spawn coin");
            var findLocation = false;
            var index = 0;
            var randomPos;
            var _loop_2 = function () {
                randomPos = new Vector3(game.GameSystem.randomIntFromInterval(minX, maxX), game.GameSystem.randomIntFromInterval(minY, maxY));
                var coinInside = false;
                if (CoinSpawnSystem.DoesHitObstacle(world, randomPos)) {
                    coinInside = true;
                }
                world.forEach([game.Coin, ut.Core2D.TransformLocalPosition], function (coin, transform) {
                    var deltaX = transform.position.x - randomPos.x;
                    var deltaY = transform.position.y - randomPos.y;
                    var magnitude = deltaX * deltaX + deltaY * deltaY;
                    if (magnitude < 100) {
                        coinInside = true;
                    }
                });
                if (!coinInside) {
                    findLocation = true;
                }
                index++;
            };
            while (!findLocation && index < 250) {
                _loop_2();
            }
            var coin;
            if (findLocation) {
                coin = ut.EntityGroup.instantiate(world, entityGroup)[0];
                world.usingComponentData(coin, [ut.Core2D.TransformLocalPosition], function (transformLocalPosition) {
                    transformLocalPosition.position = randomPos;
                });
                CoinSpawnSystem.spawnedCoins++;
            }
            return coin;
        };
        CoinSpawnSystem.increaseRandomInterval = function () {
            var current = CoinSpawnSystem.randomInterval;
            CoinSpawnSystem.randomInterval = new Vector2(current.x + 1, current.y + 1);
        };
        CoinSpawnSystem.resetRandomInterval = function () {
            CoinSpawnSystem.randomInterval = new Vector2(1, 3);
        };
        CoinSpawnSystem.DoesHitObstacle = function (world, position) {
            var camera = world.getEntityByName("Camera");
            var hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x, position.y), camera);
            if (!hit.entityHit.isNone()) {
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x + 1.5, position.y + 1.5), camera);
            if (!hit.entityHit.isNone()) {
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x + 1.5, position.y - 1.5), camera);
            if (!hit.entityHit.isNone()) {
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x - 1.5, position.y + 1.5), camera);
            if (!hit.entityHit.isNone()) {
                return true;
            }
            hit = ut.HitBox2D.HitBox2DService.hitTest(world, new Vector3(position.x - 1.5, position.y - 1.5), camera);
            if (!hit.entityHit.isNone()) {
                return true;
            }
            return false;
        };
        CoinSpawnSystem.spawnedCoins = 0;
        CoinSpawnSystem.randomInterval = new Vector2(2, 4);
        return CoinSpawnSystem;
    }(ut.ComponentSystem));
    game.CoinSpawnSystem = CoinSpawnSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var GameSystem = /** @class */ (function (_super) {
        __extends(GameSystem, _super);
        function GameSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameSystem.prototype.OnUpdate = function () {
            if (GameSystem.StartFirstLevel && !GameSystem.isInTutorial) {
                GameSystem.RestartWorld(this.world);
                GameSystem.StartFirstLevel = false;
            }
        };
        GameSystem.PlayGame = function (world) {
            GameSystem.CurrentGameMode = game.GameState.Waiting;
            ut.EntityGroup.instantiate(world, 'game.GameplayEntityGroup');
            GameSystem.DestroyObjects(world);
            GameSystem.currentPlays = 0;
            GameSystem.isInTutorial = false;
            //GameSystem.RestartWorld(world);
        };
        GameSystem.AddScore = function (score, world) {
            GameSystem.score += score;
            game.ScoreSystem.UpdateScore(world);
        };
        GameSystem.SetScore = function (score, world) {
            GameSystem.score = score;
            game.ScoreSystem.UpdateScore(world);
        };
        GameSystem.RestartWorld = function (world) {
            if (GameSystem.isInTutorial) {
                game.TutorialSystem.ResetTutorial(world);
                return;
            }
            GameSystem.StartBall(world);
            //CoinSpawnSystem.resetRandomInterval();    
            GameSystem.CurrentGameMode = game.GameState.Waiting;
            GameSystem.currentPlays = GameSystem.initialPlays;
            game.JsonObstacleSpawner.currentGroup = 0;
            game.CoinCollisionSystem.actualCoins = 0;
            GameSystem.spawnObstacles = true;
            GameSystem.SetScore(0, world);
            GameSystem.ShowMainScreen(world);
            game.ShotsUISystem.UpdateShotsPeg(world);
        };
        GameSystem.NewLevel = function (world) {
            if (GameSystem.BallRadius == 0) {
                var ball = world.getEntityByName("Ball");
                world.usingComponentData(ball, [game.Ball, ut.Core2D.TransformLocalScale], function (ball, scale) {
                    GameSystem.BallRadius = scale.scale.x / 2;
                });
            }
            if (GameSystem.isInTutorial) {
                game.TutorialSystem.nextTutorial = true;
                return;
            }
            GameSystem.DestroyObjects(world);
            //CoinSpawnSystem.increaseRandomInterval();
            GameSystem.currentPlays += GameSystem.playsPerLevel;
            game.ShotsUISystem.UpdateShotsPeg(world);
            game.CoinCollisionSystem.actualCoins = 0;
            GameSystem.spawnObstacles = true;
        };
        GameSystem.Play = function (world) {
            if (GameSystem.currentPlays != 0) {
                this.currentPlays--;
                game.ShotsUISystem.UpdateShotsPeg(world);
                GameSystem.DestroyMainScreen(world);
            }
            GameSystem.DestroyMainScreen(world);
        };
        GameSystem.NoShotsSound = function (world) {
            var source = world.getEntityByName("NoShots");
            if (!world.hasComponent(source, ut.Audio.AudioSourceStart))
                world.addComponent(source, ut.Audio.AudioSourceStart);
        };
        GameSystem.ShowMainScreen = function (world) {
            ut.EntityGroup.instantiate(world, 'game.GameStart');
        };
        GameSystem.DestroyMainScreen = function (world) {
            ut.EntityGroup.destroyAll(world, 'game.GameStart');
        };
        GameSystem.EndGame = function (world) {
            if (!GameSystem.isInTutorial) {
                ut.EntityGroup.instantiate(world, 'game.GameOver');
                GameSystem.CurrentGameMode = game.GameState.GameEnd;
                GameSystem.DestroyObjects(world);
            }
            else {
                GameSystem.RestartWorld(world);
            }
        };
        GameSystem.DestroyEndScreen = function (world) {
            ut.EntityGroup.destroyAll(world, 'game.GameOver');
            GameSystem.RestartWorld(world);
        };
        GameSystem.StartBall = function (world) {
            var ball = world.getEntityByName("Ball");
            if (ball.isNone()) {
                ut.EntityGroup.instantiate(world, 'game.BallGroup');
            }
            else {
                world.usingComponentData(ball, [ut.Entity, game.Ball, ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRendererOptions], function (entity, ball, position, renderer) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(0, 0);
                    if (world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                        world.setComponentData(entity, setVelocity);
                    else
                        world.addComponentData(entity, setVelocity);
                    ball.Power = 0;
                    ball.MoveDirection = new Vector2(0, 0);
                    ball.Shoot = false;
                    position.position = new Vector3(0, 0);
                    renderer.size = new Vector2(1, 1);
                });
            }
        };
        GameSystem.DestroyObjects = function (world) {
            ut.EntityGroup.destroyAll(world, 'game.Coin');
            ut.EntityGroup.destroyAll(world, 'game.Obstacle');
            ut.EntityGroup.destroyAll(world, 'game.Hole');
        };
        GameSystem.randomIntFromInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        GameSystem.BallRadius = 0;
        GameSystem.spawnObstacles = false;
        GameSystem.playsPerLevel = 1;
        GameSystem.currentPlays = 0;
        GameSystem.initialPlays = 1;
        GameSystem.score = 0;
        GameSystem.StartFirstLevel = true;
        GameSystem.isInTutorial = false;
        return GameSystem;
    }(ut.ComponentSystem));
    game.GameSystem = GameSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var HoleSystem = /** @class */ (function (_super) {
        __extends(HoleSystem, _super);
        function HoleSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HoleSystem.prototype.OnUpdate = function () {
            var _this = this;
            //console.log ("Checking " + HoleSystem.CheckNewLevel);
            if (game.GameSystem.CurrentGameMode != game.GameState.Playing) {
                return;
            }
            var HoleAudioSource = this.world.getEntityByName("HoleAudioSource");
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Hole], function (entity, hitboxoverlapresults, coin) {
                for (var i = 0; i < hitboxoverlapresults.overlaps.length; i++) {
                    var otherEntity = hitboxoverlapresults.overlaps[i].otherEntity;
                    if (!_this.world.exists(otherEntity) || _this.world.hasComponent(otherEntity, game.Ball)) {
                        HoleSystem.NextLevel(_this.world);
                        if (!HoleAudioSource.isNone()) {
                            if (!_this.world.hasComponent(HoleAudioSource, ut.Audio.AudioSourceStart)) {
                                _this.world.addComponent(HoleAudioSource, ut.Audio.AudioSourceStart);
                            }
                        }
                    }
                }
            });
        };
        HoleSystem.NextLevel = function (world) {
            game.GameSystem.CurrentGameMode = game.GameState.Waiting;
            game.GameSystem.NewLevel(world);
            game.GameSystem.AddScore(10, world);
        };
        return HoleSystem;
    }(ut.ComponentSystem));
    game.HoleSystem = HoleSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var JsonObstacleSpawner = /** @class */ (function (_super) {
        __extends(JsonObstacleSpawner, _super);
        function JsonObstacleSpawner() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JsonObstacleSpawner.prototype.OnUpdate = function () {
            var spawnMode;
            if (game.GameSystem.isInTutorial) {
                return;
            }
            var objectSpawner = this.world.getEntityByName("Spawners");
            if (objectSpawner.isNone()) {
                ut.EntityGroup.instantiate(this.world, 'game.GameplayEntityGroup');
                objectSpawner = this.world.getEntityByName("Spawners");
            }
            this.world.usingComponentData(objectSpawner, [game.ObstacleSpawnerHelper], function (helper) {
                spawnMode = helper.SpawnMode;
            });
            if (spawnMode != game.ObstacleSpawnerMode.Json) {
                return;
            }
            if (JsonObstacleSpawner.load) {
                JsonObstacleSpawner.load = false;
                ut.JsonUtils.loadAssetAsync("levels", function (error, data) {
                    if (error) {
                        JsonObstacleSpawner.load = true;
                        console.error(error);
                        return;
                    }
                    JsonObstacleSpawner.loadLevels(data);
                });
            }
            if (game.GameSystem.spawnObstacles && JsonObstacleSpawner.loaded) {
                //SpawnObjects                
                var cGroup = JsonObstacleSpawner.levels.Groups[JsonObstacleSpawner.currentGroup];
                JsonObstacleSpawner.SpawnRoom(cGroup.RandomRoom(), this.world);
                if (JsonObstacleSpawner.currentGroup < JsonObstacleSpawner.levels.Groups.length - 1) {
                    JsonObstacleSpawner.currentGroup++;
                }
                game.GameSystem.spawnCoins = true;
                game.GameSystem.spawnObstacles = false;
            }
        };
        JsonObstacleSpawner.loadLevels = function (data) {
            JsonObstacleSpawner.levels = new Levels(data);
            JsonObstacleSpawner.loaded = true;
        };
        JsonObstacleSpawner.SpawnRoom = function (room, world) {
            var ballEntity = world.getEntityByName("Ball");
            game.BallSystem.ChangeBallSpeedAndPosition(new Vector2(0, 0), room.initialBallPos, ballEntity, world);
            var hole = ut.EntityGroup.instantiate(world, "game.Hole")[0];
            world.usingComponentData(hole, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (position, scale) {
                position.position = room.HolePos;
                scale.scale = room.HoleScale;
            });
            var _loop_3 = function (i) {
                var obstacle = ut.EntityGroup.instantiate(world, "game.Obstacle")[0];
                world.usingComponentData(obstacle, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.Sprite2DRenderer], function (positionObstacle, rotation, obstacleScale, renderer) {
                    positionObstacle.position = new Vector3(room.ObstacleData[i].X, room.ObstacleData[i].Y);
                    rotation.rotation.setFromAxisAngle(new Vector3(0, 0, 1), room.ObstacleData[i].Rotation * Math.PI / 180);
                    obstacleScale.scale = new Vector3(room.ObstacleData[i].ScaleX, room.ObstacleData[i].ScaleY);
                    if (room.ObstacleData[i].Type == "L") {
                        renderer.color = new ut.Core2D.Color(212 / 255, 108 / 255, 75 / 255, 1);
                        world.addComponent(obstacle, game.Lethal);
                    }
                });
            };
            for (var i = 0; i < room.ObstacleData.length; i++) {
                _loop_3(i);
            }
        };
        JsonObstacleSpawner.loaded = false;
        JsonObstacleSpawner.load = true;
        JsonObstacleSpawner.currentGroup = 0;
        return JsonObstacleSpawner;
    }(ut.ComponentSystem));
    game.JsonObstacleSpawner = JsonObstacleSpawner;
    var Levels = /** @class */ (function () {
        function Levels(data) {
            this.Groups = new Array(data.Groups.length);
            for (var i = 0; i < this.Groups.length; i++) {
                this.Groups[i] = new Group(data.Groups[i]);
            }
        }
        return Levels;
    }());
    game.Levels = Levels;
    var Group = /** @class */ (function () {
        function Group(data) {
            this.Rooms = new Array(data.RoomGroup.length);
            for (var i = 0; i < this.Rooms.length; i++) {
                var ballPosition = new Vector3(data.RoomGroup[i].BPosX, data.RoomGroup[i].BPosY);
                var holePosition = new Vector3(data.RoomGroup[i].HPosX, data.RoomGroup[i].HPosY);
                var holeScale = new Vector3(data.RoomGroup[i].HSclX, data.RoomGroup[i].HSclY);
                this.Rooms[i] = new Room(data.RoomGroup[i].Room, ballPosition, holePosition, holeScale);
            }
        }
        Group.prototype.RandomRoom = function () {
            var random = game.GameSystem.randomIntFromInterval(0, this.Rooms.length - 1);
            //console.log("RandomRoom " + random);
            return this.Rooms[random];
        };
        return Group;
    }());
    game.Group = Group;
    var Room = /** @class */ (function () {
        function Room(data, BallPos, HolePos, HoleScale) {
            this.ObstacleData = data;
            this.initialBallPos = BallPos;
            this.HolePos = HolePos;
            this.HoleScale = HoleScale;
            //console.log(this);
        }
        return Room;
    }());
    game.Room = Room;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var LethalObstaclesSystem = /** @class */ (function (_super) {
        __extends(LethalObstaclesSystem, _super);
        function LethalObstaclesSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LethalObstaclesSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Physics2D.ColliderContacts, game.Ball], function (entity, collidercontacts) {
                if (collidercontacts.contacts.length == 0) {
                    return;
                }
                for (var i = 0; i < collidercontacts.contacts.length; i++) {
                    var otherEntity = collidercontacts.contacts[i];
                    if (!_this.world.exists(otherEntity)) {
                        continue;
                    }
                    if (_this.world.hasComponent(otherEntity, game.Lethal)) {
                        // console.log("LethalObstacleSystem " + this.world.getEntityName(entity));      
                        LethalObstaclesSystem.EndGame(_this.world);
                        return;
                    }
                }
            });
        };
        LethalObstaclesSystem.EndGame = function (world) {
            game.GameSystem.EndGame(world);
            var loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }
            //TimeLethalitySystem.CurrentTime = 0;     
            /**
            world.forEach([ut.Entity, game.Ball, ut.Core2D.Sprite2DSequencePlayer], (entity, ball, player ) => {
                player.paused = true;
                player.time = 0;
            });*/
        };
        return LethalObstaclesSystem;
    }(ut.ComponentSystem));
    game.LethalObstaclesSystem = LethalObstaclesSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var SpeedLethalitySystem = /** @class */ (function (_super) {
        __extends(SpeedLethalitySystem, _super);
        function SpeedLethalitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpeedLethalitySystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameSystem.CurrentGameMode != game.GameState.Playing) {
                return;
            }
            var ball = this.world.getEntityByName("Ball");
            var dt = this.scheduler.deltaTime();
            SpeedLethalitySystem.CurrentTime += dt;
            this.world.usingComponentData(ball, [ut.Entity, ut.Physics2D.Velocity2D], function (entity, velocity) {
                if (velocity.velocity.x == 0 && velocity.velocity.y == 0) {
                    //This literally does nothing                        
                    //Don't delete this
                    //It doesn't work without this
                    //¯\_(ツ)_/¯ 
                    //console.log("Empty velocity");
                    return;
                }
                else if (SpeedLethalitySystem.CurrentTime <= SpeedLethalitySystem.decayTime) {
                    var StartingVelocityMagnitude = SpeedLethalitySystem.StartingVelocity.length();
                    var currentDirection = velocity.velocity.normalize();
                    var percentage = 1 - SpeedLethalitySystem.CurrentTime / SpeedLethalitySystem.decayTime;
                    var speedMagnitude = StartingVelocityMagnitude * percentage;
                    var newVelocity = new Vector2(currentDirection.x * speedMagnitude, currentDirection.y * speedMagnitude);
                    //console.log("Lowering " + percentage);
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = newVelocity;
                    if (_this.world.hasComponent(entity, ut.Physics2D.SetVelocity2D))
                        _this.world.setComponentData(entity, setVelocity);
                    else
                        _this.world.addComponentData(entity, setVelocity);
                }
                else if (SpeedLethalitySystem.CurrentTime > SpeedLethalitySystem.decayTime) {
                    //console.log("EndGame");
                    SpeedLethalitySystem.CurrentTime = 0;
                    SpeedLethalitySystem.EndGame(_this.world);
                }
            });
        };
        SpeedLethalitySystem.EndGame = function (world) {
            game.GameSystem.EndGame(world);
            var loseGameSound = world.getEntityByName("Lose");
            if (!world.hasComponent(loseGameSound, ut.Audio.AudioSourceStart)) {
                world.addComponent(loseGameSound, ut.Audio.AudioSourceStart);
            }
        };
        SpeedLethalitySystem.SetStartingVelocity = function (velocity) {
            SpeedLethalitySystem.StartingVelocity = velocity;
            SpeedLethalitySystem.CurrentTime = 0;
            SpeedLethalitySystem.VelocityDeltaPerSecond = velocity.length() / SpeedLethalitySystem.decayTime;
        };
        SpeedLethalitySystem.decayTime = 5;
        SpeedLethalitySystem.CurrentTime = 0;
        return SpeedLethalitySystem;
    }(ut.ComponentSystem));
    game.SpeedLethalitySystem = SpeedLethalitySystem;
})(game || (game = {}));
var game;
(function (game) {
    var TutorialSystem = /** @class */ (function (_super) {
        __extends(TutorialSystem, _super);
        /** New System */
        function TutorialSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TutorialSystem_1 = TutorialSystem;
        TutorialSystem.prototype.OnUpdate = function () {
            var playTutorial = false;
            this.world.forEach([game.TutorialHelper], function (tutorial) {
                playTutorial = tutorial.PlayTutorial;
            });
            if (playTutorial) {
                game.GameSystem.isInTutorial = true;
                if (!TutorialSystem_1.firstTutorial) {
                    this.TutorialEntity = ut.EntityGroup.instantiate(this.world, 'game.TutorialEntityGroup');
                    game.GameSystem.CurrentGameMode = game.GameState.Tutorial;
                    TutorialSystem_1.firstTutorial = true;
                }
                if (TutorialSystem_1.nextTutorial) {
                    this.NextTutorial();
                }
                if (TutorialSystem_1.waitForClick) {
                    if (!ut.Core2D.Input.isTouchSupported()) {
                        if (ut.Runtime.Input.getMouseButtonUp(0)) {
                            this.NextTutorial();
                        }
                    }
                    else {
                        if (ut.Core2D.Input.touchCount() > 0) {
                            var touch = ut.Core2D.Input.getTouch(0);
                            if (touch.phase == ut.Core2D.TouchState.Ended) {
                                this.NextTutorial();
                            }
                        }
                    }
                }
            }
        };
        TutorialSystem.ResetTutorial = function (world) {
            var entityBall = world.getEntityByName("Ball");
            if (!entityBall.isNone()) {
                game.BallSystem.ChangeBallSpeedAndPosition(new Vector2(0, 0), new Vector3(0, -20), entityBall, world);
            }
            world.forEach([ut.Entity, game.Tutorial], function (entity, tutorial) {
                if (tutorial.Index == TutorialSystem_1.index) {
                    if (tutorial.Tries > 0) {
                        game.GameSystem.currentPlays = tutorial.Tries;
                        TutorialSystem_1.waitForClick = false;
                    }
                    else {
                        game.GameSystem.CurrentGameMode = game.GameState.Tutorial;
                        TutorialSystem_1.waitForClick = true;
                    }
                    game.ShotsUISystem.UpdateShotsPeg(world);
                }
            });
            game.GameSystem.SetScore(0, world);
        };
        TutorialSystem.prototype.NextTutorial = function () {
            TutorialSystem_1.index++;
            //Iterate Over tutorials and change            
            TutorialSystem_1.nextTutorial = false;
            //Ending tutorials!
            if (TutorialSystem_1.index > TutorialSystem_1.maxIndex) {
                this.world.forEach([game.TutorialHelper], function (tutorial) {
                    tutorial.PlayTutorial = false;
                });
                TutorialSystem_1.waitForClick = false;
                ut.EntityGroup.destroyAll(this.world, 'game.TutorialEntityGroup');
                game.GameSystem.PlayGame(this.world);
                return;
            }
            //Get Current tutorial and update
            this.CheckTutorialObjectsStatus();
            var tutorialObjectList;
            var tries;
            this.world.forEach([ut.Entity, game.Tutorial], function (entity, tutorial) {
                if (tutorial.Index == TutorialSystem_1.index) {
                    tutorialObjectList = tutorial.ChildEntities;
                    tries = tutorial.Tries;
                }
            });
            //Start new tutorial
            if (tries > 0) {
                game.BallSystem.SetBallPosition(new Vector3(0, -20), this.world);
                game.GameSystem.currentPlays = tries;
                TutorialSystem_1.waitForClick = false;
                game.ShotsUISystem.UpdateShotsPeg(this.world);
                game.GameSystem.AddScore(0, this.world);
            }
            else {
                game.GameSystem.CurrentGameMode = game.GameState.Tutorial;
                TutorialSystem_1.waitForClick = true;
                //ut.EntityGroup.destroyAll(this.world, "game.BallGroup");                
                game.BallSystem.SetBallPosition(new Vector3(-75, -75), this.world);
                game.ScoreSystem.CleanScore(this.world);
            }
            //Set Active the current tutorial objects
            for (var i = 0; i < tutorialObjectList.length; i++) {
                TutorialSystem_1.setEntityEnabled(this.world, tutorialObjectList[i], true);
            }
            //HoleSystem.CheckNewLevel = true; 
        };
        TutorialSystem.prototype.CheckTutorialObjectsStatus = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Tutorial], function (entity, tutorial) {
                if (tutorial.Index < TutorialSystem_1.index) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity);
                }
                else {
                    for (var i = 0; i < tutorial.ChildEntities.length; i++) {
                        TutorialSystem_1.setEntityEnabled(_this.world, tutorial.ChildEntities[i], false);
                    }
                    if (TutorialSystem_1.maxIndex < tutorial.Index) {
                        TutorialSystem_1.maxIndex = tutorial.Index;
                    }
                }
            });
        };
        TutorialSystem.setEntityEnabled = function (world, entity, enabled) {
            if (world.exists(entity)) {
                var hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
                if (enabled && hasDisabledComponent) {
                    world.removeComponent(entity, ut.Disabled);
                }
                else if (!enabled && !hasDisabledComponent) {
                    world.addComponent(entity, ut.Disabled);
                }
            }
        };
        var TutorialSystem_1;
        TutorialSystem.index = -1;
        TutorialSystem.firstTutorial = false;
        TutorialSystem.nextTutorial = true;
        TutorialSystem.waitForClick = false;
        TutorialSystem.maxIndex = 0;
        TutorialSystem = TutorialSystem_1 = __decorate([
            ut.executeBefore(game.GameSystem)
            /** New System */
        ], TutorialSystem);
        return TutorialSystem;
    }(ut.ComponentSystem));
    game.TutorialSystem = TutorialSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var GameOverScreenSystem = /** @class */ (function (_super) {
        __extends(GameOverScreenSystem, _super);
        function GameOverScreenSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameOverScreenSystem.prototype.OnUpdate = function () {
            if (game.GameSystem.CurrentGameMode != game.GameState.GameEnd) {
                return;
            }
            if (!ut.Core2D.Input.isTouchSupported()) {
                if (ut.Runtime.Input.getMouseButtonUp(0)) {
                    game.GameSystem.DestroyEndScreen(this.world);
                }
            }
            else {
                if (ut.Core2D.Input.touchCount() > 0) {
                    var touch = ut.Core2D.Input.getTouch(0);
                    if (touch.phase == ut.Core2D.TouchState.Ended) {
                        game.GameSystem.DestroyEndScreen(this.world);
                    }
                }
            }
        };
        return GameOverScreenSystem;
    }(ut.ComponentSystem));
    game.GameOverScreenSystem = GameOverScreenSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var LineRenderingSystem = /** @class */ (function (_super) {
        __extends(LineRenderingSystem, _super);
        function LineRenderingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LineRenderingSystem.prototype.OnUpdate = function () {
            var line = this.world.getEntityByName("Guideline");
            if (game.GameSystem.currentPlays < 1 && LineRenderingSystem.pressed) {
                this.ProcessFinishInput(line);
            }
            if (game.GameSystem.CurrentGameMode == game.GameState.GameEnd || line.isNone() || game.GameSystem.currentPlays < 1) {
                return;
            }
            if (!ut.Core2D.Input.isTouchSupported()) {
                var mousePos = ut.Core2D.Input.getInputPosition();
                if (ut.Runtime.Input.getMouseButton(0)) {
                    this.ProcessOnPressed(line, mousePos);
                }
                else if (ut.Runtime.Input.getMouseButtonUp(0)) {
                    this.ProcessFinishInput(line);
                }
            }
            else {
                if (ut.Core2D.Input.touchCount() > 0) {
                    var touch = ut.Core2D.Input.getTouch(0);
                    if (touch.phase == ut.Core2D.TouchState.Moved) {
                        this.ProcessOnPressed(line, new Vector2(touch.x, touch.y));
                        //console.log("moved: " + ut.Core2D.Input.touchCount());
                    }
                    else if (touch.phase == ut.Core2D.TouchState.Ended) {
                        this.ProcessFinishInput(line);
                    }
                }
            }
        };
        LineRenderingSystem.prototype.ProcessOnPressed = function (entity, touchPosition) {
            var _this = this;
            LineRenderingSystem.pressed = true;
            var ball = this.world.getEntityByName("Ball");
            var coordinates = this.ScreenToWorldCoordenates(touchPosition);
            var linePosition;
            var lineRotation;
            var lineMagnitude;
            this.world.usingComponentData(ball, [ut.Core2D.TransformLocalPosition], function (position) {
                var diference = new Vector2(coordinates.x - position.position.x, coordinates.y - position.position.y);
                lineMagnitude = Math.sqrt(diference.x * diference.x + diference.y * diference.y);
                var normalized = diference.normalize();
                lineRotation = Math.atan2(normalized.y, normalized.x);
                var radiusOffset = normalized.multiplyScalar(game.GameSystem.BallRadius);
                linePosition = new Vector3(position.position.x + radiusOffset.x, position.position.y + radiusOffset.y);
            });
            this.world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions], function (position, rotation, renderer, options) {
                renderer.color = new ut.Core2D.Color(1, 1, 1, 1);
                var sprite = _this.world.getComponentData(renderer.sprite, ut.Core2D.Sprite2D);
                sprite.pivot = new Vector2(0, 0.5);
                _this.world.setComponentData(renderer.sprite, sprite);
                position.position = linePosition;
                rotation.rotation.setFromAxisAngle(new Vector3(0, 0, 1), lineRotation);
                options.size = new Vector2(lineMagnitude - (game.GameSystem.BallRadius * 2), 0.25);
            });
            var dotedBall = this.world.getEntityByName("DottedGuide");
            this.world.usingComponentData(dotedBall, [ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRenderer], function (position, renderer) {
                renderer.color = new ut.Core2D.Color(1, 1, 1, 1);
                position.position = new Vector3(coordinates.x, coordinates.y);
            });
        };
        LineRenderingSystem.prototype.ProcessFinishInput = function (entity) {
            LineRenderingSystem.pressed = false;
            this.world.usingComponentData(entity, [ut.Core2D.Sprite2DRenderer], function (renderer) {
                renderer.color = new ut.Core2D.Color(1, 1, 1, 0);
            });
            var dotedBall = this.world.getEntityByName("DottedGuide");
            this.world.usingComponentData(dotedBall, [ut.Core2D.Sprite2DRenderer], function (renderer) {
                renderer.color = new ut.Core2D.Color(1, 1, 1, 0);
            });
        };
        LineRenderingSystem.prototype.ScreenToWorldCoordenates = function (screenPos) {
            var position = screenPos;
            var camera = this.world.getEntityByName("Camera");
            var display = this.world.getConfigData(ut.Core2D.DisplayInfo);
            var halfSize = this.world.getComponentData(camera, ut.Core2D.Camera2D).halfVerticalSize;
            position.x -= display.frameWidth / 2;
            position.y -= display.frameHeight / 2;
            //Mouse world position
            var worldPos = new Vector3(position.x / (display.frameWidth / 2) * (display.frameWidth / display.frameHeight * halfSize), position.y / (display.frameHeight / 2) * halfSize);
            return worldPos;
        };
        LineRenderingSystem.pressed = false;
        return LineRenderingSystem;
    }(ut.ComponentSystem));
    game.LineRenderingSystem = LineRenderingSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var ScoreSystem = /** @class */ (function (_super) {
        __extends(ScoreSystem, _super);
        function ScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScoreSystem.prototype.OnUpdate = function () {
        };
        ScoreSystem.UpdateScore = function (world) {
            if (ScoreSystem.textEntity == undefined || ScoreSystem.textEntity.isNone()) {
                ScoreSystem.textEntity = world.getEntityByName("ScoreText");
            }
            world.usingComponentData(ScoreSystem.textEntity, [ut.Entity, ut.Text.Text2DRenderer], function (entity, text) {
                text.text = game.GameSystem.score + "";
            });
        };
        ScoreSystem.CleanScore = function (world) {
            if (ScoreSystem.textEntity == undefined || ScoreSystem.textEntity.isNone()) {
                ScoreSystem.textEntity = world.getEntityByName("ScoreText");
            }
            world.usingComponentData(ScoreSystem.textEntity, [ut.Entity, ut.Text.Text2DRenderer], function (entity, text) {
                text.text = "";
            });
        };
        return ScoreSystem;
    }(ut.ComponentSystem));
    game.ScoreSystem = ScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    //@ut.executeBefore(game.BallShootingSystem)
    /** New System */
    var ShotsUISystem = /** @class */ (function (_super) {
        __extends(ShotsUISystem, _super);
        function ShotsUISystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShotsUISystem.prototype.OnUpdate = function () {
            if (game.GameSystem.spawnCoins) {
                ShotsUISystem.UpdateShotsPeg(this.world);
            }
        };
        ShotsUISystem.UpdateShotsPeg = function (world) {
            return;
            ut.EntityGroup.destroyAll(world, 'game.ShotPeg');
            var borders = world.getEntityByName("Borders");
            var numberOfShots = game.GameSystem.currentPlays;
            var pegSize;
            var pegYPos;
            var currentX;
            world.usingComponentData(borders, [game.Borders], function (borders) {
                pegSize = ((borders.WorldWidth - ((numberOfShots - 1) * 0.75)) - 5) / numberOfShots;
                pegYPos = (borders.WorldHeight / 2) - 0.5;
                currentX = ((-borders.WorldWidth / 2) + pegSize / 2) + 2.5;
            });
            for (var i = 0; i < numberOfShots; i++) {
                var peg = ut.EntityGroup.instantiate(world, "game.ShotPeg")[0];
                world.usingComponentData(peg, [ut.Core2D.TransformLocalPosition, ut.Core2D.Sprite2DRendererOptions], function (transformLocalPosition, options) {
                    var pos = new Vector3(currentX, pegYPos);
                    transformLocalPosition.position = pos;
                    var scale = new Vector2(pegSize, 3);
                    options.size = scale;
                });
                currentX += pegSize + 0.75;
            }
        };
        ShotsUISystem.Initialize = function (world) {
            //let numberOfShots = GameSystem.MaxPlays;
        };
        return ShotsUISystem;
    }(ut.ComponentSystem));
    game.ShotsUISystem = ShotsUISystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var JsonUtils = /** @class */ (function () {
        function JsonUtils() {
        }
        JsonUtils.loadAssetAsync = function (assetName, callback) {
            this.loadAsync(UT_ASSETS[assetName], callback);
        };
        JsonUtils.loadAsync = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    callback(null, xhr.response);
                }
                else {
                    callback(status);
                }
            };
            xhr.send();
        };
        return JsonUtils;
    }());
    ut.JsonUtils = JsonUtils;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map