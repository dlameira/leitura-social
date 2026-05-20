const DIRECTUS_URL = 'https://directus-production-afdd.up.railway.app';

// ─── Dados: experts (esquerda) ────────────────────────────────────────────────
const ANNOTATIONS = {
  h1: {
    quote: 'teve a ideia de fundar uma igreja.',
    experts: [
      { initials:'MP', color:6, author:'Przybyiski (2008)',
        text: 'Publicado em fevereiro de 1883 na Gazeta de Notícias, o jornal mais lido do Rio. Ocupou as três colunas finais da primeira página — o prestígio que Machado já comandava. O conto inova ao inverter radicalmente o tópos da tentação: não é o Diabo que é tentado ou vencido, mas que toma iniciativa institucional.',
        cite: '— UniLetras, v. 30, n. 1' },
    ],
  },
  h2: {
    quote: 'dos remanescentes divinos, dos descuidos e obséquios humanos. Nada fixo, nada regular.',
    experts: [],
  },
  h3: {
    quote: 'Escritura contra Escritura, breviário contra breviário.',
    experts: [
      { initials:'AC', color:6, author:'Costrino & Pereira (UFOP)',
        text: 'A construção especular remete à tradição luciânica de Luciano de Samósata (c. 125 d.C.): sátira menipeia que usa a inversão do discurso sagrado para expor a arbitrariedade dos sistemas morais. Não há texto original — só cópias que se combatem.',
        cite: '— Caletroscópio, UFOP' },
    ],
  },
  h4: {
    quote: 'Não venho pelo vosso servo Fausto — respondeu o Diabo rindo —, mas por todos os Faustos do século e dos séculos.',
    experts: [
      { initials:'FM', color:6, author:'Felipe Matias (2007)',
        text: 'O diálogo ecoa o "Prólogo no Céu" do Fausto de Goethe (1808). Mas onde Goethe negocia uma alma, Machado universaliza. O Diabo não quer casos individuais — quer a estrutura que os produz. É uma crítica sistêmica, não biográfica.',
        cite: '— Mafuá, n. 8, UFSC' },
    ],
  },
  h5: {
    quote: 'Não tarda muito que o céu fique semelhante a uma casa vazia, por causa do preço, que é alto.',
    experts: [],
  },
  h6: {
    quote: 'as virtudes, filhas do céu, são em grande número comparáveis a rainhas, cujo manto de veludo rematasse em franjas de algodão.',
    experts: [
      { initials:'PN', color:6, author:'Pereira Neto (2021)',
        text: 'A imagem da franja de algodão condensa o argumento central do conto: toda virtude carrega em si a semente de seu contrário. Machado "dissimula" esse pessimismo colocando a lucidez na boca do Diabo — o leitor percebe o argumento como convincente antes de perceber sua fonte.',
        cite: '— Machado de Assis em Linha, v. 14, SciELO' },
    ],
  },
  h7: {
    quote: 'Tu és vulgar, que é o pior que pode acontecer a um espírito da tua espécie',
    experts: [],
  },
  h8: {
    quote: 'A misantropia pode tomar aspecto de caridade; deixar a vida aos outros, para um misantropo, é realmente aborrecê-los...',
    experts: [
      { initials:'DL', color:6, author:'Davi Lima (2021)',
        text: 'O paradoxo central da sátira machadiana: o Diabo não inventa novos vícios — demonstra que as virtudes já contêm os vícios dentro delas. O misantropo que "deixa a vida aos outros" pratica uma caridade que é, no fundo, desprezo. Toda forma de bem pode ser lida como mal.',
        cite: '— Plano Crítico' },
    ],
  },
  h9: {
    quote: 'não o Diabo das noites sulfúreas, dos contos soníferos, terror das crianças, mas o Diabo verdadeiro e único, o próprio gênio da natureza.',
    experts: [
      { initials:'AE', color:6, author:'Enoque (2023)',
        text: 'O Diabo como "gênio da natureza" transforma o mal de exceção em regra imanente. Não é uma força externa que corrompe — é a própria constituição do mundo. Isso retira toda possibilidade de inocência: não há estado anterior ao mal que se possa recuperar.',
        cite: '— REVER, v. 23, n. 1, PUC-SP' },
    ],
  },
  h10: {
    quote: 'A soberba, a luxúria, a preguiça foram reabilitadas, e assim também a avareza, que declarou não ser mais do que a mãe da economia.',
    experts: [],
  },
  h11: {
    quote: 'A venalidade, disse o Diabo, era o exercício de um direito superior a todos os direitos.',
    experts: [
      { initials:'PM', color:6, author:'Paulo Moreira (2022)',
        text: 'A elevação da venalidade a "direito superior" é a crítica mais direta ao Brasil da época: o Segundo Reinado viu a compra e venda de cargos, votos e consciências como prática institucionalizada. Machado constrói uma alegoria universal que, ao mesmo tempo, aponta para o particular.',
        cite: '— Hispania, Academia.edu' },
    ],
  },
  h12: {
    quote: 'como é que não podes vender a tua opinião, o teu voto, a tua palavra, a tua fé, cousas que são mais do que tuas, porque são a tua própria consciência, isto é, tu mesmo?',
    experts: [],
  },
  h13: {
    quote: '«Leve a breca o próximo! Não há próximo!»',
    experts: [
      { initials:'CS', color:6, author:'Souza & Castro (2024)',
        text: 'Inversão direta do mandamento cristão ("amar o próximo como a si mesmo"). Comparando com o Screwtape de C.S. Lewis (1942): ambos os diabos operam pela dissolução do senso de responsabilidade coletiva. Diferença: o diabo machadiano é institucional; o de Lewis é psicológico e individual.',
        cite: '— Cordis, PUC-SP' },
    ],
  },
  h14: {
    quote: 'muitos dos seus fiéis, às escondidas, praticavam as antigas virtudes.',
    experts: [
      { initials:'RR', color:6, author:'Ricardo Roveran (2017)',
        text: 'Machado não afirma que o homem é bom por natureza — afirma que é constitutivamente inconsistente. A virtude que retorna não é redenção, é recaída. "O homem não peca por prazer niilista, mas por confusão mental." O bem e o mal não são escolhas estáveis.',
        cite: '— roveran.wordpress.com' },
    ],
  },
  h15: {
    quote: 'um droguista do Levante, que envenenara longamente uma geração inteira, e, com o produto das drogas, socorria os filhos das vítimas.',
    experts: [],
  },
  h16: {
    quote: 'As capas de algodão têm agora franjas de seda, como as de veludo tiveram franjas de algodão.',
    experts: [
      { initials:'PN', color:6, author:'Pereira Neto (2021)',
        text: 'A inversão da imagem da franja fecha o argumento com precisão cirúrgica: o que era franja no bem tornou-se centro no mal, e vice-versa. É a estrutura do "eterno retorno" aplicada à moral — não como progresso, mas como oscilação sem fim e sem direção.',
        cite: '— Machado de Assis em Linha, v. 14, SciELO' },
    ],
  },
  h17: {
    quote: 'É a eterna contradição humana.',
    experts: [
      { initials:'FM', color:6, author:'Felipe Matias (2007)',
        text: '"A eterna contradição humana" é a formulação mais densa do pessimismo machadiano: não há resolução, não há aprendizado, não há redenção. O conto não termina com uma moral — termina com um diagnóstico. Deus não intervém; constata. E a constatação é suficiente para paralisar qualquer otimismo.',
        cite: '— Mafuá, n. 8, UFSC' },
    ],
  },
};

