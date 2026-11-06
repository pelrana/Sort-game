// 🌍 多言語テキスト辞書 (i18n)
const TRANSLATIONS = {
  en: {
    appTitle: "Sort Game",
    settingsTitle: "Settings",
    languageLabel: "Language:",
    dataCountLabel: "Data Count:",
    maxTriesLabel: "Luck-based Max Tries:",
    volumeLabel: "Volume:",
    closeBtn: "Close",
    homeBtn: "🏠 Home",
    guideBtn: "📖 Guide",
    guideTitle: "Algorithm Guide",
    setupTitle: "Game Settings",
    gameModeLabel: "Game Mode:",
    modeNormal: "1. Continuous Normal Battle",
    modeRace3: "2. Race to 3 Wins (5 Rounds)",
    modePredictFast: "3. Predict Fastest Sort",
    modePredictOrder: "4. Predict Fewest Ops Order",
    playerCountLabel: "Number of Players (1–6):",
    playerNamesHeader: "Player Names:",
    defaultPlayerName: "Player",
    startGameBtn: "Start Game!",
    currentPhaseLabel: "Current Phase",
    targetDataTitle: "Target Data",
    coverNotice: "Make sure others aren't looking at your screen!",
    showHandBtn: "Check Hand & Play",
    handPrompt: "'s Hand (Choose 1 card)",
    predictFastPrompt: "Choose the FASTEST sorting algorithm (Fewest Operations):",
    predictOrderPrompt: "Choose your rank prediction for these 3 algorithms:",
    turnTitle: "'s Turn",
    cardPlayedNotice: " played a card face-down! Pass the device to ",
    raceTitle: "🚀 Sort Battle Start!",
    speedLabel: "Speed",
    startRaceBtn: "Start All!",
    stopRaceBtn: "Stop / Skip",
    resultsTitle: "🏆 Round Results 🏆",
    nextRoundBtn: "Next Round",
    waitingStatus: "Waiting...",
    opsDone: "✨ Done! (Operations: ",
    opsLabel: "Operations: ",
    inProgressPhase: "Sort Battle in Progress!",
    modes: {
      normal: "Normal (Continuous)",
      race3: "Race to 3 Wins",
      predictFast: "Fastest Predictor",
      predictOrder: "Order Predictor"
    },
    cards: {
      'Merge Sort': 'Merge Sort',
      'Quick Sort': 'Quick Sort',
      'Heap Sort': 'Heap Sort',
      'Introsort': 'Introsort',
      'Timsort': 'Timsort',
      'Shell Sort': 'Shell Sort',
      'Radix Sort (LSD)': 'Radix Sort (LSD)',
      'Cocktail Shaker': 'Cocktail Shaker',
      'Gnome Sort': 'Gnome Sort',
      'Odd-Even Sort': 'Odd-Even Sort',
      'Insertion Sort': 'Insertion Sort',
      'Selection Sort': 'Selection Sort',
      'Bubble Sort': 'Bubble Sort',
      'Bucket Sort': 'Bucket Sort',
      'Abe Sort': 'Abe Sort',
      'Stalin Sort': 'Stalin Sort',
      'Bogo Sort': 'Bogo Sort',
      'Miracle Sort': 'Miracle Sort'
    },
    descriptions: {
      'Merge Sort': 'Divides the array into halves, sorts them recursively, and merges them back efficiently.',
      'Quick Sort': 'Picks a pivot, partitions elements into smaller and larger groups, and sorts them recursively.',
      'Heap Sort': 'Builds a binary heap structure to repeatedly extract the maximum/minimum element.',
      'Introsort': 'Starts with Quick Sort and switches to Heap Sort when the recursion depth exceeds a limit.',
      'Timsort': 'Hybrid sorting algorithm derived from Merge Sort and Insertion Sort, optimized for real-world data.',
      'Shell Sort': 'Compares elements separated by a gap that progressively shrinks down to 1.',
      'Radix Sort (LSD)': 'Sorts data by grouping individual digits starting from the least significant digit.',
      'Cocktail Shaker': 'A bidirectional variation of Bubble Sort that sorts in both directions alternately.',
      'Gnome Sort': 'Similar to Insertion Sort, but moves elements to their proper place by a series of swaps like a garden gnome.',
      'Odd-Even Sort': 'A parallel-friendly sorting algorithm comparing all odd/even indexed pairs alternately.',
      'Insertion Sort': 'Builds the final sorted array one item at a time by inserting elements into place.',
      'Selection Sort': 'Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.',
      'Bubble Sort': 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      'Bucket Sort': 'Distributes elements into buckets, sorts each bucket individually.',
      'Abe Sort': 'A legendary high-speed custom sorting method (optimized wrapper).',
      'Stalin Sort': 'Eliminates any element that is out of order. Brutally efficient!',
      'Bogo Sort': 'Shuffles the array randomly and checks if it is sorted. Pure luck!',
      'Miracle Sort': 'Does nothing and just prays for a miracle that the array is already sorted.'
    }
  },
  ja: {
    appTitle: "Sort Game",
    settingsTitle: "設定",
    languageLabel: "言語 (Language):",
    dataCountLabel: "データ数:",
    maxTriesLabel: "運要素の最大試行回数:",
    volumeLabel: "音量:",
    closeBtn: "閉じる",
    homeBtn: "🏠 ホーム",
    guideBtn: "📖 図鑑",
    guideTitle: "アルゴリズム図鑑",
    setupTitle: "ゲーム設定",
    gameModeLabel: "ゲームモード:",
    modeNormal: "1. 通常（連続バトル）",
    modeRace3: "2. 3点先取（5ラウンド制）",
    modePredictFast: "3. 最速ソート予想",
    modePredictOrder: "4. 少ない順予想",
    playerCountLabel: "プレイヤー人数 (1〜6人):",
    playerNamesHeader: "プレイヤー名:",
    defaultPlayerName: "プレイヤー",
    startGameBtn: "ゲーム開始！",
    currentPhaseLabel: "現在のフェーズ",
    targetDataTitle: "ソート対象データ",
    coverNotice: "他のプレイヤーに画面を見られないようにしてください！",
    showHandBtn: "手札を確認してプレイ",
    handPrompt: "の手札 (カードを1枚選択)",
    predictFastPrompt: "提示された3つのうち、最も速く（手数が少なく）終わるソートを予想せよ：",
    predictOrderPrompt: "提示された3つのソートの「手数の少ない順（1位〜3位）」を予想せよ：",
    turnTitle: "の番",
    cardPlayedNotice: " がカードを裏向きで出しました！ 画面を ",
    raceTitle: "🚀 ソートバトル開始！",
    speedLabel: "速度",
    startRaceBtn: "一斉スタート！",
    stopRaceBtn: "強制停止 / スキップ",
    resultsTitle: "🏆 ラウンド結果発表 🏆",
    nextRoundBtn: "次のラウンドへ",
    waitingStatus: "待機中...",
    opsDone: "✨ 完了！ (手数: ",
    opsLabel: "手数: ",
    inProgressPhase: "ソートバトル進行中！",
    modes: {
      normal: "通常（連続バトル）",
      race3: "3点先取（5ラウンド制）",
      predictFast: "最速ソート予想",
      predictOrder: "少ない順予想"
    },
    cards: {
      'Merge Sort': 'マージソート',
      'Quick Sort': 'クイックソート',
      'Heap Sort': 'ヒープソート',
      'Introsort': 'イントロソート',
      'Timsort': 'ティムソート',
      'Shell Sort': 'シェルソート',
      'Radix Sort (LSD)': '基数ソート(LSD)',
      'Cocktail Shaker': 'カクテルシェーカー',
      'Gnome Sort': 'ノームソート',
      'Odd-Even Sort': '奇偶転置ソート',
      'Insertion Sort': '挿入ソート',
      'Selection Sort': '選択ソート',
      'Bubble Sort': 'バブルソート',
      'Bucket Sort': 'バケットソート',
      'Abe Sort': 'アベソート',
      'Stalin Sort': 'スターリンソート',
      'Bogo Sort': 'ボゴソート',
      'Miracle Sort': 'ミラクルソート'
    },
    descriptions: {
      'Merge Sort': 'データを半分に分割してそれぞれをソートし、綺麗に結合していく効率的なアルゴリズム。',
      'Quick Sort': '基準値（ピボット）を決め、それより小さいグループと大きいグループに分けて高速に並び替える。',
      'Heap Sort': 'ヒープ木構造を利用して、最大値や最小値を効率よく取り出しながら並び替える。',
      'Introsort': '高速なクイックソートから始まり、深くなりすぎるとヒープソートに切り替えて安全性を高めたハイブリッド型。',
      'Timsort': 'マージソートと挿入ソートを組み合わせた実用性重視のアルゴリズム。',
      'Shell Sort': '離れた要素同士を比較・交換しながら、徐々に間隔を狭めて整列していく。',
      'Radix Sort (LSD)': '各桁の数字ごとにバケット（仕分け箱）へ振り分けて並び替える手法。',
      'Cocktail Shaker': 'バブルソートの改良版で、左右交互に往復しながら要素を端に追いやっていく。',
      'Gnome Sort': '庭の小人が間違った順序の鉢植えを前後に動かして並び替えるような可愛いアルゴリズム。',
      'Odd-Even Sort': '奇数番目と偶数番目のペア比較を交互に繰り返す並列処理向けのソート。',
      'Insertion Sort': '正しい位置にカードを1枚ずつ差し込むようにして順番を整えていく。',
      'Selection Sort': '未整列の中から一番小さい（または大きい）ものを選んで先頭に持っていく。',
      'Bubble Sort': '隣り合う要素の大小を比較して入れ替えを繰り返す、最も有名な定番ソート。',
      'Bucket Sort': '値をいくつかのバケット（範囲）に振り分けてから個別に整列する。',
      'Abe Sort': '謎の高速最適化がかかるハイパー仕様のソート。',
      'Stalin Sort': '順序が乱れている要素を容赦なく「粛清（排除）」して強制的に整列させる恐怖のソート。',
      'Bogo Sort': 'ただひたすらランダムにシャッフルし、偶然綺麗に並ぶ奇跡を待ち続けるギャンブルソート。',
      'Miracle Sort': '何もせず、最初から奇跡的に並んでいることを祈り続ける奇跡のロマン枠。'
    }
  }
};

