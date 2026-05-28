// ===== 제품 DB =====
const PRODUCTS = {
  '8801111909756': {
    name: '칠성사이다 500ml',
    emoji: '🧴',
    material: '페트병 (PET)',
    barcode: '8801111909756',
    tip: '💡 페트병은 라벨을 떼고 내용물을 비운 후 납작하게 압착해서 배출하세요!',
    checklist: [
      { id: 'empty', label: '내용물을 완전히 비웠나요?' },
      { id: 'label', label: '라벨(스티커)을 떼었나요?' },
      { id: 'cap', label: '뚜껑을 분리했나요? (뚜껑은 따로 플라스틱류)' },
      { id: 'crush', label: '납작하게 압착했나요?' },
    ],
    voice: '칠성사이다 페트병은 라벨을 분리하고, 내용물을 비운 뒤, 뚜껑을 분리하고 납착하게 압착해서 페트병으로 배출하세요.'
  },
  '8801043014788': {
    name: '농심 신라면 봉지',
    emoji: '🍜',
    material: '비닐류',
    barcode: '8801043014788',
    tip: '💡 라면 봉지는 비닐류로 배출해요. 내용물 잔여물이 있으면 가볍게 털어내세요!',
    checklist: [
      { id: 'empty', label: '잔여물(양념 등)을 털어냈나요?' },
      { id: 'separate', label: '비닐 재질만 분리했나요?' },
      { id: 'clean', label: '기름기가 심하지 않나요? (심하면 일반쓰레기)' },
    ],
    voice: '농심 신라면 봉지는 비닐류로 배출합니다. 잔여물을 털어내고 비닐 재질만 분리해서 배출하세요. 기름기가 심하면 일반 쓰레기로 버리세요.'
  },
  '8801104230119': {
    name: '제주삼다수 500ml',
    emoji: '💧',
    material: '페트병 (PET)',
    barcode: '8801104230119',
    tip: '💡 투명 페트병은 별도 분리수거함이 있어요. 청주시는 투명 페트병을 따로 모아주세요!',
    checklist: [
      { id: 'empty', label: '물을 완전히 비웠나요?' },
      { id: 'label', label: '라벨을 제거했나요?' },
      { id: 'cap', label: '뚜껑을 분리했나요?' },
      { id: 'crush', label: '납작하게 압착했나요?' },
      { id: 'transparent', label: '투명 페트병 전용함에 넣었나요?' },
    ],
    voice: '제주삼다수 페트병은 투명 페트병입니다. 라벨을 제거하고 뚜껑을 분리한 뒤, 납착하게 압착해서 투명 페트병 전용 수거함에 배출하세요.'
  },
  'QR_CAMPUS_CUP': {
    name: '개신문화관 카페 컵',
    emoji: '☕',
    material: '플라스틱류',
    barcode: 'QR_CAMPUS_CUP',
    tip: '💡 캠퍼스 내 텀블러 사용 시 추가 에코포인트 5P 적립!',
    checklist: [
      { id: 'drink', label: '음료를 완전히 비웠나요?' },
      { id: 'lid', label: '뚜껑을 분리했나요?' },
      { id: 'straw', label: '빨대를 분리했나요?' },
      { id: 'rinse', label: '간단히 헹궜나요?' },
    ],
    voice: '카페 플라스틱 컵은 음료를 비우고, 뚜껑과 빨대를 분리한 뒤 플라스틱류로 배출하세요. 텀블러를 사용하면 에코포인트 5점을 추가로 적립할 수 있어요!'
  },
  '8801115114719': {
    name: '코카콜라 캔 355ml',
    emoji: '🥤',
    material: '캔류 (알루미늄)',
    barcode: '8801115114719',
    tip: '💡 알루미늄 캔은 재활용 가치가 높아요! 내용물만 비우면 OK!',
    checklist: [
      { id: 'empty', label: '내용물을 완전히 비웠나요?' },
      { id: 'crush', label: '가볍게 찌그러뜨렸나요? (선택)' },
    ],
    voice: '코카콜라 알루미늄 캔은 내용물을 비우기만 하면 캔류로 배출할 수 있어요. 가볍게 찌그러뜨리면 부피를 줄일 수 있어요.'
  }
};