// ─── Cache de comentários (Directus) ─────────────────────────────────────────
let commentsCache = {};

async function fetchAllComments() {
  try {
    const r = await fetch(`${DIRECTUS_URL}/items/leitura_comments?limit=-1&sort[]=date_created`);
    if (!r.ok) return;
    const { data } = await r.json();
    commentsCache = {};
    for (const c of data) {
      if (!commentsCache[c.highlight_id]) commentsCache[c.highlight_id] = [];
      commentsCache[c.highlight_id].push(c);
    }
  } catch (e) { console.warn('Erro ao carregar comentários:', e); }
}

async function postComment(highlightId, text, parentId = null) {
  const p = getUserProfile();
  const r = await fetch(`${DIRECTUS_URL}/items/leitura_comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      highlight_id: highlightId,
      author:   p.author,
      initials: p.initials,
      color:    p.color,
      text,
      parent_id: parentId || null,
    }),
  });
  const { data } = await r.json();
  if (!commentsCache[highlightId]) commentsCache[highlightId] = [];
  commentsCache[highlightId].push(data);
  return data;
}

// ─── Perfil do usuário (localStorage) ────────────────────────────────────────
const USER_COLORS = { 1:'#8b4513', 2:'#4a7a54', 3:'#3d6a8a', 4:'#7a4f8a', 5:'#2a7a6a' };

function getUserProfile() {
  return {
    author:   localStorage.getItem('userName')     || 'Leitor',
    initials: localStorage.getItem('userInitials') || '?',
    color:    parseInt(localStorage.getItem('userColor') || '3'),
  };
}

// ─── Comentários locais (grifos do usuário) ───────────────────────────────────
function loadLocalComments() {
  try { return JSON.parse(localStorage.getItem('leia_local') || '{}'); } catch(e) { return {}; }
}
function saveLocalComments(d) { localStorage.setItem('leia_local', JSON.stringify(d)); }

// ─── Render de lista de comentários (críticos — somente leitura) ──────────────
function renderComments(comments) {
  return comments.map(c => {
    const textHTML = c.text ? `<p class="comment-text">${c.text}</p>` : '';
    const citeHTML = c.cite ? `<span class="comment-cite">${c.cite}</span>` : '';
    return `<div class="comment">
      <div class="comment-avatar" data-color="${c.color}">${c.initials}</div>
      <div class="comment-body">
        <span class="comment-author">${c.author}</span>
        ${textHTML}${citeHTML}
      </div>
    </div>`;
  }).join('');
}

// ─── Render card de leitores (Directus ou local p/ grifos do usuário) ────────
function renderFriendCard(highlightId) {
  const isLocal = highlightId.startsWith('u-');
  let all;
  if (isLocal) {
    const d = loadLocalComments();
    all = (d[highlightId] && d[highlightId].comments) || [];
  } else {
    all = commentsCache[highlightId] || [];
  }

  const topLevel = all.filter(c => !c.parent_id);
  const byParent = {};
  all.filter(c => c.parent_id).forEach(r => {
    if (!byParent[r.parent_id]) byParent[r.parent_id] = [];
    byParent[r.parent_id].push(r);
  });

  const commentsHTML = topLevel.map(c => {
    const replies     = byParent[c.id] || [];
    const repliesHTML = replies.map(r =>
      `<div class="reply">
        <div class="reply-avatar" data-color="${r.color}">${r.initials}</div>
        <div class="reply-content"><span class="reply-author">${r.author}</span> ${r.text}</div>
      </div>`
    ).join('');
    return `<div class="comment">
      <div class="comment-avatar" data-color="${c.color}">${c.initials}</div>
      <div class="comment-body">
        <span class="comment-author">${c.author}</span>
        <p class="comment-text">${c.text}</p>
        ${repliesHTML ? `<div class="replies">${repliesHTML}</div>` : ''}
        <button class="reply-btn" data-id="${c.id}">↩ responder</button>
        <div class="inline-form" id="rf-${c.id}" style="display:none">
          <textarea class="inline-textarea" placeholder="sua resposta..." rows="2"></textarea>
          <div class="form-row">
            <button class="form-cancel" data-target="rf-${c.id}">cancelar</button>
            <button class="form-send reply-send" data-parent="${c.id}">enviar</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  const addForm = `<div class="card-add-area">
    <button class="add-comment-btn" id="add-btn">+ comentar</button>
    <div class="inline-form" id="add-form" style="display:none">
      <textarea class="inline-textarea" placeholder="seu comentário..." rows="2"></textarea>
      <div class="form-row">
        <button class="form-cancel" data-target="add-form">cancelar</button>
        <button class="form-send add-send">enviar</button>
      </div>
    </div>
  </div>`;

  return commentsHTML + addForm;
}

// ─── Rebuild card após post ───────────────────────────────────────────────────
function rebuildFriendCard(highlightId, spanEl) {
  const data    = ANNOTATIONS[highlightId] || { quote: '' };
  const textCol = document.getElementById('textColumn');
  const rect    = spanEl.getBoundingClientRect();
  const midY    = (rect.top + rect.bottom) / 2;
  cardFriend.innerHTML =
    `<span class="card-label">Leitores</span>` +
    `<div class="card-quote">${data.quote}</div>` +
    renderFriendCard(highlightId);
  cardFriend.classList.add('visible');
  placeRight(cardFriend, textCol, midY);
  attachFriendCardEvents(highlightId, spanEl);
}

// ─── Eventos do card de leitores ─────────────────────────────────────────────
function attachFriendCardEvents(highlightId, spanEl) {
  const isLocal = highlightId.startsWith('u-');

  function toggleForm(formId) {
    const form = cardFriend.querySelector('#' + formId);
    if (!form) return;
    const opening = form.style.display === 'none';
    cardFriend.querySelectorAll('.inline-form').forEach(f => { f.style.display = 'none'; });
    if (opening) {
      form.style.display = 'block';
      const rect = cardFriend.getBoundingClientRect();
      const overflow = rect.bottom - (window.innerHeight - 8);
      if (overflow > 0) {
        const curTop = parseInt(cardFriend.style.top) || 0;
        cardFriend.style.top = Math.max(54, curTop - overflow) + 'px';
      }
      form.querySelector('textarea').focus();
    }
  }

  cardFriend.querySelectorAll('.reply-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleForm('rf-' + btn.dataset.id); });
  });

  const addBtn = cardFriend.querySelector('#add-btn');
  if (addBtn) addBtn.addEventListener('click', e => { e.stopPropagation(); toggleForm('add-form'); });

  cardFriend.querySelectorAll('.form-cancel').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const f = cardFriend.querySelector('#' + btn.dataset.target);
      if (f) f.style.display = 'none';
      cardLocked = false;
    });
  });

  // Replies
  cardFriend.querySelectorAll('.reply-send').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      const ta   = btn.closest('.inline-form').querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      btn.disabled = true;
      const parentId = btn.dataset.parent;
      try {
        if (isLocal) {
          const p = getUserProfile();
          const d = loadLocalComments();
          if (!d[highlightId]) d[highlightId] = { comments: [] };
          // find parent comment and add reply
          const parent = d[highlightId].comments.find(c => String(c.id) === String(parentId));
          if (parent) {
            if (!parent.replies) parent.replies = [];
            parent.replies.push({ ...p, text });
          }
          saveLocalComments(d);
        } else {
          await postComment(highlightId, text, parseInt(parentId));
        }
        cardLocked = false;
        rebuildFriendCard(highlightId, spanEl);
        ensureFriendBubble(highlightId, spanEl);
      } catch(err) { console.warn(err); btn.disabled = false; }
    });
  });

  // New comment
  const addSend = cardFriend.querySelector('.add-send');
  if (addSend) {
    addSend.addEventListener('click', async e => {
      e.stopPropagation();
      const ta   = addSend.closest('.inline-form').querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      addSend.disabled = true;
      try {
        if (isLocal) {
          const p = getUserProfile();
          const d = loadLocalComments();
          if (!d[highlightId]) d[highlightId] = { comments: [] };
          const localId = Date.now();
          d[highlightId].comments.push({ ...p, id: localId, text, parent_id: null });
          saveLocalComments(d);
        } else {
          await postComment(highlightId, text, null);
        }
        cardLocked = false;
        rebuildFriendCard(highlightId, spanEl);
        ensureFriendBubble(highlightId, spanEl);
      } catch(err) { console.warn(err); addSend.disabled = false; }
    });
  }

  cardFriend.querySelectorAll('.inline-textarea').forEach(ta => {
    ta.addEventListener('focus', () => { cardLocked = true; clearTimeout(hideTimer); });
  });
}