let currentLang = 'en';
let masterVolume = 0.3;
let dataCount = 8;
let maxTriesLimit = 100000;
let currentGameMode = 'normal';
let currentRound = 1;

let lastPlayerWhoPlayed = "";
let animationTimeouts = [];
let isRaceRunning = false;
let playerNamesState = ["Player 1", "Player 2", "Player 3"];

const CARD_PRESETS = [
  { name: 'Merge Sort', count: 2 },
  { name: 'Quick Sort', count: 2 },
  { name: 'Heap Sort', count: 3 },
  { name: 'Introsort', count: 3 },
  { name: 'Timsort', count: 3 },
  { name: 'Shell Sort', count: 4 },
  { name: 'Radix Sort (LSD)', count: 3 },
  { name: 'Cocktail Shaker', count: 4 },
  { name: 'Gnome Sort', count: 4 },
  { name: 'Odd-Even Sort', count: 4 },
  { name: 'Insertion Sort', count: 4 },
  { name: 'Selection Sort', count: 4 },
  { name: 'Bubble Sort', count: 4 },
  { name: 'Bucket Sort', count: 4 },
  { name: 'Abe Sort', count: 2 },
  { name: 'Stalin Sort', count: 2 },
  { name: 'Bogo Sort', count: 4 },
  { name: 'Miracle Sort', count: 2 }
];

