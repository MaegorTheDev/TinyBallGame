/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
var game = game || {};
game.GameState = {
  Waiting: 0,
  Playing: 1,
  Aiming: 2,
  Tutorial: 3,
  GameStart: 4,
  GameEnd: 5
};
game.InputType = {
  Direction: 0,
  Power: 1
};
game.ObstacleSpawnerMode = {
  Random: 0,
  Json: 1
};
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Coin = entities.game.Coin || {};
entities.game.Coin.Component = function() {
};
entities.game.Coin.Component.prototype = Object.create(null);
entities.game.Coin.Component.prototype.constructor = entities.game.Coin.Component;
Object.defineProperties(entities.game.Coin.Component.prototype, {
});
entities.game.Coin.Component._size = 1;
entities.game.Coin.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Coin.Component.prototype);
  return v;
};
entities.game.Coin.Component._toPtr = function(ptr, v) {
};
entities.game.Coin.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Coin.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Coin.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Coin.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Coin.Component.StorageView.prototype = Object.create(null);
entities.game.Coin.Component.StorageView.prototype.constructor = entities.game.Coin.Component.StorageView;
entities.game.Coin.Component._view = entities.game.Coin.Component.StorageView;
entities.game.Coin.Component.StorageView._isSharedComp = entities.game.Coin.Component._isSharedComp = false;
entities.game.Coin.Component.StorageView._fromPtr = entities.game.Coin.Component._fromPtr;
entities.game.Coin.Component.StorageView._toPtr = entities.game.Coin.Component._toPtr;
entities.game.Coin.Component.StorageView._tempHeapPtr = entities.game.Coin.Component._tempHeapPtr;
entities.game.Coin.Component.StorageView._size = entities.game.Coin.Component._size;
entities.game.Coin.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Coin.Component.StorageView.prototype, {
});
entities.game.Coin.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Coin.Component is a POD type, so a JavaScript side copy constructor entities.game.Coin.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Coin.Component, { cid: { configurable: true, get: function() { delete entities.game.Coin.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Coin.Component.cid = Module._ut_component_register_cid(/*entities.game.Coin.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Coin::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Coin.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Coin.Component.cid; } } });
entities.game.Hole = entities.game.Hole || {};
entities.game.Hole.Component = function() {
};
entities.game.Hole.Component.prototype = Object.create(null);
entities.game.Hole.Component.prototype.constructor = entities.game.Hole.Component;
Object.defineProperties(entities.game.Hole.Component.prototype, {
});
entities.game.Hole.Component._size = 1;
entities.game.Hole.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Hole.Component.prototype);
  return v;
};
entities.game.Hole.Component._toPtr = function(ptr, v) {
};
entities.game.Hole.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Hole.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Hole.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Hole.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Hole.Component.StorageView.prototype = Object.create(null);
entities.game.Hole.Component.StorageView.prototype.constructor = entities.game.Hole.Component.StorageView;
entities.game.Hole.Component._view = entities.game.Hole.Component.StorageView;
entities.game.Hole.Component.StorageView._isSharedComp = entities.game.Hole.Component._isSharedComp = false;
entities.game.Hole.Component.StorageView._fromPtr = entities.game.Hole.Component._fromPtr;
entities.game.Hole.Component.StorageView._toPtr = entities.game.Hole.Component._toPtr;
entities.game.Hole.Component.StorageView._tempHeapPtr = entities.game.Hole.Component._tempHeapPtr;
entities.game.Hole.Component.StorageView._size = entities.game.Hole.Component._size;
entities.game.Hole.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Hole.Component.StorageView.prototype, {
});
entities.game.Hole.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Hole.Component is a POD type, so a JavaScript side copy constructor entities.game.Hole.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Hole.Component, { cid: { configurable: true, get: function() { delete entities.game.Hole.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Hole.Component.cid = Module._ut_component_register_cid(/*entities.game.Hole.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Hole::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Hole.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Hole.Component.cid; } } });
entities.game.Obstacle = entities.game.Obstacle || {};
entities.game.Obstacle.Component = function() {
};
entities.game.Obstacle.Component.prototype = Object.create(null);
entities.game.Obstacle.Component.prototype.constructor = entities.game.Obstacle.Component;
Object.defineProperties(entities.game.Obstacle.Component.prototype, {
});
entities.game.Obstacle.Component._size = 1;
entities.game.Obstacle.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Obstacle.Component.prototype);
  return v;
};
entities.game.Obstacle.Component._toPtr = function(ptr, v) {
};
entities.game.Obstacle.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Obstacle.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Obstacle.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Obstacle.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Obstacle.Component.StorageView.prototype = Object.create(null);
entities.game.Obstacle.Component.StorageView.prototype.constructor = entities.game.Obstacle.Component.StorageView;
entities.game.Obstacle.Component._view = entities.game.Obstacle.Component.StorageView;
entities.game.Obstacle.Component.StorageView._isSharedComp = entities.game.Obstacle.Component._isSharedComp = false;
entities.game.Obstacle.Component.StorageView._fromPtr = entities.game.Obstacle.Component._fromPtr;
entities.game.Obstacle.Component.StorageView._toPtr = entities.game.Obstacle.Component._toPtr;
entities.game.Obstacle.Component.StorageView._tempHeapPtr = entities.game.Obstacle.Component._tempHeapPtr;
entities.game.Obstacle.Component.StorageView._size = entities.game.Obstacle.Component._size;
entities.game.Obstacle.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Obstacle.Component.StorageView.prototype, {
});
entities.game.Obstacle.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Obstacle.Component is a POD type, so a JavaScript side copy constructor entities.game.Obstacle.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Obstacle.Component, { cid: { configurable: true, get: function() { delete entities.game.Obstacle.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Obstacle.Component.cid = Module._ut_component_register_cid(/*entities.game.Obstacle.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Obstacle::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Obstacle.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Obstacle.Component.cid; } } });
entities.game.ShotPeg = entities.game.ShotPeg || {};
entities.game.ShotPeg.Component = function() {
};
entities.game.ShotPeg.Component.prototype = Object.create(null);
entities.game.ShotPeg.Component.prototype.constructor = entities.game.ShotPeg.Component;
Object.defineProperties(entities.game.ShotPeg.Component.prototype, {
});
entities.game.ShotPeg.Component._size = 1;
entities.game.ShotPeg.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ShotPeg.Component.prototype);
  return v;
};
entities.game.ShotPeg.Component._toPtr = function(ptr, v) {
};
entities.game.ShotPeg.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ShotPeg.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ShotPeg.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ShotPeg.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ShotPeg.Component.StorageView.prototype = Object.create(null);
entities.game.ShotPeg.Component.StorageView.prototype.constructor = entities.game.ShotPeg.Component.StorageView;
entities.game.ShotPeg.Component._view = entities.game.ShotPeg.Component.StorageView;
entities.game.ShotPeg.Component.StorageView._isSharedComp = entities.game.ShotPeg.Component._isSharedComp = false;
entities.game.ShotPeg.Component.StorageView._fromPtr = entities.game.ShotPeg.Component._fromPtr;
entities.game.ShotPeg.Component.StorageView._toPtr = entities.game.ShotPeg.Component._toPtr;
entities.game.ShotPeg.Component.StorageView._tempHeapPtr = entities.game.ShotPeg.Component._tempHeapPtr;
entities.game.ShotPeg.Component.StorageView._size = entities.game.ShotPeg.Component._size;
entities.game.ShotPeg.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ShotPeg.Component.StorageView.prototype, {
});
entities.game.ShotPeg.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ShotPeg.Component is a POD type, so a JavaScript side copy constructor entities.game.ShotPeg.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.ShotPeg.Component, { cid: { configurable: true, get: function() { delete entities.game.ShotPeg.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ShotPeg.Component.cid = Module._ut_component_register_cid(/*entities.game.ShotPeg.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::ShotPeg::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.ShotPeg.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ShotPeg.Component.cid; } } });
entities.game.BallGroup = entities.game.BallGroup || {};
entities.game.BallGroup.Component = function() {
};
entities.game.BallGroup.Component.prototype = Object.create(null);
entities.game.BallGroup.Component.prototype.constructor = entities.game.BallGroup.Component;
Object.defineProperties(entities.game.BallGroup.Component.prototype, {
});
entities.game.BallGroup.Component._size = 1;
entities.game.BallGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BallGroup.Component.prototype);
  return v;
};
entities.game.BallGroup.Component._toPtr = function(ptr, v) {
};
entities.game.BallGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BallGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BallGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BallGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BallGroup.Component.StorageView.prototype = Object.create(null);
entities.game.BallGroup.Component.StorageView.prototype.constructor = entities.game.BallGroup.Component.StorageView;
entities.game.BallGroup.Component._view = entities.game.BallGroup.Component.StorageView;
entities.game.BallGroup.Component.StorageView._isSharedComp = entities.game.BallGroup.Component._isSharedComp = false;
entities.game.BallGroup.Component.StorageView._fromPtr = entities.game.BallGroup.Component._fromPtr;
entities.game.BallGroup.Component.StorageView._toPtr = entities.game.BallGroup.Component._toPtr;
entities.game.BallGroup.Component.StorageView._tempHeapPtr = entities.game.BallGroup.Component._tempHeapPtr;
entities.game.BallGroup.Component.StorageView._size = entities.game.BallGroup.Component._size;
entities.game.BallGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BallGroup.Component.StorageView.prototype, {
});
entities.game.BallGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BallGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.BallGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.BallGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.BallGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BallGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.BallGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::BallGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.BallGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BallGroup.Component.cid; } } });
entities.game.Bootstraper = entities.game.Bootstraper || {};
entities.game.Bootstraper.Component = function() {
};
entities.game.Bootstraper.Component.prototype = Object.create(null);
entities.game.Bootstraper.Component.prototype.constructor = entities.game.Bootstraper.Component;
Object.defineProperties(entities.game.Bootstraper.Component.prototype, {
});
entities.game.Bootstraper.Component._size = 1;
entities.game.Bootstraper.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstraper.Component.prototype);
  return v;
};
entities.game.Bootstraper.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstraper.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstraper.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstraper.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstraper.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstraper.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstraper.Component.StorageView.prototype.constructor = entities.game.Bootstraper.Component.StorageView;
entities.game.Bootstraper.Component._view = entities.game.Bootstraper.Component.StorageView;
entities.game.Bootstraper.Component.StorageView._isSharedComp = entities.game.Bootstraper.Component._isSharedComp = false;
entities.game.Bootstraper.Component.StorageView._fromPtr = entities.game.Bootstraper.Component._fromPtr;
entities.game.Bootstraper.Component.StorageView._toPtr = entities.game.Bootstraper.Component._toPtr;
entities.game.Bootstraper.Component.StorageView._tempHeapPtr = entities.game.Bootstraper.Component._tempHeapPtr;
entities.game.Bootstraper.Component.StorageView._size = entities.game.Bootstraper.Component._size;
entities.game.Bootstraper.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstraper.Component.StorageView.prototype, {
});
entities.game.Bootstraper.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstraper.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstraper.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Bootstraper.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstraper.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstraper.Component.cid = Module._ut_component_register_cid(/*entities.game.Bootstraper.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Bootstraper::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Bootstraper.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstraper.Component.cid; } } });
entities.game.GameOver = entities.game.GameOver || {};
entities.game.GameOver.Component = function() {
};
entities.game.GameOver.Component.prototype = Object.create(null);
entities.game.GameOver.Component.prototype.constructor = entities.game.GameOver.Component;
Object.defineProperties(entities.game.GameOver.Component.prototype, {
});
entities.game.GameOver.Component._size = 1;
entities.game.GameOver.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOver.Component.prototype);
  return v;
};
entities.game.GameOver.Component._toPtr = function(ptr, v) {
};
entities.game.GameOver.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOver.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOver.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOver.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOver.Component.StorageView.prototype = Object.create(null);
entities.game.GameOver.Component.StorageView.prototype.constructor = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component._view = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component.StorageView._isSharedComp = entities.game.GameOver.Component._isSharedComp = false;
entities.game.GameOver.Component.StorageView._fromPtr = entities.game.GameOver.Component._fromPtr;
entities.game.GameOver.Component.StorageView._toPtr = entities.game.GameOver.Component._toPtr;
entities.game.GameOver.Component.StorageView._tempHeapPtr = entities.game.GameOver.Component._tempHeapPtr;
entities.game.GameOver.Component.StorageView._size = entities.game.GameOver.Component._size;
entities.game.GameOver.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOver.Component.StorageView.prototype, {
});
entities.game.GameOver.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOver.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOver.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameOver.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOver.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOver.Component.cid = Module._ut_component_register_cid(/*entities.game.GameOver.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameOver::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameOver.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOver.Component.cid; } } });
entities.game.GameplayEntityGroup = entities.game.GameplayEntityGroup || {};
entities.game.GameplayEntityGroup.Component = function() {
};
entities.game.GameplayEntityGroup.Component.prototype = Object.create(null);
entities.game.GameplayEntityGroup.Component.prototype.constructor = entities.game.GameplayEntityGroup.Component;
Object.defineProperties(entities.game.GameplayEntityGroup.Component.prototype, {
});
entities.game.GameplayEntityGroup.Component._size = 1;
entities.game.GameplayEntityGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameplayEntityGroup.Component.prototype);
  return v;
};
entities.game.GameplayEntityGroup.Component._toPtr = function(ptr, v) {
};
entities.game.GameplayEntityGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameplayEntityGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameplayEntityGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameplayEntityGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameplayEntityGroup.Component.StorageView.prototype = Object.create(null);
entities.game.GameplayEntityGroup.Component.StorageView.prototype.constructor = entities.game.GameplayEntityGroup.Component.StorageView;
entities.game.GameplayEntityGroup.Component._view = entities.game.GameplayEntityGroup.Component.StorageView;
entities.game.GameplayEntityGroup.Component.StorageView._isSharedComp = entities.game.GameplayEntityGroup.Component._isSharedComp = false;
entities.game.GameplayEntityGroup.Component.StorageView._fromPtr = entities.game.GameplayEntityGroup.Component._fromPtr;
entities.game.GameplayEntityGroup.Component.StorageView._toPtr = entities.game.GameplayEntityGroup.Component._toPtr;
entities.game.GameplayEntityGroup.Component.StorageView._tempHeapPtr = entities.game.GameplayEntityGroup.Component._tempHeapPtr;
entities.game.GameplayEntityGroup.Component.StorageView._size = entities.game.GameplayEntityGroup.Component._size;
entities.game.GameplayEntityGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameplayEntityGroup.Component.StorageView.prototype, {
});
entities.game.GameplayEntityGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameplayEntityGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.GameplayEntityGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameplayEntityGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.GameplayEntityGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameplayEntityGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.GameplayEntityGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameplayEntityGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameplayEntityGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameplayEntityGroup.Component.cid; } } });
entities.game.GameStart = entities.game.GameStart || {};
entities.game.GameStart.Component = function() {
};
entities.game.GameStart.Component.prototype = Object.create(null);
entities.game.GameStart.Component.prototype.constructor = entities.game.GameStart.Component;
Object.defineProperties(entities.game.GameStart.Component.prototype, {
});
entities.game.GameStart.Component._size = 1;
entities.game.GameStart.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameStart.Component.prototype);
  return v;
};
entities.game.GameStart.Component._toPtr = function(ptr, v) {
};
entities.game.GameStart.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameStart.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameStart.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameStart.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameStart.Component.StorageView.prototype = Object.create(null);
entities.game.GameStart.Component.StorageView.prototype.constructor = entities.game.GameStart.Component.StorageView;
entities.game.GameStart.Component._view = entities.game.GameStart.Component.StorageView;
entities.game.GameStart.Component.StorageView._isSharedComp = entities.game.GameStart.Component._isSharedComp = false;
entities.game.GameStart.Component.StorageView._fromPtr = entities.game.GameStart.Component._fromPtr;
entities.game.GameStart.Component.StorageView._toPtr = entities.game.GameStart.Component._toPtr;
entities.game.GameStart.Component.StorageView._tempHeapPtr = entities.game.GameStart.Component._tempHeapPtr;
entities.game.GameStart.Component.StorageView._size = entities.game.GameStart.Component._size;
entities.game.GameStart.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameStart.Component.StorageView.prototype, {
});
entities.game.GameStart.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameStart.Component is a POD type, so a JavaScript side copy constructor entities.game.GameStart.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameStart.Component, { cid: { configurable: true, get: function() { delete entities.game.GameStart.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameStart.Component.cid = Module._ut_component_register_cid(/*entities.game.GameStart.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameStart::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameStart.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameStart.Component.cid; } } });
entities.game.TutorialEntityGroup = entities.game.TutorialEntityGroup || {};
entities.game.TutorialEntityGroup.Component = function() {
};
entities.game.TutorialEntityGroup.Component.prototype = Object.create(null);
entities.game.TutorialEntityGroup.Component.prototype.constructor = entities.game.TutorialEntityGroup.Component;
Object.defineProperties(entities.game.TutorialEntityGroup.Component.prototype, {
});
entities.game.TutorialEntityGroup.Component._size = 1;
entities.game.TutorialEntityGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TutorialEntityGroup.Component.prototype);
  return v;
};
entities.game.TutorialEntityGroup.Component._toPtr = function(ptr, v) {
};
entities.game.TutorialEntityGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TutorialEntityGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TutorialEntityGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TutorialEntityGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TutorialEntityGroup.Component.StorageView.prototype = Object.create(null);
entities.game.TutorialEntityGroup.Component.StorageView.prototype.constructor = entities.game.TutorialEntityGroup.Component.StorageView;
entities.game.TutorialEntityGroup.Component._view = entities.game.TutorialEntityGroup.Component.StorageView;
entities.game.TutorialEntityGroup.Component.StorageView._isSharedComp = entities.game.TutorialEntityGroup.Component._isSharedComp = false;
entities.game.TutorialEntityGroup.Component.StorageView._fromPtr = entities.game.TutorialEntityGroup.Component._fromPtr;
entities.game.TutorialEntityGroup.Component.StorageView._toPtr = entities.game.TutorialEntityGroup.Component._toPtr;
entities.game.TutorialEntityGroup.Component.StorageView._tempHeapPtr = entities.game.TutorialEntityGroup.Component._tempHeapPtr;
entities.game.TutorialEntityGroup.Component.StorageView._size = entities.game.TutorialEntityGroup.Component._size;
entities.game.TutorialEntityGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TutorialEntityGroup.Component.StorageView.prototype, {
});
entities.game.TutorialEntityGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TutorialEntityGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.TutorialEntityGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.TutorialEntityGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.TutorialEntityGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TutorialEntityGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.TutorialEntityGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::TutorialEntityGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.TutorialEntityGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TutorialEntityGroup.Component.cid; } } });
game.ArrowTag = function() {
};
game.ArrowTag.prototype = Object.create(null);
game.ArrowTag.prototype.constructor = game.ArrowTag;
Object.defineProperties(game.ArrowTag.prototype, {
});
game.ArrowTag._size = 1;
game.ArrowTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ArrowTag.prototype);
  return v;
};
game.ArrowTag._toPtr = function(ptr, v) {
};
game.ArrowTag._toTempHeapPtr = function(ptr, v) {
};
game.ArrowTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.ArrowTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ArrowTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ArrowTag.StorageView.prototype = Object.create(null);
game.ArrowTag.StorageView.prototype.constructor = game.ArrowTag.StorageView;
game.ArrowTag._view = game.ArrowTag.StorageView;
game.ArrowTag.StorageView._isSharedComp = game.ArrowTag._isSharedComp = false;
game.ArrowTag.StorageView._fromPtr = game.ArrowTag._fromPtr;
game.ArrowTag.StorageView._toPtr = game.ArrowTag._toPtr;
game.ArrowTag.StorageView._tempHeapPtr = game.ArrowTag._tempHeapPtr;
game.ArrowTag.StorageView._size = game.ArrowTag._size;
game.ArrowTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.ArrowTag.StorageView.prototype, {
});
game.ArrowTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ArrowTag is a POD type, so a JavaScript side copy constructor game.ArrowTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ArrowTag, { cid: { configurable: true, get: function() { delete game.ArrowTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ArrowTag.cid = Module._ut_component_register_cid(/*game.ArrowTag*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::ArrowTag"*/, 0, 0); } } });
Object.defineProperties(game.ArrowTag.StorageView, { cid: { configurable: true, get: function() { return game.ArrowTag.cid; } } });
game.Ball = function(arg0, arg1, arg2, arg3, arg4) {
  this._MaxPower = (+(arg0===undefined ? 0 : arg0));
  this._Power = (+(arg1===undefined ? 0 : arg1));
  this._Shoot = (arg2 ? true : false);
  this._MoveDirection = new ut.Math.Vector2(); if ((arg3) !== undefined) { this._MoveDirection.copy(arg3); };
  this._DeltaDirection = (arg4|0);
};
game.Ball.prototype = Object.create(null);
game.Ball.prototype.constructor = game.Ball;
Object.defineProperties(game.Ball.prototype, {
  MaxPower: {
    get: function() { return this._MaxPower; },
    set: function(v) { this._MaxPower = (+(v===undefined ? 0 : v)); },
  },
  Power: {
    get: function() { return this._Power; },
    set: function(v) { this._Power = (+(v===undefined ? 0 : v)); },
  },
  Shoot: {
    get: function() { return this._Shoot; },
    set: function(v) { this._Shoot = (v ? true : false); },
  },
  MoveDirection: {
    get: function() { return this._MoveDirection; },
    set: function(v) { this._MoveDirection.copy(v); },
  },
  DeltaDirection: {
    get: function() { return this._DeltaDirection; },
    set: function(v) { this._DeltaDirection = (v|0); },
  },
});
game.Ball._size = 24;
game.Ball._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Ball.prototype);
  v._MaxPower = HEAPF32[(ptr+0)>>2];
  v._Power = HEAPF32[(ptr+4)>>2];
  v._Shoot = (HEAP8[ptr+8]?true:false);
  v._MoveDirection = ut._utils.vec2FromHeap(null, ptr+12);
  v._DeltaDirection = HEAP32[(ptr+20)>>2];
  return v;
};
game.Ball._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MaxPower;
  HEAPF32[(ptr+4)>>2] = v.Power;
  HEAP8[ptr+8] = (v.Shoot)?1:0;
  ut._utils.vec2ToHeap(v.MoveDirection, ptr+12);
  HEAP32[(ptr+20)>>2] = v.DeltaDirection;
};
game.Ball._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MaxPower;
  HEAPF32[(ptr+4)>>2] = v.Power;
  HEAP8[ptr+8] = (v.Shoot)?1:0;
  ut._utils.vec2ToHeap(v.MoveDirection, ptr+12);
  HEAP32[(ptr+20)>>2] = v.DeltaDirection;
};
game.Ball._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.Ball._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Ball.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Ball.StorageView.prototype = Object.create(null);
game.Ball.StorageView.prototype.constructor = game.Ball.StorageView;
game.Ball._view = game.Ball.StorageView;
game.Ball.StorageView._isSharedComp = game.Ball._isSharedComp = false;
game.Ball.StorageView._fromPtr = game.Ball._fromPtr;
game.Ball.StorageView._toPtr = game.Ball._toPtr;
game.Ball.StorageView._tempHeapPtr = game.Ball._tempHeapPtr;
game.Ball.StorageView._size = game.Ball._size;
game.Ball.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.Ball.StorageView.prototype, {
  MaxPower: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Power: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  Shoot: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  MoveDirection: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+12); },
  },
  DeltaDirection: {
    get: function() { return HEAP32[(this._ptr+20)>>2]; },
    set: function(v) { HEAP32[(this._ptr+20)>>2] = v; },
  },
});
game.Ball._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Ball is a POD type, so a JavaScript side copy constructor game.Ball._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Ball, { cid: { configurable: true, get: function() { delete game.Ball.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Ball.cid = Module._ut_component_register_cid(/*game.Ball*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Ball"*/, 0, 0); } } });
Object.defineProperties(game.Ball.StorageView, { cid: { configurable: true, get: function() { return game.Ball.cid; } } });
game.Ball.MaxPower = { $ofs:0, $t:"float", $c:game.Ball };
game.Ball.Power = { $ofs:4, $t:"float", $c:game.Ball };
game.Ball.Shoot = { $ofs:8, $t:"bool", $c:game.Ball };
game.Ball.MoveDirection = { $ofs:12, $t:"ut.Math.Vector2", $c:game.Ball };
game.Ball.MoveDirection.y = { $ofs:16, $t:"float", $c:game.Ball };
game.Ball.MoveDirection.x = { $ofs:12, $t:"float", $c:game.Ball };
game.Ball.DeltaDirection = { $ofs:20, $t:"int32_t", $c:game.Ball };
game.Borders = function(arg0, arg1, arg2, arg3) {
  this._Height = (+(arg0===undefined ? 0 : arg0));
  this._Width = (+(arg1===undefined ? 0 : arg1));
  this._WorldHeight = (+(arg2===undefined ? 0 : arg2));
  this._WorldWidth = (+(arg3===undefined ? 0 : arg3));
};
game.Borders.prototype = Object.create(null);
game.Borders.prototype.constructor = game.Borders;
Object.defineProperties(game.Borders.prototype, {
  Height: {
    get: function() { return this._Height; },
    set: function(v) { this._Height = (+(v===undefined ? 0 : v)); },
  },
  Width: {
    get: function() { return this._Width; },
    set: function(v) { this._Width = (+(v===undefined ? 0 : v)); },
  },
  WorldHeight: {
    get: function() { return this._WorldHeight; },
    set: function(v) { this._WorldHeight = (+(v===undefined ? 0 : v)); },
  },
  WorldWidth: {
    get: function() { return this._WorldWidth; },
    set: function(v) { this._WorldWidth = (+(v===undefined ? 0 : v)); },
  },
});
game.Borders._size = 16;
game.Borders._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Borders.prototype);
  v._Height = HEAPF32[(ptr+0)>>2];
  v._Width = HEAPF32[(ptr+4)>>2];
  v._WorldHeight = HEAPF32[(ptr+8)>>2];
  v._WorldWidth = HEAPF32[(ptr+12)>>2];
  return v;
};
game.Borders._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Height;
  HEAPF32[(ptr+4)>>2] = v.Width;
  HEAPF32[(ptr+8)>>2] = v.WorldHeight;
  HEAPF32[(ptr+12)>>2] = v.WorldWidth;
};
game.Borders._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Height;
  HEAPF32[(ptr+4)>>2] = v.Width;
  HEAPF32[(ptr+8)>>2] = v.WorldHeight;
  HEAPF32[(ptr+12)>>2] = v.WorldWidth;
};
game.Borders._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Borders._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Borders.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Borders.StorageView.prototype = Object.create(null);
game.Borders.StorageView.prototype.constructor = game.Borders.StorageView;
game.Borders._view = game.Borders.StorageView;
game.Borders.StorageView._isSharedComp = game.Borders._isSharedComp = false;
game.Borders.StorageView._fromPtr = game.Borders._fromPtr;
game.Borders.StorageView._toPtr = game.Borders._toPtr;
game.Borders.StorageView._tempHeapPtr = game.Borders._tempHeapPtr;
game.Borders.StorageView._size = game.Borders._size;
game.Borders.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Borders.StorageView.prototype, {
  Height: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Width: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  WorldHeight: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  WorldWidth: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.Borders._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Borders is a POD type, so a JavaScript side copy constructor game.Borders._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Borders, { cid: { configurable: true, get: function() { delete game.Borders.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Borders.cid = Module._ut_component_register_cid(/*game.Borders*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Borders"*/, 0, 0); } } });