// ===== 재질 가이드 DB =====
const MATERIAL_GUIDES = {
  '플라스틱': {
    emoji: '🧴',
    desc: '플라스틱은 재질 표시를 확인하고 이물질 제거 후 배출하세요.\nPET, PP, PE, PS 등 재질 표시가 있으면 재활용 가능!',
    good: ['음료 페트병 (라벨 제거 후)', '플라스틱 용기 (세척 후)', '샴푸통, 세제통 (내용물 비운 후)'],
    bad: ['오염이 심한 플라스틱', '복합재질 포장재', '스티로폼 (별도 배출)']
  },
  '유리': {
    emoji: '🫙',
    desc: '유리병은 내용물을 비우고 세척 후 배출하세요.\n뚜껑(금속/플라스틱)은 분리해서 각각 배출!',
    good: ['음료 유리병', '소스류 유리병 (세척 후)', '잼 유리병'],
    bad: ['깨진 유리 (신문지에 싸서 일반쓰레기)', '도자기, 내열유리', '거울, 유리컵']
  },
  '캔': {
    emoji: '🥫',
    desc: '캔류는 내용물을 비우기만 하면 OK!\n알루미늄캔과 철캔 모두 캔류로 배출해요.',
    good: ['음료 캔 (내용물 비운 후)', '참치캔, 통조림 (세척 후)', '분무기 캔 (내용물 소진 후)'],
    bad: ['페인트통 (굳은 것은 일반쓰레기)', '기름통 (내용물 있으면 안됨)', '폭발 위험 캔']
  },
  '종이': {
    emoji: '📦',
    desc: '종이류는 이물질 제거 후 묶어서 배출하세요.\n코팅된 종이나 영수증은 일반쓰레기예요!',
    good: ['신문지, 책, 노트', '골판지 상자 (테이프 제거 후)', '우유 종이팩 (세척 후 별도 배출)'],
    bad: ['코팅 종이, 영수증', '기름 묻은 피자박스', '화장지, 물티슈']
  },
  '음식물': {
    emoji: '🍗',
    desc: '음식물쓰레기는 수분을 최대한 제거하고 배출!\n동물 뼈, 조개껍데기 등은 일반쓰레기예요.',
    good: ['채소 껍질, 음식 찌꺼기', '과일 껍질', '남은 반찬류'],
    bad: ['치킨뼈, 돼지뼈 등 동물뼈 → 일반쓰레기', '조개껍데기, 게껍데기 → 일반쓰레기', '계란껍질 → 일반쓰레기', '소금에 절인 김치, 된장 → 소량은 일반쓰레기']
  },
  '일반쓰레기': {
    emoji: '🗑️',
    desc: '재활용이 불가능한 것들은 종량제 봉투에 담아 배출하세요.\n청주시 전용 종량제 봉투를 사용해야 해요!',
    good: ['오염된 비닐, 플라스틱', '영수증, 코팅종이', '동물 뼈, 조개껍데기', '계란껍질', '깨진 유리 (신문지 포장 후)'],
    bad: []
  }
};

// ===== 랭킹 데이터 =====
const RANKING_DATA = [
  { college: '전자정보대학', points: 2847 },
  { college: '공과대학', points: 2391 },
  { college: '농업생명환경대학', points: 1983 },
  { college: '자연과학대학', points: 1756 },
  { college: '경영대학', points: 1542 },
  { college: '사범대학', points: 1231 },
  { college: '인문대학', points: 987 },
  { college: '사회과학대학', points: 876 },
  { college: '예술대학', points: 654 },
  { college: '의과대학', points: 432 },
  { college: '수의과대학', points: 321 },
];

// ===== 상태 =====
let state = {
  location: { university: '충북대학교', residence: '', region: '', college: '' },
  points: { total: 0, today: 0, todayScans: 0 },
  scannedToday: new Set(),
  totalScans: 0,
  currentProduct: null,
  checkedItems: new Set(),
};

// ===== 초기화 =====
function init() {
  loadState();
  const loc = state.location;
  if (loc.region && loc.college) {
    showScreen('screen-main');
  } else {
    showScreen('screen-onboarding');
  }
  updateUI();
}

function loadState() {
  try {
    const saved = localStorage.getItem('cbnu_eco_state');
    if (saved) {
      const s = JSON.parse(saved);
      state.location = s.location || state.location;
      state.points = s.points || state.points;
      state.totalScans = s.totalScans || 0;
      // 날짜 체크 - 오늘 아니면 리셋
      const today = new Date().toDateString();
      if (s.lastDate !== today) {
        state.points.today = 0;
        state.points.todayScans = 0;
        state.scannedToday = new Set();
      } else {
        state.scannedToday = new Set(s.scannedToday || []);
      }
    }
  } catch (e) {}
}

function saveState() {
  const toSave = {
    location: state.location,
    points: state.points,
    totalScans: state.totalScans,
    scannedToday: [...state.scannedToday],
    lastDate: new Date().toDateString(),
  };
  localStorage.setItem('cbnu_eco_state', JSON.stringify(toSave));
}

// ===== 화면 전환 =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'screen-main') updateUI();
  if (id === 'screen-ranking') renderRanking();
  if (id === 'screen-mypage') renderMypage();
}

function switchTab(tab) {
  const map = { home: 'screen-main', scan: 'screen-scan', ranking: 'screen-ranking', mypage: 'screen-mypage' };
  showScreen(map[tab]);
}