let deck = [];
let targetData = [];
let players = []; 
let currentPlayerIndex = 0; 
let playerChoices = []; 
let predictOptions = [];

// 🔊 音量対応 WEB AUDIO API
let audioCtx = null;
function playSound(type) {
  if (masterVolume <= 0) return;

  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'step') {
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05 * masterVolume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'finish') {
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2 * masterVolume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    }
  } catch (e) {}
}

// ⚙️ 設定 & ガイド UI の処理
const openSettingsBtn = document.getElementById('open-settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const settingsModal = document.getElementById('settings-modal');
const homeBtn = document.getElementById('home-btn');
const gameModeSelect = document.getElementById('game-mode-select');

const guideBtn = document.getElementById('guide-btn');
const closeGuideBtn = document.getElementById('close-guide-btn');
const guideModal = document.getElementById('guide-modal');
const guideList = document.getElementById('guide-list');

openSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
closeSettingsBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));

guideBtn.addEventListener('click', () => {
  renderGuideList();
  guideModal.classList.remove('hidden');
});
closeGuideBtn.addEventListener('click', () => guideModal.classList.add('hidden'));

function renderGuideList() {
  const t = TRANSLATIONS[currentLang];
  guideList.innerHTML = '';
  const uniqueCards = [...new Set(CARD_PRESETS.map(c => c.name))];
  uniqueCards.forEach(cardKey => {
    const cardName = t.cards[cardKey] || cardKey;
    const cardDesc = t.descriptions[cardKey] || 'No description available.';
    
    const itemEl = document.createElement('div');
    itemEl.style.marginBottom = '15px';
    itemEl.style.paddingBottom = '10px';
    itemEl.style.borderBottom = '1px solid #eee';
    itemEl.innerHTML = `<strong style="font-size: 16px; color: #2c3e50;">${cardName}</strong><p style="margin: 5px 0 0 0; font-size: 14px; color: #555;">${cardDesc}</p>`;
    guideList.appendChild(itemEl);
  });
}

homeBtn.addEventListener('click', () => {
  isRaceRunning = false;
  animationTimeouts.forEach(id => clearTimeout(id));
  animationTimeouts = [];

  document.getElementById('game-main-screen').classList.add('hidden');
  document.getElementById('race-section').classList.add('hidden');
  document.getElementById('next-phase-section').classList.add('hidden');
  document.getElementById('setup-screen').classList.remove('hidden');
  homeBtn.classList.add('hidden');
});

const langSelect = document.getElementById('lang-select');
const dataCountSelect = document.getElementById('data-count-select');
const maxTriesSelect = document.getElementById('max-tries-select');
const volumeRange = document.getElementById('volume-range');
const volumeValue = document.getElementById('volume-value');

langSelect.addEventListener('change', (e) => {
  currentLang = e.target.value;
  applyLanguage();
  if (!guideModal.classList.contains('hidden')) {
    renderGuideList();
  }
});