Object.defineProperties(game.Borders.StorageView, { cid: { configurable: true, get: function() { return game.Borders.cid; } } });
game.Borders.Height = { $ofs:0, $t:"float", $c:game.Borders };
game.Borders.Width = { $ofs:4, $t:"float", $c:game.Borders };
game.Borders.WorldHeight = { $ofs:8, $t:"float", $c:game.Borders };
game.Borders.WorldWidth = { $ofs:12, $t:"float", $c:game.Borders };
game.Coin = function() {
};
game.Coin.prototype = Object.create(null);
game.Coin.prototype.constructor = game.Coin;
Object.defineProperties(game.Coin.prototype, {
});
game.Coin._size = 1;
game.Coin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Coin.prototype);
  return v;
};
game.Coin._toPtr = function(ptr, v) {
};
game.Coin._toTempHeapPtr = function(ptr, v) {
};
game.Coin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Coin._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Coin.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Coin.StorageView.prototype = Object.create(null);
game.Coin.StorageView.prototype.constructor = game.Coin.StorageView;
game.Coin._view = game.Coin.StorageView;
game.Coin.StorageView._isSharedComp = game.Coin._isSharedComp = false;
game.Coin.StorageView._fromPtr = game.Coin._fromPtr;
game.Coin.StorageView._toPtr = game.Coin._toPtr;
game.Coin.StorageView._tempHeapPtr = game.Coin._tempHeapPtr;
game.Coin.StorageView._size = game.Coin._size;
game.Coin.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Coin.StorageView.prototype, {
});
game.Coin._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Coin is a POD type, so a JavaScript side copy constructor game.Coin._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Coin, { cid: { configurable: true, get: function() { delete game.Coin.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Coin.cid = Module._ut_component_register_cid(/*game.Coin*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Coin"*/, 0, 0); } } });
Object.defineProperties(game.Coin.StorageView, { cid: { configurable: true, get: function() { return game.Coin.cid; } } });
game.HitAudio = function(arg0) {
  this._HitAudioClips = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.HitAudio.prototype = Object.create(null);
game.HitAudio.prototype.constructor = game.HitAudio;
Object.defineProperties(game.HitAudio.prototype, {
  HitAudioClips: {
    get: function() { return this._HitAudioClips; },
    set: function(v) { this._HitAudioClips = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.HitAudio._size = 12;
game.HitAudio._fromPtr = function(ptr, v) {
  v = v || Object.create(game.HitAudio.prototype);
  v._HitAudioClips = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); });
  return v;
};
game.HitAudio._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.HitAudioClips, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.HitAudio._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.HitAudioClips, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.HitAudio._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.HitAudio._toTempHeapPtr(ptr, v);
  return ptr;
};
game.HitAudio.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.HitAudio.StorageView.prototype = Object.create(null);
game.HitAudio.StorageView.prototype.constructor = game.HitAudio.StorageView;
game.HitAudio._view = game.HitAudio.StorageView;
game.HitAudio.StorageView._isSharedComp = game.HitAudio._isSharedComp = false;
game.HitAudio.StorageView._fromPtr = game.HitAudio._fromPtr;
game.HitAudio.StorageView._toPtr = game.HitAudio._toPtr;
game.HitAudio.StorageView._tempHeapPtr = game.HitAudio._tempHeapPtr;
game.HitAudio.StorageView._size = game.HitAudio._size;
game.HitAudio.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.HitAudio.StorageView.prototype, {
  HitAudioClips: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
});
game.HitAudio._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
};
game.HitAudio._copyFn = function copy(src, dst) {
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 8);
};
Object.defineProperties(game.HitAudio, { cid: { configurable: true, get: function() { delete game.HitAudio.cid; var offsetsPtr = ut.tempHeapPtrI32([-1]); var offsetsCount = 1; return game.HitAudio.cid = Module._ut_component_register_cid(/*game.HitAudio*/ 12, 4, 0, offsetsPtr, offsetsCount, 0/*"game::HitAudio"*/, ut.DestructorFn._cb.token_for(game.HitAudio._dtorFn), ut.CopyFn._cb.token_for(game.HitAudio._copyFn)); } } });
Object.defineProperties(game.HitAudio.StorageView, { cid: { configurable: true, get: function() { return game.HitAudio.cid; } } });
game.HitAudio.HitAudioClips = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.HitAudio };
game.HitSound = function() {
};
game.HitSound.prototype = Object.create(null);
game.HitSound.prototype.constructor = game.HitSound;
Object.defineProperties(game.HitSound.prototype, {
});
game.HitSound._size = 1;
game.HitSound._fromPtr = function(ptr, v) {
  v = v || Object.create(game.HitSound.prototype);
  return v;
};
game.HitSound._toPtr = function(ptr, v) {
};
game.HitSound._toTempHeapPtr = function(ptr, v) {
};
game.HitSound._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.HitSound._toTempHeapPtr(ptr, v);
  return ptr;
};
game.HitSound.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.HitSound.StorageView.prototype = Object.create(null);
game.HitSound.StorageView.prototype.constructor = game.HitSound.StorageView;
game.HitSound._view = game.HitSound.StorageView;
game.HitSound.StorageView._isSharedComp = game.HitSound._isSharedComp = false;
game.HitSound.StorageView._fromPtr = game.HitSound._fromPtr;
game.HitSound.StorageView._toPtr = game.HitSound._toPtr;
game.HitSound.StorageView._tempHeapPtr = game.HitSound._tempHeapPtr;
game.HitSound.StorageView._size = game.HitSound._size;
game.HitSound.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.HitSound.StorageView.prototype, {
});
game.HitSound._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.HitSound is a POD type, so a JavaScript side copy constructor game.HitSound._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.HitSound, { cid: { configurable: true, get: function() { delete game.HitSound.cid; var offsetsPtr = 0, offsetsCount = 0; return game.HitSound.cid = Module._ut_component_register_cid(/*game.HitSound*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::HitSound"*/, 0, 0); } } });
Object.defineProperties(game.HitSound.StorageView, { cid: { configurable: true, get: function() { return game.HitSound.cid; } } });
game.Hole = function() {
};
game.Hole.prototype = Object.create(null);
game.Hole.prototype.constructor = game.Hole;
Object.defineProperties(game.Hole.prototype, {
});
game.Hole._size = 1;
game.Hole._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Hole.prototype);
  return v;
};
game.Hole._toPtr = function(ptr, v) {
};
game.Hole._toTempHeapPtr = function(ptr, v) {
};
game.Hole._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Hole._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Hole.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Hole.StorageView.prototype = Object.create(null);
game.Hole.StorageView.prototype.constructor = game.Hole.StorageView;
game.Hole._view = game.Hole.StorageView;
game.Hole.StorageView._isSharedComp = game.Hole._isSharedComp = false;
game.Hole.StorageView._fromPtr = game.Hole._fromPtr;
game.Hole.StorageView._toPtr = game.Hole._toPtr;
game.Hole.StorageView._tempHeapPtr = game.Hole._tempHeapPtr;
game.Hole.StorageView._size = game.Hole._size;
game.Hole.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Hole.StorageView.prototype, {
});
game.Hole._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Hole is a POD type, so a JavaScript side copy constructor game.Hole._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Hole, { cid: { configurable: true, get: function() { delete game.Hole.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Hole.cid = Module._ut_component_register_cid(/*game.Hole*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Hole"*/, 0, 0); } } });
Object.defineProperties(game.Hole.StorageView, { cid: { configurable: true, get: function() { return game.Hole.cid; } } });
game.InputHelper = function(arg0, arg1, arg2) {
  this._InputType = (arg0|0);
  this._FirstTouchData = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._FirstTouchData.copy(arg1); };
  this._IsClickDown = (arg2 ? true : false);
};
game.InputHelper.prototype = Object.create(null);
game.InputHelper.prototype.constructor = game.InputHelper;
Object.defineProperties(game.InputHelper.prototype, {
  InputType: {
    get: function() { return this._InputType; },
    set: function(v) { this._InputType = (v|0); },
  },
  FirstTouchData: {
    get: function() { return this._FirstTouchData; },
    set: function(v) { this._FirstTouchData.copy(v); },
  },
  IsClickDown: {
    get: function() { return this._IsClickDown; },
    set: function(v) { this._IsClickDown = (v ? true : false); },
  },
});
game.InputHelper._size = 16;
game.InputHelper._fromPtr = function(ptr, v) {
  v = v || Object.create(game.InputHelper.prototype);
  v._InputType = HEAP32[(ptr+0)>>2];
  v._FirstTouchData = ut._utils.vec2FromHeap(null, ptr+4);
  v._IsClickDown = (HEAP8[ptr+12]?true:false);
  return v;
};
game.InputHelper._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.InputType;
  ut._utils.vec2ToHeap(v.FirstTouchData, ptr+4);
  HEAP8[ptr+12] = (v.IsClickDown)?1:0;
};
game.InputHelper._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.InputType;
  ut._utils.vec2ToHeap(v.FirstTouchData, ptr+4);
  HEAP8[ptr+12] = (v.IsClickDown)?1:0;
};
game.InputHelper._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.InputHelper._toTempHeapPtr(ptr, v);
  return ptr;
};
game.InputHelper.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.InputHelper.StorageView.prototype = Object.create(null);
game.InputHelper.StorageView.prototype.constructor = game.InputHelper.StorageView;
game.InputHelper._view = game.InputHelper.StorageView;
game.InputHelper.StorageView._isSharedComp = game.InputHelper._isSharedComp = false;
game.InputHelper.StorageView._fromPtr = game.InputHelper._fromPtr;
game.InputHelper.StorageView._toPtr = game.InputHelper._toPtr;
game.InputHelper.StorageView._tempHeapPtr = game.InputHelper._tempHeapPtr;
game.InputHelper.StorageView._size = game.InputHelper._size;
game.InputHelper.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.InputHelper.StorageView.prototype, {
  InputType: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  FirstTouchData: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+4); },
  },
  IsClickDown: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.InputHelper._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.InputHelper is a POD type, so a JavaScript side copy constructor game.InputHelper._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.InputHelper, { cid: { configurable: true, get: function() { delete game.InputHelper.cid; var offsetsPtr = 0, offsetsCount = 0; return game.InputHelper.cid = Module._ut_component_register_cid(/*game.InputHelper*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::InputHelper"*/, 0, 0); } } });