// ─── Garantir bubble de leitores após primeiro comentário ─────────────────────
function ensureFriendBubble(highlightId, spanEl) {
  const existing = document.querySelector(`.avatar-bubble[data-for="${highlightId}"][data-side="friend"]`);
  if (existing) {
    // atualiza avatares no bubble existente
    const comments = highlightId.startsWith('u-')
      ? ((loadLocalComments()[highlightId] || {}).comments || [])
      : (commentsCache[highlightId] || []);
    existing.innerHTML = '';
    comments.slice(0, 3).forEach(c => {
      const av = document.createElement('div');
      av.className = 'av'; av.dataset.color = c.color; av.textContent = c.initials;
      existing.appendChild(av);
    });
    return;
  }
  // Criar bubble novo
  const comments = highlightId.startsWith('u-')
    ? ((loadLocalComments()[highlightId] || {}).comments || [])
    : (commentsCache[highlightId] || []);
  if (!comments.length) return;
  const layer  = document.getElementById('avatarLayer');
  const layout = document.getElementById('readerLayout');
  const col    = document.getElementById('textColumn');
  const bubble = makeBubble(highlightId, comments, 'friend');
  layer.appendChild(bubble);
  placeRightBubble(bubble, spanEl, col, layout);
  bubble.addEventListener('mouseenter', () => { clearTimeout(hideTimer); showCards(spanEl, 'friend'); });
  bubble.addEventListener('mouseleave', hideCards);
}

