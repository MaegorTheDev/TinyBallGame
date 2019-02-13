declare namespace game {
enum GameState {
  Waiting = 0,
  Playing = 1,
  Aiming = 2,
  Tutorial = 3,
  GameStart = 4,
  GameEnd = 5,
}
}
declare namespace game {
enum InputType {
  Direction = 0,
  Power = 1,
}
}
declare namespace game {
enum ObstacleSpawnerMode {
  Random = 0,
  Json = 1,
}
}
declare namespace entities.game.Coin {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Hole {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Obstacle {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.ShotPeg {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.BallGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Bootstraper {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.GameOver {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.GameplayEntityGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.GameStart {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.TutorialEntityGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class ArrowTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ArrowTag): ArrowTag;
  static _toPtr(p: number, v: ArrowTag): void;
  static _tempHeapPtr(v: ArrowTag): number;
  static _dtorFn(v: ArrowTag): void;
}

}
declare namespace game {

class Ball extends ut.Component {
  constructor(MaxPower?: number, Power?: number, Shoot?: boolean, MoveDirection?: Vector2, DeltaDirection?: number);
  MaxPower: number;
  Power: number;
  Shoot: boolean;
  MoveDirection: Vector2;
  DeltaDirection: number;
  static readonly MaxPower: ComponentFieldDesc;
  static readonly Power: ComponentFieldDesc;
  static readonly Shoot: ComponentFieldDesc;
  static readonly MoveDirection: Vector2ComponentFieldDesc;
  static readonly DeltaDirection: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Ball): Ball;
  static _toPtr(p: number, v: Ball): void;
  static _tempHeapPtr(v: Ball): number;
  static _dtorFn(v: Ball): void;
}

}
declare namespace game {

class Borders extends ut.Component {
  constructor(Height?: number, Width?: number, WorldHeight?: number, WorldWidth?: number);
  Height: number;
  Width: number;
  WorldHeight: number;
  WorldWidth: number;
  static readonly Height: ComponentFieldDesc;
  static readonly Width: ComponentFieldDesc;
  static readonly WorldHeight: ComponentFieldDesc;
  static readonly WorldWidth: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Borders): Borders;
  static _toPtr(p: number, v: Borders): void;
  static _tempHeapPtr(v: Borders): number;
  static _dtorFn(v: Borders): void;
}

}
declare namespace game {

class Coin extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Coin): Coin;
  static _toPtr(p: number, v: Coin): void;
  static _tempHeapPtr(v: Coin): number;
  static _dtorFn(v: Coin): void;
}

}
declare namespace game {

class HitAudio extends ut.Component {
  constructor(HitAudioClips?: Entity[]);
  HitAudioClips: Entity[];
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: HitAudio): HitAudio;
  static _toPtr(p: number, v: HitAudio): void;
  static _tempHeapPtr(v: HitAudio): number;
  static _dtorFn(v: HitAudio): void;
}

}
declare namespace game {

class HitSound extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: HitSound): HitSound;
  static _toPtr(p: number, v: HitSound): void;
  static _tempHeapPtr(v: HitSound): number;
  static _dtorFn(v: HitSound): void;
}

}
declare namespace game {

class Hole extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Hole): Hole;
  static _toPtr(p: number, v: Hole): void;
  static _tempHeapPtr(v: Hole): number;
  static _dtorFn(v: Hole): void;
}

}
declare namespace game {

class InputHelper extends ut.Component {
  constructor(InputType?: InputType, FirstTouchData?: Vector2, IsClickDown?: boolean);
  InputType: InputType;
  FirstTouchData: Vector2;
  IsClickDown: boolean;
  
