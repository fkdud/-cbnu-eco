// ============================================================
// 분리리 (BunRiRi) v2.0
// ============================================================

const PRODUCTS = {
  '8801111909756':{name:'칠성사이다 500ml',emoji:'🧴',material:'페트병 (PET)',tip:'💡 투명 페트병! 라벨 제거 후 납작하게 압착해서 배출하세요.',checklist:['내용물을 완전히 비웠나요?','라벨(스티커)을 떼었나요?','뚜껑을 분리했나요?','납작하게 압착했나요?'],voice:'칠성사이다 페트병입니다. 내용물을 비우고, 라벨을 제거한 뒤, 뚜껑을 분리하고 납작하게 압착해서 페트병으로 배출하세요.'},
  '8801104230119':{name:'제주삼다수 500ml',emoji:'💧',material:'투명 페트병',tip:'💡 청주시는 투명 페트병 전용 수거함이 있어요! 별도 배출해주세요.',checklist:['물을 완전히 비웠나요?','라벨을 제거했나요?','뚜껑을 분리했나요?','납작하게 압착했나요?','투명 페트병 전용함에 넣었나요?'],voice:'제주삼다수 투명 페트병입니다. 라벨을 제거하고 뚜껑을 분리한 뒤, 납작하게 압착해서 투명 페트병 전용 수거함에 배출하세요.'},
  '8801043014788':{name:'농심 신라면 봉지',emoji:'🍜',material:'비닐류',tip:'💡 라면 봉지는 비닐류! 잔여물을 털어내고 배출하세요.',checklist:['잔여물(양념 등)을 털어냈나요?','기름기가 심하지 않나요? (심하면 일반쓰레기)'],voice:'농심 신라면 봉지는 비닐류입니다. 잔여물을 털어내고 비닐류로 배출하세요. 기름기가 심하면 일반쓰레기로 버려주세요.'},
  '8801115114719':{name:'코카콜라 캔 355ml',emoji:'🥤',material:'캔류 (알루미늄)',tip:'💡 알루미늄 캔은 재활용 가치가 높아요! 내용물만 비우면 OK!',checklist:['내용물을 완전히 비웠나요?'],voice:'코카콜라 알루미늄 캔입니다. 내용물을 비우기만 하면 캔류로 배출할 수 있어요. 가볍게 찌그러뜨리면 부피도 줄일 수 있어요.'},
  'QR_CAMPUS_CUP':{name:'개신문화관 카페 컵',emoji:'☕',material:'플라스틱류',tip:'💡 텀블러를 사용하면 에코포인트 5P 추가 적립!',checklist:['음료를 완전히 비웠나요?','뚜껑을 분리했나요?','빨대를 분리했나요?'],voice:'카페 플라스틱 컵입니다. 음료를 비우고 뚜껑과 빨대를 분리한 뒤 플라스틱류로 배출하세요. 텀블러를 사용하시면 에코포인트 5점을 추가로 받을 수 있어요!'},
  '8801073200018':{name:'오뚜기 케찹',emoji:'🍅',material:'플라스틱류',tip:'💡 내용물을 완전히 비우고 세척 후 배출하세요.',checklist:['내용물을 완전히 비웠나요?','물로 헹궜나요?','뚜껑을 분리했나요?'],voice:'오뚜기 케찹 플라스틱 용기입니다. 내용물을 완전히 비우고, 물로 헹군 뒤, 뚜껑을 분리해서 플라스틱류로 배출하세요.'},
  'VOICE_EGG':{name:'계란껍질',emoji:'🥚',material:'일반쓰레기',tip:'⚠️ 계란껍질은 음식물쓰레기가 아니에요! 일반쓰레기로 배출하세요.',checklist:['일반쓰레기(종량제봉투)에 넣었나요?'],voice:'계란껍질은 음식물쓰레기가 아닙니다! 일반쓰레기 종량제 봉투에 넣어서 배출하세요. 많은 분들이 헷갈려하시는 항목이에요.'},
  'VOICE_CHICKEN':{name:'치킨뼈',emoji:'🍗',material:'일반쓰레기',tip:'⚠️ 치킨뼈 등 동물 뼈는 일반쓰레기예요! 음식물쓰레기가 아니에요.',checklist:['일반쓰레기(종량제봉투)에 넣었나요?'],voice:'치킨뼈를 포함한 모든 동물 뼈는 음식물쓰레기가 아닙니다. 반드시 일반쓰레기 종량제 봉투에 넣어서 배출하세요. 조개껍데기와 계란껍질도 마찬가지입니다.'},
};