// ─── Posicionamento ────────────────────────────────────────────────────────────
function docTop(el)  { let t = 0; while (el) { t += el.offsetTop;  el = el.offsetParent; } return t; }
function docLeft(el) { let l = 0; while (el) { l += el.offsetLeft; el = el.offsetParent; } return l; }

const cardExpert = document.getElementById('cardExpert');
const cardFriend = document.getElementById('cardFriend');
let activeSpan = null;
let hideTimer  = null;
let cardLocked = false;

function showCards(spanEl, onlySide) {
  if (document.body.classList.contains('annotations-off')) return;
  clearTimeout(hideTimer);
  if (activeSpan && activeSpan !== spanEl) activeSpan.classList.remove('active');
  spanEl.classList.add('active');
  activeSpan = spanEl;

  const id   = spanEl.dataset.highlight;
  const data = ANNOTATIONS[id] || { quote: '', experts: [] };
  const textCol  = document.getElementById('textColumn');
  const spanRect = spanEl.getBoundingClientRect();
  const midY     = (spanRect.top + spanRect.bottom) / 2;

  if ((!onlySide || onlySide === 'expert') && data.experts && data.experts.length) {
    cardExpert.innerHTML =
      `<span class="card-label">Leitura crítica</span>` +
      `<div class="card-quote">${data.quote}</div>` +
      renderComments(data.experts);
    cardExpert.classList.add('visible');
    placeLeft(cardExpert, textCol, midY);
  } else if (!onlySide || onlySide === 'expert') {
    cardExpert.classList.remove('visible');
  }

  if (!onlySide || onlySide === 'friend') {
    const friendComments = id.startsWith('u-')
      ? ((loadLocalComments()[id] || {}).comments || [])
      : (commentsCache[id] || []);
    cardFriend.innerHTML =
      `<span class="card-label">Leitores</span>` +
      `<div class="card-quote">${data.quote}</div>` +
      renderFriendCard(id);
    cardFriend.classList.add('visible');
    placeRight(cardFriend, textCol, midY);
    attachFriendCardEvents(id, spanEl);
  }
}

