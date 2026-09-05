const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const restartButton = document.getElementById("restartButton");
const quickRestartButton = document.getElementById("quickRestartButton");
const runnerCanvas = document.getElementById("runnerCanvas");
const runnerCtx = runnerCanvas.getContext("2d");
const runnerScoreEl = document.getElementById("runnerScore");
const runnerOverlay = document.getElementById("runnerOverlay");
const runnerOverlayTitle = document.getElementById("runnerOverlayTitle");
const runnerOverlayText = document.getElementById("runnerOverlayText");
const runnerRestartButton = document.getElementById("runnerRestartButton");
const runnerQuickRestartButton = document.getElementById("runnerQuickRestartButton");
const mazePanel = document.getElementById("mazePanel");
const mazeCanvas = document.getElementById("mazeCanvas");
const mazeCtx = mazeCanvas.getContext("2d");
const mazeStatsEl = document.getElementById("mazeStats");
const mazeOverlay = document.getElementById("mazeOverlay");
const mazeOverlayTitle = document.getElementById("mazeOverlayTitle");
const mazeOverlayText = document.getElementById("mazeOverlayText");
const mazeRestartButton = document.getElementById("mazeRestartButton");
const mazeQuickRestartButton = document.getElementById("mazeQuickRestartButton");
const mazeUpButton = document.getElementById("mazeUpButton");
const mazeLeftButton = document.getElementById("mazeLeftButton");
const mazeDownButton = document.getElementById("mazeDownButton");
const mazeRightButton = document.getElementById("mazeRightButton");
const mazeGiveUpButton = document.getElementById("mazeGiveUpButton");
const wordPanel = document.getElementById("wordPanel");
const wordBoard = document.getElementById("wordBoard");
const wordStatus = document.getElementById("wordStatus");
const wordForm = document.getElementById("wordForm");
const wordInput = document.getElementById("wordInput");
const wordMessage = document.getElementById("wordMessage");
const wordRestartButton = document.getElementById("wordRestartButton");
const tankPanel = document.getElementById("tankPanel");
const tankCanvas = document.getElementById("tankCanvas");
const tankCtx = tankCanvas.getContext("2d");
const tankStatsEl = document.getElementById("tankStats");
const tankOverlay = document.getElementById("tankOverlay");
const tankOverlayTitle = document.getElementById("tankOverlayTitle");
const tankOverlayText = document.getElementById("tankOverlayText");
const tankStartButton = document.getElementById("tankStartButton");
const tankRestartButton = document.getElementById("tankRestartButton");
const tankShop = document.getElementById("tankShop");
const tankRepairButton = document.getElementById("tankRepairButton");
const tankArmorButton = document.getElementById("tankArmorButton");
const tankDamageButton = document.getElementById("tankDamageButton");
const tankSpeedButton = document.getElementById("tankSpeedButton");
const tankNextStageButton = document.getElementById("tankNextStageButton");
const defensePanel = document.getElementById("defensePanel");
const defenseCanvas = document.getElementById("defenseCanvas");
const defenseCtx = defenseCanvas.getContext("2d");
const defenseStatsEl = document.getElementById("defenseStats");
const defenseOverlay = document.getElementById("defenseOverlay");
const defenseOverlayTitle = document.getElementById("defenseOverlayTitle");
const defenseOverlayText = document.getElementById("defenseOverlayText");
const defenseStartButton = document.getElementById("defenseStartButton");
const defenseRestartButton = document.getElementById("defenseRestartButton");
const defenseGiveUpButton = document.getElementById("defenseGiveUpButton");
const defensePlayerTabButton = document.getElementById("defensePlayerTabButton");
const defenseBuildTabButton = document.getElementById("defenseBuildTabButton");
const defenseUpgradeTabButton = document.getElementById("defenseUpgradeTabButton");
const defenseAbilityTabButton = document.getElementById("defenseAbilityTabButton");
const defenseMergeTabButton = document.getElementById("defenseMergeTabButton");
const defenseRepairTabButton = document.getElementById("defenseRepairTabButton");
const defenseStatsTabButton = document.getElementById("defenseStatsTabButton");
const defenseHandbookTabButton = document.getElementById("defenseHandbookTabButton");
const defenseDemoTabButton = document.getElementById("defenseDemoTabButton");
const defensePlayerPanel = document.getElementById("defensePlayerPanel");
const defenseBuildPanel = document.getElementById("defenseBuildPanel");
const defenseUpgradePanel = document.getElementById("defenseUpgradePanel");
const defenseAbilityPanel = document.getElementById("defenseAbilityPanel");
const defenseMergePanel = document.getElementById("defenseMergePanel");
const defenseRepairPanel = document.getElementById("defenseRepairPanel");
const defenseStatsPanel = document.getElementById("defenseStatsPanel");
const defenseHandbookPanel = document.getElementById("defenseHandbookPanel");
const defenseDemoPanel = document.getElementById("defenseDemoPanel");
const defenseRepairList = document.getElementById("defenseRepairList");
const defenseAbilityList = document.getElementById("defenseAbilityList");
const defenseMergeList = document.getElementById("defenseMergeList");
const defenseStatList = document.getElementById("defenseStatList");
const defenseHandbookList = document.getElementById("defenseHandbookList");
const defenseDemoToggleButton = document.getElementById("defenseDemoToggleButton");
const defenseDemoWaveInput = document.getElementById("defenseDemoWaveInput");
const defenseDemoWaveButton = document.getElementById("defenseDemoWaveButton");
const defenseDemoWaveStatus = document.getElementById("defenseDemoWaveStatus");
const defenseReturnHomeButton = document.getElementById("defenseReturnHomeButton");
const defenseEquipmentPanel = document.getElementById("defenseEquipmentPanel");
const defenseStoryButton = document.getElementById("defenseStoryButton");
const defenseStoryStatusEl = document.getElementById("defenseStoryStatus");
const defenseNextPreview = document.getElementById("defenseNextPreview");
const defenseWallButton = document.getElementById("defenseWallButton");
const defenseTurretButton = document.getElementById("defenseTurretButton");
const defenseCannonButton = document.getElementById("defenseCannonButton");
const defenseRicochetButton = document.getElementById("defenseRicochetButton");
const defenseAntiAirButton = document.getElementById("defenseAntiAirButton");
const defenseAirbombButton = document.getElementById("defenseAirbombButton");
const defenseAirburstButton = document.getElementById("defenseAirburstButton");
const defenseXbowButton = document.getElementById("defenseXbowButton");
const defenseGigaTeslaButton = document.getElementById("defenseGigaTeslaButton");
const defenseGiantBombButton = document.getElementById("defenseGiantBombButton");
const defensePushTrapButton = document.getElementById("defensePushTrapButton");
const defensePushTrapUpgradeButton = document.getElementById("defensePushTrapUpgradeButton");
const defenseScattershotButton = document.getElementById("defenseScattershotButton");
const defenseScattershotUpgradeButton = document.getElementById("defenseScattershotUpgradeButton");
const defenseMergedBuildSection = document.getElementById("defenseMergedBuildSection");
const defenseFreezeSpellBuildButton = document.getElementById("defenseFreezeSpellBuildButton");
const defenseLavaLauncherButton = document.getElementById("defenseLavaLauncherButton");
const defenseYpj20Button = document.getElementById("defenseYpj20Button");
const defensePresidentStatus = document.getElementById("defensePresidentStatus");
const defensePresidentHealthButton = document.getElementById("defensePresidentHealthButton");
const defenseHoneyLauncherButton = document.getElementById("defenseHoneyLauncherButton");
const defenseCampButton = document.getElementById("defenseCampButton");
const defenseTankCampButton = document.getElementById("defenseTankCampButton");
const defenseAirfieldButton = document.getElementById("defenseAirfieldButton");
const defenseTroopLauncherButton = document.getElementById("defenseTroopLauncherButton");
const defenseBuilderButton = document.getElementById("defenseBuilderButton");
const defenseInfernoSingleButton = document.getElementById("defenseInfernoSingleButton");
const defenseInfernoMultiButton = document.getElementById("defenseInfernoMultiButton");
const defenseSpellButton = document.getElementById("defenseSpellButton");
const defenseTrapButton = document.getElementById("defenseTrapButton");
const defenseGrenadeButton = document.getElementById("defenseGrenadeButton");
const defenseMinigunButton = document.getElementById("defenseMinigunButton");
const defenseMortarButton = document.getElementById("defenseMortarButton");
const defenseMultiMortarButton = document.getElementById("defenseMultiMortarButton");
const defenseMissileButton = document.getElementById("defenseMissileButton");
const defenseRapidMissileButton = document.getElementById("defenseRapidMissileButton");
const defenseEagleButton = document.getElementById("defenseEagleButton");
const defenseMonolithButton = document.getElementById("defenseMonolithButton");
const defenseInfernoArtilleryButton = document.getElementById("defenseInfernoArtilleryButton");
const defenseBattleModeButton = document.getElementById("defenseBattleModeButton");
const defenseWaveButton = document.getElementById("defenseWaveButton");
const defenseDamageUpgradeButton = document.getElementById("defenseDamageUpgradeButton");
const defenseBurstUpgradeButton = document.getElementById("defenseBurstUpgradeButton");
const defenseFireRateUpgradeButton = document.getElementById("defenseFireRateUpgradeButton");
const defenseHealthUpgradeButton = document.getElementById("defenseHealthUpgradeButton");
const defenseWallUpgradeButton = document.getElementById("defenseWallUpgradeButton");
const defenseTurretUpgradeButton = document.getElementById("defenseTurretUpgradeButton");
const defenseCannonUpgradeButton = document.getElementById("defenseCannonUpgradeButton");
const defenseRicochetUpgradeButton = document.getElementById("defenseRicochetUpgradeButton");
const defenseAntiAirUpgradeButton = document.getElementById("defenseAntiAirUpgradeButton");
const defenseAirbombUpgradeButton = document.getElementById("defenseAirbombUpgradeButton");
const defenseXbowUpgradeButton = document.getElementById("defenseXbowUpgradeButton");
const defenseGigaTeslaUpgradeButton = document.getElementById("defenseGigaTeslaUpgradeButton");
const defenseGigaInfernoUpgradeButton = document.getElementById("defenseGigaInfernoUpgradeButton");
const defenseGigaInfernoButton = document.getElementById("defenseGigaInfernoButton");
const defenseWizardButton = document.getElementById("defenseWizardButton");
const defenseWizardUpgradeButton = document.getElementById("defenseWizardUpgradeButton");
const defenseSuperWizardButton = document.getElementById("defenseSuperWizardButton");
const defenseGrenadeUpgradeButton = document.getElementById("defenseGrenadeUpgradeButton");
const defenseMinigunUpgradeButton = document.getElementById("defenseMinigunUpgradeButton");
const defenseMortarUpgradeButton = document.getElementById("defenseMortarUpgradeButton");
const defenseMultiMortarUpgradeButton = document.getElementById("defenseMultiMortarUpgradeButton");
const defenseFreezeSpellUpgradeButton = document.getElementById("defenseFreezeSpellUpgradeButton");
const defenseMissileUpgradeButton = document.getElementById("defenseMissileUpgradeButton");
const defenseRapidMissileUpgradeButton = document.getElementById("defenseRapidMissileUpgradeButton");
const defenseMonolithUpgradeButton = document.getElementById("defenseMonolithUpgradeButton");
const defenseInfernoArtilleryUpgradeButton = document.getElementById("defenseInfernoArtilleryUpgradeButton");
const defenseEagleUpgradeButton = document.getElementById("defenseEagleUpgradeButton");
const defenseTrapUpgradeButton = document.getElementById("defenseTrapUpgradeButton");
const defenseCampUpgradeButton = document.getElementById("defenseCampUpgradeButton");
const defenseTankCampUpgradeButton = document.getElementById("defenseTankCampUpgradeButton");
const defenseAirfieldUpgradeButton = document.getElementById("defenseAirfieldUpgradeButton");
const defenseTroopLauncherUpgradeButton = document.getElementById("defenseTroopLauncherUpgradeButton");
const defenseBuilderUpgradeButton = document.getElementById("defenseBuilderUpgradeButton");
const defenseInfernoUpgradeButton = document.getElementById("defenseInfernoUpgradeButton");
const defenseSpellUpgradeButton = document.getElementById("defenseSpellUpgradeButton");

const tileCount = 20;
const tileSize = canvas.width / tileCount;
const winningApples = 20;
const tickRate = 120;

let snake;
let apple;
let direction;
let nextDirection;
let applesEaten;
let gameTimer;
let gameState;

const runnerMaxLives = 3;
const runnerLanes = [190, 320, 450];
const runnerGroundY = 286;
const runnerPlayer = {
  lane: 1,
  y: runnerGroundY,
  width: 44,
  height: 58,
  velocityY: 0,
  jumping: false,
  slidingTimer: 0
};

let runnerItems;
let runnerCoins;
let runnerAnimationId;
let runnerLastTime;
let runnerSpawnTimer;
let runnerDistance;
let runnerSpeed;
let runnerState;
let runnerLives;
let runnerInvulnerableTimer;
let runnerShieldTimer;
let runnerMagnetTimer;
let activeGame = "snake";

const gamePanels = Array.from(document.querySelectorAll(".game-panel"));
const gameLinks = Array.from(document.querySelectorAll(".game-sidebar a"));
const gameHashToActive = {
  snakeGame: "snake",
  runnerGame: "runner",
  mazePanel: "maze",
  wordPanel: "word",
  tankPanel: "tank",
  defensePanel: "defense"
};

function selectVisibleGame(hash = window.location.hash) {
  const requestedId = (hash || "#snakeGame").replace("#", "");
  const panel = document.getElementById(gameHashToActive[requestedId] ? requestedId : "snakeGame");
  activeGame = gameHashToActive[panel.id] || "snake";
  gamePanels.forEach((item) => {
    item.classList.toggle("active-game", item === panel);
  });
  gameLinks.forEach((link) => {
    link.classList.toggle("active-game-link", link.getAttribute("href") === `#${panel.id}`);
  });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (activeGame === "defense") {
    drawDefenseGame();
  }
}

const mazeSize = 51;
const mazeCellSize = 30;
const mazeSightRadius = 5;
const mazeMaxSteps = 400;
const mazeMaxHealth = 100;
const mazeMonsterDamage = 20;
const mazeHealAmount = 20;
let mazeGrid;
let mazePlayer;
let mazeStart;
let mazeExit;
let mazeSteps;
let mazeHealth;
let mazeState;
let mazeGuidePath;
let mazeGuideActive;
let mazeMonster;
let mazeMonsterCharge;
let mazeHealItems;
let mazeBombItems;
let mazeBombs;
let mazeBombArmed;

const wordLists = {
  5: [
    "apple",
    "brave",
    "chair",
    "dream",
    "flame",
    "grape",
    "house",
    "lemon",
    "plant",
    "river",
    "smile",
    "stone",
    "train",
    "water",
    "world"
  ],
  6: [
    "bridge",
    "castle",
    "planet",
    "silver",
    "garden",
    "rocket",
    "window",
    "forest",
    "marble",
    "sunset",
    "tunnel",
    "puzzle",
    "bright",
    "orange",
    "button"
  ]
};
const wordMaxGuesses = 6;
let wordAnswer;
let wordLength;
let wordCurrentRow;
let wordGameState;

const tankKeys = new Set();
let tankPlayer;
let tankEnemies;
let tankBullets;
let tankParticles;
let tankStage;
let tankCoins;
let tankState;
let tankAnimationId;
let tankLastTime;
let tankShootCooldown;

const defenseKeys = new Set();
const defenseWorldWidth = 2300;
const defenseGroundY = 390;
const defenseBuildingHealthMultiplier = 1.4;
const defenseExtraHealthMultiplier = 1.4;
const defenseWallExtraHealthMultiplier = 2.5;
const defenseBuildingDamageMultiplier = 1.1;
const defenseMissileDamageMultiplier = 1.3;
const defenseFriendlyUnitMultiplier = 1.2;
const defenseMoneyEarnedMultiplier = 1.7;
const defenseEagleMaxSplashRadius = 220;
const defensePhoenixMaxLevel = 15;
const defenseFrostMaxLevel = 15;
const defenseBuildingElectroMaxLevel = 15;
const defenseRevengeMaxLevel = 10;
const defenseElectroMaxLevel = 15;
const defenseOverchargeMaxLevel = 20;
const defenseSurgeMaxLevel = 20;
const defenseStandardMaxHp = 1000;
const defenseLateMaxHp = 850;
const defenseBuildLimits = {
  missile: 2,
  rapidMissile: 2,
  builder: 5,
  infernoArtillery: 2,
  eagle: 1,
  trap: 10,
  airbomb: 10,
  airburst: 10,
  giantBomb: 10,
  pushTrap: 10
};
const defenseMergeCost = 1000;
const defenseLavaMergeCost = 7500;
const defenseYpjMergeCost = 35000;
const defenseGigaInfernoMergeCost = 15000;
let defenseMergeNotice = "";
const defenseCosts = {
  wall: 12,
  turret: 34,
  cannon: 52,
  ricochet: 175,
  antiAir: 46,
  airbomb: 76,
  camp: 44,
  tankCamp: 78,
  airfield: 90,
  troopLauncher: 130,
  builder: 110,
  infernoSingle: 420,
  infernoMulti: 420,
  spell: 260,
  trap: 24,
  giantBomb: 60,
  pushTrap: 38,
  scattershot: 400,
  airburst: 96,
  xbow: 350,
  gigaTesla: 480,
  grenade: 74,
  minigun: 64,
  mortar: 88,
  multiMortar: 124,
  freezeSpell: 1000,
  lavaLauncher: 7500,
  ypj20: 35000,
  gigaInferno: 15000,
  wizard: 45,
  superWizard: 2000,
  missile: 250,
  rapidMissile: 375,
  eagle: 1000,
  monolith: 500,
  infernoArtillery: 700
};
let defensePlayer;
let defensePresident;
let defenseCameraX;
let defenseMouse;
let defenseBuildings;
let defenseEnemies;
let defenseFriendlyUnits;
let defenseBullets;
let defenseFireZones;
let defenseAirBursts;
let defenseWave;
let defenseMoney;
let defenseState;
let defenseSelectedTool;
let defenseSelectedMenu;
let defenseSelectedAbilityBuilding;
let defenseHandbookSelectedType;
let defenseBattleMode;
let defenseUpgrades;
let defenseUpgradeLevels;
let defenseAnimationId;
let defenseLastTime;
let defenseSpawnQueue;
let defenseSpawnTimer;
let defenseWaveSoldiersDeployed;
let defenseWaveElapsed;
let defenseShootCooldown;
let defenseDemoMode = false;
let defenseAttackMode;
let defenseAttackStage;
let defenseAttackPlatforms;
let defenseAttackMouseDown;
let defenseAttackCharge;
let defenseStoryLevel;
let defenseStoryAttacksUsed;
let defenseStoryPaused;
let defenseStoryExitOpen;
let defenseStoryLocked;
let defenseEquipmentDetail = null;
let defenseMergedUnlocked;
let defensePresidentLevel;
let defensePresidentHealthLevel;
let defenseHoneyLevel;
let defenseHoneyCooldown;
let defenseMergePick = null;
let defenseHoneyNotified;
let defenseYpjLevel;
let defenseScreenShake;
let defenseBeams;
let defenseHealingNerf;
let defenseSkyDarken;

const defenseEquipmentDefinitions = {
  minigun: { name: "Minigun", rarity: "epic", maxLevel: 13, color: "#d56b32", icon: "MG" },
  bow: { name: "Bow", rarity: "rare", maxLevel: 8, color: "#4f8f4f", icon: "BW" },
  electroGun: { name: "Electro Gun", rarity: "legendary", maxLevel: 21, color: "#4f8fd8", icon: "EG" }
};
const defenseOreDropChances = [
  ["legendary", 0.05],
  ["epic", 0.2],
  ["rare", 0.75]
];

const defenseStoryScenes = [
  { key: "plains", name: "Plains", sky: "#a9c7e8", horizon: "#cfe0f2", ground: "#7d9c5a", groundDark: "#5d7f3f", platform: "#91633a", platformDark: "#6f4728", banner: "#3f6d33", roughness: 1, pitEvery: 8 },
  { key: "forest", name: "Forest", sky: "#5f8a63", horizon: "#86ab84", ground: "#476b3b", groundDark: "#33502c", platform: "#7a5636", platformDark: "#5c3f26", banner: "#2e5230", roughness: 1.4, pitEvery: 6 },
  { key: "cave", name: "Cave Entrance", sky: "#6b6472", horizon: "#867c8c", ground: "#5c564e", groundDark: "#413c36", platform: "#6b5a48", platformDark: "#4d4034", banner: "#4c4450", roughness: 1.8, pitEvery: 5 },
  { key: "cavern", name: "Crystal Cavern", sky: "#332f4d", horizon: "#4a4470", ground: "#3c3752", groundDark: "#2a2540", platform: "#565073", platformDark: "#3c3654", banner: "#4a3f78", roughness: 1.6, pitEvery: 4 },
  { key: "magma", name: "Magma Depths", sky: "#381f1c", horizon: "#5c2c21", ground: "#4a2620", groundDark: "#331713", platform: "#6e3a26", platformDark: "#4c2618", banner: "#6e2a1c", roughness: 2, pitEvery: 4 },
  { key: "jungle", name: "Jungle", sky: "#2e5d3a", horizon: "#4a7a4e", ground: "#2f5230", groundDark: "#1e3a22", platform: "#5d4a2e", platformDark: "#42321e", banner: "#1e4a2a", roughness: 1.8, pitEvery: 5 }
];

function getDefenseStoryScene() {
  return defenseStoryScenes[Math.min(defenseStoryLevel || 0, defenseStoryScenes.length - 1)];
}

const defenseStorySceneHints = {
  plains: "Open fields with light resistance. A good place to stock up on ores.",
  forest: "Dense tree cover. Spawners hide between the trunks.",
  cave: "The mouth of the mountain. Darker ground, tougher enemies.",
  cavern: "Glowing crystals light the path. Enemies hit harder here.",
  magma: "The burning depths. The hardest fight so far."
};

const defenseAttackEnemyCap = 14;
const defenseAttackEnemyNerf = 0.6;

function resetGame(showReady = true) {
  snake = [
    { x: 9, y: 10 },
    { x: 8, y: 10 },
    { x: 7, y: 10 }
  ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  applesEaten = 0;
  gameState = "ready";
  placeApple();
  updateScore();
  draw();

  if (showReady) {
    showOverlay("Ready?", "Press an arrow key or Start to begin.", "Start Game");
  }
}

function startGame() {
  if (gameState === "playing") {
    return;
  }

  hideOverlay();
  gameState = "playing";
  clearInterval(gameTimer);
  gameTimer = setInterval(updateGame, tickRate);
}

function updateGame() {
  direction = nextDirection;
  const head = snake[0];
  const nextHead = {
    x: head.x + direction.x,
    y: head.y + direction.y
  };
  const willEatApple = nextHead.x === apple.x && nextHead.y === apple.y;

  if (isWallCollision(nextHead) || isSelfCollision(nextHead, willEatApple)) {
    endGame("Game Over", "You bumped into something. Press Restart to try again.");
    return;
  }

  snake.unshift(nextHead);

  if (willEatApple) {
    applesEaten += 1;
    updateScore();

    if (applesEaten >= winningApples) {
      draw();
      endGame("You Win!", "Nice run. You ate 20 apples.", "Play Again");
      return;
    }

    placeApple();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawApple();
  drawSnake();
}

function drawGrid() {
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#edf3f0";
  ctx.lineWidth = 1;

  for (let i = 0; i <= tileCount; i += 1) {
    const position = i * tileSize;
    ctx.beginPath();
    ctx.moveTo(position, 0);
    ctx.lineTo(position, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, position);
    ctx.lineTo(canvas.width, position);
    ctx.stroke();
  }
}

function drawSnake() {
  snake.forEach((segment, index) => {
    const isHead = index === 0;
    const inset = isHead ? 2 : 3;
    const x = segment.x * tileSize + inset;
    const y = segment.y * tileSize + inset;
    const size = tileSize - inset * 2;

    ctx.shadowColor = "rgba(8, 63, 45, 0.18)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = isHead ? "#08744f" : "#19a974";
    roundRect(
      x,
      y,
      size,
      size,
      7
    );
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = isHead ? "#063f2d" : "#08744f";
    ctx.lineWidth = isHead ? 3 : 2;
    ctx.stroke();

    if (isHead) {
      drawSnakeEyes(segment);
    }
  });
}

function drawSnakeEyes(head) {
  const centerX = head.x * tileSize + tileSize / 2;
  const centerY = head.y * tileSize + tileSize / 2;
  const eyeOffset = 6;
  const forwardX = direction.x * 5;
  const forwardY = direction.y * 5;
  const sideX = direction.y * eyeOffset;
  const sideY = -direction.x * eyeOffset;

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(centerX + forwardX + sideX, centerY + forwardY + sideY, 3.2, 0, Math.PI * 2);
  ctx.arc(centerX + forwardX - sideX, centerY + forwardY - sideY, 3.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#17211c";
  ctx.beginPath();
  ctx.arc(centerX + forwardX + sideX, centerY + forwardY + sideY, 1.4, 0, Math.PI * 2);
  ctx.arc(centerX + forwardX - sideX, centerY + forwardY - sideY, 1.4, 0, Math.PI * 2);
  ctx.fill();
}

function drawApple() {
  const centerX = apple.x * tileSize + tileSize / 2;
  const centerY = apple.y * tileSize + tileSize / 2;

  ctx.fillStyle = "#d83b3b";
  ctx.beginPath();
  ctx.arc(centerX, centerY, tileSize * 0.34, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#2f7b4f";
  ctx.fillRect(centerX + 2, centerY - 12, 4, 8);
}

function placeApple() {
  do {
    apple = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  } while (snake.some((segment) => segment.x === apple.x && segment.y === apple.y));
}

function setDirection(newDirection) {
  const reversing =
    newDirection.x === -direction.x && newDirection.y === -direction.y;

  if (!reversing) {
    nextDirection = newDirection;
  }
}

function isWallCollision(position) {
  return (
    position.x < 0 ||
    position.x >= tileCount ||
    position.y < 0 ||
    position.y >= tileCount
  );
}

function isSelfCollision(position, keepsTail) {
  const body = keepsTail ? snake : snake.slice(0, -1);
  return body.some((segment) => segment.x === position.x && segment.y === position.y);
}

function endGame(title, text, buttonText = "Restart") {
  clearInterval(gameTimer);
  gameState = "ended";
  showOverlay(title, text, buttonText);
}

function updateScore() {
  scoreEl.textContent = `${applesEaten} / ${winningApples}`;
}

function showOverlay(title, text, buttonText) {
  overlayTitle.textContent = title;
  overlayText.textContent = text;
  restartButton.textContent = buttonText;
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  overlay.classList.add("hidden");
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

document.addEventListener("keydown", (event) => {
  if (handleDefenseKeyDown(event)) {
    return;
  }

  if (handleTankKeyDown(event)) {
    return;
  }

  if (handleMazeKey(event)) {
    return;
  }

  if (handleRunnerKey(event)) {
    return;
  }

  const keys = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };

  if (!keys[event.key]) {
    return;
  }

  if (activeGame !== "snake") {
    return;
  }

  event.preventDefault();
  setDirection(keys[event.key]);

  if (activeGame === "snake" && gameState === "ready") {
    startGame();
  }
});

document.addEventListener("keyup", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    tankKeys.delete(event.key);
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "a", "A", "d", "D", "w", "W", "s", "S", " "].includes(event.key)) {
    defenseKeys.delete(event.key);
  }
});

restartButton.addEventListener("click", () => {
  resetGame(false);
  startGame();
});

quickRestartButton.addEventListener("click", () => {
  clearInterval(gameTimer);
  resetGame();
});

resetGame();

canvas.closest(".game-panel").addEventListener("pointerdown", () => {
  activeGame = "snake";
});

runnerCanvas.closest(".game-panel").addEventListener("pointerdown", () => {
  activeGame = "runner";
});

mazePanel.addEventListener("pointerdown", () => {
  activeGame = "maze";
});

wordPanel.addEventListener("pointerdown", () => {
  activeGame = "word";
});

tankPanel.addEventListener("pointerdown", () => {
  activeGame = "tank";
});

defensePanel.addEventListener("pointerdown", () => {
  activeGame = "defense";
});

function resetMaze(showReady = true) {
  mazeGrid = generateMaze(mazeSize);
  mazeStart = getMazeStart();
  mazePlayer = { x: mazeStart.x, y: mazeStart.y };
  mazeExit = findMazeExitWithinLimit(mazeStart);
  mazeMonster = findMonsterSpawn(mazeStart);
  mazeMonsterCharge = 0;
  mazeHealItems = placeMazeHealItems(12);
  mazeBombItems = placeMazeBombItems(10);
  mazeBombs = 1;
  mazeBombArmed = false;
  mazeSteps = 0;
  mazeHealth = mazeMaxHealth;
  mazeState = "ready";
  mazeGuidePath = [];
  mazeGuideActive = false;
  updateMazeStats();
  drawMaze();

  if (showReady) {
    showMazeOverlay("Enter the Maze", "Use the arrow buttons below to move through the dark.", "Start Maze");
  }
}

function startMaze() {
  if (mazeState === "playing") {
    return;
  }

  activeGame = "maze";
  mazeState = "playing";
  hideMazeOverlay();
  drawMaze();
}

function generateMaze(size) {
  const grid = Array.from({ length: size }, () => Array(size).fill(1));
  const start = getMazeStart();
  const stack = [start];
  grid[start.y][start.x] = 0;

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const neighbors = getUnvisitedMazeNeighbors(current, grid);

    if (neighbors.length === 0) {
      stack.pop();
      continue;
    }

    const next = neighbors[Math.floor(Math.random() * neighbors.length)];
    grid[current.y + (next.y - current.y) / 2][current.x + (next.x - current.x) / 2] = 0;
    grid[next.y][next.x] = 0;
    stack.push(next);
  }

  addMazeLoops(grid, 75);
  return grid;
}

function getMazeStart() {
  let center = Math.floor(mazeSize / 2);
  if (center % 2 === 0) {
    center -= 1;
  }
  return { x: center, y: center };
}

function getUnvisitedMazeNeighbors(cell, grid) {
  const directions = [
    { x: 0, y: -2 },
    { x: 2, y: 0 },
    { x: 0, y: 2 },
    { x: -2, y: 0 }
  ];

  return directions
    .map((directionStep) => ({
      x: cell.x + directionStep.x,
      y: cell.y + directionStep.y
    }))
    .filter((next) => (
      next.x > 0 &&
      next.x < mazeSize - 1 &&
      next.y > 0 &&
      next.y < mazeSize - 1 &&
      grid[next.y][next.x] === 1
    ));
}

function addMazeLoops(grid, count) {
  for (let i = 0; i < count; i += 1) {
    const x = 2 + Math.floor(Math.random() * (mazeSize - 4));
    const y = 2 + Math.floor(Math.random() * (mazeSize - 4));

    if (grid[y][x] === 1 && countOpenMazeNeighbors(x, y, grid) >= 2) {
      grid[y][x] = 0;
    }
  }
}

function countOpenMazeNeighbors(x, y, grid) {
  return [
    grid[y - 1]?.[x],
    grid[y + 1]?.[x],
    grid[y]?.[x - 1],
    grid[y]?.[x + 1]
  ].filter((value) => value === 0).length;
}

function findFarthestMazeCell(start) {
  const queue = [{ ...start, distance: 0 }];
  const visited = new Set([`${start.x},${start.y}`]);
  let farthest = start;

  for (let i = 0; i < queue.length; i += 1) {
    const current = queue[i];

    if (current.distance > (farthest.distance || 0)) {
      farthest = current;
    }

    [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ].forEach((directionStep) => {
      const next = {
        x: current.x + directionStep.x,
        y: current.y + directionStep.y,
        distance: current.distance + 1
      };
      const key = `${next.x},${next.y}`;

      if (
        next.x > 0 &&
        next.x < mazeSize - 1 &&
        next.y > 0 &&
        next.y < mazeSize - 1 &&
        mazeGrid[next.y][next.x] === 0 &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push(next);
      }
    });
  }

  return { x: farthest.x, y: farthest.y };
}

function findMazeExitWithinLimit(start) {
  const cells = getMazeDistances(start)
    .filter((cell) => cell.distance <= mazeMaxSteps && cell.distance >= 240)
    .sort((a, b) => b.distance - a.distance);

  if (cells.length > 0) {
    return { x: cells[0].x, y: cells[0].y };
  }

  const fallback = getMazeDistances(start)
    .filter((cell) => cell.distance <= mazeMaxSteps)
    .sort((a, b) => b.distance - a.distance)[0];

  return { x: fallback.x, y: fallback.y };
}

function getMazeDistances(start) {
  const queue = [{ ...start, distance: 0 }];
  const visited = new Set([`${start.x},${start.y}`]);

  for (let i = 0; i < queue.length; i += 1) {
    const current = queue[i];

    [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ].forEach((directionStep) => {
      const next = {
        x: current.x + directionStep.x,
        y: current.y + directionStep.y,
        distance: current.distance + 1
      };
      const key = `${next.x},${next.y}`;

      if (
        next.x > 0 &&
        next.x < mazeSize - 1 &&
        next.y > 0 &&
        next.y < mazeSize - 1 &&
        mazeGrid[next.y][next.x] === 0 &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push(next);
      }
    });
  }

  return queue;
}

function findMonsterSpawn(start) {
  const candidates = getMazeDistances(start)
    .filter((cell) => cell.distance >= 55 && cell.distance <= 95)
    .sort((a, b) => b.distance - a.distance);
  const spawn = candidates[Math.floor(Math.random() * Math.max(1, Math.min(candidates.length, 12)))] || start;
  return { x: spawn.x, y: spawn.y };
}

function placeMazeHealItems(count) {
  const candidates = getMazeDistances(mazeStart)
    .filter((cell) => (
      cell.distance > 25 &&
      cell.distance < mazeMaxSteps - 20 &&
      !(cell.x === mazeExit.x && cell.y === mazeExit.y) &&
      !(cell.x === mazeMonster.x && cell.y === mazeMonster.y)
    ));
  const items = [];

  while (items.length < count && candidates.length > 0) {
    const index = Math.floor(Math.random() * candidates.length);
    const [cell] = candidates.splice(index, 1);

    if (!items.some((item) => item.x === cell.x && item.y === cell.y)) {
      items.push({ x: cell.x, y: cell.y, collected: false });
    }
  }

  return items;
}

function placeMazeBombItems(count) {
  const candidates = getMazeDistances(mazeStart)
    .filter((cell) => (
      cell.distance > 18 &&
      cell.distance < mazeMaxSteps - 10 &&
      !(cell.x === mazeExit.x && cell.y === mazeExit.y) &&
      !(cell.x === mazeMonster.x && cell.y === mazeMonster.y) &&
      !mazeHealItems.some((item) => item.x === cell.x && item.y === cell.y)
    ));
  const items = [];

  while (items.length < count && candidates.length > 0) {
    const index = Math.floor(Math.random() * candidates.length);
    const [cell] = candidates.splice(index, 1);

    if (!items.some((item) => item.x === cell.x && item.y === cell.y)) {
      items.push({ x: cell.x, y: cell.y, collected: false });
    }
  }

  return items;
}

function drawMaze() {
  mazeCtx.fillStyle = "#020406";
  mazeCtx.fillRect(0, 0, mazeCanvas.width, mazeCanvas.height);

  const viewOffsetX = mazeCanvas.width / 2 - mazePlayer.x * mazeCellSize - mazeCellSize / 2;
  const viewOffsetY = mazeCanvas.height / 2 - mazePlayer.y * mazeCellSize - mazeCellSize / 2;
  const minX = Math.max(0, Math.floor(-viewOffsetX / mazeCellSize) - 1);
  const maxX = Math.min(mazeSize - 1, Math.ceil((mazeCanvas.width - viewOffsetX) / mazeCellSize) + 1);
  const minY = Math.max(0, Math.floor(-viewOffsetY / mazeCellSize) - 1);
  const maxY = Math.min(mazeSize - 1, Math.ceil((mazeCanvas.height - viewOffsetY) / mazeCellSize) + 1);

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const distance = Math.hypot(x - mazePlayer.x, y - mazePlayer.y);

      if (distance > mazeSightRadius) {
        continue;
      }

      const brightness = Math.max(0.16, 1 - distance / mazeSightRadius);
      const screenX = Math.floor(viewOffsetX + x * mazeCellSize);
      const screenY = Math.floor(viewOffsetY + y * mazeCellSize);

      if (mazeGrid[y][x] === 1) {
        mazeCtx.fillStyle = `rgba(40, 55, 68, ${0.42 + brightness * 0.45})`;
      } else {
        mazeCtx.fillStyle = `rgba(186, 176, 135, ${0.18 + brightness * 0.6})`;
      }

      mazeCtx.fillRect(screenX, screenY, mazeCellSize + 1, mazeCellSize + 1);

      if (mazeHealItems.some((item) => !item.collected && item.x === x && item.y === y)) {
        drawMazeHealItem(screenX, screenY, brightness);
      }

      if (mazeBombItems.some((item) => !item.collected && item.x === x && item.y === y)) {
        drawMazeBombItem(screenX, screenY, brightness);
      }

      if (x === mazeMonster.x && y === mazeMonster.y) {
        drawMazeMonster(screenX, screenY, brightness);
      }

      if (x === mazeExit.x && y === mazeExit.y) {
        drawMazeExit(screenX, screenY, brightness);
      }
    }
  }

  drawMazePlayer();
  drawMazeGuide(viewOffsetX, viewOffsetY);
  drawMazeDarkness();
}

function drawMazeHealItem(screenX, screenY, brightness) {
  mazeCtx.fillStyle = `rgba(215, 70, 70, ${0.45 + brightness * 0.5})`;
  mazeCtx.beginPath();
  mazeCtx.arc(screenX + mazeCellSize / 2, screenY + mazeCellSize / 2, 8, 0, Math.PI * 2);
  mazeCtx.fill();
  mazeCtx.fillStyle = `rgba(255, 226, 196, ${0.45 + brightness * 0.5})`;
  mazeCtx.fillRect(screenX + 10, screenY + 12, 10, 6);
}

function drawMazeBombItem(screenX, screenY, brightness) {
  mazeCtx.fillStyle = `rgba(245, 188, 56, ${0.5 + brightness * 0.5})`;
  mazeCtx.beginPath();
  mazeCtx.arc(screenX + mazeCellSize / 2, screenY + mazeCellSize / 2 + 2, 9, 0, Math.PI * 2);
  mazeCtx.fill();
  mazeCtx.strokeStyle = `rgba(30, 24, 16, ${0.45 + brightness * 0.45})`;
  mazeCtx.lineWidth = 2;
  mazeCtx.stroke();
  mazeCtx.strokeStyle = `rgba(255, 238, 160, ${0.5 + brightness * 0.5})`;
  mazeCtx.beginPath();
  mazeCtx.moveTo(screenX + 17, screenY + 11);
  mazeCtx.lineTo(screenX + 21, screenY + 6);
  mazeCtx.stroke();
}

function drawMazeMonster(screenX, screenY, brightness) {
  mazeCtx.shadowColor = "#ff1f3d";
  mazeCtx.shadowBlur = 18;
  mazeCtx.fillStyle = `rgba(255, 31, 61, ${0.62 + brightness * 0.38})`;
  mazeCtx.beginPath();
  mazeCtx.arc(screenX + mazeCellSize / 2, screenY + mazeCellSize / 2, 11, 0, Math.PI * 2);
  mazeCtx.fill();
  mazeCtx.shadowColor = "transparent";
  mazeCtx.fillStyle = "#ffffff";
  mazeCtx.fillRect(screenX + 10, screenY + 11, 4, 4);
  mazeCtx.fillRect(screenX + 17, screenY + 11, 4, 4);
}

function drawMazeExit(screenX, screenY, brightness) {
  mazeCtx.shadowColor = "#3cff7a";
  mazeCtx.shadowBlur = 28;
  mazeCtx.fillStyle = `rgba(60, 255, 122, ${0.72 + brightness * 0.28})`;
  mazeCtx.beginPath();
  mazeCtx.arc(
    screenX + mazeCellSize / 2,
    screenY + mazeCellSize / 2,
    mazeCellSize * 0.32,
    0,
    Math.PI * 2
  );
  mazeCtx.fill();
  mazeCtx.strokeStyle = "#d7ffe2";
  mazeCtx.lineWidth = 3;
  mazeCtx.stroke();
  mazeCtx.shadowColor = "transparent";
}

function drawMazePlayer() {
  const x = mazeCanvas.width / 2;
  const y = mazeCanvas.height / 2;

  mazeCtx.fillStyle = "#58d68d";
  mazeCtx.beginPath();
  mazeCtx.arc(x, y, 10, 0, Math.PI * 2);
  mazeCtx.fill();

  mazeCtx.strokeStyle = "#eafff1";
  mazeCtx.lineWidth = 3;
  mazeCtx.stroke();
}

function drawMazeGuide(viewOffsetX, viewOffsetY) {
  if (!mazeGuideActive || mazeGuidePath.length === 0) {
    return;
  }

  mazeCtx.save();
  mazeCtx.strokeStyle = "rgba(247, 211, 107, 0.88)";
  mazeCtx.lineWidth = 5;
  mazeCtx.lineCap = "round";
  mazeCtx.lineJoin = "round";
  mazeCtx.shadowColor = "#f7d36b";
  mazeCtx.shadowBlur = 10;
  mazeCtx.beginPath();

  mazeGuidePath.forEach((cell, index) => {
    const x = viewOffsetX + cell.x * mazeCellSize + mazeCellSize / 2;
    const y = viewOffsetY + cell.y * mazeCellSize + mazeCellSize / 2;

    if (index === 0) {
      mazeCtx.moveTo(x, y);
    } else {
      mazeCtx.lineTo(x, y);
    }
  });

  mazeCtx.stroke();
  mazeCtx.restore();
}

function revealMazeGuide() {
  activeGame = "maze";

  if (mazeState === "ended") {
    return;
  }

  if (mazeState === "ready") {
    startMaze();
  }

  mazeGuidePath = findMazePath(mazePlayer, mazeExit);
  mazeGuideActive = true;
  drawMaze();
}

function findMazePath(start, exit) {
  const queue = [{ ...start }];
  const visited = new Set([`${start.x},${start.y}`]);
  const cameFrom = new Map();

  for (let i = 0; i < queue.length; i += 1) {
    const current = queue[i];

    if (current.x === exit.x && current.y === exit.y) {
      return buildMazePath(current, cameFrom);
    }

    [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ].forEach((directionStep) => {
      const next = {
        x: current.x + directionStep.x,
        y: current.y + directionStep.y
      };
      const key = `${next.x},${next.y}`;

      if (
        next.x > 0 &&
        next.x < mazeSize - 1 &&
        next.y > 0 &&
        next.y < mazeSize - 1 &&
        mazeGrid[next.y][next.x] === 0 &&
        !visited.has(key)
      ) {
        visited.add(key);
        cameFrom.set(key, `${current.x},${current.y}`);
        queue.push(next);
      }
    });
  }

  return [];
}

function buildMazePath(end, cameFrom) {
  const path = [end];
  let currentKey = `${end.x},${end.y}`;

  while (cameFrom.has(currentKey)) {
    const previousKey = cameFrom.get(currentKey);
    const [x, y] = previousKey.split(",").map(Number);
    path.push({ x, y });
    currentKey = previousKey;
  }

  return path.reverse();
}

function drawMazeDarkness() {
  const gradient = mazeCtx.createRadialGradient(
    mazeCanvas.width / 2,
    mazeCanvas.height / 2,
    mazeCellSize * 1.25,
    mazeCanvas.width / 2,
    mazeCanvas.height / 2,
    mazeCellSize * mazeSightRadius
  );
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.68, "rgba(0, 0, 0, 0.42)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.98)");
  mazeCtx.fillStyle = gradient;
  mazeCtx.fillRect(0, 0, mazeCanvas.width, mazeCanvas.height);
}

function moveMaze(dx, dy) {
  activeGame = "maze";

  if (mazeState === "ready") {
    startMaze();
  }

  if (mazeState !== "playing") {
    return;
  }

  const next = {
    x: mazePlayer.x + dx,
    y: mazePlayer.y + dy
  };

  if (
    next.x < 0 ||
    next.x >= mazeSize ||
    next.y < 0 ||
    next.y >= mazeSize ||
    mazeGrid[next.y][next.x] === 1
  ) {
    if (
      next.x > 0 &&
      next.x < mazeSize - 1 &&
      next.y > 0 &&
      next.y < mazeSize - 1 &&
      mazeGrid[next.y][next.x] === 1 &&
      mazeBombArmed
    ) {
      mazeGrid[next.y][next.x] = 0;
      mazeBombs -= 1;
      mazeBombArmed = false;
      mazePlayer = next;
      mazeSteps += 1;
      collectMazeItems();
      moveMazeMonster();
      checkMazeMonsterContact();
      if (mazeGuideActive) {
        mazeGuidePath = findMazePath(mazePlayer, mazeExit);
      }
      updateMazeStats();
      drawMaze();
      return;
    }
    drawMaze();
    return;
  }

  mazePlayer = next;
  mazeSteps += 1;
  collectMazeItems();
  moveMazeMonster();
  checkMazeMonsterContact();

  if (mazeGuideActive) {
    mazeGuidePath = findMazePath(mazePlayer, mazeExit);
  }
  updateMazeStats();
  drawMaze();

  if (mazeState !== "playing") {
    return;
  }

  if (mazePlayer.x === mazeExit.x && mazePlayer.y === mazeExit.y) {
    mazeState = "ended";
    showMazeOverlay("You Escaped!", `You found the exit in ${mazeSteps} steps.`, "New Maze");
  }
}

function collectMazeItems() {
  const heal = mazeHealItems.find((healItem) => (
    !healItem.collected &&
    healItem.x === mazePlayer.x &&
    healItem.y === mazePlayer.y
  ));

  if (heal) {
    heal.collected = true;
    mazeHealth = Math.min(mazeMaxHealth, mazeHealth + mazeHealAmount);
  }

  const bomb = mazeBombItems.find((bombItem) => (
    !bombItem.collected &&
    bombItem.x === mazePlayer.x &&
    bombItem.y === mazePlayer.y
  ));

  if (bomb) {
    bomb.collected = true;
    mazeBombs += 1;
  }
}

function moveMazeMonster() {
  mazeMonsterCharge += 0.72;

  if (mazeMonsterCharge < 1) {
    return;
  }

  mazeMonsterCharge -= 1;
  const path = findMazePath(mazeMonster, mazePlayer);

  if (path.length > 1) {
    mazeMonster = { x: path[1].x, y: path[1].y };
  }
}

function checkMazeMonsterContact() {
  if (mazeMonster.x !== mazePlayer.x || mazeMonster.y !== mazePlayer.y) {
    return;
  }

  mazeHealth = Math.max(0, mazeHealth - mazeMonsterDamage);
  mazeMonster = findMonsterSpawn(mazePlayer);

  if (mazeHealth <= 0) {
    mazeState = "ended";
    showMazeOverlay("Caught!", "The monster drained your health. Try again.", "New Maze");
  }
}

function handleMazeKey(event) {
  if (activeGame !== "maze") {
    return false;
  }

  if (event.key === "b" || event.key === "B") {
    event.preventDefault();
    armMazeBomb();
    return true;
  }

  const moves = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };

  if (!moves[event.key]) {
    return false;
  }

  event.preventDefault();
  moveMaze(moves[event.key].x, moves[event.key].y);
  return true;
}

function armMazeBomb() {
  if (mazeState === "ready") {
    startMaze();
  }

  if (mazeState !== "playing" || mazeBombs <= 0) {
    return;
  }

  mazeBombArmed = !mazeBombArmed;
  updateMazeStats();
  drawMaze();
}

function updateMazeStats() {
  mazeStatsEl.textContent = `${mazeHealth} HP | ${mazeSteps} steps | Bombs ${mazeBombs}${mazeBombArmed ? " armed" : ""}`;
}

function showMazeOverlay(title, text, buttonText) {
  mazeOverlayTitle.textContent = title;
  mazeOverlayText.textContent = text;
  mazeRestartButton.textContent = buttonText;
  mazeOverlay.classList.remove("hidden");
}

function hideMazeOverlay() {
  mazeOverlay.classList.add("hidden");
}

mazeRestartButton.addEventListener("click", () => {
  resetMaze(false);
  startMaze();
});

mazeQuickRestartButton.addEventListener("click", () => {
  resetMaze();
});

mazeUpButton.addEventListener("click", () => moveMaze(0, -1));
mazeLeftButton.addEventListener("click", () => moveMaze(-1, 0));
mazeDownButton.addEventListener("click", () => moveMaze(0, 1));
mazeRightButton.addEventListener("click", () => moveMaze(1, 0));
mazeGiveUpButton.addEventListener("click", revealMazeGuide);

resetMaze();

function resetRunner(showReady = true) {
  cancelAnimationFrame(runnerAnimationId);
  runnerPlayer.lane = 1;
  runnerPlayer.y = runnerGroundY;
  runnerPlayer.velocityY = 0;
  runnerPlayer.jumping = false;
  runnerPlayer.slidingTimer = 0;
  runnerItems = [];
  runnerCoins = 0;
  runnerLives = runnerMaxLives;
  runnerInvulnerableTimer = 0;
  runnerShieldTimer = 0;
  runnerMagnetTimer = 0;
  runnerSpawnTimer = 0;
  runnerDistance = 0;
  runnerSpeed = 250;
  runnerLastTime = 0;
  runnerState = "ready";
  updateRunnerScore();
  drawRunner();

  if (showReady) {
    showRunnerOverlay("Ready?", "Press Start to run. Use arrows to switch lanes, jump, and slide under signs.", "Start Run");
  }
}

function startRunner() {
  if (runnerState === "playing") {
    return;
  }

  hideRunnerOverlay();
  runnerState = "playing";
  runnerLastTime = performance.now();
  cancelAnimationFrame(runnerAnimationId);
  runnerAnimationId = requestAnimationFrame(updateRunner);
}

function updateRunner(timestamp) {
  const delta = Math.min((timestamp - runnerLastTime) / 1000, 0.04);
  runnerLastTime = timestamp;
  runnerDistance += runnerSpeed * delta;
  runnerSpeed = Math.min(620, runnerSpeed + runnerSpeed * 0.001 * delta);
  runnerInvulnerableTimer = Math.max(0, runnerInvulnerableTimer - delta);
  runnerShieldTimer = Math.max(0, runnerShieldTimer - delta);
  runnerMagnetTimer = Math.max(0, runnerMagnetTimer - delta);
  runnerSpawnTimer -= delta;

  if (runnerSpawnTimer <= 0) {
    spawnRunnerItem();
    runnerSpawnTimer = Math.max(0.38, 0.88 - runnerSpeed / 950) + Math.random() * 0.28;
  }

  updateRunnerPlayer(delta);
  updateRunnerItems(delta);
  drawRunner();

  if (runnerState === "playing") {
    runnerAnimationId = requestAnimationFrame(updateRunner);
  }
}

function updateRunnerPlayer(delta) {
  runnerPlayer.slidingTimer = Math.max(0, runnerPlayer.slidingTimer - delta);

  if (!runnerPlayer.jumping) {
    return;
  }

  runnerPlayer.velocityY += 1500 * delta;
  runnerPlayer.y += runnerPlayer.velocityY * delta;

  if (runnerPlayer.y >= runnerGroundY) {
    runnerPlayer.y = runnerGroundY;
    runnerPlayer.velocityY = 0;
    runnerPlayer.jumping = false;
  }
}

function updateRunnerItems(delta) {
  runnerItems.forEach((item) => {
    item.y += runnerSpeed * delta;
  });
  collectMagnetCoins();

  runnerItems = runnerItems.filter((item) => item.y < runnerCanvas.height + 80 && !item.collected);

  runnerItems.forEach((item) => {
    if (item.lane !== runnerPlayer.lane || item.collected) {
      return;
    }

    const playerBox = getRunnerPlayerBox();
    const itemBox = getRunnerItemBox(item);

    if (!boxesOverlap(playerBox, itemBox)) {
      return;
    }

    if (item.type === "coin") {
      item.collected = true;
      runnerCoins += 1;
      updateRunnerScore();
      return;
    }

    if (item.type === "shield") {
      item.collected = true;
      runnerShieldTimer = 7;
      updateRunnerScore();
      return;
    }

    if (item.type === "magnet") {
      item.collected = true;
      runnerMagnetTimer = 8;
      updateRunnerScore();
      return;
    }

    if (isRunnerObstacleHit(item)) {
      hitRunnerObstacle(item);
    }
  });
}

function collectMagnetCoins() {
  if (runnerMagnetTimer <= 0) {
    return;
  }

  runnerItems.forEach((item) => {
    const nearPlayer = item.y > runnerPlayer.y - 150 && item.y < runnerPlayer.y + 40;

    if (item.type === "coin" && !item.collected && nearPlayer) {
      item.collected = true;
      runnerCoins += 1;
    }
  });

  updateRunnerScore();
}

function isRunnerObstacleHit(item) {
  if (item.type === "barrier" && runnerPlayer.jumping) {
    return false;
  }

  if (item.type === "overhead") {
    return runnerPlayer.slidingTimer <= 0;
  }

  return item.type === "box" || item.type === "barrier" || item.type === "cone";
}

function hitRunnerObstacle(item) {
  if (runnerInvulnerableTimer > 0) {
    return;
  }

  item.collected = true;

  if (runnerShieldTimer > 0) {
    runnerShieldTimer = 0;
    runnerInvulnerableTimer = 0.8;
    updateRunnerScore();
    return;
  }

  runnerLives -= 1;
  runnerInvulnerableTimer = 1.25;
  updateRunnerScore();

  if (runnerLives <= 0) {
    endRunner("Game Over", `You grabbed ${runnerCoins} coins before losing all 3 lives.`, "Run Again");
  }
}

function spawnRunnerItem() {
  const lane = Math.floor(Math.random() * runnerLanes.length);
  const typeRoll = Math.random();
  let type = "barrier";

  if (typeRoll < 0.45) {
    type = "coin";
  } else if (typeRoll < 0.67) {
    type = "box";
  } else if (typeRoll < 0.8) {
    type = "barrier";
  } else if (typeRoll < 0.9) {
    type = "cone";
  } else if (typeRoll < 0.965) {
    type = "overhead";
  } else if (typeRoll < 0.975) {
    type = "shield";
  } else {
    type = "magnet";
  }

  runnerItems.push({
    type,
    lane,
    y: -50,
    collected: false
  });
}

function drawRunner() {
  runnerCtx.clearRect(0, 0, runnerCanvas.width, runnerCanvas.height);
  drawRunnerBackground();
  drawRunnerItems();
  drawRunnerPlayer();
}

function drawRunnerBackground() {
  const stripeOffset = runnerDistance % 80;

  runnerCtx.fillStyle = "#cfe2ef";
  runnerCtx.fillRect(0, 0, runnerCanvas.width, runnerCanvas.height);

  runnerCtx.fillStyle = "#8b99a3";
  runnerCtx.beginPath();
  runnerCtx.moveTo(150, runnerCanvas.height);
  runnerCtx.lineTo(260, 0);
  runnerCtx.lineTo(380, 0);
  runnerCtx.lineTo(500, runnerCanvas.height);
  runnerCtx.closePath();
  runnerCtx.fill();

  runnerCtx.strokeStyle = "#e8eef2";
  runnerCtx.lineWidth = 4;
  [240, 400].forEach((x) => {
    runnerCtx.beginPath();
    runnerCtx.moveTo(x, runnerCanvas.height);
    runnerCtx.lineTo(300 + (x - 320) * 0.25, 0);
    runnerCtx.stroke();
  });

  runnerCtx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  runnerCtx.lineWidth = 3;
  for (let y = -80; y < runnerCanvas.height + 90; y += 80) {
    const drawY = y + stripeOffset;
    runnerCtx.beginPath();
    runnerCtx.moveTo(178, drawY);
    runnerCtx.lineTo(462, drawY);
    runnerCtx.stroke();
  }

  runnerCtx.fillStyle = "#5a7b61";
  runnerCtx.fillRect(0, 315, runnerCanvas.width, 45);
}

function drawRunnerPlayer() {
  const x = runnerLanes[runnerPlayer.lane];
  const y = runnerPlayer.y;
  const sliding = runnerPlayer.slidingTimer > 0;

  runnerCtx.fillStyle = "rgba(0, 0, 0, 0.18)";
  runnerCtx.beginPath();
  runnerCtx.ellipse(x, runnerGroundY + 30, 28, 8, 0, 0, Math.PI * 2);
  runnerCtx.fill();

  runnerCtx.fillStyle = "#2367a6";
  if (sliding) {
    roundRunnerRect(x - 30, y - 34, 60, 30, 10);
  } else {
    roundRunnerRect(x - 22, y - 58, 44, 54, 10);
  }
  runnerCtx.fill();

  runnerCtx.fillStyle = "#ffd7a8";
  runnerCtx.beginPath();
  runnerCtx.arc(sliding ? x + 24 : x, sliding ? y - 32 : y - 70, 18, 0, Math.PI * 2);
  runnerCtx.fill();

  runnerCtx.fillStyle = "#17211c";
  runnerCtx.fillRect(sliding ? x + 12 : x - 12, sliding ? y - 39 : y - 78, 24, 7);

  if (runnerShieldTimer > 0 || runnerInvulnerableTimer > 0) {
    runnerCtx.strokeStyle = runnerShieldTimer > 0 ? "#61dafb" : "rgba(255, 255, 255, 0.65)";
    runnerCtx.lineWidth = 4;
    runnerCtx.beginPath();
    runnerCtx.arc(x, y - 45, 34, 0, Math.PI * 2);
    runnerCtx.stroke();
  }

  if (runnerMagnetTimer > 0) {
    runnerCtx.strokeStyle = "rgba(210, 71, 255, 0.65)";
    runnerCtx.lineWidth = 3;
    runnerCtx.beginPath();
    runnerCtx.arc(x, y - 45, 46, 0, Math.PI * 2);
    runnerCtx.stroke();
  }
}

function drawRunnerItems() {
  runnerItems.forEach((item) => {
    if (item.collected) {
      return;
    }

    const x = runnerLanes[item.lane];
    const y = item.y;

    if (item.type === "coin") {
      runnerCtx.fillStyle = "#f2b84b";
      runnerCtx.beginPath();
      runnerCtx.arc(x, y, 16, 0, Math.PI * 2);
      runnerCtx.fill();
      runnerCtx.strokeStyle = "#a76400";
      runnerCtx.lineWidth = 3;
      runnerCtx.stroke();
      return;
    }

    if (item.type === "box") {
      runnerCtx.fillStyle = "#9b5f35";
      roundRunnerRect(x - 28, y - 54, 56, 84, 6);
      runnerCtx.fill();
      runnerCtx.strokeStyle = "#5d341c";
      runnerCtx.lineWidth = 3;
      runnerCtx.stroke();
      runnerCtx.fillStyle = "rgba(255, 236, 190, 0.28)";
      runnerCtx.fillRect(x - 20, y - 42, 40, 8);
      runnerCtx.fillRect(x - 20, y - 16, 40, 8);
      runnerCtx.fillRect(x - 20, y + 10, 40, 8);
      return;
    }

    if (item.type === "cone") {
      runnerCtx.fillStyle = "#ff8a1f";
      runnerCtx.beginPath();
      runnerCtx.moveTo(x, y - 28);
      runnerCtx.lineTo(x - 24, y + 26);
      runnerCtx.lineTo(x + 24, y + 26);
      runnerCtx.closePath();
      runnerCtx.fill();
      runnerCtx.fillStyle = "#ffffff";
      runnerCtx.fillRect(x - 16, y + 8, 32, 7);
      return;
    }

    if (item.type === "overhead") {
      runnerCtx.fillStyle = "#3b3f47";
      runnerCtx.fillRect(x - 34, y - 46, 68, 12);
      runnerCtx.fillRect(x - 27, y - 80, 10, 40);
      runnerCtx.fillRect(x + 17, y - 80, 10, 40);
      runnerCtx.fillStyle = "#ffd34d";
      roundRunnerRect(x - 30, y - 106, 60, 28, 5);
      runnerCtx.fill();
      runnerCtx.fillStyle = "#17211c";
      runnerCtx.font = "700 12px Arial";
      runnerCtx.textAlign = "center";
      runnerCtx.fillText("DUCK", x, y - 88);
      return;
    }

    if (item.type === "shield") {
      runnerCtx.fillStyle = "#61dafb";
      runnerCtx.beginPath();
      runnerCtx.moveTo(x, y - 24);
      runnerCtx.lineTo(x + 21, y - 10);
      runnerCtx.lineTo(x + 15, y + 22);
      runnerCtx.lineTo(x, y + 32);
      runnerCtx.lineTo(x - 15, y + 22);
      runnerCtx.lineTo(x - 21, y - 10);
      runnerCtx.closePath();
      runnerCtx.fill();
      runnerCtx.strokeStyle = "#0b5f78";
      runnerCtx.lineWidth = 3;
      runnerCtx.stroke();
      return;
    }

    if (item.type === "magnet") {
      runnerCtx.strokeStyle = "#d247ff";
      runnerCtx.lineWidth = 8;
      runnerCtx.beginPath();
      runnerCtx.arc(x, y, 18, Math.PI * 0.18, Math.PI * 0.82);
      runnerCtx.stroke();
      runnerCtx.fillStyle = "#ffffff";
      runnerCtx.fillRect(x - 21, y + 4, 10, 12);
      runnerCtx.fillRect(x + 11, y + 4, 10, 12);
      return;
    }

    runnerCtx.fillStyle = "#d83b3b";
    roundRunnerRect(x - 34, y - 16, 68, 32, 6);
    runnerCtx.fill();
    runnerCtx.fillStyle = "#ffffff";
    runnerCtx.fillRect(x - 24, y - 5, 48, 10);
  });
}

function handleRunnerKey(event) {
  const isRunnerControl = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "a",
    "A",
    "d",
    "D",
    "w",
    "W",
    " "
  ].includes(event.key);

  if (!isRunnerControl || runnerState !== "playing") {
    return false;
  }

  event.preventDefault();

  if ((event.key === "ArrowLeft" || event.key === "a" || event.key === "A") && runnerPlayer.lane > 0) {
    runnerPlayer.lane -= 1;
  }

  if ((event.key === "ArrowRight" || event.key === "d" || event.key === "D") && runnerPlayer.lane < runnerLanes.length - 1) {
    runnerPlayer.lane += 1;
  }

  if (event.key === "ArrowUp" || event.key === "w" || event.key === "W" || event.key === " ") {
    jumpRunner();
  }

  if (event.key === "ArrowDown") {
    slideRunner();
  }

  return true;
}

function jumpRunner() {
  if (runnerPlayer.jumping || runnerPlayer.slidingTimer > 0) {
    return;
  }

  runnerPlayer.jumping = true;
  runnerPlayer.velocityY = -620;
}

function slideRunner() {
  if (runnerPlayer.jumping) {
    return;
  }

  runnerPlayer.slidingTimer = 0.75;
}

function getRunnerPlayerBox() {
  if (runnerPlayer.slidingTimer > 0) {
    return {
      x: runnerLanes[runnerPlayer.lane] - 30,
      y: runnerPlayer.y - 36,
      width: 60,
      height: 32
    };
  }

  return {
    x: runnerLanes[runnerPlayer.lane] - runnerPlayer.width / 2,
    y: runnerPlayer.y - runnerPlayer.height,
    width: runnerPlayer.width,
    height: runnerPlayer.height
  };
}

function getRunnerItemBox(item) {
  const x = runnerLanes[item.lane];

  if (item.type === "coin") {
    return { x: x - 18, y: item.y - 18, width: 36, height: 36 };
  }

  if (item.type === "box") {
    return { x: x - 30, y: item.y - 56, width: 60, height: 88 };
  }

  if (item.type === "cone") {
    return { x: x - 24, y: item.y - 28, width: 48, height: 54 };
  }

  if (item.type === "overhead") {
    return { x: x - 34, y: item.y - 106, width: 68, height: 72 };
  }

  if (item.type === "shield" || item.type === "magnet") {
    return { x: x - 24, y: item.y - 28, width: 48, height: 56 };
  }

  return { x: x - 36, y: item.y - 18, width: 72, height: 36 };
}

function boxesOverlap(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function endRunner(title, text, buttonText = "Restart Runner") {
  runnerState = "ended";
  cancelAnimationFrame(runnerAnimationId);
  showRunnerOverlay(title, text, buttonText);
}

function updateRunnerScore() {
  const effects = [];

  if (runnerShieldTimer > 0) {
    effects.push("Shield");
  }

  if (runnerMagnetTimer > 0) {
    effects.push("Magnet");
  }

  runnerScoreEl.textContent = `Coins ${runnerCoins} | Lives ${runnerLives}${effects.length ? ` | ${effects.join(" + ")}` : ""}`;
}

function showRunnerOverlay(title, text, buttonText) {
  runnerOverlayTitle.textContent = title;
  runnerOverlayText.textContent = text;
  runnerRestartButton.textContent = buttonText;
  runnerOverlay.classList.remove("hidden");
}

function hideRunnerOverlay() {
  runnerOverlay.classList.add("hidden");
}

function roundRunnerRect(x, y, width, height, radius) {
  runnerCtx.beginPath();
  runnerCtx.moveTo(x + radius, y);
  runnerCtx.lineTo(x + width - radius, y);
  runnerCtx.quadraticCurveTo(x + width, y, x + width, y + radius);
  runnerCtx.lineTo(x + width, y + height - radius);
  runnerCtx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  runnerCtx.lineTo(x + radius, y + height);
  runnerCtx.quadraticCurveTo(x, y + height, x, y + height - radius);
  runnerCtx.lineTo(x, y + radius);
  runnerCtx.quadraticCurveTo(x, y, x + radius, y);
}

runnerRestartButton.addEventListener("click", () => {
  resetRunner(false);
  startRunner();
});

runnerQuickRestartButton.addEventListener("click", () => {
  resetRunner();
});

resetRunner();

function resetWordGame() {
  const lengths = [5, 6];
  wordLength = lengths[Math.floor(Math.random() * lengths.length)];
  const words = wordLists[wordLength];
  wordAnswer = words[Math.floor(Math.random() * words.length)].toUpperCase();
  wordCurrentRow = 0;
  wordGameState = "playing";
  wordInput.value = "";
  wordInput.maxLength = wordLength;
  wordInput.placeholder = `${wordLength}-letter word`;
  wordInput.disabled = false;
  wordStatus.textContent = `${wordLength} letters`;
  wordMessage.textContent = `Guess the ${wordLength}-letter word.`;
  renderWordBoard();
}

function renderWordBoard() {
  wordBoard.innerHTML = "";
  wordBoard.style.gridTemplateRows = `repeat(${wordMaxGuesses}, 52px)`;

  for (let row = 0; row < wordMaxGuesses; row += 1) {
    const rowEl = document.createElement("div");
    rowEl.className = "word-row";
    rowEl.style.gridTemplateColumns = `repeat(${wordLength}, minmax(38px, 52px))`;

    for (let col = 0; col < wordLength; col += 1) {
      const tile = document.createElement("div");
      tile.className = "word-tile";
      tile.dataset.row = row;
      tile.dataset.col = col;
      rowEl.appendChild(tile);
    }

    wordBoard.appendChild(rowEl);
  }
}

function submitWordGuess(event) {
  event.preventDefault();
  activeGame = "word";

  if (wordGameState !== "playing") {
    return;
  }

  const guess = wordInput.value.trim().toUpperCase();

  if (!/^[A-Z]+$/.test(guess) || guess.length !== wordLength) {
    wordMessage.textContent = `Enter exactly ${wordLength} letters.`;
    return;
  }

  revealWordGuess(guess);
  wordInput.value = "";

  if (guess === wordAnswer) {
    wordGameState = "won";
    wordInput.disabled = true;
    wordStatus.textContent = "Solved";
    wordMessage.textContent = `You got it in ${wordCurrentRow + 1} guesses.`;
    return;
  }

  wordCurrentRow += 1;

  if (wordCurrentRow >= wordMaxGuesses) {
    wordGameState = "lost";
    wordInput.disabled = true;
    wordStatus.textContent = "Missed";
    wordMessage.textContent = `The word was ${wordAnswer}.`;
    return;
  }

  wordStatus.textContent = `Guess ${wordCurrentRow + 1}/6`;
  wordMessage.textContent = "Try another guess.";
}

function revealWordGuess(guess) {
  const result = scoreWordGuess(guess);

  for (let col = 0; col < wordLength; col += 1) {
    const tile = wordBoard.querySelector(`[data-row="${wordCurrentRow}"][data-col="${col}"]`);
    tile.textContent = guess[col];
    tile.classList.add(result[col]);
  }
}

function scoreWordGuess(guess) {
  const result = Array(wordLength).fill("missing");
  const remaining = {};

  for (let i = 0; i < wordLength; i += 1) {
    if (guess[i] === wordAnswer[i]) {
      result[i] = "correct";
    } else {
      remaining[wordAnswer[i]] = (remaining[wordAnswer[i]] || 0) + 1;
    }
  }

  for (let i = 0; i < wordLength; i += 1) {
    if (result[i] === "correct") {
      continue;
    }

    if (remaining[guess[i]] > 0) {
      result[i] = "present";
      remaining[guess[i]] -= 1;
    }
  }

  return result;
}

wordInput.addEventListener("input", () => {
  wordInput.value = wordInput.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
});

wordForm.addEventListener("submit", submitWordGuess);
wordRestartButton.addEventListener("click", resetWordGame);

resetWordGame();

function resetTankGame() {
  cancelAnimationFrame(tankAnimationId);
  tankPlayer = {
    x: tankCanvas.width / 2,
    y: tankCanvas.height - 74,
    angle: -Math.PI / 2,
    hp: 100,
    maxHp: 100,
    speed: 150,
    damage: 1,
    radius: 18
  };
  tankStage = 1;
  tankCoins = 0;
  tankBullets = [];
  tankParticles = [];
  tankShootCooldown = 0;
  tankState = "ready";
  tankKeys.clear();
  spawnTankStage();
  updateTankStats();
  drawTankGame();
  tankShop.hidden = true;
  showTankOverlay("Tank Ready", "Use the arrow keys to move and press P to shoot.", "Start Battle");
}

function startTankGame() {
  activeGame = "tank";
  if (tankState === "playing") {
    return;
  }

  tankState = "playing";
  tankShop.hidden = true;
  hideTankOverlay();
  tankLastTime = performance.now();
  cancelAnimationFrame(tankAnimationId);
  tankAnimationId = requestAnimationFrame(updateTankGame);
}

function spawnTankStage() {
  tankEnemies = [];
  const tankCount = 2 + Math.floor(tankStage * 0.8);
  const soldierCount = 3 + tankStage;

  for (let i = 0; i < tankCount; i += 1) {
    tankEnemies.push(createTankEnemy("tank", i));
  }

  for (let i = 0; i < soldierCount; i += 1) {
    tankEnemies.push(createTankEnemy("soldier", i + tankCount));
  }
}

function createTankEnemy(type, index) {
  const cols = [90, 220, 360, 520];
  const x = cols[index % cols.length] + Math.random() * 30 - 15;
  const y = 50 + Math.floor(index / cols.length) * 54 + Math.random() * 12;
  return {
    type,
    x,
    y,
    hp: type === "tank" ? 3 + Math.floor(tankStage / 2) : 1,
    maxHp: type === "tank" ? 3 + Math.floor(tankStage / 2) : 1,
    speed: type === "tank" ? 42 + tankStage * 3 : 68 + tankStage * 4,
    radius: type === "tank" ? 18 : 11,
    coinValue: type === "tank" ? 7 : 3,
    attackCooldown: 0
  };
}

function updateTankGame(timestamp) {
  const delta = Math.min((timestamp - tankLastTime) / 1000, 0.04);
  tankLastTime = timestamp;
  tankShootCooldown = Math.max(0, tankShootCooldown - delta);
  updateTankPlayer(delta);
  updateTankBullets(delta);
  updateTankEnemies(delta);
  updateTankParticles(delta);
  drawTankGame();

  if (tankState === "playing") {
    tankAnimationId = requestAnimationFrame(updateTankGame);
  }
}

function updateTankPlayer(delta) {
  let dx = 0;
  let dy = 0;

  if (tankKeys.has("ArrowUp")) {
    dy -= 1;
  }
  if (tankKeys.has("ArrowDown")) {
    dy += 1;
  }
  if (tankKeys.has("ArrowLeft")) {
    dx -= 1;
  }
  if (tankKeys.has("ArrowRight")) {
    dx += 1;
  }

  if (dx !== 0 || dy !== 0) {
    const length = Math.hypot(dx, dy);
    dx /= length;
    dy /= length;
    tankPlayer.x += dx * tankPlayer.speed * delta;
    tankPlayer.y += dy * tankPlayer.speed * delta;
    tankPlayer.angle = Math.atan2(dy, dx);
  }

  tankPlayer.x = Math.max(24, Math.min(tankCanvas.width - 24, tankPlayer.x));
  tankPlayer.y = Math.max(30, Math.min(tankCanvas.height - 28, tankPlayer.y));
}

function updateTankBullets(delta) {
  tankBullets.forEach((bullet) => {
    bullet.x += Math.cos(bullet.angle) * bullet.speed * delta;
    bullet.y += Math.sin(bullet.angle) * bullet.speed * delta;
  });

  tankBullets.forEach((bullet) => {
    if (bullet.hit) {
      return;
    }

    tankEnemies.forEach((enemy) => {
      if (bullet.hit || Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y) > enemy.radius + 5) {
        return;
      }

      bullet.hit = true;
      enemy.hp -= tankPlayer.damage;
      tankParticles.push({ x: enemy.x, y: enemy.y, life: 0.25 });

      if (enemy.hp <= 0) {
        enemy.defeated = true;
        tankCoins += enemy.coinValue;
      }
    });
  });

  tankEnemies = tankEnemies.filter((enemy) => !enemy.defeated);
  tankBullets = tankBullets.filter((bullet) => (
    !bullet.hit &&
    bullet.x > -20 &&
    bullet.x < tankCanvas.width + 20 &&
    bullet.y > -20 &&
    bullet.y < tankCanvas.height + 20
  ));

  if (tankEnemies.length === 0 && tankState === "playing") {
    finishTankStage();
  }
}

function updateTankEnemies(delta) {
  tankEnemies.forEach((enemy) => {
    const dx = tankPlayer.x - enemy.x;
    const dy = tankPlayer.y - enemy.y;
    const distance = Math.max(1, Math.hypot(dx, dy));
    enemy.x += (dx / distance) * enemy.speed * delta;
    enemy.y += (dy / distance) * enemy.speed * delta;
    enemy.attackCooldown = Math.max(0, enemy.attackCooldown - delta);

    if (distance < enemy.radius + tankPlayer.radius && enemy.attackCooldown <= 0) {
      damageTank(enemy.type === "tank" ? 14 : 8);
      enemy.attackCooldown = enemy.type === "tank" ? 1.1 : 0.85;
    }
  });
}

function updateTankParticles(delta) {
  tankParticles.forEach((particle) => {
    particle.life -= delta;
  });
  tankParticles = tankParticles.filter((particle) => particle.life > 0);
}

function shootTank() {
  if (tankState !== "playing" || tankShootCooldown > 0) {
    return;
  }

  tankBullets.push({
    x: tankPlayer.x + Math.cos(tankPlayer.angle) * 26,
    y: tankPlayer.y + Math.sin(tankPlayer.angle) * 26,
    angle: tankPlayer.angle,
    speed: 420,
    hit: false
  });
  tankShootCooldown = 0.28;
}

function damageTank(amount) {
  tankPlayer.hp = Math.max(0, tankPlayer.hp - amount);
  updateTankStats();

  if (tankPlayer.hp <= 0) {
    tankState = "ended";
    cancelAnimationFrame(tankAnimationId);
    tankShop.hidden = true;
    showTankOverlay("Tank Destroyed", `You reached stage ${tankStage} with ${tankCoins} coins.`, "Restart");
  }
}

function finishTankStage() {
  tankState = "shop";
  cancelAnimationFrame(tankAnimationId);
  tankCoins += 10 + tankStage * 2;
  updateTankStats();
  tankShop.hidden = false;
  showTankOverlay("Stage Clear", "Spend coins to repair or upgrade, then start the next stage.", "Continue");
}

function buyTankUpgrade(type) {
  if (tankState !== "shop") {
    return;
  }

  const costs = {
    repair: 8,
    armor: 14,
    damage: 16,
    speed: 12
  };

  if (tankCoins < costs[type]) {
    tankOverlayText.textContent = "Not enough coins for that upgrade.";
    return;
  }

  tankCoins -= costs[type];

  if (type === "repair") {
    tankPlayer.hp = Math.min(tankPlayer.maxHp, tankPlayer.hp + 20);
  }
  if (type === "armor") {
    tankPlayer.maxHp += 20;
    tankPlayer.hp += 20;
  }
  if (type === "damage") {
    tankPlayer.damage += 1;
  }
  if (type === "speed") {
    tankPlayer.speed += 18;
  }

  updateTankStats();
}

function nextTankStage() {
  if (tankState !== "shop") {
    return;
  }

  tankStage += 1;
  tankBullets = [];
  tankParticles = [];
  tankShootCooldown = 0;
  spawnTankStage();
  updateTankStats();
  startTankGame();
}

function drawTankGame() {
  tankCtx.clearRect(0, 0, tankCanvas.width, tankCanvas.height);
  drawTankArena();
  tankBullets.forEach(drawTankBullet);
  tankEnemies.forEach(drawTankEnemy);
  drawPlayerTank();
  tankParticles.forEach(drawTankParticle);
}

function drawTankArena() {
  tankCtx.fillStyle = "#bac7a5";
  tankCtx.fillRect(0, 0, tankCanvas.width, tankCanvas.height);
  tankCtx.strokeStyle = "rgba(83, 107, 45, 0.18)";
  tankCtx.lineWidth = 2;

  for (let x = 0; x < tankCanvas.width; x += 64) {
    tankCtx.beginPath();
    tankCtx.moveTo(x, 0);
    tankCtx.lineTo(x + 90, tankCanvas.height);
    tankCtx.stroke();
  }

  tankCtx.fillStyle = "rgba(83, 107, 45, 0.18)";
  tankCtx.fillRect(72, 92, 92, 34);
  tankCtx.fillRect(442, 284, 118, 38);
}

function drawPlayerTank() {
  tankCtx.save();
  tankCtx.translate(tankPlayer.x, tankPlayer.y);
  tankCtx.rotate(tankPlayer.angle);
  tankCtx.fillStyle = "#2f6f4f";
  roundTankRect(-22, -16, 44, 32, 8);
  tankCtx.fill();
  tankCtx.fillStyle = "#1d4633";
  tankCtx.fillRect(6, -5, 28, 10);
  tankCtx.fillStyle = "#6fa67f";
  tankCtx.fillRect(-17, -22, 34, 7);
  tankCtx.fillRect(-17, 15, 34, 7);
  tankCtx.restore();
  drawTankHealthBar(tankPlayer.x, tankPlayer.y - 34, tankPlayer.hp, tankPlayer.maxHp, 46);
}

function drawTankEnemy(enemy) {
  tankCtx.save();
  tankCtx.translate(enemy.x, enemy.y);
  tankCtx.rotate(Math.atan2(tankPlayer.y - enemy.y, tankPlayer.x - enemy.x));

  if (enemy.type === "tank") {
    tankCtx.fillStyle = "#91403a";
    roundTankRect(-20, -15, 40, 30, 7);
    tankCtx.fill();
    tankCtx.fillStyle = "#5c2421";
    tankCtx.fillRect(4, -4, 25, 8);
  } else {
    tankCtx.fillStyle = "#7a3344";
    tankCtx.beginPath();
    tankCtx.arc(0, 0, 11, 0, Math.PI * 2);
    tankCtx.fill();
  }

  tankCtx.restore();
  drawTankHealthBar(enemy.x, enemy.y - 28, enemy.hp, enemy.maxHp, enemy.type === "tank" ? 36 : 24);
}

function drawTankBullet(bullet) {
  tankCtx.fillStyle = "#f7d36b";
  tankCtx.beginPath();
  tankCtx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
  tankCtx.fill();
}

function drawTankParticle(particle) {
  tankCtx.fillStyle = `rgba(247, 211, 107, ${particle.life * 4})`;
  tankCtx.beginPath();
  tankCtx.arc(particle.x, particle.y, 20 * particle.life, 0, Math.PI * 2);
  tankCtx.fill();
}

function drawTankHealthBar(x, y, hp, maxHp, width) {
  tankCtx.fillStyle = "rgba(23, 33, 28, 0.35)";
  tankCtx.fillRect(x - width / 2, y, width, 5);
  tankCtx.fillStyle = hp / maxHp > 0.35 ? "#58d68d" : "#d83b3b";
  tankCtx.fillRect(x - width / 2, y, width * (hp / maxHp), 5);
}

function roundTankRect(x, y, width, height, radius) {
  tankCtx.beginPath();
  tankCtx.moveTo(x + radius, y);
  tankCtx.lineTo(x + width - radius, y);
  tankCtx.quadraticCurveTo(x + width, y, x + width, y + radius);
  tankCtx.lineTo(x + width, y + height - radius);
  tankCtx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  tankCtx.lineTo(x + radius, y + height);
  tankCtx.quadraticCurveTo(x, y + height, x, y + height - radius);
  tankCtx.lineTo(x, y + radius);
  tankCtx.quadraticCurveTo(x, y, x + radius, y);
}

function handleTankKeyDown(event) {
  if (activeGame !== "tank") {
    return false;
  }

  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    tankKeys.add(event.key);
    if (tankState === "ready") {
      startTankGame();
    }
    return true;
  }

  if (event.key === "p" || event.key === "P") {
    event.preventDefault();
    if (tankState === "ready") {
      startTankGame();
    }
    shootTank();
    return true;
  }

  return false;
}

function updateTankStats() {
  tankStatsEl.textContent = `Stage ${tankStage} | HP ${tankPlayer.hp}/${tankPlayer.maxHp} | Coins ${tankCoins}`;
}

function showTankOverlay(title, text, buttonText) {
  tankOverlayTitle.textContent = title;
  tankOverlayText.textContent = text;
  tankStartButton.textContent = buttonText;
  tankOverlay.classList.remove("hidden");
}

function hideTankOverlay() {
  tankOverlay.classList.add("hidden");
}

tankStartButton.addEventListener("click", () => {
  if (tankState === "shop") {
    hideTankOverlay();
    return;
  }
  if (tankState === "ended") {
    resetTankGame();
    startTankGame();
    return;
  }
  startTankGame();
});
tankRestartButton.addEventListener("click", resetTankGame);
tankRepairButton.addEventListener("click", () => buyTankUpgrade("repair"));
tankArmorButton.addEventListener("click", () => buyTankUpgrade("armor"));
tankDamageButton.addEventListener("click", () => buyTankUpgrade("damage"));
tankSpeedButton.addEventListener("click", () => buyTankUpgrade("speed"));
tankNextStageButton.addEventListener("click", nextTankStage);

resetTankGame();

function resetDefenseGame() {
  cancelAnimationFrame(defenseAnimationId);
  defensePlayer = {
    x: defenseWorldWidth - 285,
    y: defenseGroundY - 28,
    hp: 100,
    maxHp: 100,
    speed: 170,
    weaponDamage: 2,
    damageLevel: 0,
    burstShots: 1,
    burstLevel: 0,
    fireCooldown: 0.18,
    fireRateLevel: 0,
    healthLevel: 0,
    revengeLevel: 0,
    revengeStacks: 0,
    electroLevel: 0,
    overchargeLevel: 0,
    surgeLevel: 0,
    surgeCooldown: 0,
    vx: 0,
    vy: 0,
    onGround: true,
    equipment: {
      equipped: null,
      owned: { minigun: false, bow: false, electroGun: false },
      levels: { minigun: 1, bow: 1, electroGun: 1 },
      ores: { rare: 0, epic: 0, legendary: 0 }
    },
    alive: true,
    respawnTimer: 0,
    invulnerableTimer: 0,
    radius: 13
  };
  defensePresident = {
    x: defenseWorldWidth - 80,
    y: defenseGroundY - 34,
    hp: 100,
    maxHp: 100
  };
  defenseCameraX = defenseWorldWidth - defenseCanvas.width;
  defenseMouse = { x: defenseCanvas.width / 2, y: defenseCanvas.height / 2, worldX: defensePlayer.x, worldY: defensePlayer.y, inside: false };
  defenseUpgrades = {
    wallHpBonus: 0,
    turretDamageBonus: 0,
    turretRangeBonus: 0,
    cannonDamageBonus: 0,
    cannonRangeBonus: 0,
    ricochetDamageBonus: 0,
    ricochetRangeBonus: 0,
    antiAirDamageBonus: 0,
    antiAirRangeBonus: 0,
    airbombDamageBonus: 0,
    airbombRangeBonus: 0,
    grenadeDamageBonus: 0,
    grenadeRangeBonus: 0,
    minigunDamageBonus: 0,
    minigunRangeBonus: 0,
    mortarDamageBonus: 0,
    mortarRangeBonus: 0,
    multiMortarDamageBonus: 0,
    multiMortarRangeBonus: 0,
    missileDamageBonus: 0,
    missileRangeBonus: 0,
    rapidMissileDamageBonus: 0,
    rapidMissileRangeBonus: 0,
    eagleDamageBonus: 0,
    eagleMinHealthBonus: 0,
    eagleRadiusBonus: 0,
    infernoArtilleryDamageBonus: 0,
    infernoArtilleryRangeBonus: 0,
    monolithPercentBonus: 0,
    monolithRangeBonus: 0,
    trapDamageBonus: 0,
    trapRadiusBonus: 0,
    campHpBonus: 0,
    campTraining: 0,
    tankCampTraining: 0,
    airfieldTraining: 0,
    troopLauncherTraining: 0,
    builderRepairBonus: 0,
    builderRangeBonus: 0,
    infernoStatBonus: 0,
    spellDamageBonus: 0,
    spellSpeedBonus: 0,
    spellRangeBonus: 0
  };
  defenseUpgradeLevels = {
    wall: 0,
    turret: 0,
    cannon: 0,
    ricochet: 0,
    antiAir: 0,
    airbomb: 0,
    grenade: 0,
    minigun: 0,
    mortar: 0,
    multiMortar: 0,
    missile: 0,
    rapidMissile: 0,
    monolith: 0,
    infernoArtillery: 0,
    eagle: 0,
    trap: 0,
    camp: 0,
    tankCamp: 0,
    airfield: 0,
    troopLauncher: 0,
    builder: 0,
    infernoSingle: 0,
    infernoMulti: 0,
    spell: 0,
    xbow: 0,
    gigaTesla: 0
  };
  defenseBuildings = [
    createDefenseBuilding("wall", defenseWorldWidth - 185, defenseGroundY - 28)
  ];
  defenseEnemies = [];
  defenseFriendlyUnits = [];
  defenseBullets = [];
  defenseFireZones = [];
  defenseAirBursts = [];
  defenseWave = 1;
  defenseMoney = 400;
  defenseState = "ready";
  defenseSelectedTool = "wall";
  defenseSelectedMenu = "build";
  defenseSelectedAbilityBuilding = null;
  defenseHandbookSelectedType = "turret";
  defenseBattleMode = false;
  defenseAttackMode = false;
  defenseAttackStage = 1;
  defenseAttackPlatforms = [];
  defenseAttackMouseDown = false;
  defenseAttackCharge = 0;
  defenseStoryLevel = 0;
  defenseStoryAttacksUsed = 0;
  defenseStoryPaused = false;
  defenseStoryExitOpen = false;
  defenseStoryLocked = false;
  defenseEquipmentDetail = null;
  defenseMergedUnlocked = { freezeSpell: false, lavaLauncher: false, ypj20: false, gigaInferno: false, superWizard: false };
  defensePresidentLevel = 1;
  defensePresidentHealthLevel = 0;
  defenseHoneyLevel = 0;
  defenseHoneyCooldown = 0;
  defenseMergePick = null;
  defenseHoneyNotified = false;
  defenseYpjLevel = 0;
  defenseScreenShake = 0;
  defenseBeams = [];
  defenseSkyDarken = 0;
  defenseHealingNerf = false;
  defenseSpawnQueue = [];
  defenseSpawnTimer = 0;
  defenseWaveSoldiersDeployed = 0;
  defenseWaveElapsed = 0;
  defenseShootCooldown = 0;
  defenseKeys.clear();
  updateDefenseStats();
  updateDefenseToolButtons();
  updateDefenseMenu();
  updateDefenseUpgradeButtons();
  drawDefenseGame();
  showDefenseOverlay("Hold the Line", "Build defenses, then start the wave. Aim and left click to shoot.", "Start Defense");
}

function startDefenseGame() {
  activeGame = "defense";
  if (defenseState === "playing") {
    return;
  }
  defenseState = "building";
  hideDefenseOverlay();
  defenseLastTime = performance.now();
  cancelAnimationFrame(defenseAnimationId);
  defenseAnimationId = requestAnimationFrame(updateDefenseGame);
}

function startDefenseWave() {
  if (defenseState === "ready") {
    startDefenseGame();
  }
  if (defenseState !== "building") {
    return;
  }
  if (defenseDemoMode && defenseDemoWaveInput) {
    defenseWave = getDefenseDemoWaveValue();
  }
  defenseState = "playing";
  defenseSpawnQueue = createDefenseWave(defenseWave);
  defenseSpawnTimer = 0;
  defenseWaveSoldiersDeployed = 0;
  defenseWaveElapsed = 0;
  hideDefenseOverlay();
  updateDefenseStats();
}

function createDefenseWave(wave) {
  const queue = [];
  const pushMany = (type, count) => {
    for (let i = 0; i < count; i += 1) {
      queue.push(type);
    }
  };
  const finishQueue = (featuredTypes = []) => {
    const shuffled = queue.sort(() => Math.random() - 0.5);
    const featured = [];
    featuredTypes.forEach((type) => {
      const index = shuffled.findIndex((enemyType) => enemyType === type);
      if (index >= 0) {
        featured.push(...shuffled.splice(index, 1));
      }
    });
    return [...featured, ...shuffled];
  };

  if (wave <= 2) {
    pushMany("soldier", 5 + wave * 2);
    pushMany("tank", 1);
    pushMany("plane", 1);
    return finishQueue();
  }

  if (wave <= 4) {
    pushMany("soldier", 4 + wave);
    pushMany("tank", 1 + Math.floor(wave / 3));
    pushMany("plane", wave === 3 ? 1 : 0);
    pushMany("helicopter", 2 + Math.floor(wave / 2));
    return finishQueue();
  }

  if (wave === 5) {
    pushMany("soldier", 4);
    pushMany("tank", 2);
    pushMany("helicopter", 2);
    pushMany("truck", 2);
    return finishQueue(["truck"]);
  }

  if (wave === 6) {
    pushMany("soldier", 3);
    pushMany("tank", 2);
    pushMany("helicopter", 2);
    pushMany("aircraftCarrier", 1);
    return finishQueue(["aircraftCarrier"]);
  }

  if (wave === 7) {
    pushMany("soldier", 8);
    pushMany("tank", 5);
    pushMany("plane", 4);
    pushMany("helicopter", 4);
    pushMany("truck", 3);
    pushMany("aircraftCarrier", 2);
    pushMany("dragon", 2);
    pushMany("speedSoldier", 4);
    pushMany("zombie", 3);
    pushMany("dropper", 2);
    return finishQueue(["dragon", "speedSoldier", "aircraftCarrier"]);
  }

  if (wave === 8) {
    pushMany("dragon", 2);
    pushMany("speedSoldier", 3);
    pushMany("soldier", 3);
    pushMany("tank", 2);
    pushMany("helicopter", 1);
    return finishQueue(["dragon", "speedSoldier"]);
  }

  if (wave >= 9 && wave <= 12) {
    pushMany("soldier", 2 + Math.floor((wave - 9) / 2));
    pushMany("tank", 2 + Math.floor((wave - 9) / 3));
    pushMany("helicopter", 1);
    pushMany("catapult", 1 + Math.floor((wave - 9) / 2));
    pushMany("boostedTank", 1);
    pushMany("plane", wave % 2 === 0 ? 1 : 0);
    return finishQueue(["catapult", "boostedTank"]);
  }

  if (wave >= 13 && wave <= 15) {
    pushMany("soldier", 3);
    pushMany("tank", 1);
    pushMany("helicopter", 1);
    pushMany("catapult", 1);
    pushMany("boostedTank", 1);
    pushMany("summoner", 1 + Math.floor((wave - 13) / 2));
    pushMany("bomber", 1 + Math.floor((wave - 13) / 2));
    pushMany("troopShooter", 1);
    return finishQueue(["summoner", "bomber", "catapult"]);
  }

  if (wave === 16) {
    pushMany("soldier", 5);
    pushMany("tank", 2);
    pushMany("plane", 2);
    pushMany("helicopter", 2);
    pushMany("truck", 1);
    pushMany("aircraftCarrier", 1);
    pushMany("dragon", 1);
    pushMany("speedSoldier", 2);
    pushMany("zombie", 2);
    pushMany("dropper", 1);
    pushMany("summoner", 1);
    pushMany("bomber", 1);
    pushMany("troopShooter", 1);
    pushMany("troopCannon", 1);
    pushMany("electroTrooper", 1);
    return finishQueue(["summoner", "bomber", "dragon"]);
  }

  if (wave >= 17 && wave <= 20) {
    pushMany("soldier", 2);
    pushMany("tank", 1);
    pushMany("helicopter", 1 + (wave % 2));
    pushMany("truck", wave >= 18 ? 1 : 0);
    pushMany("catapult", 1);
    pushMany("boostedTank", 1);
    pushMany("summoner", 1);
    pushMany("bomber", 1);
    pushMany("troopShooter", wave >= 18 ? 1 : 0);
    pushMany("troopCannon", wave >= 19 ? 1 : 0);
    pushMany("electroTrooper", wave >= 19 ? 1 : 0);
    pushMany("speedSoldier", wave >= 19 ? 1 : 0);
    pushMany("zombie", wave === 20 ? 1 : 0);
    pushMany("plane", wave % 2 === 0 ? 1 : 0);
    pushMany("dropper", wave % 3 === 0 ? 1 : 0);
    return finishQueue(["catapult", "bomber", "summoner"]);
  }

  if (wave >= 21) {
    const lateRamp = Math.floor((wave - 21) / 4);
    pushMany("helicopter", 1 + (wave % 3 === 0 ? 1 : 0));
    pushMany("truck", 1);
    pushMany("plane", wave % 2 === 0 ? 1 : 0);
    pushMany("wallBreaker", 3 + lateRamp);
    pushMany("healer", 2 + Math.floor((wave - 21) / 5));
    pushMany("catapult", 2 + (wave % 5 === 0 ? 1 : 0));
    pushMany("boostedTank", 2 + (wave % 4 === 1 ? 1 : 0));
    pushMany("bomber", 2 + (wave % 6 === 0 ? 1 : 0));
    pushMany("summoner", 1 + Math.floor((wave - 21) / 8));
    pushMany("troopShooter", 1 + Math.floor((wave - 21) / 7));
    pushMany("troopCannon", 1 + Math.floor((wave - 21) / 9));
    pushMany("electroTrooper", 1 + Math.floor((wave - 21) / 8));
    pushMany("speedSoldier", 2 + Math.floor((wave - 21) / 6));
    pushMany("zombie", 2 + Math.floor((wave - 21) / 7));
    pushMany("dragon", wave % 5 === 2 ? 1 : 0);
    pushMany("aircraftCarrier", wave % 6 === 3 ? 1 : 0);
    return finishQueue(["wallBreaker", "healer", "catapult", "boostedTank", "bomber", "summoner", "speedSoldier", "zombie"]);
  }
  return finishQueue();
}

function updateDefenseGame(timestamp) {
  const delta = Math.min((timestamp - defenseLastTime) / 1000, 0.04);
  defenseLastTime = timestamp;
  defenseScreenShake = Math.max(0, (defenseScreenShake || 0) - delta * 1.6);
  defenseSkyDarken = Math.max(0, (defenseSkyDarken || 0) - delta * 1.2);
  defenseBeams.forEach((beam) => {
    beam.life -= delta;
  });
  defenseBeams = defenseBeams.filter((beam) => beam.life > 0);
  if (defenseAttackMode) {
    defenseShootCooldown = Math.max(0, defenseShootCooldown - delta);
    updateDefenseAttackMode(delta);
    drawDefenseGame();
    if (defenseState !== "ended") {
      defenseAnimationId = requestAnimationFrame(updateDefenseGame);
    }
    return;
  }
  if (defenseState === "playing") {
    defenseWaveElapsed += delta;
  }
  defenseShootCooldown = Math.max(0, defenseShootCooldown - delta);
  updateDefensePlayer(delta);
  updateDefenseSpawns(delta);
  updateDefenseBuildings(delta);
  updateDefenseFriendlyUnits(delta);
  updateDefenseBullets(delta);
  updateDefenseFireZones(delta);
  updateDefenseAirBursts(delta);
  updateDefenseEnemies(delta);
  updateDefensePresident(delta);
  drawDefenseGame();

  if (defenseState !== "ended") {
    defenseAnimationId = requestAnimationFrame(updateDefenseGame);
  }
}

function enterDefenseAttackMode() {
  activeGame = "defense";
  defenseAttackMode = true;
  defenseBattleMode = true;
  defenseState = "playing";
  defenseWaveButton.disabled = true;
  defenseBattleModeButton.textContent = "Attacking";
  if (defenseReturnHomeButton) {
    defenseReturnHomeButton.hidden = false;
  }
  defenseStoryPaused = false;
  defenseStoryExitOpen = false;
  defenseStoryLocked = false;
  defensePlayer.jumpHeld = false;
  defenseAttackStage = Math.max(1, defenseStoryLevel + 1);
  defenseEnemies = createDefenseAttackSpawners(defenseAttackStage);
  defenseBullets = [];
  defenseFireZones = [];
  defenseAirBursts = [];
  defenseFriendlyUnits = [];
  defenseAttackMouseDown = false;
  defenseAttackCharge = 0;
  defensePlayer.x = 75;
  defensePlayer.y = defenseGroundY - 24;
  defensePlayer.vx = 0;
  defensePlayer.vy = 0;
  defensePlayer.onGround = true;
  defenseCameraX = 0;
  defenseAttackPlatforms = createDefenseAttackPlatforms(defenseAttackStage);
  hideDefenseOverlay();
  renderDefenseEquipmentPanel();
  updateDefenseStoryUI();
  defenseLastTime = performance.now();
  cancelAnimationFrame(defenseAnimationId);
  defenseAnimationId = requestAnimationFrame(updateDefenseGame);
}

function returnDefenseHome() {
  defenseAttackMode = false;
  defenseBattleMode = false;
  defenseWaveButton.disabled = false;
  defenseBattleModeButton.textContent = "Battle Mode";
  if (defenseReturnHomeButton) {
    defenseReturnHomeButton.hidden = true;
  }
  defenseEnemies = [];
  defenseBullets = [];
  defenseFireZones = [];
  defenseAirBursts = [];
  defenseAttackMouseDown = false;
  defenseAttackCharge = 0;
  defenseStoryPaused = false;
  defenseStoryExitOpen = false;
  defenseStoryLocked = false;
  defensePlayer.x = defenseWorldWidth - 285;
  defensePlayer.y = defenseGroundY - 28;
  defensePlayer.vx = 0;
  defensePlayer.vy = 0;
  defensePlayer.onGround = true;
  defenseCameraX = defenseWorldWidth - defenseCanvas.width;
  defenseState = "building";
  updateDefenseStats();
  updateDefenseStoryUI();
  drawDefenseGame();
}

function isDefenseStorySceneLocked(level) {
  return level >= 5 && defenseWave < 50;
}

function tryEnterDefenseStory() {
  if (defenseAttackMode) {
    returnDefenseHome();
    return;
  }
  if (isDefenseStorySceneLocked(defenseStoryLevel)) {
    showDefenseOverlay("Jungle Locked", "The Jungle is too dangerous right now. Reach wave 50 in defense to unlock it.", "Keep Building");
    return;
  }
  if (defenseStoryAttacksUsed >= 3) {
    showDefenseOverlay("Defend the President First", "You have cleared 3 attack levels in a row. Start and survive a defense wave to recharge your story attacks.", "Start Defense");
    return;
  }
  enterDefenseAttackMode();
  updateDefenseToolButtons();
  drawDefenseGame();
}

function advanceDefenseStoryLevel() {
  if (isDefenseStorySceneLocked(defenseStoryLevel + 1)) {
    defenseStoryLocked = true;
    showDefenseOverlay("Jungle Locked", "The Jungle is too dangerous right now. Reach wave 50 in defense to unlock it.", "Return Home");
    return;
  }
  defenseStoryLocked = false;
  defenseStoryLevel += 1;
  defenseStoryPaused = false;
  defensePlayer.hp = defensePlayer.maxHp;
  defensePlayer.alive = true;
  defensePlayer.respawnTimer = 0;
  defensePlayer.invulnerableTimer = 0;
  enterDefenseAttackMode();
}

function grantDefenseStoryReward() {
  const types = Object.keys(defenseEquipmentDefinitions);
  const type = types[Math.floor(Math.random() * types.length)];
  const definition = defenseEquipmentDefinitions[type];
  const equipment = defensePlayer.equipment;
  if (!equipment.owned[type]) {
    equipment.owned[type] = true;
    if (!equipment.equipped) {
      equipment.equipped = type;
    }
    renderDefenseEquipmentPanel();
    return { name: definition.name, converted: false, oreText: "" };
  }
  const oreAmounts = { rare: 14, epic: 10, legendary: 6 };
  equipment.ores[definition.rarity] += oreAmounts[definition.rarity];
  renderDefenseEquipmentPanel();
  return { name: definition.name, converted: true, oreText: `${oreAmounts[definition.rarity]} ${definition.rarity} ores` };
}

function completeDefenseStoryLevel() {
  defenseStoryPaused = true;
  defenseStoryExitOpen = false;
  defenseAttackMouseDown = false;
  defenseEnemies = [];
  defenseStoryAttacksUsed += 1;
  const reward = grantDefenseStoryReward();
  const scene = getDefenseStoryScene();
  updateDefenseStoryUI();
  drawDefenseGame();
  const rewardText = reward.converted
    ? `Duplicate ${reward.name} converted into ${reward.oreText}.`
    : `You found a ${reward.name}! Equip or upgrade it from Player Upgrades.`;
  if (defenseStoryAttacksUsed >= 3) {
    showDefenseOverlay(`${scene.name} Cleared`, `${rewardText} You have attacked 3 levels in a row - return home and defend the president to recharge your attacks.`, "Return Home");
    renderDefenseNextPreview(true);
  } else {
    showDefenseOverlay(`${scene.name} Cleared`, `${rewardText} Attacks left this run: ${3 - defenseStoryAttacksUsed}/3. Push on to the next scene.`, "Next Level");
    renderDefenseNextPreview(false);
  }
}

function renderDefenseNextPreview(exhausted) {
  if (!defenseNextPreview) {
    return;
  }
  if (exhausted) {
    defenseNextPreview.innerHTML = `<span class="preview-label">Next up</span><span class="preview-chip" style="--preview-a:#718052;--preview-b:#3f6d33"><b>Home Base</b><small>Defend the president to recharge your 3 attacks.</small></span>`;
    defenseNextPreview.hidden = false;
    return;
  }
  const next = defenseStoryScenes[Math.min(defenseStoryLevel + 1, defenseStoryScenes.length - 1)];
  defenseNextPreview.innerHTML = `<span class="preview-label">Next level preview</span><span class="preview-chip" style="--preview-a:${next.sky};--preview-b:${next.ground}"><b>Level ${defenseStoryLevel + 2} - ${next.name}</b><small>${defenseStorySceneHints[next.key]}</small></span>`;
  defenseNextPreview.hidden = false;
}

function updateDefenseStoryUI() {
  const scene = getDefenseStoryScene();
  if (defenseStoryButton) {
    defenseStoryButton.textContent = defenseStoryAttacksUsed >= 3
      ? "Defend the president to recharge attacks (0/3)"
      : `Attack: ${scene.name} - Level ${defenseStoryLevel + 1}`;
  }
  if (defenseStoryStatusEl) {
    defenseStoryStatusEl.textContent = `Story: Level ${defenseStoryLevel + 1} (${scene.name}) | Attacks left: ${3 - defenseStoryAttacksUsed}/3`;
  }
}

function createDefenseAttackPlatforms(stage) {
  const scene = defenseStoryScenes[Math.min(Math.max(0, (stage || 1) - 1), defenseStoryScenes.length - 1)];
  const rough = scene.roughness || 1;
  const pitEvery = scene.pitEvery || 7;
  const platforms = [];
  let gx = 0;
  let segIndex = 0;
  while (gx < defenseWorldWidth) {
    const width = 240 + ((segIndex * 7 + stage * 3) % 3) * 70;
    const lift = Math.round((((segIndex * 11 + stage * 7) % 5) - 2) * 10 * rough);
    const pit = segIndex > 1 && gx + width < defenseWorldWidth - 340 && (segIndex + stage) % pitEvery === 2;
    if (!pit) {
      platforms.push({ x: gx, y: defenseGroundY + 4 - lift, width, height: 44 + Math.max(0, lift), ground: true });
    }
    gx += width + (pit ? Math.round(80 + rough * 14) : 0);
    segIndex += 1;
  }
  const count = 8 + Math.min(10, stage);
  const spacing = (defenseWorldWidth - 560) / count;
  for (let i = 0; i < count; i += 1) {
    const lift = Math.round((((i * 13 + stage * 5) % 5) - 2) * 8 * rough);
    platforms.push({
      x: 280 + i * spacing,
      y: defenseGroundY - 46 - (i % 4) * 32 - lift,
      width: 160,
      height: 16
    });
  }
  return platforms;
}

function createDefenseAttackSpawners(stage) {
  const spawners = [];
  const count = 4 + Math.min(9, stage);
  const lastX = defenseWorldWidth - 330;
  const spacing = count > 1 ? (lastX - 480) / (count - 1) : 0;
  for (let i = 0; i < count; i += 1) {
    const tier = i + stage;
    const equipmentType = tier >= 13 ? "electroGun" : tier >= 7 ? "minigun" : "bow";
    const hp = Math.round((45 + stage * 10 + i * 6) * 0.6);
    spawners.push({
      type: "attackSpawner",
      x: 480 + i * spacing,
      y: defenseGroundY - 38 - (i % 4) * 34,
      hp,
      maxHp: hp,
      radius: 25,
      reward: 32,
      spawnCooldown: 3 + (i % 3),
      spawnInterval: 12 + (i % 2) * 2,
      equipmentType,
      stageTier: tier
    });
  }
  return spawners;
}

function updateDefenseAttackMode(delta) {
  updateDefenseAttackPlayer(delta);
  updateDefenseAttackSpawners(delta);
  updateDefenseAttackEnemies(delta);
  updateDefenseAttackBullets(delta);
  if (defenseAttackMouseDown) {
    updateDefenseEquipmentHold(delta);
  }
  defenseEnemies.forEach((enemy) => {
    if (enemy.hp <= 0 && !enemy.defeated) {
      enemy.defeated = true;
      if (enemy.type === "attackSpawner") {
        rewardDefenseAttackSpawner(enemy);
      } else {
        awardDefenseOreDrop();
      }
    }
  });
  defenseEnemies = defenseEnemies.filter((enemy) => !enemy.defeated);
  if (!defenseStoryPaused && !defenseStoryExitOpen && !defenseEnemies.some((enemy) => enemy.type === "attackSpawner")) {
    defenseStoryExitOpen = true;
  }
  if (defenseStoryExitOpen && !defenseStoryPaused && defensePlayer.alive && defensePlayer.x >= defenseWorldWidth - 210) {
    completeDefenseStoryLevel();
  }
  updateDefenseStats();
}

function updateDefenseAttackPlayer(delta) {
  if (!defensePlayer.alive) {
    defensePlayer.respawnTimer = Math.max(0, defensePlayer.respawnTimer - delta);
    if (defensePlayer.respawnTimer <= 0) {
      defensePlayer.alive = true;
      defensePlayer.hp = defensePlayer.maxHp;
      defensePlayer.invulnerableTimer = 1;
      defensePlayer.x = Math.max(70, defenseCameraX + 90);
      defensePlayer.y = defenseGroundY - 24;
      defensePlayer.vx = 0;
      defensePlayer.vy = 0;
      defensePlayer.onGround = true;
    }
    return;
  }
  defensePlayer.invulnerableTimer = Math.max(0, defensePlayer.invulnerableTimer - delta);
  const left = defenseKeys.has("ArrowLeft") || defenseKeys.has("a") || defenseKeys.has("A");
  const right = defenseKeys.has("ArrowRight") || defenseKeys.has("d") || defenseKeys.has("D");
  const jumpDown = defenseKeys.has("ArrowUp") || defenseKeys.has("w") || defenseKeys.has("W") || defenseKeys.has(" ");
  const jumpPressed = jumpDown && !defensePlayer.jumpHeld;
  defensePlayer.jumpHeld = jumpDown;
  defensePlayer.vx = (right ? 190 : 0) - (left ? 190 : 0);
  if (jumpPressed && defensePlayer.onGround) {
    defensePlayer.vy = -345;
    defensePlayer.onGround = false;
  }
  defensePlayer.vy += 980 * delta;
  defensePlayer.x += defensePlayer.vx * delta;
  defensePlayer.y += defensePlayer.vy * delta;
  defensePlayer.onGround = false;
  defenseAttackPlatforms.forEach((platform) => {
    const withinX = defensePlayer.x >= platform.x - defensePlayer.radius && defensePlayer.x <= platform.x + platform.width + defensePlayer.radius;
    const fallingOnto = defensePlayer.vy >= 0 && defensePlayer.y + defensePlayer.radius >= platform.y && defensePlayer.y + defensePlayer.radius <= platform.y + 24;
    if (withinX && fallingOnto) {
      defensePlayer.y = platform.y - defensePlayer.radius;
      defensePlayer.vy = 0;
      defensePlayer.onGround = true;
    }
  });
  defensePlayer.x = Math.max(40, Math.min(defenseWorldWidth - 40, defensePlayer.x));
  if (defensePlayer.y > defenseGroundY + 90) {
    defensePlayer.x = Math.max(70, defensePlayer.x - 120);
    defensePlayer.y = defenseGroundY - 24;
    defensePlayer.vy = 0;
    damageDefensePlayer(10);
  }
  defenseCameraX = Math.max(0, Math.min(defenseWorldWidth - defenseCanvas.width, defensePlayer.x - defenseCanvas.width * 0.38));
}

function scaleDefenseAttackEnemy(enemy) {
  const jungle = defenseStoryLevel >= 5;
  const higherClass = ["boostedTank", "catapult", "bomber", "summoner", "aircraftCarrier", "dragon", "dropper", "truck", "healer", "troopShooter", "troopCannon", "electroTrooper"].includes(enemy.type);
  const ramp = 1 + (defenseStoryLevel || 0) * 0.1;
  const sceneBoost = jungle ? (higherClass ? 1.12 : 1.08) : 1;
  enemy.hp = Math.max(1, Math.round(enemy.hp * defenseAttackEnemyNerf * ramp * sceneBoost));
  enemy.maxHp = enemy.hp;
  enemy.damage = Math.max(1, Math.round((enemy.damage || 4) * defenseAttackEnemyNerf * ramp * sceneBoost));
  if (enemy.bulletDamage) {
    enemy.bulletDamage = Math.max(1, Math.round(enemy.bulletDamage * defenseAttackEnemyNerf * ramp * sceneBoost));
  }
  if (jungle && higherClass) {
    enemy.speed = Math.round(enemy.speed * 1.12 * 100) / 100;
    if (enemy.summonCount) {
      enemy.summonCount += 1;
    }
    if (enemy.spawnsOnDeath) {
      enemy.spawnsOnDeath += 1;
    }
  }
  enemy.attackCooldown = 0.35;
}

function updateDefenseAttackSpawners(delta) {
  let aliveEnemies = defenseEnemies.filter((enemy) => enemy.type !== "attackSpawner" && !enemy.defeated).length;
  defenseEnemies.filter((enemy) => enemy.type === "attackSpawner").forEach((spawner) => {
    spawner.spawnCooldown = Math.max(0, spawner.spawnCooldown - delta);
    if (spawner.spawnCooldown > 0 || aliveEnemies >= defenseAttackEnemyCap) {
      return;
    }
    const tank = createDefenseEnemy(spawner.stageTier >= 10 ? "boostedTank" : "tank");
    const soldier = createDefenseEnemy(spawner.stageTier >= 6 ? "speedSoldier" : "soldier");
    [tank, soldier].forEach((enemy, index) => {
      enemy.x = spawner.x - 28 - index * 18;
      enemy.y = spawner.y + 18;
      enemy.attackMode = true;
      scaleDefenseAttackEnemy(enemy);
      defenseEnemies.push(enemy);
      aliveEnemies += 1;
    });
    if (spawner.stageTier >= 14 && aliveEnemies < defenseAttackEnemyCap) {
      const extra = createDefenseEnemy(spawner.stageTier >= 18 ? "bomber" : "catapult");
      extra.x = spawner.x - 48;
      extra.y = spawner.y + 18;
      extra.attackMode = true;
      scaleDefenseAttackEnemy(extra);
      defenseEnemies.push(extra);
      aliveEnemies += 1;
    }
    spawner.spawnCooldown = spawner.spawnInterval;
  });
}

function updateDefenseAttackEnemies(delta) {
  defenseEnemies.forEach((enemy) => {
    if (enemy.type === "attackSpawner") {
      return;
    }
    const isTank = enemy.type === "tank" || enemy.type === "boostedTank";
    const isArtillery = enemy.type === "catapult" || enemy.type === "bomber";
    const dist = Math.hypot(enemy.x - defensePlayer.x, enemy.y - defensePlayer.y);
    const shootRange = isTank ? 210 : isArtillery ? 280 : 0;
    if ((isTank || isArtillery) && defensePlayer.alive && dist <= shootRange) {
      if (dist > shootRange * 0.55) {
        const direction = Math.sign(defensePlayer.x - enemy.x) || -1;
        enemy.x += direction * enemy.speed * 0.4 * delta;
      }
      enemy.shootCooldown = Math.max(0, (enemy.shootCooldown || 0) - delta);
      if (enemy.shootCooldown <= 0) {
        const angle = Math.atan2(defensePlayer.y - enemy.y, defensePlayer.x - enemy.x);
        defenseBullets.push({
          x: enemy.x,
          y: enemy.y - 6,
          angle,
          speed: 300,
          damage: Math.max(1, Math.round(enemy.bulletDamage || 3)),
          team: "enemy"
        });
        enemy.shootCooldown = isTank ? 1.6 : 2.4;
      }
    } else {
      const direction = Math.sign(defensePlayer.x - enemy.x) || -1;
      enemy.x += direction * enemy.speed * 0.55 * delta;
      if (defensePlayer.alive && dist < enemy.radius + defensePlayer.radius) {
        enemy.attackCooldown = Math.max(0, (enemy.attackCooldown || 0) - delta);
        if (enemy.attackCooldown <= 0) {
          damageDefensePlayer(enemy.damage || 4);
          enemy.attackCooldown = 0.75;
        }
      }
    }
    enemy.vy = (enemy.vy || 0) + 980 * delta;
    enemy.y += enemy.vy * delta;
    defenseAttackPlatforms.forEach((platform) => {
      const withinX = enemy.x >= platform.x - enemy.radius && enemy.x <= platform.x + platform.width + enemy.radius;
      const fallingOnto = enemy.vy >= 0 && enemy.y + enemy.radius >= platform.y && enemy.y + enemy.radius <= platform.y + 26;
      if (withinX && fallingOnto) {
        enemy.y = platform.y - enemy.radius;
        enemy.vy = 0;
      }
    });
    if (enemy.y > defenseGroundY + 120) {
      enemy.hp = 0;
    }
  });
}

function updateDefenseAttackBullets(delta) {
  defenseBullets.forEach((bullet) => {
    bullet.x += Math.cos(bullet.angle) * bullet.speed * delta;
    bullet.y += Math.sin(bullet.angle) * bullet.speed * delta;
    if (bullet.team === "enemy") {
      if (!bullet.hit && defensePlayer.alive && Math.hypot(defensePlayer.x - bullet.x, defensePlayer.y - bullet.y) < defensePlayer.radius + 6) {
        bullet.hit = true;
        damageDefensePlayer(bullet.damage);
      }
      return;
    }
    defenseEnemies.forEach((enemy) => {
      if (bullet.hit || enemy.defeated || Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) > enemy.radius + 6) {
        return;
      }
      enemy.hp -= bullet.damage;
      if (bullet.chainCount) {
        chainDefenseEquipmentDamage(enemy, bullet);
      }
      if (bullet.pierceLeft > 0) {
        bullet.pierceLeft -= 1;
      } else {
        bullet.hit = true;
      }
    });
  });
  defenseBullets = defenseBullets.filter((bullet) => !bullet.hit && bullet.x > -80 && bullet.x < defenseWorldWidth + 80 && bullet.y > -80 && bullet.y < defenseCanvas.height + 80);
}

function updateDefenseEquipmentHold(delta) {
  const equipped = defensePlayer.equipment.equipped;
  if (equipped === "bow") {
    defenseAttackCharge = Math.min(3, defenseAttackCharge + delta);
    return;
  }
  shootDefenseEquipmentBullet();
}

function rewardDefenseAttackSpawner(spawner) {
  awardDefenseOreDrop(3);
  addDefenseMoney(35 + spawner.stageTier * 4);
  renderDefenseEquipmentPanel();
}

function awardDefenseOreDrop(multiplier = 1) {
  const roll = Math.random();
  const rarity = roll < defenseOreDropChances[0][1]
    ? "legendary"
    : roll < defenseOreDropChances[0][1] + defenseOreDropChances[1][1]
      ? "epic"
      : "rare";
  defensePlayer.equipment.ores[rarity] += 4 * multiplier;
}

const defenseEquipmentMilestones = {
  minigun: [4, 7, 10, 13],
  bow: [2, 4, 6, 8],
  electroGun: [3, 6, 9, 12, 15, 18, 21]
};

function getDefenseEquipmentUpgradeCost(type) {
  const level = (defensePlayer.equipment.levels[type] || 1) + 1;
  const milestone = defenseEquipmentMilestones[type].includes(level);
  return {
    level,
    rare: level * 10,
    epic: milestone ? level * 5 : 0,
    legendary: milestone ? level * 4 : 0,
    milestone
  };
}

function formatDefenseOreCost(cost) {
  const parts = [`${cost.rare} rare`];
  if (cost.epic) {
    parts.push(`${cost.epic} epic`);
  }
  if (cost.legendary) {
    parts.push(`${cost.legendary} legendary`);
  }
  return parts.join(" + ");
}

function equipDefenseEquipment(type) {
  if (!defensePlayer.equipment.owned[type]) {
    return;
  }
  defensePlayer.equipment.equipped = defensePlayer.equipment.equipped === type ? null : type;
  renderDefenseEquipmentPanel();
  drawDefenseGame();
}

function upgradeDefenseEquipment(type) {
  const equipment = defensePlayer.equipment;
  const definition = defenseEquipmentDefinitions[type];
  if (!equipment.owned[type] || equipment.levels[type] >= definition.maxLevel) {
    return;
  }
  const cost = getDefenseEquipmentUpgradeCost(type);
  const affordable = ["rare", "epic", "legendary"].every((rarity) => equipment.ores[rarity] >= cost[rarity]);
  if (!affordable && !defenseDemoMode) {
    return;
  }
  if (!defenseDemoMode) {
    ["rare", "epic", "legendary"].forEach((rarity) => {
      equipment.ores[rarity] -= cost[rarity];
    });
  }
  equipment.levels[type] += 1;
  renderDefenseEquipmentPanel();
}

function getDefenseEquipmentStats(type, level) {
  if (type === "minigun") {
    const maxLevel = defenseEquipmentDefinitions.minigun.maxLevel;
    const ratio = 1 / 3 + (1.2 - 1 / 3) * (Math.min(level, maxLevel) - 1) / (maxLevel - 1);
    const cooldown = Math.max(0.045, 0.16 - level * 0.007);
    return [
      ["Damage", Math.max(1, Math.round(getDefensePlayerAttackDamage() * ratio * 10) / 10)],
      ["Fire rate", `${Math.round(10 / cooldown) / 10} shots/s`],
      ["Damage vs rifle", `${Math.round(ratio * 100)}%`]
    ];
  }
  if (type === "bow") {
    const levelScale = 1 + (level - 1) * 0.25;
    const base = getDefensePlayerAttackDamage();
    const minDamage = Math.round(base * 1.2 * levelScale * 10) / 10;
    const maxDamage = Math.round(base * 6 * levelScale * 10) / 10;
    return [
      ["Damage", `${minDamage} - ${maxDamage} charged`],
      ["Pierce", `${1 + level} enemies (${Math.min(9, 1 + level + 4)} at full charge)`],
      ["Charge", "Hold fire, release to loose"]
    ];
  }
  return [
    ["Damage", Math.round((24 + level * 4.2) * 10) / 10],
    ["Chains", `${Math.min(7, 2 + Math.floor(level / 3))} enemies`],
    ["Fire rate", `${Math.round(10 / Math.max(0.16, 0.42 - level * 0.01)) / 10} shots/s`]
  ];
}

function renderDefenseEquipmentDetail(type, oreText) {
  const equipment = defensePlayer.equipment;
  const definition = defenseEquipmentDefinitions[type];
  const level = equipment.levels[type] || 1;
  const maxed = level >= definition.maxLevel;
  const cost = getDefenseEquipmentUpgradeCost(type);
  const stats = getDefenseEquipmentStats(type, level);
  const nextStats = maxed ? null : getDefenseEquipmentStats(type, level + 1);
  const milestoneNote = type === "electroGun"
    ? (cost.level >= definition.maxLevel ? "final mastery rank" : "+1 electro chain")
    : type === "bow"
      ? "+1 pierce"
      : "fire rate boost";
  defenseEquipmentPanel.innerHTML = `
    <strong>${definition.name}</strong>
    <small>${definition.rarity} | Lv ${level}/${definition.maxLevel}</small>
    <small>Ores: ${oreText}</small>
    <div class="equipment-detail">
      <span class="equipment-detail-icon equipment-icon" style="--equipment-color:${definition.color}">${definition.icon}</span>
      <div class="equipment-stats">
        ${stats.map(([label, value], index) => {
          const nextValue = nextStats ? nextStats[index][1] : null;
          const changed = nextStats && String(nextValue) !== String(value);
          return `<div class="equipment-stat-row"><span>${label}</span><strong>${value}${changed ? ` <em class="stat-up">&rarr; ${nextValue}</em>` : ""}</strong></div>`;
        }).join("")}
      </div>
      ${!maxed && cost.milestone ? `<small class="milestone-note">Level ${cost.level} is a significant upgrade (${milestoneNote}) - it also needs epic and legendary ore.</small>` : ""}
      <div class="equipment-detail-actions">
        <button type="button" data-equipment-upgrade="${type}" ${maxed ? "disabled" : ""}>${maxed ? "Max level reached" : `Upgrade to Lv ${cost.level} - ${formatDefenseOreCost(cost)}`}</button>
        <button type="button" data-equipment-equip="${type}">${equipment.equipped === type ? "Unequip" : "Equip"}</button>
        <button type="button" data-equipment-back="1">Back to equipment</button>
      </div>
    </div>`;
}

function renderDefenseEquipmentPanel() {
  if (!defenseEquipmentPanel || !defensePlayer?.equipment) {
    return;
  }
  const equipment = defensePlayer.equipment;
  const oreText = `Rare ${equipment.ores.rare} | Epic ${equipment.ores.epic} | Legendary ${equipment.ores.legendary}`;
  if (defenseEquipmentDetail && equipment.owned[defenseEquipmentDetail]) {
    renderDefenseEquipmentDetail(defenseEquipmentDetail, oreText);
    return;
  }
  defenseEquipmentDetail = null;
  defenseEquipmentPanel.innerHTML = `
    <strong>Equipment</strong>
    <small>Ores: ${oreText}</small>
    <small>Click an owned weapon to open its upgrade tab.</small>
    <div class="equipment-grid">
      ${Object.entries(defenseEquipmentDefinitions).map(([type, definition]) => {
        const owned = equipment.owned[type];
        const level = equipment.levels[type] || 1;
        return `
          <button type="button" class="equipment-card ${equipment.equipped === type ? "active" : ""}" data-equipment-open="${type}" ${owned ? "" : "disabled"}>
            <span class="equipment-icon" style="--equipment-color:${definition.color}">${definition.icon}</span>
            <strong>${definition.name}</strong>
            <small>${definition.rarity} | Lv ${level}/${definition.maxLevel}</small>
            <small>${owned ? "Open upgrade tab" : "Locked - earn it in story mode"}</small>
          </button>`;
      }).join("")}
    </div>`;
}


function updateDefensePlayer(delta) {
  if (!defensePlayer.alive) {
    defensePlayer.respawnTimer = Math.max(0, defensePlayer.respawnTimer - delta);
    if (defensePlayer.respawnTimer <= 0) {
      defensePlayer.alive = true;
      defensePlayer.hp = defensePlayer.maxHp;
      defensePlayer.invulnerableTimer = 1.25;
      defensePlayer.x = defenseWorldWidth - 285;
      defensePlayer.y = defenseGroundY - 28;
    }
    return;
  }
  defensePlayer.surgeCooldown = Math.max(0, defensePlayer.surgeCooldown - delta);

  const revengeRegen = getDefenseRevengeRegen(defensePlayer.revengeLevel || 0);
  if (revengeRegen > 0 && defensePlayer.hp < defensePlayer.maxHp) {
    defensePlayer.hp = Math.min(defensePlayer.maxHp, defensePlayer.hp + defensePlayer.maxHp * revengeRegen * delta);
  }

  defensePlayer.invulnerableTimer = Math.max(0, defensePlayer.invulnerableTimer - delta);
  let dx = 0;
  let dy = 0;
  if (defenseKeys.has("ArrowLeft") || defenseKeys.has("a") || defenseKeys.has("A")) {
    dx -= 1;
  }
  if (defenseKeys.has("ArrowRight") || defenseKeys.has("d") || defenseKeys.has("D")) {
    dx += 1;
  }
  if (defenseKeys.has("ArrowUp") || defenseKeys.has("w") || defenseKeys.has("W")) {
    dy -= 1;
  }
  if (defenseKeys.has("ArrowDown") || defenseKeys.has("s") || defenseKeys.has("S")) {
    dy += 1;
  }

  if (dx !== 0 || dy !== 0) {
    const length = Math.hypot(dx, dy);
    defensePlayer.x += (dx / length) * defensePlayer.speed * delta;
    defensePlayer.y += (dy / length) * defensePlayer.speed * delta;
  }

  defensePlayer.x = Math.max(40, Math.min(defenseWorldWidth - 40, defensePlayer.x));
  defensePlayer.y = Math.max(80, Math.min(defenseGroundY - 18, defensePlayer.y));

  const targetCamera = Math.max(0, Math.min(defenseWorldWidth - defenseCanvas.width, defensePlayer.x - defenseCanvas.width * 0.55));
  defenseCameraX += (targetCamera - defenseCameraX) * Math.min(1, delta * 6);
}

function updateDefenseSpawns(delta) {
  if (defenseState !== "playing" || defenseSpawnQueue.length === 0) {
    return;
  }
  defenseSpawnTimer -= delta;
  if (defenseSpawnTimer > 0) {
    return;
  }
  const type = defenseSpawnQueue.shift();
  defenseEnemies.push(createDefenseEnemy(type));
  if (type === "soldier") {
    defenseWaveSoldiersDeployed += 1;
  }
  const lateWaveSpeed = defenseWave >= 5 ? Math.pow(0.94, defenseWave - 4) : 1;
  const baseDelay = isDefenseAirType(type) ? 1.2 : 0.85;
  defenseSpawnTimer = Math.max(0.28, baseDelay * lateWaveSpeed);
}

function createDefenseEnemy(type) {
  const stats = getDefenseEnemyStats(type, defenseWave);
  const base = {
    type,
    x: -40,
    y: type === "healer" ? defenseGroundY - 46 : type === "plane" || type === "helicopter" || type === "dragon" || type === "dropper" || type === "aircraftCarrier" ? 86 + Math.random() * 86 : defenseGroundY - 18 - Math.random() * 28,
    attackCooldown: 0.8 + Math.random() * 0.5,
    shootCooldown: 0.7 + Math.random() * 0.7
  };
  return { ...base, ...stats };
}

function getDefenseEnemyStats(type, wave = 1) {
  const scale = Math.pow(1.05, Math.max(0, wave - 1));
  const capBasicTroop = (stats) => {
    if (wave <= 10) {
      return stats;
    }
    const cap = (value) => Math.round(value * 1.5);
    return {
      ...stats,
      hp: cap(stats.hp),
      maxHp: cap(stats.maxHp),
      damage: Math.round(stats.damage * 1.5),
      bulletDamage: stats.bulletDamage ? Math.round(stats.bulletDamage * 1.5) : stats.bulletDamage,
      range: stats.range ? Math.round(stats.range * 1.1) : stats.range
    };
  };
  if (type === "speedSoldier") {
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(soldier.maxHp * 1.3);
    return capBasicTroop({ ...soldier, hp, maxHp: hp, speed: soldier.speed * 1.5, radius: 12, reward: 7, damage: Math.round(soldier.damage * 1.5), bulletDamage: soldier.bulletDamage });
  }
  if (type === "zombie") {
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(soldier.maxHp * 1.4);
    return capBasicTroop({ ...soldier, hp, maxHp: hp, speed: soldier.speed * 1.35, radius: 12, reward: 8, damage: Math.round(soldier.damage * 1.4), bulletDamage: Math.round(soldier.bulletDamage * 1.4), revives: 1 });
  }
  if (type === "wallBreaker") {
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(soldier.maxHp * 0.9);
    return capBasicTroop({ hp, maxHp: hp, speed: soldier.speed * 1.75, radius: 10, reward: 8, damage: soldier.damage, blastDamage: soldier.damage, blastRadius: 42 });
  }
  if (type === "tank") {
    const hp = Math.round(18 * scale + wave * 3);
    return capBasicTroop({ hp, maxHp: hp, speed: 32, radius: 19, reward: 11, damage: 10 + Math.floor(wave / 2), bulletDamage: 5 + Math.floor(wave / 4), range: 315 });
  }
  if (type === "boostedTank") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 1.4);
    return { ...tank, hp, maxHp: hp, speed: tank.speed * 1.4, radius: 21, reward: 17, damage: Math.round(tank.damage * 1.4), bulletDamage: Math.round(tank.bulletDamage * 1.4), range: tank.range + 30 };
  }
  if (type === "catapult") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 5);
    return { hp, maxHp: hp, speed: Math.max(15, tank.speed * 0.45), radius: 25, reward: 28, damage: Math.round(tank.damage * 0.8), bulletDamage: Math.round(tank.bulletDamage * 2.6), range: 560, splashRadius: 86, fireRock: true };
  }
  if (type === "summoner") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 1.5);
    return { hp, maxHp: hp, speed: tank.speed * 0.72, radius: 23, reward: 24, damage: tank.damage, bulletDamage: Math.max(1, Math.round(tank.bulletDamage * 0.65)), range: 245, summonCooldown: 4, summonInterval: 10, summonCount: 5 };
  }
  if (type === "bomber") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 1.15);
    return { hp, maxHp: hp, speed: tank.speed * 0.86, radius: 20, reward: 18, damage: Math.round(tank.damage * 0.8), bulletDamage: Math.round(tank.bulletDamage * 1.8), range: 360, splashRadius: 58, bomber: true };
  }
  if (type === "healer") {
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(soldier.maxHp * 1.7);
    return { hp, maxHp: hp, speed: soldier.speed * 0.72, radius: 13, reward: 12, damage: soldier.damage, healPerSecond: 5 + Math.max(0, wave - 1) * 2.5, healRange: 165 };
  }
  if (type === "troopShooter") {
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(soldier.maxHp * 1.2);
    return { hp, maxHp: hp, speed: soldier.speed * 0.8, radius: 14, reward: 15, damage: soldier.damage, bulletDamage: Math.max(1, Math.round(soldier.bulletDamage * 1.2)), range: 750, spreadShots: 3, deathNote: "Summons 6 troops on death - 3 of them are tanks" };
  }
  if (type === "troopCannon") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 1.4);
    return { hp, maxHp: hp, speed: Math.round(Math.max(14, tank.speed * 0.5) * 1.1 * 100) / 100, radius: 22, reward: 20, damage: Math.round(tank.damage * 0.5), range: 600, launchesTroops: true, impactDamage: 100 };
  }
  if (type === "electroTrooper") {
    const tank = getDefenseEnemyStats("tank", wave);
    const soldier = getDefenseEnemyStats("soldier", wave);
    const hp = Math.round(tank.maxHp * 1.5);
    return { hp, maxHp: hp, speed: soldier.speed, radius: 15, reward: 18, damage: soldier.damage, bulletDamage: Math.round(60 * Math.pow(1.02, Math.max(0, wave - 1))), range: 420, chainShot: true, chainNote: "Electro bullet chains up to 5 defenses including walls, about 60 damage per chain" };
  }
  if (type === "aircraftCarrier") {
    const tank = getDefenseEnemyStats("tank", wave);
    const hp = Math.round(tank.maxHp * 3.2);
    return { hp, maxHp: hp, speed: Math.max(22, tank.speed * 0.55), radius: 26, reward: 26, damage: Math.round(tank.damage * 0.75), bulletDamage: Math.round(tank.bulletDamage * 1.25), range: 380, summonCooldown: 0, summonInterval: 8, summonCount: 2, carrier: true };
  }
  if (type === "plane") {
    const hp = Math.round(7 * scale + wave * 1.2);
    return capBasicTroop({ hp, maxHp: hp, speed: 98, radius: 16, reward: 12, damage: 12 + Math.floor(wave / 2) });
  }
  if (type === "helicopter") {
    const hp = Math.round(12 * scale + wave * 2);
    return capBasicTroop({ hp, maxHp: hp, speed: 58, radius: 18, reward: 13, damage: 14 + Math.floor(wave / 2), bulletDamage: 4 + Math.floor(wave / 6), range: 260 });
  }
  if (type === "truck") {
    const hp = Math.round(22 * scale + wave * 3);
    return capBasicTroop({ hp, maxHp: hp, speed: 28, radius: 22, reward: 12, damage: 11 + Math.floor(wave / 2), bulletDamage: 4 + Math.floor(wave / 6), range: 230, spawnsOnDeath: 5 });
  }
  if (type === "dragon") {
    const hp = Math.round((6 + defenseUpgrades.antiAirDamageBonus) * 10);
    return { hp, maxHp: hp, speed: 76, radius: 24, reward: 24, damage: 22 + Math.floor(wave / 2), bulletDamage: 6 + Math.floor(wave / 5), range: 285 };
  }
  if (type === "dropper") {
    const hp = Math.round((6 + defenseUpgrades.antiAirDamageBonus) * 15 * 1.4);
    return { hp, maxHp: hp, speed: 38, radius: 25, reward: 22, damage: 13 + Math.floor(wave / 2), bulletDamage: 5 + Math.floor(wave / 5), range: 275, spawnsOnDeath: 5 };
  }
  const hp = Math.round(7 * scale + wave * 1.6);
  return { hp, maxHp: hp, speed: 56, radius: 11, reward: 6, damage: 6 + Math.floor(wave / 3), bulletDamage: 3 + Math.floor(wave / 6), range: 255 };
}

function updateDefenseBuildings(delta) {
  defenseBuildings.forEach((building) => {
    building.repairGlow = Math.max(0, (building.repairGlow || 0) - delta);
    if (building.phoenixActive) {
      building.phoenixTimer = Math.max(0, building.phoenixTimer - delta);
      if (building.phoenixTimer <= 0) {
        building.phoenixActive = false;
        building.phoenixSpent = true;
        building.hp = 0;
      }
    }
  });

  defenseBuildings.forEach((building) => {
    if (building.hp <= 0) {
      return;
    }
    if (building.type === "wall") {
      return;
    }
    if (building.type === "builder") {
      repairDefenseBuildingsFromBuilder(building, delta);
      return;
    }
    if (building.type === "spell") {
      return;
    }
    if (building.type === "freezeSpell") {
      updateDefenseMergedSpellTower(building, delta);
      return;
    }
    if (building.type === "infernoSingle" || building.type === "infernoMulti") {
      updateDefenseInfernoTower(building, delta);
      return;
    }
    if (building.type === "trap" || building.type === "giantBomb" || building.type === "pushTrap") {
      if (building.armed === false) {
        return;
      }
      const giant = building.type === "giantBomb";
      const isPush = building.type === "pushTrap";
      const target = defenseEnemies.find((enemy) => !isDefenseAirEnemy(enemy) && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= (giant ? 44 : isPush ? 46 : 34));
      if (target) {
        if (isPush) {
          const pushDistance = getDefensePushTrapDistance();
          defenseEnemies.forEach((enemy) => {
            if (!isDefenseAirEnemy(enemy) && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= 130) {
              enemy.x = Math.max(-40, enemy.x - pushDistance);
              enemy.electroFlash = 0.3;
            }
          });
          defenseAirBursts.push({ x: building.x, y: building.y, radius: 90, life: 0.35, maxLife: 0.35 });
        } else {
          const trapRadius = (giant ? 135 : 104) + defenseUpgrades.trapRadiusBonus;
          const trapDamage = getDefenseBuildingDamage((9 + defenseUpgrades.trapDamageBonus) * (giant ? 1.4 : 1));
          defenseEnemies.forEach((enemy) => {
            if (!isDefenseAirEnemy(enemy) && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= trapRadius) {
              enemy.hp -= trapDamage;
            }
          });
        }
        building.armed = false;
      }
      return;
    }
    if (building.type === "airbomb") {
      if ((building.rearmTimer || 0) > 0) {
        building.rearmTimer = Math.max(0, building.rearmTimer - delta);
        return;
      }
      const balloonY = building.y - 56;
      const xRange = 210 + defenseUpgrades.airbombRangeBonus;
      const target = defenseEnemies.find((enemy) => isDefenseAirEnemy(enemy) && Math.abs(enemy.x - building.x) <= xRange);
      if (target) {
        defenseEnemies.forEach((enemy) => {
          if (isDefenseAirEnemy(enemy) && Math.abs(enemy.x - building.x) <= xRange) {
            enemy.hp -= getDefenseAirbombDamage() * 2;
          }
        });
        defenseAirBursts.push({ x: building.x, y: balloonY, radius: 150, life: 0.6, maxLife: 0.6 });
        building.rearmTimer = 6;
      }
      return;
    }
    if (building.type === "gigaTesla") {
      building.cooldown = Math.max(0, building.cooldown - delta);
      if (building.cooldown <= 0) {
        const target = findDefenseBuildingTarget(building);
        if (target) {
          fireDefenseGigaTesla(building, target);
          building.cooldown = building.fireRate;
        }
      }
      return;
    }
    if (building.type === "superWizard") {
      building.cooldown = Math.max(0, building.cooldown - delta);
      if (building.cooldown <= 0) {
        const target = findDefenseBuildingTarget(building);
        if (target) {
          fireDefenseSuperWizard(building, target);
          building.cooldown = building.fireRate;
        }
      }
      return;
    }
    if (building.type === "gigaInferno") {
      const targets = defenseEnemies
        .filter((enemy) => !enemy.defeated && !enemy.crashing && enemy.hp > 0 && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= building.range)
        .sort((a, b) => b.hp - a.hp)
        .slice(0, building.maxTargets || 5);
      building.gigaTargets = targets;
      if (targets.length) {
        const level = 1 + (defenseUpgradeLevels.gigaInferno || 0);
        const percentPerSecond = 0.02 + (0.03 * (level - 1)) / 9;
        const flatPerSecond = 50 + (25 * (level - 1)) / 9;
        targets.forEach((target) => {
          target.hp -= (target.maxHp * percentPerSecond + flatPerSecond) * getDefensePowerUpMultiplier(building) * delta;
          target.electroFlash = 0.1;
        });
      }
      return;
    }
    if (building.type === "ypj20") {
      building.cooldown = Math.max(0, building.cooldown - delta);
      if (building.cooldown <= 0) {
        const targets = defenseEnemies
          .filter((enemy) => !enemy.defeated && !enemy.crashing && enemy.hp > 0 && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= building.range)
          .sort((a, b) => b.maxHp - a.maxHp)
          .slice(0, 3);
        if (targets.length) {
          const beamMultiplier = getDefenseYpjBeamMultiplier();
          const beamColor = defenseYpjBeamColors[Math.floor(Math.random() * defenseYpjBeamColors.length)];
          building.beamColor = beamColor;
          targets.forEach((target) => {
            const beamDamage = (target.maxHp * 0.33 + 500) * beamMultiplier * 0.7 * getDefensePowerUpMultiplier(building);
            target.hp -= beamDamage;
            target.electroFlash = 0.4;
            defenseEnemies.forEach((other) => {
              if (other !== target && !other.defeated && !other.crashing && other.hp > 0) {
                const distance = Math.hypot(other.x - target.x, other.y - target.y);
                if (distance <= 60) {
                  other.hp -= beamDamage * 0.6;
                  other.electroFlash = 0.3;
                } else if (distance <= 120) {
                  other.hp -= beamDamage * 0.3;
                  other.electroFlash = 0.3;
                }
              }
            });
            defenseBeams.push({ x1: building.x, y1: building.y - 30, x2: target.x, y2: target.y, life: 0.45, maxLife: 0.45, color: beamColor });
          });
          defenseScreenShake = 0.35;
          defenseSkyDarken = 0.7;
          defenseAirBursts.push({ x: building.x, y: building.y - 30, radius: 60, life: 0.4, maxLife: 0.4, electro: true });
          building.cooldown = building.fireRate;
        }
      }
      return;
    }
    if (building.type === "troopLauncher") {
      building.cooldown = Math.max(0, building.cooldown - delta);
      if (building.cooldown <= 0) {
        const target = findDefenseBuildingTarget(building);
        if (target) {
          launchDefenseTroops(building, target);
          building.cooldown = building.fireRate;
        }
      }
      return;
    }
    if (building.type === "camp" || building.type === "tankCamp" || building.type === "airfield") {
      building.cooldown = Math.max(0, building.cooldown - delta);
      if (building.cooldown <= 0 && canSpawnFromDefenseCamp(building)) {
        defenseFriendlyUnits.push(createDefenseFriendlyUnit(building));
        building.cooldown = building.spawnRate;
      }
      return;
    }
    building.cooldown = Math.max(0, building.cooldown - delta);
    if (building.type === "multiMortar" && building.burstShotsRemaining > 0) {
      fireDefenseMultiMortarShot(building, delta);
      return;
    }
    if (building.cooldown > 0) {
      return;
    }
    const target = findDefenseBuildingTarget(building);
    if (!target) {
      return;
    }
    if (building.type === "multiMortar") {
      building.burstShotsRemaining = 3;
      building.burstDelay = 0;
      fireDefenseMultiMortarShot(building, delta);
      return;
    }
    building.aimAngle = Math.atan2(target.y - building.y, target.x - building.x);
    createDefenseProjectiles(building, target).forEach((bullet) => defenseBullets.push(bullet));
    building.cooldown = building.fireRate / (getDefenseRageSpeedMultiplier(building) * getDefensePhoenixSpeedMultiplier(building) * getDefensePhoenixBaseMultiplier(building));
  });
}

function updateDefenseInfernoTower(building, delta) {
  const effectiveRange = getDefenseEffectiveRange(building);
  if (building.type === "infernoMulti") {
    const targets = defenseEnemies
      .filter((enemy) => !enemy.defeated && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= effectiveRange)
      .sort((a, b) => b.x - a.x)
      .slice(0, getDefenseInfernoMultiTargetCount());
    building.active = targets.length > 0;
    targets.forEach((enemy) => {
      enemy.hp -= building.damage * getDefensePowerUpMultiplier(building) * getDefenseRageDamageMultiplier(building) * getDefensePhoenixDamageMultiplier(building) * getDefensePhoenixBaseMultiplier(building) * delta;
    });
    return;
  }

  if (!building.infernoTarget || building.infernoTarget.defeated || building.infernoTarget.hp <= 0 || Math.hypot(building.infernoTarget.x - building.x, building.infernoTarget.y - building.y) > effectiveRange) {
    building.infernoTarget = findDefenseBuildingTarget(building);
    building.charge = 0;
  }
  if (!building.infernoTarget) {
    building.active = false;
    return;
  }
  building.active = true;
  building.aimAngle = Math.atan2(building.infernoTarget.y - building.y, building.infernoTarget.x - building.x);
  building.charge = Math.min(3, (building.charge || 0) + delta * getDefenseRageSpeedMultiplier(building) * getDefensePhoenixSpeedMultiplier(building) * getDefensePhoenixBaseMultiplier(building));
  const chargeRatio = building.charge / 3;
  building.infernoTarget.hp -= building.damage * chargeRatio * getDefensePowerUpMultiplier(building) * getDefenseRageDamageMultiplier(building) * getDefensePhoenixDamageMultiplier(building) * getDefensePhoenixBaseMultiplier(building) * delta;
}

function updateDefenseMergedSpellTower(building, delta) {
  building.cooldown = Math.max(0, building.cooldown - delta);
  building.spellReadyRatio = 1 - Math.min(1, building.cooldown / Math.max(0.1, building.fireRate || 15));
  if (building.cooldown > 0) {
    return;
  }
  const target = findDefenseBuildingTarget(building);
  if (!target) {
    return;
  }
  building.aimAngle = Math.atan2(target.y - building.y, target.x - building.x);
  defenseBullets.push(createDefenseProjectile(building, target));
  building.cooldown = building.fireRate / (getDefenseRageSpeedMultiplier(building) * getDefensePhoenixSpeedMultiplier(building) * getDefensePhoenixBaseMultiplier(building));
  building.spellReadyRatio = 0;
}

function repairDefenseBuildingsFromBuilder(builder, delta) {
  const target = defenseBuildings
    .filter((building) => (
      building !== builder &&
      building.type !== "trap" &&
      building.hp > 0 &&
      building.hp < building.maxHp &&
      Math.hypot(building.x - builder.x, building.y - builder.y) <= builder.range
    ))
    .sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
  if (!target) {
    return;
  }
  target.hp = Math.min(target.maxHp, target.hp + builder.repairRate * getDefensePowerUpMultiplier(builder) * (defenseHealingNerf ? 0.6 : 1) * delta);
  target.repairGlow = 0.16;
}

function findDefenseBuildingTarget(building) {
  const range = getDefenseEffectiveRange(building);
  if (building.type === "eagle" || building.type === "infernoArtillery") {
    if (building.type === "eagle" && defenseWaveElapsed < 10) {
      return null;
    }
    return defenseEnemies
      .filter((enemy) => !enemy.defeated && !enemy.crashing)
      .sort((a, b) => b.hp - a.hp || b.x - a.x)[0];
  }
  if (building.type === "monolith") {
    return defenseEnemies
      .filter((enemy) => !enemy.crashing && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range)
      .sort((a, b) => b.hp - a.hp || b.x - a.x)[0];
  }
  if (building.type === "infernoSingle") {
    return defenseEnemies
      .filter((enemy) => !enemy.crashing && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range)
      .sort((a, b) => b.hp - a.hp || b.x - a.x)[0];
  }
  if (building.type === "freezeSpell") {
    return getDefenseMergedSpellClusterTarget(building, range);
  }
  if (building.type === "xbow") {
    const candidates = defenseEnemies.filter((enemy) => (
      !enemy.defeated &&
      enemy.hp > 0 &&
      Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range &&
      (!building.groundOnly || !isDefenseAirEnemy(enemy))
    ));
    const viable = candidates.filter((enemy) => !willDefenseXbowKill(enemy));
    const pool = viable.length ? viable : candidates;
    return pool.sort((a, b) => b.x - a.x)[0];
  }

  return defenseEnemies
    .filter((enemy) => (
      !enemy.crashing &&
      Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range &&
      (building.type !== "antiAir" || isDefenseAirEnemy(enemy)) &&
      (building.type !== "airbomb" || isDefenseAirEnemy(enemy)) &&
      (building.type !== "airburst" || isDefenseAirEnemy(enemy)) &&
      (building.type !== "xbow" || !building.groundOnly || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "cannon" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "grenade" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "minigun" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "troopLauncher" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "ricochet" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "mortar" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "lavaLauncher" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "multiMortar" || !isDefenseAirEnemy(enemy)) &&
      (building.type !== "freezeSpell" || !isDefenseAirEnemy(enemy))
    ))
    .sort((a, b) => b.x - a.x)[0];
}

function willDefenseXbowKill(enemy) {
  const healerNearby = defenseEnemies.some((other) => (
    other !== enemy &&
    other.type === "healer" &&
    !other.defeated &&
    other.hp > 0 &&
    Math.hypot(other.x - enemy.x, other.y - enemy.y) <= 200
  ));
  if (healerNearby) {
    return false;
  }
  const incoming = defenseBullets.reduce((sum, bullet) => (
    bullet.projectileType === "xbow" && bullet.target === enemy ? sum + (bullet.damage || 0) : sum
  ), 0);
  return enemy.hp - incoming <= 0;
}

function getDefenseMergedSpellClusterTarget(building, range) {
  const radius = building.splashRadius || 120;
  const candidates = defenseEnemies
    .filter((enemy) => (
      enemy.hp > 0 &&
      !enemy.defeated &&
      !isDefenseAirEnemy(enemy) &&
      Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range
    ))
    .map((enemy) => ({
      enemy,
      count: defenseEnemies.filter((other) => (
        other.hp > 0 &&
        !other.defeated &&
        !isDefenseAirEnemy(other) &&
        Math.hypot(other.x - enemy.x, other.y - enemy.y) <= radius
      )).length
    }))
    .filter((item) => item.count >= 5)
    .sort((a, b) => b.count - a.count || b.enemy.x - a.enemy.x);
  return candidates[0]?.enemy || null;
}

function fireDefenseMultiMortarShot(building, delta) {
  building.burstDelay = Math.max(0, (building.burstDelay || 0) - delta);
  if (building.burstDelay > 0) {
    return;
  }
  const target = findDefenseBuildingTarget(building);
  if (!target) {
    building.burstShotsRemaining = 0;
    building.cooldown = 0.4;
    return;
  }
  building.aimAngle = Math.atan2(target.y - building.y, target.x - building.x);
  defenseBullets.push(createDefenseProjectile(building, target));
  building.burstShotsRemaining -= 1;
  building.burstDelay = 0.2;
  if (building.burstShotsRemaining <= 0) {
    building.cooldown = building.fireRate / (getDefenseRageSpeedMultiplier(building) * getDefensePhoenixSpeedMultiplier(building) * getDefensePhoenixBaseMultiplier(building));
  }
}

function createDefenseProjectiles(building, target) {
  if (building.type === "infernoArtillery") {
    const shotCount = getDefenseInfernoArtilleryShotCount();
    const targets = getDefenseInfernoArtilleryTargets(shotCount);
    const spreadSpacing = getDefenseInfernoArtillerySplashRadius() * 1.8;
    const spreadAngle = shotCount <= 1 ? 0 : 0.16;
    const center = (shotCount - 1) / 2;
    return Array.from({ length: shotCount }, (_, index) => (
      createDefenseProjectile(building, targets[index] || target, (index - center) * spreadAngle, index * 0.14, targets[index] ? 0 : (index - center) * spreadSpacing)
    ));
  }
  if (building.type === "rapidMissile") {
    const shotCount = building.shotCount || getDefenseRapidMissileShotCount();
    const spreadStep = shotCount <= 1 ? 0 : 0.18;
    const startOffset = -spreadStep * (shotCount - 1) / 2;
    const targets = getDefenseRapidMissileTargets(building, target, shotCount);
    return Array.from({ length: shotCount }, (_, index) => (
      createDefenseProjectile(building, targets[index] || target, startOffset + index * spreadStep, index * 0.08)
    ));
  }
  return [createDefenseProjectile(building, target)];
}

function getDefenseInfernoArtilleryTargets(count) {
  const minSpacing = getDefenseInfernoArtillerySplashRadius() * 1.55;
  const selected = [];
  defenseEnemies
    .filter((enemy) => enemy.hp > 0 && !enemy.defeated)
    .sort((a, b) => b.hp - a.hp || b.x - a.x)
    .forEach((enemy) => {
      if (selected.length < count && selected.every((target) => Math.hypot(target.x - enemy.x, target.y - enemy.y) >= minSpacing)) {
        selected.push(enemy);
      }
    });
  return selected;
}

function getDefenseRapidMissileTargets(building, primaryTarget, shotCount) {
  const range = getDefenseEffectiveRange(building);
  const targets = defenseEnemies
    .filter((enemy) => enemy.hp > 0 && !enemy.defeated && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= range)
    .sort((a, b) => b.hp - a.hp || b.x - a.x)
    .slice(0, shotCount);
  if (!targets.includes(primaryTarget)) {
    targets.unshift(primaryTarget);
  }
  while (targets.length < shotCount) {
    targets.push(primaryTarget);
  }
  return targets.slice(0, shotCount);
}

function findDefenseRapidMissileRetarget(bullet) {
  return defenseEnemies
    .filter((enemy) => enemy.hp > 0 && !enemy.defeated)
    .sort((a, b) => Math.hypot(a.x - bullet.x, a.y - bullet.y) - Math.hypot(b.x - bullet.x, b.y - bullet.y))[0];
}

function findDefenseInfernoArtilleryRetarget() {
  return defenseEnemies
    .filter((enemy) => enemy.hp > 0 && !enemy.defeated)
    .sort((a, b) => b.hp - a.hp || b.x - a.x)[0];
}

function createDefenseProjectile(building, target, angleOffset = 0, launchDelay = 0, impactOffsetX = 0) {
  const impactX = Math.max(24, Math.min(defenseWorldWidth - 24, target.x + impactOffsetX));
  const impactY = building.type === "infernoArtillery" && isDefenseAirEnemy(target) ? target.y : building.type === "multiMortar" || building.type === "infernoArtillery" ? Math.min(target.y, defenseGroundY - 8) : target.y;
  const fromSky = building.type === "eagle";
  const launchX = fromSky ? target.x : building.x;
  const launchY = fromSky ? 6 : building.type === "freezeSpell" ? building.y - 48 : building.type === "wizard" ? building.y - 94 : building.type === "superWizard" ? building.y - 160 : building.y;
  const angle = building.type === "rapidMissile" ? -Math.PI / 2 + angleOffset : Math.atan2(impactY - launchY, impactX - launchX) + angleOffset;
  const chosenAbility = getDefenseChosenAbility(building);
  const powerMultiplier = getDefensePowerUpMultiplier(building) * getDefenseRageDamageMultiplier(building) * getDefensePhoenixDamageMultiplier(building) * getDefensePhoenixBaseMultiplier(building);
  return {
    x: launchX,
    y: launchY,
    startX: launchX,
    startY: launchY,
    startDistance: Math.max(1, Math.hypot(impactX - launchX, impactY - launchY)),
    traveled: 0,
    target,
    impactX,
    impactY,
    impactOffsetX,
    angle,
    fixedImpact: building.type === "multiMortar" || building.type === "freezeSpell" || building.type === "infernoArtillery",
    ricochet: building.type === "ricochet",
    remainingBounces: building.bounces || 0,
    ricochetHits: [],
    homing: building.type === "rapidMissile" || building.type === "infernoArtillery",
    turnRate: building.type === "rapidMissile" ? 4.8 : building.type === "infernoArtillery" ? 2.6 : 0,
    launchDelay,
    projectileType: building.type,
    speed: building.type === "eagle" ? 470 : building.type === "freezeSpell" ? 360 : building.type === "infernoArtillery" ? 420 : building.type === "monolith" ? 360 : building.type === "missile" || building.type === "rapidMissile" ? 430 : building.type === "cannon" || building.type === "grenade" || building.type === "mortar" || building.type === "multiMortar" ? 285 : building.type === "ricochet" ? 390 : building.type === "antiAir" || building.type === "airbomb" || building.type === "airburst" ? 344 : building.type === "xbow" ? 620 : building.type === "scattershot" ? 1500 : 430,
    damage: building.type === "freezeSpell" && (building.mode || "freeze") === "freeze" ? 0 : building.damage ? Math.round(building.damage * powerMultiplier * (building.type === "eagle" && defenseHoneyLevel > 0 ? 0.7 : 1) * 10) / 10 : building.damage,
    percentDamage: building.percentDamage ? building.percentDamage * powerMultiplier : building.percentDamage,
    minHealthDamage: building.minHealthDamage ? building.minHealthDamage * powerMultiplier : building.minHealthDamage,
    splash: building.splashRadius ?? (building.type === "eagle" ? Math.round(105 * 1.3) : building.type === "cannon" ? 46 : building.type === "grenade" ? 82 : building.type === "mortar" || building.type === "multiMortar" ? 78 : building.type === "missile" ? 117 : building.type === "airbomb" ? 46 : 0),
    frostLevel: chosenAbility === "frost" ? building.frostLevel || 0 : 0,
    buildingElectroLevel: chosenAbility === "electro" ? building.electroLevel || 0 : 0,
    chainDamage: chosenAbility === "electro" && building.damage ? Math.round(building.damage * powerMultiplier * 0.3 * 10) / 10 : 0,
    airSplash: building.type === "airbomb" || building.type === "airburst",
    splashScale: building.splashScale ?? 1,
    allSplash: building.type === "missile" || building.type === "eagle" || building.type === "infernoArtillery" || building.type === "freezeSpell" || building.type === "scattershot",
    arc: building.type === "cannon" || building.type === "grenade" || building.type === "mortar" || building.type === "multiMortar" || building.type === "freezeSpell" || building.type === "infernoArtillery" || building.type === "lavaLauncher" || building.type === "scattershot",
    arcHeight: building.type === "infernoArtillery" ? 285 : building.type === "lavaLauncher" ? 260 : building.type === "freezeSpell" ? 145 : building.type === "mortar" || building.type === "multiMortar" ? 220 : building.type === "scattershot" ? 55 : building.type === "grenade" ? 74 : 38,
    fireZone: building.type === "grenade" || building.type === "missile" || building.type === "infernoArtillery" || building.type === "lavaLauncher",
    fireDamageScale: building.type === "missile" || building.type === "lavaLauncher" ? 0.05 : 0.1,
    firePercentDamage: building.type === "infernoArtillery" ? 0.03 : 0,
    fireZoneLife: building.type === "lavaLauncher" ? 25 : building.type === "infernoArtillery" ? 5 : 3,
    infernoArtillery: building.type === "infernoArtillery",
    lavaLauncher: building.type === "lavaLauncher",
    poisonZone: building.type === "eagle",
    mergedSpellMode: building.type === "freezeSpell" ? building.mode || "freeze" : null,
    freezeDuration: building.type === "freezeSpell" ? getDefenseMergedSpellFreezeDuration() : 0,
    flipSpell: building.type === "freezeSpell",
    team: "defense"
  };
}

function isDefensePowerUpActive(building) {
  if (!building || !building.maxHp || building.type === "trap") {
    return false;
  }
  return (defenseUpgradeLevels[building.type] || 0) >= getDefenseUpgradeMaxLevel(building.type) && building.hp <= building.maxHp * 0.5;
}

function getDefensePowerUpMultiplier(building) {
  return isDefensePowerUpActive(building) ? 1.3 : 1;
}

function getDefensePhoenixDuration(level) {
  if (!level) {
    return 0;
  }
  return Math.round((2 + (level - 1) * 0.5) * 10) / 10;
}

function getDefenseChosenAbility(building) {
  if (!building) {
    return null;
  }
  if (building.phoenixLevel) {
    return "phoenix";
  }
  if (building.frostLevel) {
    return "frost";
  }
  if (building.electroLevel) {
    return "electro";
  }
  return null;
}

function getDefenseAbilityName(type) {
  return type === "phoenix" ? "Phoenix" : type === "frost" ? "Frost Shot" : type === "electro" ? "Electro" : "None";
}

function canBuyDefenseAbilityType(building, type) {
  const chosen = getDefenseChosenAbility(building);
  return !chosen || chosen === type;
}

function getDefensePhoenixBaseMultiplier(source) {
  const level = typeof source === "number" ? source : source?.phoenixLevel || 0;
  if (!level || (typeof source !== "number" && getDefenseChosenAbility(source) !== "phoenix")) {
    return 1;
  }
  return 1 + 0.2 * Math.min(defensePhoenixMaxLevel, level) / defensePhoenixMaxLevel;
}

function getDefenseEffectiveRange(building) {
  if (building.range === Infinity) {
    return Infinity;
  }
  return building.range * getDefensePhoenixBaseMultiplier(building);
}

function getDefensePhoenixDamageMultiplier(building) {
  const level = building.phoenixLevel || 0;
  if (!building.phoenixActive || !level || getDefenseChosenAbility(building) !== "phoenix") {
    return 1;
  }
  return 1.2 + (0.4 * (level - 1)) / (defensePhoenixMaxLevel - 1);
}

function getDefensePhoenixSpeedMultiplier(building) {
  const level = building.phoenixLevel || 0;
  if (!building.phoenixActive || !level || getDefenseChosenAbility(building) !== "phoenix") {
    return 1;
  }
  return 1.3 + (0.6 * (level - 1)) / (defensePhoenixMaxLevel - 1);
}

function canDefenseUsePhoenix(building) {
  return building && building.type !== "trap" && (defenseUpgradeLevels[building.type] || 0) >= getDefenseUpgradeMaxLevel(building.type);
}

function getDefensePhoenixCost(building) {
  const nextLevel = (building.phoenixLevel || 0) + 1;
  return Math.min(420, 80 + nextLevel * 24);
}

function canSpawnFromDefenseCamp(building) {
  const limits = {
    camp: 5,
    tankCamp: 3,
    airfield: 2
  };
  const spawned = defenseFriendlyUnits.filter((unit) => unit.sourceId === building.id).length;
  return spawned < limits[building.type];
}

function isDefenseAirEnemy(enemy) {
  return enemy.type === "plane" || enemy.type === "helicopter" || enemy.type === "dragon" || enemy.type === "dropper" || enemy.type === "aircraftCarrier" || enemy.type === "healer";
}

function isDefenseAirType(type) {
  return type === "plane" || type === "helicopter" || type === "dragon" || type === "dropper" || type === "aircraftCarrier" || type === "healer";
}

function createDefenseFriendlyUnit(camp, launchType = "soldier") {
  if (camp.type === "troopLauncher") {
    const level = defenseUpgradeLevels.troopLauncher || 0;
    const isTank = launchType === "tank";
    const hp = isTank
      ? getDefenseFriendlyValue(26 + level * 5)
      : getDefenseFriendlyValue(14 + level * 3);
    return {
      type: isTank ? "launchedTank" : "launchedSoldier",
      landType: isTank ? "tank" : "soldier",
      sourceId: camp.id,
      x: camp.x - 4,
      y: camp.y - 30,
      startX: camp.x - 4,
      startY: camp.y - 30,
      landX: camp.launchTargetX || camp.x - 160,
      landY: defenseGroundY - 20,
      launchTimer: 0,
      launchDuration: 0.72,
      hp,
      maxHp: hp,
      speed: isTank ? 30 + level : 46 + level,
      damage: isTank ? getDefenseFriendlyValue(5 + Math.floor(level / 2)) : getDefenseFriendlyValue(2 + Math.floor(level / 3)),
      range: isTank ? 185 + level * 5 : 150 + level * 5,
      radius: isTank ? 16 : 10,
      shootCooldown: isTank ? 0.55 : 0.35
    };
  }

  if (camp.type === "tankCamp") {
    return {
      type: "tank",
      sourceId: camp.id,
      x: camp.x - 20,
      y: defenseGroundY - 24,
      hp: getDefenseFriendlyValue(Math.round((18 + defenseWave * 4) * 0.6) + defenseUpgrades.tankCampTraining * 4),
      maxHp: getDefenseFriendlyValue(Math.round((18 + defenseWave * 4) * 0.6) + defenseUpgrades.tankCampTraining * 4),
      speed: 28,
      damage: getDefenseFriendlyValue(Math.max(2, Math.round((10 + Math.floor(defenseWave / 2)) * 0.6)) + defenseUpgrades.tankCampTraining * 2),
      range: 185,
      radius: 17,
      shootCooldown: 0.6
    };
  }

  if (camp.type === "airfield") {
    return {
      type: "plane",
      sourceId: camp.id,
      x: camp.x - 20,
      y: 104 + Math.random() * 42,
      hp: getDefenseFriendlyValue(Math.round((7 + defenseWave * 2) * 0.6) + defenseUpgrades.airfieldTraining * 3),
      maxHp: getDefenseFriendlyValue(Math.round((7 + defenseWave * 2) * 0.6) + defenseUpgrades.airfieldTraining * 3),
      speed: 82,
      damage: getDefenseFriendlyValue(Math.max(1, Math.round((4 + Math.floor(defenseWave / 4)) * 0.6)) + defenseUpgrades.airfieldTraining),
      bombDamage: getDefenseFriendlyValue(Math.max(5, Math.round((12 + defenseWave * 1.4) * 0.6)) + defenseUpgrades.airfieldTraining * 3),
      bombRadius: 58,
      range: 210,
      radius: 15,
      shootCooldown: 0.35
    };
  }

  return {
    type: "soldier",
    sourceId: camp.id,
    x: camp.x - 18,
    y: defenseGroundY - 20,
    hp: getDefenseFriendlyValue(12 + defenseUpgrades.campTraining * 3),
    maxHp: getDefenseFriendlyValue(12 + defenseUpgrades.campTraining * 3),
    speed: 42,
    damage: getDefenseFriendlyValue(1 + Math.floor(defenseUpgrades.campTraining / 2)),
    range: 150,
    radius: 10,
    shootCooldown: 0.4
  };
}

function getDefenseTroopLauncherShotCount(level = defenseUpgradeLevels.troopLauncher || 0) {
  if (level >= 12) {
    return 5;
  }
  if (level >= 10) {
    return 4;
  }
  if (level >= 7) {
    return 3;
  }
  if (level >= 3) {
    return 2;
  }
  return 1;
}

function launchDefenseTroops(building, target) {
  const activeFromLauncher = defenseFriendlyUnits.filter((unit) => unit.sourceId === building.id && unit.hp > 0).length;
  const availableSlots = Math.max(0, 10 - activeFromLauncher);
  const count = Math.min(getDefenseTroopLauncherShotCount(), availableSlots);
  if (count <= 0) {
    building.cooldown = 0.6;
    return;
  }
  const maxLevel = (defenseUpgradeLevels.troopLauncher || 0) >= getDefenseUpgradeMaxLevel("troopLauncher");
  for (let i = 0; i < count; i += 1) {
    building.launchTargetX = Math.max(80, target.x + 18 - i * 20);
    const unit = createDefenseFriendlyUnit(building, maxLevel && i === count - 1 ? "tank" : "soldier");
    unit.landX = building.launchTargetX;
    unit.launchDelay = i * 0.08;
    defenseFriendlyUnits.push(unit);
  }
  building.launchTargetX = null;
}

function getDefenseFriendlyValue(value) {
  return Math.ceil(value * defenseFriendlyUnitMultiplier);
}

function updateDefenseFriendlyUnits(delta) {
  defenseFriendlyUnits.forEach((unit) => {
    if (unit.launchDelay && unit.launchDelay > 0) {
      unit.launchDelay = Math.max(0, unit.launchDelay - delta);
      return;
    }
    if (unit.launchDuration) {
      unit.launchTimer += delta;
      const progress = Math.min(1, unit.launchTimer / unit.launchDuration);
      unit.x = unit.startX + (unit.landX - unit.startX) * progress;
      unit.y = unit.startY + (unit.landY - unit.startY) * progress - Math.sin(progress * Math.PI) * 132;
      if (progress < 1) {
        return;
      }
      unit.type = unit.landType || "soldier";
      unit.y = defenseGroundY - 20;
      unit.launchDuration = 0;
    }
    unit.shootCooldown = Math.max(0, unit.shootCooldown - delta);
    const target = defenseEnemies
      .filter((enemy) => unit.type === "plane" || !isDefenseAirEnemy(enemy))
      .sort((a, b) => Math.abs(a.x - unit.x) - Math.abs(b.x - unit.x))[0];

    if (!target) {
      unit.x = Math.max(80, unit.x - unit.speed * delta * (unit.type === "plane" ? 0.75 : 0.35));
      return;
    }

    const distance = Math.hypot(target.x - unit.x, target.y - unit.y);

    if (unit.type === "plane" && distance < unit.radius + target.radius + 4) {
      applyFriendlyPlaneBomb(unit);
      unit.hp = 0;
      return;
    }

    if (distance > unit.range) {
      unit.x += Math.sign(target.x - unit.x) * unit.speed * delta;
      if (unit.type === "plane") {
        unit.y += Math.sign(target.y - unit.y) * unit.speed * delta * 0.35;
      }
      return;
    }

    if (unit.shootCooldown <= 0) {
      defenseBullets.push({
        x: unit.x,
        y: unit.y - 5,
        target,
        speed: unit.type === "tank" ? 285 : unit.type === "plane" ? 430 : 340,
        damage: unit.damage,
        team: "friendly"
      });
      unit.shootCooldown = unit.type === "tank" ? 1.2 : unit.type === "plane" ? 0.55 : 0.85;
    }
  });

  defenseFriendlyUnits = defenseFriendlyUnits.filter((unit) => unit.hp > 0);
}

function applyFriendlyPlaneBomb(unit) {
  defenseEnemies.forEach((enemy) => {
    if (Math.hypot(enemy.x - unit.x, enemy.y - unit.y) <= unit.bombRadius) {
      enemy.hp -= unit.bombDamage;
    }
  });
}

function updateDefenseBullets(delta) {
  defenseBullets.forEach((bullet) => {
    if (bullet.launchDelay && bullet.launchDelay > 0) {
      bullet.launchDelay = Math.max(0, bullet.launchDelay - delta);
      return;
    }
    if (bullet.homing) {
      if (!bullet.target || bullet.target.defeated || bullet.target.hp <= 0) {
        bullet.target = bullet.infernoArtillery ? findDefenseInfernoArtilleryRetarget() : bullet.honeySplash ? findDefenseHoneyRetarget() : findDefenseRapidMissileRetarget(bullet);
      }
      if (!bullet.target) {
        if (bullet.infernoArtillery) {
          const floorY = defenseGroundY - 8;
          const desired = Math.atan2(floorY - bullet.y, (bullet.impactX ?? bullet.x) - bullet.x);
          const turn = Math.atan2(Math.sin(desired - bullet.angle), Math.cos(desired - bullet.angle));
          const maxTurn = bullet.turnRate * delta;
          bullet.angle += Math.max(-maxTurn, Math.min(maxTurn, turn));
          bullet.x += Math.cos(bullet.angle) * bullet.speed * delta;
          bullet.y += Math.sin(bullet.angle) * bullet.speed * delta;
          bullet.traveled = (bullet.traveled || 0) + bullet.speed * delta;
          recordDefenseInfernoTrail(bullet);
          if (Math.hypot((bullet.impactX ?? bullet.x) - bullet.x, floorY - bullet.y) < 14 || bullet.traveled >= (bullet.startDistance || 1) * 1.25) {
            bullet.x = bullet.impactX ?? bullet.x;
            bullet.y = floorY;
            applyDefenseSplashDamage(bullet);
            bullet.hit = true;
          }
        } else {
          bullet.hit = true;
        }
        return;
      }
      const targetX = bullet.infernoArtillery ? Math.max(24, Math.min(defenseWorldWidth - 24, bullet.target.x + (bullet.impactOffsetX || 0))) : bullet.target.x;
      const targetY = bullet.infernoArtillery && isDefenseAirEnemy(bullet.target) ? bullet.target.y : bullet.infernoArtillery ? Math.min(bullet.target.y, defenseGroundY - 8) : bullet.target.y;
      const desired = Math.atan2(targetY - bullet.y, targetX - bullet.x);
      const turn = Math.atan2(Math.sin(desired - bullet.angle), Math.cos(desired - bullet.angle));
      const maxTurn = bullet.turnRate * delta;
      bullet.angle += Math.max(-maxTurn, Math.min(maxTurn, turn));
      bullet.x += Math.cos(bullet.angle) * bullet.speed * delta;
      bullet.y += Math.sin(bullet.angle) * bullet.speed * delta;
      bullet.traveled = (bullet.traveled || 0) + bullet.speed * delta;
      recordDefenseInfernoTrail(bullet);
      if (Math.hypot(targetX - bullet.x, targetY - bullet.y) < bullet.target.radius + 8) {
        if (bullet.honeySplash) {
          applyDefenseHoneySplat(bullet);
        } else if (bullet.splash > 0) {
          bullet.infernoAirImpact = bullet.infernoArtillery && isDefenseAirEnemy(bullet.target);
          applyDefenseSplashDamage(bullet);
        } else {
          bullet.target.hp -= getDefenseProjectileDamage(bullet, bullet.target);
          applyDefenseBulletEffects(bullet, bullet.target);
        }
        bullet.hit = true;
      }
      return;
    }
    if (bullet.target && !bullet.target.defeated && !bullet.fixedImpact) {
      const angle = Math.atan2(bullet.target.y - bullet.y, bullet.target.x - bullet.x);
      bullet.x += Math.cos(angle) * bullet.speed * delta;
      bullet.y += Math.sin(angle) * bullet.speed * delta;
      bullet.traveled = bullet.startDistance - Math.hypot(bullet.target.x - bullet.x, bullet.target.y - bullet.y);
      if (Math.hypot(bullet.target.x - bullet.x, bullet.target.y - bullet.y) < bullet.target.radius + 5) {
        if (bullet.splash > 0) {
          applyDefenseSplashDamage(bullet);
          bullet.hit = true;
        } else if (bullet.ricochet) {
          applyDefenseRicochetHit(bullet, bullet.target);
        } else {
          bullet.target.hp -= getDefenseProjectileDamage(bullet, bullet.target);
          applyDefenseBulletEffects(bullet, bullet.target);
          bullet.hit = true;
        }
      }
      return;
    }
    bullet.x += Math.cos(bullet.angle) * bullet.speed * delta;
    bullet.y += Math.sin(bullet.angle) * bullet.speed * delta;
    bullet.traveled = (bullet.traveled || 0) + bullet.speed * delta;
    if (bullet.arc && bullet.splash > 0 && bullet.traveled >= bullet.startDistance) {
      bullet.x = bullet.impactX ?? bullet.x;
      bullet.y = bullet.impactY ?? bullet.y;
      if (bullet.launchTroop) {
        landDefenseLaunchedTroop(bullet);
      } else if (bullet.honeySplash) {
        applyDefenseHoneySplat(bullet);
      } else if (bullet.team === "enemy") {
        applyEnemyDefenseSplash(bullet);
      } else {
        applyDefenseSplashDamage(bullet);
      }
      bullet.hit = true;
      return;
    }
    if (bullet.team === "enemy") {
      applyEnemyDefenseBullet(bullet);
    } else {
      defenseEnemies.forEach((enemy) => {
        if (!bullet.hit && Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) < enemy.radius + 5) {
          enemy.hp -= getDefenseProjectileDamage(bullet, enemy);
          applyDefenseBulletEffects(bullet, enemy);
          bullet.hit = true;
        }
      });
    }
  });

  handleDefenseEnemyDefeats();
  defenseEnemies = defenseEnemies.filter((enemy) => !enemy.defeated);
  defenseBullets = defenseBullets.filter((bullet) => !bullet.hit && bullet.x > -80 && bullet.x < defenseWorldWidth + 80 && bullet.y > -80 && bullet.y < defenseCanvas.height + 80);
}

function handleDefenseEnemyDefeats() {
  defenseEnemies.forEach((enemy) => {
    if (enemy.hp > 0 || enemy.defeated) {
      return;
    }
    if (enemy.crashing) {
      return;
    }
    if (enemy.type === "helicopter" || enemy.type === "plane") {
      enemy.crashing = true;
      addDefenseMoney(Math.ceil(enemy.reward * 1.45));
      return;
    }
    if (enemy.revives > 0) {
      enemy.revives -= 1;
      enemy.hp = Math.max(1, Math.ceil(enemy.maxHp * 0.6));
      enemy.maxHp = enemy.hp;
      enemy.revivorGlow = 0.45;
      enemy.x = Math.max(-35, enemy.x - 18);
      return;
    }
    enemy.defeated = true;
    addDefenseMoney(Math.ceil(enemy.reward * 1.45));
    if (enemy.type === "truck") {
      spawnTruckSoldiers(enemy);
    }
    if (enemy.type === "dropper") {
      spawnDropperSoldiers(enemy);
    }
    if (enemy.type === "troopShooter") {
      spawnDefenseTroopShooterTroops(enemy);
    }
    if (enemy.type === "wallBreaker") {
      triggerDefenseWallBreakerBlast(enemy);
    }
  });
}

function getDefenseBulletArcOffset(bullet) {
  if (!bullet.arc) {
    return 0;
  }
  const progress = Math.max(0, Math.min(1, (bullet.traveled || 0) / (bullet.startDistance || 1)));
  return Math.sin(progress * Math.PI) * (bullet.arcHeight || 40);
}

function recordDefenseInfernoTrail(bullet) {
  if (!bullet.infernoArtillery || bullet.launchDelay > 0) {
    return;
  }
  const visualY = bullet.y - getDefenseBulletArcOffset(bullet);
  bullet.trail = bullet.trail || [];
  bullet.trail.push({ x: bullet.x, y: visualY });
  if (bullet.trail.length > 10) {
    bullet.trail.shift();
  }
}

function applyDefenseRicochetHit(bullet, enemy) {
  enemy.hp -= getDefenseProjectileDamage(bullet, enemy);
  applyDefenseBulletEffects(bullet, enemy);
  bullet.ricochetHits.push(enemy);
  if (bullet.remainingBounces <= 0) {
    bullet.hit = true;
    return;
  }
  const nextTarget = defenseEnemies
    .filter((candidate) => (
      candidate.hp > 0 &&
      !candidate.defeated &&
      !isDefenseAirEnemy(candidate) &&
      !bullet.ricochetHits.includes(candidate) &&
      Math.hypot(candidate.x - enemy.x, candidate.y - enemy.y) <= 210
    ))
    .sort((a, b) => Math.hypot(a.x - enemy.x, a.y - enemy.y) - Math.hypot(b.x - enemy.x, b.y - enemy.y))[0];
  if (!nextTarget) {
    bullet.hit = true;
    return;
  }
  bullet.target = nextTarget;
  bullet.remainingBounces -= 1;
  bullet.x = enemy.x;
  bullet.y = enemy.y;
}

function landDefenseLaunchedTroop(bullet) {
  const troop = createDefenseEnemy(bullet.launchTroop);
  troop.x = bullet.x;
  troop.y = bullet.y;
  troop.revivorGlow = 0.6;
  defenseEnemies.push(troop);
  const impactBuilding = defenseBuildings.find((building) => Math.hypot(building.x - bullet.x, building.y - bullet.y) <= 34);
  const impactUnit = defenseFriendlyUnits.find((unit) => Math.hypot(unit.x - bullet.x, unit.y - bullet.y) <= 30);
  if (impactBuilding) {
    damageDefenseBlocker(impactBuilding, bullet.impactDamage || 45);
  } else if (impactUnit) {
    impactUnit.hp -= bullet.impactDamage || 45;
  } else if (defensePlayer.alive && Math.hypot(defensePlayer.x - bullet.x, defensePlayer.y - bullet.y) <= 30) {
    damageDefensePlayer(bullet.impactDamage || 45);
  }
  defenseAirBursts.push({ x: bullet.x, y: bullet.y, radius: 56, life: 0.45, maxLife: 0.45 });
}

function spawnDefenseTroopShooterTroops(enemy) {
  for (let i = 0; i < 6; i += 1) {
    const troop = createDefenseEnemy(i < 3 ? "tank" : "soldier");
    troop.x = enemy.x - 10 - i * 8;
    troop.y = enemy.y;
    defenseEnemies.push(troop);
  }
}

function spawnTruckSoldiers(truck) {
  for (let i = 0; i < truck.spawnsOnDeath; i += 1) {
    const soldier = createDefenseEnemy("soldier");
    soldier.x = truck.x - 20 - i * 8;
    soldier.y = defenseGroundY - 18 - i * 4;
    defenseEnemies.push(soldier);
  }
}

function spawnDropperSoldiers(dropper) {
  for (let i = 0; i < dropper.spawnsOnDeath; i += 1) {
    const soldier = createDefenseEnemy("soldier");
    soldier.x = dropper.x - 28 + i * 14;
    soldier.y = defenseGroundY - 20 - Math.random() * 12;
    soldier.hp = Math.ceil(soldier.hp * 0.9);
    soldier.maxHp = soldier.hp;
    defenseEnemies.push(soldier);
  }
}

function applyDefenseSplashDamage(bullet) {
  const infernoAirImpact = bullet.infernoArtillery && bullet.infernoAirImpact;
  defenseEnemies.forEach((enemy) => {
    if (
      Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) <= bullet.splash &&
      (bullet.allSplash || (bullet.airSplash ? isDefenseAirEnemy(enemy) : !isDefenseAirEnemy(enemy)))
    ) {
      const splashDamage = bullet.splashScale && bullet.target && enemy !== bullet.target
        ? getDefenseProjectileDamage(bullet, enemy) * bullet.splashScale
        : getDefenseProjectileDamage(bullet, enemy);
      enemy.hp -= splashDamage;
      applyDefenseBulletEffects(bullet, enemy);
      if (bullet.mergedSpellMode === "freeze") {
        applyDefenseMergeFreeze(enemy);
      }
      if (bullet.mergedSpellMode === "poison") {
        applyDefenseMergePoison(enemy);
      }
    }
  });

  if (bullet.mergedSpellMode) {
    const poisonSlow = getDefenseMergedPoisonSlow();
    defenseFireZones.push({
      x: bullet.x,
      y: bullet.y,
      radius: bullet.splash,
      damagePerSecond: 0,
      life: bullet.mergedSpellMode === "freeze" ? 7 : 4.5,
      air: false,
      affectsAll: true,
      freezeSpell: bullet.mergedSpellMode === "freeze",
      freezeDuration: bullet.freezeDuration || getDefenseMergedSpellFreezeDuration(),
      poisonSpell: bullet.mergedSpellMode === "poison",
      poisonCurrentHealthRate: 0.04,
      poisonSlowMultiplier: 1 - poisonSlow
    });
  }

  if (bullet.fireZone) {
    defenseFireZones.push({
      x: bullet.x,
      y: infernoAirImpact ? bullet.y : bullet.infernoArtillery ? defenseGroundY - 3 : bullet.y,
      radius: bullet.splash,
      damagePerSecond: bullet.damage * (bullet.fireDamageScale ?? 0.1),
      percentDamagePerSecond: bullet.firePercentDamage || 0,
      life: bullet.fireZoneLife || 3,
      air: infernoAirImpact ? true : bullet.infernoArtillery ? false : bullet.allSplash && bullet.y < defenseGroundY - 34,
      affectsAll: bullet.allSplash,
      inferno: bullet.infernoArtillery || bullet.lavaLauncher
    });
  }

  if (bullet.poisonZone) {
    defenseFireZones.push({
      x: bullet.x,
      y: bullet.y,
      radius: bullet.splash,
      damagePerSecond: bullet.damage * 0.1,
      slowMultiplier: 0.7,
      life: 4.5,
      poison: true,
      affectsAll: true
    });
  }

  if (bullet.airSplash) {
    defenseAirBursts.push({
      x: bullet.x,
      y: bullet.y,
      radius: bullet.splash,
      life: 0.45,
      maxLife: 0.45
    });
  }
}

function getDefenseProjectileDamage(bullet, enemy) {
  const baseDamage = Number(bullet.damage) || 0;
  const percentDamage = bullet.percentDamage ? enemy.maxHp * bullet.percentDamage : 0;
  const minHealthDamage = bullet.minHealthDamage ? enemy.maxHp * bullet.minHealthDamage : 0;
  return Math.max(baseDamage, percentDamage, minHealthDamage);
}

function applyDefenseBulletEffects(bullet, enemy) {
  if (!enemy || enemy.defeated) {
    return;
  }
  if (bullet.frostLevel && enemy.hp > 0) {
    applyDefenseFrost(enemy, bullet.frostLevel);
  }
  if (bullet.buildingElectroLevel) {
    applyDefenseBuildingElectroShock(enemy, bullet);
  }
  if (bullet.team === "player" && bullet.electroLevel) {
    applyDefenseElectroShock(enemy, bullet);
  }
  if (bullet.team === "player" && (bullet.surgeLevel || 0) >= 10) {
    applyDefenseSurgePoison(enemy, bullet.surgeLevel);
  }
}

function applyDefenseSurgePoison(enemy, level) {
  const progress = Math.max(0, Math.min(1, (level - 10) / Math.max(1, defenseSurgeMaxLevel - 10)));
  enemy.surgePoisonTimer = Math.max(enemy.surgePoisonTimer || 0, 2.2 + progress * 1.3);
  enemy.surgePoisonDps = Math.max(enemy.surgePoisonDps || 0, enemy.maxHp * (0.07 + progress * 0.03));
  enemy.surgePoisonFlash = 0.28;
}

function applyDefenseFrost(enemy, level) {
  const slow = getDefenseFrostSlow(level);
  enemy.frostSlowMultiplier = Math.min(enemy.frostSlowMultiplier ?? 1, 1 - slow);
  enemy.frostTimer = Math.max(enemy.frostTimer || 0, getDefenseFrostDuration(level));
}

function applyDefenseMergeFreeze(enemy) {
  const duration = getDefenseMergedSpellFreezeDuration();
  applyDefenseMergeFreezeFor(enemy, duration);
}

function applyDefenseMergeFreezeFor(enemy, duration) {
  enemy.frostSlowMultiplier = 0;
  enemy.freezeLocked = true;
  enemy.frostTimer = Math.max(enemy.frostTimer || 0, duration);
  enemy.spellAttackSlowMultiplier = 0;
  enemy.spellAttackSlowTimer = Math.max(enemy.spellAttackSlowTimer || 0, duration);
}

function getDefenseMergedSpellLevel() {
  return Math.max(1, Math.min(10, defenseUpgradeLevels.freezeSpell || 1));
}

function getDefenseMergedSpellFreezeDuration(level = getDefenseMergedSpellLevel()) {
  return Math.round((3 + ((Math.max(1, level) - 1) * 4) / 9) * 10) / 10;
}

function getDefenseMergedSpellReload(level = getDefenseMergedSpellLevel()) {
  return Math.round((22 - ((Math.max(1, level) - 1) * 5) / 9) * 10) / 10;
}

function applyDefenseMergePoison(enemy) {
  const slow = getDefenseMergedPoisonSlow();
  enemy.spellPoisonTimer = Math.max(enemy.spellPoisonTimer || 0, 10);
  enemy.spellPoisonCurrentHealthRate = Math.max(enemy.spellPoisonCurrentHealthRate || 0, 0.04);
  enemy.spellPoisonMoveMultiplier = Math.min(enemy.spellPoisonMoveMultiplier || 1, 1 - slow);
  enemy.spellAttackSlowMultiplier = Math.min(enemy.spellAttackSlowMultiplier || 1, 1 - slow);
  enemy.spellAttackSlowTimer = Math.max(enemy.spellAttackSlowTimer || 0, 10);
}

function getDefenseMergedPoisonSlow(level = getDefenseMergedSpellLevel()) {
  return Math.round((0.1 + ((Math.max(1, level) - 1) * 0.2) / 9) * 100) / 100;
}

function getDefenseFrostSlow(level) {
  if (!level) {
    return 0;
  }
  return 0.05 + (0.25 * (level - 1)) / (defenseFrostMaxLevel - 1);
}

function getDefenseFrostDuration(level) {
  if (!level) {
    return 0;
  }
  return 0.5 + (2.5 * (level - 1)) / (defenseFrostMaxLevel - 1);
}

function getDefenseRevengeDamageBonus(level) {
  if (!level) {
    return 0;
  }
  return 0.05 + (0.25 * (level - 1)) / (defenseRevengeMaxLevel - 1);
}

function getDefenseRevengeSpeedBonus(level) {
  return getDefenseRevengeDamageBonus(level);
}

function getDefenseRevengeRegen(level) {
  if (!level) {
    return 0;
  }
  return (0.07 * (level - 1)) / (defenseRevengeMaxLevel - 1);
}

function applyDefenseElectroShock(origin, bullet) {
  const level = Math.max(1, Math.min(defenseElectroMaxLevel, bullet.electroLevel || 0));
  const maxTargets = Math.min(10, 2 + Math.floor((level - 1) * 8 / (defenseElectroMaxLevel - 1)));
  const damage = Math.round((1.4 + level * 0.55) * 10) / 10;
  const shocked = defenseEnemies
    .filter((enemy) => enemy !== origin && enemy.hp > 0 && !enemy.defeated && Math.hypot(enemy.x - origin.x, enemy.y - origin.y) <= 135)
    .sort((a, b) => Math.hypot(a.x - origin.x, a.y - origin.y) - Math.hypot(b.x - origin.x, origin.y - b.y))
    .slice(0, maxTargets);

  shocked.forEach((enemy) => {
    enemy.hp -= damage;
    enemy.electroFlash = 0.18;
    defenseAirBursts.push({
      x: enemy.x,
      y: enemy.y,
      radius: 18,
      life: 0.22,
      maxLife: 0.22,
      electro: true
    });
  });
}

function applyDefenseBuildingElectroShock(origin, bullet) {
  const level = Math.max(1, Math.min(defenseBuildingElectroMaxLevel, bullet.buildingElectroLevel || 0));
  const maxTargets = Math.min(4, 1 + Math.floor((level - 1) * 3 / (defenseBuildingElectroMaxLevel - 1)));
  const damage = Math.max(1, bullet.chainDamage || (Number(bullet.damage) || 0) * 0.3);
  defenseEnemies
    .filter((enemy) => enemy !== origin && enemy.hp > 0 && !enemy.defeated && Math.hypot(enemy.x - origin.x, enemy.y - origin.y) <= 145)
    .sort((a, b) => Math.hypot(a.x - origin.x, a.y - origin.y) - Math.hypot(b.x - origin.x, b.y - origin.y))
    .slice(0, maxTargets)
    .forEach((enemy) => {
      enemy.hp -= damage;
      enemy.electroFlash = 0.22;
      defenseAirBursts.push({
        x: enemy.x,
        y: enemy.y,
        radius: 20,
        life: 0.24,
        maxLife: 0.24,
        electro: true
      });
    });
}

function updateDefenseFireZones(delta) {
  defenseFireZones.forEach((zone) => {
    zone.life -= delta;
    if (zone.affectsDefense) {
      const damage = (zone.damagePerSecond || 0) * delta;
      if (damage > 0) {
        defenseBuildings.forEach((building) => {
          if (building.type !== "trap" && Math.hypot(building.x - zone.x, building.y - zone.y) <= zone.radius + 18) {
            damageDefenseBuilding(building, damage);
          }
        });
        defenseFriendlyUnits.forEach((unit) => {
          if (Math.hypot(unit.x - zone.x, unit.y - zone.y) <= zone.radius + unit.radius) {
            unit.hp -= damage;
          }
        });
        if (defensePlayer.alive && defensePlayer.invulnerableTimer <= 0 && Math.hypot(defensePlayer.x - zone.x, defensePlayer.y - zone.y) <= zone.radius + defensePlayer.radius) {
          damageDefensePlayer(damage);
        }
      }
    }
    if (zone.affectsEnemies !== false) {
      defenseEnemies.forEach((enemy) => {
        if (
          Math.hypot(enemy.x - zone.x, enemy.y - zone.y) <= zone.radius &&
          (zone.affectsAll || !isDefenseAirEnemy(enemy))
        ) {
          enemy.hp -= ((zone.damagePerSecond || 0) + enemy.maxHp * (zone.percentDamagePerSecond || 0)) * delta;
          if (zone.freezeSpell) {
            applyDefenseMergeFreezeFor(enemy, zone.freezeDuration || getDefenseMergedSpellFreezeDuration());
          }
          if (zone.poisonSpell) {
            enemy.hp -= enemy.hp * (zone.poisonCurrentHealthRate || 0.04) * delta;
            enemy.spellPoisonMoveMultiplier = Math.min(enemy.spellPoisonMoveMultiplier || 1, zone.poisonSlowMultiplier || 0.7);
            enemy.spellAttackSlowMultiplier = Math.min(enemy.spellAttackSlowMultiplier || 1, zone.poisonSlowMultiplier || 0.7);
            enemy.spellAttackSlowTimer = Math.max(enemy.spellAttackSlowTimer || 0, 0.3);
          }
        }
      });
    }
  });

  defenseFireZones = defenseFireZones.filter((zone) => zone.life > 0);
}

function getDefenseEnemySpeedMultiplier(enemy) {
  if (enemy.freezeLocked || (enemy.frostTimer > 0 && (enemy.frostSlowMultiplier ?? 1) <= 0)) {
    return 0;
  }
  let multiplier = defenseFireZones.some((zone) => (
    zone.poison &&
    Math.hypot(enemy.x - zone.x, enemy.y - zone.y) <= zone.radius
  ))
    ? 0.7
    : 1;
  if (enemy.frostTimer > 0) {
    multiplier *= enemy.frostSlowMultiplier ?? 1;
  }
  if ((enemy.spellPoisonTimer || 0) > 0) {
    multiplier *= enemy.spellPoisonMoveMultiplier || 1;
  }
  return multiplier;
}

function getDefenseEnemyAttackSpeedMultiplier(enemy) {
  if (enemy.frostTimer > 0 && (enemy.frostSlowMultiplier ?? 1) <= 0) {
    return 0;
  }
  if ((enemy.spellAttackSlowTimer || 0) > 0) {
    return enemy.spellAttackSlowMultiplier ?? 1;
  }
  return 1;
}

function updateDefenseAirBursts(delta) {
  defenseAirBursts.forEach((burst) => {
    burst.life -= delta;
  });
  defenseAirBursts = defenseAirBursts.filter((burst) => burst.life > 0);
}

function triggerDefensePhoenix(building) {
  if (!canDefenseUsePhoenix(building) || getDefenseChosenAbility(building) !== "phoenix" || !building.phoenixLevel || building.phoenixSpent || building.phoenixActive) {
    return false;
  }
  building.phoenixActive = true;
  building.phoenixTimer = getDefensePhoenixDuration(building.phoenixLevel);
  building.hp = Math.max(1, Math.ceil(building.maxHp * 0.05));
  defenseOverlayText.textContent = `${formatDefenseName(building.type)} Phoenix activated for ${building.phoenixTimer}s.`;
  return true;
}

function damageDefenseBuilding(building, amount) {
  if (building.type === "trap" || building.type === "airbomb" || building.type === "giantBomb" || building.type === "pushTrap" || building.phoenixActive) {
    return;
  }
  building.hp -= amount;
  if (building.hp <= 0 && triggerDefensePhoenix(building)) {
    return;
  }
}

function applyEnemyDefenseBullet(bullet) {
  const damage = Math.max(1, Number(bullet.damage) || 1);

  if (bullet.splash > 0) {
    const impactTarget = { x: bullet.impactX ?? bullet.x, y: bullet.impactY ?? bullet.y };
    if (Math.hypot(impactTarget.x - bullet.x, impactTarget.y - bullet.y) < 14 || bullet.traveled >= (bullet.startDistance || Infinity)) {
      bullet.x = impactTarget.x;
      bullet.y = impactTarget.y;
      applyEnemyDefenseSplash(bullet);
      bullet.hit = true;
    }
    return;
  }

  if (
    defensePlayer.alive &&
    defensePlayer.invulnerableTimer <= 0 &&
    Math.hypot(defensePlayer.x - bullet.x, defensePlayer.y - bullet.y) < defensePlayer.radius + 5
  ) {
    damageDefensePlayer(damage);
    bullet.hit = true;
    return;
  }

  if (Math.hypot(defensePresident.x - bullet.x, defensePresident.y - bullet.y) < 22) {
    defensePresident.hp = Math.max(0, defensePresident.hp - damage);
    bullet.hit = true;
    return;
  }

  const building = defenseBuildings.find((item) => (
    item.type !== "trap" &&
    Math.abs(item.x - bullet.x) < (item.type === "wall" ? 20 : 18) &&
    Math.abs(item.y - bullet.y) < (item.type === "wall" ? 34 : 22)
  ));

  if (building) {
    damageDefenseBuilding(building, damage);
    bullet.hit = true;
    return;
  }

  const unit = defenseFriendlyUnits.find((item) => Math.hypot(item.x - bullet.x, item.y - bullet.y) < item.radius + 5);
  if (unit && !bullet.hit) {
    unit.hp -= damage;
    bullet.hit = true;
  }
}

function applyEnemyDefenseSplash(bullet) {
  const damage = Math.max(1, Number(bullet.damage) || 1);
  const radius = bullet.splash || 48;
  if (
    defensePlayer.alive &&
    defensePlayer.invulnerableTimer <= 0 &&
    Math.hypot(defensePlayer.x - bullet.x, defensePlayer.y - bullet.y) <= radius + defensePlayer.radius
  ) {
    damageDefensePlayer(damage);
  }
  if (Math.hypot(defensePresident.x - bullet.x, defensePresident.y - bullet.y) <= radius + 20) {
    defensePresident.hp = Math.max(0, defensePresident.hp - damage);
  }
  defenseBuildings.forEach((building) => {
    if (building.type !== "trap" && Math.hypot(building.x - bullet.x, building.y - bullet.y) <= radius + 20) {
      damageDefenseBuilding(building, damage);
    }
  });
  if (bullet.friendlySplash) {
    defenseFriendlyUnits.forEach((unit) => {
      if (Math.hypot(unit.x - bullet.x, unit.y - bullet.y) <= radius + unit.radius) {
        unit.hp -= damage;
      }
    });
  }
  if (bullet.fireZone) {
    defenseFireZones.push({
      x: bullet.x,
      y: bullet.y,
      radius,
      damagePerSecond: damage * 0.18,
      life: 2.8,
      air: false,
      affectsDefense: true,
      affectsEnemies: false,
      affectsAll: false
    });
  }
  defenseAirBursts.push({
    x: bullet.x,
    y: bullet.y,
    radius,
    life: 0.3,
    maxLife: 0.3,
    surge: true,
    maxed: bullet.fireZone
  });
}

function damageDefensePlayer(amount) {
  if (!defensePlayer.alive || defensePlayer.invulnerableTimer > 0) {
    return;
  }

  defensePlayer.hp = Math.max(0, defensePlayer.hp - amount);

  if (defensePlayer.hp <= 0) {
    killDefensePlayer();
  }
}

function killDefensePlayer() {
  defensePlayer.alive = false;
  defensePlayer.hp = 0;
  defensePlayer.revengeStacks = 0;
  defensePlayer.respawnTimer = 3;
  defenseKeys.clear();
}

function updateDefenseEnemies(delta) {
  defenseEnemies.forEach((enemy) => {
    enemy.frostTimer = Math.max(0, (enemy.frostTimer || 0) - delta);
    if (enemy.frostTimer <= 0) {
      enemy.frostSlowMultiplier = 1;
      enemy.freezeLocked = false;
    }
    enemy.electroFlash = Math.max(0, (enemy.electroFlash || 0) - delta);
    enemy.surgePoisonFlash = Math.max(0, (enemy.surgePoisonFlash || 0) - delta);
    enemy.healGlow = Math.max(0, (enemy.healGlow || 0) - delta);
    enemy.revivorGlow = Math.max(0, (enemy.revivorGlow || 0) - delta);
    enemy.healBeamTarget = null;
    if ((enemy.surgePoisonTimer || 0) > 0) {
      enemy.surgePoisonTimer = Math.max(0, enemy.surgePoisonTimer - delta);
      enemy.hp -= (enemy.surgePoisonDps || enemy.maxHp * 0.07) * delta;
      if (enemy.surgePoisonTimer <= 0) {
        enemy.surgePoisonDps = 0;
      }
    }
    enemy.spellAttackSlowTimer = Math.max(0, (enemy.spellAttackSlowTimer || 0) - delta);
    if (enemy.spellAttackSlowTimer <= 0) {
      enemy.spellAttackSlowMultiplier = 1;
    }
    if ((enemy.spellPoisonTimer || 0) > 0) {
      enemy.spellPoisonTimer = Math.max(0, enemy.spellPoisonTimer - delta);
      const currentHealthDamage = enemy.hp * (enemy.spellPoisonCurrentHealthRate || 0.04) * delta;
      const legacyPoisonDamage = (enemy.spellPoisonDps || 0) * delta;
      enemy.hp -= Math.max(currentHealthDamage, legacyPoisonDamage);
      if (enemy.spellPoisonTimer <= 0) {
        enemy.spellPoisonDps = 0;
        enemy.spellPoisonCurrentHealthRate = 0;
        enemy.spellPoisonMoveMultiplier = 1;
      }
    }
    if (enemy.crashing) {
      const crashSpeed = 170;
      enemy.x += Math.cos(Math.PI / 6) * crashSpeed * delta;
      enemy.y += Math.sin(Math.PI / 6) * crashSpeed * delta;
      enemy.crashSpin = (enemy.crashSpin || 0) + delta * 7;
      if (enemy.y >= defenseGroundY - 8) {
        enemy.defeated = true;
        defenseAirBursts.push({ x: enemy.x, y: defenseGroundY - 8, radius: 60, life: 0.4, maxLife: 0.4 });
        defenseBuildings.forEach((building) => {
          if (Math.hypot(building.x - enemy.x, building.y - (defenseGroundY - 8)) <= 60) {
            damageDefenseBlocker(building, 120);
          }
        });
        defenseFriendlyUnits.forEach((unit) => {
          if (Math.hypot(unit.x - enemy.x, unit.y - (defenseGroundY - 8)) <= 60) {
            unit.hp -= 120;
          }
        });
        if (defensePlayer.alive && Math.hypot(defensePlayer.x - enemy.x, defensePlayer.y - (defenseGroundY - 8)) <= 60) {
          damageDefensePlayer(120);
        }
      }
      return;
    }
    if ((enemy.stunTimer || 0) > 0) {
      enemy.stunTimer = Math.max(0, enemy.stunTimer - delta);
      return;
    }
    enemy.shootCooldown = Math.max(0, enemy.shootCooldown - delta * getDefenseEnemyAttackSpeedMultiplier(enemy));
    updateDefenseEnemySpecials(enemy, delta);
    if (enemy.type === "healer") {
      const pack = defenseEnemies.filter((other) => other !== enemy && !other.defeated && !other.crashing && other.hp > 0 && other.type !== "healer");
      if (pack.length) {
        const front = Math.max(...pack.map((ally) => ally.x));
        const average = pack.reduce((sum, ally) => sum + ally.x, 0) / pack.length;
        const targetX = Math.min(average, front - 90);
        if (Math.abs(targetX - enemy.x) > 12) {
          enemy.x += Math.sign(targetX - enemy.x) * enemy.speed * getDefenseEnemySpeedMultiplier(enemy) * delta;
        }
      }
      return;
    }
    if (enemy.type !== "plane" && (enemy.bulletDamage || enemy.launchesTroops || enemy.chainShot)) {
      shootDefenseEnemyGun(enemy);
    }

    const blocker = getDefenseBlocker(enemy);
    if (blocker) {
      enemy.attackCooldown = Math.max(0, enemy.attackCooldown - delta * getDefenseEnemyAttackSpeedMultiplier(enemy));
      if (enemy.attackCooldown <= 0) {
        if (enemy.type === "wallBreaker" && blocker.type === "wall") {
          damageDefenseBlocker(blocker, enemy.damage * 10);
          enemy.hp = 0;
          triggerDefenseWallBreakerBlast(enemy);
        } else {
          damageDefenseBlocker(blocker, enemy.damage);
        }
        const attackMultiplier = Math.max(0.1, getDefenseEnemyAttackSpeedMultiplier(enemy));
        enemy.attackCooldown = (enemy.type === "tank" || enemy.type === "boostedTank" ? 0.8 : 0.65) / attackMultiplier;
      }
      return;
    }
    if (enemy.type === "catapult") {
      const catapultTarget = getDefenseEnemyTarget(enemy);
      if (catapultTarget && Math.hypot(catapultTarget.x - enemy.x, catapultTarget.y - enemy.y) <= enemy.range) {
        return;
      }
    }
    enemy.x += enemy.speed * getDefenseEnemySpeedMultiplier(enemy) * delta;
    if (enemy.x > defensePresident.x - 22) {
      defensePresident.hp = Math.max(0, defensePresident.hp - enemy.damage);
      enemy.defeated = true;
    }
  });

  handleDefenseEnemyDefeats();
  defenseBuildings
    .filter((building) => building.type === "gigaTesla" && building.hp <= 0 && !building.phoenixActive && !building.deathBurstDone)
    .forEach((building) => {
      building.deathBurstDone = true;
      triggerDefenseGigaTeslaDeath(building);
    });
  defenseBuildings = defenseBuildings.filter((building) => building.hp > 0 || building.phoenixActive);
  defenseFriendlyUnits = defenseFriendlyUnits.filter((unit) => unit.hp > 0);
  defenseEnemies = defenseEnemies.filter((enemy) => !enemy.defeated);

  if (defensePresident.hp <= 0) {
    if (tryDefenseYpjLastStand()) {
      updateDefenseStats();
      return;
    }
    endDefenseGame();
    return;
  }

  if (defenseState === "playing" && defenseSpawnQueue.length === 0 && defenseEnemies.length === 0) {
    defenseState = "building";
    defenseFriendlyUnits = [];
    defenseBuildings
      .filter((building) => building.type === "camp" || building.type === "tankCamp" || building.type === "airfield")
      .forEach((building) => {
        building.cooldown = 0;
      });
    defenseBuildings
      .filter((building) => (building.type === "trap" || building.type === "giantBomb" || building.type === "pushTrap") && building.armed === false)
      .forEach((building) => {
        building.armed = true;
      });
    defenseWave += 1;
    defensePresidentLevel += 1;
    const attacksRecharged = defenseStoryAttacksUsed > 0;
    defenseStoryAttacksUsed = 0;
    updateDefenseStoryUI();
    defensePlayer.alive = true;
    defensePlayer.hp = defensePlayer.maxHp;
    defensePlayer.respawnTimer = 0;
    defensePlayer.invulnerableTimer = 0;
    const clearBonus = 24 + defenseWave * 5 + (defenseWave === 7 || defenseWave === 16 ? 90 : 0);
    addDefenseMoney(clearBonus);
    updateDefenseStats();
    const storyNote = attacksRecharged ? " Story attacks recharged - you can attack up to 3 levels again." : "";
    if (defenseWave === 7 || defenseWave === 16) {
      showDefenseOverlay("Challenge Wave Cleared", `You survived a challenge wave. Take the bonus money, rebuild, then prepare for the next stretch.${storyNote}`, "Keep Building");
    } else {
      showDefenseOverlay("Wave Clear", `Your soldier is fully healed and friendly camp units reset. Build more defenses, then start the next wave.${storyNote}`, "Keep Building");
    }
  }

  updateDefenseStats();
}

function updateDefenseEnemySpecials(enemy, delta) {
  if (enemy.type === "aircraftCarrier") {
    enemy.summonCooldown = Math.max(0, (enemy.summonCooldown || 0) - delta);
    if (enemy.summonCooldown <= 0) {
      summonDefenseEnemyTroops(enemy, 2);
      enemy.summonCooldown = enemy.summonInterval || 8;
    }
    return;
  }
  if (enemy.type === "summoner") {
    enemy.summonCooldown = Math.max(0, (enemy.summonCooldown || enemy.summonInterval || 10) - delta);
    if (enemy.summonCooldown <= 0) {
      summonDefenseEnemyTroops(enemy);
      enemy.summonCooldown = enemy.summonInterval || 10;
    }
    return;
  }

  if (enemy.type === "healer") {
    healDefenseEnemies(enemy, delta);
  }
}

function summonDefenseEnemyTroops(enemy, overrideCount) {
  const count = overrideCount || enemy.summonCount || 5;
  for (let i = 0; i < count; i += 1) {
    const soldier = createDefenseEnemy("soldier");
    soldier.x = Math.max(-20, enemy.x - 34 - i * 9);
    soldier.y = defenseGroundY - 18 - Math.random() * 22;
    defenseEnemies.push(soldier);
  }
}

function healDefenseEnemies(healer, delta) {
  const target = defenseEnemies
    .filter((enemy) => (
      enemy !== healer &&
      enemy.hp > 0 &&
      !enemy.defeated &&
      enemy.hp < enemy.maxHp &&
      Math.hypot(enemy.x - healer.x, enemy.y - healer.y) <= healer.healRange
    ))
    .sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
  if (!target) {
    return;
  }
  target.hp = Math.min(target.maxHp, target.hp + healer.healPerSecond * delta);
  target.healGlow = 0.18;
  healer.healBeamTarget = target;
}

function damageDefenseBlocker(blocker, amount) {
  if (blocker === defensePlayer) {
    damageDefensePlayer(amount);
    return;
  }

  damageDefenseBuilding(blocker, amount);
}

function triggerDefenseWallBreakerBlast(enemy) {
  if (enemy.blastTriggered) {
    return;
  }
  enemy.blastTriggered = true;
  const radius = enemy.blastRadius || 42;
  const damage = enemy.blastDamage || enemy.damage || 6;
  defenseBuildings.forEach((building) => {
    if (building.type !== "trap" && Math.hypot(building.x - enemy.x, building.y - enemy.y) <= radius + 18) {
      damageDefenseBuilding(building, damage);
    }
  });
  defenseFriendlyUnits.forEach((unit) => {
    if (Math.hypot(unit.x - enemy.x, unit.y - enemy.y) <= radius + unit.radius) {
      unit.hp -= damage;
    }
  });
  if (defensePlayer.alive && Math.hypot(defensePlayer.x - enemy.x, defensePlayer.y - enemy.y) <= radius + defensePlayer.radius) {
    damageDefensePlayer(damage);
  }
  defenseAirBursts.push({
    x: enemy.x,
    y: enemy.y,
    radius,
    life: 0.24,
    maxLife: 0.24,
    surge: true,
    maxed: false
  });
}

function addDefenseMoney(amount) {
  defenseMoney += Math.ceil(amount * defenseMoneyEarnedMultiplier);
  if (defenseDemoMode) {
    defenseMoney = Math.max(defenseMoney, 400);
  }
}

function canSpendDefenseMoney(amount) {
  return defenseDemoMode || defenseMoney >= amount;
}

function spendDefenseMoney(amount) {
  if (defenseDemoMode) {
    return true;
  }
  if (defenseMoney < amount) {
    return false;
  }
  defenseMoney -= amount;
  return true;
}

function shootDefenseEnemyGun(enemy) {
  if (enemy.shootCooldown > 0) {
    return;
  }
  if (getDefenseEnemyAttackSpeedMultiplier(enemy) <= 0) {
    return;
  }

  const target = getDefenseEnemyTarget(enemy);
  if (!target) {
    return;
  }

  const distance = Math.hypot(target.x - enemy.x, target.y - enemy.y);
  if (distance > enemy.range) {
    return;
  }

  if (enemy.fireRock || enemy.bomber) {
    const impactX = enemy.fireRock
      ? Math.min(defenseWorldWidth - 24, Math.max(enemy.x + 120, target.x + 60))
      : target.x;
    const impactY = Math.min(defenseGroundY - 8, target.y);
    defenseBullets.push({
      x: enemy.x,
      y: enemy.y - (enemy.fireRock ? 28 : 16),
      impactX,
      impactY,
      angle: Math.atan2(impactY - enemy.y, impactX - enemy.x),
      speed: enemy.fireRock ? 185 : 245,
      damage: enemy.bulletDamage,
      splash: enemy.splashRadius || 54,
      arc: true,
      arcHeight: enemy.fireRock ? 170 : 80,
      startDistance: Math.max(1, Math.hypot(impactX - enemy.x, impactY - enemy.y)),
      traveled: 0,
      fireZone: enemy.fireRock,
      friendlySplash: true,
      team: "enemy"
    });
    enemy.shootCooldown = enemy.fireRock ? 5 : 2.15;
    return;
  }

  if (enemy.spreadShots) {
    const angle = Math.atan2(target.y - enemy.y, target.x - enemy.x);
    [-0.16, 0, 0.16].forEach((offset) => {
      defenseBullets.push({
        x: enemy.x + Math.cos(angle) * 14,
        y: enemy.y + Math.sin(angle) * 14,
        angle: angle + offset,
        speed: 300,
        damage: enemy.bulletDamage,
        team: "enemy"
      });
    });
    enemy.shootCooldown = 1.8;
    return;
  }

  if (enemy.chainShot) {
    if (fireDefenseElectroChain(enemy)) {
      enemy.shootCooldown = 2.4;
    } else {
      enemy.shootCooldown = 0.5;
    }
    return;
  }

  if (enemy.launchesTroops) {
    for (let i = 0; i < 5; i += 1) {
      const landingX = Math.max(60, Math.min(defenseWorldWidth - 60, target.x - 60 + i * 30));
      const impactY = target.y;
      defenseBullets.push({
        x: enemy.x,
        y: enemy.y - 22,
        impactX: landingX,
        impactY,
        angle: Math.atan2(impactY - (enemy.y - 22), landingX - enemy.x),
        speed: 260,
        arc: true,
        arcHeight: 150,
        startDistance: Math.max(1, Math.hypot(landingX - enemy.x, impactY - (enemy.y - 22))),
        traveled: 0,
        splash: 40,
        launchTroop: i % 2 === 0 ? "tank" : "soldier",
        impactDamage: enemy.impactDamage || 45,
        team: "enemy",
        launchDelay: i * 0.12
      });
    }
    enemy.shootCooldown = 3.5;
    return;
  }

  const angle = Math.atan2(target.y - enemy.y, target.x - enemy.x);
  defenseBullets.push({
    x: enemy.x + Math.cos(angle) * (enemy.type === "tank" || enemy.type === "boostedTank" ? 24 : 14),
    y: enemy.y + Math.sin(angle) * (enemy.type === "tank" || enemy.type === "boostedTank" ? 24 : 14),
    angle,
    speed: enemy.type === "tank" || enemy.type === "boostedTank" ? 245 : 310,
    damage: enemy.bulletDamage,
    team: "enemy"
  });
  enemy.shootCooldown = enemy.type === "tank" || enemy.type === "boostedTank" ? 1.45 : 1.05;
}

function getDefenseEnemyTarget(enemy) {
  const targets = [
    { x: defensePresident.x, y: defensePresident.y, priority: 2 },
    ...defenseBuildings
      .filter((building) => building.type !== "trap" && building.type !== "giantBomb" && building.type !== "airbomb" && building.type !== "pushTrap")
      .map((building) => ({ x: building.x, y: building.y, priority: building.type === "wall" ? 0 : 1 })),
    ...defenseFriendlyUnits.map((unit) => ({ x: unit.x, y: unit.y, priority: 1 }))
  ];

  if (defensePlayer.alive) {
    targets.unshift({ x: defensePlayer.x, y: defensePlayer.y, priority: 1 });
  }

  return targets
    .filter((target) => target.x > enemy.x)
    .sort((a, b) => {
      const distanceA = Math.hypot(a.x - enemy.x, a.y - enemy.y) - a.priority * 35;
      const distanceB = Math.hypot(b.x - enemy.x, b.y - enemy.y) - b.priority * 35;
      return distanceA - distanceB;
    })[0];
}

function getDefenseBlocker(enemy) {
  if (enemy.type === "plane") {
    return null;
  }
  const wall = defenseBuildings.find((building) => (
    building.type === "wall" &&
    Math.abs(building.x - enemy.x) < 25 &&
    Math.abs(building.y - enemy.y) < 52
  ));
  if (wall) {
    return wall;
  }
  const unit = defenseFriendlyUnits.find((item) => Math.hypot(enemy.x - item.x, enemy.y - item.y) < enemy.radius + item.radius);
  if (unit) {
    return unit;
  }
  if (defensePlayer.alive && Math.hypot(enemy.x - defensePlayer.x, enemy.y - defensePlayer.y) < enemy.radius + defensePlayer.radius) {
    return defensePlayer;
  }
  return null;
}

function shootDefenseBullet() {
  if (defenseState === "ready") {
    startDefenseGame();
  }
  if (defenseState === "ended" || defenseShootCooldown > 0 || !defensePlayer.alive) {
    return;
  }
  if (defenseAttackMode && defensePlayer.equipment.equipped) {
    if (defensePlayer.equipment.equipped !== "bow") {
      shootDefenseEquipmentBullet();
    }
    return;
  }
  const angle = Math.atan2(defenseMouse.worldY - defensePlayer.y, defenseMouse.worldX - defensePlayer.x);
  const equipmentPenalty = defensePlayer.equipment.equipped ? 0.7 : 1;
  const burstShots = defensePlayer.equipment.equipped ? 1 : defensePlayer.burstShots;
  const spread = burstShots === 1 ? [0] : [-0.13, 0, 0.13];
  const damage = getDefensePlayerAttackDamage();

  spread.slice(0, burstShots).forEach((angleOffset) => {
    defenseBullets.push({
      x: defensePlayer.x,
      y: defensePlayer.y - 4,
      angle: angle + angleOffset,
      speed: 470,
      damage: damage * equipmentPenalty,
      revengeLevel: defensePlayer.revengeLevel || 0,
      electroLevel: defensePlayer.electroLevel || 0,
      overchargeLevel: defensePlayer.overchargeLevel || 0,
      surgeLevel: defensePlayer.surgeLevel || 0,
      team: "player"
    });
  });
  if (!defensePlayer.equipment.equipped) {
    triggerDefensePlayerSurge();
  }

  defenseShootCooldown = defensePlayer.fireCooldown / getDefensePlayerAttackSpeedMultiplier();
}

function getDefensePlayerAttackDamage() {
  return Math.round((defensePlayer.weaponDamage * getDefensePlayerDamageMultiplier() + getDefensePlayerOverchargeDamage()) * 10) / 10;
}

function shootDefenseEquipmentBullet() {
  const equipped = defensePlayer.equipment.equipped;
  if (!equipped || defenseShootCooldown > 0) {
    return;
  }
  const level = defensePlayer.equipment.levels[equipped] || 1;
  const angle = Math.atan2(defenseMouse.worldY - defensePlayer.y, defenseMouse.worldX - defensePlayer.x);
  if (equipped === "minigun") {
    const maxLevel = defenseEquipmentDefinitions.minigun.maxLevel;
    const ratio = 1 / 3 + (1.2 - 1 / 3) * (Math.min(level, maxLevel) - 1) / (maxLevel - 1);
    defenseBullets.push({
      x: defensePlayer.x,
      y: defensePlayer.y - 4,
      angle,
      speed: 560,
      damage: Math.max(1, Math.round(getDefensePlayerAttackDamage() * ratio * 10) / 10),
      team: "player",
      equipmentType: equipped
    });
    defenseShootCooldown = Math.max(0.045, 0.16 - level * 0.007);
    return;
  }
  if (equipped === "bow") {
    const charge = Math.max(0, defenseAttackCharge || 0);
    const chargeRatio = Math.min(1, charge / 3);
    const levelScale = 1 + (level - 1) * 0.25;
    defenseBullets.push({
      x: defensePlayer.x,
      y: defensePlayer.y - 4,
      angle,
      speed: 520 + chargeRatio * 160,
      damage: Math.round(getDefensePlayerAttackDamage() * (1.2 + chargeRatio * 4.8) * levelScale * 10) / 10,
      pierceLeft: Math.min(9, 1 + level + Math.floor(chargeRatio * 4)),
      team: "player",
      equipmentType: equipped
    });
    defenseAttackCharge = 0;
    defenseShootCooldown = 0.55;
    return;
  }
  if (equipped === "electroGun") {
    defenseBullets.push({
      x: defensePlayer.x,
      y: defensePlayer.y - 4,
      angle,
      speed: 500,
      damage: 24 + level * 4.2,
      chainCount: Math.min(7, 2 + Math.floor(level / 3)),
      chainFalloff: 0.8,
      team: "player",
      equipmentType: equipped
    });
    defenseShootCooldown = Math.max(0.16, 0.42 - level * 0.01);
  }
}

function chainDefenseEquipmentDamage(source, bullet) {
  let damage = bullet.damage * (bullet.chainFalloff || 0.8);
  let current = source;
  for (let i = 0; i < bullet.chainCount; i += 1) {
    const next = defenseEnemies
      .filter((enemy) => enemy !== current && enemy.hp > 0 && !enemy.defeated && Math.hypot(enemy.x - current.x, enemy.y - current.y) <= 150)
      .sort((a, b) => Math.hypot(a.x - current.x, a.y - current.y) - Math.hypot(b.x - current.x, b.y - current.y))[0];
    if (!next) {
      return;
    }
    next.hp -= damage;
    current = next;
    damage *= bullet.chainFalloff || 0.8;
  }
}

function getDefensePlayerDamageMultiplier() {
  return 1 + getDefenseRevengeDamageBonus(defensePlayer.revengeLevel || 0);
}

function getDefensePlayerAttackSpeedMultiplier() {
  return 1 + getDefenseRevengeSpeedBonus(defensePlayer.revengeLevel || 0);
}

function getDefensePlayerOverchargeDamage(level = defensePlayer.overchargeLevel || 0) {
  return Math.round(Math.min(defenseOverchargeMaxLevel, level) * 0.5 * 10) / 10;
}

function getDefensePlayerSurgeCooldown(level = defensePlayer.surgeLevel || 0) {
  if (!level) {
    return 0;
  }
  return Math.max(2.4, 7.2 - level * 0.18);
}

function getDefensePlayerSurgeDamage(level = defensePlayer.surgeLevel || 0) {
  return Math.round((8 + level * 3.2) * 10) / 10;
}

function getDefensePlayerSurgeRadius(level = defensePlayer.surgeLevel || 0) {
  return 38 + level * 2;
}

function triggerDefensePlayerSurge() {
  const level = defensePlayer.surgeLevel || 0;
  if (!level || defensePlayer.surgeCooldown > 0 || defenseState !== "playing") {
    return;
  }
  const radius = getDefensePlayerSurgeRadius(level);
  const target = defenseEnemies
    .filter((enemy) => enemy.hp > 0 && !enemy.defeated)
    .sort((a, b) => Math.hypot(a.x - defenseMouse.worldX, a.y - defenseMouse.worldY) - Math.hypot(b.x - defenseMouse.worldX, b.y - defenseMouse.worldY))[0];
  const x = target ? target.x : defenseMouse.worldX;
  const y = target ? target.y : Math.min(defenseGroundY - 8, Math.max(90, defenseMouse.worldY));
  applyDefensePlayerSurge(x, y, level, radius);
  defensePlayer.surgeCooldown = getDefensePlayerSurgeCooldown(level);
}

function applyDefensePlayerSurge(x, y, level, radius) {
  const damage = getDefensePlayerSurgeDamage(level);
  const maxed = level >= defenseSurgeMaxLevel;
  defenseEnemies.forEach((enemy) => {
    if (enemy.hp <= 0 || enemy.defeated || Math.hypot(enemy.x - x, enemy.y - y) > radius + enemy.radius) {
      return;
    }
    enemy.hp -= damage;
    enemy.electroFlash = 0.26;
    if (maxed) {
      const push = 70 + enemy.radius * 0.8;
      enemy.x = Math.max(-30, enemy.x - push);
      enemy.y += Math.max(-18, Math.min(18, enemy.y - y)) * 0.25;
    }
  });
  defenseAirBursts.push({
    x,
    y,
    radius,
    life: 0.46,
    maxLife: 0.46,
    surge: true,
    maxed
  });
}

function placeDefenseBuilding(screenX, screenY) {
  if (defenseBattleMode) {
    return;
  }

  if (defenseState === "ready") {
    startDefenseGame();
  }
  if (defenseState === "ended") {
    return;
  }
  const position = getDefensePlacementPosition(screenX, screenY);
  const worldX = position.x;
  const worldY = position.y;
  const presidentMounted = defenseSelectedTool === "eagle";
  if (!canSpendDefenseMoney(defenseCosts[defenseSelectedTool])) {
    defenseOverlayText.textContent = "Not enough money for that build.";
    return;
  }
  if (!canBuildDefenseTool(defenseSelectedTool)) {
    defenseOverlayText.textContent = `You can only build ${defenseBuildLimits[defenseSelectedTool]} ${formatDefenseName(defenseSelectedTool)} defenses.`;
    return;
  }
  const maxBuildY = defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap" ? defenseCanvas.height - 28 : defenseGroundY - 18;
  const trapPlacement = defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap";
  const trapInBounds = worldX >= 70 && worldX <= defenseWorldWidth - 130 && worldY >= 45 && worldY <= maxBuildY;

  if (!presidentMounted && !trapPlacement && (worldX < 70 || worldX > defenseWorldWidth - 130 || worldY < 80 || worldY > maxBuildY)) {
    return;
  }
  if (trapPlacement && !trapInBounds) {
    return;
  }
  if (!presidentMounted && defenseBuildings.some((building) => isDefensePlacementBlocked(building, worldX, worldY))) {
    return;
  }
  spendDefenseMoney(defenseCosts[defenseSelectedTool]);
  defenseBuildings.push(createDefenseBuilding(defenseSelectedTool, worldX, worldY));
  updateDefenseStats();
  drawDefenseGame();
}

function isDefensePlacementBlocked(building, x, y) {
  if (defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap") {
    return (building.type === "trap" || building.type === "giantBomb" || building.type === "pushTrap") && Math.hypot(building.x - x, building.y - y) < 30;
  }
  const largeTypes = ["camp", "tankCamp", "airfield", "troopLauncher", "builder", "monolith", "infernoArtillery", "infernoSingle", "infernoMulti"];
  const spacing = building.type === "spell" || defenseSelectedTool === "spell" ? 26 : largeTypes.includes(building.type) || largeTypes.includes(defenseSelectedTool) ? 60 : 38;
  return Math.hypot(building.x - x, building.y - y) < spacing;
}

function canBuildDefenseTool(type) {
  return !defenseBuildLimits[type] || defenseBuildings.filter((building) => building.type === type).length < defenseBuildLimits[type];
}

function getDefensePlacementPosition(screenX, screenY) {
  const worldX = screenX + defenseCameraX;

  if (defenseSelectedTool === "eagle") {
    return { x: defensePresident.x, y: defenseGroundY - (defenseHoneyLevel > 0 ? 142 : 112) };
  }

  if (defenseSelectedTool === "wall") {
    return { x: worldX, y: defenseGroundY - 28 };
  }

  if (defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap") {
    return { x: worldX, y: screenY };
  }

  if (defenseSelectedTool === "camp" || defenseSelectedTool === "tankCamp" || defenseSelectedTool === "airfield" || defenseSelectedTool === "troopLauncher") {
    return { x: worldX, y: defenseGroundY - 32 };
  }

  return { x: worldX, y: defenseGroundY - 24 };
}

function createDefenseBuilding(type, x, y) {
  if (type === "wall") {
    const hp = getDefenseWallHpForLevel(defenseUpgradeLevels.wall);
    return { type, x, y, hp, maxHp: hp };
  }
  if (type === "cannon") {
    const hp = getDefenseBuildingHp(34, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(3 + defenseUpgrades.cannonDamageBonus),
      range: 350 + defenseUpgrades.cannonRangeBonus,
      fireRate: 1.15
    };
  }
  if (type === "ricochet") {
    const hp = getDefenseRicochetHp();
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseRicochetDamage(),
      range: 390 + defenseUpgrades.ricochetRangeBonus,
      fireRate: 1.25,
      bounces: getDefenseRicochetBounces()
    };
  }
  if (type === "antiAir") {
    const hp = getDefenseBuildingHp(32, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(6 + defenseUpgrades.antiAirDamageBonus),
      range: 520 + defenseUpgrades.antiAirRangeBonus,
      fireRate: 0.58
    };
  }
  if (type === "airbomb") {
    const hp = getDefenseBuildingHp(36, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      invulnerable: true,
      cooldown: 0,
      damage: getDefenseAirbombDamage(),
      range: 210 + defenseUpgrades.airbombRangeBonus,
      fireRate: 1.5
    };
  }
  if (type === "airburst") {
    const hp = getDefenseBuildingHp(30, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(3.5),
      range: 460,
      fireRate: 2.2,
      splashRadius: 110
    };
  }
  if (type === "xbow") {
    const hp = getDefenseBuildingHp(44, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(getDefenseXbowDps() * 0.1),
      range: 1050,
      groundRange: 1350,
      fireRate: 0.105,
      groundOnly: false
    };
  }
  if (type === "gigaTesla") {
    const hp = getDefenseBuildingHp(90, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(getDefenseGigaTeslaDamage()),
      chains: getDefenseGigaTeslaChains(),
      range: 280,
      fireRate: 1.2
    };
  }
  if (type === "scattershot") {
    const hp = getDefenseBuildingHp(50, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(getDefenseScattershotDamage()),
      range: 1050,
      fireRate: 4,
      splashRadius: 105,
      splashScale: 0.6
    };
  }
  if (type === "wizard") {
    const hp = getDefenseBuildingHp(40, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(getDefenseWizardDamage()),
      range: 300,
      fireRate: 1.1
    };
  }
  if (type === "superWizard") {
    const hp = getDefenseBuildingHp(80, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(70),
      range: 440,
      fireRate: 1.4
    };
  }
  if (type === "grenade") {
    const hp = getDefenseBuildingHp(34, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(2.8 + defenseUpgrades.grenadeDamageBonus),
      range: 340 + defenseUpgrades.grenadeRangeBonus,
      fireRate: 1.05
    };
  }
  if (type === "minigun") {
    const hp = getDefenseBuildingHp(38, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseBuildingDamage(1.2 + defenseUpgrades.minigunDamageBonus),
      range: 310 + defenseUpgrades.minigunRangeBonus,
      fireRate: 0.16
    };
  }
  if (type === "mortar") {
    const minigunDamage = getDefenseBuildingDamage(1.2 + defenseUpgrades.minigunDamageBonus);
    const minigunRange = 310 + defenseUpgrades.minigunRangeBonus;
    const hp = getDefenseBuildingHp(46, type);
    const damage = Math.round((minigunDamage * 5.5 + defenseUpgrades.mortarDamageBonus) * 10) / 10;
    const range = minigunRange * 2 * 1.3 + defenseUpgrades.mortarRangeBonus;
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage,
      range,
      fireRate: 1.35
    };
  }
  if (type === "multiMortar") {
    const mortar = createDefenseBuilding("mortar", x, y);
    const hp = getDefenseBuildingHp(52, type);
    return {
      ...mortar,
      type,
      hp,
      maxHp: hp,
      damage: Math.round((mortar.damage * 0.4 + defenseUpgrades.multiMortarDamageBonus) * 10) / 10,
      range: Math.round(mortar.range * 1.08 + defenseUpgrades.multiMortarRangeBonus),
      fireRate: Math.round(mortar.fireRate * 1.2 * 100) / 100
    };
  }
  if (type === "lavaLauncher") {
    const mortar = createDefenseBuilding("mortar", x, y);
    const hp = getDefenseBuildingHp(120, type);
    return {
      ...mortar,
      type,
      hp,
      maxHp: hp,
      damage: Math.round(mortar.damage * 1.26 * 10) / 10,
      range: Math.round(mortar.range * 3),
      fireRate: Math.round(mortar.fireRate * 16 * 100) / 100,
      splashRadius: 75
    };
  }
  if (type === "gigaInferno") {
    const hp = getDefenseBuildingHp(150, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      range: 630,
      maxTargets: 5
    };
  }
  if (type === "ypj20") {
    const finalBoost = defenseYpjLevel >= 20;
    const hp = Math.round(getDefenseBuildingHp(160, type) * (finalBoost ? 1.6 : 1));
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      range: 1200,
      fireRate: finalBoost ? Math.round((3.85 / 1.92) * 100) / 100 : 3.85,
      beams: 3
    };
  }
  if (type === "freezeSpell") {
    const mortar = createDefenseBuilding("mortar", x, y);
    const spell = createDefenseBuilding("spell", x, y);
    const level = getDefenseMergedSpellLevel();
    const hp = getDefenseBuildingHp(96, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: 0,
      range: Math.round((mortar.range + spell.range) * 0.5 + level * 8),
      fireRate: getDefenseMergedSpellReload(level),
      splashRadius: Math.round(46 * 1.4),
      freezeDuration: getDefenseMergedSpellFreezeDuration(level),
      mode: "freeze"
    };
  }
  if (type === "troopLauncher") {
    const cannonRange = 350 + 10 * 18;
    const level = defenseUpgradeLevels.troopLauncher || 0;
    const rangeMultiplier = 1 + 0.3 * Math.min(12, level) / 12;
    const hp = getDefenseBuildingHp(64 + defenseUpgrades.troopLauncherTraining * 8, type);
    return {
      type,
      x,
      y,
      id: `defense-${Date.now()}-${Math.random()}`,
      hp,
      maxHp: hp,
      cooldown: 0.8,
      range: Math.round(cannonRange * rangeMultiplier),
      fireRate: Math.max(1.6, 3.1 - defenseUpgrades.troopLauncherTraining * 0.1),
      troopCount: getDefenseTroopLauncherShotCount(),
      troopHp: getDefenseFriendlyValue(14 + level * 3),
      troopDamage: getDefenseFriendlyValue(2 + Math.floor(level / 3)),
      maxSummons: 10
    };
  }
  if (type === "missile") {
    const hp = getDefenseBuildingHp(68, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseMissileDamage(),
      range: Math.round(560 * 1.4) + defenseUpgrades.missileRangeBonus,
      fireRate: 4
    };
  }
  if (type === "rapidMissile") {
    const missile = createDefenseBuilding("missile", x, y);
    const hp = getDefenseBuildingHp(78, type);
    return {
      ...missile,
      type,
      hp,
      maxHp: hp,
      damage: Math.round((missile.damage * 0.2 + defenseUpgrades.rapidMissileDamageBonus) * 1.3 * 10) / 10,
      range: missile.range + defenseUpgrades.rapidMissileRangeBonus,
      fireRate: 1.7,
      shotCount: getDefenseRapidMissileShotCount(),
      splashRadius: 0
    };
  }
  if (type === "infernoArtillery") {
    const hp = getDefenseBuildingHp(150, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseInfernoArtilleryDamage(),
      splashRadius: getDefenseInfernoArtillerySplashRadius(),
      range: Infinity,
      fireRate: 6.1
    };
  }
  if (type === "eagle") {
    const hp = getDefenseBuildingHp(410, type);
    return {
      type,
      x: defensePresident.x,
      y: defenseGroundY - 112,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: getDefenseEagleDamage(),
      minHealthDamage: 0.3 + defenseUpgrades.eagleMinHealthBonus,
      splashRadius: Math.min(defenseEagleMaxSplashRadius, Math.round(105 * 1.3 + defenseUpgrades.eagleRadiusBonus)),
      range: Infinity,
      fireRate: 6.8
    };
  }
  if (type === "monolith") {
    const mortar = createDefenseBuilding("mortar", x, y);
    const hp = getDefenseBuildingHp(150, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: 0,
      percentDamage: getDefenseMonolithPercentDamage(),
      range: Math.round(mortar.range * 0.7 + defenseUpgrades.monolithRangeBonus),
      fireRate: 3.4
    };
  }
  if (type === "trap" || type === "giantBomb" || type === "pushTrap") {
    return {
      type,
      x,
      y,
      hp: 1,
      maxHp: 1,
      invulnerable: true
    };
  }
  if (type === "camp" || type === "tankCamp" || type === "airfield") {
    const hpBonus = type === "camp"
      ? defenseUpgrades.campHpBonus
      : type === "tankCamp"
        ? defenseUpgrades.tankCampTraining * 16
        : defenseUpgrades.airfieldTraining * 14;
    const training = type === "camp"
      ? defenseUpgrades.campTraining
      : type === "tankCamp"
        ? defenseUpgrades.tankCampTraining
        : defenseUpgrades.airfieldTraining;
    const hp = getDefenseBuildingHp((type === "camp" ? 50 : type === "tankCamp" ? 70 : 60) + hpBonus, type);
    return {
      type,
      x,
      y,
      id: `defense-${Date.now()}-${Math.random()}`,
      hp,
      maxHp: hp,
      cooldown: 0.8,
      spawnRate: Math.max(
        type === "tankCamp" ? 5.6 : type === "airfield" ? 6.1 : 2.1,
        (type === "tankCamp" ? 7.2 : type === "airfield" ? 7.8 : 3.2) - training * 0.25
      )
    };
  }
  if (type === "builder") {
    const hp = getDefenseBuildingHp(74, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      repairRate: getDefenseBuilderRepairRate(),
      range: 260 + defenseUpgrades.builderRangeBonus
    };
  }
  if (type === "infernoSingle" || type === "infernoMulti") {
    const hp = getDefenseBuildingHp(118, type);
    const scale = getDefenseInfernoScale();
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      cooldown: 0,
      damage: Math.round((type === "infernoSingle" ? 360 : 9) * scale),
      range: Math.round(273 * scale),
      targetCount: type === "infernoMulti" ? getDefenseInfernoMultiTargetCount() : 1,
      charge: 0,
      active: false
    };
  }
  if (type === "spell") {
    const hp = getDefenseBuildingHp(50, type);
    return {
      type,
      x,
      y,
      hp,
      maxHp: hp,
      range: 100 + defenseUpgrades.spellRangeBonus,
      damageBuff: getDefenseSpellDamageMultiplier(),
      speedBuff: getDefenseSpellSpeedMultiplier()
    };
  }
  return {
    type,
    x,
    y,
    hp: getDefenseBuildingHp(26, type),
    maxHp: getDefenseBuildingHp(26, type),
    cooldown: 0,
    damage: getDefenseBuildingDamage(2.8 + defenseUpgrades.turretDamageBonus),
    range: 440 + defenseUpgrades.turretRangeBonus,
    fireRate: 0.48
  };
}

function getDefenseBuildingHp(value, type = "") {
  if (type === "wall") {
    return getDefenseWallHpForLevel(defenseUpgradeLevels.wall);
  }
  const hp = Math.ceil(getDefenseUnscaledBuildingHp(value, type) * getDefenseHealthScale(type));
  return Math.min(getDefenseMaxHpCap(type), hp);
}

function getDefenseUnscaledBuildingHp(value, type = "") {
  const extraMultiplier = type === "missile"
    ? 1
    : type === "wall"
      ? defenseWallExtraHealthMultiplier
      : defenseExtraHealthMultiplier;
  return Math.ceil(value * defenseBuildingHealthMultiplier * extraMultiplier);
}

function getDefenseWallHpForLevel(level) {
  const baseHp = getDefenseUnscaledBuildingHp(55, "wall");
  return Math.round(baseHp + ((1000 - baseHp) * level) / getDefenseUpgradeMaxLevel("wall"));
}

function getDefenseHealthScale(type) {
  if (type === "wall" || type === "trap") {
    return 1;
  }
  const level = defenseUpgradeLevels[type] || 0;
  return 1 + (1.5 * level) / getDefenseUpgradeMaxLevel(type);
}

function getDefenseMaxHpCap(type) {
  if (type === "wall") {
    return 1000;
  }
  if (type === "eagle") {
    return 800;
  }
  if (type === "trap") {
    return 1;
  }
  const lateTypes = ["multiMortar", "missile", "rapidMissile", "monolith", "eagle", "infernoArtillery", "infernoSingle", "infernoMulti"];
  return lateTypes.includes(type) ? defenseLateMaxHp : defenseStandardMaxHp;
}

function getDefenseBuildingDamage(value) {
  return Math.round(value * defenseBuildingDamageMultiplier * 10) / 10;
}

function getDefenseAirbombDamage() {
  return Math.round(getDefenseBuildingDamage(6 + defenseUpgrades.antiAirDamageBonus + defenseUpgrades.airbombDamageBonus) * 1.5 * 10) / 10;
}

function getDefenseXbowLevel() {
  return 1 + (defenseUpgradeLevels?.xbow || 0);
}

function getDefenseXbowDps(level = getDefenseXbowLevel()) {
  return Math.round((26 + (91 * (level - 1)) / 19) * 10) / 10;
}

function getDefenseXbowUpgradeCost() {
  return Math.round(190 * Math.pow(1560 / 190, (getDefenseXbowLevel() - 1) / 18));
}

function getDefenseGigaTeslaLevel() {
  return 1 + (defenseUpgradeLevels?.gigaTesla || 0);
}

function getDefenseGigaTeslaDamage(level = getDefenseGigaTeslaLevel()) {
  return Math.round(30 + (90 * (level - 1)) / 14);
}

function getDefenseGigaTeslaChains(level = getDefenseGigaTeslaLevel()) {
  return Math.round(3 + (4 * (level - 1)) / 14);
}

function getDefenseWizardDamage(level = 1 + (defenseUpgradeLevels?.wizard || 0)) {
  return Math.round((4 + (level - 1) * 1.2) * 10) / 10;
}

function getDefensePushTrapDistance() {
  return (3 + (defenseUpgradeLevels?.pushTrap || 0)) * 30;
}

function getDefenseScattershotDamage(level = 1 + (defenseUpgradeLevels?.scattershot || 0)) {
  return Math.round(190 * (1 + (0.65 * (level - 1)) / 9));
}

function getDefenseMissileDamage() {
  return Math.round(getDefenseBuildingDamage(22 + defenseUpgrades.missileDamageBonus) * defenseMissileDamageMultiplier * 10) / 10;
}

function getDefenseEagleDamage() {
  return Math.round((getDefenseMissileDamage() * 1.5 + defenseUpgrades.eagleDamageBonus) * 10) / 10;
}

function getDefenseInfernoArtilleryProgress(level = defenseUpgradeLevels.infernoArtillery || 0) {
  return Math.max(0, Math.min(1, level / getDefenseUpgradeMaxLevel("infernoArtillery")));
}

function getDefenseInfernoArtilleryDamage(level = defenseUpgradeLevels.infernoArtillery || 0) {
  const progress = getDefenseInfernoArtilleryProgress(level);
  const multiplier = 0.04 + progress * 0.16;
  return Math.round(getDefenseEagleDamage() * multiplier * 10) / 10;
}

function getDefenseInfernoArtilleryShotCount(level = defenseUpgradeLevels.infernoArtillery || 0) {
  return Math.max(1, Math.min(4, 1 + Math.floor((level * 3) / getDefenseUpgradeMaxLevel("infernoArtillery"))));
}

function getDefenseInfernoArtillerySplashRadius(level = defenseUpgradeLevels.infernoArtillery || 0) {
  return Math.round(64 + getDefenseInfernoArtilleryProgress(level) * 48);
}

function getDefenseRicochetDamage(level = defenseUpgradeLevels.ricochet || 0) {
  const maxLevel = getDefenseUpgradeMaxLevel("ricochet");
  return Math.round((20 + (70 * level) / maxLevel) * 0.6);
}

function getDefenseRicochetBounces(level = defenseUpgradeLevels.ricochet || 0) {
  const maxLevel = getDefenseUpgradeMaxLevel("ricochet");
  return Math.min(6, 1 + Math.floor((5 * level) / maxLevel));
}

function getDefenseRicochetHp(level = defenseUpgradeLevels.ricochet || 0) {
  const maxLevel = getDefenseUpgradeMaxLevel("ricochet");
  return Math.round(120 + (280 * level) / maxLevel);
}

function getDefenseBuilderRepairRate() {
  return 20 + defenseUpgrades.builderRepairBonus;
}

function getDefenseInfernoScale() {
  return 1 + defenseUpgrades.infernoStatBonus;
}

function getDefenseInfernoMultiTargetCount(level = defenseUpgradeLevels.infernoMulti || defenseUpgradeLevels.infernoSingle || 0) {
  return Math.min(8, 3 + Math.floor(level * 5 / 12));
}

function getDefenseSpellDamageMultiplier() {
  return 1.4 + defenseUpgrades.spellDamageBonus;
}

function getDefenseSpellSpeedMultiplier() {
  return 1.3 + defenseUpgrades.spellSpeedBonus;
}

function getDefenseRageSource(building) {
  return defenseBuildings.find((item) => (
    item.type === "spell" &&
    item.hp > 0 &&
    building !== item &&
    Math.hypot(item.x - building.x, item.y - building.y) <= getDefenseEffectiveRange(item)
  ));
}

function getDefenseRageDamageMultiplier(building) {
  const source = getDefenseRageSource(building);
  return source ? 1 + ((getDefenseSpellDamageMultiplier() - 1) * getDefensePowerUpMultiplier(source)) : 1;
}

function getDefenseRageSpeedMultiplier(building) {
  const source = getDefenseRageSource(building);
  return source ? 1 + ((getDefenseSpellSpeedMultiplier() - 1) * getDefensePowerUpMultiplier(source)) : 1;
}

function getDefenseRapidMissileShotCount(level = defenseUpgradeLevels.rapidMissile || 0) {
  if (level >= 12) {
    return 5;
  }
  if (level >= 8) {
    return 4;
  }
  if (level >= 6) {
    return 3;
  }
  if (level >= 3) {
    return 2;
  }
  return 1;
}

function getDefenseMonolithPercentDamage(level = defenseUpgradeLevels.monolith || 0) {
  if (level >= 12) {
    return 0.34;
  }
  if (level >= 10) {
    return 0.3;
  }
  if (level >= 8) {
    return 0.26;
  }
  if (level >= 7) {
    return 0.21;
  }
  if (level >= 5) {
    return 0.17;
  }
  return 0.14;
}

function drawDefenseGame() {
  defenseCtx.clearRect(0, 0, defenseCanvas.width, defenseCanvas.height);
  const shaking = (defenseScreenShake || 0) > 0;
  if (shaking) {
    defenseCtx.save();
    defenseCtx.translate((Math.random() - 0.5) * defenseScreenShake * 14, (Math.random() - 0.5) * defenseScreenShake * 10);
  }
  if (defenseAttackMode) {
    drawDefenseAttackWorld();
  } else {
    drawDefenseWorld();
  }
  drawDefensePlacementPreview();
  defenseFireZones.forEach(drawDefenseFireZone);
  defenseAirBursts.forEach(drawDefenseAirBurst);
  if (!defenseAttackMode) {
    defenseBuildings.forEach(drawDefenseBuilding);
    defenseFriendlyUnits.forEach(drawDefenseFriendlyUnit);
  }
  defenseEnemies.forEach(drawDefenseEnemy);
  defenseBullets.forEach(drawDefenseBullet);
  if ((defenseSkyDarken || 0) > 0) {
    defenseCtx.fillStyle = `rgba(8, 10, 24, ${Math.min(0.55, defenseSkyDarken * 0.55)})`;
    defenseCtx.fillRect(0, 0, defenseCanvas.width, defenseCanvas.height * 0.62);
  }
  drawDefenseBeams();
  drawDefenseGigaInfernoBeams();
  if (!defenseAttackMode) {
    drawDefensePresident();
  }
  drawDefensePlayer();
  drawDefenseAttackChargeBar();
  drawDefenseMergePick();
  if (shaking) {
    defenseCtx.restore();
    defenseCtx.fillStyle = `rgba(255, 244, 166, ${defenseScreenShake * 0.22})`;
    defenseCtx.fillRect(0, 0, defenseCanvas.width, defenseCanvas.height);
  }
}

function drawDefenseGigaInfernoBeams() {
  if (defenseAttackMode) {
    return;
  }
  defenseBuildings.forEach((building) => {
    if (building.type !== "gigaInferno" || !building.gigaTargets) {
      return;
    }
    building.gigaTargets.forEach((target) => {
      if (target.defeated || target.hp <= 0) {
        return;
      }
      defenseCtx.save();
      defenseCtx.lineCap = "round";
      defenseCtx.shadowColor = "#ff7a22";
      defenseCtx.shadowBlur = 14;
      defenseCtx.strokeStyle = "rgba(255, 122, 34, 0.5)";
      defenseCtx.lineWidth = 24;
      defenseCtx.beginPath();
      defenseCtx.moveTo(building.x - defenseCameraX, building.y - 30);
      defenseCtx.lineTo(target.x - defenseCameraX, target.y);
      defenseCtx.stroke();
      defenseCtx.strokeStyle = "rgba(255, 209, 92, 0.85)";
      defenseCtx.lineWidth = 9;
      defenseCtx.beginPath();
      defenseCtx.moveTo(building.x - defenseCameraX, building.y - 30);
      defenseCtx.lineTo(target.x - defenseCameraX, target.y);
      defenseCtx.stroke();
      defenseCtx.restore();
    });
  });
}

function drawDefenseBeams() {
  defenseBeams.forEach((beam) => {
    const fade = Math.max(0, beam.life / beam.maxLife);
    const color = beam.color || "#fff4a6";
    defenseCtx.save();
    defenseCtx.shadowColor = color;
    defenseCtx.shadowBlur = 18;
    defenseCtx.lineCap = "round";
    defenseCtx.strokeStyle = defenseHexToRgba(color, 0.25 + fade * 0.6);
    defenseCtx.lineWidth = 60 * (0.3 + fade * 0.7);
    defenseCtx.beginPath();
    defenseCtx.moveTo(beam.x1 - defenseCameraX, beam.y1);
    defenseCtx.lineTo(beam.x2 - defenseCameraX, beam.y2);
    defenseCtx.stroke();
    defenseCtx.strokeStyle = `rgba(255, 255, 255, ${0.35 + fade * 0.6})`;
    defenseCtx.lineWidth = 14 * (0.3 + fade * 0.7);
    defenseCtx.beginPath();
    defenseCtx.moveTo(beam.x1 - defenseCameraX, beam.y1);
    defenseCtx.lineTo(beam.x2 - defenseCameraX, beam.y2);
    defenseCtx.stroke();
    defenseCtx.restore();
  });
}

function drawDefenseAttackChargeBar() {
  if (!defenseAttackMode || defensePlayer?.equipment?.equipped !== "bow" || !defensePlayer.alive) {
    return;
  }
  const chargeRatio = Math.min(1, (defenseAttackCharge || 0) / 3);
  if (chargeRatio <= 0.02) {
    return;
  }
  const x = defensePlayer.x - defenseCameraX;
  const y = defensePlayer.y - defensePlayer.radius - 18;
  defenseCtx.fillStyle = "rgba(10, 16, 12, 0.72)";
  defenseCtx.fillRect(x - 21, y, 42, 7);
  defenseCtx.fillStyle = chargeRatio >= 1 ? "#9cf56b" : "#f2b84b";
  defenseCtx.fillRect(x - 20, y + 1, 40 * chargeRatio, 5);
  defenseCtx.strokeStyle = "rgba(255, 255, 255, 0.55)";
  defenseCtx.lineWidth = 1;
  defenseCtx.strokeRect(x - 21, y, 42, 7);
}

function drawDefenseAttackWorld() {
  const scene = getDefenseStoryScene();
  const width = defenseCanvas.width;
  const height = defenseCanvas.height;
  const skyGradient = defenseCtx.createLinearGradient(0, 0, 0, defenseGroundY);
  skyGradient.addColorStop(0, scene.sky);
  skyGradient.addColorStop(1, scene.horizon);
  defenseCtx.fillStyle = skyGradient;
  defenseCtx.fillRect(0, 0, width, height);

  const farX = defenseCameraX * 0.35;
  const midX = defenseCameraX * 0.6;

  if (scene.key === "plains") {
    defenseCtx.fillStyle = "#fff3b0";
    defenseCtx.beginPath();
    defenseCtx.arc(width - 150, 74, 32, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "rgba(255, 255, 255, 0.85)";
    for (let i = 0; i < 4; i += 1) {
      const cx = ((i * 420 + 120 - farX) % (width + 260) + (width + 260)) % (width + 260) - 130;
      defenseCtx.beginPath();
      defenseCtx.ellipse(cx, 78 + (i % 2) * 40, 52, 17, 0, 0, Math.PI * 2);
      defenseCtx.ellipse(cx + 34, 70 + (i % 2) * 40, 34, 13, 0, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.fillStyle = "#8fae66";
    for (let i = 0; i < 5; i += 1) {
      const hx = ((i * 500 + 80 - midX) % (width + 400) + (width + 400)) % (width + 400) - 200;
      defenseCtx.beginPath();
      defenseCtx.ellipse(hx, defenseGroundY + 12, 220, 74, 0, Math.PI, 0);
      defenseCtx.fill();
    }
  } else if (scene.key === "forest") {
    defenseCtx.fillStyle = "#33502c";
    for (let i = 0; i < 9; i += 1) {
      const tx = ((i * 210 + 40 - farX) % (width + 300) + (width + 300)) % (width + 300) - 150;
      defenseCtx.fillRect(tx - 7, defenseGroundY - 92, 14, 92);
      defenseCtx.beginPath();
      defenseCtx.arc(tx, defenseGroundY - 106, 40, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.fillStyle = "#26401f";
    for (let i = 0; i < 6; i += 1) {
      const tx = ((i * 340 + 150 - midX) % (width + 320) + (width + 320)) % (width + 320) - 160;
      defenseCtx.fillRect(tx - 10, defenseGroundY - 128, 20, 128);
      defenseCtx.beginPath();
      defenseCtx.arc(tx, defenseGroundY - 146, 52, 0, Math.PI * 2);
      defenseCtx.fill();
    }
  } else if (scene.key === "cave") {
    defenseCtx.fillStyle = "#4a4340";
    defenseCtx.beginPath();
    defenseCtx.moveTo(width * 0.35 - farX * 0.4, defenseGroundY);
    defenseCtx.lineTo(width * 0.55 - farX * 0.4, 84);
    defenseCtx.lineTo(width * 0.78 - farX * 0.4, defenseGroundY);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.fillStyle = "#15110f";
    defenseCtx.beginPath();
    defenseCtx.ellipse(width * 0.58 - farX * 0.4, defenseGroundY - 40, 62, 64, 0, Math.PI, 0);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "rgba(255, 211, 130, 0.55)";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.ellipse(width * 0.58 - farX * 0.4, defenseGroundY - 40, 62, 64, 0, Math.PI, 0);
    defenseCtx.stroke();
  } else if (scene.key === "cavern") {
    defenseCtx.fillStyle = "#241f38";
    defenseCtx.fillRect(0, 0, width, 64);
    defenseCtx.fillStyle = "#2f2949";
    for (let i = 0; i < 12; i += 1) {
      const sx = ((i * 150 + 30 - midX) % (width + 160) + (width + 160)) % (width + 160) - 80;
      defenseCtx.beginPath();
      defenseCtx.moveTo(sx - 14, 0);
      defenseCtx.lineTo(sx + 14, 0);
      defenseCtx.lineTo(sx, 34 + (i % 4) * 14);
      defenseCtx.closePath();
      defenseCtx.fill();
    }
    defenseCtx.save();
    defenseCtx.shadowColor = "#7fe3ff";
    defenseCtx.shadowBlur = 12;
    defenseCtx.fillStyle = "#7fe3ff";
    for (let i = 0; i < 7; i += 1) {
      const cx = ((i * 260 + 90 - midX) % (width + 220) + (width + 220)) % (width + 220) - 110;
      defenseCtx.beginPath();
      defenseCtx.moveTo(cx, defenseGroundY);
      defenseCtx.lineTo(cx + 10, defenseGroundY - 26 - (i % 3) * 10);
      defenseCtx.lineTo(cx + 20, defenseGroundY);
      defenseCtx.closePath();
      defenseCtx.fill();
    }
    defenseCtx.restore();
  } else if (scene.key === "jungle") {
    defenseCtx.fillStyle = "#1e3a22";
    for (let i = 0; i < 8; i += 1) {
      const tx = ((i * 240 + 60 - farX) % (width + 320) + (width + 320)) % (width + 320) - 160;
      defenseCtx.beginPath();
      defenseCtx.arc(tx, defenseGroundY - 150 - (i % 3) * 26, 62, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.fillStyle = "#2a5a30";
    for (let i = 0; i < 6; i += 1) {
      const lx = ((i * 330 + 120 - midX) % (width + 300) + (width + 300)) % (width + 300) - 150;
      defenseCtx.beginPath();
      defenseCtx.ellipse(lx, defenseGroundY - 96 - (i % 2) * 40, 42, 16, i % 2 ? -0.4 : 0.4, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.strokeStyle = "#3f7a3f";
    defenseCtx.lineWidth = 3;
    for (let i = 0; i < 7; i += 1) {
      const vx = ((i * 280 + 40 - midX) % (width + 200) + (width + 200)) % (width + 200) - 100;
      defenseCtx.beginPath();
      defenseCtx.moveTo(vx, 54);
      defenseCtx.quadraticCurveTo(vx + 10, 94 + (i % 3) * 20, vx - 4, 124 + (i % 3) * 24);
      defenseCtx.stroke();
    }
  } else {
    defenseCtx.fillStyle = "rgba(255, 110, 50, 0.16)";
    defenseCtx.fillRect(0, defenseGroundY - 120, width, 120);
    defenseCtx.save();
    defenseCtx.shadowColor = "#ff7a2e";
    defenseCtx.shadowBlur = 16;
    defenseCtx.fillStyle = "#ff7a2e";
    for (let i = 0; i < 6; i += 1) {
      const lx = ((i * 300 + 60 - midX) % (width + 260) + (width + 260)) % (width + 260) - 130;
      defenseCtx.beginPath();
      defenseCtx.ellipse(lx, defenseGroundY - 6, 44, 8, 0, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.restore();
  }

  defenseCtx.fillStyle = scene.banner;
  defenseCtx.fillRect(0, 0, width, 54);
  defenseCtx.fillStyle = "#f7d36b";
  defenseCtx.font = "800 18px Arial";
  defenseCtx.fillText(`Story Level ${defenseStoryLevel + 1} - ${scene.name}`, 18, 24);
  defenseCtx.font = "700 13px Arial";
  defenseCtx.fillStyle = "#f2e8c9";
  defenseCtx.fillText(`Attacks used: ${defenseStoryAttacksUsed}/3 | Destroy every spawner to clear the level`, 18, 43);

  defenseCtx.fillStyle = scene.ground;
  defenseCtx.fillRect(0, defenseGroundY, width, height - defenseGroundY);
  defenseCtx.fillStyle = scene.groundDark;
  defenseCtx.fillRect(0, defenseGroundY, width, 6);

  defenseCtx.fillStyle = scene.platform;
  defenseAttackPlatforms.forEach((platform) => {
    const x = platform.x - defenseCameraX;
    if (x + platform.width < -40 || x > width + 40) {
      return;
    }
    if (platform.ground) {
      defenseCtx.fillStyle = scene.ground;
      defenseCtx.fillRect(x, platform.y, platform.width, platform.height);
      defenseCtx.fillStyle = scene.groundDark;
      defenseCtx.fillRect(x, platform.y, platform.width, 6);
      defenseCtx.fillStyle = scene.platform;
      return;
    }
    defenseCtx.fillRect(x, platform.y, platform.width, platform.height);
    defenseCtx.fillStyle = scene.platformDark;
    defenseCtx.fillRect(x, platform.y + platform.height - 4, platform.width, 4);
    defenseCtx.fillStyle = scene.platform;
  });

  if (defenseStoryExitOpen) {
    drawDefenseStoryExit();
  }
}

function drawDefenseStoryExit() {
  const x = defenseWorldWidth - 130 - defenseCameraX;
  defenseCtx.save();
  defenseCtx.shadowColor = "#9cf56b";
  defenseCtx.shadowBlur = 18;
  defenseCtx.strokeStyle = "#9cf56b";
  defenseCtx.lineWidth = 5;
  defenseCtx.beginPath();
  defenseCtx.ellipse(x, defenseGroundY - 42, 26, 46, 0, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.fillStyle = "rgba(156, 245, 107, 0.28)";
  defenseCtx.fill();
  defenseCtx.restore();
  defenseCtx.textAlign = "center";
  defenseCtx.fillStyle = "#eaffd0";
  defenseCtx.font = "800 14px Arial";
  defenseCtx.fillText("EXIT", x, defenseGroundY - 104);
  defenseCtx.textAlign = "left";
  if (defensePlayer.x < defenseWorldWidth - 700) {
    defenseCtx.fillStyle = "rgba(255, 255, 255, 0.92)";
    defenseCtx.font = "700 14px Arial";
    defenseCtx.fillText("All spawners destroyed - push forward to the exit portal at the far right", 18, 72);
  }
}

function drawDefensePlacementPreview() {
  if (!defenseMouse.inside || defenseState === "ended" || defenseBattleMode) {
    return;
  }

  const position = getDefensePlacementPosition(defenseMouse.x, defenseMouse.y);
  const x = position.x - defenseCameraX;
  const y = position.y;
  const canAfford = canSpendDefenseMoney(defenseCosts[defenseSelectedTool]);
  const underLimit = canBuildDefenseTool(defenseSelectedTool);
  const blocked = defenseBuildings.some((building) => isDefensePlacementBlocked(building, position.x, position.y));
  const maxBuildY = defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap" ? defenseCanvas.height - 28 : defenseGroundY - 18;
  const presidentMounted = defenseSelectedTool === "eagle";
  const trapPlacement = defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap";
  const valid = canAfford && underLimit && (presidentMounted || (!blocked && position.x >= 70 && position.x <= defenseWorldWidth - 130 && position.y >= (trapPlacement ? 45 : 0) && position.y <= maxBuildY));

  if (defenseSelectedTool === "scattershot") {
    defenseCtx.save();
    defenseCtx.strokeStyle = valid ? "rgba(88, 166, 255, 0.85)" : "rgba(216, 59, 59, 0.6)";
    defenseCtx.lineWidth = 2;
    defenseCtx.setLineDash([6, 5]);
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 105, 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.restore();
  }

  defenseCtx.save();
  defenseCtx.globalAlpha = valid ? 0.42 : 0.22;
  defenseCtx.fillStyle = valid ? "#17211c" : "#d83b3b";
  defenseCtx.beginPath();
  defenseCtx.ellipse(x, trapPlacement ? y + 8 : defenseGroundY - 4, defenseSelectedTool === "wall" ? 22 : 28, 8, 0, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.globalAlpha = valid ? 0.7 : 0.45;

  if (defenseSelectedTool === "wall") {
    defenseCtx.fillStyle = valid ? "#74675d" : "#d83b3b";
    defenseCtx.fillRect(x - 16, y - 28, 32, 56);
  } else if (defenseSelectedTool === "trap" || defenseSelectedTool === "giantBomb" || defenseSelectedTool === "pushTrap") {
    defenseCtx.fillStyle = valid ? "#6b2424" : "#d83b3b";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, defenseSelectedTool === "giantBomb" ? 20 : 14, 0, Math.PI * 2);
    defenseCtx.fill();
  } else if (defenseSelectedTool === "camp" || defenseSelectedTool === "tankCamp" || defenseSelectedTool === "airfield" || defenseSelectedTool === "troopLauncher" || defenseSelectedTool === "builder") {
    defenseCtx.fillStyle = valid ? defenseSelectedTool === "builder" ? "#4b8b75" : defenseSelectedTool === "airfield" ? "#5a7185" : defenseSelectedTool === "tankCamp" ? "#6c6044" : "#8b6f47" : "#d83b3b";
    defenseCtx.fillRect(x - 26, y - 22, 52, 44);
    defenseCtx.fillStyle = "#ece6d6";
    defenseCtx.fillRect(x - 12, y - 35, 24, 15);
    if (defenseSelectedTool === "builder") {
      defenseCtx.fillStyle = "#8ff0c8";
      defenseCtx.fillRect(x - 18, y + 5, 36, 8);
      defenseCtx.fillRect(x - 4, y - 9, 8, 36);
    }
    if (defenseSelectedTool === "troopLauncher") {
      defenseCtx.fillStyle = "#2f3942";
      defenseCtx.fillRect(x - 5, y - 44, 10, 36);
      defenseCtx.fillStyle = "#f2b84b";
      defenseCtx.beginPath();
      defenseCtx.arc(x - 4, y - 51, 5, 0, Math.PI * 2);
      defenseCtx.fill();
    }
  } else if (defenseSelectedTool === "infernoSingle" || defenseSelectedTool === "infernoMulti") {
    drawDefenseInfernoShape(x, y, valid ? "#803d24" : "#d83b3b", valid ? 0.86 : 0.55, defenseSelectedTool === "infernoMulti");
  } else if (defenseSelectedTool === "spell") {
    drawDefenseSpellShape(x, y, valid ? "#5c3f94" : "#d83b3b", valid ? 0.86 : 0.55);
  } else if (defenseSelectedTool === "missile" || defenseSelectedTool === "rapidMissile") {
    defenseCtx.fillStyle = valid ? defenseSelectedTool === "rapidMissile" ? "#3b426f" : "#6b2f35" : "#d83b3b";
    defenseCtx.fillRect(x - 24, y - 32, 48, 60);
    drawDefenseFireworkTubes(x, y, valid ? 0.86 : 0.55, defenseSelectedTool === "rapidMissile");
  } else if (defenseSelectedTool === "eagle") {
    defenseCtx.fillStyle = valid ? "#2f6f3d" : "#d83b3b";
    defenseCtx.fillRect(x - 24, y + 14, 48, 12);
    drawDefenseEagleIcon(x, y, valid ? 0.86 : 0.55);
  } else if (defenseSelectedTool === "infernoArtillery") {
    drawDefenseInfernoArtilleryShape(x, y, valid ? "#a33d26" : "#d83b3b", valid ? 0.86 : 0.55);
  } else if (defenseSelectedTool === "monolith") {
    drawDefenseMonolithShape(x, y, valid ? "#36264d" : "#d83b3b", valid ? 0.86 : 0.55);
  } else {
    defenseCtx.fillStyle = defenseSelectedTool === "cannon" ? "#4f5b68" : defenseSelectedTool === "grenade" ? "#6f5d2f" : defenseSelectedTool === "minigun" ? "#3b3f47" : defenseSelectedTool === "mortar" || defenseSelectedTool === "multiMortar" ? "#594f67" : defenseSelectedTool === "airbomb" ? "#225f74" : defenseSelectedTool === "antiAir" ? "#365d7a" : "#536b2d";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, defenseSelectedTool === "cannon" || defenseSelectedTool === "ricochet" || defenseSelectedTool === "mortar" || defenseSelectedTool === "multiMortar" || defenseSelectedTool === "missile" ? 18 : 15, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#17211c";
    defenseCtx.fillRect(x + 4, y - 4, defenseSelectedTool === "cannon" || defenseSelectedTool === "ricochet" || defenseSelectedTool === "mortar" || defenseSelectedTool === "multiMortar" || defenseSelectedTool === "missile" ? 26 : 20, 8);
  }

  defenseCtx.restore();
}

function drawDefenseWorld() {
  defenseCtx.fillStyle = "#d7cfbd";
  defenseCtx.fillRect(0, 0, defenseCanvas.width, defenseCanvas.height);
  defenseCtx.fillStyle = "#96a77b";
  defenseCtx.fillRect(0, defenseGroundY, defenseCanvas.width, defenseCanvas.height - defenseGroundY);
  defenseCtx.strokeStyle = "rgba(83, 107, 45, 0.2)";
  for (let x = -defenseCameraX % 80; x < defenseCanvas.width; x += 80) {
    defenseCtx.beginPath();
    defenseCtx.moveTo(x, defenseGroundY);
    defenseCtx.lineTo(x + 42, defenseCanvas.height);
    defenseCtx.stroke();
  }
  defenseCtx.fillStyle = "#ece6d6";
  defenseCtx.fillRect(defensePresident.x - defenseCameraX - 38, defenseGroundY - 90, 76, 90);
}

function drawDefenseBuilding(building) {
  const x = building.x - defenseCameraX;
  const y = building.y;
  if (x < -70 || x > defenseCanvas.width + 70) {
    return;
  }
  drawDefensePhoenixGlow(building, x, y);
  drawDefensePhoenixWings(building, x, y);
  drawDefenseFrostAura(building, x, y);
  drawDefenseElectroAura(building, x, y);
  drawDefenseRageGlow(building, x, y);
  drawDefensePowerGlow(building, x, y);
  drawDefenseRepairGlow(building, x, y);
  if (building.type === "wall") {
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.22)";
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, defenseGroundY - 4, 22, 8, 0, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = getDefenseBuildingColor(building);
    defenseCtx.fillRect(x - 16, y - 28, 32, 56);
  } else if (building.type === "trap") {
    defenseCtx.save();
    if (building.armed === false) {
      defenseCtx.globalAlpha = 0.45;
    }
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.2)";
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, y + 8, 22, 7, 0, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#6b2424";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 14, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#f7d36b";
    defenseCtx.fillRect(x - 3, y - 18, 6, 9);
    defenseCtx.restore();
  } else if (building.type === "giantBomb") {
    defenseCtx.save();
    if (building.armed === false) {
      defenseCtx.globalAlpha = 0.45;
    }
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.2)";
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, y + 11, 30, 9, 0, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#3f1414";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 20, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "#f7d36b";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 20, 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#f7d36b";
    defenseCtx.fillRect(x - 4, y - 26, 8, 12);
    defenseCtx.restore();
  } else if (building.type === "pushTrap") {
    defenseCtx.save();
    if (building.armed === false) {
      defenseCtx.globalAlpha = 0.45;
    }
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.2)";
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, y + 8, 24, 7, 0, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#3d5774";
    defenseCtx.fillRect(x - 18, y - 4, 36, 10);
    defenseCtx.fillStyle = "#26394e";
    defenseCtx.fillRect(x - 14, y - 12, 10, 10);
    defenseCtx.fillRect(x - 8, y - 18, 8, 8);
    defenseCtx.strokeStyle = "#9ad7ff";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 22, y - 8);
    defenseCtx.lineTo(x - 30, y - 14);
    defenseCtx.moveTo(x - 22, y + 2);
    defenseCtx.lineTo(x - 32, y + 2);
    defenseCtx.stroke();
    defenseCtx.restore();
  } else if (building.type === "airbomb") {
    const ready = (building.rearmTimer || 0) <= 0;
    const balloons = ready ? 3 : (building.rearmTimer < 2 ? 2 : 1);
    defenseCtx.strokeStyle = "rgba(255, 255, 255, 0.92)";
    defenseCtx.lineWidth = 2;
    for (let i = 0; i < balloons; i += 1) {
      const bx = x - 18 + i * 18;
      const by = y - 52 - (i % 2) * 10;
      defenseCtx.beginPath();
      defenseCtx.moveTo(x, y + 2);
      defenseCtx.lineTo(bx, by + 9);
      defenseCtx.stroke();
    }
    for (let i = 0; i < balloons; i += 1) {
      const bx = x - 18 + i * 18;
      const by = y - 52 - (i % 2) * 10;
      defenseCtx.fillStyle = ready ? "#d83b3b" : "#9aa2aa";
      defenseCtx.beginPath();
      defenseCtx.arc(bx, by, 9, 0, Math.PI * 2);
      defenseCtx.fill();
    }
  } else {
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, defenseGroundY - 4, building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "builder" ? 34 : building.type === "cannon" ? 30 : 26, 8, 0, 0, Math.PI * 2);
    defenseCtx.fill();

    if (building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder") {
      defenseCtx.fillStyle = getDefenseBuildingColor(building);
      defenseCtx.fillRect(x - 26, y - 22, 52, 44);
      defenseCtx.fillStyle = "#ece6d6";
      defenseCtx.fillRect(x - 12, y - 35, 24, 15);
      if (building.type === "builder") {
        defenseCtx.fillStyle = "#8ff0c8";
        defenseCtx.fillRect(x - 18, y + 5, 36, 8);
        defenseCtx.fillRect(x - 4, y - 9, 8, 36);
      }
      if (building.type === "tankCamp") {
        defenseCtx.fillStyle = "#303945";
        defenseCtx.fillRect(x - 17, y + 5, 34, 10);
      }
      if (building.type === "airfield") {
        defenseCtx.fillStyle = "#d7f1ff";
        defenseCtx.beginPath();
        defenseCtx.moveTo(x + 19, y + 2);
        defenseCtx.lineTo(x - 15, y - 8);
        defenseCtx.lineTo(x - 8, y + 2);
        defenseCtx.lineTo(x - 15, y + 12);
        defenseCtx.closePath();
        defenseCtx.fill();
      }
      if (building.type === "troopLauncher") {
        defenseCtx.fillStyle = "#2f3942";
        defenseCtx.fillRect(x - 5, y - 44, 10, 36);
        defenseCtx.fillStyle = "#f2b84b";
        defenseCtx.beginPath();
        defenseCtx.arc(x - 4, y - 51, 5, 0, Math.PI * 2);
        defenseCtx.fill();
        defenseCtx.strokeStyle = "rgba(247, 211, 107, 0.65)";
        defenseCtx.lineWidth = 2;
        defenseCtx.beginPath();
        defenseCtx.moveTo(x - 2, y - 49);
        defenseCtx.quadraticCurveTo(x - 44, y - 86, x - 82, y - 28);
        defenseCtx.stroke();
      }
    } else if (building.type === "infernoSingle" || building.type === "infernoMulti") {
      drawDefenseInfernoShape(x, y, getDefenseBuildingColor(building), 1, building.type === "infernoMulti", building.active);
      if (building.type === "infernoSingle" && building.infernoTarget && building.active) {
        defenseCtx.strokeStyle = `rgba(255, ${120 + Math.round((building.charge || 0) * 35)}, 45, 0.72)`;
        defenseCtx.lineWidth = 3 + (building.charge || 0);
        defenseCtx.beginPath();
        defenseCtx.moveTo(x, y - 28);
        defenseCtx.lineTo(building.infernoTarget.x - defenseCameraX, building.infernoTarget.y);
        defenseCtx.stroke();
      } else if (building.type === "infernoMulti" && building.active) {
        defenseCtx.strokeStyle = "rgba(255, 190, 75, 0.45)";
        defenseCtx.lineWidth = 2;
        defenseEnemies
          .filter((enemy) => !enemy.defeated && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= getDefenseEffectiveRange(building))
          .sort((a, b) => b.x - a.x)
          .slice(0, getDefenseInfernoMultiTargetCount())
          .forEach((enemy) => {
            defenseCtx.beginPath();
            defenseCtx.moveTo(x, y - 18);
            defenseCtx.lineTo(enemy.x - defenseCameraX, enemy.y);
            defenseCtx.stroke();
          });
      }
    } else if (building.type === "freezeSpell") {
      drawDefenseMergedSpellShape(x, y, building);
    } else if (building.type === "spell") {
      drawDefenseSpellShape(x, y, getDefenseBuildingColor(building), 1);
      defenseCtx.strokeStyle = "rgba(170, 112, 255, 0.25)";
      defenseCtx.beginPath();
      defenseCtx.arc(x, y, getDefenseEffectiveRange(building), 0, Math.PI * 2);
      defenseCtx.stroke();
    } else if (building.type === "missile" || building.type === "rapidMissile") {
      defenseCtx.fillStyle = getDefenseBuildingColor(building);
      defenseCtx.fillRect(x - 24, y - 32, 48, 60);
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.22)";
      defenseCtx.fillRect(x - 18, y + 16, 36, 6);
      const aim = building.aimAngle ?? -Math.PI * 0.18;
      defenseCtx.save();
      defenseCtx.translate(x, y);
      defenseCtx.rotate(aim);
      defenseCtx.fillStyle = "#17211c";
      defenseCtx.fillRect(0, -4, 32, 8);
      defenseCtx.fillStyle = "#f2b84b";
      defenseCtx.fillRect(22, -6, 12, 12);
      defenseCtx.fillStyle = "#d83b3b";
      defenseCtx.beginPath();
      defenseCtx.moveTo(40, 0);
      defenseCtx.lineTo(32, -8);
      defenseCtx.lineTo(32, 8);
      defenseCtx.closePath();
      defenseCtx.fill();
      defenseCtx.restore();
      drawDefenseFireworkTubes(x, y, 1, building.type === "rapidMissile");
    } else if (building.type === "eagle") {
      defenseCtx.fillStyle = getDefenseBuildingColor(building);
      defenseCtx.fillRect(x - 26, y + 14, 52, 12);
      drawDefenseEagleIcon(x, y, 1);
    } else if (building.type === "infernoArtillery") {
      drawDefenseInfernoArtilleryShape(x, y, getDefenseBuildingColor(building), 1);
    } else if (building.type === "monolith") {
      drawDefenseMonolithShape(x, y, getDefenseBuildingColor(building), 1);
    } else if (building.type === "xbow") {
      const level = getDefenseXbowLevel();
      const darken = Math.min(0.45, ((level - 1) / 19) * 0.45);
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 28, 8, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#4a4458";
      defenseCtx.fillRect(x - 22, y + 2, 44, 18);
      defenseCtx.fillStyle = "#3a3546";
      defenseCtx.fillRect(x - 22, y + 14, 44, 6);
      defenseCtx.fillStyle = "#2f2a3a";
      defenseCtx.fillRect(x - 4, y - 12, 8, 16);
      const aim = building.groundOnly ? 0 : -Math.PI / 4;
      defenseCtx.save();
      defenseCtx.translate(x, y - 18);
      defenseCtx.rotate(aim);
      defenseCtx.fillStyle = "#2f2a3a";
      defenseCtx.fillRect(-2, -3, 26, 6);
      defenseCtx.strokeStyle = "#6b4fa3";
      defenseCtx.lineWidth = 4;
      defenseCtx.beginPath();
      defenseCtx.arc(6, 0, 20, -Math.PI * 0.68, Math.PI * 0.68);
      defenseCtx.stroke();
      defenseCtx.fillStyle = "#4a4458";
      defenseCtx.fillRect(4, -20, 4, 40);
      defenseCtx.strokeStyle = "#e8e2d2";
      defenseCtx.lineWidth = 1.5;
      defenseCtx.beginPath();
      defenseCtx.moveTo(6 + Math.cos(-Math.PI * 0.68) * 20, Math.sin(-Math.PI * 0.68) * 20);
      defenseCtx.lineTo(6 + Math.cos(Math.PI * 0.68) * 20, Math.sin(Math.PI * 0.68) * 20);
      defenseCtx.stroke();
      defenseCtx.restore();
      if (darken > 0) {
        defenseCtx.fillStyle = `rgba(8, 8, 16, ${darken})`;
        defenseCtx.fillRect(x - 24, y - 40, 48, 62);
      }
      defenseCtx.fillStyle = building.groundOnly ? "#f2b84b" : "#7fe3ff";
      defenseCtx.font = "800 10px Arial";
      defenseCtx.textAlign = "center";
      defenseCtx.fillText(building.groundOnly ? "GND" : "G+A", x, y - 44);
      defenseCtx.textAlign = "left";
    } else if (building.type === "gigaTesla") {
      defenseCtx.save();
      defenseCtx.translate(x, y + 22);
      defenseCtx.scale(1.6, 1.6);
      defenseCtx.translate(-x, -(y + 22));
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 30, 8, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#23232e";
      defenseCtx.fillRect(x - 20, y - 22, 40, 44);
      defenseCtx.fillStyle = "#17171f";
      defenseCtx.fillRect(x - 20, y + 14, 40, 8);
      defenseCtx.strokeStyle = "#3a3a4d";
      defenseCtx.lineWidth = 2;
      defenseCtx.strokeRect(x - 20, y - 22, 40, 44);
      defenseCtx.fillStyle = "#9ad7ff";
      defenseCtx.beginPath();
      defenseCtx.moveTo(x, y - 16);
      defenseCtx.lineTo(x - 10, y + 2);
      defenseCtx.lineTo(x + 10, y + 2);
      defenseCtx.closePath();
      defenseCtx.fill();
      defenseCtx.fillStyle = "#f7d36b";
      defenseCtx.fillRect(x - 5, y - 9, 10, 10);
      defenseCtx.restore();
    } else if (building.type === "lavaLauncher") {
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 30, 8, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#3a2a24";
      defenseCtx.fillRect(x - 24, y - 24, 48, 46);
      defenseCtx.strokeStyle = "#1f1512";
      defenseCtx.lineWidth = 2;
      defenseCtx.strokeRect(x - 24, y - 24, 48, 46);
      defenseCtx.save();
      defenseCtx.translate(x, y - 12);
      defenseCtx.rotate(-0.7);
      defenseCtx.fillStyle = "#2b211c";
      defenseCtx.fillRect(0, -7, 34, 14);
      defenseCtx.restore();
      defenseCtx.save();
      defenseCtx.shadowColor = "#ff7a22";
      defenseCtx.shadowBlur = 12;
      defenseCtx.fillStyle = "#ff7a22";
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 4, 8, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#ffd15c";
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 4, 4, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.restore();
    } else if (building.type === "scattershot") {
      const scatterLevel = 1 + (defenseUpgradeLevels.scattershot || 0);
      const shade = Math.min(1, (scatterLevel - 1) / 9);
      const bodyColor = `rgb(${Math.round(88 - 48 * shade)}, ${Math.round(166 - 72 * shade)}, ${Math.round(255 - 118 * shade)})`;
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 30, 9, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = bodyColor;
      defenseCtx.fillRect(x - 22, y - 18, 44, 40);
      defenseCtx.fillStyle = `rgb(${Math.round(48 - 24 * shade)}, ${Math.round(96 - 42 * shade)}, ${Math.round(160 - 70 * shade)})`;
      defenseCtx.fillRect(x - 22, y + 12, 44, 10);
      defenseCtx.save();
      defenseCtx.translate(x, y - 10);
      defenseCtx.rotate(building.aimAngle ?? -0.5);
      defenseCtx.fillStyle = "#22354d";
      defenseCtx.fillRect(0, -9, 34, 18);
      defenseCtx.restore();
      defenseCtx.fillStyle = bodyColor;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 28, 9, 0, Math.PI * 2);
      defenseCtx.fill();
    } else if (building.type === "wizard") {
      defenseCtx.save();
      defenseCtx.translate(x, y + 22);
      defenseCtx.scale(0.6, 0.6);
      defenseCtx.translate(-x, -(y + 22));
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 56, 10, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#4a4458";
      defenseCtx.fillRect(x - 60, y - 126, 120, 148);
      defenseCtx.fillStyle = "#3a3546";
      defenseCtx.fillRect(x - 60, y + 8, 120, 14);
      defenseCtx.fillStyle = "#2f2a3a";
      [-36, 0, 36].forEach((wx) => {
        defenseCtx.fillRect(x + wx - 7, y - 96, 14, 22);
      });
      defenseCtx.fillStyle = "#5c3f94";
      defenseCtx.beginPath();
      defenseCtx.moveTo(x - 64, y - 126);
      defenseCtx.lineTo(x, y - 168);
      defenseCtx.lineTo(x + 64, y - 126);
      defenseCtx.closePath();
      defenseCtx.fill();
      defenseCtx.save();
      defenseCtx.shadowColor = "#c9b8ff";
      defenseCtx.shadowBlur = 10;
      defenseCtx.fillStyle = "#c9b8ff";
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 156, 5, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.restore();
      defenseCtx.restore();
    } else if (building.type === "superWizard") {
      defenseCtx.save();
      defenseCtx.translate(x, y + 22);
      defenseCtx.scale(0.6, 0.6);
      defenseCtx.translate(-x, -(y + 22));
      defenseCtx.save();
      defenseCtx.shadowColor = "#ffe98a";
      defenseCtx.shadowBlur = 28;
      defenseCtx.strokeStyle = "rgba(255, 233, 138, 0.85)";
      defenseCtx.lineWidth = 6;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 60, 72, 0, Math.PI * 2);
      defenseCtx.stroke();
      defenseCtx.restore();
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 56, 10, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#fff8e0";
      defenseCtx.fillRect(x - 60, y - 126, 120, 148);
      defenseCtx.fillStyle = "#e8ddc0";
      defenseCtx.fillRect(x - 60, y + 8, 120, 14);
      defenseCtx.fillStyle = "#f2d45c";
      [-36, 0, 36].forEach((wx) => {
        defenseCtx.fillRect(x + wx - 7, y - 96, 14, 22);
      });
      defenseCtx.fillStyle = "#f2d45c";
      defenseCtx.beginPath();
      defenseCtx.moveTo(x - 64, y - 126);
      defenseCtx.lineTo(x, y - 168);
      defenseCtx.lineTo(x + 64, y - 126);
      defenseCtx.closePath();
      defenseCtx.fill();
      defenseCtx.save();
      defenseCtx.shadowColor = "#fff3c4";
      defenseCtx.shadowBlur = 14;
      defenseCtx.fillStyle = "#ffffff";
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 156, 6, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.restore();
      defenseCtx.restore();
    } else if (building.type === "gigaInferno") {
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 34, 9, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.fillStyle = "#311713";
      defenseCtx.fillRect(x - 24, y - 30, 48, 52);
      defenseCtx.strokeStyle = "#1c0d0a";
      defenseCtx.lineWidth = 2;
      defenseCtx.strokeRect(x - 24, y - 30, 48, 52);
      defenseCtx.save();
      defenseCtx.shadowColor = "#ff7a22";
      defenseCtx.shadowBlur = 14;
      defenseCtx.fillStyle = "#ff7a22";
      [-16, -8, 0, 8, 16].forEach((offset) => {
        defenseCtx.beginPath();
        defenseCtx.arc(x + offset, y - 34, 4, 0, Math.PI * 2);
        defenseCtx.fill();
      });
      defenseCtx.restore();
      defenseCtx.fillStyle = "#ff5c1a";
      defenseCtx.fillRect(x - 18, y - 12, 36, 6);
      defenseCtx.fillStyle = "#ffd15c";
      defenseCtx.fillRect(x - 18, y - 10, 36, 2);
    } else if (building.type === "ypj20") {
      const level = defenseYpjLevel || 0;
      const tier = Math.min(1, level / 20);
      const beamColor = building.beamColor || "#ffd15c";
      defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
      defenseCtx.beginPath();
      defenseCtx.ellipse(x, defenseGroundY - 4, 34, 9, 0, 0, Math.PI * 2);
      defenseCtx.fill();
      if (level > 0) {
        defenseCtx.save();
        defenseCtx.globalAlpha = 0.25 + tier * 0.4;
        defenseCtx.shadowColor = beamColor;
        defenseCtx.shadowBlur = 6 + tier * 22;
        defenseCtx.strokeStyle = beamColor;
        defenseCtx.lineWidth = 2 + tier * 3;
        defenseCtx.beginPath();
        defenseCtx.arc(x, y - 10, 30 + tier * 12, 0, Math.PI * 2);
        defenseCtx.stroke();
        defenseCtx.restore();
      }
      const armored = level >= 10;
      defenseCtx.fillStyle = armored ? "#4a3325" : "#8a6d1f";
      defenseCtx.fillRect(x - 26, y - 8, 52, 30);
      defenseCtx.fillStyle = armored ? "#33241a" : "#6b5416";
      defenseCtx.fillRect(x - 26, y + 14, 52, 8);
      if (armored) {
        defenseCtx.fillStyle = "#241811";
        defenseCtx.fillRect(x - 30, y - 12, 8, 34);
        defenseCtx.fillRect(x + 22, y - 12, 8, 34);
        defenseCtx.fillStyle = beamColor;
        [-27, 25].forEach((px) => {
          [-8, 4, 16].forEach((py) => {
            defenseCtx.beginPath();
            defenseCtx.arc(x + px, y + py, 1.8, 0, Math.PI * 2);
            defenseCtx.fill();
          });
        });
      }
      const barrelLength = 30 + tier * 16;
      const barrelWidth = 6 + tier * 3;
      defenseCtx.save();
      defenseCtx.translate(x, y - 16);
      defenseCtx.rotate(building.aimAngle ?? -0.35);
      [-8, 0, 8].forEach((offset) => {
        defenseCtx.fillStyle = "#3a3320";
        defenseCtx.fillRect(0, offset - barrelWidth / 2, barrelLength, barrelWidth);
        defenseCtx.fillStyle = beamColor;
        defenseCtx.beginPath();
        defenseCtx.arc(barrelLength, offset, 3 + tier * 2.5, 0, Math.PI * 2);
        defenseCtx.fill();
      });
      defenseCtx.restore();
      defenseCtx.save();
      defenseCtx.shadowColor = beamColor;
      defenseCtx.shadowBlur = 14 + tier * 18;
      defenseCtx.fillStyle = beamColor;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y - 16, 9 + tier * 5, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.restore();
    } else {
      defenseCtx.fillStyle = getDefenseBuildingColor(building);
      defenseCtx.beginPath();
      defenseCtx.arc(x, y, building.type === "cannon" || building.type === "ricochet" || building.type === "mortar" || building.type === "multiMortar" ? 18 : 15, 0, Math.PI * 2);
      defenseCtx.fill();
      const aim = building.aimAngle ?? (building.type === "antiAir" || building.type === "airbomb" || building.type === "airburst" ? -Math.PI * 0.72 : 0);
      const barrelLength = building.type === "cannon" || building.type === "ricochet" || building.type === "grenade" || building.type === "mortar" || building.type === "multiMortar" ? 30 : building.type === "minigun" ? 34 : building.type === "antiAir" ? 30 : 24;
      defenseCtx.save();
      defenseCtx.translate(x, y);
      defenseCtx.rotate(aim);
      defenseCtx.fillStyle = "#17211c";
      defenseCtx.fillRect(4, -4, barrelLength, 8);
      if (building.type === "minigun") {
        defenseCtx.fillStyle = "#9aa2aa";
        defenseCtx.fillRect(9, -8, 24, 3);
        defenseCtx.fillRect(9, -1, 24, 3);
        defenseCtx.fillRect(9, 6, 24, 3);
      }
      if (building.type === "mortar") {
        defenseCtx.fillStyle = "#c2b9d2";
        defenseCtx.beginPath();
        defenseCtx.arc(30, 0, 7, 0, Math.PI * 2);
        defenseCtx.fill();
      }
      if (building.type === "multiMortar") {
        defenseCtx.fillStyle = "#c2b9d2";
        [-6, 0, 6].forEach((offset) => {
          defenseCtx.beginPath();
          defenseCtx.arc(30, offset, 4, 0, Math.PI * 2);
          defenseCtx.fill();
        });
      }
      if (building.type === "ricochet") {
        defenseCtx.strokeStyle = "#9ad7ff";
        defenseCtx.lineWidth = 3;
        defenseCtx.beginPath();
        defenseCtx.moveTo(13, -11);
        defenseCtx.lineTo(26, 0);
        defenseCtx.lineTo(13, 11);
        defenseCtx.stroke();
      }
      defenseCtx.restore();
      if (building.type === "airbomb") {
        defenseCtx.fillStyle = "#f2b84b";
        defenseCtx.beginPath();
        defenseCtx.arc(x, y - 20, 6, 0, Math.PI * 2);
        defenseCtx.fill();
      }
      if (building.type === "antiAir" || building.type === "airbomb") {
        defenseCtx.strokeStyle = "#d7f1ff";
        defenseCtx.lineWidth = 3;
        defenseCtx.beginPath();
        defenseCtx.moveTo(x - 13, y - 14);
        defenseCtx.lineTo(x, y - 28);
        defenseCtx.lineTo(x + 13, y - 14);
        defenseCtx.stroke();
      }
    }
  }
  drawDefenseSelectionHighlight(building, x, y);
  drawDefenseLevelTrim(building, x, y);
  drawDefenseElectroTexture(building, x, y);
  drawDefensePhoenixRank(building, x, y);
  drawDefenseAbilityMaxStars(building, x, y);
  drawDefenseBar(x, y - 38, building.hp, building.maxHp, 38);
}

function drawDefenseSelectionHighlight(building, x, y) {
  if (defenseSelectedMenu !== "ability" || getDefenseSelectedAbilityBuilding() !== building) {
    return;
  }
  defenseCtx.save();
  defenseCtx.strokeStyle = "rgba(66, 127, 255, 0.95)";
  defenseCtx.fillStyle = "rgba(66, 127, 255, 0.12)";
  defenseCtx.shadowColor = "rgba(66, 127, 255, 0.55)";
  defenseCtx.shadowBlur = 12;
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, getDefenseBuildingHitRadius(building) + 6, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.stroke();
  defenseCtx.restore();
}

function getDefenseVisualLevel(building) {
  if (building.type === "infernoMulti") {
    return defenseUpgradeLevels.infernoSingle || defenseUpgradeLevels.infernoMulti || 0;
  }
  return defenseUpgradeLevels[building.type] || 0;
}

function drawDefenseLevelTrim(building, x, y) {
  const level = getDefenseVisualLevel(building);
  if (level < 8 || building.type === "trap") {
    return;
  }

  const master = level >= getDefenseUpgradeMaxLevel(building.type);
  const radius = building.type === "wall" ? 27 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" || building.type === "infernoSingle" || building.type === "infernoMulti" ? 34 : 24;
  const topY = building.type === "wall" ? y - 35 : building.type === "infernoSingle" ? y - 66 : building.type === "infernoMulti" ? y - 49 : y - 32;

  defenseCtx.save();
  defenseCtx.strokeStyle = master ? "#f7d36b" : "#9ad7ff";
  defenseCtx.fillStyle = master ? "#f7d36b" : "#9ad7ff";
  defenseCtx.shadowColor = master ? "#f7d36b" : "#9ad7ff";
  defenseCtx.shadowBlur = master ? 16 : 8;
  defenseCtx.lineWidth = master ? 4 : 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.stroke();

  const gemCount = master ? 5 : 3;
  for (let i = 0; i < gemCount; i += 1) {
    const offset = (i - (gemCount - 1) / 2) * 12;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + offset, topY - 6);
    defenseCtx.lineTo(x + offset + 5, topY);
    defenseCtx.lineTo(x + offset, topY + 6);
    defenseCtx.lineTo(x + offset - 5, topY);
    defenseCtx.closePath();
    defenseCtx.fill();
  }

  if (master) {
    defenseCtx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 18, topY + 13);
    defenseCtx.lineTo(x - 6, topY + 5);
    defenseCtx.lineTo(x + 5, topY + 13);
    defenseCtx.lineTo(x + 18, topY + 5);
    defenseCtx.stroke();
  }
  defenseCtx.restore();
}

function drawDefenseRageGlow(building, x, y) {
  if (!getDefenseRageSource(building)) {
    return;
  }
  defenseCtx.save();
  defenseCtx.shadowColor = "#9f6bff";
  defenseCtx.shadowBlur = 18;
  defenseCtx.fillStyle = "rgba(136, 80, 220, 0.16)";
  defenseCtx.strokeStyle = "rgba(180, 132, 255, 0.62)";
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  const radius = building.type === "wall" ? 28 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" || building.type === "infernoSingle" || building.type === "infernoMulti" ? 35 : 24;
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.stroke();
  defenseCtx.restore();
}

function drawDefensePhoenixGlow(building, x, y) {
  if (!building.phoenixActive || getDefenseChosenAbility(building) !== "phoenix") {
    return;
  }
  defenseCtx.save();
  defenseCtx.shadowColor = "#ff7a22";
  defenseCtx.shadowBlur = 28;
  defenseCtx.strokeStyle = "rgba(255, 138, 45, 0.9)";
  defenseCtx.fillStyle = "rgba(255, 122, 34, 0.12)";
  defenseCtx.lineWidth = 5;
  defenseCtx.beginPath();
  const radius = building.type === "wall" ? 32 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" || building.type === "infernoSingle" || building.type === "infernoMulti" ? 40 : 30;
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.stroke();
  defenseCtx.restore();
}

function getDefensePhoenixRankColor(level) {
  const progress = Math.max(0, Math.min(1, (level - 1) / (defensePhoenixMaxLevel - 1)));
  const start = { r: 111, g: 73, b: 39 };
  const end = { r: 255, g: 126, b: 28 };
  const r = Math.round(start.r + (end.r - start.r) * progress);
  const g = Math.round(start.g + (end.g - start.g) * progress);
  const b = Math.round(start.b + (end.b - start.b) * progress);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawDefensePhoenixWings(building, x, y) {
  const level = building.phoenixLevel || 0;
  if (!level || getDefenseChosenAbility(building) !== "phoenix") {
    return;
  }
  const progress = Math.max(0, Math.min(1, level / defensePhoenixMaxLevel));
  const maxed = level >= defensePhoenixMaxLevel;
  const wingSpan = 24 + progress * 12;
  const wingLift = 17 + progress * 8;
  const alpha = building.phoenixActive ? 0.92 : 0.62;
  defenseCtx.save();
  defenseCtx.globalAlpha = alpha;
  defenseCtx.shadowColor = "#ff7a22";
  defenseCtx.shadowBlur = building.phoenixActive ? 18 : 8;
  defenseCtx.fillStyle = "#ff8a2d";
  defenseCtx.strokeStyle = "#8d4b1f";
  defenseCtx.lineWidth = 2;
  [-1, 1].forEach((side) => {
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + side * 9, y - 12);
    defenseCtx.quadraticCurveTo(x + side * wingSpan, y - wingLift, x + side * (wingSpan + 10), y - 4);
    defenseCtx.quadraticCurveTo(x + side * (wingSpan - 2), y - 3, x + side * 18, y + 9);
    defenseCtx.quadraticCurveTo(x + side * 13, y + 1, x + side * 9, y - 12);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.stroke();
    defenseCtx.strokeStyle = "rgba(255, 219, 132, 0.8)";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + side * 15, y - 9);
    defenseCtx.lineTo(x + side * (wingSpan + 1), y - 5);
    defenseCtx.moveTo(x + side * 16, y - 1);
    defenseCtx.lineTo(x + side * (wingSpan - 4), y + 4);
    defenseCtx.stroke();
    if (maxed) {
      defenseCtx.strokeStyle = "rgba(255, 241, 200, 0.92)";
      defenseCtx.lineWidth = 3;
      defenseCtx.beginPath();
      defenseCtx.moveTo(x + side * 20, y - 15);
      defenseCtx.quadraticCurveTo(x + side * (wingSpan + 9), y - wingLift - 8, x + side * (wingSpan + 18), y - 1);
      defenseCtx.stroke();
      defenseCtx.fillStyle = "#ffd684";
      defenseCtx.beginPath();
      defenseCtx.arc(x + side * (wingSpan + 5), y - 5, 4, 0, Math.PI * 2);
      defenseCtx.fill();
    }
    defenseCtx.strokeStyle = "#8d4b1f";
  });
  defenseCtx.restore();
}

function drawDefensePhoenixRank(building, x, y) {
  const level = building.phoenixLevel || 0;
  if (!level || getDefenseChosenAbility(building) !== "phoenix") {
    return;
  }
  const width = 34;
  const height = 8;
  const fillWidth = Math.max(4, (width - 4) * (level / defensePhoenixMaxLevel));
  const topY = y - (building.type === "wall" ? 45 : building.type === "infernoSingle" ? 72 : building.type === "infernoMulti" ? 58 : building.type === "monolith" ? 68 : 48);
  defenseCtx.save();
  defenseCtx.shadowColor = "#ff7a22";
  defenseCtx.shadowBlur = building.phoenixActive ? 12 : 4;
  defenseCtx.fillStyle = "#4e2c1b";
  defenseCtx.fillRect(x - width / 2, topY, width, height);
  defenseCtx.fillStyle = getDefensePhoenixRankColor(level);
  defenseCtx.fillRect(x - width / 2 + 2, topY + 2, fillWidth, height - 4);
  defenseCtx.strokeStyle = "#ffd684";
  defenseCtx.lineWidth = 2;
  defenseCtx.strokeRect(x - width / 2, topY, width, height);
  defenseCtx.fillStyle = "#fff1c8";
  defenseCtx.font = "700 8px Arial";
  defenseCtx.textAlign = "center";
  defenseCtx.fillText(`P${level}`, x, topY - 2);
  defenseCtx.restore();
}

function drawDefenseStar(ctx, x, y, radius, fill, stroke) {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const angle = -Math.PI / 2 + i * Math.PI / 5;
    const r = i % 2 === 0 ? radius : radius * 0.45;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawDefenseAbilityMaxStars(building, x, y) {
  const ability = getDefenseChosenAbility(building);
  const maxed = ability === "phoenix"
    ? (building.phoenixLevel || 0) >= defensePhoenixMaxLevel
    : ability === "frost"
      ? (building.frostLevel || 0) >= defenseFrostMaxLevel
      : ability === "electro"
        ? (building.electroLevel || 0) >= defenseBuildingElectroMaxLevel
        : false;
  if (!maxed) {
    return;
  }
  const colors = ability === "phoenix"
    ? { fill: "#ffb347", stroke: "#8d4b1f", glow: "#ff7a22" }
    : ability === "frost"
      ? { fill: "#d7f1ff", stroke: "#328fbd", glow: "#9ad7ff" }
      : { fill: "#fff4a6", stroke: "#a78100", glow: "#ffe36e" };
  const baseY = y + (building.type === "wall" ? 34 : 31);
  defenseCtx.save();
  defenseCtx.shadowColor = colors.glow;
  defenseCtx.shadowBlur = 11;
  defenseCtx.fillStyle = "rgba(23, 33, 28, 0.68)";
  defenseCtx.beginPath();
  defenseCtx.roundRect(x - 24, baseY - 9, 48, 14, 6);
  defenseCtx.fill();
  [-14, 0, 14].forEach((offset) => {
    drawDefenseStar(defenseCtx, x + offset, baseY - 2, 5, colors.fill, colors.stroke);
  });
  defenseCtx.restore();
}

function drawDefenseFrostAura(building, x, y) {
  const level = building.frostLevel || 0;
  if (!level || getDefenseChosenAbility(building) !== "frost") {
    return;
  }
  const progress = Math.max(0, Math.min(1, level / defenseFrostMaxLevel));
  const radius = building.type === "wall" ? 30 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" ? 38 : 28;
  defenseCtx.save();
  defenseCtx.shadowColor = "#9ad7ff";
  defenseCtx.shadowBlur = 10 + progress * 10;
  defenseCtx.strokeStyle = `rgba(154, 215, 255, ${0.48 + progress * 0.3})`;
  defenseCtx.fillStyle = `rgba(215, 241, 255, ${0.08 + progress * 0.06})`;
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.stroke();
  if (level >= defenseFrostMaxLevel) {
    defenseCtx.strokeStyle = "rgba(215, 241, 255, 0.9)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, radius + 8, 0, Math.PI * 2);
    defenseCtx.stroke();
  }
  defenseCtx.fillStyle = "#d7f1ff";
  [-1, 1].forEach((side) => {
    for (let i = 0; i < 3; i += 1) {
      const px = x + side * (radius - 3 - i * 6);
      const py = y - 14 + i * 14;
      defenseCtx.beginPath();
      defenseCtx.moveTo(px, py - 6);
      defenseCtx.lineTo(px + side * 5, py);
      defenseCtx.lineTo(px, py + 6);
      defenseCtx.lineTo(px - side * 4, py);
      defenseCtx.closePath();
      defenseCtx.fill();
    }
  });
  if (level >= defenseFrostMaxLevel) {
    [-1, 0, 1].forEach((offset) => {
      defenseCtx.beginPath();
      defenseCtx.moveTo(x + offset * 12, y + 26);
      defenseCtx.lineTo(x + offset * 12 + 5, y + 40);
      defenseCtx.lineTo(x + offset * 12 - 5, y + 40);
      defenseCtx.closePath();
      defenseCtx.fill();
    });
  }
  defenseCtx.restore();
}

function drawDefenseElectroAura(building, x, y) {
  const level = building.electroLevel || 0;
  if (!level || getDefenseChosenAbility(building) !== "electro") {
    return;
  }
  const progress = Math.max(0, Math.min(1, level / defenseBuildingElectroMaxLevel));
  const radius = building.type === "wall" ? 32 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" ? 40 : 30;
  defenseCtx.save();
  defenseCtx.shadowColor = "#ffe36e";
  defenseCtx.shadowBlur = 10 + progress * 12;
  defenseCtx.strokeStyle = `rgba(255, 227, 110, ${0.52 + progress * 0.28})`;
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.stroke();
  if (level >= defenseBuildingElectroMaxLevel) {
    defenseCtx.strokeStyle = "rgba(255, 255, 220, 0.78)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, radius + 9, 0, Math.PI * 2);
    defenseCtx.stroke();
  }
  defenseCtx.strokeStyle = "rgba(255, 244, 166, 0.9)";
  [-1, 1].forEach((side) => {
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + side * 8, y - radius + 5);
    defenseCtx.lineTo(x + side * 19, y - 8);
    defenseCtx.lineTo(x + side * 10, y - 8);
    defenseCtx.lineTo(x + side * 24, y + radius - 7);
    defenseCtx.stroke();
  });
  if (level >= defenseBuildingElectroMaxLevel) {
    defenseCtx.fillStyle = "#fff4a6";
    [-1, 1].forEach((side) => {
      [-20, 0, 20].forEach((offset) => {
        defenseCtx.beginPath();
        defenseCtx.arc(x + side * (radius + 8), y + offset, 3, 0, Math.PI * 2);
        defenseCtx.fill();
      });
    });
  }
  defenseCtx.restore();
}

function drawDefenseElectroTexture(building, x, y) {
  const level = building.electroLevel || 0;
  if (!level || getDefenseChosenAbility(building) !== "electro") {
    return;
  }
  const progress = Math.max(0, Math.min(1, level / defenseBuildingElectroMaxLevel));
  const tall = building.type === "infernoSingle" || building.type === "monolith" || building.type === "missile" || building.type === "rapidMissile" || building.type === "eagle";
  const topY = tall ? y - 50 : building.type === "wall" ? y - 26 : y - 24;
  const plateWidth = building.type === "wall" ? 20 : tall ? 26 : 22;
  defenseCtx.save();
  defenseCtx.shadowColor = "#ffe36e";
  defenseCtx.shadowBlur = 8 + progress * 12;
  defenseCtx.fillStyle = "rgba(38, 36, 22, 0.82)";
  defenseCtx.strokeStyle = "#fff4a6";
  defenseCtx.lineWidth = 2;
  defenseCtx.beginPath();
  defenseCtx.roundRect(x - plateWidth / 2, topY, plateWidth, 20, 5);
  defenseCtx.fill();
  defenseCtx.stroke();

  defenseCtx.fillStyle = "#ffe36e";
  defenseCtx.beginPath();
  defenseCtx.moveTo(x - 2, topY + 3);
  defenseCtx.lineTo(x + 8, topY + 3);
  defenseCtx.lineTo(x + 2, topY + 11);
  defenseCtx.lineTo(x + 9, topY + 11);
  defenseCtx.lineTo(x - 5, topY + 22);
  defenseCtx.lineTo(x - 1, topY + 13);
  defenseCtx.lineTo(x - 8, topY + 13);
  defenseCtx.closePath();
  defenseCtx.fill();

  defenseCtx.strokeStyle = `rgba(255, 227, 110, ${0.72 + progress * 0.22})`;
  defenseCtx.lineWidth = 2;
  [-1, 1].forEach((side) => {
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + side * (plateWidth / 2 + 2), topY + 7);
    defenseCtx.lineTo(x + side * (plateWidth / 2 + 12 + progress * 5), topY + 2);
    defenseCtx.lineTo(x + side * (plateWidth / 2 + 17 + progress * 6), topY + 13);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#fff4a6";
    defenseCtx.beginPath();
    defenseCtx.arc(x + side * (plateWidth / 2 + 18 + progress * 6), topY + 13, 3, 0, Math.PI * 2);
    defenseCtx.fill();
  });
  if (level >= defenseBuildingElectroMaxLevel) {
    defenseCtx.strokeStyle = "#fff4a6";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 17, topY + 25);
    defenseCtx.lineTo(x - 5, topY + 30);
    defenseCtx.lineTo(x + 6, topY + 25);
    defenseCtx.lineTo(x + 18, topY + 30);
    defenseCtx.stroke();
  }
  defenseCtx.restore();
}

function drawDefenseRepairGlow(building, x, y) {
  if (!building.repairGlow) {
    return;
  }
  const alpha = Math.min(1, building.repairGlow / 0.16);
  defenseCtx.save();
  defenseCtx.shadowColor = "#ffd84d";
  defenseCtx.shadowBlur = 28;
  defenseCtx.strokeStyle = `rgba(255, 216, 77, ${0.45 + alpha * 0.4})`;
  defenseCtx.lineWidth = 5;
  defenseCtx.beginPath();
  const radius = building.type === "wall" ? 31 : building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" ? 38 : 28;
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.restore();
}

function drawDefenseInfernoShape(x, y, color, alpha = 1, multi = false, active = false) {
  defenseCtx.save();
  defenseCtx.globalAlpha = alpha;
  if (active) {
    defenseCtx.shadowColor = "#ff7a22";
    defenseCtx.shadowBlur = 18;
  }
  if (multi) {
    defenseCtx.fillStyle = color;
    defenseCtx.fillRect(x - 24, y - 34, 48, 64);
    defenseCtx.fillStyle = "#321712";
    defenseCtx.fillRect(x - 17, y - 23, 34, 44);
    defenseCtx.fillStyle = "#ffd15c";
    [-16, 0, 16].forEach((offset) => {
      defenseCtx.beginPath();
      defenseCtx.arc(x + offset, y - 42, 7, 0, Math.PI * 2);
      defenseCtx.fill();
    });
    defenseCtx.fillRect(x - 28, y - 8, 56, 7);
  } else {
    defenseCtx.fillStyle = color;
    defenseCtx.fillRect(x - 17, y - 42, 34, 76);
    defenseCtx.fillStyle = "#361411";
    defenseCtx.fillRect(x - 10, y - 30, 20, 52);
    defenseCtx.fillStyle = "#ff8a3d";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x, y - 60);
    defenseCtx.lineTo(x + 16, y - 25);
    defenseCtx.lineTo(x + 4, y - 31);
    defenseCtx.lineTo(x, y - 8);
    defenseCtx.lineTo(x - 4, y - 31);
    defenseCtx.lineTo(x - 16, y - 25);
    defenseCtx.closePath();
    defenseCtx.fill();
  }
  defenseCtx.restore();
}

function drawDefenseInfernoArtilleryShape(x, y, color, alpha = 1) {
  defenseCtx.save();
  defenseCtx.globalAlpha = alpha;
  defenseCtx.shadowColor = "#ff7a22";
  defenseCtx.shadowBlur = 10;
  defenseCtx.fillStyle = color;
  defenseCtx.fillRect(x - 26, y - 32, 52, 60);
  defenseCtx.fillStyle = "#311713";
  defenseCtx.fillRect(x - 18, y - 24, 36, 42);
  defenseCtx.fillStyle = "#ff7a22";
  defenseCtx.fillRect(x - 24, y - 42, 48, 13);
  defenseCtx.fillStyle = "#ffd15c";
  [-15, -5, 5, 15].forEach((offset) => {
    defenseCtx.beginPath();
    defenseCtx.arc(x + offset, y - 47, 5, 0, Math.PI * 2);
    defenseCtx.fill();
  });
  defenseCtx.strokeStyle = "#ffd15c";
  defenseCtx.lineWidth = 3;
  [-16, -5, 6, 17].forEach((offset) => {
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + offset, y - 36);
    defenseCtx.lineTo(x + offset * 0.55, y - 62);
    defenseCtx.stroke();
  });
  defenseCtx.restore();
}

function drawDefenseSpellShape(x, y, color, alpha = 1) {
  defenseCtx.save();
  defenseCtx.globalAlpha = alpha;
  defenseCtx.fillStyle = color;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, 13, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.strokeStyle = "#d6b6ff";
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y, 19, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.restore();
}

function drawDefenseMergedSpellShape(x, y, building) {
  const poison = (building.mode || "freeze") === "poison";
  defenseCtx.save();
  defenseCtx.shadowColor = poison ? "#82d86b" : "#9ad7ff";
  defenseCtx.shadowBlur = 12;
  defenseCtx.fillStyle = getDefenseBuildingColor(building);
  defenseCtx.fillRect(x - 23, y - 25, 46, 50);
  defenseCtx.fillStyle = poison ? "#2f6f3d" : "#2e668a";
  defenseCtx.beginPath();
  defenseCtx.arc(x, y - 3, 15, 0, Math.PI * 2);
  defenseCtx.fill();
  const readyRatio = building.cooldown > 0 ? Math.max(0, Math.min(1, building.spellReadyRatio ?? (1 - building.cooldown / Math.max(0.1, building.fireRate || 15)))) : 1;
  const spellHeight = 34 * readyRatio;
  if (spellHeight > 1) {
    const spellBottom = y - 21;
    defenseCtx.fillStyle = poison ? "#84d96d" : "#d7f1ff";
    defenseCtx.fillRect(x - 7, spellBottom - spellHeight, 14, spellHeight);
    defenseCtx.strokeStyle = poison ? "#1f5d2e" : "#2e668a";
    defenseCtx.lineWidth = 2;
    defenseCtx.strokeRect(x - 7, spellBottom - spellHeight, 14, spellHeight);
  }
  defenseCtx.strokeStyle = poison ? "#b8f26b" : "#d7f1ff";
  defenseCtx.lineWidth = 3;
  defenseCtx.beginPath();
  defenseCtx.arc(x, y - 3, 22, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.save();
  defenseCtx.translate(x, y);
  defenseCtx.rotate(building.aimAngle ?? -0.35);
  defenseCtx.fillStyle = "#17211c";
  defenseCtx.fillRect(4, -6, 34, 12);
  defenseCtx.fillStyle = poison ? "#b8f26b" : "#d7f1ff";
  defenseCtx.beginPath();
  defenseCtx.arc(38, 0, 7, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.restore();
  defenseCtx.fillStyle = poison ? "#b8f26b" : "#d7f1ff";
  defenseCtx.font = "bold 10px sans-serif";
  defenseCtx.textAlign = "center";
  defenseCtx.fillText(poison ? "POI" : "ICE", x, y + 33);
  defenseCtx.restore();
}

function drawDefensePowerGlow(building, x, y) {
  if (!isDefensePowerUpActive(building)) {
    return;
  }
  defenseCtx.save();
  defenseCtx.shadowColor = "#b15cff";
  defenseCtx.shadowBlur = 24;
  defenseCtx.strokeStyle = "rgba(177, 92, 255, 0.85)";
  defenseCtx.lineWidth = 4;
  defenseCtx.beginPath();
  const radius = building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" ? 34 : 25;
  defenseCtx.arc(x, y, radius, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.restore();
}

function getDefenseBuildingColor(building) {
  const upgraded =
    (building.type === "wall" && defenseUpgradeLevels.wall > 0) ||
    (building.type === "turret" && defenseUpgrades.turretDamageBonus > 0) ||
    (building.type === "cannon" && defenseUpgrades.cannonDamageBonus > 0) ||
    (building.type === "ricochet" && defenseUpgradeLevels.ricochet > 0) ||
    (building.type === "antiAir" && defenseUpgrades.antiAirDamageBonus > 0) ||
    (building.type === "airbomb" && defenseUpgrades.airbombDamageBonus > 0) ||
    (building.type === "grenade" && defenseUpgrades.grenadeDamageBonus > 0) ||
    (building.type === "minigun" && defenseUpgrades.minigunDamageBonus > 0) ||
    (building.type === "mortar" && defenseUpgrades.mortarDamageBonus > 0) ||
    (building.type === "multiMortar" && (defenseUpgrades.mortarDamageBonus > 0 || defenseUpgrades.multiMortarDamageBonus > 0)) ||
    (building.type === "freezeSpell" && defenseUpgradeLevels.freezeSpell > 0) ||
    (building.type === "missile" && defenseUpgrades.missileDamageBonus > 0) ||
    (building.type === "rapidMissile" && defenseUpgradeLevels.rapidMissile > 0) ||
    (building.type === "eagle" && defenseUpgrades.eagleDamageBonus > 0) ||
    (building.type === "monolith" && defenseUpgradeLevels.monolith > 0) ||
    (building.type === "trap" && defenseUpgrades.trapDamageBonus > 0) ||
    (building.type === "camp" && defenseUpgrades.campTraining > 0) ||
    (building.type === "tankCamp" && defenseUpgrades.tankCampTraining > 0) ||
    (building.type === "airfield" && defenseUpgrades.airfieldTraining > 0) ||
    (building.type === "troopLauncher" && defenseUpgrades.troopLauncherTraining > 0) ||
    (building.type === "builder" && defenseUpgrades.builderRepairBonus > 0) ||
    ((building.type === "infernoSingle" || building.type === "infernoMulti") && defenseUpgrades.infernoStatBonus > 0) ||
    (building.type === "spell" && defenseUpgradeLevels.spell > 0);

  const colors = {
    wall: upgraded ? "#4d4641" : "#74675d",
    turret: upgraded ? "#31431b" : "#536b2d",
    cannon: upgraded ? "#303945" : "#4f5b68",
    ricochet: upgraded ? "#35545d" : "#4b7880",
    antiAir: upgraded ? "#223f59" : "#365d7a",
    airbomb: upgraded ? "#17485a" : "#225f74",
    camp: upgraded ? "#5e4428" : "#8b6f47",
    tankCamp: upgraded ? "#4d432e" : "#6c6044",
    airfield: upgraded ? "#344e63" : "#5a7185",
    troopLauncher: upgraded ? "#534230" : "#7b6245",
    builder: upgraded ? "#356556" : "#4b8b75",
    infernoSingle: upgraded ? "#5d2619" : "#803d24",
    infernoMulti: upgraded ? "#5d2619" : "#803d24",
    spell: upgraded ? "#45276f" : "#5c3f94",
    grenade: "#6f5d2f",
    minigun: "#3b3f47",
    mortar: upgraded ? "#3f3650" : "#594f67",
    multiMortar: upgraded ? "#3f3650" : "#594f67",
    freezeSpell: upgraded ? "#3f7f96" : "#5c9fbd",
    missile: upgraded ? "#4e2026" : "#6b2f35",
    rapidMissile: upgraded ? "#262b58" : "#3b426f",
    eagle: "#2f6f3d",
    infernoArtillery: upgraded ? "#7d2b20" : "#a33d26",
    monolith: "#36264d",
    trap: "#6b2424"
  };

  return colors[building.type] || "#536b2d";
}

function drawDefenseFireworkTubes(x, y, alpha = 1, rapid = false) {
  defenseCtx.save();
  defenseCtx.globalAlpha *= alpha;
  [-10, 0, 10].forEach((offset, index) => {
    defenseCtx.fillStyle = rapid ? (index === 1 ? "#9ad7ff" : "#635bce") : index === 1 ? "#f2b84b" : "#d83b3b";
    defenseCtx.fillRect(x + offset - 4, y - 34, 8, 24);
    defenseCtx.fillStyle = "#17211c";
    defenseCtx.fillRect(x + offset - 5, y - 36, 10, 4);
  });
  defenseCtx.strokeStyle = "#17211c";
  defenseCtx.lineWidth = 2;
  defenseCtx.beginPath();
  defenseCtx.moveTo(x - 17, y - 10);
  defenseCtx.lineTo(x + 17, y - 10);
  defenseCtx.stroke();
  defenseCtx.restore();
}

function drawDefenseEagleIcon(x, y, alpha = 1) {
  defenseCtx.save();
  defenseCtx.globalAlpha *= alpha;
  defenseCtx.fillStyle = "#1f5d35";
  defenseCtx.beginPath();
  defenseCtx.moveTo(x, y - 26);
  defenseCtx.lineTo(x - 33, y - 4);
  defenseCtx.lineTo(x - 9, y - 3);
  defenseCtx.lineTo(x - 5, y + 10);
  defenseCtx.lineTo(x, y + 2);
  defenseCtx.lineTo(x + 5, y + 10);
  defenseCtx.lineTo(x + 9, y - 3);
  defenseCtx.lineTo(x + 33, y - 4);
  defenseCtx.closePath();
  defenseCtx.fill();
  defenseCtx.fillStyle = "#f7f2d8";
  defenseCtx.beginPath();
  defenseCtx.moveTo(x, y - 32);
  defenseCtx.lineTo(x - 8, y - 20);
  defenseCtx.lineTo(x + 8, y - 20);
  defenseCtx.closePath();
  defenseCtx.fill();
  defenseCtx.fillStyle = "#f2b84b";
  defenseCtx.beginPath();
  defenseCtx.moveTo(x + 8, y - 25);
  defenseCtx.lineTo(x + 18, y - 21);
  defenseCtx.lineTo(x + 8, y - 18);
  defenseCtx.closePath();
  defenseCtx.fill();
  defenseCtx.restore();
}

function drawDefenseMonolithShape(x, y, color, alpha = 1) {
  defenseCtx.save();
  defenseCtx.globalAlpha *= alpha;
  defenseCtx.fillStyle = "rgba(23, 33, 28, 0.24)";
  defenseCtx.beginPath();
  defenseCtx.ellipse(x, defenseGroundY - 4, 26, 9, 0, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.fillStyle = "#1a1026";
  defenseCtx.fillRect(x - 17, y - 52, 34, 80);
  defenseCtx.fillStyle = color;
  defenseCtx.beginPath();
  defenseCtx.moveTo(x, y - 70);
  defenseCtx.lineTo(x + 21, y - 48);
  defenseCtx.lineTo(x + 16, y + 28);
  defenseCtx.lineTo(x - 16, y + 28);
  defenseCtx.lineTo(x - 21, y - 48);
  defenseCtx.closePath();
  defenseCtx.fill();
  defenseCtx.fillStyle = "#7d4dff";
  defenseCtx.beginPath();
  defenseCtx.arc(x, y - 44, 8, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.fillStyle = "#15101f";
  defenseCtx.fillRect(x - 12, y + 7, 24, 21);
  defenseCtx.strokeStyle = "#7d4dff";
  defenseCtx.lineWidth = 3;
  defenseCtx.strokeRect(x - 10, y - 20, 20, 16);
  defenseCtx.restore();
}

function drawDefenseEnemy(enemy) {
  const x = enemy.x - defenseCameraX;
  if (x < -70 || x > defenseCanvas.width + 70) {
    return;
  }
  const frozen = enemy.frostTimer > 0;
  if (frozen) {
    defenseCtx.save();
    defenseCtx.shadowColor = "#9ad7ff";
    defenseCtx.shadowBlur = 10;
  }
  if (enemy.type === "plane") {
    defenseCtx.save();
    if (enemy.crashing) {
      defenseCtx.translate(x, enemy.y);
      defenseCtx.rotate(0.5 + (enemy.crashSpin || 0) * 0.35);
      defenseCtx.translate(-x, -enemy.y);
      defenseCtx.globalAlpha = 0.85;
    }
    defenseCtx.fillStyle = frozen ? "#79aeca" : "#6b7785";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + 24, enemy.y);
    defenseCtx.lineTo(x - 20, enemy.y - 12);
    defenseCtx.lineTo(x - 10, enemy.y);
    defenseCtx.lineTo(x - 20, enemy.y + 12);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.restore();
  } else if (enemy.type === "attackSpawner") {
    defenseCtx.fillStyle = "#8d1f1f";
    defenseCtx.fillRect(x - 28, enemy.y - 28, 56, 56);
    defenseCtx.fillStyle = "#d83b3b";
    defenseCtx.fillRect(x - 20, enemy.y - 20, 40, 40);
    defenseCtx.fillStyle = "#f7d36b";
    defenseCtx.fillRect(x - 6, enemy.y - 24, 12, 48);
    defenseCtx.fillRect(x - 24, enemy.y - 6, 48, 12);
  } else if (enemy.type === "helicopter") {
    defenseCtx.save();
    if (enemy.crashing) {
      defenseCtx.translate(x, enemy.y);
      defenseCtx.rotate(0.5 + (enemy.crashSpin || 0) * 0.35);
      defenseCtx.translate(-x, -enemy.y);
      defenseCtx.globalAlpha = 0.85;
    }
    defenseCtx.fillStyle = frozen ? "#78a9c5" : "#5c6873";
    defenseCtx.fillRect(x - 20, enemy.y - 9, 40, 18);
    defenseCtx.fillStyle = "#2f3942";
    defenseCtx.fillRect(x - 30, enemy.y - 2, 60, 4);
    defenseCtx.fillRect(x + 18, enemy.y + 2, 20, 4);
    defenseCtx.restore();
  } else if (enemy.type === "dragon") {
    defenseCtx.fillStyle = frozen ? "#5f9fc5" : "#7c2f49";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + 28, enemy.y);
    defenseCtx.lineTo(x - 22, enemy.y - 18);
    defenseCtx.lineTo(x - 10, enemy.y);
    defenseCtx.lineTo(x - 22, enemy.y + 18);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.fillStyle = "#c94f4f";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 4, enemy.y - 5);
    defenseCtx.lineTo(x - 34, enemy.y - 28);
    defenseCtx.lineTo(x - 22, enemy.y - 2);
    defenseCtx.fill();
  } else if (enemy.type === "dropper") {
    defenseCtx.fillStyle = frozen ? "#6fa6c5" : "#4d5967";
    defenseCtx.fillRect(x - 28, enemy.y - 13, 56, 26);
    defenseCtx.fillStyle = "#2c3440";
    defenseCtx.fillRect(x - 38, enemy.y - 4, 76, 8);
    defenseCtx.fillStyle = "#a24b3b";
    defenseCtx.fillRect(x - 15, enemy.y + 10, 30, 10);
    defenseCtx.fillStyle = "#d7cfbd";
    defenseCtx.fillRect(x - 20, enemy.y - 7, 12, 7);
    defenseCtx.fillRect(x + 8, enemy.y - 7, 12, 7);
  } else if (enemy.type === "boostedTank") {
    defenseCtx.fillStyle = frozen ? "#5f9fc5" : "#b4453f";
    defenseCtx.fillRect(x - 24, enemy.y - 16, 48, 32);
    defenseCtx.fillStyle = "#ffd166";
    defenseCtx.fillRect(x - 13, enemy.y - 21, 26, 8);
    defenseCtx.fillStyle = "#651f1c";
    if (enemy.attackMode) {
      defenseCtx.fillRect(x - 35, enemy.y - 5, 34, 9);
    } else {
      defenseCtx.fillRect(x + 1, enemy.y - 5, 34, 9);
    }
  } else if (enemy.type === "tank") {
    defenseCtx.fillStyle = frozen ? "#5f9fc5" : "#91403a";
    defenseCtx.fillRect(x - 22, enemy.y - 14, 44, 28);
    defenseCtx.fillStyle = "#5c2421";
    if (enemy.attackMode) {
      defenseCtx.fillRect(x - 32, enemy.y - 4, 30, 8);
    } else {
      defenseCtx.fillRect(x + 2, enemy.y - 4, 30, 8);
    }
  } else if (enemy.type === "aircraftCarrier") {
    defenseCtx.fillStyle = frozen ? "#718fa4" : "#3d5774";
    defenseCtx.fillRect(x - 38, enemy.y - 14, 76, 28);
    defenseCtx.fillStyle = "#26394e";
    defenseCtx.fillRect(x - 30, enemy.y - 24, 60, 10);
    defenseCtx.fillStyle = "#d7e3ec";
    defenseCtx.fillRect(x - 18, enemy.y - 8, 36, 10);
    defenseCtx.fillStyle = "#f4b93f";
    defenseCtx.fillRect(x + 20, enemy.y - 30, 16, 6);
  } else if (enemy.type === "catapult") {
    defenseCtx.fillStyle = frozen ? "#6b9fc0" : "#6a4930";
    defenseCtx.fillRect(x - 27, enemy.y - 13, 54, 26);
    defenseCtx.fillStyle = "#3e2a1c";
    defenseCtx.fillRect(x - 8, enemy.y - 33, 12, 30);
    defenseCtx.strokeStyle = "#3e2a1c";
    defenseCtx.lineWidth = 5;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 2, enemy.y - 28);
    defenseCtx.lineTo(x + 27, enemy.y - 44);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#ff7a22";
    defenseCtx.beginPath();
    defenseCtx.arc(x + 32, enemy.y - 47, 8, 0, Math.PI * 2);
    defenseCtx.fill();
  } else if (enemy.type === "summoner") {
    defenseCtx.fillStyle = frozen ? "#70a7c5" : "#54418c";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, 20, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "#b79cff";
    defenseCtx.lineWidth = 4;
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, 28, 0.2, Math.PI * 1.55);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#f3e8ff";
    defenseCtx.fillRect(x - 4, enemy.y - 24, 8, 19);
  } else if (enemy.type === "bomber") {
    defenseCtx.fillStyle = frozen ? "#6ea3c2" : "#7b5d30";
    defenseCtx.fillRect(x - 22, enemy.y - 13, 44, 26);
    defenseCtx.fillStyle = "#2d271f";
    defenseCtx.fillRect(x + 1, enemy.y - 5, 30, 8);
    defenseCtx.fillStyle = "#d95f35";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 8, enemy.y + 14);
    defenseCtx.lineTo(x, enemy.y + 28);
    defenseCtx.lineTo(x + 8, enemy.y + 14);
    defenseCtx.fill();
  } else if (enemy.type === "healer") {
    defenseCtx.fillStyle = frozen ? "#74a9c5" : "#2e8c62";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, 13, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#d7ffb8";
    defenseCtx.fillRect(x - 3, enemy.y - 16, 6, 32);
    defenseCtx.fillRect(x - 13, enemy.y - 3, 26, 6);
  } else if (enemy.type === "wallBreaker") {
    defenseCtx.fillStyle = frozen ? "#68a5c5" : "#d85b38";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, 10, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#2d2722";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 5, enemy.y - 13);
    defenseCtx.lineTo(x + 8, enemy.y);
    defenseCtx.lineTo(x - 5, enemy.y + 13);
    defenseCtx.closePath();
    defenseCtx.fill();
  } else if (enemy.type === "electroTrooper") {
    defenseCtx.fillStyle = frozen ? "#6b9fc0" : "#2e4a66";
    defenseCtx.fillRect(x - 13, enemy.y - 12, 26, 24);
    defenseCtx.fillStyle = "#ffd7a8";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y - 16, 7, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.save();
    defenseCtx.shadowColor = "#9ad7ff";
    defenseCtx.shadowBlur = 10;
    defenseCtx.strokeStyle = "#9ad7ff";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + 6, enemy.y - 4);
    defenseCtx.lineTo(x + 26, enemy.y - 10);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#d7f1ff";
    defenseCtx.beginPath();
    defenseCtx.arc(x + 27, enemy.y - 10, 4, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.restore();
  } else if (enemy.type === "troopCannon") {
    defenseCtx.fillStyle = frozen ? "#6b9fc0" : "#5c4a2e";
    defenseCtx.fillRect(x - 20, enemy.y - 14, 40, 28);
    defenseCtx.fillStyle = "#3a2f1c";
    defenseCtx.fillRect(x - 6, enemy.y - 30, 12, 18);
    defenseCtx.save();
    defenseCtx.translate(x, enemy.y - 22);
    defenseCtx.rotate(-0.6);
    defenseCtx.fillStyle = "#2c2418";
    defenseCtx.fillRect(0, -6, 30, 12);
    defenseCtx.restore();
    defenseCtx.fillStyle = "#d8534f";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y - 30, 5, 0, Math.PI * 2);
    defenseCtx.fill();
  } else if (enemy.type === "troopShooter") {
    defenseCtx.fillStyle = frozen ? "#6b9fc0" : "#4c5a3a";
    defenseCtx.fillRect(x - 14, enemy.y - 12, 28, 24);
    defenseCtx.fillStyle = "#2c2418";
    defenseCtx.fillRect(x + 8, enemy.y - 4, 22, 6);
    defenseCtx.fillStyle = "#8f7b52";
    defenseCtx.fillRect(x + 8, enemy.y + 2, 14, 3);
    defenseCtx.fillStyle = "#ffd7a8";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y - 16, 7, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#2c2418";
    defenseCtx.fillRect(x - 6, enemy.y - 24, 12, 4);
  } else if (enemy.type === "truck") {
    defenseCtx.fillStyle = frozen ? "#6c9ec2" : "#6d4f33";
    defenseCtx.fillRect(x - 26, enemy.y - 15, 52, 30);
    defenseCtx.fillStyle = "#3f342c";
    defenseCtx.fillRect(x + 8, enemy.y - 10, 18, 20);
    defenseCtx.fillStyle = "#17211c";
    defenseCtx.beginPath();
    defenseCtx.arc(x - 15, enemy.y + 16, 5, 0, Math.PI * 2);
    defenseCtx.arc(x + 15, enemy.y + 16, 5, 0, Math.PI * 2);
    defenseCtx.fill();
  } else {
    defenseCtx.fillStyle = frozen ? "#69aee0" : enemy.type === "zombie" ? "#5f8f42" : enemy.type === "speedSoldier" ? "#b54848" : "#7a3344";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, 11, 0, Math.PI * 2);
    defenseCtx.fill();
    if (enemy.type === "zombie") {
      defenseCtx.fillStyle = "#b8f26b";
      defenseCtx.fillRect(x - 3, enemy.y - 4, 6, 8);
    }
    if (enemy.type === "speedSoldier") {
      defenseCtx.strokeStyle = "#ffd166";
      defenseCtx.lineWidth = 2;
      defenseCtx.beginPath();
      defenseCtx.moveTo(x - 17, enemy.y - 7);
      defenseCtx.lineTo(x - 28, enemy.y - 7);
      defenseCtx.moveTo(x - 15, enemy.y + 5);
      defenseCtx.lineTo(x - 25, enemy.y + 5);
      defenseCtx.stroke();
    }
  }
  if (enemy.frostTimer > 0) {
    defenseCtx.fillStyle = "rgba(154, 215, 255, 0.56)";
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, enemy.radius + 7, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "rgba(215, 241, 255, 0.9)";
    defenseCtx.lineWidth = 2;
    defenseCtx.stroke();
    defenseCtx.restore();
  }
  if (enemy.electroFlash > 0) {
    defenseCtx.strokeStyle = "rgba(161, 236, 255, 0.85)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 10, enemy.y - 15);
    defenseCtx.lineTo(x + 3, enemy.y - 2);
    defenseCtx.lineTo(x - 4, enemy.y + 12);
    defenseCtx.lineTo(x + 13, enemy.y - 5);
    defenseCtx.stroke();
  }
  if ((enemy.surgePoisonTimer || 0) > 0) {
    const pulse = Math.max(0.25, Math.min(1, enemy.surgePoisonFlash || 0.25));
    defenseCtx.fillStyle = `rgba(80, 190, 82, ${0.16 + pulse * 0.18})`;
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, enemy.radius + 8, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "rgba(184, 242, 107, 0.78)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 8, enemy.y + enemy.radius + 5);
    defenseCtx.quadraticCurveTo(x, enemy.y + enemy.radius + 13, x + 8, enemy.y + enemy.radius + 5);
    defenseCtx.stroke();
  }
  if (enemy.healGlow > 0) {
    defenseCtx.strokeStyle = "rgba(184, 242, 107, 0.86)";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, enemy.radius + 8, 0, Math.PI * 2);
    defenseCtx.stroke();
  }
  if (enemy.type === "healer" && enemy.healBeamTarget && enemy.healBeamTarget.hp > 0) {
    defenseCtx.strokeStyle = "rgba(184, 242, 107, 0.72)";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x, enemy.y);
    defenseCtx.lineTo(enemy.healBeamTarget.x - defenseCameraX, enemy.healBeamTarget.y);
    defenseCtx.stroke();
  }
  if (enemy.revivorGlow > 0) {
    defenseCtx.strokeStyle = "rgba(184, 242, 107, 0.9)";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, enemy.y, enemy.radius + 11, 0, Math.PI * 2);
    defenseCtx.stroke();
  }
  drawDefenseBar(x, enemy.y - 28, enemy.hp, enemy.maxHp, 34);
}

function drawDefenseFriendlyUnit(unit) {
  const x = unit.x - defenseCameraX;
  if (x < -50 || x > defenseCanvas.width + 50) {
    return;
  }
  if (unit.launchDuration) {
    defenseCtx.fillStyle = "#f2b84b";
    defenseCtx.beginPath();
    defenseCtx.arc(x, unit.y, 12, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.fillStyle = "#2f6f4f";
    defenseCtx.beginPath();
    defenseCtx.arc(x, unit.y, 7, 0, Math.PI * 2);
    defenseCtx.fill();
  } else if (unit.type === "tank") {
    defenseCtx.fillStyle = "#2f6f4f";
    defenseCtx.fillRect(x - 18, unit.y - 12, 36, 24);
    defenseCtx.fillStyle = "#1d4633";
    defenseCtx.fillRect(x - 28, unit.y - 4, 28, 8);
  } else if (unit.type === "plane") {
    defenseCtx.fillStyle = "#3d7fa3";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 24, unit.y);
    defenseCtx.lineTo(x + 20, unit.y - 12);
    defenseCtx.lineTo(x + 10, unit.y);
    defenseCtx.lineTo(x + 20, unit.y + 12);
    defenseCtx.closePath();
    defenseCtx.fill();
  } else {
    defenseCtx.fillStyle = "#2f6f4f";
    defenseCtx.beginPath();
    defenseCtx.arc(x, unit.y, 10, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "#17211c";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x, unit.y);
    defenseCtx.lineTo(x - 17, unit.y - 4);
    defenseCtx.stroke();
  }
  drawDefenseBar(x, unit.y - 22, unit.hp, unit.maxHp, 28);
}

function drawDefensePlayer() {
  const x = defensePlayer.x - defenseCameraX;
  if (!defensePlayer.alive) {
    defenseCtx.fillStyle = "rgba(23, 33, 28, 0.72)";
    defenseCtx.font = "700 16px Arial";
    defenseCtx.textAlign = "center";
    defenseCtx.fillText(`Respawning ${Math.ceil(defensePlayer.respawnTimer)}s`, x, defensePlayer.y - 12);
    return;
  }
  const angle = Math.atan2(defenseMouse.worldY - defensePlayer.y, defenseMouse.worldX - defensePlayer.x);
  drawDefensePlayerUpgradeAuras(x, defensePlayer.y, angle);
  defenseCtx.fillStyle = defensePlayer.invulnerableTimer > 0 ? "#61dafb" : getDefensePlayerBodyColor();
  defenseCtx.beginPath();
  defenseCtx.arc(x, defensePlayer.y, 13, 0, Math.PI * 2);
  defenseCtx.fill();
  drawDefensePlayerUpgradeArmor(x, defensePlayer.y, angle);
  defenseCtx.strokeStyle = "#17211c";
  defenseCtx.lineWidth = defensePlayer.overchargeLevel ? 6 : 5;
  defenseCtx.beginPath();
  defenseCtx.moveTo(x, defensePlayer.y);
  defenseCtx.lineTo(x + Math.cos(angle) * 24, defensePlayer.y + Math.sin(angle) * 24);
  defenseCtx.stroke();
  drawDefensePlayerUpgradeWeapon(x, defensePlayer.y, angle);
  drawDefensePlayerSurgeRank(x, defensePlayer.y);
  drawDefenseBar(x, defensePlayer.y - 26, defensePlayer.hp, defensePlayer.maxHp, 38);
}

function getDefensePlayerVisualTier(level, maxLevel) {
  if (!level) {
    return 0;
  }
  return Math.max(1, Math.min(5, Math.ceil((level / maxLevel) * 5)));
}

function getDefensePlayerSurgeVisualTier(level = defensePlayer.surgeLevel || 0) {
  if (!level) {
    return 0;
  }
  return Math.max(1, Math.min(6, Math.ceil((level / defenseSurgeMaxLevel) * 6)));
}

function drawDefensePlayerSurgeRank(x, y) {
  const level = defensePlayer.surgeLevel || 0;
  if (!level) {
    return;
  }
  const progress = Math.max(0, Math.min(1, level / defenseSurgeMaxLevel));
  const tier = getDefensePlayerSurgeVisualTier(level);
  const width = 42;
  const height = 8;
  const rankY = y + 23;
  defenseCtx.save();
  defenseCtx.shadowColor = tier >= 6 ? "#b8f26b" : "#8ff0c8";
  defenseCtx.shadowBlur = 5 + tier * 2;
  defenseCtx.fillStyle = "#24402f";
  defenseCtx.beginPath();
  defenseCtx.roundRect(x - width / 2, rankY, width, height, 4);
  defenseCtx.fill();
  defenseCtx.fillStyle = tier >= 6 ? "#fff4a6" : "#b8f26b";
  defenseCtx.fillRect(x - width / 2 + 3, rankY + 2, Math.max(4, (width - 6) * progress), height - 4);
  defenseCtx.strokeStyle = tier >= 6 ? "#fff4a6" : "#8ff0c8";
  defenseCtx.lineWidth = 2;
  defenseCtx.strokeRect(x - width / 2, rankY, width, height);
  defenseCtx.fillStyle = "#f7fff0";
  defenseCtx.font = "700 8px Arial";
  defenseCtx.textAlign = "center";
  defenseCtx.fillText(`S${level}`, x, rankY + 18);
  if (tier >= 6) {
    [-14, 0, 14].forEach((offset) => {
      defenseCtx.beginPath();
      defenseCtx.arc(x + offset, rankY - 4, 2.6, 0, Math.PI * 2);
      defenseCtx.fill();
    });
  }
  defenseCtx.restore();
}

function getDefensePlayerBodyColor() {
  const revengeTier = getDefensePlayerVisualTier(defensePlayer.revengeLevel || 0, defenseRevengeMaxLevel);
  const electroTier = getDefensePlayerVisualTier(defensePlayer.electroLevel || 0, defenseElectroMaxLevel);
  const overchargeTier = getDefensePlayerVisualTier(defensePlayer.overchargeLevel || 0, defenseOverchargeMaxLevel);
  const surgeTier = getDefensePlayerSurgeVisualTier();
  if (surgeTier >= 6) {
    return "#3f8f55";
  }
  if (surgeTier >= 4) {
    return "#34856c";
  }
  if (overchargeTier >= 4) {
    return "#5f4cb5";
  }
  if (electroTier >= 4) {
    return "#287bb8";
  }
  if (revengeTier >= 4) {
    return "#8a3856";
  }
  return "#2367a6";
}

function drawDefensePlayerUpgradeAuras(x, y, angle) {
  const revengeTier = getDefensePlayerVisualTier(defensePlayer.revengeLevel || 0, defenseRevengeMaxLevel);
  const electroTier = getDefensePlayerVisualTier(defensePlayer.electroLevel || 0, defenseElectroMaxLevel);
  const overchargeTier = getDefensePlayerVisualTier(defensePlayer.overchargeLevel || 0, defenseOverchargeMaxLevel);
  defenseCtx.save();
  if (revengeTier) {
    defenseCtx.shadowColor = "#ff5f7e";
    defenseCtx.shadowBlur = 5 + revengeTier * 3;
    defenseCtx.strokeStyle = `rgba(255, 95, 126, ${0.18 + revengeTier * 0.08})`;
    defenseCtx.lineWidth = 2 + revengeTier * 0.5;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 15 + revengeTier * 2, 0, Math.PI * 2);
    defenseCtx.stroke();
  }
  if (electroTier) {
    defenseCtx.shadowColor = "#9ad7ff";
    defenseCtx.shadowBlur = 7 + electroTier * 3;
    defenseCtx.strokeStyle = `rgba(154, 215, 255, ${0.25 + electroTier * 0.08})`;
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    for (let i = 0; i < electroTier; i += 1) {
      const boltAngle = angle + Math.PI * 0.72 + i * ((Math.PI * 2) / Math.max(1, electroTier));
      const inner = 18;
      const outer = 22 + electroTier * 2;
      defenseCtx.moveTo(x + Math.cos(boltAngle) * inner, y + Math.sin(boltAngle) * inner);
      defenseCtx.lineTo(x + Math.cos(boltAngle + 0.16) * outer, y + Math.sin(boltAngle + 0.16) * outer);
      defenseCtx.lineTo(x + Math.cos(boltAngle - 0.1) * (outer - 6), y + Math.sin(boltAngle - 0.1) * (outer - 6));
    }
    defenseCtx.stroke();
    if ((defensePlayer.electroLevel || 0) >= defenseElectroMaxLevel) {
      drawDefensePlayerElectroBlades(x, y);
    }
  }
  if (overchargeTier) {
    defenseCtx.shadowColor = "#f7d36b";
    defenseCtx.shadowBlur = 8 + overchargeTier * 4;
    defenseCtx.fillStyle = `rgba(247, 211, 107, ${0.1 + overchargeTier * 0.05})`;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 18 + overchargeTier * 3, 0, Math.PI * 2);
    defenseCtx.fill();
  }
  const surgeTier = getDefensePlayerSurgeVisualTier();
  if (surgeTier) {
    defenseCtx.shadowColor = "#b8f26b";
    defenseCtx.shadowBlur = 8 + surgeTier * 4;
    defenseCtx.strokeStyle = `rgba(184, 242, 107, ${0.22 + surgeTier * 0.08})`;
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 22 + surgeTier * 4, -Math.PI * 0.1, Math.PI * 1.1);
    defenseCtx.stroke();
    if (surgeTier >= 6) {
      defenseCtx.strokeStyle = "rgba(255, 244, 166, 0.82)";
      defenseCtx.lineWidth = 3;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y, 47, Math.PI * 0.18, Math.PI * 1.82);
      defenseCtx.stroke();
      defenseCtx.fillStyle = "rgba(184, 242, 107, 0.32)";
      [-1, 1].forEach((side) => {
        defenseCtx.beginPath();
        defenseCtx.moveTo(x + side * 16, y + 8);
        defenseCtx.lineTo(x + side * 27, y + 24);
        defenseCtx.lineTo(x + side * 12, y + 19);
        defenseCtx.closePath();
        defenseCtx.fill();
      });
      defenseCtx.fillStyle = "rgba(255, 244, 166, 0.72)";
      [0, Math.PI * 0.66, Math.PI * 1.33].forEach((offset) => {
        defenseCtx.beginPath();
        defenseCtx.arc(x + Math.cos(offset) * 31, y + Math.sin(offset) * 31, 3, 0, Math.PI * 2);
        defenseCtx.fill();
      });
    }
  }
  defenseCtx.restore();
}

function drawDefensePlayerElectroBlades(x, y) {
  const spin = performance.now() * 0.004;
  defenseCtx.save();
  defenseCtx.shadowColor = "#9ad7ff";
  defenseCtx.shadowBlur = 16;
  for (let i = 0; i < 4; i += 1) {
    const bladeAngle = spin + i * Math.PI * 0.5;
    const inner = 22;
    const outer = 36;
    const left = bladeAngle - 0.22;
    const right = bladeAngle + 0.22;
    defenseCtx.fillStyle = "rgba(154, 215, 255, 0.52)";
    defenseCtx.strokeStyle = "#fff4a6";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + Math.cos(bladeAngle) * inner, y + Math.sin(bladeAngle) * inner);
    defenseCtx.quadraticCurveTo(
      x + Math.cos(left) * outer,
      y + Math.sin(left) * outer,
      x + Math.cos(bladeAngle) * (outer + 9),
      y + Math.sin(bladeAngle) * (outer + 9)
    );
    defenseCtx.quadraticCurveTo(
      x + Math.cos(right) * outer,
      y + Math.sin(right) * outer,
      x + Math.cos(bladeAngle) * inner,
      y + Math.sin(bladeAngle) * inner
    );
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.stroke();

    defenseCtx.strokeStyle = "rgba(255, 244, 166, 0.9)";
    defenseCtx.beginPath();
    defenseCtx.moveTo(x + Math.cos(bladeAngle) * 25, y + Math.sin(bladeAngle) * 25);
    defenseCtx.lineTo(x + Math.cos(bladeAngle + 0.1) * 34, y + Math.sin(bladeAngle + 0.1) * 34);
    defenseCtx.lineTo(x + Math.cos(bladeAngle - 0.08) * 42, y + Math.sin(bladeAngle - 0.08) * 42);
    defenseCtx.stroke();
  }
  defenseCtx.restore();
}

function drawDefensePlayerUpgradeArmor(x, y, angle) {
  const revengeTier = getDefensePlayerVisualTier(defensePlayer.revengeLevel || 0, defenseRevengeMaxLevel);
  const electroTier = getDefensePlayerVisualTier(defensePlayer.electroLevel || 0, defenseElectroMaxLevel);
  const overchargeTier = getDefensePlayerVisualTier(defensePlayer.overchargeLevel || 0, defenseOverchargeMaxLevel);
  defenseCtx.save();
  if (revengeTier) {
    defenseCtx.fillStyle = revengeTier >= 5 ? "#ffd684" : "#d24f6f";
    defenseCtx.strokeStyle = "#5f2237";
    defenseCtx.lineWidth = 2;
    [-1, 1].forEach((side) => {
      defenseCtx.beginPath();
      defenseCtx.arc(x + side * (8 + revengeTier), y - 2, 4 + revengeTier * 0.8, 0, Math.PI * 2);
      defenseCtx.fill();
      defenseCtx.stroke();
    });
    if (revengeTier >= 3) {
      defenseCtx.fillRect(x - 8, y + 8, 16, 3 + revengeTier);
    }
  }
  if (electroTier) {
    defenseCtx.strokeStyle = electroTier >= 5 ? "#fff4a6" : "#9ad7ff";
    defenseCtx.lineWidth = 2;
    [-1, 1].forEach((side) => {
      defenseCtx.beginPath();
      defenseCtx.moveTo(x + side * 6, y - 12);
      defenseCtx.lineTo(x + side * (10 + electroTier), y - 17 - electroTier);
      defenseCtx.lineTo(x + side * (14 + electroTier), y - 8);
      defenseCtx.stroke();
    });
  }
  if (overchargeTier) {
    defenseCtx.fillStyle = overchargeTier >= 5 ? "#fff4a6" : "#c9b6ff";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, 3 + overchargeTier * 0.7, 0, Math.PI * 2);
    defenseCtx.fill();
    if (overchargeTier >= 4) {
      defenseCtx.strokeStyle = "#f7d36b";
      defenseCtx.lineWidth = 2;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y, 10, -Math.PI * 0.2, Math.PI * 1.25);
      defenseCtx.stroke();
    }
  }
  const surgeTier = getDefensePlayerSurgeVisualTier();
  if (surgeTier) {
    defenseCtx.strokeStyle = surgeTier >= 6 ? "#fff4a6" : surgeTier >= 5 ? "#b8f26b" : "#8ff0c8";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 7, y + 13);
    defenseCtx.lineTo(x, y + 18 + surgeTier);
    defenseCtx.lineTo(x + 7, y + 13);
    defenseCtx.stroke();
    if (surgeTier >= 6) {
      defenseCtx.fillStyle = "#b8f26b";
      defenseCtx.fillRect(x - 10, y + 10, 20, 4);
      defenseCtx.fillRect(x - 3, y + 13, 6, 15);
    }
  }
  defenseCtx.restore();
}

function drawDefensePlayerUpgradeWeapon(x, y, angle) {
  const electroTier = getDefensePlayerVisualTier(defensePlayer.electroLevel || 0, defenseElectroMaxLevel);
  const overchargeTier = getDefensePlayerVisualTier(defensePlayer.overchargeLevel || 0, defenseOverchargeMaxLevel);
  const revengeTier = getDefensePlayerVisualTier(defensePlayer.revengeLevel || 0, defenseRevengeMaxLevel);
  const surgeTier = getDefensePlayerSurgeVisualTier();
  const muzzleX = x + Math.cos(angle) * (24 + overchargeTier * 2);
  const muzzleY = y + Math.sin(angle) * (24 + overchargeTier * 2);
  defenseCtx.save();
  defenseCtx.translate(x, y);
  defenseCtx.rotate(angle);
  if (revengeTier >= 2) {
    defenseCtx.fillStyle = "#7a233b";
    defenseCtx.fillRect(8, -8, 8 + revengeTier * 2, 4);
  }
  if (electroTier) {
    defenseCtx.strokeStyle = electroTier >= 5 ? "#fff4a6" : "#9ad7ff";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(9, 7);
    defenseCtx.lineTo(15 + electroTier * 2, 10);
    defenseCtx.lineTo(20 + electroTier * 2, 5);
    defenseCtx.stroke();
  }
  if (overchargeTier) {
    defenseCtx.shadowColor = "#f7d36b";
    defenseCtx.shadowBlur = 10 + overchargeTier * 3;
    defenseCtx.fillStyle = overchargeTier >= 5 ? "#fff4a6" : "#f7d36b";
    defenseCtx.fillRect(19, -3, 6 + overchargeTier * 2, 6);
  }
  if (surgeTier >= 4) {
    defenseCtx.shadowColor = "#b8f26b";
    defenseCtx.shadowBlur = 8 + surgeTier * 2;
    defenseCtx.fillStyle = surgeTier >= 6 ? "#fff4a6" : "#b8f26b";
    defenseCtx.fillRect(14, 5, 10 + surgeTier * 2, 4);
  }
  defenseCtx.restore();
  if (overchargeTier >= 3 || electroTier >= 4) {
    defenseCtx.save();
    defenseCtx.shadowColor = overchargeTier >= 3 ? "#f7d36b" : "#9ad7ff";
    defenseCtx.shadowBlur = 12;
    defenseCtx.fillStyle = overchargeTier >= 3 ? "#fff4a6" : "#d7f1ff";
    defenseCtx.beginPath();
    defenseCtx.arc(muzzleX, muzzleY, 3 + Math.max(overchargeTier, electroTier) * 0.5, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.restore();
  }
}

function drawDefensePresident() {
  const x = defensePresident.x - defenseCameraX;
  const honeyActive = defenseHoneyLevel > 0;
  if (defensePresidentLevel >= 6) {
    defenseCtx.save();
    defenseCtx.shadowColor = "#ffd15c";
    defenseCtx.shadowBlur = 10 + Math.min(10, defensePresidentLevel);
    defenseCtx.strokeStyle = `rgba(255, 209, 92, ${0.25 + Math.min(0.3, defensePresidentLevel * 0.02)})`;
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, defensePresident.y - 16, 26 + Math.min(8, defensePresidentLevel), 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.restore();
  }
  if (honeyActive) {
    defenseCtx.save();
    defenseCtx.shadowColor = "#f2b84b";
    defenseCtx.shadowBlur = 16;
    defenseCtx.fillStyle = "rgba(242, 184, 75, 0.18)";
    defenseCtx.beginPath();
    defenseCtx.arc(x, defensePresident.y - 16, 30, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.restore();
  }
  const ypjOwned = defenseBuildings.some((building) => building.type === "ypj20" && building.hp > 0);
  if (ypjOwned) {
    defenseCtx.save();
    defenseCtx.shadowColor = "#c22f2f";
    defenseCtx.shadowBlur = 18;
    defenseCtx.strokeStyle = "rgba(194, 47, 47, 0.5)";
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, defensePresident.y - 16, 28, 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.restore();
  }
  const robeColors = ["#1d4633", "#2d4a3d", "#3d4a6b", "#5a3d7a", "#6b4fa3"];
  const robeColor = ypjOwned ? "#17171f" : honeyActive ? "#8a6d1f" : robeColors[Math.min(robeColors.length - 1, Math.floor((defensePresidentLevel - 1) / 4))];
  defenseCtx.fillStyle = robeColor;
  defenseCtx.fillRect(x - 12, defensePresident.y - 18, 24, 36);
  if (ypjOwned) {
    defenseCtx.fillStyle = "#c22f2f";
    defenseCtx.fillRect(x - 12, defensePresident.y - 18, 24, 5);
    defenseCtx.fillRect(x - 12, defensePresident.y + 8, 24, 4);
  }
  defenseCtx.fillStyle = "#ffd7a8";
  defenseCtx.beginPath();
  defenseCtx.arc(x, defensePresident.y - 28, 12, 0, Math.PI * 2);
  defenseCtx.fill();
  if (ypjOwned) {
    defenseCtx.fillStyle = "#ff5f5f";
    defenseCtx.fillRect(x - 7, defensePresident.y - 31, 3, 3);
    defenseCtx.fillRect(x + 4, defensePresident.y - 31, 3, 3);
  }
  if (ypjOwned || defensePresidentLevel >= 8) {
    const visorGlass = ypjOwned ? "rgba(255, 70, 70, 0.55)" : "rgba(88, 215, 255, 0.55)";
    const visorFrame = ypjOwned ? "#c22f2f" : "#2e668a";
    defenseCtx.strokeStyle = visorFrame;
    defenseCtx.lineWidth = 1.5;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - 12, defensePresident.y - 31);
    defenseCtx.lineTo(x + 1, defensePresident.y - 31);
    defenseCtx.stroke();
    defenseCtx.fillStyle = visorGlass;
    defenseCtx.fillRect(x + 1, defensePresident.y - 36, 10, 9);
    defenseCtx.strokeRect(x + 1, defensePresident.y - 36, 10, 9);
    defenseCtx.fillStyle = "rgba(255, 255, 255, 0.5)";
    defenseCtx.fillRect(x + 3, defensePresident.y - 34, 6, 2);
  }
  if (defensePresidentLevel >= 3) {
    const crownY = defensePresident.y - 40;
    defenseCtx.fillStyle = defensePresidentLevel >= 10 ? "#ffd15c" : defensePresidentLevel >= 6 ? "#f2b84b" : "#d8c26b";
    defenseCtx.fillRect(x - 9, crownY - 2, 18, 5);
    [-6, 0, 6].forEach((offset) => {
      defenseCtx.beginPath();
      defenseCtx.moveTo(x + offset - 3, crownY - 2);
      defenseCtx.lineTo(x + offset, crownY - 4 - Math.min(8, defensePresidentLevel));
      defenseCtx.lineTo(x + offset + 3, crownY - 2);
      defenseCtx.closePath();
      defenseCtx.fill();
    });
  }
  if (honeyActive) {
    defenseCtx.fillStyle = "#b8860b";
    defenseCtx.fillRect(x - 27, defensePresident.y - 6, 12, 12);
    defenseCtx.fillStyle = "#f2b84b";
    defenseCtx.fillRect(x - 25, defensePresident.y - 9, 8, 4);
    defenseCtx.beginPath();
    defenseCtx.arc(x - 21, defensePresident.y + 9, 3, 0, Math.PI * 2);
    defenseCtx.fill();
  }
  defenseCtx.fillStyle = "#17211c";
  defenseCtx.beginPath();
  defenseCtx.arc(x + 17, defensePresident.y - 44, 9, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.fillStyle = "#ffd15c";
  defenseCtx.font = "800 9px Arial";
  defenseCtx.textAlign = "center";
  defenseCtx.fillText(`${defensePresidentLevel}`, x + 17, defensePresident.y - 41);
  defenseCtx.textAlign = "left";
  drawDefenseBar(x, defensePresident.y - 50, defensePresident.hp, defensePresident.maxHp, 54);
}

function drawDefenseBullet(bullet) {
  if (bullet.launchDelay && bullet.launchDelay > 0) {
    return;
  }
  if (bullet.projectileType === "wizard") {
    const slashX = bullet.x - defenseCameraX;
    defenseCtx.save();
    defenseCtx.translate(slashX, bullet.y);
    defenseCtx.rotate(bullet.angle || 0);
    defenseCtx.strokeStyle = "#c9b8ff";
    defenseCtx.shadowColor = "#c9b8ff";
    defenseCtx.shadowBlur = 8;
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(0, 0, 8, -Math.PI * 0.4, Math.PI * 0.4);
    defenseCtx.stroke();
    defenseCtx.restore();
    return;
  }
  if (bullet.projectileType === "xbow") {
    const arrowX = bullet.x - defenseCameraX;
    const arrowAngle = bullet.angle || 0;
    defenseCtx.save();
    defenseCtx.translate(arrowX, bullet.y);
    defenseCtx.rotate(arrowAngle);
    defenseCtx.strokeStyle = "#d7cfbd";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(-7, 0);
    defenseCtx.lineTo(6, 0);
    defenseCtx.stroke();
    defenseCtx.fillStyle = "#8a6f4d";
    defenseCtx.beginPath();
    defenseCtx.moveTo(10, 0);
    defenseCtx.lineTo(3, -3.5);
    defenseCtx.lineTo(3, 3.5);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.fillStyle = "#b79cff";
    defenseCtx.beginPath();
    defenseCtx.moveTo(-7, 0);
    defenseCtx.lineTo(-11, -3);
    defenseCtx.lineTo(-11, 3);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.restore();
    return;
  }
  const screenX = bullet.x - defenseCameraX;
  const playerBullet = bullet.team === "player";
  const revengeTier = playerBullet ? getDefensePlayerVisualTier(bullet.revengeLevel || 0, defenseRevengeMaxLevel) : 0;
  const electroTier = playerBullet ? getDefensePlayerVisualTier(bullet.electroLevel || 0, defenseElectroMaxLevel) : 0;
  const overchargeTier = playerBullet ? getDefensePlayerVisualTier(bullet.overchargeLevel || 0, defenseOverchargeMaxLevel) : 0;
  const surgeTier = playerBullet ? getDefensePlayerSurgeVisualTier(bullet.surgeLevel || 0) : 0;
  defenseCtx.fillStyle = bullet.honeySplash ? "#f2b84b" : bullet.projectileType === "scattershot" ? "#58a6ff" : bullet.buildingElectroLevel ? "#ffe36e" : bullet.frostLevel ? "#d7f1ff" : bullet.projectileType === "freezeSpell" ? (bullet.mergedSpellMode === "poison" ? "#82d86b" : "#d7f1ff") : bullet.projectileType === "ricochet" ? "#9ad7ff" : bullet.projectileType === "rapidMissile" ? "#635bce" : bullet.projectileType === "monolith" ? "#2a123f" : bullet.projectileType === "infernoArtillery" || bullet.fireZone ? "#ff7a22" : bullet.poisonZone || (playerBullet && (bullet.surgeLevel || 0) >= 10) ? "#b8f26b" : bullet.electroLevel ? "#9ad7ff" : bullet.team === "player" ? "#f7d36b" : bullet.team === "enemy" ? "#61dafb" : "#58d68d";
  if (bullet.buildingElectroLevel || playerBullet) {
    defenseCtx.save();
    defenseCtx.shadowColor = surgeTier ? "#b8f26b" : overchargeTier ? "#f7d36b" : electroTier ? "#9ad7ff" : revengeTier ? "#ff5f7e" : "#ffe36e";
    defenseCtx.shadowBlur = bullet.buildingElectroLevel ? 14 : 5 + Math.max(revengeTier, electroTier, overchargeTier, surgeTier) * 3;
  }
  defenseCtx.beginPath();
  const remaining = bullet.target && !bullet.target.defeated
    ? Math.hypot(bullet.target.x - bullet.x, bullet.target.y - bullet.y)
    : 0;
  const progress = bullet.arc
    ? Math.max(0, Math.min(1, bullet.traveled !== undefined ? bullet.traveled / (bullet.startDistance || 1) : 1 - Math.min(1, remaining / (bullet.startDistance || 1))))
    : 0;
  const arcOffset = bullet.arc ? Math.sin(progress * Math.PI) * (bullet.arcHeight || 40) : 0;
  const playerMaxed = playerBullet && (bullet.revengeLevel || 0) >= defenseRevengeMaxLevel && (bullet.electroLevel || 0) >= defenseElectroMaxLevel && (bullet.overchargeLevel || 0) >= defenseOverchargeMaxLevel;
  const playerRadius = playerBullet ? (playerMaxed ? 4.2 : 4 + Math.max(0, overchargeTier - 1) * 0.65) : 0;
  defenseCtx.arc(screenX, bullet.y - arcOffset, playerBullet ? playerRadius : bullet.projectileType === "scattershot" ? 11 : bullet.projectileType === "monolith" ? 9 : bullet.projectileType === "freezeSpell" ? 9 : bullet.projectileType === "infernoArtillery" ? 8 : bullet.projectileType === "rapidMissile" || bullet.projectileType === "ricochet" ? 5 : bullet.arc ? 7 : 4, 0, Math.PI * 2);
  defenseCtx.fill();
  if (bullet.flipSpell) {
    defenseCtx.save();
    defenseCtx.translate(screenX, bullet.y - arcOffset);
    defenseCtx.rotate((bullet.traveled || 0) * 0.04);
    defenseCtx.fillStyle = bullet.mergedSpellMode === "poison" ? "#84d96d" : "#d7f1ff";
    defenseCtx.fillRect(-5, -15, 10, 30);
    defenseCtx.strokeStyle = bullet.mergedSpellMode === "poison" ? "#1f5d2e" : "#2e668a";
    defenseCtx.lineWidth = 2;
    defenseCtx.strokeRect(-5, -15, 10, 30);
    defenseCtx.restore();
  }
  if (bullet.buildingElectroLevel || playerBullet) {
    defenseCtx.restore();
  }
  if (playerBullet) {
    drawDefensePlayerBulletDetails(bullet, screenX, bullet.y - arcOffset, revengeTier, electroTier, overchargeTier, surgeTier, playerMaxed);
  }
  if (bullet.frostLevel) {
    defenseCtx.strokeStyle = "rgba(154, 215, 255, 0.88)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.arc(screenX, bullet.y - arcOffset, bullet.arc ? 11 : 8, 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.strokeStyle = "rgba(215, 241, 255, 0.65)";
    defenseCtx.beginPath();
    defenseCtx.moveTo(screenX - 9, bullet.y - arcOffset);
    defenseCtx.lineTo(screenX + 9, bullet.y - arcOffset);
    defenseCtx.moveTo(screenX, bullet.y - arcOffset - 9);
    defenseCtx.lineTo(screenX, bullet.y - arcOffset + 9);
    defenseCtx.stroke();
  }
  if (bullet.buildingElectroLevel) {
    defenseCtx.save();
    defenseCtx.shadowColor = "#ffe36e";
    defenseCtx.shadowBlur = 10;
    defenseCtx.fillStyle = "rgba(255, 244, 166, 0.92)";
    defenseCtx.beginPath();
    defenseCtx.moveTo(screenX, bullet.y - arcOffset - 9);
    defenseCtx.lineTo(screenX + 7, bullet.y - arcOffset);
    defenseCtx.lineTo(screenX, bullet.y - arcOffset + 9);
    defenseCtx.lineTo(screenX - 7, bullet.y - arcOffset);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.strokeStyle = "rgba(255, 244, 166, 0.92)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(screenX - 13, bullet.y - arcOffset - 8);
    defenseCtx.lineTo(screenX + 1, bullet.y - arcOffset);
    defenseCtx.lineTo(screenX - 4, bullet.y - arcOffset + 10);
    defenseCtx.lineTo(screenX + 14, bullet.y - arcOffset + 1);
    defenseCtx.stroke();
    defenseCtx.restore();
  }
  if (bullet.projectileType === "rapidMissile") {
    defenseCtx.strokeStyle = "rgba(154, 215, 255, 0.55)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(bullet.x - defenseCameraX - Math.cos(bullet.angle) * 14, bullet.y - Math.sin(bullet.angle) * 14);
    defenseCtx.lineTo(bullet.x - defenseCameraX, bullet.y);
    defenseCtx.stroke();
  }
  if (bullet.projectileType === "monolith") {
    defenseCtx.fillStyle = "rgba(125, 77, 255, 0.45)";
    defenseCtx.beginPath();
    defenseCtx.arc(bullet.x - defenseCameraX - 2, bullet.y - arcOffset - 2, 4, 0, Math.PI * 2);
    defenseCtx.fill();
  }
  if (bullet.projectileType === "infernoArtillery") {
    const drawY = bullet.y - arcOffset;
    const trail = (bullet.trail || []).map((point) => ({ x: point.x - defenseCameraX, y: point.y }));
    defenseCtx.save();
    defenseCtx.shadowColor = "#ff7a22";
    defenseCtx.shadowBlur = 16;
    if (trail.length > 1) {
      defenseCtx.lineCap = "round";
      defenseCtx.lineJoin = "round";
      defenseCtx.strokeStyle = "rgba(255, 91, 34, 0.48)";
      defenseCtx.lineWidth = 14;
      drawDefenseCurvedTrail(trail);
      defenseCtx.stroke();
      defenseCtx.strokeStyle = "rgba(255, 209, 92, 0.86)";
      defenseCtx.lineWidth = 5;
      drawDefenseCurvedTrail(trail);
      defenseCtx.stroke();
    } else {
      defenseCtx.strokeStyle = "rgba(255, 209, 92, 0.82)";
      defenseCtx.lineWidth = 5;
      defenseCtx.beginPath();
      defenseCtx.moveTo(screenX - Math.cos(bullet.angle) * 34, drawY - Math.sin(bullet.angle) * 34);
      defenseCtx.lineTo(screenX, drawY);
      defenseCtx.stroke();
    }
    defenseCtx.fillStyle = "rgba(255, 247, 190, 0.92)";
    defenseCtx.beginPath();
    defenseCtx.arc(screenX, drawY, 4, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.restore();
  }
}

function drawDefenseCurvedTrail(points) {
  defenseCtx.beginPath();
  defenseCtx.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length - 1; index += 1) {
    const midX = (points[index].x + points[index + 1].x) / 2;
    const midY = (points[index].y + points[index + 1].y) / 2;
    defenseCtx.quadraticCurveTo(points[index].x, points[index].y, midX, midY);
  }
  const last = points[points.length - 1];
  defenseCtx.lineTo(last.x, last.y);
}

function drawDefensePlayerBulletDetails(bullet, x, y, revengeTier, electroTier, overchargeTier, surgeTier, playerMaxed) {
  const angle = bullet.angle || 0;
  const backX = x - Math.cos(angle) * (playerMaxed ? 9 : 8 + overchargeTier * 2);
  const backY = y - Math.sin(angle) * (playerMaxed ? 9 : 8 + overchargeTier * 2);
  defenseCtx.save();
  if (revengeTier) {
    defenseCtx.strokeStyle = revengeTier >= 5 ? "rgba(255, 214, 132, 0.9)" : "rgba(255, 95, 126, 0.78)";
    defenseCtx.lineWidth = 2 + revengeTier * 0.35;
    defenseCtx.beginPath();
    defenseCtx.moveTo(backX, backY);
    defenseCtx.lineTo(backX - Math.cos(angle) * (7 + revengeTier * 2), backY - Math.sin(angle) * (7 + revengeTier * 2));
    defenseCtx.stroke();
    if (revengeTier >= 3) {
      defenseCtx.fillStyle = "rgba(122, 35, 59, 0.85)";
      defenseCtx.beginPath();
      defenseCtx.arc(backX, backY, 2 + revengeTier * 0.45, 0, Math.PI * 2);
      defenseCtx.fill();
    }
  }
  if (electroTier) {
    defenseCtx.shadowColor = "#9ad7ff";
    defenseCtx.shadowBlur = 8 + electroTier * 2;
    defenseCtx.strokeStyle = electroTier >= 5 ? "#fff4a6" : "#9ad7ff";
    defenseCtx.lineWidth = 2;
    const sideX = -Math.sin(angle);
    const sideY = Math.cos(angle);
    [-1, 1].slice(0, electroTier >= 2 ? 2 : 1).forEach((side) => {
      defenseCtx.beginPath();
      defenseCtx.moveTo(x - Math.cos(angle) * 5 + sideX * side * 4, y - Math.sin(angle) * 5 + sideY * side * 4);
      defenseCtx.lineTo(x + sideX * side * (7 + electroTier), y + sideY * side * (7 + electroTier));
      defenseCtx.lineTo(x + Math.cos(angle) * 5 + sideX * side * 3, y + Math.sin(angle) * 5 + sideY * side * 3);
      defenseCtx.stroke();
    });
  }
  if (overchargeTier) {
    defenseCtx.shadowColor = "#f7d36b";
    defenseCtx.shadowBlur = 10 + overchargeTier * 3;
    defenseCtx.fillStyle = overchargeTier >= 5 ? "#fff4a6" : "#f7d36b";
    defenseCtx.beginPath();
    defenseCtx.arc(x, y, playerMaxed ? 4.2 : 2 + overchargeTier * 0.9, 0, Math.PI * 2);
    defenseCtx.fill();
    if (overchargeTier >= 3) {
      defenseCtx.strokeStyle = "rgba(255, 244, 166, 0.78)";
      defenseCtx.lineWidth = 2;
      defenseCtx.beginPath();
      defenseCtx.arc(x, y, playerMaxed ? 9 : 8 + overchargeTier, 0, Math.PI * 2);
      defenseCtx.stroke();
    }
  }
  if ((bullet.surgeLevel || 0) >= 10) {
    defenseCtx.shadowColor = "#b8f26b";
    defenseCtx.shadowBlur = 8 + surgeTier * 2;
    defenseCtx.fillStyle = "rgba(184, 242, 107, 0.72)";
    defenseCtx.beginPath();
    defenseCtx.arc(x - Math.cos(angle) * 5, y - Math.sin(angle) * 5, playerMaxed ? 3 : 3 + surgeTier * 0.35, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = "rgba(184, 242, 107, 0.88)";
    defenseCtx.lineWidth = 2;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - Math.cos(angle) * 4, y - Math.sin(angle) * 4);
    defenseCtx.lineTo(x - Math.cos(angle) * (playerMaxed ? 13 : 11 + surgeTier), y - Math.sin(angle) * (playerMaxed ? 13 : 11 + surgeTier));
    defenseCtx.stroke();
  }
  defenseCtx.restore();
}

function drawDefenseFireZone(zone) {
  const x = zone.x - defenseCameraX;
  const y = zone.poison ? zone.y : zone.air ? zone.y : defenseGroundY - 3;
  defenseCtx.fillStyle = zone.freezeSpell ? `rgba(154, 215, 255, ${0.13 + zone.life * 0.04})` : zone.poisonSpell || zone.poison ? `rgba(50, 170, 77, ${0.14 + zone.life * 0.028})` : zone.inferno ? `rgba(255, 92, 34, ${0.13 + zone.life * 0.025})` : zone.honey ? `rgba(242, 184, 75, ${0.15 + zone.life * 0.03})` : `rgba(216, 59, 59, ${0.10 + zone.life * 0.035})`;
  defenseCtx.beginPath();
  if (zone.air || zone.poison) {
    defenseCtx.arc(x, y, zone.radius * 0.72, 0, Math.PI * 2);
  } else {
    defenseCtx.ellipse(x, y, zone.radius, zone.radius * 0.28, 0, 0, Math.PI * 2);
  }
  defenseCtx.fill();
  defenseCtx.fillStyle = zone.freezeSpell ? "rgba(215, 241, 255, 0.26)" : zone.poisonSpell || zone.poison ? "rgba(184, 242, 107, 0.18)" : zone.inferno ? "rgba(255, 209, 92, 0.28)" : "rgba(247, 211, 107, 0.18)";
  defenseCtx.beginPath();
  if (zone.air || zone.poison) {
    defenseCtx.arc(x, y, zone.radius * 0.38, 0, Math.PI * 2);
  } else {
    defenseCtx.ellipse(x, y - 2, zone.radius * 0.58, zone.radius * 0.16, 0, 0, Math.PI * 2);
  }
  defenseCtx.fill();
}

function drawDefenseAirBurst(burst) {
  const x = burst.x - defenseCameraX;
  const fade = Math.max(0, burst.life / burst.maxLife);
  const radius = burst.radius * (1.08 - fade * 0.18);
  if (burst.surge) {
    defenseCtx.save();
    defenseCtx.shadowColor = burst.maxed ? "#b8f26b" : "#9ad7ff";
    defenseCtx.shadowBlur = burst.maxed ? 26 : 16;
    defenseCtx.fillStyle = burst.maxed ? `rgba(184, 242, 107, ${0.08 + fade * 0.18})` : `rgba(154, 215, 255, ${0.07 + fade * 0.16})`;
    defenseCtx.beginPath();
    defenseCtx.ellipse(x, defenseGroundY - 3, radius, radius * 0.22, 0, 0, Math.PI * 2);
    defenseCtx.fill();
    const beamHeight = burst.maxed ? 180 : 118;
    const beamWidth = burst.maxed ? 26 : 16;
    const gradient = defenseCtx.createLinearGradient(x, defenseGroundY, x, defenseGroundY - beamHeight);
    gradient.addColorStop(0, burst.maxed ? "rgba(184, 242, 107, 0.75)" : "rgba(154, 215, 255, 0.62)");
    gradient.addColorStop(0.55, burst.maxed ? "rgba(255, 244, 166, 0.5)" : "rgba(215, 241, 255, 0.35)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    defenseCtx.fillStyle = gradient;
    defenseCtx.beginPath();
    defenseCtx.moveTo(x - beamWidth, defenseGroundY);
    defenseCtx.lineTo(x - beamWidth * 0.45, defenseGroundY - beamHeight);
    defenseCtx.lineTo(x + beamWidth * 0.45, defenseGroundY - beamHeight);
    defenseCtx.lineTo(x + beamWidth, defenseGroundY);
    defenseCtx.closePath();
    defenseCtx.fill();
    defenseCtx.strokeStyle = burst.maxed ? `rgba(184, 242, 107, ${0.3 + fade * 0.5})` : `rgba(154, 215, 255, ${0.25 + fade * 0.45})`;
    defenseCtx.lineWidth = burst.maxed ? 4 : 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, defenseGroundY - 10, radius * 0.62, 0, Math.PI * 2);
    defenseCtx.stroke();
    defenseCtx.restore();
    return;
  }
  if (burst.gold) {
    defenseCtx.fillStyle = `rgba(255, 209, 92, ${0.1 + fade * 0.22})`;
    defenseCtx.beginPath();
    defenseCtx.arc(x, burst.y, radius, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = `rgba(255, 233, 138, ${0.3 + fade * 0.6})`;
    defenseCtx.lineWidth = 4;
    defenseCtx.beginPath();
    defenseCtx.arc(x, burst.y, radius * 0.72, 0, Math.PI * 2);
    defenseCtx.stroke();
    return;
  }
  if (burst.electro) {
    defenseCtx.fillStyle = `rgba(97, 218, 251, ${0.05 + fade * 0.16})`;
    defenseCtx.beginPath();
    defenseCtx.arc(x, burst.y, radius, 0, Math.PI * 2);
    defenseCtx.fill();
    defenseCtx.strokeStyle = `rgba(154, 215, 255, ${0.2 + fade * 0.55})`;
    defenseCtx.lineWidth = 3;
    defenseCtx.beginPath();
    defenseCtx.arc(x, burst.y, radius * 0.72, 0, Math.PI * 2);
    defenseCtx.stroke();
    return;
  }
  defenseCtx.fillStyle = `rgba(216, 59, 59, ${0.08 + fade * 0.16})`;
  defenseCtx.beginPath();
  defenseCtx.arc(x, burst.y, radius, 0, Math.PI * 2);
  defenseCtx.fill();
  defenseCtx.strokeStyle = `rgba(247, 211, 107, ${0.18 + fade * 0.45})`;
  defenseCtx.lineWidth = 4;
  defenseCtx.beginPath();
  defenseCtx.arc(x, burst.y, radius * 0.72, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.fillStyle = `rgba(247, 211, 107, ${0.08 + fade * 0.24})`;
  defenseCtx.beginPath();
  defenseCtx.arc(x, burst.y, radius * 0.38, 0, Math.PI * 2);
  defenseCtx.fill();
}

function findDefenseHoneyRetarget() {
  return defenseEnemies
    .filter((enemy) => !enemy.defeated && !enemy.crashing && enemy.hp > 0 && !isDefenseAirEnemy(enemy))
    .sort((a, b) => b.x - a.x)[0];
}

function fireDefenseElectroChain(enemy) {
  const first = defenseBuildings
    .filter((building) => Math.hypot(building.x - enemy.x, building.y - enemy.y) <= enemy.range)
    .sort((a, b) => Math.hypot(a.x - enemy.x, a.y - enemy.y) - Math.hypot(b.x - enemy.x, b.y - enemy.y))[0];
  if (!first) {
    return false;
  }
  let current = first;
  const hitSet = new Set();
  let fromX = enemy.x;
  let fromY = enemy.y - 14;
  const chainDamage = Math.max(1, Math.round(enemy.bulletDamage || 60));
  for (let i = 0; i < 5 && current; i += 1) {
    hitSet.add(current);
    defenseBeams.push({ x1: fromX, y1: fromY, x2: current.x, y2: current.y - 10, life: 0.3, maxLife: 0.3, color: "#9ad7ff" });
    damageDefenseBlocker(current, chainDamage);
    defenseAirBursts.push({ x: current.x, y: current.y - 10, radius: 30, life: 0.3, maxLife: 0.3, electro: true });
    fromX = current.x;
    fromY = current.y - 10;
    const next = defenseBuildings
      .filter((building) => !hitSet.has(building) && Math.hypot(building.x - current.x, building.y - current.y) <= 200)
      .sort((a, b) => Math.hypot(a.x - current.x, a.y - current.y) - Math.hypot(b.x - current.x, b.y - current.y))[0];
    current = next;
  }
  return true;
}

function fireDefenseSuperWizard(building, target) {
  let current = target;
  const hit = new Set();
  let damage = building.damage;
  for (let i = 0; i < 14 && current; i += 1) {
    hit.add(current);
    current.hp -= damage;
    current.electroFlash = 0.35;
    defenseAirBursts.push({ x: current.x, y: current.y, radius: 34, life: 0.3, maxLife: 0.3, gold: true });
    damage *= 0.86;
    const next = defenseEnemies
      .filter((enemy) => !hit.has(enemy) && enemy.hp > 0 && !enemy.defeated && !enemy.crashing && Math.hypot(enemy.x - current.x, enemy.y - current.y) <= 200)
      .sort((a, b) => Math.hypot(a.x - current.x, a.y - current.y) - Math.hypot(b.x - current.x, b.y - current.y))[0];
    current = next;
  }
}

function fireDefenseGigaTesla(building, target) {
  const chains = building.chains || 3;
  let current = target;
  const hit = new Set();
  for (let i = 0; i < chains && current; i += 1) {
    hit.add(current);
    current.hp -= i === 0 ? building.damage : building.damage * Math.pow(0.85, i);
    current.electroFlash = 0.4;
    defenseAirBursts.push({ x: current.x, y: current.y, radius: 32, life: 0.35, maxLife: 0.35, electro: true });
    const next = defenseEnemies
      .filter((enemy) => !hit.has(enemy) && enemy.hp > 0 && !enemy.defeated && Math.hypot(enemy.x - current.x, enemy.y - current.y) <= 170)
      .sort((a, b) => Math.hypot(a.x - current.x, a.y - current.y) - Math.hypot(b.x - current.x, b.y - current.y))[0];
    current = next;
  }
}

function triggerDefenseGigaTeslaDeath(building) {
  const radius = 240;
  defenseEnemies.forEach((enemy) => {
    if (!enemy.defeated && Math.hypot(enemy.x - building.x, enemy.y - building.y) <= radius) {
      enemy.hp -= 60;
      enemy.stunTimer = Math.max(enemy.stunTimer || 0, 2.5);
      enemy.electroFlash = 0.5;
    }
  });
  defenseAirBursts.push({ x: building.x, y: building.y, radius, life: 0.7, maxLife: 0.7, electro: true });
}

function getDefensePresidentMaxHp() {
  return 100 + defensePresidentHealthLevel * 50;
}

function tryDefenseYpjLastStand() {
  const savior = defenseBuildings.find((building) => building.type === "ypj20" && building.hp > 0 && !building.lastStandUsed);
  if (!savior) {
    return false;
  }
  savior.lastStandUsed = true;
  defensePresident.hp = Math.ceil(getDefensePresidentMaxHp() * 0.4);
  defenseEnemies.forEach((enemy) => {
    if (!enemy.defeated && !enemy.crashing) {
      enemy.x = Math.max(-40, enemy.x - 1800);
      enemy.electroFlash = 0.6;
    }
  });
  defenseBuildings.forEach((building) => {
    building.hp = Math.max(building.hp, Math.ceil(building.maxHp * 0.4));
  });
  defenseHealingNerf = true;
  defenseScreenShake = 0.8;
  defenseAirBursts.push({ x: defensePresident.x - 60, y: defenseGroundY - 60, radius: 300, life: 0.9, maxLife: 0.9, electro: true });
  defenseOverlayText.textContent = "YPJ 20 last stand! President saved, defenses revived at 40% HP, enemies launched 60 tiles back. Repairs now 60% effective.";
  return true;
}

function buyDefensePresidentHealth() {
  if (defensePresidentHealthLevel >= 10) {
    return;
  }
  const cost = 120 + defensePresidentHealthLevel * 80;
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `President Health needs $${cost} - you have $${defenseMoney}.`;
    denyDefenseButton(defensePresidentHealthButton);
    return;
  }
  spendDefenseMoney(cost);
  defensePresidentHealthLevel += 1;
  const oldMax = defensePresident.maxHp;
  defensePresident.maxHp = getDefensePresidentMaxHp();
  defensePresident.hp += defensePresident.maxHp - oldMax;
  updateDefenseStats();
  updateDefenseUpgradeButtons();
}

function denyDefenseButton(button) {
  if (!button) {
    return;
  }
  button.classList.remove("denied");
  void button.offsetWidth;
  button.classList.add("denied");
}

const defenseYpjBeamColors = ["#ff4d4d", "#ff8c1a", "#ffd15c"];

function defenseHexToRgba(hex, alpha) {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

function getDefenseYpjBeamMultiplier() {
  let multiplier = Math.min(4, 1 + defenseYpjLevel * 0.15);
  if (defenseYpjLevel >= 20) {
    multiplier *= 1.44;
  }
  return multiplier;
}

function buyDefenseHoneyLauncher() {
  const ypjOwned = defenseBuildings.some((building) => building.type === "ypj20" && building.hp > 0);
  if (ypjOwned) {
    if (defenseYpjLevel >= 20) {
      return;
    }
    const ypjCost = 5000 + defenseYpjLevel * 2500;
    if (!canSpendDefenseMoney(ypjCost)) {
      defenseOverlayText.textContent = `YPJ 20 Power Lv ${defenseYpjLevel + 1} needs $${ypjCost} - you have $${defenseMoney}.`;
      denyDefenseButton(defenseHoneyLauncherButton);
      return;
    }
    spendDefenseMoney(ypjCost);
    defenseYpjLevel += 1;
    if (defenseYpjLevel === 20) {
      defenseBuildings.filter((building) => building.type === "ypj20").forEach((building) => {
        const oldMax = building.maxHp;
        building.maxHp = Math.round(building.maxHp * 1.6);
        building.hp = Math.min(building.maxHp, building.hp + (building.maxHp - oldMax));
        building.fireRate = Math.round((building.fireRate / 1.92) * 100) / 100;
      });
    }
    const multiplier = getDefenseYpjBeamMultiplier();
    defenseOverlayText.textContent = `YPJ 20 Power Lv ${defenseYpjLevel} - beams now deal ${Math.round(33 * multiplier)}% max health + ${Math.round(500 * multiplier)} flat.`;
    updateDefenseStats();
    updateDefenseUpgradeButtons();
    return;
  }
  if (defenseHoneyLevel >= 15) {
    return;
  }
  const nextLevel = defenseHoneyLevel + 1;
  const cost = 5000 + defenseHoneyLevel * 2500;
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Honey Launcher Lv ${nextLevel} needs $${cost} - you have $${defenseMoney}.`;
    denyDefenseButton(defenseHoneyLauncherButton);
    return;
  }
  spendDefenseMoney(cost);
  defenseHoneyLevel += 1;
  defenseOverlayText.textContent = `Honey Launcher Lv ${defenseHoneyLevel} online - the president lobs slowing honey at the front line.`;
  updateDefenseStats();
  updateDefenseUpgradeButtons();
}

function updateDefensePresident(delta) {
  defenseHoneyCooldown = Math.max(0, defenseHoneyCooldown - delta);
  if (defenseState !== "playing" || !defenseHoneyLevel || defenseHoneyCooldown > 0) {
    return;
  }
  if (defenseBuildings.some((building) => building.type === "ypj20" && building.hp > 0)) {
    return;
  }
  const targets = defenseEnemies
    .filter((enemy) => !enemy.defeated && !enemy.crashing && enemy.hp > 0 && !isDefenseAirEnemy(enemy) && defensePresident.x - enemy.x <= 1400)
    .sort((a, b) => b.x - a.x);
  if (!targets.length) {
    return;
  }
  const globs = 4 + Math.floor((defenseHoneyLevel - 1) / 4);
  const slow = Math.max(0.6, 1 - (0.05 + (0.20 * (defenseHoneyLevel - 1)) / 14));
  for (let i = 0; i < globs; i += 1) {
    const target = targets[i % targets.length];
    defenseBullets.push({
      x: defensePresident.x,
      y: defensePresident.y - 30,
      target,
      angle: Math.atan2(target.y - (defensePresident.y - 30), target.x - defensePresident.x) + (i - (globs - 1) / 2) * 0.14,
      speed: 380,
      homing: true,
      turnRate: 3.4,
      splash: 45 + defenseHoneyLevel * 6,
      honeySplash: true,
      honeySlow: slow,
      damage: 0,
      team: "defense"
    });
  }
  defenseHoneyCooldown = Math.max(1.5, (6.5 - defenseHoneyLevel * 0.3) / 1.5);
}

function applyDefenseHoneySplat(bullet) {
  defenseFireZones.push({
    x: bullet.x,
    y: bullet.y,
    radius: bullet.splash,
    life: 3,
    honey: true,
    slowMultiplier: bullet.honeySlow,
    affectsAll: true,
    damagePerSecond: 8 + defenseHoneyLevel * 3
  });
  defenseAirBursts.push({ x: bullet.x, y: bullet.y, radius: bullet.splash, life: 0.35, maxLife: 0.35 });
}

function drawDefenseBar(x, y, hp, maxHp, width) {
  defenseCtx.fillStyle = "rgba(23, 33, 28, 0.35)";
  defenseCtx.fillRect(x - width / 2, y, width, 5);
  defenseCtx.fillStyle = hp / maxHp > 0.35 ? "#58d68d" : "#d83b3b";
  defenseCtx.fillRect(x - width / 2, y, width * Math.max(0, hp / maxHp), 5);
}

function handleDefenseKeyDown(event) {
  if (activeGame !== "defense") {
    return false;
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "a", "A", "d", "D", "w", "W", "s", "S", " "].includes(event.key)) {
    event.preventDefault();
    defenseKeys.add(event.key);
    if (defenseState === "ready") {
      startDefenseGame();
    }
    return true;
  }
  return false;
}

function selectDefenseTool(tool) {
  defenseBattleMode = false;
  defenseSelectedMenu = "build";
  defenseSelectedTool = tool;
  updateDefenseToolButtons();
  updateDefenseMenu();
}

function toggleDefenseBattleMode() {
  tryEnterDefenseStory();
}

function selectDefenseMenu(menu) {
  defenseSelectedMenu = menu;
  defenseMergePick = null;
  if (menu !== "build") {
    defenseBattleMode = true;
  } else {
    defenseBattleMode = false;
  }
  updateDefenseMenu();
  updateDefenseToolButtons();
  drawDefenseGame();
}

function updateDefenseMenu() {
  [
    [defensePlayerTabButton, defensePlayerPanel, "player"],
    [defenseBuildTabButton, defenseBuildPanel, "build"],
    [defenseUpgradeTabButton, defenseUpgradePanel, "upgrade"],
    [defenseAbilityTabButton, defenseAbilityPanel, "ability"],
    [defenseMergeTabButton, defenseMergePanel, "merge"],
    [defenseRepairTabButton, defenseRepairPanel, "repair"],
    [defenseStatsTabButton, defenseStatsPanel, "stats"],
    [defenseHandbookTabButton, defenseHandbookPanel, "handbook"],
    [defenseDemoTabButton, defenseDemoPanel, "demo"]
  ].forEach(([button, panel, menu]) => {
    button.classList.toggle("active", defenseSelectedMenu === menu);
    panel.classList.toggle("active", defenseSelectedMenu === menu);
  });

  if (defenseSelectedMenu === "repair") {
    renderDefenseRepairList();
  }
  if (defenseSelectedMenu === "ability") {
    renderDefenseAbilityList();
  }
  if (defenseSelectedMenu === "merge") {
    renderDefenseMergeList();
  }
  if (defenseSelectedMenu === "stats") {
    renderDefenseStatList();
  }
  if (defenseSelectedMenu === "handbook") {
    renderDefenseHandbook();
  }
  if (defenseSelectedMenu === "demo") {
    renderDefenseDemoPanel();
  }
  if (defenseSelectedMenu === "player") {
    renderDefenseEquipmentPanel();
  }
}

function renderDefenseDemoPanel() {
  defenseDemoToggleButton.textContent = defenseDemoMode ? "Demo Mode: ON" : "Demo Mode: OFF";
  defenseDemoToggleButton.classList.toggle("active", defenseDemoMode);
  if (defenseDemoWaveInput) {
    if (document.activeElement !== defenseDemoWaveInput && !defenseDemoWaveInput.value) {
      defenseDemoWaveInput.value = String(defenseWave);
    }
  }
  if (defenseDemoWaveButton) {
    defenseDemoWaveButton.textContent = defenseDemoMode ? "Set & Start Wave" : "Turn On Demo & Start";
  }
  if (defenseDemoWaveStatus) {
    defenseDemoWaveStatus.textContent = defenseDemoMode
      ? `Ready to jump. Current wave: ${defenseWave}.`
      : "Click the wave button to turn Demo Mode on and start that wave.";
  }
}

function getDefenseDemoWaveValue() {
  const requested = Number(defenseDemoWaveInput?.value || defenseWave);
  const wave = Math.max(1, Math.min(200, Math.floor(requested || 1)));
  if (defenseDemoWaveInput) {
    defenseDemoWaveInput.value = String(wave);
  }
  return wave;
}

function setDefenseDemoWave() {
  activeGame = "defense";
  if (!defenseDemoMode) {
    defenseDemoMode = true;
    defenseMoney = Math.max(defenseMoney, 400);
  }
  defenseWave = getDefenseDemoWaveValue();
  defenseState = "playing";
  defenseSpawnQueue = [];
  defenseSpawnTimer = 0;
  defenseEnemies = [];
  defenseBullets = [];
  defenseFireZones = [];
  defenseAirBursts = [];
  defenseFriendlyUnits = [];
  defenseWaveSoldiersDeployed = 0;
  defenseWaveElapsed = 0;
  if (defensePresident) {
    defensePresident.hp = defensePresident.maxHp;
  }
  if (defensePlayer) {
    defensePlayer.alive = true;
    defensePlayer.hp = defensePlayer.maxHp;
    defensePlayer.respawnTimer = 0;
  }
  defenseSpawnQueue = createDefenseWave(defenseWave);
  defenseLastTime = performance.now();
  cancelAnimationFrame(defenseAnimationId);
  defenseAnimationId = requestAnimationFrame(updateDefenseGame);
  hideDefenseOverlay();
  updateDefenseStats();
  renderDefenseDemoPanel();
  if (defenseDemoWaveStatus) {
    const preview = defenseSpawnQueue.slice(0, 8).map(getDefenseEnemyName).join(", ");
    defenseDemoWaveStatus.textContent = `Started demo wave ${defenseWave}: ${preview}.`;
  }
  drawDefenseGame();
  defenseOverlayText.textContent = `Demo wave ${defenseWave} started with ${defenseSpawnQueue.slice(0, 5).map(getDefenseEnemyName).join(", ")}.`;
}

function toggleDefenseDemoMode() {
  const turningOff = defenseDemoMode;
  if (turningOff) {
    defenseDemoMode = false;
    resetDefenseGame();
    selectDefenseMenu("demo");
    defenseOverlayText.textContent = "Demo Mode is OFF: the map reset for normal play.";
    renderDefenseDemoPanel();
    return;
  }

  defenseDemoMode = true;
  if (defenseDemoMode) {
    defenseMoney = Math.max(defenseMoney, 400);
    defenseOverlayText.textContent = "Demo Mode is ON: money is infinite for testing.";
  }
  renderDefenseDemoPanel();
  updateDefenseStats();
  updateDefenseToolButtons();
  updateDefenseUpgradeButtons();
  drawDefenseGame();
}

function renderDefenseRepairList() {
  const damaged = defenseBuildings.filter((building) => building.hp < building.maxHp && building.type !== "trap");
  defenseRepairList.innerHTML = "";

  if (damaged.length === 0) {
    defenseRepairList.textContent = "No damaged buildings.";
    return;
  }

  damaged.forEach((building, index) => {
    const missingHp = Math.ceil(building.maxHp - building.hp);
    const cost = getDefenseRepairCost(building);
    const row = document.createElement("div");
    row.className = "repair-row";
    row.innerHTML = `<span>${formatDefenseName(building.type)} ${index + 1}: ${Math.ceil(building.hp)}/${building.maxHp} HP</span>`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Repair - $${cost}`;
    button.title = `Right click to repair ${missingHp} HP`;
    const attemptRepair = (event) => {
      event.preventDefault();
      repairDefenseBuilding(building);
    };
    button.addEventListener("click", attemptRepair);
    button.addEventListener("contextmenu", attemptRepair);
    row.addEventListener("contextmenu", attemptRepair);
    row.appendChild(button);
    defenseRepairList.appendChild(row);
  });
}

function renderDefenseAbilityList() {
  defenseAbilityList.innerHTML = "";

  renderDefensePlayerAbilityRows();
  const selected = getDefenseSelectedAbilityBuilding();
  if (!selected) {
    const hint = document.createElement("div");
    hint.className = "ability-row";
    hint.innerHTML = "<span>Select a defense on the battlefield<small>Open the Ability tab, then click a defense on the map to manage Phoenix, Frost Shot, or Electro for that building.</small></span>";
    defenseAbilityList.appendChild(hint);
    return;
  }
  renderDefenseBuildingAbilityRows(selected, defenseBuildings.indexOf(selected));
}

function renderDefensePlayerAbilityRows() {
  const revengeUnlocked = areDefensePlayerUpgradesMaxed();
  const revengeLevel = defensePlayer.revengeLevel || 0;
  const revengeRow = document.createElement("div");
  revengeRow.className = "ability-row player-ability-row";
  const revengeDetail = revengeUnlocked
    ? `Lv ${revengeLevel}/${defenseRevengeMaxLevel}: +${Math.round(getDefenseRevengeDamageBonus(revengeLevel) * 100)}% damage, +${Math.round(getDefenseRevengeSpeedBonus(revengeLevel) * 100)}% attack speed, ${formatDefenseNumber(getDefenseRevengeRegen(revengeLevel) * 100)}% HP/s`
    : "Max Damage, Burst Fire, and Faster Trigger to unlock Revenge, or turn on Demo Mode for testing.";
  revengeRow.innerHTML = `<span>Player Revenge<small>${revengeDetail}</small></span>`;
  const revengeButton = document.createElement("button");
  revengeButton.type = "button";
  if (!revengeUnlocked) {
    revengeButton.textContent = "Needs Player MAX";
    revengeButton.addEventListener("click", buyDefenseRevenge);
  } else if (revengeLevel >= defenseRevengeMaxLevel) {
    revengeButton.textContent = "Revenge MAX";
    revengeButton.disabled = true;
  } else {
    const nextLevel = revengeLevel + 1;
    const cost = getDefenseRevengeCost(nextLevel);
    revengeButton.textContent = `Revenge Lv ${nextLevel} - $${cost}`;
  }
  revengeButton.dataset.abilityAction = "revenge";
  revengeRow.appendChild(revengeButton);
  defenseAbilityList.appendChild(revengeRow);

  if (revengeLevel >= defenseRevengeMaxLevel) {
    const electroLevel = defensePlayer.electroLevel || 0;
    const electroRow = document.createElement("div");
    electroRow.className = "ability-row player-ability-row";
    const targets = Math.min(10, 2 + Math.floor(Math.max(0, electroLevel - 1) * 8 / (defenseElectroMaxLevel - 1)));
    electroRow.innerHTML = `<span>Electro Bullets<small>Lv ${electroLevel}/${defenseElectroMaxLevel}: player shots shock up to ${targets} nearby enemies.</small></span>`;
    const electroButton = document.createElement("button");
    electroButton.type = "button";
    if (electroLevel >= defenseElectroMaxLevel) {
      electroButton.textContent = "Electro MAX";
      electroButton.disabled = true;
    } else {
      electroButton.textContent = `Electro Lv ${electroLevel + 1} - $1200`;
      electroButton.dataset.abilityAction = "electro";
    }
    electroRow.appendChild(electroButton);
    defenseAbilityList.appendChild(electroRow);
  }

  if (revengeLevel >= defenseRevengeMaxLevel && (defensePlayer.electroLevel || 0) >= defenseElectroMaxLevel) {
    const overchargeLevel = defensePlayer.overchargeLevel || 0;
    const overchargeRow = document.createElement("div");
    overchargeRow.className = "ability-row player-ability-row";
    overchargeRow.innerHTML = `<span>Overcharge Damage<small>Lv ${overchargeLevel}/${defenseOverchargeMaxLevel}: +${formatDefenseNumber(getDefensePlayerOverchargeDamage(overchargeLevel))} flat damage to every player bullet.</small></span>`;
    const overchargeButton = document.createElement("button");
    overchargeButton.type = "button";
    if (overchargeLevel >= defenseOverchargeMaxLevel) {
      overchargeButton.textContent = "Overcharge MAX";
      overchargeButton.disabled = true;
    } else {
      const cost = getDefenseOverchargeCost(overchargeLevel + 1);
      overchargeButton.textContent = `Overcharge Lv ${overchargeLevel + 1} - $${cost}`;
      overchargeButton.dataset.abilityAction = "overcharge";
    }
    overchargeRow.appendChild(overchargeButton);
    defenseAbilityList.appendChild(overchargeRow);
  }

  if ((defensePlayer.overchargeLevel || 0) >= defenseOverchargeMaxLevel) {
    const surgeLevel = defensePlayer.surgeLevel || 0;
    const surgeRow = document.createElement("div");
    surgeRow.className = "ability-row player-ability-row";
    surgeRow.innerHTML = `<span>SURGE Attack<small>Lv ${surgeLevel}/${defenseSurgeMaxLevel}: beam damage ${formatDefenseNumber(getDefensePlayerSurgeDamage(surgeLevel))}, radius ${getDefensePlayerSurgeRadius(surgeLevel)}, cooldown ${formatDefenseNumber(getDefensePlayerSurgeCooldown(surgeLevel))}s${surgeLevel >= defenseSurgeMaxLevel ? ", max launches enemies back" : ""}.</small></span>`;
    const surgeButton = document.createElement("button");
    surgeButton.type = "button";
    if (surgeLevel >= defenseSurgeMaxLevel) {
      surgeButton.textContent = "SURGE MAX";
      surgeButton.disabled = true;
    } else {
      const cost = getDefenseSurgeCost(surgeLevel + 1);
      surgeButton.textContent = `SURGE Lv ${surgeLevel + 1} - $${cost}`;
      surgeButton.dataset.abilityAction = "surge";
    }
    surgeRow.appendChild(surgeButton);
    defenseAbilityList.appendChild(surgeRow);
  }
}

function renderDefenseBuildingAbilityRows(building, index) {
  const name = getDefenseBuildingDisplayName(building, index);
  const summaryRow = document.createElement("div");
  summaryRow.className = "ability-row";
  summaryRow.innerHTML = `<span>${name}<small>${canDefenseUsePhoenix(building) ? `Ready for abilities. Current choice: ${getDefenseAbilityName(getDefenseChosenAbility(building))}.` : `Upgrade this defense to level ${getDefenseUpgradeMaxLevel(building.type)} first to unlock its ability slot.`}</small></span>`;
  defenseAbilityList.appendChild(summaryRow);
  const chosenAbility = getDefenseChosenAbility(building);
  const phoenixLevel = building.phoenixLevel || 0;
  const phoenixNext = Math.min(defensePhoenixMaxLevel, phoenixLevel + 1);
  const phoenixRow = document.createElement("div");
  phoenixRow.className = "ability-row";
  const phoenixDetail = phoenixLevel
    ? `Lv ${phoenixLevel}: +${Math.round((getDefensePhoenixBaseMultiplier(phoenixLevel) - 1) * 100)}% base stats, ${getDefensePhoenixDuration(phoenixLevel)}s revive`
    : chosenAbility && chosenAbility !== "phoenix"
      ? `Locked because this defense chose ${getDefenseAbilityName(chosenAbility)}.`
      : "Survives one fatal hit and adds passive base stats.";
  phoenixRow.innerHTML = `<span>${name} Phoenix<small>${phoenixDetail}</small></span>`;
  const phoenixButton = document.createElement("button");
  phoenixButton.type = "button";
  if (chosenAbility && chosenAbility !== "phoenix") {
    phoenixButton.textContent = "Locked";
    phoenixButton.disabled = true;
  } else if (phoenixLevel >= defensePhoenixMaxLevel) {
    phoenixButton.textContent = "Phoenix MAX";
    phoenixButton.disabled = true;
  } else {
    const cost = getDefensePhoenixCost(building);
    phoenixButton.textContent = `Phoenix Lv ${phoenixNext} (${getDefensePhoenixDuration(phoenixNext)}s) - $${cost}`;
    phoenixButton.dataset.abilityAction = "phoenix";
    phoenixButton.dataset.buildingIndex = String(defenseBuildings.indexOf(building));
  }
  phoenixRow.appendChild(phoenixButton);
  defenseAbilityList.appendChild(phoenixRow);

  const frostLevel = building.frostLevel || 0;
  const frostNext = Math.min(defenseFrostMaxLevel, frostLevel + 1);
  const frostRow = document.createElement("div");
  frostRow.className = "ability-row";
  const frostDetail = frostLevel
    ? `Lv ${frostLevel}: ${Math.round(getDefenseFrostSlow(frostLevel) * 100)}% slow for ${formatDefenseNumber(getDefenseFrostDuration(frostLevel))}s`
    : chosenAbility && chosenAbility !== "frost"
      ? `Locked because this defense chose ${getDefenseAbilityName(chosenAbility)}.`
      : "Adds slow to this defense's hits.";
  frostRow.innerHTML = `<span>${name} Frost Shot<small>${frostDetail}</small></span>`;
  const frostButton = document.createElement("button");
  frostButton.type = "button";
  if (chosenAbility && chosenAbility !== "frost") {
    frostButton.textContent = "Locked";
    frostButton.disabled = true;
  } else if (frostLevel >= defenseFrostMaxLevel) {
    frostButton.textContent = "Frost MAX";
    frostButton.disabled = true;
  } else {
    const cost = getDefenseFrostCost(building);
    frostButton.textContent = `Frost Lv ${frostNext} - $${cost}`;
    frostButton.dataset.abilityAction = "frost";
    frostButton.dataset.buildingIndex = String(defenseBuildings.indexOf(building));
  }
  frostRow.appendChild(frostButton);
  defenseAbilityList.appendChild(frostRow);

  const electroLevel = building.electroLevel || 0;
  const electroNext = Math.min(defenseBuildingElectroMaxLevel, electroLevel + 1);
  const electroRow = document.createElement("div");
  electroRow.className = "ability-row";
  const electroTargets = Math.min(4, 1 + Math.floor(Math.max(0, electroLevel - 1) * 3 / (defenseBuildingElectroMaxLevel - 1)));
  const electroDetail = electroLevel
    ? `Lv ${electroLevel}: chains to ${electroTargets} enem${electroTargets === 1 ? "y" : "ies"} for 30% damage`
    : chosenAbility && chosenAbility !== "electro"
      ? `Locked because this defense chose ${getDefenseAbilityName(chosenAbility)}.`
      : "Adds lightning chains to this defense's hits.";
  electroRow.innerHTML = `<span>${name} Electro<small>${electroDetail}</small></span>`;
  const electroButton = document.createElement("button");
  electroButton.type = "button";
  if (chosenAbility && chosenAbility !== "electro") {
    electroButton.textContent = "Locked";
    electroButton.disabled = true;
  } else if (electroLevel >= defenseBuildingElectroMaxLevel) {
    electroButton.textContent = "Electro MAX";
    electroButton.disabled = true;
  } else {
    const cost = getDefenseBuildingElectroCost(building);
    electroButton.textContent = `Electro Lv ${electroNext} - $${cost}`;
    electroButton.dataset.abilityAction = "buildingElectro";
    electroButton.dataset.buildingIndex = String(defenseBuildings.indexOf(building));
  }
  electroRow.appendChild(electroButton);
  defenseAbilityList.appendChild(electroRow);
}

function buyDefensePhoenix(building) {
  if (!canDefenseUsePhoenix(building)) {
    defenseOverlayText.textContent = "That defense must be max level before Phoenix can be added.";
    renderDefenseAbilityList();
    return;
  }
  if (!canBuyDefenseAbilityType(building, "phoenix")) {
    defenseOverlayText.textContent = `This defense already chose ${getDefenseAbilityName(getDefenseChosenAbility(building))}. A defense can only have one ability.`;
    renderDefenseAbilityList();
    return;
  }
  if ((building.phoenixLevel || 0) >= defensePhoenixMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefensePhoenixCost(building);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for that Phoenix upgrade.`;
    return;
  }
  spendDefenseMoney(cost);
  const oldBaseMultiplier = getDefensePhoenixBaseMultiplier(building);
  building.phoenixLevel = (building.phoenixLevel || 0) + 1;
  const newBaseMultiplier = getDefensePhoenixBaseMultiplier(building);
  if (building.maxHp && oldBaseMultiplier !== newBaseMultiplier) {
    const oldMaxHp = building.maxHp;
    building.maxHp = Math.round((building.maxHp / oldBaseMultiplier) * newBaseMultiplier);
    building.hp = Math.min(building.maxHp, building.hp + Math.max(0, building.maxHp - oldMaxHp));
  }
  building.phoenixSpent = false;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function getDefenseFrostCost(building) {
  const nextLevel = (building.frostLevel || 0) + 1;
  return Math.min(360, 55 + nextLevel * 18);
}

function buyDefenseFrost(building) {
  if (!canDefenseUsePhoenix(building)) {
    defenseOverlayText.textContent = "That defense must be max level before Frost Shot can be added.";
    renderDefenseAbilityList();
    return;
  }
  if (!canBuyDefenseAbilityType(building, "frost")) {
    defenseOverlayText.textContent = `This defense already chose ${getDefenseAbilityName(getDefenseChosenAbility(building))}. A defense can only have one ability.`;
    renderDefenseAbilityList();
    return;
  }
  if ((building.frostLevel || 0) >= defenseFrostMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefenseFrostCost(building);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for that Frost Shot upgrade.`;
    return;
  }
  spendDefenseMoney(cost);
  building.frostLevel = (building.frostLevel || 0) + 1;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function getDefenseBuildingElectroCost(building) {
  const nextLevel = (building.electroLevel || 0) + 1;
  return Math.min(520, 90 + nextLevel * 28);
}

function buyDefenseBuildingElectro(building) {
  if (!canDefenseUsePhoenix(building)) {
    defenseOverlayText.textContent = "That defense must be max level before Electro can be added.";
    renderDefenseAbilityList();
    return;
  }
  if (!canBuyDefenseAbilityType(building, "electro")) {
    defenseOverlayText.textContent = `This defense already chose ${getDefenseAbilityName(getDefenseChosenAbility(building))}. A defense can only have one ability.`;
    renderDefenseAbilityList();
    return;
  }
  if ((building.electroLevel || 0) >= defenseBuildingElectroMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefenseBuildingElectroCost(building);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for that Electro upgrade.`;
    return;
  }
  spendDefenseMoney(cost);
  building.electroLevel = (building.electroLevel || 0) + 1;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function areDefensePlayerUpgradesMaxed() {
  return defenseDemoMode || (defensePlayer.damageLevel >= 10 && defensePlayer.burstLevel >= 2 && defensePlayer.fireRateLevel >= 3 && defensePlayer.healthLevel >= 10);
}

function getDefenseRevengeCost(nextLevel) {
  if (nextLevel <= 2) {
    return 300;
  }
  const progress = (nextLevel - 2) / (defenseRevengeMaxLevel - 2);
  return Math.round((300 + progress * 2700) / 50) * 50;
}

function buyDefenseRevenge() {
  if (!areDefensePlayerUpgradesMaxed()) {
    defenseOverlayText.textContent = "Max every player upgrade before buying Revenge, or turn on Demo Mode to test it right away.";
    renderDefenseAbilityList();
    return;
  }
  if ((defensePlayer.revengeLevel || 0) >= defenseRevengeMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefenseRevengeCost((defensePlayer.revengeLevel || 0) + 1);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for Revenge.`;
    return;
  }
  spendDefenseMoney(cost);
  defensePlayer.revengeLevel = (defensePlayer.revengeLevel || 0) + 1;
  defensePlayer.revengeStacks = 0;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function buyDefenseElectro() {
  if ((defensePlayer.revengeLevel || 0) < defenseRevengeMaxLevel) {
    defenseOverlayText.textContent = "Max Revenge before buying Electro Bullets.";
    renderDefenseAbilityList();
    return;
  }
  if ((defensePlayer.electroLevel || 0) >= defenseElectroMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  if (!canSpendDefenseMoney(1200)) {
    defenseOverlayText.textContent = "Need $1200 for Electro Bullets.";
    return;
  }
  spendDefenseMoney(1200);
  defensePlayer.electroLevel = (defensePlayer.electroLevel || 0) + 1;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function getDefenseOverchargeCost(nextLevel) {
  return 1200 + Math.max(0, nextLevel - 1) * 90;
}

function getDefenseSurgeCost(nextLevel) {
  return 1500 + Math.max(0, nextLevel - 1) * 130;
}

function buyDefenseOvercharge() {
  if ((defensePlayer.revengeLevel || 0) < defenseRevengeMaxLevel || (defensePlayer.electroLevel || 0) < defenseElectroMaxLevel) {
    defenseOverlayText.textContent = "Max Revenge and Electro before buying Overcharge Damage.";
    renderDefenseAbilityList();
    return;
  }
  if ((defensePlayer.overchargeLevel || 0) >= defenseOverchargeMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefenseOverchargeCost((defensePlayer.overchargeLevel || 0) + 1);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for Overcharge Damage.`;
    return;
  }
  spendDefenseMoney(cost);
  defensePlayer.overchargeLevel = (defensePlayer.overchargeLevel || 0) + 1;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function buyDefenseSurge() {
  if ((defensePlayer.overchargeLevel || 0) < defenseOverchargeMaxLevel) {
    defenseOverlayText.textContent = "Max Overcharge before buying SURGE Attack.";
    renderDefenseAbilityList();
    return;
  }
  if ((defensePlayer.surgeLevel || 0) >= defenseSurgeMaxLevel) {
    renderDefenseAbilityList();
    return;
  }
  const cost = getDefenseSurgeCost((defensePlayer.surgeLevel || 0) + 1);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} for SURGE Attack.`;
    return;
  }
  spendDefenseMoney(cost);
  defensePlayer.surgeLevel = (defensePlayer.surgeLevel || 0) + 1;
  updateDefenseStats();
  renderDefenseAbilityList();
}

function handleDefenseAbilityPointerDown(event) {
  const button = event.target.closest("button[data-ability-action]");
  if (!button || button.disabled) {
    return;
  }
  event.preventDefault();
  const action = button.dataset.abilityAction;
  const building = button.dataset.buildingIndex === undefined ? null : defenseBuildings[Number(button.dataset.buildingIndex)];
  if (action === "revenge") {
    buyDefenseRevenge();
  }
  if (action === "electro") {
    buyDefenseElectro();
  }
  if (action === "overcharge") {
    buyDefenseOvercharge();
  }
  if (action === "surge") {
    buyDefenseSurge();
  }
  if (action === "phoenix" && building) {
    buyDefensePhoenix(building);
  }
  if (action === "frost" && building) {
    buyDefenseFrost(building);
  }
  if (action === "buildingElectro" && building) {
    buyDefenseBuildingElectro(building);
  }
}

function getDefenseSelectedAbilityBuilding() {
  if (!defenseSelectedAbilityBuilding || !defenseBuildings.includes(defenseSelectedAbilityBuilding) || defenseSelectedAbilityBuilding.hp <= 0) {
    defenseSelectedAbilityBuilding = null;
  }
  return defenseSelectedAbilityBuilding;
}

function getDefenseBuildingDisplayName(building, index = defenseBuildings.indexOf(building)) {
  const sameType = defenseBuildings.filter((candidate) => candidate.type === building.type);
  const typeIndex = sameType.indexOf(building);
  return `${formatDefenseName(building.type)} ${typeIndex >= 0 ? typeIndex + 1 : index + 1}`;
}

function getDefenseBuildingHitRadius(building) {
  if (building.type === "wall") {
    return 30;
  }
  if (building.type === "camp" || building.type === "tankCamp" || building.type === "airfield" || building.type === "troopLauncher" || building.type === "builder" || building.type === "missile" || building.type === "rapidMissile" || building.type === "monolith" || building.type === "eagle" || building.type === "infernoSingle" || building.type === "infernoMulti") {
    return 34;
  }
  if (building.type === "trap") {
    return 18;
  }
  return building.type === "cannon" || building.type === "ricochet" || building.type === "mortar" || building.type === "multiMortar" ? 24 : 21;
}

function getDefenseBuildingAtWorldPoint(worldX, worldY) {
  return [...defenseBuildings]
    .filter((building) => building.hp > 0)
    .reverse()
    .find((building) => Math.hypot(worldX - building.x, worldY - building.y) <= getDefenseBuildingHitRadius(building)) || null;
}

function renderDefenseMergeList() {
  defenseMergeList.innerHTML = "";
  const tip = document.createElement("div");
  tip.className = "merge-row";
  tip.innerHTML = "<span>Tip: merge by clicking defenses<small>Click one defense on the battlefield, then click its partner to merge them in place.</small></span>";
  defenseMergeList.appendChild(tip);
  const mortars = defenseBuildings.filter((building) => building.type === "mortar" && building.hp > 0);
  const spells = defenseBuildings.filter((building) => building.type === "spell" && building.hp > 0);
  const requirement = getDefenseMergeRequirementStatus();
  const lavaRequirement = getDefenseLavaMergeRequirementStatus();
  const ypjRequirement = getDefenseYpjMergeRequirementStatus();
  const gigaInfernoRequirement = getDefenseGigaInfernoMergeRequirementStatus();
  const superWizardRequirement = getDefenseSuperWizardMergeRequirementStatus();
  const merged = defenseBuildings.filter((building) => (building.type === "freezeSpell" || building.type === "lavaLauncher" || building.type === "ypj20" || building.type === "gigaInferno" || building.type === "superWizard") && building.hp > 0);

  const runMergeAction = (event, action) => {
    event.preventDefault();
    action();
  };

  const createRow = (title, detail, buttonText, action, disabled = false, alt = false) => {
    const row = document.createElement("div");
    row.className = "merge-row";
    row.innerHTML = `<span>${title}<small>${detail}</small></span>`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = buttonText;
    button.disabled = disabled;
    if (alt) {
      button.classList.add("alt");
    }
    button.title = "Left click or right click to use this merge option.";
    button.addEventListener("click", (event) => runMergeAction(event, action));
    button.addEventListener("contextmenu", (event) => runMergeAction(event, action));
    row.addEventListener("contextmenu", (event) => {
      if (event.target === row || event.target.tagName === "SPAN" || event.target.tagName === "SMALL") {
        runMergeAction(event, action);
      }
    });
    row.appendChild(button);
    defenseMergeList.appendChild(row);
    return row;
  };

  const mergeRow = createRow(
    "Mortar + Spell Tower",
    `${requirement.ready ? "Ready" : "Not ready"} | Mortars ${mortars.length}, Spell Towers ${spells.length}, Mortar Lv ${requirement.mortarLevel}/${requirement.mortarMax}, Spell Lv ${requirement.spellLevel}/${requirement.spellMax}, Money ${defenseDemoMode ? "Demo" : `$${defenseMoney}/$${defenseMergeCost}`}.`,
    `Middle - $${defenseMergeCost}`,
    () => mergeDefenseMortarSpell("middle")
  );
  const replaceMortarButton = document.createElement("button");
  replaceMortarButton.type = "button";
  replaceMortarButton.textContent = "Replace Mortar";
  replaceMortarButton.title = "Left click or right click to merge into the Mortar spot.";
  replaceMortarButton.addEventListener("click", (event) => runMergeAction(event, () => mergeDefenseMortarSpell("mortar")));
  replaceMortarButton.addEventListener("contextmenu", (event) => runMergeAction(event, () => mergeDefenseMortarSpell("mortar")));
  mergeRow.appendChild(replaceMortarButton);
  const replaceSpellButton = document.createElement("button");
  replaceSpellButton.type = "button";
  replaceSpellButton.textContent = "Replace Spell";
  replaceSpellButton.className = "alt";
  replaceSpellButton.title = "Left click or right click to merge into the Spell Tower spot.";
  replaceSpellButton.addEventListener("click", (event) => runMergeAction(event, () => mergeDefenseMortarSpell("spell")));
  replaceSpellButton.addEventListener("contextmenu", (event) => runMergeAction(event, () => mergeDefenseMortarSpell("spell")));
  mergeRow.appendChild(replaceSpellButton);

  createRow(
    "Max Mortar + Max Inferno Artillery",
    `${lavaRequirement.ready ? "Ready" : "Not ready"} | Mortar Lv ${lavaRequirement.mortarLevel}/${lavaRequirement.mortarMax}, Inferno Artillery Lv ${lavaRequirement.infernoLevel}/${lavaRequirement.infernoMax}, Money ${defenseDemoMode ? "Demo" : `$${defenseMoney}/$${defenseLavaMergeCost}`}. Fireballs leave 5-tile lava pools for 25s.`,
    `Merge - $${defenseLavaMergeCost}`,
    () => mergeDefenseLavaLauncher(),
    false,
    true
  );

  createRow(
    "Max Honey Launcher + Max Eagle Artillery",
    `${ypjRequirement.ready ? "Ready" : "Not ready"} | Eagle Lv ${ypjRequirement.eagleLevel}/${ypjRequirement.eagleMax}, Honey Lv ${defenseHoneyLevel}/15, Money ${defenseDemoMode ? "Demo" : `$${defenseMoney}/$${defenseYpjMergeCost}`}. 3 beams, 15% health each, every 5s. Saves the president once.`,
    `Merge - $${defenseYpjMergeCost}`,
    () => mergeDefenseYpj20(),
    false,
    true
  );

  createRow(
    "3x Max Inferno Multi towers",
    `${gigaInfernoRequirement.ready ? "Ready" : "Not ready"} | Inferno Multi towers ${gigaInfernoRequirement.count}/3, Inferno Lv ${gigaInfernoRequirement.infernoLevel}/${gigaInfernoRequirement.infernoMax}, Money ${defenseDemoMode ? "Demo" : `$${defenseMoney}/$${defenseGigaInfernoMergeCost}`}. 5 thick beams, 2% health + 50 per second.`,
    `Merge - $${defenseGigaInfernoMergeCost}`,
    () => mergeDefenseGigaInferno(),
    false,
    true
  );

  createRow(
    "2x Max Wizard Towers",
    `${superWizardRequirement.ready ? "Ready" : "Not ready"} | Wizard Towers ${superWizardRequirement.count}/2, Wizard Lv ${superWizardRequirement.wizardLevel}/${superWizardRequirement.wizardMax}, Money ${defenseDemoMode ? "Demo" : `$${defenseMoney}/$${defenseSuperWizardMergeCost}`}. Slash chains up to 14 enemies, 14% falloff.`,
    `Merge - $${defenseSuperWizardMergeCost}`,
    () => mergeDefenseSuperWizard(),
    false,
    true
  );

  if (defenseMergeNotice || !requirement.ready) {
    const status = document.createElement("div");
    status.className = "merge-row";
    status.innerHTML = `<span>${defenseMergeNotice || "Merge locked"}<small>${requirement.ready ? "Ready to merge." : `Missing: ${requirement.missing.join(", ")}.`}</small></span>`;
    defenseMergeList.appendChild(status);
  }

  if (merged.length === 0) {
    const empty = document.createElement("div");
    empty.className = "merge-row";
    empty.innerHTML = "<span>No merged towers yet<small>Build a Mortar and Spell Tower first, then click Merge.</small></span>";
    defenseMergeList.appendChild(empty);
    return;
  }

  merged.forEach((building, index) => {
    if (building.type === "superWizard") {
      createRow(
        `${formatDefenseName(building.type)} ${index + 1}`,
        "Chains up to 14 enemies per slash, each jump deals 14% less than the last.",
        "Chain Active",
        () => {},
        true
      );
      return;
    }
    if (building.type === "gigaInferno") {
      const gigaLevel = 1 + (defenseUpgradeLevels.gigaInferno || 0);
      createRow(
        `${formatDefenseName(building.type)} ${index + 1}`,
        `5 beams, ${Math.round((0.02 + (0.03 * (gigaLevel - 1)) / 9) * 1000) / 10}% max health + ${Math.round(50 + (25 * (gigaLevel - 1)) / 9)} per second. Lv ${gigaLevel}/10.`,
        "Inferno Active",
        () => {},
        true
      );
      return;
    }
    if (building.type === "ypj20") {
      createRow(
        `${formatDefenseName(building.type)} ${index + 1}`,
        `3 beams of light, 2 tiles thick, 33% of max health + 500 each, splashing 70% in 4 tiles. Power Lv ${defenseYpjLevel}/20. Last stand save ${building.lastStandUsed ? "used" : "ready"}.`,
        "Beam Active",
        () => {},
        true
      );
      return;
    }
    if (building.type === "lavaLauncher") {
      createRow(
        `${formatDefenseName(building.type)} ${index + 1}`,
        `Triple mortar range. Lava pools burn for 5% of fireball damage per second.`,
        "Lava Active",
        () => {},
        true
      );
      return;
    }
    const modeRow = createRow(
      `${formatDefenseName(building.type)} ${index + 1}`,
      `Current mode: ${(building.mode || "freeze").toUpperCase()}. Freeze is no-damage control. Poison deals 4% current HP/s for 10s and slows up to 30% at max.`,
      (building.mode || "freeze") === "freeze" ? "Freeze Active" : "Switch Freeze",
      () => setDefenseMergedSpellMode(building, "freeze"),
      (building.mode || "freeze") === "freeze",
      false
    );
    const poisonButton = document.createElement("button");
    poisonButton.type = "button";
    poisonButton.className = "alt";
    poisonButton.textContent = building.mode === "poison" ? "Poison Active" : "Switch Poison";
    poisonButton.disabled = building.mode === "poison";
    poisonButton.title = "Left click or right click to switch this merged tower to Poison.";
    poisonButton.addEventListener("click", (event) => runMergeAction(event, () => setDefenseMergedSpellMode(building, "poison")));
    poisonButton.addEventListener("contextmenu", (event) => runMergeAction(event, () => setDefenseMergedSpellMode(building, "poison")));
    modeRow.appendChild(poisonButton);
  });
}

function mergeDefenseMortarSpell(replaceMode = "middle") {
  const requirement = getDefenseMergeRequirementStatus();
  const mortarIndex = defenseBuildings.findIndex((building) => building.type === "mortar" && building.hp > 0);
  const spellIndex = defenseBuildings.findIndex((building) => building.type === "spell" && building.hp > 0);
  if (!requirement.ready || mortarIndex < 0 || spellIndex < 0) {
    defenseMergeNotice = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseOverlayText.textContent = defenseMergeNotice;
    renderDefenseMergeList();
    return;
  }
  const mortar = defenseBuildings[mortarIndex];
  const spell = defenseBuildings[spellIndex];
  spendDefenseMoney(defenseMergeCost);
  const mergedX = replaceMode === "mortar" ? mortar.x : replaceMode === "spell" ? spell.x : (mortar.x + spell.x) / 2;
  const mergedY = replaceMode === "mortar" ? mortar.y : replaceMode === "spell" ? spell.y : Math.min(mortar.y, spell.y);
  const merged = createDefenseBuilding("freezeSpell", mergedX, mergedY);
  defenseBuildings = defenseBuildings.filter((_, index) => index !== mortarIndex && index !== spellIndex);
  defenseBuildings.push(merged);
  defenseSelectedMenu = "merge";
  const replacedText = replaceMode === "mortar" ? "replaced the Mortar spot" : replaceMode === "spell" ? "replaced the Spell Tower spot" : "landed between the two towers";
  defenseMergedUnlocked.freezeSpell = true;
  defenseMergeNotice = `Merged into a Freeze/Poison Spell Tower and ${replacedText}.`;
  defenseOverlayText.textContent = `${defenseMergeNotice} Use the Merge tab to switch its spell mode.`;
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

function getDefenseLavaMergeRequirementStatus() {
  const mortarLevel = defenseUpgradeLevels.mortar || 0;
  const infernoLevel = defenseUpgradeLevels.infernoArtillery || 0;
  const mortarMax = getDefenseUpgradeMaxLevel("mortar");
  const infernoMax = getDefenseUpgradeMaxLevel("infernoArtillery");
  const mortarCount = defenseBuildings.filter((building) => building.type === "mortar" && building.hp > 0).length;
  const infernoCount = defenseBuildings.filter((building) => building.type === "infernoArtillery" && building.hp > 0).length;
  const missing = [];
  if (mortarCount <= 0) missing.push("build a Mortar");
  if (infernoCount <= 0) missing.push("build an Inferno Artillery");
  if (mortarLevel < mortarMax) missing.push(`upgrade Mortar to Lv ${mortarMax}`);
  if (infernoLevel < infernoMax) missing.push(`upgrade Inferno Artillery to Lv ${infernoMax}`);
  if (!defenseDemoMode && defenseMoney < defenseLavaMergeCost) missing.push(`save $${defenseLavaMergeCost}`);
  return { ready: missing.length === 0, missing, mortarLevel, infernoLevel, mortarMax, infernoMax };
}

function mergeDefenseLavaLauncher() {
  const requirement = getDefenseLavaMergeRequirementStatus();
  const mortarIndex = defenseBuildings.findIndex((building) => building.type === "mortar" && building.hp > 0);
  const infernoIndex = defenseBuildings.findIndex((building) => building.type === "infernoArtillery" && building.hp > 0);
  if (!requirement.ready || mortarIndex < 0 || infernoIndex < 0) {
    defenseMergeNotice = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseOverlayText.textContent = defenseMergeNotice;
    renderDefenseMergeList();
    return;
  }
  const mortar = defenseBuildings[mortarIndex];
  spendDefenseMoney(defenseLavaMergeCost);
  const merged = createDefenseBuilding("lavaLauncher", mortar.x, mortar.y);
  defenseBuildings = defenseBuildings.filter((_, index) => index !== mortarIndex && index !== infernoIndex);
  defenseBuildings.push(merged);
  defenseSelectedMenu = "merge";
  defenseMergedUnlocked.lavaLauncher = true;
  defenseMergeNotice = "Merged into a Lava Launcher on the Mortar spot.";
  defenseOverlayText.textContent = "Lava Launcher online - fireballs leave 5-tile lava pools for 25 seconds.";
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

function handleDefenseMergeCanvasClick(clickedBuilding) {
  if (!clickedBuilding) {
    if (defenseMergePick) {
      defenseMergePick = null;
      defenseOverlayText.textContent = "Merge selection cleared.";
      drawDefenseGame();
    }
    return;
  }
  if (!defenseMergePick) {
    defenseMergePick = clickedBuilding;
    defenseOverlayText.textContent = `${formatDefenseName(clickedBuilding.type)} selected - now click its merge partner (a Mortar pairs with a Spell Tower or an Inferno Artillery).`;
    drawDefenseGame();
    return;
  }
  const first = defenseMergePick;
  const second = clickedBuilding;
  if (first === second) {
    defenseMergePick = null;
    defenseOverlayText.textContent = "Merge selection cleared.";
    drawDefenseGame();
    return;
  }
  const types = [first.type, second.type];
  if (types.includes("mortar") && types.includes("spell")) {
    tryDefenseClickMerge("freezeSpell", first, second, getDefenseMergeRequirementStatus(), defenseMergeCost);
    return;
  }
  if (types.includes("mortar") && types.includes("infernoArtillery")) {
    tryDefenseClickMerge("lavaLauncher", first, second, getDefenseLavaMergeRequirementStatus(), defenseLavaMergeCost);
    return;
  }
  defenseMergePick = second;
  defenseOverlayText.textContent = `${formatDefenseName(first.type)} and ${formatDefenseName(second.type)} can't merge. Now selected: ${formatDefenseName(second.type)}.`;
  drawDefenseGame();
}

function tryDefenseClickMerge(mergedType, first, second, requirement, cost) {
  if (!requirement.ready) {
    defenseOverlayText.textContent = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseMergePick = null;
    renderDefenseMergeList();
    drawDefenseGame();
    return;
  }
  spendDefenseMoney(cost);
  const merged = createDefenseBuilding(mergedType, second.x, second.y);
  defenseBuildings = defenseBuildings.filter((building) => building !== first && building !== second);
  defenseBuildings.push(merged);
  defenseMergePick = null;
  if (mergedType === "freezeSpell") {
    defenseMergedUnlocked.freezeSpell = true;
  } else {
    defenseMergedUnlocked.lavaLauncher = true;
  }
  updateDefenseMergedBuildButtons();
  defenseMergeNotice = `Merged into a ${formatDefenseName(mergedType)} on the ${formatDefenseName(second.type)} spot.`;
  defenseOverlayText.textContent = defenseMergeNotice;
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

function drawDefenseMergePick() {
  if (!defenseMergePick || defenseSelectedMenu !== "merge" || defenseAttackMode) {
    return;
  }
  if (!defenseBuildings.includes(defenseMergePick) || defenseMergePick.hp <= 0) {
    defenseMergePick = null;
    return;
  }
  const x = defenseMergePick.x - defenseCameraX;
  defenseCtx.save();
  defenseCtx.strokeStyle = "#7fe3ff";
  defenseCtx.lineWidth = 3;
  defenseCtx.setLineDash([6, 5]);
  defenseCtx.beginPath();
  defenseCtx.arc(x, defenseMergePick.y, 34, 0, Math.PI * 2);
  defenseCtx.stroke();
  defenseCtx.restore();
}

function getDefenseYpjMergeRequirementStatus() {
  const eagleLevel = defenseUpgradeLevels.eagle || 0;
  const eagleMax = getDefenseUpgradeMaxLevel("eagle");
  const eagleCount = defenseBuildings.filter((building) => building.type === "eagle" && building.hp > 0).length;
  const missing = [];
  if (eagleCount <= 0) missing.push("build an Eagle Artillery");
  if (eagleLevel < eagleMax) missing.push(`upgrade Eagle Artillery to Lv ${eagleMax}`);
  if (defenseHoneyLevel < 15) missing.push(`max the Honey Launcher (Lv ${defenseHoneyLevel}/15)`);
  if (!defenseDemoMode && defenseMoney < defenseYpjMergeCost) missing.push(`save $${defenseYpjMergeCost}`);
  return { ready: missing.length === 0, missing, eagleLevel, eagleMax };
}

function mergeDefenseYpj20() {
  const requirement = getDefenseYpjMergeRequirementStatus();
  const eagleIndex = defenseBuildings.findIndex((building) => building.type === "eagle" && building.hp > 0);
  if (!requirement.ready || eagleIndex < 0) {
    defenseMergeNotice = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseOverlayText.textContent = defenseMergeNotice;
    renderDefenseMergeList();
    return;
  }
  const eagle = defenseBuildings[eagleIndex];
  spendDefenseMoney(defenseYpjMergeCost);
  const merged = createDefenseBuilding("ypj20", eagle.x, eagle.y);
  defenseBuildings = defenseBuildings.filter((_, index) => index !== eagleIndex);
  defenseBuildings.push(merged);
  defenseHoneyLevel = 0;
  defenseYpjLevel = 0;
  defenseSelectedMenu = "merge";
  defenseMergedUnlocked.ypj20 = true;
  updateDefenseMergedBuildButtons();
  defenseMergeNotice = "Merged into the YPJ 20 giga beam on the Eagle Artillery spot. Honey Launcher consumed.";
  defenseOverlayText.textContent = defenseMergeNotice;
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

function getDefenseGigaInfernoMergeRequirementStatus() {
  const infernoLevel = defenseUpgradeLevels.infernoSingle || 0;
  const infernoMax = getDefenseUpgradeMaxLevel("infernoSingle");
  const count = defenseBuildings.filter((building) => building.type === "infernoMulti" && building.hp > 0).length;
  const missing = [];
  if (count < 3) missing.push(`build ${3 - count} more Inferno Multi tower${3 - count === 1 ? "" : "s"}`);
  if (infernoLevel < infernoMax) missing.push(`upgrade Inferno towers to Lv ${infernoMax}`);
  if (!defenseDemoMode && defenseMoney < defenseGigaInfernoMergeCost) missing.push(`save $${defenseGigaInfernoMergeCost}`);
  return { ready: missing.length === 0, missing, infernoLevel, infernoMax, count };
}

function mergeDefenseGigaInferno() {
  const requirement = getDefenseGigaInfernoMergeRequirementStatus();
  if (!requirement.ready) {
    defenseMergeNotice = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseOverlayText.textContent = defenseMergeNotice;
    renderDefenseMergeList();
    return;
  }
  const infernos = defenseBuildings.filter((building) => building.type === "infernoMulti" && building.hp > 0);
  const first = infernos[0];
  spendDefenseMoney(defenseGigaInfernoMergeCost);
  const merged = createDefenseBuilding("gigaInferno", first.x, first.y);
  const consumed = new Set(infernos.slice(0, 3));
  defenseBuildings = defenseBuildings.filter((building) => !consumed.has(building));
  defenseBuildings.push(merged);
  defenseSelectedMenu = "merge";
  defenseMergedUnlocked.gigaInferno = true;
  updateDefenseMergedBuildButtons();
  defenseMergeNotice = "Merged 3 Inferno Multi towers into the Giga Inferno on the first tower's spot.";
  defenseOverlayText.textContent = "Giga Inferno online - 5 thick beams burn 2% max health + 50 per second.";
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

const defenseSuperWizardMergeCost = 2000;

function getDefenseSuperWizardMergeRequirementStatus() {
  const wizardLevel = defenseUpgradeLevels.wizard || 0;
  const wizardMax = getDefenseUpgradeMaxLevel("wizard");
  const count = defenseBuildings.filter((building) => building.type === "wizard" && building.hp > 0).length;
  const missing = [];
  if (count < 2) missing.push(`build ${2 - count} more Wizard Tower${2 - count === 1 ? "" : "s"}`);
  if (wizardLevel < wizardMax) missing.push(`upgrade Wizard Tower to Lv ${wizardMax}`);
  if (!defenseDemoMode && defenseMoney < defenseSuperWizardMergeCost) missing.push(`save $${defenseSuperWizardMergeCost}`);
  return { ready: missing.length === 0, missing, wizardLevel, wizardMax, count };
}

function mergeDefenseSuperWizard() {
  const requirement = getDefenseSuperWizardMergeRequirementStatus();
  if (!requirement.ready) {
    defenseMergeNotice = `Can't merge yet: ${requirement.missing.join(", ")}.`;
    defenseOverlayText.textContent = defenseMergeNotice;
    renderDefenseMergeList();
    return;
  }
  const wizards = defenseBuildings.filter((building) => building.type === "wizard" && building.hp > 0);
  const first = wizards[0];
  spendDefenseMoney(defenseSuperWizardMergeCost);
  const merged = createDefenseBuilding("superWizard", first.x, first.y);
  const consumed = new Set(wizards.slice(0, 2));
  defenseBuildings = defenseBuildings.filter((building) => !consumed.has(building));
  defenseBuildings.push(merged);
  defenseSelectedMenu = "merge";
  defenseMergedUnlocked.superWizard = true;
  updateDefenseMergedBuildButtons();
  defenseMergeNotice = "Merged 2 Wizard Towers into the Super Wizard Tower on the first tower's spot.";
  defenseOverlayText.textContent = "Super Wizard Tower online - slash chains up to 14 enemies with 14% falloff.";
  updateDefenseStats();
  renderDefenseMergeList();
  drawDefenseGame();
}

function getDefenseMergeRequirementStatus() {
  const mortarLevel = defenseUpgradeLevels.mortar || 0;
  const spellLevel = defenseUpgradeLevels.spell || 0;
  const mortarMax = getDefenseUpgradeMaxLevel("mortar");
  const spellMax = getDefenseUpgradeMaxLevel("spell");
  const mortarCount = defenseBuildings.filter((building) => building.type === "mortar" && building.hp > 0).length;
  const spellCount = defenseBuildings.filter((building) => building.type === "spell" && building.hp > 0).length;
  const missing = [];
  if (mortarCount <= 0) missing.push("build a Mortar");
  if (spellCount <= 0) missing.push("build a Spell Tower");
  if (mortarLevel < mortarMax) missing.push(`upgrade Mortar to Lv ${mortarMax}`);
  if (spellLevel < spellMax) missing.push(`upgrade Spell Tower to Lv ${spellMax}`);
  if (!defenseDemoMode && defenseMoney < defenseMergeCost) missing.push(`save $${defenseMergeCost}`);
  return { ready: missing.length === 0, missing, mortarLevel, spellLevel, mortarMax, spellMax };
}

function setDefenseMergedSpellMode(building, mode) {
  building.mode = mode === "poison" ? "poison" : "freeze";
  building.cooldown = Math.min(building.cooldown || 0, 1);
  defenseMergeNotice = `${formatDefenseName(building.type)} switched to ${building.mode === "poison" ? "Poison" : "Freeze"} mode.`;
  defenseOverlayText.textContent = defenseMergeNotice;
  renderDefenseMergeList();
  drawDefenseGame();
}

function renderDefenseStatList() {
  const types = getDefenseStatTypes();
  defenseStatList.innerHTML = "";

  types.forEach((type) => {
    const sample = createDefenseBuilding(type, defensePresident.x, defenseGroundY - 24);
    const owned = defenseBuildings.filter((building) => building.type === type).length;
    const card = document.createElement("div");
    card.className = "defense-stat-card";
    const stats = getDefenseStatLines(type, sample, owned);
    card.innerHTML = `<strong>${formatDefenseName(type)}</strong><span>${stats.join("</span><span>")}</span>`;
    defenseStatList.appendChild(card);
  });
}

function renderDefenseHandbook() {
  defenseHandbookList.innerHTML = "";
  const tabBar = document.createElement("div");
  tabBar.className = "defense-handbook-tabs";
  const playerButton = document.createElement("button");
  playerButton.type = "button";
  playerButton.className = defenseHandbookSelectedType === "player" ? "active" : "";
  playerButton.textContent = "Player";
  playerButton.addEventListener("click", () => {
    defenseHandbookSelectedType = "player";
    renderDefenseHandbook();
  });
  tabBar.appendChild(playerButton);
  const abilityButton = document.createElement("button");
  abilityButton.type = "button";
  abilityButton.className = defenseHandbookSelectedType === "abilities" ? "active" : "";
  abilityButton.textContent = "Abilities";
  abilityButton.addEventListener("click", () => {
    defenseHandbookSelectedType = "abilities";
    renderDefenseHandbook();
  });
  tabBar.appendChild(abilityButton);
  const enemyButton = document.createElement("button");
  enemyButton.type = "button";
  enemyButton.className = defenseHandbookSelectedType === "enemies" ? "active" : "";
  enemyButton.textContent = "Enemies";
  enemyButton.addEventListener("click", () => {
    defenseHandbookSelectedType = "enemies";
    renderDefenseHandbook();
  });
  tabBar.appendChild(enemyButton);
  getDefenseStatTypes().forEach((type) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = type === defenseHandbookSelectedType ? "active" : "";
    button.textContent = formatDefenseName(type);
    button.addEventListener("click", () => {
      defenseHandbookSelectedType = type;
      renderDefenseHandbook();
    });
    tabBar.appendChild(button);
  });

  const type = defenseHandbookSelectedType || "turret";
  if (type === "player") {
    defenseHandbookList.appendChild(tabBar);
    defenseHandbookList.appendChild(createDefensePlayerHandbookCard());
    return;
  }
  if (type === "abilities") {
    defenseHandbookList.appendChild(tabBar);
    defenseHandbookList.appendChild(createDefenseAbilityHandbookCard());
    return;
  }
  if (type === "enemies") {
    defenseHandbookList.appendChild(tabBar);
    defenseHandbookList.appendChild(createDefenseEnemyHandbookCard());
    return;
  }
  const maxLevel = getDefenseUpgradeMaxLevel(type);
  const rows = [];
  for (let level = 0; level <= maxLevel; level += 1) {
    const sample = createDefenseSampleAtLevel(type, level);
    rows.push(`<tr><td>${level}</td><td>${formatDefenseHandbookStats(type, sample, level)}</td></tr>`);
  }
  const card = document.createElement("div");
  card.className = "defense-handbook-card";
  card.innerHTML = `<strong>${formatDefenseName(type)}</strong><span class="defense-demo-label">Attack demo at level thresholds</span><table><thead><tr><th>Lv</th><th>Stats</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
  card.insertBefore(createDefenseLookPreview(type), card.querySelector("table"));
  defenseHandbookList.appendChild(tabBar);
  defenseHandbookList.appendChild(card);
}

function createDefensePlayerHandbookCard() {
  const card = document.createElement("div");
  card.className = "defense-handbook-card ability-handbook-card";
  const baseRows = [
    "<tr><td>Damage</td><td>10 levels. Adds +0.1 weapon damage per level.</td></tr>",
    "<tr><td>Burst</td><td>2 levels. Adds more shots per click, up to 3-shot burst.</td></tr>",
    "<tr><td>Trigger</td><td>3 levels. Lowers player reload time.</td></tr>",
    "<tr><td>Health</td><td>10 levels. Raises max player HP up to 2000.</td></tr>"
  ];
  const revengeRows = [1, 3, 5, 8, 10].map((level) => (
    `<tr><td>${level}</td><td>+${Math.round(getDefenseRevengeDamageBonus(level) * 100)}% damage, +${Math.round(getDefenseRevengeSpeedBonus(level) * 100)}% attack speed, ${formatDefenseNumber(getDefenseRevengeRegen(level) * 100)}% HP/s</td></tr>`
  ));
  const electroRows = [1, 4, 8, 12, 15].map((level) => {
    const targets = Math.min(10, 2 + Math.floor((level - 1) * 8 / (defenseElectroMaxLevel - 1)));
    return `<tr><td>${level}</td><td>Player bullets chain shock up to ${targets} enemies.</td></tr>`;
  });
  const overchargeRows = [1, 5, 10, 15, 20].map((level) => (
    `<tr><td>${level}</td><td>+${formatDefenseNumber(getDefensePlayerOverchargeDamage(level))} flat damage on every player bullet.</td></tr>`
  ));
  const surgeRows = [1, 5, 10, 15, 20].map((level) => (
    `<tr><td>${level}</td><td>${formatDefenseNumber(getDefensePlayerSurgeDamage(level))} beam damage, ${getDefensePlayerSurgeRadius(level)} radius, ${formatDefenseNumber(getDefensePlayerSurgeCooldown(level))}s cooldown${level >= 10 ? ", bullets poison for at least 7% max HP/s" : ""}${level >= defenseSurgeMaxLevel ? ", knocks enemies back" : ""}.</td></tr>`
  ));
  card.innerHTML = `
    <strong>Player</strong>
    <span class="defense-demo-label">Custom look tiers for player ability progress</span>
    ${createDefensePlayerPreviewMarkup()}
    <span class="defense-demo-label">SURGE attack beam look</span>
    ${createDefenseSurgePreviewMarkup()}
    <div class="ability-handbook-grid">
      ${createDefenseAbilityTable("Base Player Upgrades", "These must be maxed before Revenge unless Demo Mode is on.", baseRows)}
      ${createDefenseAbilityTable("Revenge Looks", "Five armor/aura tiers as Revenge levels rise.", revengeRows)}
      ${createDefenseAbilityTable("Electro Looks", "Five lightning coil tiers as Electro Bullets levels rise.", electroRows)}
      ${createDefenseAbilityTable("Overcharge Looks", "Five glowing core and weapon tiers as Overcharge levels rise.", overchargeRows)}
      ${createDefenseAbilityTable("SURGE Attack", "Unlocks after Overcharge max. Shooting triggers a ground beam when ready. At level 20 it launches enemies back.", surgeRows)}
    </div>`;
  card.querySelectorAll("[data-player-preview-tier]").forEach((canvas) => {
    drawDefensePlayerHandbookPreview(canvas.getContext("2d"), Number(canvas.dataset.playerPreviewTier), canvas.width, canvas.height);
  });
  card.querySelectorAll("[data-surge-preview-level]").forEach((canvas) => {
    drawDefenseSurgeHandbookPreview(canvas.getContext("2d"), Number(canvas.dataset.surgePreviewLevel), canvas.width, canvas.height);
  });
  return card;
}

function createDefenseAbilityHandbookCard() {
  const card = document.createElement("div");
  card.className = "defense-handbook-card ability-handbook-card";
  const phoenixRows = Array.from({ length: defensePhoenixMaxLevel }, (_, index) => index + 1).map((level) => (
    `<tr><td>${level}</td><td>+${Math.round((getDefensePhoenixBaseMultiplier(level) - 1) * 100)}% base stats, ${getDefensePhoenixDuration(level)}s revive fight, +${Math.round((getDefensePhoenixDamageMultiplier({ phoenixActive: true, phoenixLevel: level }) - 1) * 100)}% active dmg, +${Math.round((getDefensePhoenixSpeedMultiplier({ phoenixActive: true, phoenixLevel: level }) - 1) * 100)}% active speed</td></tr>`
  ));
  const frostRows = [1, 8, 15].map((level) => (
    `<tr><td>${level}</td><td>${Math.round(getDefenseFrostSlow(level) * 100)}% slow for ${formatDefenseNumber(getDefenseFrostDuration(level))}s on hit</td></tr>`
  ));
  const buildingElectroRows = [1, 8, 15].map((level) => {
    const targets = Math.min(4, 1 + Math.floor((level - 1) * 3 / (defenseBuildingElectroMaxLevel - 1)));
    return `<tr><td>${level}</td><td>Chains to ${targets} nearby enem${targets === 1 ? "y" : "ies"} for 30% of defense damage</td></tr>`;
  });
  const revengeRows = [1, 5, 10].map((level) => (
    `<tr><td>${level}</td><td>+${Math.round(getDefenseRevengeDamageBonus(level) * 100)}% damage, +${Math.round(getDefenseRevengeSpeedBonus(level) * 100)}% attack speed, ${formatDefenseNumber(getDefenseRevengeRegen(level) * 100)}% HP/s, costs up to $${getDefenseRevengeCost(level)}</td></tr>`
  ));
  const electroRows = [1, 8, 15].map((level) => {
    const targets = Math.min(10, 2 + Math.floor((level - 1) * 8 / (defenseElectroMaxLevel - 1)));
    return `<tr><td>${level}</td><td>Player bullets shock up to ${targets} nearby enemies, $1200 each level</td></tr>`;
  });
  const overchargeRows = [1, 10, 20].map((level) => (
    `<tr><td>${level}</td><td>+${formatDefenseNumber(getDefensePlayerOverchargeDamage(level))} flat player bullet damage, max +10 at level 20</td></tr>`
  ));
  card.innerHTML = `
    <strong>Abilities</strong>
    <div class="ability-handbook-grid">
      ${createDefenseAbilityTable("Phoenix", "Max-level defense only. A defense can only choose one ability. Triggers once when the building would die.", phoenixRows, createDefensePhoenixPreviewMarkup())}
      ${createDefenseAbilityTable("Frost Shot", "Max-level defense only. A defense can only choose one ability. Every hit slows enemies.", frostRows, createDefenseFrostPreviewMarkup())}
      ${createDefenseAbilityTable("Defense Electro", "Max-level defense only. A defense can only choose one ability. Hits chain lightning into nearby enemies.", buildingElectroRows, createDefenseElectroPreviewMarkup())}
      ${createDefenseAbilityTable("Player Revenge", "Requires all player upgrades maxed. Gives steady damage, attack speed, and regen bonuses.", revengeRows)}
      ${createDefenseAbilityTable("Electro Bullets", "Requires Revenge level 10. Player bullets chain shock nearby enemies.", electroRows)}
      ${createDefenseAbilityTable("Overcharge Damage", "Requires Revenge and Electro maxed. Adds flat damage to every player bullet.", overchargeRows)}
    </div>`;
  card.querySelectorAll("[data-phoenix-preview-level]").forEach((canvas) => {
    drawDefensePhoenixHandbookPreview(canvas.getContext("2d"), Number(canvas.dataset.phoenixPreviewLevel), canvas.width, canvas.height);
  });
  card.querySelectorAll("[data-frost-preview-level]").forEach((canvas) => {
    drawDefenseFrostHandbookPreview(canvas.getContext("2d"), Number(canvas.dataset.frostPreviewLevel), canvas.width, canvas.height);
  });
  card.querySelectorAll("[data-electro-preview-level]").forEach((canvas) => {
    drawDefenseElectroHandbookPreview(canvas.getContext("2d"), Number(canvas.dataset.electroPreviewLevel), canvas.width, canvas.height);
  });
  return card;
}

function createDefenseAbilityTable(title, text, rows, extraMarkup = "") {
  return `<section><strong>${title}</strong><p>${text}</p>${extraMarkup}<table><thead><tr><th>Lv</th><th>Effect</th></tr></thead><tbody>${rows.join("")}</tbody></table></section>`;
}

function createDefenseEnemyHandbookCard() {
  const groups = [
    ["Summoners", ["summoner", "aircraftCarrier", "troopShooter", "troopCannon", "truck"]],
    ["Healers", ["healer"]],
    ["Low-Class Enemies", ["soldier", "speedSoldier", "zombie", "wallBreaker", "tank", "boostedTank", "catapult", "bomber", "electroTrooper"]],
    ["Air Troops", ["plane", "helicopter", "dragon", "dropper"]]
  ];
  const card = document.createElement("div");
  card.className = "defense-handbook-card ability-handbook-card";
  card.innerHTML = `
    <strong>Enemies</strong>
    ${groups.map(([title, types], index) => `
      <details class="defense-handbook-group" ${index === 0 ? "open" : ""}>
        <summary>${title}</summary>
        <div class="ability-handbook-grid">
          ${types.map((type) => createDefenseEnemyHandbookSection(type)).join("")}
        </div>
      </details>`).join("")}`;
  return card;
}

function createDefenseEnemyHandbookSection(type) {
  const early = getDefenseEnemyStats(type, 1);
  const mid = getDefenseEnemyStats(type, 10);
  const rows = [
    `<tr><td>Body</td><td>${isDefenseAirEnemy({ type }) ? "Air unit" : "Ground unit"}, radius ${early.radius}</td></tr>`,
    `<tr><td>Wave 1</td><td>${formatDefenseEnemyStatsLine(early)}</td></tr>`,
    `<tr><td>Wave 10</td><td>${formatDefenseEnemyStatsLine(mid)}</td></tr>`,
    `<tr><td>Reward</td><td>$${early.reward} base reward before your money bonus</td></tr>`
  ];
  if (early.bulletDamage) {
    rows.push(`<tr><td>Weapon</td><td>${formatDefenseNumber(early.bulletDamage)} ranged damage, ${early.range} range</td></tr>`);
  }
  if (early.spawnsOnDeath) {
    rows.push(`<tr><td>On Death</td><td>Spawns ${early.spawnsOnDeath} enemy soldiers</td></tr>`);
  }
  if (early.deathNote) {
    rows.push(`<tr><td>On Death</td><td>${early.deathNote}.</td></tr>`);
  }
  if (early.spreadShots) {
    rows.push(`<tr><td>Spread</td><td>Fires ${early.spreadShots} shots in a spread toward your defenses, ${early.range} range</td></tr>`);
  }
  if (early.launchesTroops) {
    rows.push(`<tr><td>Launcher</td><td>Launches live tanks and soldiers onto your defenses every 5s, ${early.range} range, ${early.impactDamage} impact damage</td></tr>`);
  }
  if (early.chainShot) {
    rows.push(`<tr><td>Chain</td><td>${early.chainNote}</td></tr>`);
  }
  if (early.revives) {
    rows.push(`<tr><td>Revive</td><td>Revives once with 60% of its original health.</td></tr>`);
  }
  if (early.healPerSecond) {
    rows.push(`<tr><td>Support</td><td>Heals ${formatDefenseNumber(early.healPerSecond)} HP per second nearby; healing scales each wave.</td></tr>`);
  }
  if (early.summonCount) {
    rows.push(`<tr><td>Summon</td><td>Summons ${early.summonCount} soldiers every ${early.summonInterval}s.</td></tr>`);
  }
  if (early.splashRadius) {
    rows.push(`<tr><td>Splash</td><td>${early.splashRadius} radius explosive attack.</td></tr>`);
  }
  if (early.blastRadius) {
    rows.push(`<tr><td>Blast</td><td>Explodes for soldier damage in a small radius; wall hits deal 1000% damage.</td></tr>`);
  }
  rows.push(`<tr><td>Growth</td><td>${formatDefenseEnemyGrowth(type)}</td></tr>`);
  return createDefenseAbilityTable(getDefenseEnemyName(type), getDefenseEnemyFlavor(type), rows);
}

function getDefenseEnemyName(type) {
  const names = {
    soldier: "Soldier",
    speedSoldier: "Speed Soldier",
    zombie: "Zombie Troop",
    wallBreaker: "Wall-Breaker",
    tank: "Enemy Tank",
    boostedTank: "Boosted Tank",
    aircraftCarrier: "Aircraft Carrier",
    healer: "Healer",
    bomber: "Bomber",
    catapult: "Catapult",
    summoner: "Summoner",
    plane: "Plane",
    helicopter: "Helicopter",
    truck: "Soldier Truck",
    dragon: "Dragon",
    dropper: "Flying Dropper",
    troopShooter: "Troop Shooter",
    troopCannon: "Troop Launcher",
    electroTrooper: "Electro Trooper"
  };
  return names[type] || formatDefenseName(type);
}

function getDefenseEnemyFlavor(type) {
  const lines = {
    soldier: "Fast basic ground troop with a rifle.",
    speedSoldier: "Faster soldier with 30% more health and harder crash damage.",
    zombie: "Greenish troop with boosted base stats that can revive once.",
    wallBreaker: "Quick explosive unit that shreds walls and bursts when destroyed.",
    tank: "Heavy ground bruiser with cannon fire.",
    boostedTank: "A faster, tougher tank with 40% stronger base stats.",
    aircraftCarrier: "A floating carrier that keeps dropping soldier reinforcements.",
    healer: "Support troop that keeps damaged enemies alive.",
    bomber: "Launches small bombers that splash defenses and friendly troops.",
    catapult: "Slow siege engine that throws fiery rocks deep into your layout.",
    summoner: "Tank-like caster that keeps calling new soldiers into the wave.",
    plane: "Fast air striker that dives past the line.",
    helicopter: "Mid-speed air gunship with ranged fire.",
    truck: "Slow transport that bursts into soldiers when destroyed.",
    dragon: "Thick flying threat with strong ranged pressure.",
    dropper: "Bulky carrier that crashes into five soldiers on death.",
    troopShooter: "Long-range gunner that fires a 3-shot spread at your defenses; spills its crew when destroyed.",
    troopCannon: "Launches live tanks and soldiers onto your defenses from 8 tiles away, with heavy 45 impact damage.",
    electroTrooper: "Fires electro bullets that chain between up to 5 defenses, walls included, for heavy damage each."
  };
  return lines[type] || "Enemy unit.";
}

function formatDefenseEnemyStatsLine(stats) {
  const parts = [
    `${Math.round(stats.maxHp)} HP`,
    `${formatDefenseNumber(stats.speed)} speed`,
    `${Math.round(stats.damage)} contact damage`
  ];
  if (stats.bulletDamage) {
    parts.push(`${Math.round(stats.bulletDamage)} bullet damage`);
  }
  return parts.join(", ");
}

function formatDefenseEnemyGrowth(type) {
  if (type === "healer") {
    return "Healing starts at 5 HP per second and grows by 2.5 HP per wave.";
  }
  if (type === "catapult") {
    return "Health tracks five enemy tanks, while the fire-rock damage scales with tank cannon damage.";
  }
  if (type === "boostedTank" || type === "zombie" || type === "speedSoldier") {
    return "Uses the base unit's wave scaling, then applies its stronger variant bonuses.";
  }
  if (type === "dragon" || type === "dropper") {
    return "Health is anchored to anti-air tuning, while damage keeps climbing with later waves.";
  }
  if (type === "aircraftCarrier") {
    return "Drops reinforcements while carrying tank-like durability in the air.";
  }
  if (type === "plane") {
    return "Fastest mover at a fixed speed, with moderate health scaling each wave.";
  }
  if (type === "tank" || type === "truck") {
    return "Heavy health growth and steady damage scaling each wave.";
  }
  return "Balanced health and damage scaling each wave; speed stays at its base value.";
}

function createDefenseFrostPreviewMarkup() {
  return `<div class="phoenix-handbook-preview">
    ${[1, 8, 15].map((level) => `<div class="phoenix-handbook-item frost-handbook-item"><canvas width="104" height="82" data-frost-preview-level="${level}"></canvas><span>Frost Lv ${level}</span></div>`).join("")}
  </div>`;
}

function createDefenseElectroPreviewMarkup() {
  return `<div class="phoenix-handbook-preview">
    ${[1, 8, 15].map((level) => `<div class="phoenix-handbook-item"><canvas width="104" height="82" data-electro-preview-level="${level}"></canvas><span>Electro Lv ${level}</span></div>`).join("")}
  </div>`;
}

function createDefensePhoenixPreviewMarkup() {
  return `<div class="phoenix-handbook-preview">
    ${[1, 8, 15].map((level) => `<div class="phoenix-handbook-item"><canvas width="104" height="82" data-phoenix-preview-level="${level}"></canvas><span>Phoenix Lv ${level}</span></div>`).join("")}
  </div>`;
}

function createDefensePlayerPreviewMarkup() {
  return `<div class="phoenix-handbook-preview">
    ${[1, 2, 3, 4, 5, 6].map((tier) => `<div class="phoenix-handbook-item"><canvas width="104" height="82" data-player-preview-tier="${tier}"></canvas><span>Look ${tier}</span></div>`).join("")}
  </div>`;
}

function createDefenseSurgePreviewMarkup() {
  return `<div class="phoenix-handbook-preview">
    ${[1, 5, 10, 15, 20].map((level) => `<div class="phoenix-handbook-item"><canvas width="104" height="82" data-surge-preview-level="${level}"></canvas><span>SURGE Lv ${level}</span></div>`).join("")}
  </div>`;
}

function drawDefensePhoenixHandbookPreview(ctx, level, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 17, width, 17);
  const x = width / 2;
  const y = height - 34;
  const progress = level / defensePhoenixMaxLevel;
  const wingSpan = 26 + progress * 13;
  const wingLift = 17 + progress * 8;

  ctx.save();
  ctx.shadowColor = "#ff7a22";
  ctx.shadowBlur = 9 + progress * 8;
  ctx.fillStyle = "#ff8a2d";
  ctx.strokeStyle = "#8d4b1f";
  ctx.lineWidth = 2;
  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(x + side * 9, y - 12);
    ctx.quadraticCurveTo(x + side * wingSpan, y - wingLift, x + side * (wingSpan + 10), y - 4);
    ctx.quadraticCurveTo(x + side * (wingSpan - 2), y - 3, x + side * 18, y + 9);
    ctx.quadraticCurveTo(x + side * 13, y + 1, x + side * 9, y - 12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });
  ctx.restore();

  ctx.fillStyle = "rgba(23, 33, 28, 0.24)";
  ctx.beginPath();
  ctx.ellipse(x, height - 17, 27, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#31431b";
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.fillRect(x + 4, y - 4, 28, 8);

  const barWidth = 38;
  const barY = y - 42;
  ctx.shadowColor = "#ff7a22";
  ctx.shadowBlur = 6;
  ctx.fillStyle = "#4e2c1b";
  ctx.fillRect(x - barWidth / 2, barY, barWidth, 8);
  ctx.fillStyle = getDefensePhoenixRankColor(level);
  ctx.fillRect(x - barWidth / 2 + 2, barY + 2, Math.max(4, (barWidth - 4) * progress), 4);
  ctx.strokeStyle = "#ffd684";
  ctx.lineWidth = 2;
  ctx.strokeRect(x - barWidth / 2, barY, barWidth, 8);
  ctx.fillStyle = "#fff1c8";
  ctx.font = "700 8px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`P${level}`, x, barY - 2);
  if (level >= defensePhoenixMaxLevel) {
    drawDefenseHandbookAbilityStars(ctx, x, height - 7, "#ffb347", "#8d4b1f", "#ff7a22");
  }
}

function drawDefenseFrostHandbookPreview(ctx, level, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 17, width, 17);
  const x = width / 2;
  const y = height - 34;
  const progress = level / defenseFrostMaxLevel;
  ctx.fillStyle = "rgba(23, 33, 28, 0.24)";
  ctx.beginPath();
  ctx.ellipse(x, height - 17, 27, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowColor = "#9ad7ff";
  ctx.shadowBlur = 8 + progress * 10;
  ctx.fillStyle = "#31431b";
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.fillRect(x + 4, y - 4, 28, 8);
  ctx.strokeStyle = `rgba(154, 215, 255, ${0.56 + progress * 0.28})`;
  ctx.fillStyle = `rgba(215, 241, 255, ${0.1 + progress * 0.08})`;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 25 + progress * 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#d7f1ff";
  [-1, 1].forEach((side) => {
    [0, 1, 2].forEach((index) => {
      const px = x + side * (21 + index * 7);
      const py = y - 16 + index * 13;
      ctx.beginPath();
      ctx.moveTo(px, py - 6);
      ctx.lineTo(px + side * 5, py);
      ctx.lineTo(px, py + 6);
      ctx.lineTo(px - side * 4, py);
      ctx.closePath();
      ctx.fill();
    });
  });
  ctx.strokeStyle = "#d7f1ff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 38, y - 16);
  ctx.lineTo(width - 14, y - 24);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(width - 13, y - 24, 7, 0, Math.PI * 2);
  ctx.stroke();
  if (level >= defenseFrostMaxLevel) {
    drawDefenseHandbookAbilityStars(ctx, x, height - 7, "#d7f1ff", "#328fbd", "#9ad7ff");
  }
}

function drawDefenseElectroHandbookPreview(ctx, level, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 17, width, 17);
  const x = width / 2;
  const y = height - 34;
  const progress = level / defenseBuildingElectroMaxLevel;
  ctx.fillStyle = "rgba(23, 33, 28, 0.24)";
  ctx.beginPath();
  ctx.ellipse(x, height - 17, 27, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowColor = "#ffe36e";
  ctx.shadowBlur = 9 + progress * 12;
  ctx.strokeStyle = `rgba(255, 227, 110, ${0.52 + progress * 0.32})`;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 26 + progress * 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#31431b";
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.fillRect(x + 4, y - 4, 28, 8);
  ctx.fillStyle = "rgba(38, 36, 22, 0.88)";
  ctx.strokeStyle = "#fff4a6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(x - 12, y - 29, 24, 20, 5);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#ffe36e";
  ctx.beginPath();
  ctx.moveTo(x - 2, y - 26);
  ctx.lineTo(x + 8, y - 26);
  ctx.lineTo(x + 2, y - 18);
  ctx.lineTo(x + 9, y - 18);
  ctx.lineTo(x - 5, y - 7);
  ctx.lineTo(x - 1, y - 16);
  ctx.lineTo(x - 8, y - 16);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 244, 166, 0.92)";
  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(x + side * 22, y - 18);
    ctx.lineTo(x + side * (34 + progress * 6), y - 25);
    ctx.lineTo(x + side * (42 + progress * 5), y - 10);
    ctx.stroke();
  });
  ctx.beginPath();
  ctx.moveTo(x + 38, y - 16);
  ctx.lineTo(width - 15, y - 24);
  ctx.lineTo(width - 23, y - 18);
  ctx.lineTo(width - 11, y - 15);
  ctx.stroke();
  if (level >= defenseBuildingElectroMaxLevel) {
    drawDefenseHandbookAbilityStars(ctx, x, height - 7, "#fff4a6", "#a78100", "#ffe36e");
  }
}

function drawDefenseHandbookAbilityStars(ctx, x, y, fill, stroke, glow) {
  ctx.save();
  ctx.shadowColor = glow;
  ctx.shadowBlur = 8;
  ctx.fillStyle = "rgba(23, 33, 28, 0.7)";
  ctx.beginPath();
  ctx.roundRect(x - 24, y - 10, 48, 14, 6);
  ctx.fill();
  [-14, 0, 14].forEach((offset) => {
    drawDefenseStar(ctx, x + offset, y - 3, 5, fill, stroke);
  });
  ctx.restore();
}

function drawDefensePlayerHandbookPreview(ctx, tier, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 17, width, 17);
  const x = width / 2;
  const y = height - 33;
  const angle = -0.18;

  ctx.fillStyle = "rgba(23, 33, 28, 0.24)";
  ctx.beginPath();
  ctx.ellipse(x, height - 17, 26, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.shadowColor = "#ff5f7e";
  ctx.shadowBlur = 4 + tier * 2;
  ctx.strokeStyle = `rgba(255, 95, 126, ${0.18 + tier * 0.08})`;
  ctx.lineWidth = 2 + tier * 0.4;
  ctx.beginPath();
  ctx.arc(x, y, 15 + tier * 2, 0, Math.PI * 2);
  ctx.stroke();

  ctx.shadowColor = "#9ad7ff";
  ctx.shadowBlur = 6 + tier * 2;
  ctx.strokeStyle = tier >= 5 ? "#fff4a6" : "#9ad7ff";
  ctx.lineWidth = 2;
  for (let i = 0; i < tier; i += 1) {
    const boltAngle = angle + Math.PI * 0.65 + i * ((Math.PI * 2) / tier);
    const inner = 17;
    const outer = 22 + tier * 2;
    ctx.beginPath();
    ctx.moveTo(x + Math.cos(boltAngle) * inner, y + Math.sin(boltAngle) * inner);
    ctx.lineTo(x + Math.cos(boltAngle + 0.16) * outer, y + Math.sin(boltAngle + 0.16) * outer);
    ctx.lineTo(x + Math.cos(boltAngle - 0.08) * (outer - 6), y + Math.sin(boltAngle - 0.08) * (outer - 6));
    ctx.stroke();
  }

  ctx.shadowColor = "#f7d36b";
  ctx.shadowBlur = 7 + tier * 3;
  ctx.fillStyle = `rgba(247, 211, 107, ${0.12 + tier * 0.04})`;
  ctx.beginPath();
  ctx.arc(x, y, 18 + tier * 3, 0, Math.PI * 2);
  ctx.fill();
  if (tier >= 6) {
    ctx.shadowColor = "#b8f26b";
    ctx.shadowBlur = 22;
    ctx.strokeStyle = "rgba(184, 242, 107, 0.82)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, 43, -Math.PI * 0.1, Math.PI * 1.1);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 244, 166, 0.82)";
    ctx.beginPath();
    ctx.arc(x, y, 48, Math.PI * 0.2, Math.PI * 1.82);
    ctx.stroke();
  }
  ctx.restore();

  const bodyColor = tier >= 6 ? "#3f8f55" : tier >= 5 ? "#5f4cb5" : tier >= 4 ? "#287bb8" : tier >= 3 ? "#8a3856" : "#2367a6";
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = tier >= 5 ? "#ffd684" : "#d24f6f";
  ctx.strokeStyle = "#5f2237";
  ctx.lineWidth = 2;
  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.arc(x + side * (8 + tier), y - 2, 4 + tier * 0.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  if (tier >= 3) {
    ctx.fillRect(x - 8, y + 8, 16, 3 + tier);
  }
  if (tier >= 6) {
    ctx.fillStyle = "#b8f26b";
    ctx.fillRect(x - 10, y + 10, 20, 4);
    ctx.fillRect(x - 3, y + 13, 6, 15);
    ctx.fillStyle = "rgba(255, 244, 166, 0.78)";
    [0, Math.PI * 0.66, Math.PI * 1.33].forEach((offset) => {
      ctx.beginPath();
      ctx.arc(x + Math.cos(offset) * 31, y + Math.sin(offset) * 31, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  ctx.strokeStyle = "#17211c";
  ctx.lineWidth = tier >= 3 ? 6 : 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + Math.cos(angle) * 24, y + Math.sin(angle) * 24);
  ctx.stroke();

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.fillStyle = "#7a233b";
  ctx.fillRect(8, -8, 8 + tier * 2, 4);
  ctx.strokeStyle = tier >= 5 ? "#fff4a6" : "#9ad7ff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(9, 7);
  ctx.lineTo(15 + tier * 2, 10);
  ctx.lineTo(20 + tier * 2, 5);
  ctx.stroke();
  ctx.shadowColor = "#f7d36b";
  ctx.shadowBlur = 9 + tier * 3;
  ctx.fillStyle = tier >= 5 ? "#fff4a6" : "#f7d36b";
  ctx.fillRect(19, -3, 6 + tier * 2, 6);
  if (tier >= 6) {
    ctx.shadowColor = "#b8f26b";
    ctx.shadowBlur = 14;
    ctx.fillStyle = "#b8f26b";
    ctx.fillRect(14, 5, 22, 4);
  }
  ctx.restore();

  ctx.fillStyle = tier >= 5 ? "#fff4a6" : "#c9b6ff";
  ctx.beginPath();
  ctx.arc(x, y, 3 + tier * 0.7, 0, Math.PI * 2);
  ctx.fill();
}

function drawDefenseSurgeHandbookPreview(ctx, level, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 17, width, 17);
  const x = width / 2;
  const playerY = height - 31;
  const progress = level / defenseSurgeMaxLevel;
  const maxed = level >= defenseSurgeMaxLevel;
  const radius = 18 + progress * 26;
  const beamHeight = 36 + progress * 34;
  const beamWidth = 7 + progress * 11;

  ctx.save();
  ctx.shadowColor = maxed ? "#b8f26b" : "#9ad7ff";
  ctx.shadowBlur = maxed ? 18 : 10 + progress * 8;
  ctx.fillStyle = maxed ? `rgba(184, 242, 107, ${0.12 + progress * 0.14})` : `rgba(154, 215, 255, ${0.1 + progress * 0.12})`;
  ctx.beginPath();
  ctx.ellipse(x, height - 17, radius, radius * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
  const gradient = ctx.createLinearGradient(x, height - 17, x, height - 17 - beamHeight);
  gradient.addColorStop(0, maxed ? "rgba(184, 242, 107, 0.78)" : "rgba(154, 215, 255, 0.66)");
  gradient.addColorStop(0.55, "rgba(255, 244, 166, 0.42)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(x - beamWidth, height - 17);
  ctx.lineTo(x - beamWidth * 0.35, height - 17 - beamHeight);
  ctx.lineTo(x + beamWidth * 0.35, height - 17 - beamHeight);
  ctx.lineTo(x + beamWidth, height - 17);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = maxed ? "rgba(184, 242, 107, 0.88)" : "rgba(154, 215, 255, 0.78)";
  ctx.lineWidth = maxed ? 4 : 3;
  ctx.beginPath();
  ctx.arc(x, height - 23, radius * 0.54, 0, Math.PI * 2);
  ctx.stroke();
  if (maxed) {
    ctx.strokeStyle = "#fff4a6";
    [-1, 1].forEach((side) => {
      ctx.beginPath();
      ctx.moveTo(x + side * 10, height - 39);
      ctx.lineTo(x + side * 26, height - 53);
      ctx.lineTo(x + side * 19, height - 36);
      ctx.stroke();
    });
  }
  ctx.restore();

  ctx.fillStyle = "#2367a6";
  ctx.beginPath();
  ctx.arc(x - 26, playerY, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211c";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x - 26, playerY);
  ctx.lineTo(x - 6, playerY - 4);
  ctx.stroke();
  ctx.strokeStyle = maxed ? "#b8f26b" : "#8ff0c8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x - 26, playerY, 15 + progress * 8, -Math.PI * 0.1, Math.PI * 1.1);
  ctx.stroke();
}

function createDefenseLookPreview(type) {
  const preview = document.createElement("div");
  preview.className = "defense-look-preview";
  [1, 8, 12].forEach((level) => {
    const item = document.createElement("div");
    item.className = "defense-look-item";
    const label = document.createElement("span");
    label.textContent = `Lv ${level}`;
    const canvas = document.createElement("canvas");
    canvas.width = 92;
    canvas.height = 76;
    drawDefenseHandbookPreview(canvas.getContext("2d"), type, level, canvas.width, canvas.height);
    item.appendChild(canvas);
    item.appendChild(label);
    preview.appendChild(item);
  });
  return preview;
}

function drawDefenseHandbookPreview(ctx, type, level, width, height) {
  const sample = createDefenseSampleAtLevel(type, level);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#d7cfbd";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#96a77b";
  ctx.fillRect(0, height - 18, width, 18);
  const x = width / 2;
  const y = height - 34;
  const color = getDefensePreviewColor(type, level);

  ctx.fillStyle = "rgba(23, 33, 28, 0.24)";
  ctx.beginPath();
  ctx.ellipse(x, height - 18, type === "wall" ? 22 : type === "spell" || type === "freezeSpell" ? 18 : 30, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  if (type === "wall") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 16, y - 28, 32, 56);
  } else if (type === "trap") {
    ctx.fillStyle = "#6b2424";
    ctx.beginPath();
    ctx.arc(x, y + 8, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f7d36b";
    ctx.fillRect(x - 3, y - 10, 6, 9);
  } else if (type === "camp" || type === "tankCamp" || type === "airfield" || type === "troopLauncher" || type === "builder") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 26, y - 22, 52, 44);
    ctx.fillStyle = "#ece6d6";
    ctx.fillRect(x - 12, y - 35, 24, 15);
    if (type === "builder") {
      ctx.fillStyle = "#8ff0c8";
      ctx.fillRect(x - 18, y + 5, 36, 8);
      ctx.fillRect(x - 4, y - 9, 8, 36);
    }
    if (type === "tankCamp") {
      ctx.fillStyle = "#303945";
      ctx.fillRect(x - 17, y + 5, 34, 10);
    }
    if (type === "airfield") {
      ctx.fillStyle = "#d7f1ff";
      ctx.beginPath();
      ctx.moveTo(x + 19, y + 2);
      ctx.lineTo(x - 15, y - 8);
      ctx.lineTo(x - 8, y + 2);
      ctx.lineTo(x - 15, y + 12);
      ctx.closePath();
      ctx.fill();
    }
    if (type === "troopLauncher") {
      ctx.fillStyle = "#2f3942";
      ctx.fillRect(x - 5, y - 44, 10, 36);
      ctx.fillStyle = "#f2b84b";
      ctx.beginPath();
      ctx.arc(x - 4, y - 51, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#f2b84b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - 2, y - 49);
      ctx.quadraticCurveTo(x - 34, y - 70, x - 44, y - 28);
      ctx.stroke();
    }
  } else if (type === "infernoSingle" || type === "infernoMulti") {
    drawDefensePreviewInferno(ctx, x, y, color, type === "infernoMulti");
  } else if (type === "freezeSpell") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 23, y - 25, 46, 50);
    ctx.fillStyle = "#2e668a";
    ctx.beginPath();
    ctx.arc(x, y - 3, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#d7f1ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y - 3, 22, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#17211c";
    ctx.fillRect(x + 4, y - 8, 34, 12);
    ctx.fillStyle = "#b8f26b";
    ctx.beginPath();
    ctx.arc(x + 36, y - 2, 7, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "spell") {
    drawDefensePreviewSpell(ctx, x, y, color);
  } else if (type === "missile" || type === "rapidMissile") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 24, y - 32, 48, 60);
    ctx.fillStyle = "#17211c";
    ctx.fillRect(x - 5, y - 36, 10, 34);
    ctx.fillStyle = type === "rapidMissile" ? "#9ad7ff" : "#f2b84b";
    ctx.fillRect(x - 11, y - 47, 8, 28);
    ctx.fillRect(x + 3, y - 47, 8, 28);
  } else if (type === "eagle") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 26, y + 14, 52, 12);
    ctx.fillStyle = "#d7f1ff";
    ctx.beginPath();
    ctx.moveTo(x, y - 35);
    ctx.lineTo(x + 34, y - 5);
    ctx.lineTo(x + 8, y - 10);
    ctx.lineTo(x, y + 10);
    ctx.lineTo(x - 8, y - 10);
    ctx.lineTo(x - 34, y - 5);
    ctx.closePath();
    ctx.fill();
  } else if (type === "infernoArtillery") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 26, y - 32, 52, 60);
    ctx.fillStyle = "#311713";
    ctx.fillRect(x - 17, y - 23, 34, 41);
    ctx.fillStyle = "#ff7a22";
    ctx.fillRect(x - 24, y - 42, 48, 13);
    ctx.strokeStyle = "#ffd15c";
    ctx.lineWidth = 3;
    [-16, -5, 6, 17].forEach((offset) => {
      ctx.beginPath();
      ctx.moveTo(x + offset, y - 36);
      ctx.lineTo(x + offset * 0.55, y - 61);
      ctx.stroke();
    });
  } else if (type === "monolith") {
    ctx.fillStyle = color;
    ctx.fillRect(x - 21, y - 52, 42, 80);
    ctx.fillStyle = "#15101f";
    ctx.fillRect(x - 12, y + 7, 24, 21);
    ctx.fillStyle = "#8c5bd6";
    ctx.beginPath();
    ctx.arc(x, y - 44, 11, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, type === "cannon" || type === "ricochet" || type === "mortar" || type === "multiMortar" ? 18 : 15, 0, Math.PI * 2);
    ctx.fill();
    if (type === "minigun") {
      ctx.fillStyle = "#17211c";
      ctx.fillRect(x + 4, y - 4, 34, 8);
      ctx.fillStyle = "#9aa2aa";
      ctx.fillRect(x + 8, y - 8, 26, 3);
      ctx.fillRect(x + 8, y - 1, 26, 3);
      ctx.fillRect(x + 8, y + 6, 26, 3);
    } else {
      ctx.fillStyle = "#17211c";
      ctx.fillRect(x + 4, y - 4, 28, 8);
    }
    if (type === "airbomb") {
      ctx.fillStyle = "#f2b84b";
      ctx.beginPath();
      ctx.arc(x, y - 20, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#d7f1ff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x - 13, y - 14);
      ctx.lineTo(x, y - 28);
      ctx.lineTo(x + 13, y - 14);
      ctx.stroke();
    }
    if (type === "antiAir") {
      ctx.strokeStyle = "#d7f1ff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x - 13, y - 14);
      ctx.lineTo(x, y - 28);
      ctx.lineTo(x + 13, y - 14);
      ctx.stroke();
    }
    if (type === "multiMortar") {
      ctx.fillStyle = "#c2b9d2";
      [-6, 0, 6].forEach((offset) => {
        ctx.beginPath();
        ctx.arc(x + 30, y + offset, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    if (type === "ricochet") {
      ctx.strokeStyle = "#9ad7ff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x + 11, y - 12);
      ctx.lineTo(x + 28, y);
      ctx.lineTo(x + 11, y + 12);
      ctx.stroke();
    }
  }

  drawDefensePreviewTrim(ctx, x, y, level, type);
  drawDefensePreviewAction(ctx, type, x, y, width, height);
}

function getDefensePreviewColor(type, level) {
  const upgraded = level > 0;
  const colors = {
    wall: upgraded ? "#4d4641" : "#74675d",
    turret: upgraded ? "#31431b" : "#536b2d",
    cannon: upgraded ? "#303945" : "#4f5b68",
    ricochet: upgraded ? "#35545d" : "#4b7880",
    antiAir: upgraded ? "#223f59" : "#365d7a",
    airbomb: upgraded ? "#17485a" : "#225f74",
    camp: upgraded ? "#5e4428" : "#8b6f47",
    tankCamp: upgraded ? "#4d432e" : "#6c6044",
    airfield: upgraded ? "#344e63" : "#5a7185",
    builder: upgraded ? "#356556" : "#4b8b75",
    infernoSingle: upgraded ? "#5d2619" : "#803d24",
    infernoMulti: upgraded ? "#5d2619" : "#803d24",
    spell: upgraded ? "#45276f" : "#5c3f94",
    grenade: "#6f5d2f",
    minigun: "#3b3f47",
    mortar: upgraded ? "#3f3650" : "#594f67",
    multiMortar: upgraded ? "#3f3650" : "#594f67",
    freezeSpell: upgraded ? "#3f7f96" : "#5c9fbd",
    missile: upgraded ? "#4e2026" : "#6b2f35",
    rapidMissile: upgraded ? "#262b58" : "#3b426f",
    eagle: "#2f6f3d",
    infernoArtillery: upgraded ? "#7d2b20" : "#a33d26",
    monolith: "#36264d",
    trap: "#6b2424"
  };
  return colors[type] || "#536b2d";
}

function drawDefensePreviewInferno(ctx, x, y, color, multi) {
  ctx.fillStyle = color;
  ctx.fillRect(x - (multi ? 24 : 17), y - (multi ? 34 : 42), multi ? 48 : 34, multi ? 64 : 76);
  ctx.fillStyle = multi ? "#ffd15c" : "#ff8a3d";
  if (multi) {
    [-16, 0, 16].forEach((offset) => {
      ctx.beginPath();
      ctx.arc(x + offset, y - 42, 7, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillRect(x - 28, y - 8, 56, 7);
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y - 60);
    ctx.lineTo(x + 16, y - 25);
    ctx.lineTo(x + 4, y - 31);
    ctx.lineTo(x, y - 8);
    ctx.lineTo(x - 4, y - 31);
    ctx.lineTo(x - 16, y - 25);
    ctx.closePath();
    ctx.fill();
  }
}

function drawDefensePreviewSpell(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#d6b6ff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 19, 0, Math.PI * 2);
  ctx.stroke();
}

function drawDefensePreviewTrim(ctx, x, y, level, type) {
  if (level < 8 || type === "trap") {
    return;
  }
  const master = level >= getDefenseUpgradeMaxLevel(type);
  const radius = type === "wall" ? 27 : type === "infernoSingle" || type === "infernoMulti" || type === "missile" || type === "rapidMissile" || type === "monolith" || type === "eagle" || type === "camp" || type === "tankCamp" || type === "airfield" || type === "troopLauncher" || type === "builder" ? 34 : 24;
  const topY = type === "infernoSingle" ? y - 66 : type === "infernoMulti" ? y - 49 : y - 32;
  ctx.save();
  ctx.strokeStyle = master ? "#f7d36b" : "#9ad7ff";
  ctx.fillStyle = master ? "#f7d36b" : "#9ad7ff";
  ctx.lineWidth = master ? 4 : 3;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
  const gems = master ? 5 : 3;
  for (let i = 0; i < gems; i += 1) {
    const offset = (i - (gems - 1) / 2) * 12;
    ctx.beginPath();
    ctx.moveTo(x + offset, topY - 6);
    ctx.lineTo(x + offset + 5, topY);
    ctx.lineTo(x + offset, topY + 6);
    ctx.lineTo(x + offset - 5, topY);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawDefensePreviewAction(ctx, type, x, y, width, height) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const level = defenseUpgradeLevels[type] || 0;
  if (type === "ricochet") {
    ctx.strokeStyle = "#9ad7ff";
    ctx.lineWidth = 3;
    const points = [[x + 24, y - 12], [width - 24, y - 28], [width - 18, y + 4], [width - 38, y + 18]];
    ctx.beginPath();
    ctx.moveTo(x + 16, y);
    points.forEach(([px, py]) => ctx.lineTo(px, py));
    ctx.stroke();
    ctx.fillStyle = "#e8fbff";
    points.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  } else if (type === "turret" || type === "minigun" || type === "cannon" || type === "antiAir" || type === "airbomb") {
    ctx.strokeStyle = type === "antiAir" || type === "airbomb" ? "#d7f1ff" : "#f7d36b";
    ctx.lineWidth = type === "minigun" ? 4 : 3;
    ctx.beginPath();
    ctx.moveTo(x + 18, y - 4);
    ctx.lineTo(width - 16, y - 22);
    ctx.stroke();
    ctx.fillStyle = "#ffef9a";
    ctx.beginPath();
    ctx.arc(width - 15, y - 22, 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "airbomb") {
    ctx.strokeStyle = "#f2b84b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.quadraticCurveTo(x + 20, 6, width - 18, 22);
    ctx.stroke();
    ctx.fillStyle = "rgba(242, 184, 75, 0.32)";
    ctx.beginPath();
    ctx.arc(width - 18, 22, 13, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "freezeSpell") {
    ctx.strokeStyle = "#9ad7ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + 20, y - 6);
    ctx.quadraticCurveTo(x + 26, 4, width - 18, y - 16);
    ctx.stroke();
    ctx.fillStyle = "rgba(154, 215, 255, 0.28)";
    ctx.beginPath();
    ctx.arc(width - 20, y - 16, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(184, 242, 107, 0.28)";
    ctx.beginPath();
    ctx.arc(width - 35, y + 7, 13, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "grenade" || type === "mortar" || type === "multiMortar") {
    ctx.strokeStyle = "#f2b84b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + 20, y - 6);
    ctx.quadraticCurveTo(x + 28, 6, width - 18, y - 14);
    ctx.stroke();
    ctx.fillStyle = "rgba(216, 59, 59, 0.36)";
    ctx.beginPath();
    ctx.arc(width - 18, y - 14, type === "grenade" ? 14 : 11, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "missile" || type === "rapidMissile") {
    ctx.strokeStyle = type === "rapidMissile" ? "#9ad7ff" : "#f2b84b";
    ctx.lineWidth = 3;
    const lanes = type === "rapidMissile" ? [-9, 0, 9] : [0];
    lanes.forEach((offset) => {
      ctx.beginPath();
      ctx.moveTo(x + offset, y - 47);
      ctx.quadraticCurveTo(x + offset + 4, 12, width - 18 + offset / 2, 18);
      ctx.stroke();
    });
  } else if (type === "infernoSingle") {
    ctx.strokeStyle = "rgba(255, 128, 45, 0.9)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x, y - 52);
    ctx.lineTo(width - 16, 24);
    ctx.stroke();
  } else if (type === "infernoMulti") {
    ctx.strokeStyle = "rgba(255, 190, 75, 0.72)";
    ctx.lineWidth = 3;
    [18, 32, 46].forEach((targetY) => {
      ctx.beginPath();
      ctx.moveTo(x, y - 34);
      ctx.lineTo(width - 15, targetY);
      ctx.stroke();
    });
  } else if (type === "infernoArtillery") {
    ctx.strokeStyle = "rgba(255, 122, 34, 0.88)";
    ctx.lineWidth = 3;
    const beams = getDefenseInfernoArtilleryShotCount(level);
    Array.from({ length: beams }, (_, index) => 18 + index * 13).forEach((targetY) => {
      ctx.beginPath();
      ctx.moveTo(x, 4);
      ctx.quadraticCurveTo(x + 6, 22, width - 18, targetY);
      ctx.stroke();
    });
    ctx.fillStyle = "rgba(255, 92, 34, 0.32)";
    ctx.beginPath();
    ctx.ellipse(width - 22, height - 19, 22, 7, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "spell") {
    ctx.strokeStyle = "rgba(180, 132, 255, 0.72)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, 31, 0, Math.PI * 2);
    ctx.stroke();
  } else if (type === "builder") {
    ctx.strokeStyle = "#ffd84d";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width - 27, y, 15, 0, Math.PI * 2);
    ctx.stroke();
  } else if (type === "eagle") {
    ctx.strokeStyle = "#b8f26b";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width - 30, 8);
    ctx.lineTo(width - 30, y + 6);
    ctx.stroke();
    ctx.fillStyle = "rgba(80, 220, 100, 0.32)";
    ctx.beginPath();
    ctx.arc(width - 30, y + 6, 16, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "monolith") {
    ctx.strokeStyle = "#8c5bd6";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y - 44);
    ctx.lineTo(width - 18, y - 20);
    ctx.stroke();
    ctx.fillStyle = "#2a123f";
    ctx.beginPath();
    ctx.arc(width - 18, y - 20, 7, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "trap") {
    ctx.fillStyle = "rgba(216, 59, 59, 0.32)";
    ctx.beginPath();
    ctx.arc(x, y + 8, 24, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function createDefenseSampleAtLevel(type, level) {
  const savedUpgrades = defenseUpgrades;
  const savedLevels = defenseUpgradeLevels;
  defenseUpgrades = createBlankDefenseUpgrades();
  defenseUpgradeLevels = { ...createBlankDefenseUpgradeLevels(), [type]: level };
  applyDefenseUpgradePreview(type, level);
  const sample = createDefenseBuilding(type, defensePresident.x, defenseGroundY - 24);
  defenseUpgrades = savedUpgrades;
  defenseUpgradeLevels = savedLevels;
  return sample;
}

function createBlankDefenseUpgrades() {
  return {
    wallHpBonus: 0,
    turretDamageBonus: 0,
    turretRangeBonus: 0,
    cannonDamageBonus: 0,
    cannonRangeBonus: 0,
    ricochetDamageBonus: 0,
    ricochetRangeBonus: 0,
    antiAirDamageBonus: 0,
    antiAirRangeBonus: 0,
    airbombDamageBonus: 0,
    airbombRangeBonus: 0,
    grenadeDamageBonus: 0,
    grenadeRangeBonus: 0,
    minigunDamageBonus: 0,
    minigunRangeBonus: 0,
    mortarDamageBonus: 0,
    mortarRangeBonus: 0,
    multiMortarDamageBonus: 0,
    multiMortarRangeBonus: 0,
    missileDamageBonus: 0,
    missileRangeBonus: 0,
    rapidMissileDamageBonus: 0,
    rapidMissileRangeBonus: 0,
    eagleDamageBonus: 0,
    eagleMinHealthBonus: 0,
    eagleRadiusBonus: 0,
    infernoArtilleryDamageBonus: 0,
    infernoArtilleryRangeBonus: 0,
    monolithPercentBonus: 0,
    monolithRangeBonus: 0,
    trapDamageBonus: 0,
    trapRadiusBonus: 0,
    campHpBonus: 0,
    campTraining: 0,
    tankCampTraining: 0,
    airfieldTraining: 0,
    builderRepairBonus: 0,
    builderRangeBonus: 0
  };
}

function createBlankDefenseUpgradeLevels() {
  return Object.fromEntries(getDefenseStatTypes().map((type) => [type, 0]));
}

function applyDefenseUpgradePreview(type, level) {
  if (type === "turret") {
    defenseUpgrades.turretDamageBonus = level;
    defenseUpgrades.turretRangeBonus = level * 16;
  }
  if (type === "cannon") {
    defenseUpgrades.cannonDamageBonus = level * 2;
    defenseUpgrades.cannonRangeBonus = level * 18;
  }
  if (type === "ricochet") {
    defenseUpgrades.ricochetDamageBonus = getDefenseRicochetDamage(level) - 20;
    defenseUpgrades.ricochetRangeBonus = level * 12;
  }
  if (type === "antiAir") {
    defenseUpgrades.antiAirDamageBonus = level;
    defenseUpgrades.antiAirRangeBonus = level * 22;
  }
  if (type === "airbomb") {
    defenseUpgrades.airbombDamageBonus = level;
    defenseUpgrades.airbombRangeBonus = level * 18;
  }
  if (type === "grenade") {
    defenseUpgrades.grenadeDamageBonus = level * 0.8;
    defenseUpgrades.grenadeRangeBonus = level * 16;
  }
  if (type === "minigun") {
    defenseUpgrades.minigunDamageBonus = level * 0.4;
    defenseUpgrades.minigunRangeBonus = level * 14;
  }
  if (type === "mortar") {
    defenseUpgrades.mortarDamageBonus = level * 1.6;
    defenseUpgrades.mortarRangeBonus = level * 20;
  }
  if (type === "multiMortar") {
    defenseUpgrades.multiMortarDamageBonus = level * 0.8;
    defenseUpgrades.multiMortarRangeBonus = level * 25;
  }
  if (type === "missile") {
    const statLevel = getDefenseLateStatLevel(level);
    defenseUpgrades.missileDamageBonus = statLevel * 4;
    defenseUpgrades.missileRangeBonus = statLevel * 22;
  }
  if (type === "rapidMissile") {
    const statLevel = getDefenseLateStatLevel(level);
    defenseUpgrades.rapidMissileDamageBonus = statLevel * 0.6;
    defenseUpgrades.rapidMissileRangeBonus = statLevel * 18;
  }
  if (type === "monolith") {
    const statLevel = getDefenseLateStatLevel(level);
    defenseUpgrades.monolithPercentBonus = getDefenseMonolithPercentDamage(level) - 0.14;
    defenseUpgrades.monolithRangeBonus = statLevel * 28;
  }
  if (type === "eagle") {
    const statLevel = getDefenseLateStatLevel(level);
    defenseUpgrades.eagleDamageBonus = statLevel * 6;
    defenseUpgrades.eagleMinHealthBonus = statLevel * 0.03;
    defenseUpgrades.eagleRadiusBonus = Math.min(defenseEagleMaxSplashRadius - Math.round(105 * 1.3), statLevel * 12);
  }
  if (type === "infernoArtillery") {
    const statLevel = getDefenseLateStatLevel(level);
    defenseUpgrades.infernoArtilleryDamageBonus = statLevel * 0.6;
    defenseUpgrades.infernoArtilleryRangeBonus = statLevel * 8;
  }
  if (type === "trap") {
    defenseUpgrades.trapDamageBonus = level * 3;
    defenseUpgrades.trapRadiusBonus = level * 10;
  }
  if (type === "camp") {
    defenseUpgrades.campTraining = level;
    defenseUpgrades.campHpBonus = level * 14;
  }
  if (type === "tankCamp") {
    defenseUpgrades.tankCampTraining = level;
  }
  if (type === "airfield") {
    defenseUpgrades.airfieldTraining = level;
  }
  if (type === "builder") {
    defenseUpgrades.builderRepairBonus = level * 8;
    defenseUpgrades.builderRangeBonus = level * 10;
  }
  if (type === "troopLauncher") {
    defenseUpgrades.troopLauncherTraining = level;
  }
  if (type === "infernoSingle" || type === "infernoMulti") {
    defenseUpgrades.infernoStatBonus = 1.5 * level / getDefenseUpgradeMaxLevel(type);
  }
  if (type === "spell") {
    defenseUpgrades.spellDamageBonus = 0.4 * level / getDefenseUpgradeMaxLevel(type);
    defenseUpgrades.spellSpeedBonus = 0.1 * level / getDefenseUpgradeMaxLevel(type);
    defenseUpgrades.spellRangeBonus = level * 4;
  }
}

function formatDefenseHandbookStats(type, sample, level = defenseUpgradeLevels[type] || 0) {
  const parts = [];
  if (sample.maxHp) {
    parts.push(`HP ${formatDefenseNumber(sample.maxHp)}`);
  }
  if (sample.damage) {
    parts.push(`DMG ${formatDefenseNumber(sample.damage)}`);
  }
  if (sample.percentDamage) {
    parts.push(`${Math.round(sample.percentDamage * 100)}% HP`);
  }
  if (sample.minHealthDamage) {
    parts.push(`Floor ${Math.round(sample.minHealthDamage * 100)}%`);
  }
  if (sample.range === Infinity) {
    parts.push("Range inf");
  } else if (sample.range) {
    parts.push(`Range ${formatDefenseNumber(sample.range)}`);
  }
  if (sample.fireRate) {
    parts.push(`${formatDefenseNumber(sample.fireRate)}s`);
  }
  if (sample.targetCount && type === "infernoMulti") {
    parts.push(`${sample.targetCount} targets`);
  }
  if (type === "ricochet") {
    parts.push(`${sample.bounces} bounce${sample.bounces === 1 ? "" : "s"}`);
  }
  if (sample.repairRate) {
    parts.push(`${formatDefenseNumber(sample.repairRate)} HP/s repair`);
  }
  if (type === "troopLauncher") {
    parts.push(`${sample.troopCount} troop${sample.troopCount === 1 ? "" : "s"}`);
    if (level >= getDefenseUpgradeMaxLevel("troopLauncher")) {
      parts.push("1 tank + 4 troops");
    }
    parts.push("Limit 10");
    parts.push(`Troop HP ${sample.troopHp}`);
    parts.push(`Troop DMG ${sample.troopDamage}`);
  }
  if (type === "spell") {
    parts.push(`Rage +${Math.round((sample.damageBuff - 1) * 100)}% DMG`);
    parts.push(`+${Math.round((sample.speedBuff - 1) * 100)}% speed`);
    parts.push(`Aura ${formatDefenseNumber(sample.range)}`);
  }
  if (type === "freezeSpell") {
    parts.push(`Freeze ${formatDefenseNumber(getDefenseMergedSpellFreezeDuration(level || 1))}s`);
    parts.push("Poison 4% current HP/s");
    parts.push(`Slow ${Math.round(getDefenseMergedPoisonSlow(level || 1) * 100)}%`);
    parts.push(`${formatDefenseNumber(getDefenseMergedSpellReload(level || 1))}s reload`);
    parts.push("Needs 5 enemies");
  }
  if (type === "rapidMissile") {
    parts.push(`${sample.shotCount || getDefenseRapidMissileShotCount()} homing shots`);
  }
  if (type === "infernoArtillery") {
    parts.push(`${getDefenseInfernoArtilleryShotCount(level)} beam${getDefenseInfernoArtilleryShotCount(level) === 1 ? "" : "s"}`);
    parts.push("Homing mortar");
    parts.push("Fire 3% HP/s");
    parts.push("Pool 5s");
  }
  if (type === "trap") {
    parts.push(`Blast ${104 + defenseUpgrades.trapRadiusBonus}`);
  }
  return parts.join(" | ");
}

function getDefenseStatTypes() {
  return ["wall", "turret", "cannon", "ricochet", "antiAir", "airbomb", "grenade", "minigun", "mortar", "multiMortar", "freezeSpell", "missile", "rapidMissile", "infernoSingle", "infernoMulti", "spell", "monolith", "infernoArtillery", "eagle", "trap", "camp", "tankCamp", "airfield", "troopLauncher", "builder"];
}

function getDefenseStatLines(type, building, owned) {
  const level = defenseUpgradeLevels[type] || 0;
  const lines = [`Cost $${defenseCosts[type]} | Owned ${owned} | Upgrade ${level}/${getDefenseUpgradeMaxLevel(type)}`];
  if (defenseBuildLimits[type]) {
    lines[0] += `/${defenseBuildLimits[type]}`;
  }
  if (building.maxHp) {
    lines.push(`HP ${formatDefenseNumber(building.maxHp)}`);
  }
  if (building.damage) {
    lines.push(`Damage ${formatDefenseNumber(building.damage)}`);
  }
  if (building.percentDamage) {
    lines.push(`Percent damage ${Math.round(building.percentDamage * 100)}% max HP`);
  }
  if (building.minHealthDamage) {
    lines.push(`Minimum hit ${Math.round(building.minHealthDamage * 100)}% max HP`);
  }
  if (building.range === Infinity) {
    lines.push("Range infinite");
  } else if (building.range) {
    lines.push(`Range ${formatDefenseNumber(building.range)}`);
  }
  if (building.fireRate) {
    lines.push(`Reload ${formatDefenseNumber(building.fireRate)}s`);
  }
  if (building.repairRate) {
    lines.push(`Repairs ${formatDefenseNumber(building.repairRate)} HP/sec`);
  }
  if (type === "infernoSingle") {
    lines.push("Single beam: 3s charge to max DPS");
  }
  if (type === "infernoMulti") {
    lines.push(`Multi beam: damages up to ${building.targetCount || getDefenseInfernoMultiTargetCount()} enemies in range`);
  }
  if (type === "spell") {
    lines.push(`Rage aura +${Math.round((building.damageBuff - 1) * 100)}% damage / +${Math.round((building.speedBuff - 1) * 100)}% attack speed`);
  }
  if (type === "freezeSpell") {
    lines.push("Merged from Mortar + Spell Tower");
    lines.push(`Freeze: ${getDefenseMergedSpellFreezeDuration(level || 1)}s full stop | Poison: 4% current HP/s for 10s`);
    lines.push(`Poison slow: ${Math.round(getDefenseMergedPoisonSlow(level || 1) * 100)}% movement and attack speed`);
    lines.push(`Reload scales to ${getDefenseMergedSpellReload(getDefenseUpgradeMaxLevel("freezeSpell"))}s at max level`);
    lines.push("Only launches when at least 5 ground enemies are in the spell area");
    lines.push("Frozen floor lingers 7s and freezes enemies standing on it");
  }
  if ((defenseUpgradeLevels[type] || 0) >= getDefenseUpgradeMaxLevel(type) && type !== "trap") {
    lines.push(`Power-up: at 50% HP or lower, glows purple and ${type === "builder" ? "repairs 30% faster" : type === "spell" ? "boosts rage 30% harder" : "deals +30% damage"}`);
  }
  if (level >= 8) {
    lines.push(level >= 15 ? "Master look: gold crown trim" : "Advanced look: blue crystal trim");
  }
  if (building.splashRadius) {
    lines.push(`Splash radius ${formatDefenseNumber(building.splashRadius)}`);
  } else if (type === "ricochet") {
    lines.push(`${building.bounces} bounce${building.bounces === 1 ? "" : "s"} after first hit`);
  } else if (type === "missile") {
    lines.push("Splash radius 117");
  } else if (type === "rapidMissile") {
    lines.push(`${getDefenseRapidMissileShotCount()} homing shots | No splash`);
  } else if (type === "airbomb") {
    lines.push("Air splash radius 46");
  } else if (type === "mortar" || type === "multiMortar") {
    lines.push("Splash radius 78");
  } else if (type === "grenade") {
    lines.push("Splash radius 82 plus fire");
  } else if (type === "cannon") {
    lines.push("Splash radius 46");
  } else if (type === "trap") {
    lines.push(`Trigger blast ${104 + defenseUpgrades.trapRadiusBonus}`);
  }
  if (type === "multiMortar") {
    lines.push("Burst: 3 shots, 0.2s apart");
  }
  if (type === "camp") {
    lines.push(`Spawns soldiers every ${formatDefenseNumber(building.spawnRate)}s | Max 5`);
  }
  if (type === "tankCamp") {
    lines.push(`Spawns tanks every ${formatDefenseNumber(building.spawnRate)}s | Max 3`);
  }
  if (type === "airfield") {
    lines.push(`Spawns planes every ${formatDefenseNumber(building.spawnRate)}s | Max 2`);
  }
  if (type === "troopLauncher") {
    lines.push(`Throws ${building.troopCount} troop${building.troopCount === 1 ? "" : "s"} per launch`);
    lines.push("Max level: 4 troops + 1 tank");
    lines.push("Limit 10 active summons per launcher");
    lines.push(`Launched troop HP ${building.troopHp} | Damage ${building.troopDamage}`);
    lines.push("Range grows up to +30% by Lv 12");
  }
  return lines;
}

function formatDefenseNumber(value) {
  return Number.isInteger(value) ? value : Math.round(value * 10) / 10;
}

function getDefenseRepairCost(building) {
  const missingRatio = Math.max(0, (building.maxHp - building.hp) / building.maxHp);
  const baseValue = defenseCosts[building.type] || 30;
  return Math.max(3, Math.ceil(baseValue * missingRatio * 0.55));
}

function repairDefenseBuilding(building) {
  const cost = getDefenseRepairCost(building);
  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = `Need $${cost} to repair that ${formatDefenseName(building.type)}.`;
    return;
  }

  spendDefenseMoney(cost);
  building.hp = building.maxHp;
  updateDefenseStats();
  renderDefenseRepairList();
}

function formatDefenseName(type) {
  const names = {
    wall: "Wall",
    turret: "Turret",
    cannon: "Cannon",
    ricochet: "Ricochet Cannon",
    antiAir: "Anti-Air",
    airbomb: "Air Bomb",
    airburst: "Explosive Air Defense",
    xbow: "X-Bow",
    gigaTesla: "Giga Tesla",
    lavaLauncher: "Lava Launcher",
    giantBomb: "Giant Bomb",
    pushTrap: "Push Trap",
    scattershot: "Scattershot",
    ypj20: "YPJ 20",
    gigaInferno: "Giga Inferno",
    wizard: "Wizard Tower",
    superWizard: "Super Wizard Tower",
    camp: "Army Camp",
    tankCamp: "Tank Camp",
    airfield: "Airfield",
    troopLauncher: "Troop Launcher",
    builder: "Battle Builder",
    infernoSingle: "Inferno Single",
    infernoMulti: "Inferno Multi",
    spell: "Spell Tower",
    grenade: "Grenade Tower",
    minigun: "Minigun",
    mortar: "Mortar",
    multiMortar: "Multi Mortar",
    freezeSpell: "Freeze/Poison Spell Tower",
    missile: "Missile Defense",
    rapidMissile: "Rapid Missile",
    eagle: "Eagle Artillery",
    infernoArtillery: "Inferno Artillery",
    monolith: "Monolith"
  };
  return names[type] || "Defense";
}

function buyDefensePlayerUpgrade(type) {
  const costs = {
    damage: getDefenseDamageUpgradeCost(),
    burst: 38,
    fireRate: 30,
    health: getDefenseHealthUpgradeCost()
  };

  const maxLevels = {
    damage: 10,
    burst: 2,
    fireRate: 3,
    health: 10
  };
  const currentLevels = {
    damage: defensePlayer.damageLevel,
    burst: defensePlayer.burstLevel,
    fireRate: defensePlayer.fireRateLevel,
    health: defensePlayer.healthLevel
  };

  if (currentLevels[type] >= maxLevels[type]) {
    defenseOverlayText.textContent = "That player upgrade is already maxed.";
    return;
  }

  if (!canSpendDefenseMoney(costs[type])) {
    defenseOverlayText.textContent = "Not enough money for that player upgrade.";
    return;
  }

  spendDefenseMoney(costs[type]);

  if (type === "damage") {
    defensePlayer.weaponDamage = Math.round((defensePlayer.weaponDamage + 0.1) * 10) / 10;
    defensePlayer.damageLevel += 1;
  }
  if (type === "burst") {
    defensePlayer.burstShots = Math.min(3, defensePlayer.burstShots + 1);
    defensePlayer.burstLevel += 1;
  }
  if (type === "fireRate") {
    defensePlayer.fireCooldown = Math.max(0.09, defensePlayer.fireCooldown - 0.035);
    defensePlayer.fireRateLevel += 1;
  }
  if (type === "health") {
    const oldMaxHp = defensePlayer.maxHp;
    defensePlayer.healthLevel += 1;
    defensePlayer.maxHp = getDefensePlayerHealthForLevel(defensePlayer.healthLevel);
    defensePlayer.hp += defensePlayer.maxHp - oldMaxHp;
  }

  updateDefenseStats();
  updateDefenseUpgradeButtons();
  if (defenseSelectedMenu === "handbook") {
    renderDefenseHandbook();
  }
}

function updateDefenseUpgradeButtons() {
  const damageCost = getDefenseDamageUpgradeCost();
  const healthCost = getDefenseHealthUpgradeCost();
  defenseDamageUpgradeButton.textContent = defensePlayer.damageLevel >= 10 ? "Damage MAX" : `Damage +0.1 - ${damageCost} (${defensePlayer.damageLevel}/10)`;
  defenseBurstUpgradeButton.textContent = defensePlayer.burstLevel >= 2 ? "Burst Fire MAX" : `Burst Fire - 38 (${defensePlayer.burstLevel}/2)`;
  defenseFireRateUpgradeButton.textContent = defensePlayer.fireRateLevel >= 3 ? "Faster Trigger MAX" : `Faster Trigger - 30 (${defensePlayer.fireRateLevel}/3)`;
  defenseHealthUpgradeButton.textContent = defensePlayer.healthLevel >= 10 ? "Health MAX" : `Health to ${getDefensePlayerHealthForLevel(defensePlayer.healthLevel + 1)} - ${healthCost} (${defensePlayer.healthLevel}/10)`;
  defenseDamageUpgradeButton.disabled = defensePlayer.damageLevel >= 10;
  defenseBurstUpgradeButton.disabled = defensePlayer.burstLevel >= 2;
  defenseFireRateUpgradeButton.disabled = defensePlayer.fireRateLevel >= 3;
  defenseHealthUpgradeButton.disabled = defensePlayer.healthLevel >= 10;
  updateDefenseUpgradeButton(defenseWallUpgradeButton, "wall", "Walls to 1000 HP");
  updateDefenseUpgradeButton(defenseTurretUpgradeButton, "turret", "Turrets +1 damage");
  updateDefenseUpgradeButton(defenseCannonUpgradeButton, "cannon", "Cannons +2 damage");
  updateDefenseUpgradeButton(defenseRicochetUpgradeButton, "ricochet", "Ricochet damage/bounces");
  updateDefenseUpgradeButton(defenseAntiAirUpgradeButton, "antiAir", "Anti-Air +1 damage");
  updateDefenseUpgradeButton(defenseAirbombUpgradeButton, "airbomb", "Air Bomb +1.5 damage / +18 range");
  updateDefenseUpgradeButton(defenseGrenadeUpgradeButton, "grenade", "Grenades +0.8 damage");
  updateDefenseUpgradeButton(defenseMinigunUpgradeButton, "minigun", "Miniguns +0.4 damage");
  updateDefenseUpgradeButton(defenseMortarUpgradeButton, "mortar", "Mortars +1.6 damage");
  updateDefenseUpgradeButton(defenseMultiMortarUpgradeButton, "multiMortar", "Multi Mortars +0.8 damage / +25 range");
  updateDefenseUpgradeButton(defenseFreezeSpellUpgradeButton, "freezeSpell", "Freeze/Poison duration/range");
  updateDefenseUpgradeButton(defenseMissileUpgradeButton, "missile", "Missiles +4 damage");
  updateDefenseUpgradeButton(defenseRapidMissileUpgradeButton, "rapidMissile", "Rapid Missile damage/range/shots");
  updateDefenseUpgradeButton(defenseMonolithUpgradeButton, "monolith", "Monolith percent/range");
  updateDefenseUpgradeButton(defenseInfernoArtilleryUpgradeButton, "infernoArtillery", "Inferno beams/fire pools");
  updateDefenseUpgradeButton(defenseEagleUpgradeButton, "eagle", `Eagle +6 damage / +3% floor / radius max ${defenseEagleMaxSplashRadius}`);
  const xbowLevel = getDefenseXbowLevel();
  if (xbowLevel >= 20) {
    defenseXbowUpgradeButton.textContent = "X-Bow MAX (20/20)";
    defenseXbowUpgradeButton.disabled = true;
  } else {
    defenseXbowUpgradeButton.textContent = `X-Bow Lv ${xbowLevel + 1} (${getDefenseXbowDps(xbowLevel + 1)} DPS) - ${getDefenseXbowUpgradeCost()} (${xbowLevel}/20)`;
    defenseXbowUpgradeButton.disabled = false;
  }
  updateDefenseUpgradeButton(defenseGigaTeslaUpgradeButton, "gigaTesla", "Giga Tesla damage/chains");
  updateDefenseUpgradeButton(defenseGigaInfernoUpgradeButton, "gigaInferno", "Giga Inferno burn");
  updateDefenseUpgradeButton(defenseWizardUpgradeButton, "wizard", "Wizard Tower slash");
  updateDefenseUpgradeButton(defensePushTrapUpgradeButton, "pushTrap", "Push Trap distance");
  updateDefenseUpgradeButton(defenseScattershotUpgradeButton, "scattershot", "Scattershot damage");
  updateDefenseUpgradeButton(defenseTrapUpgradeButton, "trap", "Bomb Traps +3 damage");
  updateDefenseUpgradeButton(defenseCampUpgradeButton, "camp", "Army Camp +1 troop damage");
  updateDefenseUpgradeButton(defenseTankCampUpgradeButton, "tankCamp", "Tank Camp +2 tank damage");
  updateDefenseUpgradeButton(defenseAirfieldUpgradeButton, "airfield", "Airfield +1 bullet / +3 bomb");
  updateDefenseUpgradeButton(defenseTroopLauncherUpgradeButton, "troopLauncher", "Launcher troops/count");
  updateDefenseUpgradeButton(defenseBuilderUpgradeButton, "builder", "Builder +8 HP/sec repair");
  updateDefenseUpgradeButton(defenseInfernoUpgradeButton, "infernoSingle", "Inferno +150% max stats");
  updateDefenseUpgradeButton(defenseSpellUpgradeButton, "spell", "Spell rage stronger");
  if (defensePresidentStatus) {
    defensePresidentStatus.textContent = `President Lv ${defensePresidentLevel} | ${Math.ceil(defensePresident.hp)}/${getDefensePresidentMaxHp()} HP`;
  }
  if (defensePresidentHealthButton) {
    const healthCost = 120 + defensePresidentHealthLevel * 80;
    if (defensePresidentHealthLevel >= 10) {
      defensePresidentHealthButton.textContent = "President Health MAX (10/10)";
      defensePresidentHealthButton.disabled = true;
    } else if (!defenseDemoMode && defenseMoney < healthCost) {
      defensePresidentHealthButton.textContent = `President Health +50 - $${healthCost} (need $${healthCost - defenseMoney} more)`;
      defensePresidentHealthButton.disabled = false;
    } else {
      defensePresidentHealthButton.textContent = `President Health +50 - ${healthCost} (${defensePresidentHealthLevel}/10)`;
      defensePresidentHealthButton.disabled = false;
    }
  }
  if (defenseHoneyLauncherButton) {
    const ypjOwned = defenseBuildings.some((building) => building.type === "ypj20");
    if (ypjOwned) {
      const ypjCost = 5000 + defenseYpjLevel * 2500;
      if (defenseYpjLevel >= 20) {
        defenseHoneyLauncherButton.textContent = "YPJ 20 Power MAX (20/20)";
        defenseHoneyLauncherButton.disabled = true;
      } else if (!defenseDemoMode && defenseMoney < ypjCost) {
        defenseHoneyLauncherButton.textContent = `YPJ 20 Power Lv ${defenseYpjLevel + 1} - $${ypjCost} (need $${ypjCost - defenseMoney} more)`;
        defenseHoneyLauncherButton.disabled = false;
      } else {
        defenseHoneyLauncherButton.textContent = `YPJ 20 Power Lv ${defenseYpjLevel + 1} - $${ypjCost} (${defenseYpjLevel}/20)`;
        defenseHoneyLauncherButton.disabled = false;
      }
    } else {
      const nextLevel = defenseHoneyLevel + 1;
      const honeyCost = 5000 + defenseHoneyLevel * 2500;
      if (defenseHoneyLevel >= 15) {
        defenseHoneyLauncherButton.textContent = "Honey Launcher MAX (15/15)";
        defenseHoneyLauncherButton.disabled = true;
      } else if (!defenseDemoMode && defenseMoney < honeyCost) {
        defenseHoneyLauncherButton.textContent = `Honey Launcher Lv ${nextLevel} - $${honeyCost} (need $${honeyCost - defenseMoney} more)`;
        defenseHoneyLauncherButton.disabled = false;
      } else {
        defenseHoneyLauncherButton.textContent = `Honey Launcher Lv ${nextLevel} - $${honeyCost} (${defenseHoneyLevel}/15)`;
        defenseHoneyLauncherButton.disabled = false;
      }
    }
  }
}

function getDefenseDamageUpgradeCost() {
  const costsByNextLevel = [10, 20, 30, 35, 40, 43, 46, 49, 52, 100];
  return costsByNextLevel[Math.min(defensePlayer.damageLevel, costsByNextLevel.length - 1)];
}

function getDefenseHealthUpgradeCost() {
  const costsByNextLevel = [20, 35, 55, 80, 110, 145, 185, 230, 285, 350];
  return costsByNextLevel[Math.min(defensePlayer.healthLevel, costsByNextLevel.length - 1)];
}

function getDefensePlayerHealthForLevel(level) {
  return 100 + Math.min(10, level) * 190;
}

function updateDefenseUpgradeButton(button, type, label) {
  const level = defenseUpgradeLevels[type] || 0;
  const maxLevel = getDefenseUpgradeMaxLevel(type);
  if (level >= maxLevel) {
    button.textContent = `${label} MAX (${level}/${maxLevel})`;
    button.disabled = true;
    return;
  }
  button.textContent = `${label} - ${getDefenseUpgradeCost(type)} (${level}/${maxLevel})`;
  button.disabled = false;
}

function getDefenseUpgradeMaxLevel(type) {
  if (type === "wall") {
    return 15;
  }
  if (type === "gigaTesla") {
    return 14;
  }
  if (type === "gigaInferno") {
    return 9;
  }
  return ["missile", "rapidMissile", "monolith", "eagle", "infernoArtillery", "infernoSingle", "infernoMulti", "ricochet", "troopLauncher"].includes(type) ? 12 : 10;
}

function getDefenseLateStatLevel(level) {
  return level <= 10 ? level : 10 + (level - 10) * 0.5;
}

function getDefenseUpgradeCost(type) {
  const baseCosts = {
    wall: 26,
    turret: 34,
    cannon: 42,
    ricochet: 64,
    antiAir: 38,
    airbomb: 46,
    grenade: 42,
    minigun: 40,
    mortar: 52,
    multiMortar: 58,
    freezeSpell: 95,
    missile: 60,
    rapidMissile: 58,
    monolith: 90,
    infernoArtillery: 110,
    eagle: 120,
    trap: 34,
    camp: 36,
    tankCamp: 48,
    airfield: 54,
    troopLauncher: 62,
    builder: 44,
    infernoSingle: 100,
    infernoMulti: 100,
    spell: 70,
    wizard: 48,
    gigaInferno: 140,
    pushTrap: 46,
    scattershot: 70
  };
  const level = defenseUpgradeLevels[type] || 0;
  const maxLevel = getDefenseUpgradeMaxLevel(type);
  const progress = maxLevel <= 1 ? 1 : level / (maxLevel - 1);
  const rawCost = baseCosts[type] * Math.pow(400 / baseCosts[type], progress);
  return Math.min(400, Math.max(baseCosts[type], Math.round(rawCost / 5) * 5));
}

function buyDefenseUpgrade(type) {
  if (type === "xbow") {
    const xbowLevel = getDefenseXbowLevel();
    if (xbowLevel >= 20) {
      defenseOverlayText.textContent = "X-Bow upgrades are already maxed.";
      updateDefenseUpgradeButtons();
      return;
    }
    const xbowCost = getDefenseXbowUpgradeCost();
    if (!canSpendDefenseMoney(xbowCost)) {
      defenseOverlayText.textContent = "Not enough money for that defense upgrade.";
      return;
    }
    spendDefenseMoney(xbowCost);
    defenseUpgradeLevels.xbow = (defenseUpgradeLevels.xbow || 0) + 1;
    defenseBuildings.filter((building) => building.type === "xbow").forEach((building) => {
      building.damage = getDefenseBuildingDamage(getDefenseXbowDps() * 0.1);
    });
    updateDefenseUpgradeButtons();
    updateDefenseStats();
    return;
  }
  const level = defenseUpgradeLevels[type] || 0;
  const maxLevel = getDefenseUpgradeMaxLevel(type);
  if (level >= maxLevel) {
    defenseOverlayText.textContent = `${formatDefenseName(type)} upgrades are already maxed.`;
    updateDefenseUpgradeButtons();
    return;
  }
  const cost = getDefenseUpgradeCost(type);

  if (!canSpendDefenseMoney(cost)) {
    defenseOverlayText.textContent = "Not enough money for that defense upgrade.";
    return;
  }

  spendDefenseMoney(cost);
  defenseUpgradeLevels[type] = level + 1;
  if (type === "infernoSingle") {
    defenseUpgradeLevels.infernoMulti = defenseUpgradeLevels.infernoSingle;
  }
  scaleDefenseBuildingHealthForUpgrade(type);
  if (type === "infernoSingle") {
    scaleDefenseBuildingHealthForUpgrade("infernoMulti");
  }

  if (type === "wall") {
    defenseBuildings.filter((building) => building.type === "wall").forEach((building) => {
      const oldMax = building.maxHp;
      building.maxHp = getDefenseWallHpForLevel(defenseUpgradeLevels.wall);
      building.hp += building.maxHp - oldMax;
    });
  }

  if (type === "turret") {
    defenseUpgrades.turretDamageBonus += 1;
    defenseUpgrades.turretRangeBonus += 16;
    defenseBuildings.filter((building) => building.type === "turret").forEach((building) => {
      building.damage += 1;
      building.range += 16;
    });
  }

  if (type === "cannon") {
    defenseUpgrades.cannonDamageBonus += 2;
    defenseUpgrades.cannonRangeBonus += 18;
    defenseBuildings.filter((building) => building.type === "cannon").forEach((building) => {
      building.damage += 2;
      building.range += 18;
    });
  }

  if (type === "ricochet") {
    defenseUpgrades.ricochetDamageBonus = getDefenseRicochetDamage(defenseUpgradeLevels.ricochet) - 20;
    defenseUpgrades.ricochetRangeBonus = defenseUpgradeLevels.ricochet * 12;
    defenseBuildings.filter((building) => building.type === "ricochet").forEach((building) => {
      const sample = createDefenseBuilding("ricochet", building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
      building.bounces = sample.bounces;
    });
  }

  if (type === "antiAir") {
    defenseUpgrades.antiAirDamageBonus += 1;
    defenseUpgrades.antiAirRangeBonus += 22;
    defenseBuildings.filter((building) => building.type === "antiAir" || building.type === "airbomb").forEach((building) => {
      building.damage = building.type === "airbomb" ? getDefenseAirbombDamage() : building.damage + 1;
      building.range += 22;
    });
  }

  if (type === "gigaTesla") {
    defenseBuildings.filter((building) => building.type === "gigaTesla").forEach((building) => {
      const sample = createDefenseBuilding("gigaTesla", building.x, building.y);
      building.damage = sample.damage;
      building.chains = sample.chains;
    });
  }

  if (type === "scattershot") {
    defenseBuildings.filter((building) => building.type === "scattershot").forEach((building) => {
      const sample = createDefenseBuilding("scattershot", building.x, building.y);
      building.damage = sample.damage;
    });
  }

  if (type === "airbomb") {
    defenseUpgrades.airbombDamageBonus += 1;
    defenseUpgrades.airbombRangeBonus += 18;
    defenseBuildings.filter((building) => building.type === "airbomb").forEach((building) => {
      building.damage = getDefenseAirbombDamage();
      building.range += 18;
    });
  }

  if (type === "grenade") {
    defenseUpgrades.grenadeDamageBonus = Math.round((defenseUpgrades.grenadeDamageBonus + 0.8) * 10) / 10;
    defenseUpgrades.grenadeRangeBonus += 16;
    defenseBuildings.filter((building) => building.type === "grenade").forEach((building) => {
      building.damage = Math.round((building.damage + 0.8) * 10) / 10;
      building.range += 16;
    });
  }

  if (type === "minigun") {
    defenseUpgrades.minigunDamageBonus = Math.round((defenseUpgrades.minigunDamageBonus + 0.4) * 10) / 10;
    defenseUpgrades.minigunRangeBonus += 14;
    defenseBuildings.filter((building) => building.type === "minigun").forEach((building) => {
      building.damage = Math.round((building.damage + 0.4) * 10) / 10;
      building.range += 14;
    });
  }

  if (type === "mortar") {
    defenseUpgrades.mortarDamageBonus = Math.round((defenseUpgrades.mortarDamageBonus + 1.6) * 10) / 10;
    defenseUpgrades.mortarRangeBonus += 20;
    defenseBuildings.filter((building) => building.type === "mortar" || building.type === "multiMortar").forEach((building) => {
      building.damage = Math.round((building.damage + (building.type === "multiMortar" ? 0.64 : 1.6)) * 10) / 10;
      building.range += 20;
    });
  }

  if (type === "multiMortar") {
    defenseUpgrades.multiMortarDamageBonus = Math.round((defenseUpgrades.multiMortarDamageBonus + 0.8) * 10) / 10;
    defenseUpgrades.multiMortarRangeBonus += 25;
    defenseBuildings.filter((building) => building.type === "multiMortar").forEach((building) => {
      building.damage = Math.round((building.damage + 0.8) * 10) / 10;
      building.range += 25;
    });
  }

  if (type === "freezeSpell") {
    defenseBuildings.filter((building) => building.type === "freezeSpell").forEach((building) => {
      const sample = createDefenseBuilding("freezeSpell", building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
      building.fireRate = sample.fireRate;
      building.splashRadius = sample.splashRadius;
      building.freezeDuration = sample.freezeDuration;
    });
  }

  if (type === "missile") {
    const statLevel = getDefenseLateStatLevel(defenseUpgradeLevels.missile);
    defenseUpgrades.missileDamageBonus = statLevel * 4;
    defenseUpgrades.missileRangeBonus = statLevel * 22;
    defenseBuildings.filter((building) => building.type === "missile").forEach((building) => {
      const sample = createDefenseBuilding("missile", building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
    });
    defenseBuildings.filter((building) => building.type === "rapidMissile").forEach((building) => {
      const sample = createDefenseBuilding("rapidMissile", building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
      building.shotCount = sample.shotCount;
    });
  }

  if (type === "rapidMissile") {
    const statLevel = getDefenseLateStatLevel(defenseUpgradeLevels.rapidMissile);
    defenseUpgrades.rapidMissileDamageBonus = Math.round(statLevel * 0.6 * 10) / 10;
    defenseUpgrades.rapidMissileRangeBonus = statLevel * 18;
    defenseBuildings.filter((building) => building.type === "rapidMissile").forEach((building) => {
      const sample = createDefenseBuilding("rapidMissile", building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
      building.shotCount = sample.shotCount;
    });
  }

  if (type === "monolith") {
    const statLevel = getDefenseLateStatLevel(defenseUpgradeLevels.monolith);
    defenseUpgrades.monolithPercentBonus = Math.round((getDefenseMonolithPercentDamage(defenseUpgradeLevels.monolith) - 0.14) * 100) / 100;
    defenseUpgrades.monolithRangeBonus = statLevel * 28;
    defenseBuildings.filter((building) => building.type === "monolith").forEach((building) => {
      const sample = createDefenseBuilding("monolith", building.x, building.y);
      building.percentDamage = sample.percentDamage;
      building.range = sample.range;
    });
  }

  if (type === "eagle") {
    const statLevel = getDefenseLateStatLevel(defenseUpgradeLevels.eagle);
    defenseUpgrades.eagleDamageBonus = statLevel * 6;
    defenseUpgrades.eagleMinHealthBonus = Math.round(statLevel * 0.03 * 100) / 100;
    defenseUpgrades.eagleRadiusBonus = Math.min(defenseEagleMaxSplashRadius - Math.round(105 * 1.3), statLevel * 12);
    defenseBuildings.filter((building) => building.type === "eagle").forEach((building) => {
      const sample = createDefenseBuilding("eagle", building.x, building.y);
      building.damage = sample.damage;
      building.minHealthDamage = sample.minHealthDamage;
      building.splashRadius = sample.splashRadius;
    });
  }
  if (type === "infernoArtillery") {
    const statLevel = getDefenseLateStatLevel(defenseUpgradeLevels.infernoArtillery);
    defenseUpgrades.infernoArtilleryDamageBonus = Math.round(statLevel * 0.6 * 10) / 10;
    defenseUpgrades.infernoArtilleryRangeBonus = statLevel * 8;
    defenseBuildings.filter((building) => building.type === "infernoArtillery").forEach((building) => {
      const sample = createDefenseBuilding("infernoArtillery", building.x, building.y);
      building.damage = sample.damage;
      building.splashRadius = sample.splashRadius;
      building.fireRate = sample.fireRate;
    });
  }

  if (type === "trap") {
    defenseUpgrades.trapDamageBonus += 3;
    defenseUpgrades.trapRadiusBonus += 10;
  }

  if (type === "camp") {
    defenseUpgrades.campTraining += 1;
    defenseUpgrades.campHpBonus += 14;
    defenseBuildings.filter((building) => building.type === "camp").forEach((building) => {
      building.maxHp += 14;
      building.hp += 14;
      building.spawnRate = Math.max(2.1, building.spawnRate - 0.25);
    });
    defenseFriendlyUnits.forEach((unit) => {
      unit.maxHp += 3;
      unit.hp += 3;
      unit.damage += 1;
    });
  }

  if (type === "tankCamp") {
    defenseUpgrades.tankCampTraining += 1;
    defenseBuildings.filter((building) => building.type === "tankCamp").forEach((building) => {
      building.maxHp += 16;
      building.hp += 16;
      building.spawnRate = Math.max(4.4, building.spawnRate - 0.25);
    });
    defenseFriendlyUnits.filter((unit) => unit.type === "tank").forEach((unit) => {
      unit.maxHp += 4;
      unit.hp += 4;
      unit.damage += 2;
    });
  }

  if (type === "airfield") {
    defenseUpgrades.airfieldTraining += 1;
    defenseBuildings.filter((building) => building.type === "airfield").forEach((building) => {
      building.maxHp += 14;
      building.hp += 14;
      building.spawnRate = Math.max(4.8, building.spawnRate - 0.25);
    });
    defenseFriendlyUnits.filter((unit) => unit.type === "plane").forEach((unit) => {
      unit.maxHp += 3;
      unit.hp += 3;
      unit.damage += 1;
      unit.bombDamage += 3;
    });
  }

  if (type === "troopLauncher") {
    defenseUpgrades.troopLauncherTraining += 1;
    defenseBuildings.filter((building) => building.type === "troopLauncher").forEach((building) => {
      const sample = createDefenseBuilding("troopLauncher", building.x, building.y);
      const oldMax = building.maxHp;
      building.maxHp = sample.maxHp;
      building.hp += Math.max(0, building.maxHp - oldMax);
      building.range = sample.range;
      building.fireRate = sample.fireRate;
      building.troopCount = sample.troopCount;
      building.troopHp = sample.troopHp;
      building.troopDamage = sample.troopDamage;
    });
  }

  if (type === "builder") {
    defenseUpgrades.builderRepairBonus += 8;
    defenseUpgrades.builderRangeBonus += 10;
    defenseBuildings.filter((building) => building.type === "builder").forEach((building) => {
      building.repairRate = getDefenseBuilderRepairRate();
      building.range += 10;
    });
  }

  if (type === "infernoSingle") {
    defenseUpgrades.infernoStatBonus = 1.5 * defenseUpgradeLevels.infernoSingle / getDefenseUpgradeMaxLevel("infernoSingle");
    defenseBuildings.filter((building) => building.type === "infernoSingle" || building.type === "infernoMulti").forEach((building) => {
      const sample = createDefenseBuilding(building.type, building.x, building.y);
      building.damage = sample.damage;
      building.range = sample.range;
      building.targetCount = sample.targetCount;
    });
  }

  if (type === "spell") {
    defenseUpgrades.spellDamageBonus = 0.4 * defenseUpgradeLevels.spell / getDefenseUpgradeMaxLevel("spell");
    defenseUpgrades.spellSpeedBonus = 0.1 * defenseUpgradeLevels.spell / getDefenseUpgradeMaxLevel("spell");
    defenseUpgrades.spellRangeBonus += 4;
    defenseBuildings.filter((building) => building.type === "spell").forEach((building) => {
      const sample = createDefenseBuilding("spell", building.x, building.y);
      building.range = sample.range;
      building.damageBuff = sample.damageBuff;
      building.speedBuff = sample.speedBuff;
    });
  }

  updateDefenseStats();
  updateDefenseUpgradeButtons();
}

function scaleDefenseBuildingHealthForUpgrade(type) {
  if (type === "wall" || type === "trap") {
    return;
  }
  defenseBuildings.filter((building) => building.type === type).forEach((building) => {
    const oldMax = building.maxHp;
    const sample = createDefenseBuilding(type, building.x, building.y);
    building.maxHp = sample.maxHp;
    building.hp += Math.max(0, building.maxHp - oldMax);
  });
}

function updateDefenseToolButtons() {
  [
    [defenseWallButton, "wall"],
    [defenseTurretButton, "turret"],
    [defenseCannonButton, "cannon"],
    [defenseRicochetButton, "ricochet"],
    [defenseAntiAirButton, "antiAir"],
    [defenseAirbombButton, "airbomb"],
    [defenseAirburstButton, "airburst"],
    [defenseXbowButton, "xbow"],
    [defenseGigaTeslaButton, "gigaTesla"],
    [defenseGiantBombButton, "giantBomb"],
    [defenseCampButton, "camp"],
    [defenseTankCampButton, "tankCamp"],
    [defenseAirfieldButton, "airfield"],
    [defenseTroopLauncherButton, "troopLauncher"],
    [defenseBuilderButton, "builder"],
    [defenseInfernoSingleButton, "infernoSingle"],
    [defenseInfernoMultiButton, "infernoMulti"],
    [defenseSpellButton, "spell"],
    [defenseTrapButton, "trap"],
    [defenseGrenadeButton, "grenade"],
    [defenseMinigunButton, "minigun"],
    [defenseMortarButton, "mortar"],
    [defenseMultiMortarButton, "multiMortar"],
    [defenseMissileButton, "missile"],
    [defenseRapidMissileButton, "rapidMissile"],
    [defenseInfernoArtilleryButton, "infernoArtillery"],
    [defenseEagleButton, "eagle"],
    [defenseMonolithButton, "monolith"],
    [defenseFreezeSpellBuildButton, "freezeSpell"],
    [defenseLavaLauncherButton, "lavaLauncher"],
    [defenseYpj20Button, "ypj20"],
    [defenseGigaInfernoButton, "gigaInferno"],
    [defenseWizardButton, "wizard"],
    [defenseSuperWizardButton, "superWizard"],
    [defensePushTrapButton, "pushTrap"],
    [defenseScattershotButton, "scattershot"]
  ].forEach(([button, tool]) => {
    if (!button) {
      return;
    }
    button.classList.toggle("active", !defenseBattleMode && defenseSelectedTool === tool);
  });
  defenseBattleModeButton.classList.toggle("active", defenseBattleMode);
  updateDefenseMergedBuildButtons();
}

function updateDefenseMergedBuildButtons() {
  if (!defenseMergedBuildSection) {
    return;
  }
  const unlocked = defenseMergedUnlocked || {};
  defenseMergedBuildSection.hidden = !unlocked.freezeSpell && !unlocked.lavaLauncher && !unlocked.ypj20 && !unlocked.gigaInferno && !unlocked.superWizard;
  if (defenseFreezeSpellBuildButton) {
    defenseFreezeSpellBuildButton.hidden = !unlocked.freezeSpell;
  }
  if (defenseLavaLauncherButton) {
    defenseLavaLauncherButton.hidden = !unlocked.lavaLauncher;
  }
  if (defenseYpj20Button) {
    defenseYpj20Button.hidden = !unlocked.ypj20;
  }
  if (defenseGigaInfernoButton) {
    defenseGigaInfernoButton.hidden = !unlocked.gigaInferno;
  }
  if (defenseSuperWizardButton) {
    defenseSuperWizardButton.hidden = !unlocked.superWizard;
  }
}

function updateDefenseStats() {
  const playerStatus = defensePlayer.alive ? `HP ${defensePlayer.hp}` : `Respawn ${Math.ceil(defensePlayer.respawnTimer)}s`;
  const moneyText = defenseDemoMode ? "$∞ Demo" : `$${defenseMoney}`;
  defenseStatsEl.textContent = `Wave ${defenseWave} | ${moneyText} | Pres Lv ${defensePresidentLevel} ${Math.ceil(defensePresident.hp)}/${getDefensePresidentMaxHp()} | ${playerStatus}`;
  updateDefenseUpgradeButtons();
  if (defenseSelectedMenu === "stats") {
    renderDefenseStatList();
  }
  if (defenseSelectedMenu === "merge") {
    renderDefenseMergeList();
  }
  if (defenseSelectedMenu === "demo") {
    renderDefenseDemoPanel();
  }
}

function endDefenseGame(title = "President Lost", text = `You survived to wave ${defenseWave}.`) {
  defenseState = "ended";
  cancelAnimationFrame(defenseAnimationId);
  updateDefenseStats();
  showDefenseOverlay(title, text, "Restart");
}

function giveUpDefenseGame() {
  endDefenseGame("You Gave Up", `You surrendered on wave ${defenseWave}.`, "Restart");
}

function showDefenseOverlay(title, text, buttonText) {
  defenseOverlayTitle.textContent = title;
  defenseOverlayText.textContent = text;
  defenseStartButton.textContent = buttonText;
  if (defenseNextPreview) {
    defenseNextPreview.hidden = true;
  }
  defenseOverlay.classList.remove("hidden");
}

function hideDefenseOverlay() {
  defenseOverlay.classList.add("hidden");
}

defenseCanvas.addEventListener("mousemove", (event) => {
  const rect = defenseCanvas.getBoundingClientRect();
  defenseMouse.inside = true;
  defenseMouse.x = (event.clientX - rect.left) * (defenseCanvas.width / rect.width);
  defenseMouse.y = (event.clientY - rect.top) * (defenseCanvas.height / rect.height);
  defenseMouse.worldX = defenseMouse.x + defenseCameraX;
  defenseMouse.worldY = defenseMouse.y;
  if (defenseState !== "playing") {
    drawDefenseGame();
  }
});

defenseCanvas.addEventListener("mouseleave", () => {
  defenseMouse.inside = false;
  defenseAttackMouseDown = false;
  if (defenseState !== "playing") {
    drawDefenseGame();
  }
});

defenseCanvas.addEventListener("mousedown", (event) => {
  activeGame = "defense";
  if (event.button !== 0) {
    return;
  }
  const rect = defenseCanvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (defenseCanvas.width / rect.width);
  const y = (event.clientY - rect.top) * (defenseCanvas.height / rect.height);
  defenseMouse.x = x;
  defenseMouse.y = y;
  defenseMouse.worldX = x + defenseCameraX;
  defenseMouse.worldY = y;
  defenseAttackMouseDown = true;
  const clickedBuilding = getDefenseBuildingAtWorldPoint(defenseMouse.worldX, defenseMouse.worldY);
  if (defenseSelectedMenu === "ability" && clickedBuilding) {
    defenseSelectedAbilityBuilding = clickedBuilding;
    renderDefenseAbilityList();
    defenseOverlayText.textContent = `${getDefenseBuildingDisplayName(clickedBuilding)} selected for abilities.`;
    drawDefenseGame();
    return;
  }
  if (clickedBuilding && clickedBuilding.type === "xbow" && !defenseAttackMode) {
    clickedBuilding.groundOnly = !clickedBuilding.groundOnly;
    clickedBuilding.range = clickedBuilding.groundOnly ? clickedBuilding.groundRange : 1050;
    defenseOverlayText.textContent = `X-Bow mode: ${clickedBuilding.groundOnly ? "ground only - long range" : "ground and air"}.`;
    drawDefenseGame();
    return;
  }
  if (defenseSelectedMenu === "merge" && !defenseAttackMode) {
    if (event.shiftKey) {
      placeDefenseBuilding(x, y);
      return;
    }
    handleDefenseMergeCanvasClick(clickedBuilding);
    return;
  }
  if (event.shiftKey) {
    placeDefenseBuilding(x, y);
  } else {
    shootDefenseBullet();
  }
});

window.addEventListener("mouseup", () => {
  if (defenseAttackMode && defensePlayer?.equipment?.equipped === "bow" && defenseAttackMouseDown) {
    shootDefenseEquipmentBullet();
  }
  defenseAttackMouseDown = false;
});

defenseCanvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const rect = defenseCanvas.getBoundingClientRect();
  placeDefenseBuilding(
    (event.clientX - rect.left) * (defenseCanvas.width / rect.width),
    (event.clientY - rect.top) * (defenseCanvas.height / rect.height)
  );
});

defenseWallButton.addEventListener("click", () => selectDefenseTool("wall"));
defenseTurretButton.addEventListener("click", () => selectDefenseTool("turret"));
defenseCannonButton.addEventListener("click", () => selectDefenseTool("cannon"));
defenseRicochetButton.addEventListener("click", () => selectDefenseTool("ricochet"));
defenseAntiAirButton.addEventListener("click", () => selectDefenseTool("antiAir"));
defenseAirbombButton.addEventListener("click", () => selectDefenseTool("airbomb"));
defenseAirburstButton?.addEventListener("click", () => selectDefenseTool("airburst"));
defenseXbowButton?.addEventListener("click", () => selectDefenseTool("xbow"));
defenseGigaTeslaButton?.addEventListener("click", () => selectDefenseTool("gigaTesla"));
defenseGiantBombButton?.addEventListener("click", () => selectDefenseTool("giantBomb"));
defenseFreezeSpellBuildButton?.addEventListener("click", () => selectDefenseTool("freezeSpell"));
defenseLavaLauncherButton?.addEventListener("click", () => selectDefenseTool("lavaLauncher"));
defenseYpj20Button?.addEventListener("click", () => selectDefenseTool("ypj20"));
defenseGigaInfernoButton?.addEventListener("click", () => selectDefenseTool("gigaInferno"));
defenseWizardButton?.addEventListener("click", () => selectDefenseTool("wizard"));
defenseSuperWizardButton?.addEventListener("click", () => selectDefenseTool("superWizard"));
defensePushTrapButton?.addEventListener("click", () => selectDefenseTool("pushTrap"));
defenseScattershotButton?.addEventListener("click", () => selectDefenseTool("scattershot"));
defenseCampButton.addEventListener("click", () => selectDefenseTool("camp"));
defenseTankCampButton.addEventListener("click", () => selectDefenseTool("tankCamp"));
defenseAirfieldButton.addEventListener("click", () => selectDefenseTool("airfield"));
defenseTroopLauncherButton.addEventListener("click", () => selectDefenseTool("troopLauncher"));
defenseBuilderButton.addEventListener("click", () => selectDefenseTool("builder"));
defenseInfernoSingleButton.addEventListener("click", () => selectDefenseTool("infernoSingle"));
defenseInfernoMultiButton.addEventListener("click", () => selectDefenseTool("infernoMulti"));
defenseSpellButton.addEventListener("click", () => selectDefenseTool("spell"));
defenseTrapButton.addEventListener("click", () => selectDefenseTool("trap"));
defenseGrenadeButton.addEventListener("click", () => selectDefenseTool("grenade"));
defenseMinigunButton.addEventListener("click", () => selectDefenseTool("minigun"));
defenseMortarButton.addEventListener("click", () => selectDefenseTool("mortar"));
defenseMultiMortarButton.addEventListener("click", () => selectDefenseTool("multiMortar"));
defenseMissileButton.addEventListener("click", () => selectDefenseTool("missile"));
defenseRapidMissileButton.addEventListener("click", () => selectDefenseTool("rapidMissile"));
defenseInfernoArtilleryButton.addEventListener("click", () => selectDefenseTool("infernoArtillery"));
defenseEagleButton.addEventListener("click", () => selectDefenseTool("eagle"));
defenseMonolithButton.addEventListener("click", () => selectDefenseTool("monolith"));
defensePlayerTabButton.addEventListener("click", () => selectDefenseMenu("player"));
defenseBuildTabButton.addEventListener("click", () => selectDefenseMenu("build"));
defenseUpgradeTabButton.addEventListener("click", () => selectDefenseMenu("upgrade"));
defenseAbilityTabButton.addEventListener("click", () => selectDefenseMenu("ability"));
defenseMergeTabButton.addEventListener("click", () => selectDefenseMenu("merge"));
defenseRepairTabButton.addEventListener("click", () => selectDefenseMenu("repair"));
defenseStatsTabButton.addEventListener("click", () => selectDefenseMenu("stats"));
defenseHandbookTabButton.addEventListener("click", () => selectDefenseMenu("handbook"));
defenseDemoTabButton.addEventListener("click", () => selectDefenseMenu("demo"));
defenseDemoToggleButton.addEventListener("click", toggleDefenseDemoMode);
defenseDemoWaveButton.addEventListener("click", setDefenseDemoWave);
defenseDemoWaveInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setDefenseDemoWave();
  }
});
defenseAbilityList.addEventListener("pointerdown", handleDefenseAbilityPointerDown);
defenseBattleModeButton.addEventListener("click", toggleDefenseBattleMode);
defenseReturnHomeButton?.addEventListener("click", returnDefenseHome);
defenseEquipmentPanel?.addEventListener("click", (event) => {
  const target = event.target?.closest("[data-equipment-open],[data-equipment-equip],[data-equipment-upgrade],[data-equipment-back]");
  if (!target) {
    return;
  }
  const openType = target.dataset.equipmentOpen;
  const equipType = target.dataset.equipmentEquip;
  const upgradeType = target.dataset.equipmentUpgrade;
  if (target.dataset.equipmentBack) {
    defenseEquipmentDetail = null;
    renderDefenseEquipmentPanel();
    return;
  }
  if (openType && defensePlayer.equipment.owned[openType]) {
    defenseEquipmentDetail = openType;
    renderDefenseEquipmentPanel();
    return;
  }
  if (equipType) {
    equipDefenseEquipment(equipType);
  }
  if (upgradeType) {
    upgradeDefenseEquipment(upgradeType);
  }
});
defenseWaveButton.addEventListener("click", startDefenseWave);
defenseDamageUpgradeButton.addEventListener("click", () => buyDefensePlayerUpgrade("damage"));
defenseBurstUpgradeButton.addEventListener("click", () => buyDefensePlayerUpgrade("burst"));
defenseFireRateUpgradeButton.addEventListener("click", () => buyDefensePlayerUpgrade("fireRate"));
defenseHealthUpgradeButton.addEventListener("click", () => buyDefensePlayerUpgrade("health"));
defenseWallUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("wall"));
defenseTurretUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("turret"));
defenseCannonUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("cannon"));
defenseRicochetUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("ricochet"));
defenseAntiAirUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("antiAir"));
defenseAirbombUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("airbomb"));
defenseXbowUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("xbow"));
defenseGigaTeslaUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("gigaTesla"));
defenseGigaInfernoUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("gigaInferno"));
defenseWizardUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("wizard"));
defensePushTrapUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("pushTrap"));
defenseScattershotUpgradeButton?.addEventListener("click", () => buyDefenseUpgrade("scattershot"));
defensePresidentHealthButton?.addEventListener("click", buyDefensePresidentHealth);
defenseHoneyLauncherButton?.addEventListener("click", buyDefenseHoneyLauncher);
defenseGrenadeUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("grenade"));
defenseMinigunUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("minigun"));
defenseMortarUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("mortar"));
defenseMultiMortarUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("multiMortar"));
defenseFreezeSpellUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("freezeSpell"));
defenseMissileUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("missile"));
defenseRapidMissileUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("rapidMissile"));
defenseMonolithUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("monolith"));
defenseInfernoArtilleryUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("infernoArtillery"));
defenseEagleUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("eagle"));
defenseTrapUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("trap"));
defenseCampUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("camp"));
defenseTankCampUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("tankCamp"));
defenseAirfieldUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("airfield"));
defenseTroopLauncherUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("troopLauncher"));
defenseBuilderUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("builder"));
defenseInfernoUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("infernoSingle"));
defenseSpellUpgradeButton.addEventListener("click", () => buyDefenseUpgrade("spell"));
defenseStartButton.addEventListener("click", () => {
  if (defenseAttackMode && defenseStoryPaused) {
    if (defenseStoryAttacksUsed >= 3 || defenseStoryLocked) {
      returnDefenseHome();
    } else {
      advanceDefenseStoryLevel();
    }
    return;
  }
  if (defenseState === "ended") {
    resetDefenseGame();
    startDefenseGame();
    return;
  }
  startDefenseGame();
});
defenseRestartButton.addEventListener("click", resetDefenseGame);
defenseGiveUpButton.addEventListener("click", giveUpDefenseGame);
defenseStoryButton?.addEventListener("click", () => {
  if (defenseAttackMode) {
    return;
  }
  tryEnterDefenseStory();
});

resetDefenseGame();

const gameMenu = document.querySelector(".game-menu");
const gameMenuButton = document.querySelector(".game-menu-button");

gameMenuButton.addEventListener("click", () => {
  gameMenu.classList.toggle("open");
});

gameLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href") || "#snakeGame";
    selectVisibleGame(href);
    window.location.hash = href;
    gameMenu.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  if (!gameMenu.contains(event.target)) {
    gameMenu.classList.remove("open");
  }
});

window.addEventListener("hashchange", () => selectVisibleGame());
selectVisibleGame();
