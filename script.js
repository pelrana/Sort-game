// 多言語テキスト辞書 (i18n)
const TRANSLATIONS = {
  en: {
    appTitle: "Sort Game",
    settingsBtn: "Settings",
    settingsTitle: "Settings",
    languageLabel: "Language:",
    dataCountLabel: "Data Count:",
    maxTriesLabel: "Luck-based Max Tries:",
    volumeLabel: "Volume:",
    closeBtn: "Close",
    homeBtn: "Home",
    guideBtn: "Guide",
    guideTitle: "Algorithm Guide",
    setupTitle: "Game Settings",
    gameModeLabel: "Game Mode:",
    modeNormal: "1. Continuous Normal Battle",
    modeRace3: "2. First to 3 Points",
    modePredictFast: "3. Predict Fastest Sort",
    modePredictOrder: "4. Predict Fewest Ops Order",
    playerCountLabel: "Number of Players (1–6):",
    playerNamesHeader: "Player Names:",
    defaultPlayerName: "Player",
    startGameBtn: "Start Game",
    currentPhaseLabel: "Current Phase",
    targetDataTitle: "Target Data",
    coverNotice: "Make sure others aren't looking at your screen",
    showHandBtn: "Check Hand & Play",
    handPrompt: "'s Hand (Choose 1 card)",
    predictFastPrompt: "Choose the FASTEST sorting algorithm (Fewest Operations):",
    predictOrderPrompt: "Choose your rank prediction for these 3 algorithms:",
    turnTitle: "'s Turn",
    cardPlayedNotice: " played a card face-down. Pass the device to ",
    raceTitle: "Sort Battle Start",
    speedLabel: "Speed",
    startRaceBtn: "Start All",
    stopRaceBtn: "Stop / Skip",
    resultsTitle: "Round Results",
    nextRoundBtn: "Next Round",
    waitingStatus: "Waiting...",
    opsDone: "Done (Operations: ",
    opsLabel: "Operations: ",
    inProgressPhase: "Sort Battle in Progress",
    modes: {
      normal: "Normal (Continuous)",
      race3: "First to 3 Points",
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
      'Merge Sort': 'An algorithm that divides data into halves, sorts each half, and merges them cleanly back together.',
      'Quick Sort': 'An algorithm that picks a pivot, partitions data into smaller and larger groups, and sorts them quickly.',
      'Heap Sort': 'An algorithm that uses a binary heap structure to sort elements while extracting values efficiently.',
      'Introsort': 'An algorithm that starts with Quick Sort and switches to Heap Sort when recursion goes too deep.',
      'Timsort': 'An algorithm that combines Merge Sort and Insertion Sort.',
      'Shell Sort': 'An algorithm that compares and swaps distant elements while gradually shrinking the gap.',
      'Radix Sort (LSD)': 'An algorithm that distributes data into buckets digit by digit.',
      'Cocktail Shaker': 'An algorithm that improves on Bubble Sort by sweeping back and forth in both directions.',
      'Gnome Sort': 'A cute algorithm that moves elements back and forth like a garden gnome arranging flowerpots.',
      'Odd-Even Sort': 'A parallel-friendly algorithm that repeatedly compares odd and even indexed pairs alternately.',
      'Insertion Sort': 'An algorithm that sorts by inserting cards into their proper position one by one.',
      'Selection Sort': 'An algorithm that repeatedly picks the smallest (or largest) remaining element and moves it to the front.',
      'Bubble Sort': 'The most famous algorithm that repeatedly compares adjacent elements and swaps them when out of order.',
      'Bucket Sort': 'An algorithm that distributes values into buckets by range and sorts each bucket individually.',
      'Abe Sort': 'A wonderful sort that tampers with the data.',
      'Stalin Sort': 'A sort that eliminates elements that are out of order.',
      'Bogo Sort': 'A gambling sort that keeps waiting for the miracle of elements lining up cleanly by chance.',
      'Miracle Sort': 'A sort whose execution count is determined by faith in God.'
    }
    
  },
  ja: {
    appTitle: "Sort Game",
    settingsBtn: "設定",
    settingsTitle: "設定",
    languageLabel: "言語 (Language):",
    dataCountLabel: "データ数:",
    maxTriesLabel: "運要素の最大試行回数:",
    volumeLabel: "音量:",
    closeBtn: "閉じる",
    homeBtn: "ホーム",
    guideBtn: "図鑑",
    guideTitle: "アルゴリズム図鑑",
    setupTitle: "ゲーム設定",
    gameModeLabel: "ゲームモード:",
    modeNormal: "1. 通常（連続バトル）",
    modeRace3: "2. 3ポイント先取バトル",
    modePredictFast: "3. 最速ソート予想",
    modePredictOrder: "4. 少ない順予想",
    playerCountLabel: "プレイヤー人数 (1〜6人):",
    playerNamesHeader: "プレイヤー名:",
    defaultPlayerName: "プレイヤー",
    startGameBtn: "ゲーム開始",
    currentPhaseLabel: "現在のフェーズ",
    targetDataTitle: "ソート対象データ",
    coverNotice: "他のプレイヤーに画面を見られないようにしてください",
    showHandBtn: "手札を確認してプレイ",
    handPrompt: "の手札 (カードを1枚選択)",
    predictFastPrompt: "提示された3つのうち、最も速く（手数が少なく）終わるソートを予想せよ",
    predictOrderPrompt: "提示された3つのソートの手数の少ない順（1位〜3位）を予想せよ",
    turnTitle: "の番",
    cardPlayedNotice: " がカードを裏向きで出しました。画面を ",
    raceTitle: "ソートバトル開始",
    speedLabel: "速度",
    startRaceBtn: "一斉スタート",
    stopRaceBtn: "強制停止 / スキップ",
    resultsTitle: "ラウンド結果発表",
    nextRoundBtn: "次のラウンドへ",
    waitingStatus: "待機中...",
    opsDone: "完了 (手数: ",
    opsLabel: "手数: ",
    inProgressPhase: "ソートバトル進行中",
    modes: {
      normal: "通常（連続バトル）",
      race3: "3ポイント先取バトル",
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
      'Merge Sort': 'データを半分に分割してそれぞれをソートし、綺麗に結合していくアルゴリズム。',
      'Quick Sort': '基準値（ピボット）を決め、それより小さいグループと大きいグループに分けて高速に並び替えるアルゴリズム。',
      'Heap Sort': 'ヒープ木構造を利用して、最大値や最小値を効率よく取り出しながら並び替えるアルゴリズム。',
      'Introsort': '高速なクイックソートから始まり、深くなりすぎるとヒープソートに切り替えるアルゴリズム。',
      'Timsort': 'マージソートと挿入ソートを組み合わせたアルゴリズム。',
      'Shell Sort': '離れた要素同士を比較・交換しながら、徐々に間隔を狭めて整列していくアルゴリズム。',
      'Radix Sort (LSD)': '各桁の数字ごとにバケット（仕分け箱）へ振り分けて並び替えるアルゴリズム。',
      'Cocktail Shaker': 'バブルソートの改良版で、左右交互に往復しながら要素を端に追いやっていくアルゴリズム。',
      'Gnome Sort': '庭の小人が間違った順序の鉢植えを前後に動かして並び替えるような可愛いアルゴリズム。',
      'Odd-Even Sort': '奇数番目と偶数番目のペア比較を交互に繰り返す並列処理向けのアルゴリズム。',
      'Insertion Sort': '正しい位置にカードを1枚ずつ差し込むようにして順番を整えていくアルゴリズム。',
      'Selection Sort': '未整列の中から一番小さい（または大きい）ものを選んで先頭に持っていくアルゴリズム。',
      'Bubble Sort': '隣り合う要素の大小を比較して入れ替えを繰り返す、最も有名なアルゴリズム。',
      'Bucket Sort': '値をいくつかのバケット（範囲）に振り分けてから個別に整列するアルゴリズム。',
      'Abe Sort': 'データの改ざんを行う素晴らしいソート。',
      'Stalin Sort': '順序が乱れている要素を排除していくソート。',
      'Bogo Sort': '偶然綺麗に並ぶ奇跡を待ち続けるギャンブルソート。',
      'Miracle Sort': '神への信仰度によって実行回数が決まるソート。'
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
let lastPredictOptions = [];

const CARD_PRESETS = [
  { name: 'Merge Sort', count: 1 },
  { name: 'Quick Sort', count: 1 },
  { name: 'Heap Sort', count: 2 },
  { name: 'Introsort', count: 2 },
  { name: 'Timsort', count: 2 },
  { name: 'Shell Sort', count: 2 },
  { name: 'Radix Sort (LSD)', count: 2 },
  { name: 'Cocktail Shaker', count: 2 },
  { name: 'Gnome Sort', count: 2 },
  { name: 'Odd-Even Sort', count: 2 },
  { name: 'Insertion Sort', count: 2 },
  { name: 'Selection Sort', count: 2 },
  { name: 'Bubble Sort', count: 2 },
  { name: 'Bucket Sort', count: 2 },
  { name: 'Abe Sort', count: 1 },
  { name: 'Stalin Sort', count: 1 },
  { name: 'Bogo Sort', count: 2 },
  { name: 'Miracle Sort', count: 1 }
];

let deck = [];
let targetData = [];
let players = [];
let currentPlayerIndex = 0;
let playerChoices = [];
let playerPredictions = [];
let predictOptions = [];

// 音量対応 WEB AUDIO API
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

// 設定 & ガイド UI の処理
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
    itemEl.innerHTML = `<strong style="font-size: 16px; color: #1d1d1f;">${cardName}</strong><p style="margin: 5px 0 0 0; font-size: 14px; color: #86868b;">${cardDesc}</p>`;
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

// プレイヤー入力枠生成
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

// ゲーム開始
document.getElementById('start-game-btn').addEventListener('click', () => {
  const count = parseInt(playerCountInput.value);
  const t = TRANSLATIONS[currentLang];
  if (count < 1 || count > 6) return alert('1〜6人で設定してください。');

  players = [];
  for (let i = 0; i < count; i++) {
    const inputEl = document.getElementById(`player-name-${i}`);
    const name = inputEl && inputEl.value.trim() !== "" ? inputEl.value.trim() : `${t.defaultPlayerName} ${i + 1}`;
    players.push({ id: i + 1, name: name, hand: [], score: 0, points: 0 });
  }

  currentRound = 1;
  lastPredictOptions = [];
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('game-main-screen').classList.remove('hidden');
  homeBtn.classList.remove('hidden');

  document.getElementById('mode-info-badge').textContent = t.modes[currentGameMode];

  if (currentGameMode === 'normal' || currentGameMode === 'race3') {
    createDeck();
    players.forEach(p => {
      p.hand = [];
      for (let i = 0; i < 3; i++) {
        p.hand.push(drawCardAvoidDuplicate(p.hand));
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

function drawCardAvoidDuplicate(currentHand = []) {
  if (deck.length === 0) {
    createDeck();
  }
  const nonDuplicateIdx = deck.findIndex(card => !currentHand.includes(card));
  if (nonDuplicateIdx !== -1) {
    return deck.splice(nonDuplicateIdx, 1)[0];
  }
  return deck.pop();
}

function pickPredictOptions() {
  const pool = CARD_PRESETS.map(c => c.name);
  const filtered = pool.filter(name => !lastPredictOptions.includes(name));
  const source = filtered.length >= 3 ? filtered : pool;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, 3);
  lastPredictOptions = picked;
  return picked;
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
    bar.style.height = `${val}%`;
    if (isFinished) {
      bar.style.backgroundColor = '#34c759';
    } else if (activeIndices.includes(idx)) {
      bar.style.backgroundColor = '#ff3b30';
    } else if (highlightIndices.includes(idx)) {
      bar.style.backgroundColor = '#ffcc00';
    }
    container.appendChild(bar);
  });
}

function startNewRound() {
  generateTargetData();
  playerChoices = [];
  playerPredictions = [];
  currentPlayerIndex = 0;
  lastPlayerWhoPlayed = "";

  if (currentGameMode === 'predictFast' || currentGameMode === 'predictOrder') {
    predictOptions = pickPredictOptions();
  }

  updateTurnScreen();
}

function updateTurnScreen() {
  const t = TRANSLATIONS[currentLang];
  const p = players[currentPlayerIndex];

  let roundText = ` (Round ${currentRound})`;
  document.getElementById('phase-name').textContent = p.name + t.turnTitle + roundText;
  document.getElementById('current-player-title').textContent = p.name + t.turnTitle;

  const subMsg = document.getElementById('turn-sub-message');
  if (lastPlayerWhoPlayed !== "") {
    subMsg.textContent = `${lastPlayerWhoPlayed}${t.cardPlayedNotice}${p.name}`;
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

  p.hand.push(drawCardAvoidDuplicate(p.hand));

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
  playerPredictions.push({ playerName: p.name, prediction: chosenCard });

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
  playerPredictions.push({ playerName: p.name, predictionOrder: orderArray });

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

// アルゴリズムの実行処理
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
        steps.push({ array: [...arr], active: [], highlight: [], msg: 'Shaking back and forth' });
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
            steps.push({ array: [...arr], active: [i], highlight: [], msg: 'Passed' });
          } else {
            ops += 5;
            steps.push({ array: [...arr], active: [i], highlight: [], msg: 'Purged' });
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
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'Timeout' });
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
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'No miracle occurred' });
        } else {
          steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: 'A miracle happened' });
        }
      }
      break;
  }
  steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: 'Complete' });
  return { steps, ops };
}