dataCountSelect.addEventListener('change', (e) => {
  dataCount = parseInt(e.target.value) || 8;
});

maxTriesSelect.addEventListener('change', (e) => {
  maxTriesLimit = parseInt(e.target.value) || 100000;
});

gameModeSelect.addEventListener('change', (e) => {
  currentGameMode = e.target.value;
});

volumeRange.addEventListener('input', (e) => {
  masterVolume = parseFloat(e.target.value);
  volumeValue.textContent = `${Math.round(masterVolume * 100)}%`;
});

function applyLanguage() {
  const t = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  updateNameInputFields();
}

// 👥 プレイヤー入力枠生成
const playerCountInput = document.getElementById('player-count-input');
const playerNameInputsContainer = document.getElementById('player-name-inputs');

function updateNameInputFields() {
  const count = parseInt(playerCountInput.value) || 3;
  const currentInputs = playerNameInputsContainer.querySelectorAll('input');
  currentInputs.forEach((input, index) => {
    if (index < playerNamesState.length) {
      playerNamesState[index] = input.value;
    }
  });

  const t = TRANSLATIONS[currentLang];
  playerNameInputsContainer.innerHTML = `<strong>${t.playerNamesHeader}</strong><br>`;
  
  for (let i = 0; i < count; i++) {
    if (playerNamesState.length <= i) {
      playerNamesState.push(`${t.defaultPlayerName} ${i + 1}`);
    }
    const val = playerNamesState[i];
    const row = document.createElement('div');
    row.className = 'name-input-row';
    row.innerHTML = `<label>P${i + 1}: <input type="text" id="player-name-${i}" value="${val}"></label>`;
    
    const inputEl = row.querySelector('input');
    inputEl.addEventListener('input', (e) => {
      playerNamesState[i] = e.target.value;
    });

    playerNameInputsContainer.appendChild(row);
  }
}

playerCountInput.addEventListener('input', updateNameInputFields);
updateNameInputFields();

// 🎮 ゲーム開始
document.getElementById('start-game-btn').addEventListener('click', () => {
  const count = parseInt(playerCountInput.value);
  const t = TRANSLATIONS[currentLang];
  if (count < 1 || count > 6) return alert('1〜6人で設定してください。');
  
  players = [];
  for (let i = 0; i < count; i++) {
    const inputEl = document.getElementById(`player-name-${i}`);
    const name = inputEl && inputEl.value.trim() !== "" ? inputEl.value.trim() : `${t.defaultPlayerName} ${i + 1}`;
    players.push({ id: i + 1, name: name, hand: [], score: 0, wins: 0 });
  }
  
  currentRound = 1;
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('game-main-screen').classList.remove('hidden');
  homeBtn.classList.remove('hidden');

  document.getElementById('mode-info-badge').textContent = t.modes[currentGameMode];
  
  if (currentGameMode === 'normal' || currentGameMode === 'race3') {
    createDeck();
    players.forEach(p => {
      p.hand = [];
      for (let i = 0; i < 3; i++) {
        if (deck.length === 0) createDeck();
        p.hand.push(deck.pop());
      }
    });
  }

  lastPlayerWhoPlayed = "";
  startNewRound();
});