const MATERIALS = {
  '플라스틱':{emoji:'🧴',desc:'재질 표시(PET/PP/PE)를 확인하고 이물질 제거 후 배출하세요.',good:['음료 페트병 (라벨 제거 후)','플라스틱 용기 (세척 후)','샴푸통, 세제통'],bad:['오염이 심한 플라스틱','복합재질 포장재']},
  '유리':{emoji:'🫙',desc:'내용물을 비우고 세척 후 배출! 뚜껑은 분리해서 각각 배출해요.',good:['음료 유리병','소스류 유리병 (세척 후)'],bad:['깨진 유리 → 신문지 싸서 일반쓰레기','도자기, 내열유리, 거울']},
  '캔':{emoji:'🥫',desc:'내용물을 비우기만 하면 OK! 알루미늄캔과 철캔 모두 캔류로 배출해요.',good:['음료 캔','참치캔, 통조림 (세척 후)'],bad:['페인트통','폭발 위험 캔']},
  '종이':{emoji:'📦',desc:'이물질 제거 후 묶어서 배출! 코팅된 종이나 영수증은 일반쓰레기예요.',good:['신문지, 책, 노트','골판지 상자 (테이프 제거 후)','우유 종이팩 (세척 후 별도)'],bad:['코팅 종이, 영수증','기름 묻은 피자박스','화장지, 물티슈']},
  '음식물':{emoji:'🍗',desc:'수분을 최대한 제거하고 배출! 동물 뼈, 계란껍질은 일반쓰레기예요!',good:['채소 껍질, 음식 찌꺼기','과일 껍질','남은 반찬류'],bad:['치킨뼈, 돼지뼈 → 일반쓰레기','계란껍질 → 일반쓰레기','조개껍데기 → 일반쓰레기']},
  '일반쓰레기':{emoji:'🗑️',desc:'재활용 불가! 청주시 전용 종량제 봉투에 담아 배출하세요.',good:['오염된 비닐/플라스틱','영수증, 코팅종이','동물 뼈, 계란껍질','깨진 유리 (신문지 포장)'],bad:[]},
};

const DEPTS = {
  '전자정보대학':['컴퓨터공학과','전자공학과','정보통신공학과','소프트웨어학과','AI학과'],
  '공과대학':['기계공학과','화학공학과','토목공학과','건축공학과','환경공학과'],
  '경영대학':['경영학과','경제학과','회계학과','무역학과'],
  '자연과학대학':['수학과','물리학과','화학과','생물학과','지구환경과학과'],
  '인문대학':['국어국문학과','영어영문학과','철학과','사학과'],
  '사회과학대학':['사회학과','심리학과','행정학과','정치외교학과'],
  '농업생명환경대학':['식물자원학과','동물자원학과','식품공학과','환경생태학과'],
  '수의과대학':['수의학과'],'의과대학':['의학과','간호학과'],
  '사범대학':['교육학과','윤리교육학과','체육교육학과'],
  '예술대학':['음악학과','미술학과','디자인학과'],
  '스포츠과학대학':['스포츠과학과','레저스포츠학과'],
};

const MISSIONS = [
  {id:'m1',name:'플라스틱 마스터',desc:'오늘 분리수거 3회 완료하기',target:3,reward:[1,3,5,10]},
  {id:'m2',name:'에코 챔피언',desc:'오늘 분리수거 2회 완료하기',target:2,reward:[1,3,5,10]},
  {id:'m3',name:'그린 루키',desc:'오늘 처음으로 분리수거 완료하기',target:1,reward:[1,3,5]},
  {id:'m4',name:'지구 수호자',desc:'오늘 분리수거 5회 완료하기',target:5,reward:[3,5,10]},
];

