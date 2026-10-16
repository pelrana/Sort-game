// 🃏 60枚・18種類の拡張カードプール定義
const CARD_PRESETS = [
  { name: 'マージソート', count: 2 },
  { name: 'クイックソート', count: 2 },
  { name: 'ヒープソート', count: 3 },
  { name: 'イントロソート', count: 3 },
  { name: 'ティムソート', count: 3 },
  { name: 'シェルソート', count: 4 },
  { name: '基数ソート(LSD)', count: 3 },
  { name: 'カクテルシェーカー', count: 4 },
  { name: 'ノームソート', count: 4 },
  { name: '奇偶転置ソート', count: 4 },
  { name: '挿入ソート', count: 4 },
  { name: '選択ソート', count: 4 },
  { name: 'バブルソート', count: 4 },
  { name: 'バケツソート', count: 4 },
  { name: 'Abeソート', count: 2 },
  { name: 'スターリンソート', count: 2 },
  { name: 'ボゴソート', count: 4 },
  { name: 'ミラクルソート', count: 2 }
];

let deck = [];
let targetData = [];
const N = 8;
let players = []; 
let currentPlayerIndex = 0; 
let playerChoices = []; 

// --- 音声合成（Web Audio API） ---
let audioCtx = null;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'step') {
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'finish') {
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    }
  } catch (e) {}
}

// --- 設定画面の入力欄動的生成 ---
const playerCountInput = document.getElementById('player-count-input');
const playerNameInputsContainer = document.getElementById('player-name-inputs');

function updateNameInputFields() {
  const count = parseInt(playerCountInput.value) || 3;
  playerNameInputsContainer.innerHTML = '<strong>プレイヤー名設定:</strong><br>';
  for (let i = 0; i < count; i++) {
    const row = document.createElement('div');
    row.className = 'name-input-row';
    row.innerHTML = `<label>P${i + 1}: <input type="text" id="player-name-${i}" value="プレイヤー${i + 1}"></label>`;
    playerNameInputsContainer.appendChild(row);
  }
}

playerCountInput.addEventListener('input', updateNameInputFields);
updateNameInputFields();

// --- ゲームスタート ---
document.getElementById('start-game-btn').addEventListener('click', () => {
  const count = parseInt(playerCountInput.value);
  if (count < 1 || count > 6) return alert('1〜6人で設定してね');
  
  players = [];
  for (let i = 0; i < count; i++) {
    const inputEl = document.getElementById(`player-name-${i}`);
    const name = inputEl && inputEl.value.trim() !== "" ? inputEl.value.trim() : `プレイヤー${i + 1}`;
    players.push({ id: i + 1, name: name, hand: [] });
  }
  
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('game-main-screen').classList.remove('hidden');
  
  createDeck();
  players.forEach(p => {
    for (let i = 0; i < 3; i++) {
      if (deck.length === 0) createDeck();
      p.hand.push(deck.pop());
    }
  });

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
  for (let i = 0; i < N; i++) targetData.push(Math.floor(Math.random() * 90) + 10);
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
  updateTurnScreen();
}

function updateTurnScreen() {
  const p = players[currentPlayerIndex];
  document.getElementById('phase-name').textContent = `${p.name} のターン`;
  document.getElementById('current-player-title').textContent = `${p.name} の番です`;
  document.getElementById('cover-screen').classList.remove('hidden');
  document.getElementById('action-screen').classList.add('hidden');
}

document.getElementById('show-hand-btn').addEventListener('click', () => {
  document.getElementById('cover-screen').classList.add('hidden');
  document.getElementById('action-screen').classList.remove('hidden');
  const p = players[currentPlayerIndex];
  document.getElementById('action-prompt-title').textContent = `${p.name} の手札（1枚選んでね）`;
  
  const handContainer = document.getElementById('hand-container');
  handContainer.innerHTML = '';
  p.hand.forEach((cardName, cardIndex) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.textContent = cardName;
    cardEl.addEventListener('click', () => selectCard(cardIndex));
    handContainer.appendChild(cardEl);
  });
});

function selectCard(cardIndex) {
  const p = players[currentPlayerIndex];
  const chosen = p.hand.splice(cardIndex, 1)[0];
  playerChoices.push({ playerName: p.name, card: chosen });

  if (deck.length === 0) createDeck();
  p.hand.push(deck.pop());

  alert(`${p.name} はカードを裏向きで出しました！（手札が補充されました）`);
  currentPlayerIndex++;
  
  if (currentPlayerIndex < players.length) {
    updateTurnScreen();
  } else {
    prepareRacePhase();
  }
}