function placeLeft(card, textCol, midY) {
  const colRect = textCol.getBoundingClientRect();
  const gap = 12; const vh = window.innerHeight;
  card.style.right = Math.max(8, Math.round(window.innerWidth - colRect.left + gap)) + 'px';
  card.style.left  = 'auto';
  const h = card.offsetHeight || 180;
  let top = midY - h / 2;
  if (top + h > vh - 8) top = vh - h - 8;
  if (top < 54) top = 54;
  card.style.top = Math.round(top) + 'px';
}

function placeRight(card, textCol, midY) {
  const colRect = textCol.getBoundingClientRect();
  const gap = 12; const vw = window.innerWidth; const vh = window.innerHeight;
  const W = card.offsetWidth || 284;
  let left = colRect.right + gap;
  if (left + W > vw - 8) left = vw - W - 8;
  card.style.left  = Math.round(left) + 'px';
  card.style.right = 'auto';
  const h = card.offsetHeight || 180;
  let top = midY - h / 2;
  if (top + h > vh - 8) top = vh - h - 8;
  if (top < 54) top = 54;
  card.style.top = Math.round(top) + 'px';
}

function hideCards() {
  if (cardLocked) return;
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (cardLocked) return;
    cardExpert.classList.remove('visible');
    cardFriend.classList.remove('visible');
    if (activeSpan) { activeSpan.classList.remove('active'); activeSpan = null; }
  }, 140);
}

// ─── Construir avatares ───────────────────────────────────────────────────────
function buildAvatars() {
  const layer  = document.getElementById('avatarLayer');
  const layout = document.getElementById('readerLayout');
  const col    = document.getElementById('textColumn');
  layer.innerHTML = '';

  Object.keys(ANNOTATIONS).forEach(id => {
    const span = document.querySelector(`[data-highlight="${id}"]`);
    if (!span) return;
    const data = ANNOTATIONS[id];

    // Avatar de críticos — esquerda
    if (data.experts && data.experts.length) {
      const bubble = makeBubble(id, data.experts, 'expert');
      layer.appendChild(bubble);
      placeLeftBubble(bubble, span, col, layout);
      bubble.addEventListener('mouseenter', () => { clearTimeout(hideTimer); showCards(span, 'expert'); });
      bubble.addEventListener('mouseleave', hideCards);
    }

    // Avatar de leitores — direita (usa Directus cache ou local)
    const friendList = id.startsWith('u-')
      ? ((loadLocalComments()[id] || {}).comments || [])
      : (commentsCache[id] || []);
    if (friendList.length) {
      const bubble = makeBubble(id, friendList, 'friend');
      layer.appendChild(bubble);
      placeRightBubble(bubble, span, col, layout);
      bubble.addEventListener('mouseenter', () => { clearTimeout(hideTimer); showCards(span, 'friend'); });
      bubble.addEventListener('mouseleave', hideCards);
    }

    span.addEventListener('mouseenter', () => showCards(span, null));
    span.addEventListener('mouseleave', hideCards);
  });

  cardExpert.addEventListener('mouseenter', () => clearTimeout(hideTimer));
  cardExpert.addEventListener('mouseleave', hideCards);
  cardFriend.addEventListener('mouseenter', () => clearTimeout(hideTimer));
  cardFriend.addEventListener('mouseleave', hideCards);
}