const RANKING_BASE = [
  {college:'농업생명환경대학',pts:3241},{college:'전자정보대학',pts:2847},
  {college:'공과대학',pts:2391},{college:'자연과학대학',pts:1983},
  {college:'경영대학',pts:1756},{college:'사범대학',pts:1542},
  {college:'인문대학',pts:1231},{college:'사회과학대학',pts:987},
  {college:'예술대학',pts:876},{college:'의과대학',pts:654},
  {college:'수의과대학',pts:432},{college:'스포츠과학대학',pts:321},
];

const POSTS_KEY = 'bunriri_posts';

let S = {user:null,profile:{college:'',dept:'',res:'',reg:''},points:{total:0,today:0},totalScans:0,missionProg:{},missionDone:{},lastDate:'',inviteCode:'',usedInvite:false};
let lang = 'ko';
let curProduct = null;
let checkedSet = new Set();
let screenHistory = [];
let qrScanner = null;
let voiceSpeed = 0.9;
const chipState = {};

// ===== INIT =====
function init() {
  loadS();
  checkReset();
  setTimeout(() => {
    document.getElementById('screen-splash').classList.remove('active');
    showScreen(S.user ? (S.profile.college ? 'screen-main' : 'screen-location') : 'screen-login');
  }, 1600);
}

function loadS() {
  try { const s = localStorage.getItem('bunriri_v3'); if(s) Object.assign(S, JSON.parse(s)); } catch(e){}
}
function saveS() { localStorage.setItem('bunriri_v3', JSON.stringify(S)); }
function checkReset() {
  const today = new Date().toDateString();
  if (S.lastDate !== today) { S.points.today=0; S.missionProg={}; S.missionDone={}; S.lastDate=today; saveS(); }
}

// ===== LANG =====
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => { if(b.textContent.includes(l==='ko'?'한국어':'English')) b.classList.add('active'); });
  document.querySelectorAll('[data-ko]').forEach(el => {
    const txt = l==='ko' ? el.dataset.ko : el.dataset.en;
    if(txt) el.textContent = txt;
  });
  document.querySelectorAll('[placeholder]').forEach(el => {
    if(l==='en') {
      const map = {'아이디':'Username','비밀번호':'Password','아이디 (영문/숫자)':'Username (letters/numbers)','비밀번호 (6자 이상)':'Password (6+ chars)','비밀번호 확인':'Confirm Password','닉네임':'Nickname','제품명 검색...':'Search product...'};
      if(map[el.placeholder]) el.placeholder = map[el.placeholder];
    }
  });
}

// ===== SCREEN =====
function showScreen(id) {
  const cur = document.querySelector('.screen.active');
  if(cur && cur.id !== id) screenHistory.push(cur.id);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='screen-main') refreshMain();
  if(id==='screen-ranking') renderRanking();
  if(id==='screen-mypage') renderMypage();
  if(id==='screen-mission') renderMission();
  if(id==='screen-community') renderCommunity();
}
function goBack() { const p = screenHistory.pop(); showScreen(p||'screen-main'); }
function goTab(t) {
  const m = {main:'screen-main',scan:'screen-scan',mission:'screen-mission',ranking:'screen-ranking',mypage:'screen-mypage'};
  screenHistory = [];
  showScreen(m[t]);
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(b => { if(b.onclick && b.onclick.toString().includes("'"+t+"'")) b.classList.add('active'); });
}