Object.defineProperties(game.InputHelper.StorageView, { cid: { configurable: true, get: function() { return game.InputHelper.cid; } } });
game.InputHelper.InputType = { $ofs:0, $t:"game.InputType", $c:game.InputHelper };
game.InputHelper.FirstTouchData = { $ofs:4, $t:"ut.Math.Vector2", $c:game.InputHelper };
game.InputHelper.FirstTouchData.y = { $ofs:8, $t:"float", $c:game.InputHelper };
game.InputHelper.FirstTouchData.x = { $ofs:4, $t:"float", $c:game.InputHelper };
game.InputHelper.IsClickDown = { $ofs:12, $t:"bool", $c:game.InputHelper };
game.Lethal = function() {
};
game.Lethal.prototype = Object.create(null);
game.Lethal.prototype.constructor = game.Lethal;
Object.defineProperties(game.Lethal.prototype, {
});
game.Lethal._size = 1;
game.Lethal._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Lethal.prototype);
  return v;
};
game.Lethal._toPtr = function(ptr, v) {
};
game.Lethal._toTempHeapPtr = function(ptr, v) {
};
game.Lethal._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Lethal._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Lethal.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Lethal.StorageView.prototype = Object.create(null);
game.Lethal.StorageView.prototype.constructor = game.Lethal.StorageView;
game.Lethal._view = game.Lethal.StorageView;
game.Lethal.StorageView._isSharedComp = game.Lethal._isSharedComp = false;
game.Lethal.StorageView._fromPtr = game.Lethal._fromPtr;
game.Lethal.StorageView._toPtr = game.Lethal._toPtr;
game.Lethal.StorageView._tempHeapPtr = game.Lethal._tempHeapPtr;
game.Lethal.StorageView._size = game.Lethal._size;
game.Lethal.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Lethal.StorageView.prototype, {
});
game.Lethal._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Lethal is a POD type, so a JavaScript side copy constructor game.Lethal._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Lethal, { cid: { configurable: true, get: function() { delete game.Lethal.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Lethal.cid = Module._ut_component_register_cid(/*game.Lethal*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Lethal"*/, 0, 0); } } });
Object.defineProperties(game.Lethal.StorageView, { cid: { configurable: true, get: function() { return game.Lethal.cid; } } });
game.NoShotsSprite = function(arg0, arg1) {
  this._DefaultSprite = (arg0 === undefined ? new ut.Entity : arg0);
  this._NoShots = (arg1 === undefined ? new ut.Entity : arg1);
};
game.NoShotsSprite.prototype = Object.create(null);
game.NoShotsSprite.prototype.constructor = game.NoShotsSprite;
Object.defineProperties(game.NoShotsSprite.prototype, {
  DefaultSprite: {
    get: function() { return this._DefaultSprite; },
    set: function(v) { this._DefaultSprite = (v === undefined ? new ut.Entity : v); },
  },
  NoShots: {
    get: function() { return this._NoShots; },
    set: function(v) { this._NoShots = (v === undefined ? new ut.Entity : v); },
  },
});
game.NoShotsSprite._size = 16;
game.NoShotsSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(game.NoShotsSprite.prototype);
  v._DefaultSprite = ut.Entity._fromPtr(ptr+0);
  v._NoShots = ut.Entity._fromPtr(ptr+8);
  return v;
};
game.NoShotsSprite._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.DefaultSprite);
  ut.Entity._toPtr(ptr+8, v.NoShots);
};
game.NoShotsSprite._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.DefaultSprite);
  ut.Entity._toPtr(ptr+8, v.NoShots);
};
game.NoShotsSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.NoShotsSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
game.NoShotsSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.NoShotsSprite.StorageView.prototype = Object.create(null);
game.NoShotsSprite.StorageView.prototype.constructor = game.NoShotsSprite.StorageView;
game.NoShotsSprite._view = game.NoShotsSprite.StorageView;
game.NoShotsSprite.StorageView._isSharedComp = game.NoShotsSprite._isSharedComp = false;
game.NoShotsSprite.StorageView._fromPtr = game.NoShotsSprite._fromPtr;
game.NoShotsSprite.StorageView._toPtr = game.NoShotsSprite._toPtr;
game.NoShotsSprite.StorageView._tempHeapPtr = game.NoShotsSprite._tempHeapPtr;
game.NoShotsSprite.StorageView._size = game.NoShotsSprite._size;
game.NoShotsSprite.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.NoShotsSprite.StorageView.prototype, {
  DefaultSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  NoShots: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
});
game.NoShotsSprite._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.NoShotsSprite is a POD type, so a JavaScript side copy constructor game.NoShotsSprite._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.NoShotsSprite, { cid: { configurable: true, get: function() { delete game.NoShotsSprite.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.NoShotsSprite.cid = Module._ut_component_register_cid(/*game.NoShotsSprite*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::NoShotsSprite"*/, 0, 0); } } });
Object.defineProperties(game.NoShotsSprite.StorageView, { cid: { configurable: true, get: function() { return game.NoShotsSprite.cid; } } });
game.NoShotsSprite.DefaultSprite = { $ofs:0, $t:"ut.Entity", $c:game.NoShotsSprite };
game.NoShotsSprite.DefaultSprite.index = { $ofs:0, $t:"int32_t", $c:game.NoShotsSprite };
game.NoShotsSprite.DefaultSprite.version = { $ofs:4, $t:"int32_t", $c:game.NoShotsSprite };
game.NoShotsSprite.NoShots = { $ofs:8, $t:"ut.Entity", $c:game.NoShotsSprite };
game.NoShotsSprite.NoShots.index = { $ofs:8, $t:"int32_t", $c:game.NoShotsSprite };
game.NoShotsSprite.NoShots.version = { $ofs:12, $t:"int32_t", $c:game.NoShotsSprite };
game.Object = function() {
};
game.Object.prototype = Object.create(null);
game.Object.prototype.constructor = game.Object;
Object.defineProperties(game.Object.prototype, {
});
game.Object._size = 1;
game.Object._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Object.prototype);
  return v;
};
game.Object._toPtr = function(ptr, v) {
};
game.Object._toTempHeapPtr = function(ptr, v) {
};
game.Object._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Object._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Object.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Object.StorageView.prototype = Object.create(null);
game.Object.StorageView.prototype.constructor = game.Object.StorageView;
game.Object._view = game.Object.StorageView;
game.Object.StorageView._isSharedComp = game.Object._isSharedComp = false;
game.Object.StorageView._fromPtr = game.Object._fromPtr;
game.Object.StorageView._toPtr = game.Object._toPtr;
game.Object.StorageView._tempHeapPtr = game.Object._tempHeapPtr;
game.Object.StorageView._size = game.Object._size;
game.Object.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Object.StorageView.prototype, {
});
game.Object._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Object is a POD type, so a JavaScript side copy constructor game.Object._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Object, { cid: { configurable: true, get: function() { delete game.Object.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Object.cid = Module._ut_component_register_cid(/*game.Object*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Object"*/, 0, 0); } } });
Object.defineProperties(game.Object.StorageView, { cid: { configurable: true, get: function() { return game.Object.cid; } } });
game.Obstacle = function() {
};
game.Obstacle.prototype = Object.create(null);
game.Obstacle.prototype.constructor = game.Obstacle;
Object.defineProperties(game.Obstacle.prototype, {
});
game.Obstacle._size = 1;
game.Obstacle._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Obstacle.prototype);
  return v;
};
game.Obstacle._toPtr = function(ptr, v) {
};
game.Obstacle._toTempHeapPtr = function(ptr, v) {
};
game.Obstacle._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Obstacle._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Obstacle.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Obstacle.StorageView.prototype = Object.create(null);
game.Obstacle.StorageView.prototype.constructor = game.Obstacle.StorageView;
game.Obstacle._view = game.Obstacle.StorageView;
game.Obstacle.StorageView._isSharedComp = game.Obstacle._isSharedComp = false;
game.Obstacle.StorageView._fromPtr = game.Obstacle._fromPtr;
game.Obstacle.StorageView._toPtr = game.Obstacle._toPtr;
game.Obstacle.StorageView._tempHeapPtr = game.Obstacle._tempHeapPtr;
game.Obstacle.StorageView._size = game.Obstacle._size;
game.Obstacle.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Obstacle.StorageView.prototype, {
});
game.Obstacle._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Obstacle is a POD type, so a JavaScript side copy constructor game.Obstacle._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Obstacle, { cid: { configurable: true, get: function() { delete game.Obstacle.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Obstacle.cid = Module._ut_component_register_cid(/*game.Obstacle*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Obstacle"*/, 0, 0); } } });
Object.defineProperties(game.Obstacle.StorageView, { cid: { configurable: true, get: function() { return game.Obstacle.cid; } } });
game.ObstacleSpawnerHelper = function(arg0, arg1, arg2, arg3, arg4) {
  this._AreaPercentage = (+(arg0===undefined ? 0 : arg0));
  this._XScaleValues = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._XScaleValues.copy(arg1); };
  this._YScaleValues = new ut.Math.Vector2(); if ((arg2) !== undefined) { this._YScaleValues.copy(arg2); };
  this._BorderOffset = (+(arg3===undefined ? 0 : arg3));
  this._SpawnMode = (arg4|0);
};
game.ObstacleSpawnerHelper.prototype = Object.create(null);
game.ObstacleSpawnerHelper.prototype.constructor = game.ObstacleSpawnerHelper;
Object.defineProperties(game.ObstacleSpawnerHelper.prototype, {
  AreaPercentage: {
    get: function() { return this._AreaPercentage; },
    set: function(v) { this._AreaPercentage = (+(v===undefined ? 0 : v)); },
  },
  XScaleValues: {
    get: function() { return this._XScaleValues; },
    set: function(v) { this._XScaleValues.copy(v); },
  },
  YScaleValues: {
    get: function() { return this._YScaleValues; },
    set: function(v) { this._YScaleValues.copy(v); },
  },
  BorderOffset: {
    get: function() { return this._BorderOffset; },
    set: function(v) { this._BorderOffset = (+(v===undefined ? 0 : v)); },
  },
  SpawnMode: {
    get: function() { return this._SpawnMode; },
    set: function(v) { this._SpawnMode = (v|0); },
  },
});
game.ObstacleSpawnerHelper._size = 28;
game.ObstacleSpawnerHelper._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ObstacleSpawnerHelper.prototype);
  v._AreaPercentage = HEAPF32[(ptr+0)>>2];
  v._XScaleValues = ut._utils.vec2FromHeap(null, ptr+4);
  v._YScaleValues = ut._utils.vec2FromHeap(null, ptr+12);
  v._BorderOffset = HEAPF32[(ptr+20)>>2];
  v._SpawnMode = HEAP32[(ptr+24)>>2];
  return v;
};
game.ObstacleSpawnerHelper._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.AreaPercentage;
  ut._utils.vec2ToHeap(v.XScaleValues, ptr+4);
  ut._utils.vec2ToHeap(v.YScaleValues, ptr+12);
  HEAPF32[(ptr+20)>>2] = v.BorderOffset;
  HEAP32[(ptr+24)>>2] = v.SpawnMode;
};
game.ObstacleSpawnerHelper._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.AreaPercentage;
  ut._utils.vec2ToHeap(v.XScaleValues, ptr+4);
  ut._utils.vec2ToHeap(v.YScaleValues, ptr+12);
  HEAPF32[(ptr+20)>>2] = v.BorderOffset;
  HEAP32[(ptr+24)>>2] = v.SpawnMode;
};
game.ObstacleSpawnerHelper._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(28);
  if (v) game.ObstacleSpawnerHelper._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ObstacleSpawnerHelper.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ObstacleSpawnerHelper.StorageView.prototype = Object.create(null);