// レース画面
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
      <p id="status-racer-${idx}" style="font-size: 14px; color: #86868b;">${t.waitingStatus}</p>
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
      const delay = baseSpeed === 1 ? 450 : Math.max(1, 50 / currentSpeed);

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
    let roundWinner = results[0].playerName;

    if (currentGameMode === 'race3') {
      let winnerObj = players.find(p => p.name === roundWinner);
      if (winnerObj) winnerObj.points++;
    }

    results.forEach((res, i) => {
      let rankLabel = `${i + 1}st:`;
      if (i === 1) rankLabel = '2nd:';
      else if (i === 2) rankLabel = '3rd:';
      else if (i >= 3) rankLabel = `${i + 1}th:`;

      const localizedCardName = t.cards[res.card] || res.card;
      summary.innerHTML += `<p>${rankLabel} <strong>${res.playerName}</strong> (${localizedCardName}) - ${t.opsLabel}${res.score}</p>`;
    });

    if (currentGameMode === 'race3') {
      summary.innerHTML += `<hr style="margin: 10px 0; border: 0; border-top: 1px solid #d2d2d7;"><strong>[Current Points (First to 3)]</strong><br>`;
      players.forEach(p => {
        summary.innerHTML += `${p.name}: <strong>${p.points} pts</strong><br>`;
      });

      let champion = players.find(p => p.points >= 3);
      if (champion) {
        summary.innerHTML += `<h3 style="color: #0071e3; margin-top: 15px;">${champion.name} Wins the Game (3 Points Reached)</h3>`;
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
    summary.innerHTML = `<h3>Fastest: ${t.cards[fastestCard] || fastestCard} (${t.opsLabel}${results[0].score})</h3>`;
    playerPredictions.forEach(pred => {
      let isCorrect = (pred.prediction === fastestCard);
      let mark = isCorrect ? '[Correct] (+1pt)' : '[Incorrect]';
      if (isCorrect) {
        let pObj = players.find(p => p.name === pred.playerName);
        if (pObj) pObj.score++;
      }
      summary.innerHTML += `<p><strong>${pred.playerName}</strong> guessed [${t.cards[pred.prediction] || pred.prediction}] - ${mark}</p>`;
    });
    summary.innerHTML += `<hr><strong>Scores:</strong><br>`;
    players.forEach(p => { summary.innerHTML += `${p.name}: ${p.score} pts<br>`; });
  } else if (currentGameMode === 'predictOrder') {
    let actualOrder = results.map(r => r.card);
    summary.innerHTML = `<h3>Actual Order: 1st: ${t.cards[actualOrder[0]]}, 2nd: ${t.cards[actualOrder[1]]}, 3rd: ${t.cards[actualOrder[2]]}</h3>`;
    playerPredictions.forEach(pred => {
      let matchCount = 0;
      pred.predictionOrder.forEach((card, idx) => {
        if (card === actualOrder[idx]) matchCount++;
      });
      let pts = matchCount === 3 ? 3 : (matchCount > 0 ? 1 : 0);
      let pObj = players.find(p => p.name === pred.playerName);
      if (pObj) pObj.score += pts;
      summary.innerHTML += `<p><strong>${pred.playerName}</strong> got ${matchCount}/3 correct (+${pts} pts)</p>`;
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

    currentRound++;
    startNewRound();
  };

  document.getElementById('next-phase-section').classList.remove('hidden');
}