// ===== AUTH =====
function switchAuth(m) {
  document.getElementById('form-login').style.display = m==='login'?'block':'none';
  document.getElementById('form-signup').style.display = m==='signup'?'block':'none';
  document.getElementById('sw-login').classList.toggle('active',m==='login');
  document.getElementById('sw-signup').classList.toggle('active',m==='signup');
}
function doLogin() {
  const id=document.getElementById('login-id').value.trim(), pw=document.getElementById('login-pw').value;
  if(!id||!pw){toast('아이디와 비밀번호를 입력해주세요');return;}
  const users=JSON.parse(localStorage.getItem('bunriri_users')||'{}');
  if(!users[id]){toast('존재하지 않는 아이디예요');return;}
  if(users[id].pw!==btoa(pw)){toast('비밀번호가 틀렸어요');return;}
  S.user={id,name:users[id].name};
  const saved=localStorage.getItem('bunriri_data_'+id);
  if(saved) Object.assign(S,JSON.parse(saved));
  checkReset(); saveS();
  toast('환영해요, '+S.user.name+'님! 🌱');
  showScreen(S.profile.college?'screen-main':'screen-location');
}
function doSignup() {
  const id=document.getElementById('su-id').value.trim(), pw=document.getElementById('su-pw').value,
    pw2=document.getElementById('su-pw2').value, name=document.getElementById('su-name').value.trim();
  if(!id||!pw||!name){toast('모든 항목을 입력해주세요');return;}
  if(pw.length<6){toast('비밀번호는 6자 이상이어야 해요');return;}
  if(pw!==pw2){toast('비밀번호가 일치하지 않아요');return;}
  if(!/^[a-zA-Z0-9]+$/.test(id)){toast('아이디는 영문/숫자만 가능해요');return;}
  const users=JSON.parse(localStorage.getItem('bunriri_users')||'{}');
  if(users[id]){toast('이미 사용 중인 아이디예요');return;}
  users[id]={pw:btoa(pw),name};
  localStorage.setItem('bunriri_users',JSON.stringify(users));
  S.user={id,name};
  S.inviteCode='BR-'+id.toUpperCase().slice(0,4)+Math.floor(1000+Math.random()*9000);
  saveS(); toast('가입 완료! 환영해요 🎉');
  showScreen('screen-location');
}
function doGuest() {
  S.user={id:'guest',name:'게스트'};
  checkReset(); saveS();
  showScreen(S.profile.college?'screen-main':'screen-location');
}
function doLogout() {
  if(!confirm('로그아웃 하시겠어요?')) return;
  if(S.user&&S.user.id!=='guest') localStorage.setItem('bunriri_data_'+S.user.id,JSON.stringify(S));
  S.user=null; saveS(); showScreen('screen-login');
}

