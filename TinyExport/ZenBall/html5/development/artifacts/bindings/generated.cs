using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using UTiny.HTML;
using UTiny.Rendering;
using UTiny.Physics2D;
using UTiny.Text;
using UTiny.UILayout;
using ut.EditorExtensions;
using ut;
using UTiny.HitBox2D;
using UTiny.Audio;
using UTiny.Animation;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Coin
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Hole
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Obstacle
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ShotPeg
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace BallGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Bootstraper
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOver
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameplayEntityGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameStart
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TutorialEntityGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct ArrowTag : IComponentData
    {
    }
    public struct Ball : IComponentData
    {
        public float MaxPower;
        public float Power;
        public bool Shoot;
        public Vector2 MoveDirection;
        public int DeltaDirection;
    }
    public struct Borders : IComponentData
    {
        public float Height;
        public float Width;
        public float WorldHeight;
        public float WorldWidth;
    }
    public struct Coin : IComponentData
    {
    }
    public struct HitAudio : IComponentData
    {
        public DynamicArray<Entity> HitAudioClips;
    }
    public struct HitSound : IComponentData
    {
    }
    public struct Hole : IComponentData
    {
    }
    public struct InputHelper : IComponentData
    {
        public game.InputType InputType;
        public Vector2 FirstTouchData;
        public bool IsClickDown;
    }
    public struct Lethal : IComponentData
    {
    }
    public struct NoShotsSprite : IComponentData
    {
        public Entity DefaultSprite;
        public Entity NoShots;
    }
    public struct Object : IComponentData
    {
    }
    public struct Obstacle : IComponentData
    {
    }
    public struct ObstacleSpawnerHelper : IComponentData
    {
        public float AreaPercentage;
        public Vector2 XScaleValues;
        public Vector2 YScaleValues;
        public float BorderOffset;
        public game.ObstacleSpawnerMode SpawnMode;
    }
    public struct ShotPeg : IComponentData
    {
        public Entity InitialSprite;
        public Entity CurrentSprite;
        public Entity UsedSprite;
    }
    public struct Tutorial : IComponentData
    {
        public short Index;
        public short Tries;
        public DynamicArray<Entity> ChildEntities;
    }
    public struct TutorialHelper : IComponentData
    {
        public bool PlayTutorial;
    }
    public struct Wall : IComponentData
    {
    }
    public enum GameState
    {
        Waiting = 0
        , Playing = 1
        , Aiming = 2
        , Tutorial = 3
        , GameStart = 4
        , GameEnd = 5
    }
    public enum InputType
    {
        Direction = 0
        , Power = 1
    }
    public enum ObstacleSpawnerMode
    {
        Random = 0
        , Json = 1
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Physics2D
{
}

namespace ut.Core2D
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UILayout
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut
{
}

namespace ut.HitBox2D
{
}

namespace ut.Audio
{
}

namespace ut.Animation
{
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class CollisionAudioSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DirectionalPowerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ObstacleSpawnSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class TimeLethalitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DirectionInputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class BallSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class BorderSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CoinSpawnSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class GameSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class HoleSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class JsonObstacleSpawnerJS : IComponentSystem
    {
    }
}
namespace game
{
    public class LethalObstaclesSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.CoinSpawnSystemJS))]
    public class NextLevelSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpeedLethalitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.GameSystemJS))]
    public class TutorialSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class GameOverScreenSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class LineRenderingSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ShotsUISystemJS : IComponentSystem
    {
    }
}