function createDeck() {
  deck = [];
  CARD_PRESETS.forEach(item => {
    for (let i = 0; i < item.count; i++) deck.push(item.name);
  });
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function generateTargetData() {
  targetData = [];
  for (let i = 0; i < dataCount; i++) targetData.push(Math.floor(Math.random() * 90) + 10);
  renderSingleChart('chart-container', targetData, [], []);
}

function renderSingleChart(containerId, dataArray, activeIndices = [], highlightIndices = [], isFinished = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  dataArray.forEach((val, idx) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${val * 2}px`;
    if (isFinished) {
      bar.style.backgroundColor = '#27ae60';
    } else if (activeIndices.includes(idx)) {
      bar.style.backgroundColor = '#e74c3c';
    } else if (highlightIndices.includes(idx)) {
      bar.style.backgroundColor = '#f1c40f';
    }
    container.appendChild(bar);
  });
}

function startNewRound() {
  generateTargetData();
  playerChoices = [];
  currentPlayerIndex = 0;
  lastPlayerWhoPlayed = "";

  if (currentGameMode === 'predictFast' || currentGameMode === 'predictOrder') {
    let shuffledCards = [...CARD_PRESETS].sort(() => Math.random() - 0.5);
    predictOptions = [shuffledCards[0].name, shuffledCards[1].name, shuffledCards[2].name];
  }

  updateTurnScreen();
}

function updateTurnScreen() {
  const t = TRANSLATIONS[currentLang];
  const p = players[currentPlayerIndex];
  
  let roundText = (currentGameMode === 'race3') ? ` (Round ${currentRound}/5)` : '';
  document.getElementById('phase-name').textContent = p.name + t.turnTitle + roundText;
  document.getElementById('current-player-title').textContent = p.name + t.turnTitle;

  const subMsg = document.getElementById('turn-sub-message');
  if (lastPlayerWhoPlayed !== "") {
    subMsg.textContent = `${lastPlayerWhoPlayed}${t.cardPlayedNotice}${p.name}!`;
  } else {
    subMsg.textContent = t.coverNotice;
  }

  document.getElementById('cover-screen').classList.remove('hidden');
  document.getElementById('action-screen').classList.add('hidden');
}

document.getElementById('show-hand-btn').addEventListener('click', () => {
  const t = TRANSLATIONS[currentLang];
  document.getElementById('cover-screen').classList.add('hidden');
  document.getElementById('action-screen').classList.remove('hidden');
  const p = players[currentPlayerIndex];
  
  const handContainer = document.getElementById('hand-container');
  handContainer.innerHTML = '';

  if (currentGameMode === 'normal' || currentGameMode === 'race3') {
    document.getElementById('action-prompt-title').textContent = p.name + t.handPrompt;
    p.hand.forEach((cardName, cardIndex) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'card';
      cardEl.textContent = t.cards[cardName] || cardName;
      cardEl.addEventListener('click', () => selectCard(cardIndex));
      handContainer.appendChild(cardEl);
    });
  } else if (currentGameMode === 'predictFast') {
    document.getElementById('action-prompt-title').textContent = p.name + `: ${t.predictFastPrompt}`;
    predictOptions.forEach(cardName => {
      const cardEl = document.createElement('div');
      cardEl.className = 'card';
      cardEl.style.width = '120px';
      cardEl.textContent = t.cards[cardName] || cardName;
      cardEl.addEventListener('click', () => selectPredictFast(cardName));
      handContainer.appendChild(cardEl);
    });
  } else if (currentGameMode === 'predictOrder') {
    document.getElementById('action-prompt-title').textContent = p.name + `: ${t.predictOrderPrompt} (Pick 1st place)`;
    let selectedOrder = [];
    
    function renderOrderPicker() {
      handContainer.innerHTML = '';
      predictOptions.forEach(cardName => {
        if (selectedOrder.includes(cardName)) return;
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.style.width = '120px';
        cardEl.textContent = t.cards[cardName] || cardName;
        cardEl.addEventListener('click', () => {
          selectedOrder.push(cardName);
          if (selectedOrder.length < 3) {
            document.getElementById('action-prompt-title').textContent = p.name + `: ${t.predictOrderPrompt} (Pick ${selectedOrder.length + 1}nd/rd place)`;
            renderOrderPicker();
          } else {
            selectPredictOrder(selectedOrder);
          }
        });
        handContainer.appendChild(cardEl);
      });
    }
    renderOrderPicker();
  }
});

function selectCard(cardIndex) {
  const p = players[currentPlayerIndex];
  const chosen = p.hand.splice(cardIndex, 1)[0];
  playerChoices.push({ playerName: p.name, card: chosen });

  if (deck.length === 0) createDeck();
  p.hand.push(deck.pop());

  lastPlayerWhoPlayed = p.name;
  currentPlayerIndex++;
  
  if (currentPlayerIndex < players.length) {
    updateTurnScreen();
  } else {
    prepareRacePhase();
  }
}

function selectPredictFast(chosenCard) {
  const p = players[currentPlayerIndex];
  playerChoices.push({ playerName: p.name, card: chosenCard, prediction: chosenCard });

  lastPlayerWhoPlayed = p.name;
  currentPlayerIndex++;

  if (currentPlayerIndex < players.length) {
    updateTurnScreen();
  } else {
    playerChoices = predictOptions.map((card, idx) => ({
      playerName: `Option ${idx + 1}`,
      card: card
    }));
    prepareRacePhase();
  }
}

function selectPredictOrder(orderArray) {
  const p = players[currentPlayerIndex];
  playerChoices.push({ playerName: p.name, card: orderArray[0], predictionOrder: orderArray });

  lastPlayerWhoPlayed = p.name;
  currentPlayerIndex++;

  if (currentPlayerIndex < players.length) {
    updateTurnScreen();
  } else {
    playerChoices = predictOptions.map((card, idx) => ({
      playerName: `Option ${idx + 1}`,
      card: card
    }));
    prepareRacePhase();
  }
}

// 🧮 アルゴリズムの実行処理
function getSortSteps(cardName, originalData) {
  let arr = [...originalData];
  let steps = [];
  let ops = 0;
  let isSorted = a => {
    for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i+1]) return false;
    return true;
  };

  steps.push({ array: [...arr], active: [], highlight: [], msg: 'Ready' });

  const stepSkip = maxTriesLimit >= 10000 ? Math.floor(maxTriesLimit / 200) : (maxTriesLimit > 1000 ? 5 : 1);

  switch (cardName) {
    case 'Bubble Sort':
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          ops++;
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'Comparing' });
          if (arr[j] > arr[j+1]) {
            let tmp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = tmp;
            ops++;
            steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'Swapping' });
          }
        }
      }
      break;

    case 'Selection Sort':
      for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
          ops++;
          steps.push({ array: [...arr], active: [min, j], highlight: [], msg: 'Finding min' });
          if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) {
          let tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp;
          ops++;
          steps.push({ array: [...arr], active: [i, min], highlight: [], msg: 'Swapping' });
        }
      }
      break;

    case 'Insertion Sort':
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0) {
          ops++;
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'Searching position' });
          if (arr[j] > key) { arr[j+1] = arr[j]; ops++; j--; } else break;
        }
        arr[j+1] = key;
      }
      break;

    case 'Quick Sort':
      function qs(sub) {
        if (sub.length <= 1) return sub;
        let pivot = sub[Math.floor(sub.length / 2)];
        let left = [], right = [], eq = [];
        for (let x of sub) {
          ops++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'Partitioning' });
          if (x < pivot) left.push(x); else if (x > pivot) right.push(x); else eq.push(x);
        }
        return [...qs(left), ...eq, ...qs(right)];
      }
      arr = qs(arr);
      break;

    case 'Merge Sort':
      function ms(sub) {
        if (sub.length <= 1) return sub;
        let mid = Math.floor(sub.length / 2);
        return merge(ms(sub.slice(0, mid)), ms(sub.slice(mid)));
      }
      function merge(l, r) {
        let res = [], i = 0, j = 0;
        while (i < l.length && j < r.length) {
          ops++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'Merging' });
          if (l[i] <= r[j]) res.push(l[i++]); else res.push(r[j++]);
        }
        return [...res, ...l.slice(i), ...r.slice(j)];
      }
      arr = ms(arr);
      break;

    case 'Heap Sort':
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          ops++;
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            ops++;
          }
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'Building heap' });
        }
      }
      arr.sort((a,b) => a-b);
      break;

    case 'Introsort':
      ops += 5;
      arr.sort((a, b) => { ops++; return a - b; });
      steps.push({ array: [...arr], active: [], highlight: [], msg: 'Intro optimized' });
      break;

    case 'Timsort':
      ops += 3;
      arr.sort((a, b) => { ops++; return a - b; });
      steps.push({ array: [...arr], active: [], highlight: [], msg: 'Tim optimized' });
      break;

    case 'Shell Sort':
      let gap = Math.floor(arr.length / 2);
      while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
          let temp = arr[i], j = i;
          while (j >= gap && arr[j - gap] > temp) {
            ops++;
            arr[j] = arr[j - gap];
            j -= gap;
          }
          arr[j] = temp;
          ops++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: `Gap (${gap}) sort` });
        }
        gap = Math.floor(gap / 2);
      }
      break;

    case 'Radix Sort (LSD)':
      for (let digit = 0; digit < 2; digit++) {
        ops += arr.length;
        arr.sort((a,b) => a-b);
        steps.push({ array: [...arr], active: [], highlight: [], msg: `Bucket sorting` });
      }
      break;

    case 'Cocktail Shaker':
      let left = 0, right = arr.length - 1;
      while (left < right) {
        for (let i = left; i < right; i++) {
          ops++;
          if (arr[i] > arr[i+1]) { [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; ops++; }
        }
        right--;
        for (let i = right; i > left; i--) {
          ops++;
          if (arr[i] < arr[i-1]) { [arr[i], arr[i-1]] = [arr[i-1], arr[i]]; ops++; }
        }
        left++;
        steps.push({ array: [...arr], active: [], highlight: [], msg: 'Shaking back & forth' });
      }
      break;

    case 'Gnome Sort':
      let index = 0;
      while (index < arr.length) {
        ops++;
        if (index === 0) index++;
        if (arr[index] >= arr[index - 1]) {
          index++;
        } else {
          [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
          ops++;
          index--;
          steps.push({ array: [...arr], active: [index, index+1], highlight: [], msg: 'Gnome steps back' });
        }
      }
      break;

    case 'Odd-Even Sort':
      let sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 1; i < arr.length - 1; i += 2) {
          ops++;
          if (arr[i] > arr[i+1]) { [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; sorted = false; ops++; }
        }
        for (let i = 0; i < arr.length - 1; i += 2) {
          ops++;
          if (arr[i] > arr[i+1]) { [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; sorted = false; ops++; }
        }
        steps.push({ array: [...arr], active: [], highlight: [], msg: 'Odd-even pair comparison' });
      }
      break;

    case 'Bucket Sort':
      for (let x of arr) ops++;
      arr.sort((a, b) => { ops += 2; return a - b; });
      break;

    case 'Stalin Sort':
      {
        let stalin = [arr[0]];
        steps.push({ array: [...arr], active: [0], highlight: [], msg: 'Purge check' });
        for (let i = 1; i < arr.length; i++) {
          ops++;
          if (arr[i] >= stalin[stalin.length - 1]) {
            stalin.push(arr[i]);
            steps.push({ array: [...arr], active: [i], highlight: [], msg: 'Passed!' });
          } else {
            ops += 5;
            steps.push({ array: [...arr], active: [i], highlight: [], msg: 'Purged!' });
          }
        }
        arr = stalin;
      }
      break;

    case 'Abe Sort':
      ops = 4;
      arr.sort((a, b) => a - b);
      break;

    case 'Bogo Sort':
      {
        let tries = 0;
        while (!isSorted(arr) && tries < maxTriesLimit) {
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            ops++;
          }
          tries++;
          if (tries % stepSkip === 0 || tries === maxTriesLimit) {
            steps.push({ array: [...arr], active: [], highlight: [], msg: `Bogo shuffle (${tries}/${maxTriesLimit})` });
          }
        }
        if (!isSorted(arr)) {
          ops += 1000000;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'Timeout!' });
        }
      }
      break;

    case 'Miracle Sort':
      {
        let tries = 0;
        let success = false;
        while (tries < maxTriesLimit && !success) {
          tries++;
          ops++;
          if (isSorted(arr)) { success = true; break; }
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          if (tries % stepSkip === 0 || tries === maxTriesLimit) {
            steps.push({ array: [...arr], active: [], highlight: [], msg: `Praying for a miracle... (${tries}/${maxTriesLimit})` });
          }
        }
        if (!success) {
          ops += 9999999;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'No miracle occurred...' });
        } else {
          steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: '✨ A miracle happened! ✨' });
        }
      }
      break;
  }
  steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: 'Complete!' });
  return { steps, ops };
}

// 🏁 レース画面
function prepareRacePhase() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById('phase-name').textContent = t.inProgressPhase;
  document.getElementById('game-board').classList.add('hidden');
  document.getElementById('pass-and-play-section').classList.add('hidden');
  
  const raceSection = document.getElementById('race-section');
  raceSection.classList.remove('hidden');
  
  const racersContainer = document.getElementById('racers-container');
  racersContainer.innerHTML = '';

  playerChoices.forEach((choice, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'racer-card';
    const localizedCardName = t.cards[choice.card] || choice.card;
    cardDiv.innerHTML = `
      <h3>${choice.playerName}</h3>
      <p>Card: <strong>${localizedCardName}</strong></p>
      <div id="chart-racer-${idx}" class="chart-box"></div>
      <p id="status-racer-${idx}" style="font-size: 14px; color: #666;">${t.waitingStatus}</p>
    `;
    racersContainer.appendChild(cardDiv);
    
    renderSingleChart(`chart-racer-${idx}`, targetData, [], []);
  });

  const startBtn = document.getElementById('start-race-btn');
  const stopBtn = document.getElementById('stop-race-btn');
  startBtn.style.display = 'inline-block';
  stopBtn.classList.add('hidden');

  startBtn.onclick = () => {
    startBtn.style.display = 'none';
    stopBtn.classList.remove('hidden');
    startAllRaces();
  };

  stopBtn.onclick = () => {
    stopAllRaces();
  };
}

function startAllRaces() {
  animationTimeouts = [];
  isRaceRunning = true;
  let finishedCount = 0;
  let activeRacersCount = playerChoices.length;
  let results = [];
  const t = TRANSLATIONS[currentLang];

  playerChoices.forEach((choice, idx) => {
    const { steps, ops } = getSortSteps(choice.card, targetData);
    results.push({ playerName: choice.playerName, card: choice.card, score: ops });

    let stepIdx = 0;
    function runStep() {
      if (!isRaceRunning) return;

      const baseSpeed = parseFloat(document.getElementById('speed-select').value) || 1;
      const remainingBonus = (playerChoices.length - activeRacersCount) * 5;
      const currentSpeed = Math.max(1, baseSpeed + remainingBonus);
      const delay = Math.max(1, 50 / currentSpeed);

      if (stepIdx < steps.length) {
        const s = steps[stepIdx];
        const isFin = (stepIdx === steps.length - 1);
        renderSingleChart(`chart-racer-${idx}`, s.array, s.active, s.highlight, isFin);
        
        document.getElementById(`status-racer-${idx}`).textContent = s.msg;
        
        if (currentSpeed < 100) playSound('step');
        stepIdx++;
        let timeoutId = setTimeout(runStep, delay);
        animationTimeouts.push(timeoutId);
      } else {
        playSound('finish');
        document.getElementById(`status-racer-${idx}`).innerHTML = `${t.opsDone}${ops})`;
        
        finishedCount++;
        activeRacersCount--;
        
        if (finishedCount === playerChoices.length) {
          isRaceRunning = false;
          document.getElementById('stop-race-btn').classList.add('hidden');
          setTimeout(() => showFinalResults(results), 500);
        }
      }
    }
    runStep();
  });
}

function stopAllRaces() {
  if (!isRaceRunning) return;
  isRaceRunning = false;

  animationTimeouts.forEach(id => clearTimeout(id));
  animationTimeouts = [];

  let results = playerChoices.map(choice => {
    const { ops } = getSortSteps(choice.card, targetData);
    return { playerName: choice.playerName, card: choice.card, score: ops };
  });

  document.getElementById('stop-race-btn').classList.add('hidden');
  showFinalResults(results);
}

function showFinalResults(results) {
  const t = TRANSLATIONS[currentLang];
  document.getElementById('race-section').classList.add('hidden');
  results.sort((a, b) => a.score - b.score);

  const summary = document.getElementById('result-summary');
  summary.innerHTML = '';

  if (currentGameMode === 'normal' || currentGameMode === 'race3') {
    results.sort((a, b) => a.score - b.score);
    let roundWinner = results[0].playerName;

    if (currentGameMode === 'race3') {
      let winnerObj = players.find(p => p.name === roundWinner);
      if (winnerObj) winnerObj.wins++;
    }

    results.forEach((res, i) => {
      let rankEmoji = i === 0 ? '👑 1st:' : `${i + 1}th:`;
      const localizedCardName = t.cards[res.card] || res.card;
      summary.innerHTML += `<p>${rankEmoji} <strong>${res.playerName}</strong> (${localizedCardName}) - ${t.opsLabel}${res.score}</p>`;
    });

    if (currentGameMode === 'race3') {
      summary.innerHTML += `<hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;"><strong>[Win Counts]</strong><br>`;
      players.forEach(p => {
        summary.innerHTML += `${p.name}: <strong>${p.wins} wins</strong><br>`;
      });

      let champion = players.find(p => p.wins >= 3);
      if (champion || currentRound >= 5) {
        let text = champion ? `🎉 ${champion.name} Wins the Game!` : `🏁 Game Over!`;
        summary.innerHTML += `<h3 style="color: #e74c3c; margin-top: 10px;">${text}</h3>`;
        document.getElementById('next-action-btn').textContent = t.startGameBtn;
        document.getElementById('next-action-btn').onclick = () => {
          document.getElementById('next-phase-section').classList.add('hidden');
          document.getElementById('setup-screen').classList.remove('hidden');
          homeBtn.classList.add('hidden');
        };
        document.getElementById('next-phase-section').classList.remove('hidden');
        return;
      }
    }
  } else if (currentGameMode === 'predictFast') {
    let fastestCard = results[0].card;
    summary.innerHTML = `<h3>Fastest: ${t.cards[fastestCard] || fastestCard}</h3>`;
    playerChoices.forEach(choice => {
      let isCorrect = (choice.prediction === fastestCard);
      let mark = isCorrect ? '⭕ 正解 (+1pt)' : '❌ 不正解';
      if (isCorrect) {
        let pObj = players.find(p => p.name === choice.playerName);
        if (pObj) pObj.score++;
      }
      summary.innerHTML += `<p><strong>${choice.playerName}</strong> guessed [${t.cards[choice.prediction] || choice.prediction}] - ${mark}</p>`;
    });
    summary.innerHTML += `<hr><strong>Scores:</strong><br>`;
    players.forEach(p => { summary.innerHTML += `${p.name}: ${p.score} pts<br>`; });
  } else if (currentGameMode === 'predictOrder') {
    let actualOrder = results.map(r => r.card);
    summary.innerHTML = `<h3>Actual Order: 1st: ${t.cards[actualOrder[0]]}, 2nd: ${t.cards[actualOrder[1]]}, 3rd: ${t.cards[actualOrder[2]]}</h3>`;
    playerChoices.forEach(choice => {
      let matchCount = 0;
      choice.predictionOrder.forEach((card, idx) => {
        if (card === actualOrder[idx]) matchCount++;
      });
      let pts = matchCount === 3 ? 3 : (matchCount > 0 ? 1 : 0);
      let pObj = players.find(p => p.name === choice.playerName);
      if (pObj) pObj.score += pts;
      summary.innerHTML += `<p><strong>${choice.playerName}</strong> got ${matchCount}/3 correct (+${pts} pts)</p>`;
    });
    summary.innerHTML += `<hr><strong>Scores:</strong><br>`;
    players.forEach(p => { summary.innerHTML += `${p.name}: ${p.score} pts<br>`; });
  }

  document.getElementById('next-action-btn').textContent = t.nextRoundBtn;
  document.getElementById('next-action-btn').onclick = () => {
    document.getElementById('next-phase-section').classList.add('hidden');
    document.getElementById('start-race-btn').style.display = 'inline-block';
    document.getElementById('stop-race-btn').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');
    document.getElementById('pass-and-play-section').classList.remove('hidden');
    
    if (currentGameMode === 'normal' || currentGameMode === 'race3') {
      currentRound++;
    }
    startNewRound();
  };

  document.getElementById('next-phase-section').classList.remove('hidden');
}