// ===== LOCATION =====
function selectChip(btn, group, val) {
  document.querySelectorAll('#'+group+'-group .chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); chipState[group]=val;
}
function loadDepts() {
  const col=document.getElementById('sel-college').value, sel=document.getElementById('sel-dept');
  sel.innerHTML='<option value="">선택하세요</option>';
  if(col&&DEPTS[col]) DEPTS[col].forEach(d=>{const o=document.createElement('option');o.value=d;o.textContent=d;sel.appendChild(o);});
}
function saveLocation() {
  const college=document.getElementById('sel-college').value, dept=document.getElementById('sel-dept').value;
  if(!college||!dept){toast('단과대와 학과를 선택해주세요');return;}
  if(!chipState.res){toast('거주지 유형을 선택해주세요');return;}
  if(!chipState.reg){toast('지역을 선택해주세요');return;}
  S.profile={college,dept,res:chipState.res,reg:chipState.reg};
  saveS(); toast('✅ 설정 완료!');
  setTimeout(()=>showScreen('screen-main'),600);
}

// ===== MAIN =====
function refreshMain() {
  if(!S.user) return;
  const h=new Date().getHours();
  const greet = h<12?'좋은 아침이에요':h<18?'안녕하세요':'좋은 저녁이에요';
  document.getElementById('greeting').textContent=greet+', '+S.user.name+'님! 🌱';
  document.getElementById('user-badge').textContent='📍 '+(S.profile.college?S.profile.college+' · '+S.profile.dept:'위치 미설정');
  document.getElementById('home-pts').textContent=S.points.total;
  document.getElementById('today-txt').textContent=S.points.today+' / 100P';
  document.getElementById('prog-fill').style.width=Math.min(S.points.today,100)+'%';
  const m=MISSIONS[new Date().getDay()%MISSIONS.length];
  const prog=S.missionProg[m.id]||0;
  document.getElementById('mc-text').textContent=m.desc;
  document.getElementById('mc-reward').textContent=S.missionDone[m.id]?'✅ 완료!':'진행: '+prog+'/'+m.target+' | 달성 시 랜덤 보너스!';
}

// ===== SEARCH =====
function searchProducts(q) {
  const wrap=document.getElementById('search-results');
  if(!q.trim()){wrap.innerHTML='';return;}
  const results=Object.entries(PRODUCTS).filter(([k,p])=>p.name.includes(q)||p.material.includes(q));
  wrap.innerHTML=results.slice(0,4).map(([k,p])=>`<div class="sr-item" onclick="onScan('${k}')"><span>${p.emoji} ${p.name}</span><span style="font-size:12px;color:#5a7d67">${p.material}</span></div>`).join('');
}

// ===== SCAN =====
function onScan(code) {
  const p=PRODUCTS[code]; if(!p){toast('⚠️ 등록되지 않은 제품이에요');return;}
  curProduct={...p,code}; checkedSet=new Set();
  document.getElementById('prod-hero').innerHTML=`<div class="prod-hero"><div class="ph-em">${p.emoji}</div><div><div class="ph-name">${p.name}</div><div class="ph-mat">${p.material}</div></div></div>`;
  document.getElementById('tip-box').textContent=p.tip;
  const wrap=document.getElementById('cl-items'); wrap.innerHTML='';
  p.checklist.forEach((label,i)=>{
    const d=document.createElement('div'); d.className='cl-item'; d.id='ci'+i;
    d.onclick=()=>toggleCI(i,p.checklist.length);
    d.innerHTML=`<div class="cl-circle" id="cc${i}"></div><div class="cl-label">${label}</div>`;
    wrap.appendChild(d);
  });
  document.getElementById('btn-done').disabled=true;
  showScreen('screen-checklist');
  // 자동 음성 안내
  setTimeout(()=>playVoice(),500);
}
function toggleCI(i,total) {
  const item=document.getElementById('ci'+i), circle=document.getElementById('cc'+i);
  if(checkedSet.has(i)){checkedSet.delete(i);item.classList.remove('done');circle.textContent='';}
  else{checkedSet.add(i);item.classList.add('done');circle.textContent='✓';}
  document.getElementById('btn-done').disabled=checkedSet.size<total;
}
function completeScan() {
  if(S.points.today>=100){toast('오늘 최대 포인트 100P 달성! 🎉');return;}
  S.points.total+=1; S.points.today+=1; S.totalScans+=1;
  updateMission(); saveS();
  showCongrats('✅','분리수거 완료!',curProduct.name+' 분리수거 완료!\n+1P 적립! (총 '+S.points.total+'P)');
  setTimeout(()=>{stopVoice();closeModal('modal-congrats');showScreen('screen-main');},2500);
}
function updateMission() {
  const m=MISSIONS[new Date().getDay()%MISSIONS.length];
  if(S.missionDone[m.id]) return;
  S.missionProg[m.id]=(S.missionProg[m.id]||0)+1;
  if(S.missionProg[m.id]>=m.target){
    const r=m.reward[Math.floor(Math.random()*m.reward.length)];
    S.points.total+=r; S.missionDone[m.id]=true;
    setTimeout(()=>showCongrats('🎯','미션 완료!',m.name+' 달성!\n랜덤 보너스 +'+r+'P 지급! 🎉'),3000);
  }
}

// ===== VOICE =====
function playVoice() {
  if(!curProduct||!window.speechSynthesis){toast('음성 기능을 지원하지 않는 브라우저예요');return;}
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(curProduct.voice);
  u.lang='ko-KR'; u.rate=voiceSpeed; u.pitch=1.05;
  const voices=window.speechSynthesis.getVoices();
  const kv=voices.find(v=>v.lang==='ko-KR'&&v.name.includes('Google'))||voices.find(v=>v.lang==='ko-KR');
  if(kv) u.voice=kv;
  window.speechSynthesis.speak(u);
}
function stopVoice() { window.speechSynthesis&&window.speechSynthesis.cancel(); }
function changeSpeed(v) { voiceSpeed=parseFloat(v); }
function speakText(text) {
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang='ko-KR'; u.rate=voiceSpeed; u.pitch=1.05;
  const voices=window.speechSynthesis.getVoices();
  const kv=voices.find(v=>v.lang==='ko-KR'&&v.name.includes('Google'))||voices.find(v=>v.lang==='ko-KR');
  if(kv) u.voice=kv;
  window.speechSynthesis.speak(u);
}

// ===== VOICE SEARCH =====
function startVoiceSearch() {
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast('이 브라우저는 음성인식을 지원하지 않아요');return;}
  const r=new SR(); r.lang='ko-KR';
  r.onresult=e=>{
    const text=e.results[0][0].transcript;
    document.getElementById('main-search').value=text;
    searchProducts(text);
    toast('🎤 "'+text+'" 검색 완료!');
    const found=Object.entries(PRODUCTS).find(([k,p])=>p.name.includes(text)||text.includes(p.name.split(' ')[0]));
    if(found) setTimeout(()=>onScan(found[0]),800);
  };
  r.onerror=()=>toast('음성 인식에 실패했어요');
  r.start(); toast('🎤 말씀하세요! (예: 삼다수, 치킨뼈)');
}