function makeBubble(id, comments, side) {
  const bubble = document.createElement('div');
  bubble.className = `avatar-bubble ${side}`;
  bubble.dataset.for  = id;
  bubble.dataset.side = side;
  comments.slice(0, 3).forEach(c => {
    const av = document.createElement('div');
    av.className = 'av'; av.dataset.color = c.color; av.textContent = c.initials;
    bubble.appendChild(av);
  });
  return bubble;
}

function placeRightBubble(bubble, span, col, layout) {
  const spanT   = docTop(span);  const layoutT = docTop(layout);
  const colR    = docLeft(col) + col.offsetWidth; const layoutL = docLeft(layout);
  bubble.style.top  = Math.round(spanT - layoutT + span.offsetHeight / 2 - 13) + 'px';
  bubble.style.left = Math.round(colR - layoutL + 13) + 'px';
}

function placeLeftBubble(bubble, span, col, layout) {
  const spanT   = docTop(span);  const layoutT = docTop(layout);
  const colL    = docLeft(col);  const layoutL = docLeft(layout);
  const estW    = bubble.children.length * 22 + 6;
  bubble.style.top  = Math.round(spanT - layoutT + span.offsetHeight / 2 - 13) + 'px';
  bubble.style.left = Math.round(colL - layoutL - estW - 13) + 'px';
}

function reposition() {
  const layout = document.getElementById('readerLayout');
  const col    = document.getElementById('textColumn');
  document.querySelectorAll('.avatar-bubble').forEach(b => {
    const span = document.querySelector(`[data-highlight="${b.dataset.for}"]`);
    if (!span) return;
    if (b.dataset.side === 'expert') placeLeftBubble(b, span, col, layout);
    else placeRightBubble(b, span, col, layout);
  });
}

// ─── Toggle anotações ─────────────────────────────────────────────────────────
let annotationsOn = localStorage.getItem('annotations') !== 'off';
const toggleBtn   = document.getElementById('annotationToggle');
function applyAnnotations() {
  document.body.classList.toggle('annotations-off', !annotationsOn);
  toggleBtn.classList.toggle('on', annotationsOn);
  if (!annotationsOn) hideCards();
}
toggleBtn.addEventListener('click', () => {
  annotationsOn = !annotationsOn;
  localStorage.setItem('annotations', annotationsOn ? 'on' : 'off');
  applyAnnotations();
});

// ─── Tema ─────────────────────────────────────────────────────────────────────
const htmlEl = document.documentElement;
htmlEl.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── Fonte e tamanho ──────────────────────────────────────────────────────────
const SIZES = [0.9, 1.0, 1.1, 1.2, 1.32, 1.45];
let sizeIdx  = parseInt(localStorage.getItem('sizeIdx') || '2');
let fontName = localStorage.getItem('font') || 'Lora';

function applyFont() {
  htmlEl.style.setProperty('--font-body', `'${fontName}', Georgia, serif`);
  document.querySelectorAll('.fp-font-btn').forEach(b => b.classList.toggle('active', b.dataset.font === fontName));
  localStorage.setItem('font', fontName);
}
function applySize() {
  htmlEl.style.setProperty('--font-size', SIZES[sizeIdx] + 'rem');
  document.getElementById('sizeFill').style.width = (sizeIdx / (SIZES.length - 1) * 100) + '%';
  localStorage.setItem('sizeIdx', sizeIdx);
}
document.querySelectorAll('.fp-font-btn').forEach(b => b.addEventListener('click', () => { fontName = b.dataset.font; applyFont(); }));
document.getElementById('sizeDown').addEventListener('click', () => { if (sizeIdx > 0) { sizeIdx--; applySize(); } });
document.getElementById('sizeUp').addEventListener('click',   () => { if (sizeIdx < SIZES.length - 1) { sizeIdx++; applySize(); } });

const fontPanel = document.getElementById('fontPanel');
const userPanel = document.getElementById('userPanel');
document.getElementById('fontBtn').addEventListener('click', e => { e.stopPropagation(); userPanel.classList.remove('open'); fontPanel.classList.toggle('open'); });

// ─── Perfil do usuário (painel topbar) ────────────────────────────────────────
let userColor    = parseInt(localStorage.getItem('userColor')    || '3');
let userName     = localStorage.getItem('userName')     || '';
let userInitials = localStorage.getItem('userInitials') || '';