// --- 全18種類のソート手順生成ロジック ---
function getSortSteps(cardName, originalData) {
  let arr = [...originalData];
  let steps = [];
  let ops = 0;
  let isSorted = a => {
    for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i+1]) return false;
    return true;
  };

  steps.push({ array: [...arr], active: [], highlight: [], msg: '準備完了' });

  switch (cardName) {
    case 'バブルソート':
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          ops++;
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: '比較中' });
          if (arr[j] > arr[j+1]) {
            let tmp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = tmp;
            ops++;
            steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'スワップ' });
          }
        }
      }
      break;

    case '選択ソート':
      for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
          ops++;
          steps.push({ array: [...arr], active: [min, j], highlight: [], msg: '最小値探索' });
          if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) {
          let tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp;
          ops++;
          steps.push({ array: [...arr], active: [i, min], highlight: [], msg: '入れ替え' });
        }
      }
      break;

    case '挿入ソート':
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0) {
          ops++;
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: '挿入探索' });
          if (arr[j] > key) { arr[j+1] = arr[j]; ops++; j--; } else break;
        }
        arr[j+1] = key;
      }
      break;

    case 'クイックソート':
      function qs(sub) {
        if (sub.length <= 1) return sub;
        let pivot = sub[Math.floor(sub.length / 2)];
        let left = [], right = [], eq = [];
        for (let x of sub) {
          ops++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'ピボット分割' });
          if (x < pivot) left.push(x); else if (x > pivot) right.push(x); else eq.push(x);
        }
        return [...qs(left), ...eq, ...qs(right)];
      }
      arr = qs(arr);
      break;

    case 'マージソート':
      function ms(sub) {
        if (sub.length <= 1) return sub;
        let mid = Math.floor(sub.length / 2);
        return merge(ms(sub.slice(0, mid)), ms(sub.slice(mid)));
      }
      function merge(l, r) {
        let res = [], i = 0, j = 0;
        while (i < l.length && j < r.length) {
          ops++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'マージ中' });
          if (l[i] <= r[j]) res.push(l[i++]); else res.push(r[j++]);
        }
        return [...res, ...l.slice(i), ...r.slice(j)];
      }
      arr = ms(arr);
      break;

    case 'ヒープソート':
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          ops++;
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            ops++;
          }
          steps.push({ array: [...arr], active: [j, j+1], highlight: [], msg: 'ヒープ構築' });
        }
      }
      arr.sort((a,b) => a-b);
      break;

    case 'イントロソート':
      ops += 5;
      arr.sort((a, b) => { ops++; return a - b; });
      steps.push({ array: [...arr], active: [], highlight: [], msg: 'イントロ最適化' });
      break;

    case 'ティムソート':
      ops += 3;
      arr.sort((a, b) => { ops++; return a - b; });
      steps.push({ array: [...arr], active: [], highlight: [], msg: 'ティム最適化' });
      break;

    case 'シェルソート':
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
          steps.push({ array: [...arr], active: [], highlight: [], msg: `ギャップ(${gap})ソート` });
        }
        gap = Math.floor(gap / 2);
      }
      break;

    case '基数ソート(LSD)':
      for (let digit = 0; digit < 2; digit++) {
        ops += arr.length;
        arr.sort((a,b) => a-b);
        steps.push({ array: [...arr], active: [], highlight: [], msg: `桁バケツ仕分け` });
      }
      break;

    case 'カクテルシェーカー':
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
        steps.push({ array: [...arr], active: [], highlight: [], msg: '往復バブル中' });
      }
      break;

    case 'ノームソート':
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
          steps.push({ array: [...arr], active: [index, index+1], highlight: [], msg: '小人が一歩戻る' });
        }
      }
      break;

    case '奇偶転置ソート':
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
        steps.push({ array: [...arr], active: [], highlight: [], msg: '奇偶ペア比較' });
      }
      break;

    case 'バケツソート':
      for (let x of arr) ops++;
      arr.sort((a, b) => { ops += 2; return a - b; });
      break;

    case 'スターリンソート':
      let stalin = [arr[0]];
      for (let i = 1; i < arr.length; i++) {
        ops++;
        steps.push({ array: [...arr], active: [i], highlight: [], msg: '粛清チェック' });
        if (arr[i] >= stalin[stalin.length - 1]) stalin.push(arr[i]);
        else { ops += 8; steps.push({ array: [...arr], active: [i], highlight: [], msg: '粛清！' }); }
      }
      arr = stalin;
      break;

    case 'Abeソート':
      ops = 4;
      arr.sort((a, b) => a - b);
      break;

    case 'ボゴソート':
      {
        let tries = 0;
        const maxTries = 40;
        while (!isSorted(arr) && tries < maxTries) {
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            ops++;
          }
          tries++;
          steps.push({ array: [...arr], active: [], highlight: [], msg: `ボゴシャッフル (${tries}/${maxTries})` });
        }
        if (!isSorted(arr)) {
          ops += 100000;
          steps.push({ array: [...arr], active: [], highlight: [], msg: 'タイムアウト！' });
        }
      }
      break;

    case 'ミラクルソート':
      {
        let tries = 0;
        const maxTries = 30;
        let success = false;
        while (tries < maxTries && !success) {
          tries++;
          ops++;
          if (isSorted(arr)) { success = true; break; }
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          steps.push({ array: [...arr], active: [], highlight: [], msg: `奇跡を祈る... (${tries}/${maxTries})` });
        }
        if (!success) {
          ops += 999999;
          steps.push({ array: [...arr], active: [], highlight: [], msg: '奇跡起きず...' });
        } else {
          steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: '✨ 奇跡が起きた！ ✨' });
        }
      }
      break;
  }
  steps.push({ array: [...arr], active: [], highlight: arr.map((_, i) => i), msg: '完了！' });
  return { steps, ops };
}