// ===== CAMERA =====
function startCam() {
  document.getElementById('cam-ph').style.display='none';
  document.getElementById('cam-on').style.display='none';
  document.getElementById('cam-off').style.display='block';
  qrScanner=new Html5Qrcode('qr-reader');
  qrScanner.start({facingMode:'environment'},{fps:10,qrbox:{width:200,height:200}},
    code=>{stopCam();onScan(code);},
    ()=>{}
  ).catch(()=>{toast('카메라 권한이 필요해요');stopCam();});
  toast('📷 바코드를 카메라에 비춰주세요!');
}
function stopCam() {
  if(qrScanner){qrScanner.stop().catch(()=>{});qrScanner=null;}
  document.getElementById('cam-on').style.display='block';
  document.getElementById('cam-off').style.display='none';
  document.getElementById('cam-ph').style.display='flex';
}

// ===== MATERIAL =====
function showMaterial(name) {
  const g=MATERIALS[name];
  document.getElementById('mat-title').textContent=g.emoji+' '+name+' 배출 방법';
  const voiceText=name+'배출 방법입니다. '+g.desc+' 배출 가능한 것은 '+g.good.join(', ')+'입니다. '+(g.bad.length?'배출 불가능한 것은 '+g.bad.join(', ')+'입니다.':'');
  document.getElementById('mat-body').innerHTML=`
    <div class="mat-hero"><div class="mat-big">${g.emoji}</div><p class="mat-desc">${g.desc}</p></div>
    <div class="section-head" style="color:var(--g1)">✅ 배출 가능</div>
    <div class="rule-card"><div class="rule-items">${g.good.map(x=>'• '+x).join('<br>')}</div></div>
    ${g.bad.length?`<div class="section-head" style="color:var(--danger);margin-top:12px">❌ 배출 불가</div><div class="rule-card bad"><div class="rule-items">${g.bad.map(x=>'• '+x).join('<br>')}</div></div>`:''}
    <div class="voice-row" style="margin-top:14px">
      <button class="vbtn" onclick="speakText('${voiceText.replace(/'/g,"\\'")}')">🔊 음성 안내</button>
      <button class="vbtn" onclick="stopVoice()">⏹ 멈추기</button>
    </div>
  `;
  showScreen('screen-material');
}