  static readonly FirstTouchData: Vector2ComponentFieldDesc;
  static readonly IsClickDown: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: InputHelper): InputHelper;
  static _toPtr(p: number, v: InputHelper): void;
  static _tempHeapPtr(v: InputHelper): number;
  static _dtorFn(v: InputHelper): void;
}

}
declare namespace game {

class Lethal extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Lethal): Lethal;
  static _toPtr(p: number, v: Lethal): void;
  static _tempHeapPtr(v: Lethal): number;
  static _dtorFn(v: Lethal): void;
}

}
declare namespace game {

class NoShotsSprite extends ut.Component {
  constructor(DefaultSprite?: Entity, NoShots?: Entity);
  DefaultSprite: Entity;
  NoShots: Entity;
  static readonly DefaultSprite: EntityComponentFieldDesc;
  static readonly NoShots: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: NoShotsSprite): NoShotsSprite;
  static _toPtr(p: number, v: NoShotsSprite): void;
  static _tempHeapPtr(v: NoShotsSprite): number;
  static _dtorFn(v: NoShotsSprite): void;
}

}
declare namespace game {

class Object extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Object): Object;
  static _toPtr(p: number, v: Object): void;
  static _tempHeapPtr(v: Object): number;
  static _dtorFn(v: Object): void;
}

}
declare namespace game {

class Obstacle extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Obstacle): Obstacle;
  static _toPtr(p: number, v: Obstacle): void;
  static _tempHeapPtr(v: Obstacle): number;
  static _dtorFn(v: Obstacle): void;
}

}
declare namespace game {

class ObstacleSpawnerHelper extends ut.Component {
  constructor(AreaPercentage?: number, XScaleValues?: Vector2, YScaleValues?: Vector2, BorderOffset?: number, SpawnMode?: ObstacleSpawnerMode);
  AreaPercentage: number;
  XScaleValues: Vector2;
  YScaleValues: Vector2;
  BorderOffset: number;
  SpawnMode: ObstacleSpawnerMode;
  static readonly AreaPercentage: ComponentFieldDesc;
  static readonly XScaleValues: Vector2ComponentFieldDesc;
  static readonly YScaleValues: Vector2ComponentFieldDesc;
  static readonly BorderOffset: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ObstacleSpawnerHelper): ObstacleSpawnerHelper;
  static _toPtr(p: number, v: ObstacleSpawnerHelper): void;
  static _tempHeapPtr(v: ObstacleSpawnerHelper): number;
  static _dtorFn(v: ObstacleSpawnerHelper): void;
}

}
declare namespace game {

class ShotPeg extends ut.Component {
  constructor(InitialSprite?: Entity, CurrentSprite?: Entity, UsedSprite?: Entity);
  InitialSprite: Entity;
  CurrentSprite: Entity;
  UsedSprite: Entity;
  static readonly InitialSprite: EntityComponentFieldDesc;
  static readonly CurrentSprite: EntityComponentFieldDesc;
  static readonly UsedSprite: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ShotPeg): ShotPeg;
  static _toPtr(p: number, v: ShotPeg): void;
  static _tempHeapPtr(v: ShotPeg): number;
  static _dtorFn(v: ShotPeg): void;
}

}
declare namespace game {

class Tutorial extends ut.Component {
  constructor(Index?: number, Tries?: number, ChildEntities?: Entity[]);
  Index: number;
  Tries: number;
  ChildEntities: Entity[];
  
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Tutorial): Tutorial;
  static _toPtr(p: number, v: Tutorial): void;
  static _tempHeapPtr(v: Tutorial): number;
  static _dtorFn(v: Tutorial): void;
}

}
declare namespace game {

class TutorialHelper extends ut.Component {
  constructor(PlayTutorial?: boolean);
  PlayTutorial: boolean;
  static readonly PlayTutorial: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TutorialHelper): TutorialHelper;
  static _toPtr(p: number, v: TutorialHelper): void;
  static _tempHeapPtr(v: TutorialHelper): number;
  static _dtorFn(v: TutorialHelper): void;
}

}
declare namespace game {

class Wall extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Wall): Wall;
  static _toPtr(p: number, v: Wall): void;
  static _tempHeapPtr(v: Wall): number;
  static _dtorFn(v: Wall): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class PostProcessing extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PostProcessing): PostProcessing;
  static _toPtr(p: number, v: PostProcessing): void;
  static _tempHeapPtr(v: PostProcessing): number;
  static _dtorFn(v: PostProcessing): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {
var CollisionAudioSystemJS: ut.SystemJS;
}
declare namespace game {
var DirectionalPowerSystemJS: ut.SystemJS;
}
declare namespace game {
var ObstacleSpawnSystemJS: ut.SystemJS;
}
declare namespace game {
var TimeLethalitySystemJS: ut.SystemJS;
}
declare namespace game {
var DirectionInputSystemJS: ut.SystemJS;
}
declare namespace game {
var BallSystemJS: ut.SystemJS;
}
declare namespace game {
var BorderSystemJS: ut.SystemJS;
}
declare namespace game {
var CoinSpawnSystemJS: ut.SystemJS;
}
declare namespace game {
var GameSystemJS: ut.SystemJS;
}
declare namespace game {
var HoleSystemJS: ut.SystemJS;
}
declare namespace game {
var JsonObstacleSpawnerJS: ut.SystemJS;
}
declare namespace game {
var LethalObstaclesSystemJS: ut.SystemJS;
}
declare namespace game {
var NextLevelSystemJS: ut.SystemJS;
}
declare namespace game {
var SpeedLethalitySystemJS: ut.SystemJS;
}
declare namespace game {
var TutorialSystemJS: ut.SystemJS;
}
declare namespace game {
var GameOverScreenSystemJS: ut.SystemJS;
}
declare namespace game {
var LineRenderingSystemJS: ut.SystemJS;
}
declare namespace game {
var ShotsUISystemJS: ut.SystemJS;
}


declare namespace Module {

}