// ===== 위치 설정 =====
function selectOption(btn) {
  const group = btn.dataset.group;
  document.querySelectorAll(`[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.location[group] = btn.dataset.value;
}

function saveLocation() {
  const college = document.getElementById('college-select').value;
  if (!state.location.residence) { showToast('거주지를 선택해주세요'); return; }
  if (!state.location.region) { showToast('지역을 선택해주세요'); return; }
  if (!college) { showToast('단과대학을 선택해주세요'); return; }
  state.location.college = college;
  saveState();
  showToast('✅ 위치가 설정되었어요!');
  setTimeout(() => showScreen('screen-main'), 800);
}

// ===== UI 업데이트 =====
function updateUI() {
  const loc = state.location;
  const locText = loc.region ? `${loc.region} · ${loc.residence}` : '위치 미설정';
  document.getElementById('location-text').textContent = '📍 ' + locText;
  document.getElementById('main-points').textContent = state.points.total + 'P';

  const todayP = state.points.today;
  document.getElementById('today-count').textContent = `${todayP} / 100P`;
  document.getElementById('progress-fill').style.width = Math.min(todayP, 100) + '%';
}

// ===== 바코드 스캔 =====
function scanBarcode(code) {
  const product = PRODUCTS[code];
  if (!product) { showToast('등록되지 않은 제품이에요'); return; }
  state.currentProduct = product;
  state.checkedItems = new Set();
  renderChecklist(product);
  showScreen('screen-checklist');
}

function renderChecklist(product) {
  document.getElementById('product-emoji').textContent = product.emoji;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-material').textContent = product.material;
  document.getElementById('product-barcode').textContent = product.barcode;
  document.getElementById('guide-tip').textContent = product.tip;

  const list = document.getElementById('checklist-items');
  list.innerHTML = '';
  product.checklist.forEach(item => {
    const div = document.createElement('div');
    div.className = 'checklist-item';
    div.id = 'item-' + item.id;
    div.onclick = () => toggleCheck(item.id, product.checklist.length);
    div.innerHTML = `
      <div class="check-circle" id="circle-${item.id}"></div>
      <div class="check-label">${item.label}</div>
    `;
    list.appendChild(div);
  });

  document.getElementById('btn-complete').disabled = true;
}

function toggleCheck(id, total) {
  const item = document.getElementById('item-' + id);
  const circle = document.getElementById('circle-' + id);

  if (state.checkedItems.has(id)) {
    state.checkedItems.delete(id);
    item.classList.remove('checked');
    circle.textContent = '';
  } else {
    state.checkedItems.add(id);
    item.classList.add('checked');
    circle.textContent = '✓';
  }

  document.getElementById('btn-complete').disabled = state.checkedItems.size < total;
}

function completeChecklist() {
  const product = state.currentProduct;
  const code = product.barcode;

  if (state.points.today >= 100) {
    showToast('오늘 최대 포인트(100P)를 달성했어요! 🎉');
    return;
  }

  state.points.total += 1;
  state.points.today += 1;
  state.totalScans += 1;
  if (!state.scannedToday.has(code)) state.scannedToday.add(code);
  saveState();

  showToast(`✅ ${product.name} 분리수거 완료! +1P 적립!`);
  setTimeout(() => showScreen('screen-main'), 1200);
}

// ===== 음성 가이드 =====
function speakGuide() {
  if (!state.currentProduct) return;
  if (!window.speechSynthesis) { showToast('이 브라우저는 음성을 지원하지 않아요'); return; }
  const utter = new SpeechSynthesisUtterance(state.currentProduct.voice);
  utter.lang = 'ko-KR';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
  showToast('🔊 음성 안내를 시작합니다');
}

// ===== 음성 검색 =====
function startVoiceSearch() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { showToast('이 브라우저는 음성인식을 지원하지 않아요'); return; }
  const recog = new SR();
  recog.lang = 'ko-KR';
  recog.onresult = (e) => {
    const text = e.results[0][0].transcript;
    showToast(`🎤 "${text}" 검색 중...`);
    const found = Object.values(PRODUCTS).find(p =>
      p.name.includes(text) || text.includes(p.name.split(' ')[0])
    );
    if (found) {
      setTimeout(() => {
        state.currentProduct = found;
        state.checkedItems = new Set();
        renderChecklist(found);
        showScreen('screen-checklist');
      }, 800);
    } else {
      setTimeout(() => showToast(`"${text}"에 대한 제품을 찾지 못했어요`), 800);
    }
  };
  recog.onerror = () => showToast('음성 인식에 실패했어요');
  recog.start();
  showToast('🎤 말씀하세요... (제품명을 말해보세요)');
}

// ===== 카메라 =====
let html5QrCode = null;

function startCamera() {
  const placeholder = document.getElementById('camera-placeholder');
  if (placeholder) placeholder.style.display = 'none';
  document.getElementById('camera-btn').style.display = 'none';
  document.getElementById('stop-btn').style.display = 'block';

  html5QrCode = new Html5Qrcode('qr-reader');
  html5QrCode.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 220, height: 220 } },
    (decodedText) => {
      stopCamera();
      const product = PRODUCTS[decodedText];
      if (product) {
        scanBarcode(decodedText);
      } else {
        showToast('⚠️ DB에 없는 제품이에요. 아래 목록을 이용해주세요!');
      }
    },
    () => {}
  ).catch(() => {
    showToast('카메라 접근 권한이 필요해요');
    stopCamera();
  });
  showToast('📷 카메라가 켜졌어요! 바코드를 비춰주세요');
}

function stopCamera() {
  if (html5QrCode) {
    html5QrCode.stop().catch(() => {});
    html5QrCode = null;
  }
  document.getElementById('camera-btn').style.display = 'block';
  document.getElementById('stop-btn').style.display = 'none';
  const placeholder = document.getElementById('camera-placeholder');
  if (placeholder) placeholder.style.display = 'flex';
}

// ===== 재질 가이드 =====
function showMaterialGuide(material) {
  const guide = MATERIAL_GUIDES[material];
  document.getElementById('material-title').textContent = guide.emoji + ' ' + material + ' 배출 방법';

  const content = document.getElementById('material-content');
  content.innerHTML = `
    <div class="material-header">
      <div class="material-big-emoji">${guide.emoji}</div>
      <p class="material-desc">${guide.desc.replace(/\n/g, '<br>')}</p>
    </div>
    <div class="section-title" style="color:#2d7a4f">✅ 배출 가능</div>
    <div class="rule-card">
      <div class="rule-list">${guide.good.map(g => '• ' + g).join('<br>')}</div>
    </div>
    ${guide.bad.length > 0 ? `
    <div class="section-title" style="color:#e53935;margin-top:16px">❌ 배출 불가 (일반쓰레기)</div>
    <div class="rule-card bad">
      <div class="rule-list">${guide.bad.map(b => '• ' + b).join('<br>')}</div>
    </div>` : ''}
    <button class="voice-guide-btn" style="margin-top:20px;display:block;width:100%;padding:14px;border-radius:12px;" onclick="speakMaterial('${material}')">🔊 음성으로 듣기</button>
  `;

  showScreen('screen-material');
}

function speakMaterial(material) {
  const guide = MATERIAL_GUIDES[material];
  if (!window.speechSynthesis) return;
  const text = `${material} 배출 방법입니다. ${guide.desc}. 배출 가능한 것은 ${guide.good.join(', ')}입니다. ${guide.bad.length > 0 ? '배출 불가능한 것은 ' + guide.bad.join(', ') + '입니다.' : ''}`;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ko-KR';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

// ===== 랭킹 =====
function renderRanking() {
  const myCollege = state.location.college;
  const myRankInfo = document.getElementById('ranking-my-college');

  // 내 단과대 포인트 추가
  const data = [...RANKING_DATA];
  if (myCollege) {
    const existing = data.find(d => d.college === myCollege);
    if (existing) existing.points += state.points.total;
  }
  data.sort((a, b) => b.points - a.points);

  const myRank = myCollege ? data.findIndex(d => d.college === myCollege) + 1 : null;
  myRankInfo.innerHTML = myCollege
    ? `<div style="font-weight:700;font-size:16px">내 단과대: ${myCollege}</div><div style="opacity:0.8;margin-top:4px">현재 ${myRank}위 · 내 기여 포인트 ${state.points.total}P</div>`
    : '<div>단과대를 설정하면 랭킹에 참여할 수 있어요!</div>';

  const list = document.getElementById('ranking-list');
  list.innerHTML = data.map((d, i) => `
    <div class="ranking-item" style="${myCollege === d.college ? 'border: 2px solid #2d7a4f;' : ''}">
      <div class="rank-num ${i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : ''}">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</div>
      <div class="rank-college">${d.college}</div>
      <div class="rank-point">${d.points.toLocaleString()}P</div>
    </div>
  `).join('');
}

// ===== 마이페이지 =====
function renderMypage() {
  const loc = state.location;
  document.getElementById('mypage-college').textContent = loc.college || '단과대 미설정';
  document.getElementById('mypage-region').textContent = loc.region ? `${loc.region} · ${loc.residence}` : '지역 미설정';
  document.getElementById('stat-total').textContent = state.points.total + 'P';
  document.getElementById('stat-today').textContent = state.points.today + 'P';
  document.getElementById('stat-scans').textContent = state.totalScans + '회';
}

// ===== 토스트 =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== 시작 =====
init();