// ===== MISSION =====
function renderMission() {
  const today=new Date().getDay(), m=MISSIONS[today%MISSIONS.length];
  const prog=S.missionProg[m.id]||0, done=!!S.missionDone[m.id];
  const pct=Math.min((prog/m.target)*100,100);
  document.getElementById('mission-body').innerHTML=`
    <div class="miss-big">
      <div class="mb-title">🎯 ${m.name}</div>
      <div class="mb-sub">${m.desc}</div>
      <div class="mb-prog"><div class="mb-fill" style="width:${pct}%"></div></div>
      <div class="mb-lab">${done?'✅ 완료!':prog+'/'+m.target+' 진행 중'}</div>
    </div>
    <div class="section-head">📋 전체 미션</div>
    ${MISSIONS.map(mi=>`
      <div class="miss-item">
        <div><div class="mi-name">${mi.name}</div><div class="mi-desc">${mi.desc}</div></div>
        ${S.missionDone[mi.id]?'<div class="mi-done">완료!</div>':'<div class="mi-pt">랜덤 보너스</div>'}
      </div>`).join('')}
    <div style="margin-top:14px;padding:12px;background:var(--pale);border-radius:12px;font-size:13px;color:var(--g1);line-height:1.7;">
      💡 미션 보너스는 하루 최대 100P 제한과 별개로 추가 적립돼요!
    </div>
  `;
}

// ===== RANKING =====
function renderRanking() {
  const data=[...RANKING_BASE.map(d=>({...d}))];
  if(S.profile.college){const idx=data.findIndex(d=>d.college===S.profile.college);if(idx>=0)data[idx].pts+=S.points.total;}
  data.sort((a,b)=>b.pts-a.pts);
  const myRank=S.profile.college?data.findIndex(d=>d.college===S.profile.college)+1:null;
  document.getElementById('ranking-body').innerHTML=`
    <div class="rank-my">${S.profile.college?`<div style="font-weight:700;font-size:15px">${S.profile.college} · ${myRank}위</div><div style="opacity:.75;font-size:12px;margin-top:3px">내 기여 포인트: ${S.points.total}P</div>`:'<div>단과대를 설정하면 랭킹에 참여해요!</div>'}</div>
    ${data.map((d,i)=>`<div class="rank-item" style="${S.profile.college===d.college?'border:2px solid var(--g2);':''}"><div class="ri-num">${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1}</div><div class="ri-col">${d.college}</div><div class="ri-pt">${d.pts.toLocaleString()}P</div></div>`).join('')}
  `;
}

// ===== MYPAGE =====
function renderMypage() {
  document.getElementById('mypage-body').innerHTML=`
    <div class="my-hero">
      <div class="my-av">🌱</div>
      <div class="my-name">${S.user?.name||'게스트'}</div>
      <div class="my-col">${S.profile.college||'소속 미설정'} ${S.profile.dept?'· '+S.profile.dept:''}</div>
    </div>
    <div class="my-stats">
      <div class="my-stat"><div class="ms-val">${S.points.total}P</div><div class="ms-lab">총 포인트</div></div>
      <div class="my-stat"><div class="ms-val">${S.points.today}P</div><div class="ms-lab">오늘 적립</div></div>
      <div class="my-stat"><div class="ms-val">${S.totalScans}회</div><div class="ms-lab">총 스캔</div></div>
    </div>
    <div class="section-head">🎁 포인트 사용처 (예정)</div>
    <div class="reward-item"><div class="ri-em">☕</div><div><div class="ri-rn">개신문화관 카페 아메리카노</div><div class="ri-rp">500P</div></div></div>
    <div class="reward-item"><div class="ri-em">🍱</div><div><div class="ri-rn">학생식당 식권 할인</div><div class="ri-rp">300P</div></div></div>
    <div class="reward-item"><div class="ri-em">🖨️</div><div><div class="ri-rn">도서관 복사/프린트</div><div class="ri-rp">100P</div></div></div>
    ${S.inviteCode?`<div class="section-head" style="margin-top:16px">🔑 내 초대 코드</div><div class="invite-code-box" onclick="copyInviteCode()">${S.inviteCode}</div>`:''}
    <button class="btn-outline" style="margin-top:14px;margin-bottom:8px" onclick="showScreen('screen-community')">💬 커뮤니티</button>
    <button class="btn-outline" style="margin-bottom:8px" onclick="showScreen('screen-location')">📍 위치 재설정</button>
    <button class="logout-btn" onclick="doLogout()">로그아웃</button>
  `;
}