// --- 同時レース表示フェーズ ---
function prepareRacePhase() {
  document.getElementById('phase-name').textContent = 'ソートバトル中！';
  document.getElementById('game-board').classList.add('hidden');
  document.getElementById('pass-and-play-section').classList.add('hidden');
  
  const raceSection = document.getElementById('race-section');
  raceSection.classList.remove('hidden');
  
  const racersContainer = document.getElementById('racers-container');
  racersContainer.innerHTML = '';

  playerChoices.forEach((choice, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'racer-card';
    cardDiv.innerHTML = `
      <h3>${choice.playerName}</h3>
      <p>カード: <strong>${choice.card}</strong></p>
      <div id="chart-racer-${idx}" class="chart-box"></div>
      <p id="status-racer-${idx}" style="font-size: 14px; color: #666;">待機中...</p>
    `;
    racersContainer.appendChild(cardDiv);
    
    renderSingleChart(`chart-racer-${idx}`, targetData, [], []);
  });

  document.getElementById('start-race-btn').onclick = () => {
    document.getElementById('start-race-btn').style.display = 'none';
    startAllRaces();
  };
}

function startAllRaces() {
  let finishedCount = 0;
  let activeRacersCount = playerChoices.length;
  let results = [];

  playerChoices.forEach((choice, idx) => {
    const { steps, ops } = getSortSteps(choice.card, targetData);
    results.push({ playerName: choice.playerName, card: choice.card, score: ops });

    let stepIdx = 0;
    function runStep() {
      const baseSpeed = parseFloat(document.getElementById('speed-select').value) || 1;
      const remainingBonus = (playerChoices.length - activeRacersCount) * 0.8;
      const currentSpeed = Math.max(0.1, baseSpeed + remainingBonus);
      const delay = Math.max(15, 150 / currentSpeed);

      if (stepIdx < steps.length) {
        const s = steps[stepIdx];
        const isFin = (stepIdx === steps.length - 1);
        renderSingleChart(`chart-racer-${idx}`, s.array, s.active, s.highlight, isFin);
        
        let speedNotice = remainingBonus > 0 ? ` [🔥加速中 ${currentSpeed.toFixed(1)}x]` : '';
        document.getElementById(`status-racer-${idx}`).textContent = s.msg + speedNotice;
        
        playSound('step');
        stepIdx++;
        setTimeout(runStep, delay);
      } else {
        playSound('finish');
        document.getElementById(`status-racer-${idx}`).innerHTML = `✨ 完了！ (操作回数: ${ops})`;
        
        finishedCount++;
        activeRacersCount--;
        
        if (finishedCount === playerChoices.length) {
          setTimeout(() => showFinalResults(results), 1000);
        }
      }
    }
    runStep();
  });
}

function showFinalResults(results) {
  document.getElementById('race-section').classList.add('hidden');
  results.sort((a, b) => a.score - b.score);

  const summary = document.getElementById('result-summary');
  summary.innerHTML = '';
  results.forEach((res, i) => {
    let rankEmoji = i === 0 ? '👑 1位:' : `${i + 1}位:`;
    summary.innerHTML += `<p>${rankEmoji} <strong>${res.playerName}</strong>（${res.card}）- 操作回数: ${res.score}回</p>`;
  });

  document.getElementById('next-phase-section').classList.remove('hidden');
}

document.getElementById('next-action-btn').addEventListener('click', () => {
  document.getElementById('next-phase-section').classList.add('hidden');
  document.getElementById('start-race-btn').style.display = 'inline-block';
  document.getElementById('game-board').classList.remove('hidden');
  document.getElementById('pass-and-play-section').classList.remove('hidden');
  startNewRound();
});