game.ObstacleSpawnerHelper.StorageView.prototype.constructor = game.ObstacleSpawnerHelper.StorageView;
game.ObstacleSpawnerHelper._view = game.ObstacleSpawnerHelper.StorageView;
game.ObstacleSpawnerHelper.StorageView._isSharedComp = game.ObstacleSpawnerHelper._isSharedComp = false;
game.ObstacleSpawnerHelper.StorageView._fromPtr = game.ObstacleSpawnerHelper._fromPtr;
game.ObstacleSpawnerHelper.StorageView._toPtr = game.ObstacleSpawnerHelper._toPtr;
game.ObstacleSpawnerHelper.StorageView._tempHeapPtr = game.ObstacleSpawnerHelper._tempHeapPtr;
game.ObstacleSpawnerHelper.StorageView._size = game.ObstacleSpawnerHelper._size;
game.ObstacleSpawnerHelper.StorageView.prototype.$advance = function() {
  this._ptr += 28;
};
Object.defineProperties(game.ObstacleSpawnerHelper.StorageView.prototype, {
  AreaPercentage: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  XScaleValues: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+4); },
  },
  YScaleValues: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+12); },
  },
  BorderOffset: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  SpawnMode: {
    get: function() { return HEAP32[(this._ptr+24)>>2]; },
    set: function(v) { HEAP32[(this._ptr+24)>>2] = v; },
  },
});
game.ObstacleSpawnerHelper._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ObstacleSpawnerHelper is a POD type, so a JavaScript side copy constructor game.ObstacleSpawnerHelper._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ObstacleSpawnerHelper, { cid: { configurable: true, get: function() { delete game.ObstacleSpawnerHelper.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ObstacleSpawnerHelper.cid = Module._ut_component_register_cid(/*game.ObstacleSpawnerHelper*/ 28, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ObstacleSpawnerHelper"*/, 0, 0); } } });
Object.defineProperties(game.ObstacleSpawnerHelper.StorageView, { cid: { configurable: true, get: function() { return game.ObstacleSpawnerHelper.cid; } } });
game.ObstacleSpawnerHelper.AreaPercentage = { $ofs:0, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.XScaleValues = { $ofs:4, $t:"ut.Math.Vector2", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.XScaleValues.y = { $ofs:8, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.XScaleValues.x = { $ofs:4, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.YScaleValues = { $ofs:12, $t:"ut.Math.Vector2", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.YScaleValues.y = { $ofs:16, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.YScaleValues.x = { $ofs:12, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.BorderOffset = { $ofs:20, $t:"float", $c:game.ObstacleSpawnerHelper };
game.ObstacleSpawnerHelper.SpawnMode = { $ofs:24, $t:"game.ObstacleSpawnerMode", $c:game.ObstacleSpawnerHelper };
game.ShotPeg = function(arg0, arg1, arg2) {
  this._InitialSprite = (arg0 === undefined ? new ut.Entity : arg0);
  this._CurrentSprite = (arg1 === undefined ? new ut.Entity : arg1);
  this._UsedSprite = (arg2 === undefined ? new ut.Entity : arg2);
};
game.ShotPeg.prototype = Object.create(null);
game.ShotPeg.prototype.constructor = game.ShotPeg;
Object.defineProperties(game.ShotPeg.prototype, {
  InitialSprite: {
    get: function() { return this._InitialSprite; },
    set: function(v) { this._InitialSprite = (v === undefined ? new ut.Entity : v); },
  },
  CurrentSprite: {
    get: function() { return this._CurrentSprite; },
    set: function(v) { this._CurrentSprite = (v === undefined ? new ut.Entity : v); },
  },
  UsedSprite: {
    get: function() { return this._UsedSprite; },
    set: function(v) { this._UsedSprite = (v === undefined ? new ut.Entity : v); },
  },
});
game.ShotPeg._size = 24;
game.ShotPeg._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShotPeg.prototype);
  v._InitialSprite = ut.Entity._fromPtr(ptr+0);
  v._CurrentSprite = ut.Entity._fromPtr(ptr+8);
  v._UsedSprite = ut.Entity._fromPtr(ptr+16);
  return v;
};
game.ShotPeg._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.InitialSprite);
  ut.Entity._toPtr(ptr+8, v.CurrentSprite);
  ut.Entity._toPtr(ptr+16, v.UsedSprite);
};
game.ShotPeg._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.InitialSprite);
  ut.Entity._toPtr(ptr+8, v.CurrentSprite);
  ut.Entity._toPtr(ptr+16, v.UsedSprite);
};
game.ShotPeg._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.ShotPeg._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShotPeg.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShotPeg.StorageView.prototype = Object.create(null);
game.ShotPeg.StorageView.prototype.constructor = game.ShotPeg.StorageView;
game.ShotPeg._view = game.ShotPeg.StorageView;
game.ShotPeg.StorageView._isSharedComp = game.ShotPeg._isSharedComp = false;
game.ShotPeg.StorageView._fromPtr = game.ShotPeg._fromPtr;
game.ShotPeg.StorageView._toPtr = game.ShotPeg._toPtr;
game.ShotPeg.StorageView._tempHeapPtr = game.ShotPeg._tempHeapPtr;
game.ShotPeg.StorageView._size = game.ShotPeg._size;
game.ShotPeg.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.ShotPeg.StorageView.prototype, {
  InitialSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  CurrentSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  UsedSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
});
game.ShotPeg._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShotPeg is a POD type, so a JavaScript side copy constructor game.ShotPeg._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ShotPeg, { cid: { configurable: true, get: function() { delete game.ShotPeg.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16]); var offsetsCount = 3; return game.ShotPeg.cid = Module._ut_component_register_cid(/*game.ShotPeg*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ShotPeg"*/, 0, 0); } } });
Object.defineProperties(game.ShotPeg.StorageView, { cid: { configurable: true, get: function() { return game.ShotPeg.cid; } } });
game.ShotPeg.InitialSprite = { $ofs:0, $t:"ut.Entity", $c:game.ShotPeg };
game.ShotPeg.InitialSprite.index = { $ofs:0, $t:"int32_t", $c:game.ShotPeg };
game.ShotPeg.InitialSprite.version = { $ofs:4, $t:"int32_t", $c:game.ShotPeg };
game.ShotPeg.CurrentSprite = { $ofs:8, $t:"ut.Entity", $c:game.ShotPeg };
game.ShotPeg.CurrentSprite.index = { $ofs:8, $t:"int32_t", $c:game.ShotPeg };
game.ShotPeg.CurrentSprite.version = { $ofs:12, $t:"int32_t", $c:game.ShotPeg };
game.ShotPeg.UsedSprite = { $ofs:16, $t:"ut.Entity", $c:game.ShotPeg };
game.ShotPeg.UsedSprite.index = { $ofs:16, $t:"int32_t", $c:game.ShotPeg };
game.ShotPeg.UsedSprite.version = { $ofs:20, $t:"int32_t", $c:game.ShotPeg };
game.Tutorial = function(arg0, arg1, arg2) {
  this._Index = (arg0|0);
  this._Tries = (arg1|0);
  this._ChildEntities = (arg2 === undefined ? new Array() : ((arg2 instanceof Array) ? arg2 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.Tutorial.prototype = Object.create(null);
game.Tutorial.prototype.constructor = game.Tutorial;
Object.defineProperties(game.Tutorial.prototype, {
  Index: {
    get: function() { return this._Index; },
    set: function(v) { this._Index = (v|0); },
  },
  Tries: {
    get: function() { return this._Tries; },
    set: function(v) { this._Tries = (v|0); },
  },
  ChildEntities: {
    get: function() { return this._ChildEntities; },
    set: function(v) { this._ChildEntities = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.Tutorial._size = 16;
game.Tutorial._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Tutorial.prototype);
  v._Index = HEAP16[(ptr+0)>>1];
  v._Tries = HEAP16[(ptr+2)>>1];
  v._ChildEntities = ut.nativeBufferToJsArray(ptr+4, 8, function(p) { return ut.Entity._fromPtr(p); });
  return v;
};
game.Tutorial._toPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Index;
  HEAP16[(ptr+2)>>1] = v.Tries;
  ut.jsArrayToExistingNativeBuffer_pod(v.ChildEntities, ptr+4, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.Tutorial._toTempHeapPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Index;
  HEAP16[(ptr+2)>>1] = v.Tries;
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.ChildEntities, ptr+4, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.Tutorial._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Tutorial._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Tutorial.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Tutorial.StorageView.prototype = Object.create(null);
game.Tutorial.StorageView.prototype.constructor = game.Tutorial.StorageView;
game.Tutorial._view = game.Tutorial.StorageView;
game.Tutorial.StorageView._isSharedComp = game.Tutorial._isSharedComp = false;
game.Tutorial.StorageView._fromPtr = game.Tutorial._fromPtr;
game.Tutorial.StorageView._toPtr = game.Tutorial._toPtr;
game.Tutorial.StorageView._tempHeapPtr = game.Tutorial._tempHeapPtr;
game.Tutorial.StorageView._size = game.Tutorial._size;
game.Tutorial.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Tutorial.StorageView.prototype, {
  Index: {
    get: function() { return HEAP16[(this._ptr+0)>>1]; },
    set: function(v) { HEAP16[(this._ptr+0)>>1] = v; },
  },
  Tries: {
    get: function() { return HEAP16[(this._ptr+2)>>1]; },
    set: function(v) { HEAP16[(this._ptr+2)>>1] = v; },
  },
  ChildEntities: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+4, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+4, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
});
game.Tutorial._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 4);
};
game.Tutorial._copyFn = function copy(src, dst) {
  for(var i = 0; i < 2; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 2; ++i) HEAPU8[dst+2+i] = HEAPU8[src+2+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 4, src + 4, 8);
};
Object.defineProperties(game.Tutorial, { cid: { configurable: true, get: function() { delete game.Tutorial.cid; var offsetsPtr = ut.tempHeapPtrI32([-5]); var offsetsCount = 1; return game.Tutorial.cid = Module._ut_component_register_cid(/*game.Tutorial*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Tutorial"*/, ut.DestructorFn._cb.token_for(game.Tutorial._dtorFn), ut.CopyFn._cb.token_for(game.Tutorial._copyFn)); } } });
Object.defineProperties(game.Tutorial.StorageView, { cid: { configurable: true, get: function() { return game.Tutorial.cid; } } });
game.Tutorial.Index = { $ofs:0, $t:"int16_t", $c:game.Tutorial };
game.Tutorial.Tries = { $ofs:2, $t:"int16_t", $c:game.Tutorial };
game.Tutorial.ChildEntities = { $ofs:4, $t:"ut.DynamicArray`1", $c:game.Tutorial };
game.TutorialHelper = function(arg0) {
  this._PlayTutorial = (arg0 ? true : false);
};
game.TutorialHelper.prototype = Object.create(null);
game.TutorialHelper.prototype.constructor = game.TutorialHelper;
Object.defineProperties(game.TutorialHelper.prototype, {
  PlayTutorial: {
    get: function() { return this._PlayTutorial; },
    set: function(v) { this._PlayTutorial = (v ? true : false); },
  },
});
game.TutorialHelper._size = 1;
game.TutorialHelper._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TutorialHelper.prototype);
  v._PlayTutorial = (HEAP8[ptr+0]?true:false);
  return v;
};
game.TutorialHelper._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.PlayTutorial)?1:0;
};
game.TutorialHelper._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.PlayTutorial)?1:0;
};
game.TutorialHelper._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.TutorialHelper._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TutorialHelper.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TutorialHelper.StorageView.prototype = Object.create(null);
game.TutorialHelper.StorageView.prototype.constructor = game.TutorialHelper.StorageView;
game.TutorialHelper._view = game.TutorialHelper.StorageView;
game.TutorialHelper.StorageView._isSharedComp = game.TutorialHelper._isSharedComp = false;
game.TutorialHelper.StorageView._fromPtr = game.TutorialHelper._fromPtr;
game.TutorialHelper.StorageView._toPtr = game.TutorialHelper._toPtr;
game.TutorialHelper.StorageView._tempHeapPtr = game.TutorialHelper._tempHeapPtr;
game.TutorialHelper.StorageView._size = game.TutorialHelper._size;
game.TutorialHelper.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.TutorialHelper.StorageView.prototype, {
  PlayTutorial: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
});
game.TutorialHelper._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.TutorialHelper is a POD type, so a JavaScript side copy constructor game.TutorialHelper._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.TutorialHelper, { cid: { configurable: true, get: function() { delete game.TutorialHelper.cid; var offsetsPtr = 0, offsetsCount = 0; return game.TutorialHelper.cid = Module._ut_component_register_cid(/*game.TutorialHelper*/ 1, 1, 0, offsetsPtr, offsetsCount, 0/*"game::TutorialHelper"*/, 0, 0); } } });
Object.defineProperties(game.TutorialHelper.StorageView, { cid: { configurable: true, get: function() { return game.TutorialHelper.cid; } } });
game.TutorialHelper.PlayTutorial = { $ofs:0, $t:"bool", $c:game.TutorialHelper };
game.Wall = function() {
};
game.Wall.prototype = Object.create(null);
game.Wall.prototype.constructor = game.Wall;
Object.defineProperties(game.Wall.prototype, {
});
game.Wall._size = 1;
game.Wall._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Wall.prototype);
  return v;
};
game.Wall._toPtr = function(ptr, v) {
};
game.Wall._toTempHeapPtr = function(ptr, v) {
};
game.Wall._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Wall._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Wall.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Wall.StorageView.prototype = Object.create(null);
game.Wall.StorageView.prototype.constructor = game.Wall.StorageView;
game.Wall._view = game.Wall.StorageView;
game.Wall.StorageView._isSharedComp = game.Wall._isSharedComp = false;
game.Wall.StorageView._fromPtr = game.Wall._fromPtr;
game.Wall.StorageView._toPtr = game.Wall._toPtr;
game.Wall.StorageView._tempHeapPtr = game.Wall._tempHeapPtr;
game.Wall.StorageView._size = game.Wall._size;
game.Wall.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Wall.StorageView.prototype, {
});
game.Wall._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Wall is a POD type, so a JavaScript side copy constructor game.Wall._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Wall, { cid: { configurable: true, get: function() { delete game.Wall.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Wall.cid = Module._ut_component_register_cid(/*game.Wall*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Wall"*/, 0, 0); } } });
Object.defineProperties(game.Wall.StorageView, { cid: { configurable: true, get: function() { return game.Wall.cid; } } });
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Default*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Default"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.TransparentFX*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::TransparentFX"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.IgnoreRaycast*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::IgnoreRaycast"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Water*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Water"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.UI*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::UI"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.PostProcessing = function() {
};
ut.Core2D.layers.PostProcessing.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.prototype.constructor = ut.Core2D.layers.PostProcessing;
Object.defineProperties(ut.Core2D.layers.PostProcessing.prototype, {
});
ut.Core2D.layers.PostProcessing._size = 1;
ut.Core2D.layers.PostProcessing._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.PostProcessing.prototype);
  return v;
};
ut.Core2D.layers.PostProcessing._toPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.PostProcessing._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.PostProcessing.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.PostProcessing.StorageView.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.StorageView.prototype.constructor = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing._view = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing.StorageView._isSharedComp = ut.Core2D.layers.PostProcessing._isSharedComp = false;
ut.Core2D.layers.PostProcessing.StorageView._fromPtr = ut.Core2D.layers.PostProcessing._fromPtr;
ut.Core2D.layers.PostProcessing.StorageView._toPtr = ut.Core2D.layers.PostProcessing._toPtr;
ut.Core2D.layers.PostProcessing.StorageView._tempHeapPtr = ut.Core2D.layers.PostProcessing._tempHeapPtr;
ut.Core2D.layers.PostProcessing.StorageView._size = ut.Core2D.layers.PostProcessing._size;
ut.Core2D.layers.PostProcessing.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView.prototype, {
});
ut.Core2D.layers.PostProcessing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.PostProcessing is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.PostProcessing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.PostProcessing, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.PostProcessing.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.PostProcessing.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.PostProcessing*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::PostProcessing"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.PostProcessing.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAnimationClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAnimationClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAudioClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAudioClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSprite*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSprite"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSpriteAtlas*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSpriteAtlas"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTexture2D*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTexture2D"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTileBase*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTileBase"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTMP_FontAsset*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTMP_FontAsset"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.CameraCullingMask*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::CameraCullingMask"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.EntityLayer*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::EntityLayer"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.CollisionAudioSystemJS = ut.System.define({
  name: "game.CollisionAudioSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.DirectionalPowerSystemJS = ut.System.define({
  name: "game.DirectionalPowerSystemJS"
});
game.ObstacleSpawnSystemJS = ut.System.define({
  name: "game.ObstacleSpawnSystemJS"
});
game.TimeLethalitySystemJS = ut.System.define({
  name: "game.TimeLethalitySystemJS"
});
game.DirectionInputSystemJS = ut.System.define({
  name: "game.DirectionInputSystemJS"
});
game.BallSystemJS = ut.System.define({
  name: "game.BallSystemJS"
});
game.BorderSystemJS = ut.System.define({
  name: "game.BorderSystemJS"
});
game.CoinSpawnSystemJS = ut.System.define({
  name: "game.CoinSpawnSystemJS"
});
game.GameSystemJS = ut.System.define({
  name: "game.GameSystemJS"
});
game.HoleSystemJS = ut.System.define({
  name: "game.HoleSystemJS"
});
game.JsonObstacleSpawnerJS = ut.System.define({
  name: "game.JsonObstacleSpawnerJS"
});
game.LethalObstaclesSystemJS = ut.System.define({
  name: "game.LethalObstaclesSystemJS"
});
game.NextLevelSystemJS = ut.System.define({
  name: "game.NextLevelSystemJS"
 ,updatesAfter: ["game.CoinSpawnSystemJS"]
});
game.SpeedLethalitySystemJS = ut.System.define({
  name: "game.SpeedLethalitySystemJS"
});
game.TutorialSystemJS = ut.System.define({
  name: "game.TutorialSystemJS"
 ,updatesBefore: ["game.GameSystemJS"]
});
game.GameOverScreenSystemJS = ut.System.define({
  name: "game.GameOverScreenSystemJS"
});
game.LineRenderingSystemJS = ut.System.define({
  name: "game.LineRenderingSystemJS"
});
game.ShotsUISystemJS = ut.System.define({
  name: "game.ShotsUISystemJS"
});