// ===== COMMUNITY =====
function renderCommunity() {
  const posts = JSON.parse(localStorage.getItem(POSTS_KEY)||'[]');
  document.getElementById('community-body').innerHTML=`
    <div class="community-input-wrap">
      <textarea class="community-input" id="post-input" rows="3" placeholder="분리수거 성공 후기나 팁을 공유해요! 🌱"></textarea>
      <button class="btn-primary" style="padding:10px" onclick="submitPost()">게시하기</button>
    </div>
    <div class="section-head">📢 커뮤니티 게시판</div>
    ${posts.length===0?'<div style="text-align:center;padding:40px;color:#888">아직 게시물이 없어요.<br>첫 후기를 남겨보세요! 🌱</div>':
    posts.slice().reverse().map((p,i)=>`
      <div class="post-card">
        <div class="post-user">🌱 ${p.user} · ${p.college||'소속 미설정'} · ${p.time}</div>
        <div class="post-text">${p.text}</div>
        <div class="post-actions">
          <button class="post-btn" onclick="likePost(${posts.length-1-i})">👍 ${p.likes||0}</button>
          <button class="post-btn">💬 응원하기</button>
        </div>
      </div>`).join('')}
  `;
}
function submitPost() {
  const text=document.getElementById('post-input').value.trim();
  if(!text){toast('내용을 입력해주세요');return;}
  const posts=JSON.parse(localStorage.getItem(POSTS_KEY)||'[]');
  posts.push({user:S.user?.name||'게스트',college:S.profile.college,text,time:new Date().toLocaleDateString('ko-KR'),likes:0});
  localStorage.setItem(POSTS_KEY,JSON.stringify(posts));
  renderCommunity(); toast('✅ 게시물이 등록됐어요!');
}
function likePost(idx) {
  const posts=JSON.parse(localStorage.getItem(POSTS_KEY)||'[]');
  if(posts[idx]){posts[idx].likes=(posts[idx].likes||0)+1;localStorage.setItem(POSTS_KEY,JSON.stringify(posts));renderCommunity();}
}

// ===== INVITE =====
function openInvite() {
  if(!S.inviteCode) S.inviteCode='BR-'+(S.user?.id||'USER').toUpperCase().slice(0,4)+Math.floor(1000+Math.random()*9000);
  document.getElementById('invite-code-disp').textContent=S.inviteCode;
  document.getElementById('modal-invite').classList.add('open');
}
function copyInviteCode() {
  const code=S.inviteCode||document.getElementById('invite-code-disp').textContent;
  navigator.clipboard?.writeText(code).then(()=>toast('📋 코드가 복사됐어요!')).catch(()=>toast('코드: '+code));
}
function useInviteCode() {
  const code=document.getElementById('friend-code').value.trim().toUpperCase();
  if(!code){toast('코드를 입력해주세요');return;}
  if(S.usedInvite){toast('이미 초대 코드를 사용했어요');return;}
  if(code===S.inviteCode){toast('내 코드는 사용할 수 없어요 😅');return;}
  S.points.total+=500; S.usedInvite=true; saveS();
  closeModal('modal-invite');
  showCongrats('🎉','초대 코드 사용!','친구 초대 코드가 적용됐어요!\n+500P 지급! 🎉');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ===== CONGRATS =====
function showCongrats(emoji, title, body) {
  document.getElementById('congrats-emoji').textContent=emoji;
  document.getElementById('congrats-title').textContent=title;
  document.getElementById('congrats-body').textContent=body;
  document.getElementById('modal-congrats').classList.add('open');
}

// ===== TOAST =====
function toast(msg) {
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

window.addEventListener('load', init);