function applyUserProfile() {
  const av = document.getElementById('userAv');
  av.textContent = userInitials || '?';
  av.style.background = USER_COLORS[userColor] || '#3d6a8a';
}
document.getElementById('userBtn').addEventListener('click', e => {
  e.stopPropagation(); fontPanel.classList.remove('open'); userPanel.classList.toggle('open');
  document.getElementById('upName').value     = userName;
  document.getElementById('upInitials').value = userInitials;
  document.querySelectorAll('.up-color').forEach(b => b.classList.toggle('active', parseInt(b.dataset.color) === userColor));
  document.getElementById('upPreview').style.background = USER_COLORS[userColor];
  document.getElementById('upPreview').textContent = userInitials || '?';
});
document.querySelectorAll('.up-color').forEach(btn => {
  btn.addEventListener('click', () => {
    userColor = parseInt(btn.dataset.color);
    document.querySelectorAll('.up-color').forEach(b => b.classList.toggle('active', b === btn));
    document.getElementById('upPreview').style.background = USER_COLORS[userColor];
  });
});
document.getElementById('upInitials').addEventListener('input', e => {
  document.getElementById('upPreview').textContent = e.target.value.toUpperCase() || '?';
});
document.getElementById('upSave').addEventListener('click', () => {
  userName     = document.getElementById('upName').value.trim();
  userInitials = document.getElementById('upInitials').value.trim().toUpperCase().slice(0, 2);
  localStorage.setItem('userName',     userName);
  localStorage.setItem('userInitials', userInitials);
  localStorage.setItem('userColor',    userColor);
  applyUserProfile();
  userPanel.classList.remove('open');
});

document.addEventListener('click', () => { fontPanel.classList.remove('open'); userPanel.classList.remove('open'); });
fontPanel.addEventListener('click', e => e.stopPropagation());
userPanel.addEventListener('click', e => e.stopPropagation());

// ─── Progresso ────────────────────────────────────────────────────────────────
const progressEl = document.getElementById('progressText');
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? Math.round(window.scrollY / h * 100) : 0;
  progressEl.textContent = p + '%';
  htmlEl.style.setProperty('--scroll-progress', p + '%');
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', reposition,     { passive: true });

// ─── Grifos do usuário (local) ────────────────────────────────────────────────
function findAndWrapText(searchText, id) {
  const body   = document.querySelector('.text-body');
  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  const nodes  = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  let full = '';
  const map = nodes.map(n => { const s = full.length; full += n.textContent; return { n, s }; });
  const idx = full.indexOf(searchText);
  if (idx < 0) return false;
  const endIdx = idx + searchText.length;
  const startE = map.find(e => e.s <= idx    && e.s + e.n.textContent.length > idx);
  const endE   = map.find(e => e.s <  endIdx && e.s + e.n.textContent.length >= endIdx);
  if (!startE || !endE) return false;
  const range = document.createRange();
  range.setStart(startE.n, idx    - startE.s);
  range.setEnd  (endE.n,   endIdx - endE.s);
  try {
    const span = document.createElement('span');
    span.dataset.highlight = id;
    range.surroundContents(span);
    return true;
  } catch(e) { return false; }
}

function applyUserHighlights() {
  const d = loadLocalComments();
  Object.entries(d).forEach(([id, data]) => {
    if (!id.startsWith('u-') || !data.range) return;
    const q = data.range.text;
    ANNOTATIONS[id] = { quote: q.length > 80 ? q.slice(0,80)+'…' : q, experts: [] };
    findAndWrapText(q, id);
  });
}

// ─── Popover de seleção ───────────────────────────────────────────────────────
const annotationPopover = document.getElementById('annotationPopover');
const annotateBtn       = document.getElementById('annotateBtn');
const annotateForm      = document.getElementById('annotateForm');
const annotateText      = document.getElementById('annotateText');
let   pendingRange      = null;

function showPopover(rect) {
  annotationPopover.style.display = 'block';
  annotateForm.style.display      = 'none';
  annotateBtn.style.display       = 'block';
  annotateText.value = '';
  const left = Math.max(60, Math.min(rect.left + rect.width / 2, window.innerWidth - 60));
  annotationPopover.style.left = left + 'px';
  annotationPopover.style.top  = (rect.bottom + 8) + 'px';
}
function hidePopover() { annotationPopover.style.display = 'none'; pendingRange = null; }

document.querySelector('.text-body').addEventListener('mouseup', () => {
  setTimeout(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { hidePopover(); return; }
    const text = sel.toString().trim();
    if (text.length < 3) { hidePopover(); return; }
    const range    = sel.getRangeAt(0);
    const textBody = document.querySelector('.text-body');
    if (!textBody.contains(range.commonAncestorContainer)) { hidePopover(); return; }
    const pOf = n => (n.nodeType === 3 ? n.parentElement : n).closest('[data-line]');
    if (!pOf(range.startContainer) || pOf(range.startContainer) !== pOf(range.endContainer)) { hidePopover(); return; }
    pendingRange = { text, savedRange: range.cloneRange() };
    showPopover(range.getBoundingClientRect());
  }, 10);
});

annotateBtn.addEventListener('click', e => {
  e.stopPropagation();
  annotateBtn.style.display  = 'none';
  annotateForm.style.display = 'block';
  annotateText.focus();
  const rect     = annotationPopover.getBoundingClientRect();
  const overflow = rect.bottom - (window.innerHeight - 8);
  if (overflow > 0) annotationPopover.style.top = Math.max(58, parseInt(annotationPopover.style.top) - overflow) + 'px';
});

document.getElementById('annotateCancel').addEventListener('click', () => {
  hidePopover(); window.getSelection()?.removeAllRanges();
});

document.getElementById('annotateSend').addEventListener('click', () => {
  const text = annotateText.value.trim();
  if (!text || !pendingRange) return;
  const p   = getUserProfile();
  const d   = loadLocalComments();
  const uid = 'u-' + Date.now();
  const q   = pendingRange.text;
  d[uid] = { range: { text: q }, comments: [{ ...p, id: Date.now(), text, parent_id: null }] };
  saveLocalComments(d);
  ANNOTATIONS[uid] = { quote: q.length > 80 ? q.slice(0,80)+'…' : q, experts: [] };
  const ok = findAndWrapText(q, uid);
  if (ok) {
    const span = document.querySelector(`[data-highlight="${uid}"]`);
    if (span) ensureFriendBubble(uid, span);
  }
  hidePopover();
  window.getSelection()?.removeAllRanges();
});

annotationPopover.addEventListener('mousedown', e => e.stopPropagation());
document.addEventListener('mousedown', e => { if (!annotationPopover.contains(e.target)) hidePopover(); });

// ─── Onboarding ───────────────────────────────────────────────────────────────
function initOnboarding() {
  const overlay  = document.getElementById('onboardingOverlay');
  if (!overlay) return;

  // Se já tem nome salvo, esconde o overlay imediatamente
  if (localStorage.getItem('userName')) { overlay.classList.add('hidden'); return; }

  const obName    = document.getElementById('obName');
  const obInits   = document.getElementById('obInitials');
  const obPreview = document.getElementById('obPreview');
  const obSave    = document.getElementById('obSave');
  let   obColor   = 3;

  obPreview.style.background = USER_COLORS[obColor];

  // Auto-gerar iniciais a partir do nome
  obName.addEventListener('input', () => {
    if (obInits.dataset.manual) return;
    const parts = obName.value.trim().split(/\s+/).filter(Boolean);
    const auto = parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : (parts[0] || '').slice(0, 2).toUpperCase();
    obInits.value = auto;
    obPreview.textContent = auto || '?';
  });

  obInits.addEventListener('input', () => {
    obInits.dataset.manual = '1';
    obPreview.textContent = obInits.value.toUpperCase() || '?';
  });

  document.querySelectorAll('.ob-color').forEach(btn => {
    btn.addEventListener('click', () => {
      obColor = parseInt(btn.dataset.color);
      document.querySelectorAll('.ob-color').forEach(b => b.classList.toggle('active', b === btn));
      obPreview.style.background = USER_COLORS[obColor];
    });
  });

  obSave.addEventListener('click', () => {
    const name = obName.value.trim();
    if (!name) { obName.focus(); obName.style.borderColor = 'var(--accent)'; return; }
    const initials = (obInits.value.trim().toUpperCase().slice(0, 2))
      || name.slice(0, 2).toUpperCase();
    localStorage.setItem('userName',     name);
    localStorage.setItem('userInitials', initials);
    localStorage.setItem('userColor',    obColor);
    // Sync global vars
    userName     = name;
    userInitials = initials;
    userColor    = obColor;
    applyUserProfile();
    overlay.classList.add('hidden');
  });

  obName.focus();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
window.addEventListener('load', async () => {
  initOnboarding();
  applyAnnotations();
  applyFont();
  applySize();
  applyUserProfile();
  updateProgress();
  applyUserHighlights();

  // Carrega comentários do Directus e constrói avatares
  await fetchAllComments();
  buildAvatars();
});
