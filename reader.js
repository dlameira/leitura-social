// ─── Dados: experts (esquerda) e friends (direita) ───────────────────────────
const ANNOTATIONS = {
  h1: {
    quote: 'teve a ideia de fundar uma igreja.',
    experts: [
      { initials:'MP', color:6, author:'Przybyiski (2008)',
        text: 'Publicado em fevereiro de 1883 na Gazeta de Notícias, o jornal mais lido do Rio. Ocupou as três colunas finais da primeira página — o prestígio que Machado já comandava. O conto de Machado inova ao inverter radicalmente o tópos da tentação: não é o Diabo que é tentado ou vencido, mas que toma iniciativa institucional.',
        cite: '— UniLetras, v. 30, n. 1' },
    ],
    friends: [
      { initials:'MR', color:1, author:'Mariana R.', text: 'o diabo lendo livro de gestão e decidindo montar o próprio negócio.' },
      { initials:'JP', color:2, author:'João P.', text: 'plano de negócios aprovado no inferno.',
        replies: [
          { initials:'LS', color:3, author:'Luísa S.', text: 'pitch deck com fundo vermelho' },
          { initials:'MR', color:1, author:'Mariana R.', text: 'kkkkk e fonte Comic Sans' },
        ]
      },
    ],
  },
  h2: {
    quote: 'dos remanescentes divinos, dos descuidos e obséquios humanos. Nada fixo, nada regular.',
    experts: [],
    friends: [
      { initials:'JP', color:2, author:'João P.', text: 'operando nas brechas. o mal como setor informal da moral.',
        replies: [{ initials:'LS', color:3, author:'Luísa S.', text: 'startup de baixo custo num mercado mal regulado' }]
      },
      { initials:'CA', color:4, author:'Carol A.', text: 'o "nada fixo, nada regular" soa quase como liberdade.' },
    ],
  },
  h3: {
    quote: 'Escritura contra Escritura, breviário contra breviário.',
    experts: [
      { initials:'AC', color:6, author:'Costrino & Pereira (UFOP)',
        text: 'A construção especular remete à tradição luciânica de Luciano de Samósata (c. 125 d.C.): sátira menipeia que usa a inversão do discurso sagrado para expor a arbitrariedade dos sistemas morais. Não há texto original — só cópias que se combatem.',
        cite: '— Caletroscópio, UFOP' },
    ],
    friends: [
      { initials:'LS', color:3, author:'Luísa S.', text: 'cada religião com seu próprio manual de instrução. qual é o original?' },
      { initials:'MR', color:1, author:'Mariana R.', text: 'o diabo não nega. ele copia e distribui.',
        replies: [
          { initials:'JP', color:2, author:'João P.', text: 'versão pirata do sagrado' },
          { initials:'CA', color:4, author:'Carol A.', text: 'mas sem denuncia de violação de direitos autorais' },
        ]
      },
    ],
  },
  h4: {
    quote: 'Não venho pelo vosso servo Fausto — respondeu o Diabo rindo —, mas por todos os Faustos do século e dos séculos.',
    experts: [
      { initials:'FM', color:6, author:'Felipe Matias (2007)',
        text: 'O diálogo ecoa o "Prólogo no Céu" do Fausto de Goethe (1808). Mas onde Goethe negocia uma alma, Machado universaliza. O Diabo não quer casos individuais — quer a estrutura que os produz. É uma crítica sistêmica, não biográfica.',
        cite: '— Mafuá, n. 8, UFSC' },
    ],
    friends: [
      { initials:'LS', color:3, author:'Luísa S.', text: 'ele apresentou slide para Deus. reunião de stakeholder no céu.',
        replies: [
          { initials:'MR', color:1, author:'Mariana R.', text: 'com deck em Keynote e tudo' },
          { initials:'JP', color:2, author:'João P.',   text: 'Q4 infernal. resultados acima da meta.' },
        ]
      },
      { initials:'CA', color:4, author:'Carol A.', text: 'não quer um contrato. quer o sistema inteiro.' },
    ],
  },
  h5: {
    quote: 'Não tarda muito que o céu fique semelhante a uma casa vazia, por causa do preço, que é alto.',
    experts: [],
    friends: [
      { initials:'MR', color:1, author:'Mariana R.', text: 'o paraíso como imóvel caro que ninguém consegue alugar.' },
      { initials:'JP', color:2, author:'João P.', text: 'taxa de ocupação zero. o céu em crise de demanda.',
        replies: [{ initials:'LS', color:3, author:'Luísa S.', text: 'o airbnb do inferno deve estar lotado' }]
      },
    ],
  },
  h6: {
    quote: 'as virtudes, filhas do céu, são em grande número comparáveis a rainhas, cujo manto de veludo rematasse em franjas de algodão.',
    experts: [
      { initials:'PN', color:6, author:'Pereira Neto (2021)',
        text: 'A imagem da franja de algodão condensa o argumento central do conto: toda virtude carrega em si a semente de seu contrário. Machado "dissimula" esse pessimismo colocando a lucidez na boca do Diabo — o leitor percebe o argumento como convincente antes de perceber sua fonte.',
        cite: '— Machado de Assis em Linha, v. 14, SciELO' },
    ],
    friends: [
      { initials:'CA', color:4, author:'Carol A.', text: 'a franja de algodão. peguei isso direto na cabeça.' },
      { initials:'MR', color:1, author:'Mariana R.', text: 'parece elogio mas é golpe.',
        replies: [{ initials:'JP', color:2, author:'João P.', text: 'o diabo como o rei da nota de rodapé' }]
      },
    ],
  },
  h7: {
    quote: 'Tu és vulgar, que é o pior que pode acontecer a um espírito da tua espécie.',
    experts: [],
    friends: [
      { initials:'JP', color:2, author:'João P.', text: 'deus insultando o diabo de forma refinada. "vulgar" como ofensa máxima.' },
      { initials:'LS', color:3, author:'Luísa S.', text: 'não te chamo de mau. te chamo de sem classe.',
        replies: [
          { initials:'MR', color:1, author:'Mariana R.', text: 'o pior xingamento para quem se acha sofisticado' },
          { initials:'CA', color:4, author:'Carol A.', text: 'isso dói mais que qualquer outro insulto' },
        ]
      },
    ],
  },
  h8: {
    quote: 'A misantropia pode tomar aspecto de caridade; deixar a vida aos outros, para um misantropo, é realmente aborrecê-los...',
    experts: [
      { initials:'DL', color:6, author:'Davi Lima (2021)',
        text: 'O paradoxo central da sátira machadiana: o Diabo não inventa novos vícios — demonstra que as virtudes já contêm os vícios dentro delas. O misantropo que "deixa a vida aos outros" pratica uma caridade que é, no fundo, desprezo. Toda forma de bem pode ser lida como mal.',
        cite: '— Plano Crítico' },
    ],
    friends: [
      { initials:'MR', color:1, author:'Mariana R.', text: 'a gentileza como disfarce do desinteresse. já vi isso.' },
      { initials:'JP', color:2, author:'João P.', text: 'o diabo como o melhor analista de comportamento humano.',
        replies: [{ initials:'LS', color:3, author:'Luísa S.', text: 'e sem precisar de consultório' }]
      },
    ],
  },
  h9: {
    quote: 'não o Diabo das noites sulfúreas e os rugidos sepulcrais, mas o Diabo verdadeiro e único, o próprio gênio da natureza.',
    experts: [
      { initials:'AE', color:6, author:'Enoque (2023)',
        text: 'O Diabo como "gênio da natureza" transforma o mal de exceção em regra imanente. Não é uma força externa que corrompe — é a própria constituição do mundo. Isso retira toda possibilidade de inocência: não há estado anterior ao mal que se possa recuperar.',
        cite: '— REVER, v. 23, n. 1, PUC-SP' },
    ],
    friends: [
      { initials:'CA', color:4, author:'Carol A.', text: 'não o diabo de filme de terror. o diabo de segunda-feira de manhã.', drawing: 'talker' },
      { initials:'LS', color:3, author:'Luísa S.', text: 'o mais assustador: familiar, cotidiano, sem cheiro de enxofre.',
        replies: [{ initials:'JP', color:2, author:'João P.', text: 'o horror é não ter como identificar' }]
      },
    ],
  },
  h10: {
    quote: 'A soberba, a luxúria, a preguiça foram reabilitadas, e assim também a avareza, a gula e a ira.',
    experts: [],
    friends: [
      { initials:'JP', color:2, author:'João P.', text: 'o diabo como terapeuta. "não é vício, é identidade."' },
      { initials:'MR', color:1, author:'Mariana R.', text: 'reabilitação como estratégia de marketing. rebranding do pecado.',
        replies: [
          { initials:'LS', color:3, author:'Luísa S.', text: 'a gula virou foodie e a preguiça virou self-care' },
          { initials:'CA', color:4, author:'Carol A.', text: 'machado previu o instagram' },
        ]
      },
    ],
  },
  h11: {
    quote: 'A venalidade, disse o Diabo, era o exercício de um direito superior a todos os direitos.',
    experts: [
      { initials:'PM', color:6, author:'Paulo Moreira (2022)',
        text: 'A elevação da venalidade a "direito superior" é a crítica mais direta ao Brasil da época: o Segundo Reinado viu a compra e venda de cargos, votos e consciências como prática institucionalizada. Machado constrói uma alegoria universal que, ao mesmo tempo, aponta para o particular.',
        cite: '— Hispania, Academia.edu' },
    ],
    friends: [
      { initials:'LS', color:3, author:'Luísa S.', text: 'a corrupção elevada a princípio filosófico. aí sim.' },
      { initials:'CA', color:4, author:'Carol A.', text: 'não é falha de caráter. é exercício de direito.',
        replies: [{ initials:'MR', color:1, author:'Mariana R.', text: 'o argumento mais brasileiro de todos' }]
      },
    ],
  },
  h12: {
    quote: 'como é que não podes vender a tua opinião, o teu voto, a tua palavra, a tua fé...',
    experts: [],
    friends: [
      { initials:'JP', color:2, author:'João P.', text: 'lista completa do que vende no mercado eleitoral.' },
      { initials:'MR', color:1, author:'Mariana R.', text: 'o argumento é logicamente perfeito. não tem como rebater.',
        replies: [
          { initials:'CA', color:4, author:'Carol A.', text: 'e é por isso que é perigoso' },
          { initials:'LS', color:3, author:'Luísa S.', text: 'o diabo como advogado do diabo — de si mesmo' },
        ]
      },
    ],
  },
  h13: {
    quote: '«Leve a breca o próximo! Não há próximo!»',
    experts: [
      { initials:'CS', color:6, author:'Souza & Castro (2024)',
        text: 'Inversão direta do mandamento cristão ("amar o próximo como a si mesmo"). Comparando com o Screwtape de C.S. Lewis (1942): ambos os diabos operam pela dissolução do senso de responsabilidade coletiva. Diferença: o diabo machadiano é institucional; o de Lewis é psicológico e individual.',
        cite: '— Cordis, PUC-SP' },
    ],
    friends: [
      { initials:'MR', color:1, author:'Mariana R.', text: 'o credo diabolico em uma linha. não há próximo.' },
      { initials:'JP', color:2, author:'João P.', text: 'fundamento de toda ideologia individualista. Machado em 1883.',
        replies: [{ initials:'LS', color:3, author:'Luísa S.', text: 'o símbolo da liberdade virou o slogan do egoísmo' }]
      },
    ],
  },
  h14: {
    quote: 'muitos dos seus fiéis, às escondidas, praticavam as antigas virtudes.',
    experts: [
      { initials:'RR', color:6, author:'Ricardo Roveran (2017)',
        text: 'Machado não afirma que o homem é bom por natureza — afirma que é constitutivamente inconsistente. A virtude que retorna não é redenção, é recaída. "O homem não peca por prazer niilista, mas por confusão mental." O bem e o mal não são escolhas estáveis.',
        cite: '— roveran.wordpress.com' },
    ],
    friends: [
      { initials:'CA', color:4, author:'Carol A.', text: 'os fiéis do diabo praticando o bem na surdina. hipocrisia no sentido contrário.' },
      { initials:'LS', color:3, author:'Luísa S.', text: 'a virtude como vício proibido. confessando entre si em voz baixa.',
        replies: [
          { initials:'MR', color:1, author:'Mariana R.', text: 'tipo ajudar alguém e torcer pra ninguém ver' },
          { initials:'JP', color:2, author:'João P.',   text: 'machado inventou o altruísmo com vergonha' },
        ]
      },
    ],
  },
  h15: {
    quote: 'um droguista do Levante, que envenenara longamente uma geração inteira com produtos falsificados e ruins.',
    experts: [],
    friends: [
      { initials:'JP', color:2, author:'João P.', text: 'crime de saúde pública. mas era fiel do diabo, então ok?' },
      { initials:'MR', color:1, author:'Mariana R.', text: 'o exemplo mais concreto e mais brutal do conto inteiro.',
        replies: [{ initials:'CA', color:4, author:'Carol A.', text: 'e dito de passagem, como se fosse normal' }]
      },
    ],
  },
  h16: {
    quote: 'As capas de algodão têm agora franjas de seda, como as de veludo tiveram franjas de algodão.',
    experts: [
      { initials:'PN', color:6, author:'Pereira Neto (2021)',
        text: 'A inversão da imagem da franja fecha o argumento com precisão cirúrgica: o que era franja no bem tornou-se centro no mal, e vice-versa. É a estrutura do "eterno retorno" aplicada à moral — não como progresso, mas como oscilação sem fim e sem direção.',
        cite: '— Machado de Assis em Linha, v. 14, SciELO' },
    ],
    friends: [
      { initials:'LS', color:3, author:'Luísa S.', text: 'a imagem voltou. completa o círculo do conto.' },
      { initials:'CA', color:4, author:'Carol A.', text: 'a franja que era de algodão agora é de seda. a estrutura se repete.',
        replies: [
          { initials:'JP', color:2, author:'João P.', text: 'o mal com verniz de respeitabilidade. mas continua mal' },
          { initials:'MR', color:1, author:'Mariana R.', text: 'upgrade estético, nenhuma mudança de essência' },
        ]
      },
    ],
  },
  h17: {
    quote: 'É a eterna contradição humana.',
    experts: [
      { initials:'FM', color:6, author:'Felipe Matias (2007)',
        text: '"A eterna contradição humana" é a formulação mais densa do pessimismo machadiano: não há resolução, não há aprendizado, não há redenção. O conto não termina com uma moral — termina com um diagnóstico. Deus não intervém; constata. E a constatação é suficiente para paralisar qualquer otimismo.',
        cite: '— Mafuá, n. 8, UFSC' },
    ],
    friends: [
      { initials:'MR', color:1, author:'Mariana R.', text: 'quatro palavras que resumem tudo. e não há solução.' },
      { initials:'JP', color:2, author:'João P.', text: 'deus não conserta. só nomeia.',
        replies: [
          { initials:'CA', color:4, author:'Carol A.', text: 'e isso é o suficiente pra ser o fim do conto' },
          { initials:'LS', color:3, author:'Luísa S.', text: 'nom há arco de redenção. só diagnóstico.' },
        ]
      },
      { initials:'CA', color:4, author:'Carol A.', text: '', drawing: 'end' },
    ],
  },
};

// ─── SVGs ─────────────────────────────────────────────────────────────────────
function getSVG(type) {
  const map = {
    quote: `<svg viewBox="0 0 120 50" class="sketch" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
      <text x="4" y="42" font-size="52" font-family="Georgia,serif" opacity="0.5">"</text>
      <text x="72" y="48" font-size="52" font-family="Georgia,serif" opacity="0.5">"</text>
    </svg><span class="drawing-caption">trecho pra tatuagem</span>`,
    talker: `<svg viewBox="0 0 120 90" class="sketch" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="15" r="10"/><line x1="60" y1="25" x2="60" y2="52"/>
      <line x1="60" y1="37" x2="44" y2="48"/><line x1="60" y1="37" x2="76" y2="48"/>
      <line x1="60" y1="52" x2="51" y2="68"/><line x1="60" y1="52" x2="69" y2="68"/>
      <line x1="18" y1="70" x2="102" y2="70" stroke-width="1"/>
      <line x1="18" y1="30" x2="18" y2="70" stroke-width="1"/>
      <path d="M70 11 Q82 6 80 17 Q78 22 70 19" stroke-width="1" stroke-dasharray="2,2"/>
    </svg><span class="drawing-caption">apresentador de talk show</span>`,
    eye: `<svg viewBox="0 0 120 52" class="sketch" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 26 Q60 -4 112 26 Q60 56 8 26Z"/>
      <circle cx="60" cy="26" r="11"/><circle cx="60" cy="26" r="4" fill="currentColor" stroke="none" opacity="0.6"/>
    </svg><span class="drawing-caption">olha com mais atenção</span>`,
    end: `<svg viewBox="0 0 120 62" class="sketch" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="38" cy="28" r="13"/><circle cx="38" cy="24" r="6"/>
      <line x1="38" y1="30" x2="38" y2="42"/><line x1="38" y1="37" x2="30" y2="44"/><line x1="38" y1="37" x2="46" y2="44"/>
      <path d="M55 24 Q65 18 72 25 Q78 32 72 37" stroke-dasharray="2,2"/>
      <text x="55" y="18" font-size="10" font-family="sans-serif" fill="currentColor" stroke="none">?!</text>
    </svg><span class="drawing-caption">fim perfeito</span>`,
  };
  return map[type] || '';
}

// ─── Comentários do usuário (localStorage) ───────────────────────────────────
function loadUserComments() {
  try { return JSON.parse(localStorage.getItem('leia_comments') || '{}'); } catch(e) { return {}; }
}
function saveUserComments(d) { localStorage.setItem('leia_comments', JSON.stringify(d)); }
function getUserProfile() {
  return {
    author:   localStorage.getItem('userName')     || 'Você',
    initials: localStorage.getItem('userInitials') || 'VC',
    color:    parseInt(localStorage.getItem('userColor') || '5'),
  };
}

// ─── Render de lista de comentários (críticos — somente leitura) ──────────────
function renderComments(comments) {
  return comments.map(c => {
    const textHTML   = c.text   ? `<p class="comment-text">${c.text}</p>` : '';
    const citeHTML   = c.cite   ? `<span class="comment-cite">${c.cite}</span>` : '';
    const drawHTML   = c.drawing? `<div class="comment-drawing">${getSVG(c.drawing)}</div>` : '';
    const repliesHTML = c.replies && c.replies.length
      ? `<div class="replies">${c.replies.map(r =>
          `<div class="reply"><div class="reply-avatar" data-color="${r.color}">${r.initials}</div><div class="reply-content"><span class="reply-author">${r.author}</span>${r.text}</div></div>`
        ).join('')}</div>`
      : '';
    return `<div class="comment"><div class="comment-avatar" data-color="${c.color}">${c.initials}</div><div class="comment-body"><span class="comment-author">${c.author}</span>${textHTML}${citeHTML}${drawHTML}${repliesHTML}</div></div>`;
  }).join('');
}

// ─── Render card de leitores (interativo) ────────────────────────────────────
function renderFriendCard(data, highlightId) {
  const stored     = loadUserComments();
  const extra      = (stored[highlightId] && stored[highlightId].comments) || [];
  const userReplies= (stored[highlightId] && stored[highlightId].replies)  || {};
  const all        = [...(data.friends || []), ...extra];

  const commentsHTML = all.map((c, idx) => {
    const textHTML = c.text    ? `<p class="comment-text">${c.text}</p>` : '';
    const citeHTML = c.cite    ? `<span class="comment-cite">${c.cite}</span>` : '';
    const drawHTML = c.drawing ? `<div class="comment-drawing">${getSVG(c.drawing)}</div>` : '';
    const hardReplies = c.replies || [];
    const softReplies = userReplies[idx] || [];
    const allReplies  = [...hardReplies, ...softReplies];
    const repliesHTML = allReplies.length
      ? `<div class="replies">${allReplies.map(r =>
          `<div class="reply"><div class="reply-avatar" data-color="${r.color}">${r.initials}</div><div class="reply-content"><span class="reply-author">${r.author}</span>${r.text}</div></div>`
        ).join('')}</div>`
      : '';
    const replyForm = `<div class="inline-form" id="rf-${idx}" style="display:none"><textarea class="inline-textarea" placeholder="sua resposta..." rows="2"></textarea><div class="form-row"><button class="form-cancel" data-target="rf-${idx}">cancelar</button><button class="form-send reply-send" data-idx="${idx}">enviar</button></div></div>`;
    return `<div class="comment"><div class="comment-avatar" data-color="${c.color}">${c.initials}</div><div class="comment-body"><span class="comment-author">${c.author}</span>${textHTML}${citeHTML}${drawHTML}${repliesHTML}<button class="reply-btn" data-idx="${idx}">↩ responder</button>${replyForm}</div></div>`;
  }).join('');

  const addForm = `<div class="inline-form" id="add-form" style="display:none"><textarea class="inline-textarea" placeholder="seu comentário..." rows="2"></textarea><div class="form-row"><button class="form-cancel" data-target="add-form">cancelar</button><button class="form-send add-send">enviar</button></div></div>`;
  return commentsHTML + `<div class="card-add-area"><button class="add-comment-btn" id="add-btn">+ comentar</button>${addForm}</div>`;
}

function rebuildFriendCard(highlightId, spanEl) {
  const data    = ANNOTATIONS[highlightId];
  const textCol = document.getElementById('textColumn');
  const rect    = spanEl.getBoundingClientRect();
  const midY    = (rect.top + rect.bottom) / 2;
  cardFriend.innerHTML =
    `<span class="card-label">Leitores</span>` +
    `<div class="card-quote">${data.quote}</div>` +
    renderFriendCard(data, highlightId);
  cardFriend.classList.add('visible');
  placeRight(cardFriend, textCol, midY);
  attachFriendCardEvents(highlightId, spanEl);
}

function attachFriendCardEvents(highlightId, spanEl) {
  function toggleForm(formId) {
    const form = cardFriend.querySelector('#' + formId);
    if (!form) return;
    const opening = form.style.display === 'none';
    cardFriend.querySelectorAll('.inline-form').forEach(f => { f.style.display = 'none'; });
    if (opening) {
      form.style.display = 'block';
      // reposicionar card se cresceu além da viewport
      const rect     = cardFriend.getBoundingClientRect();
      const overflow = rect.bottom - (window.innerHeight - 8);
      if (overflow > 0) {
        const curTop = parseInt(cardFriend.style.top) || 0;
        cardFriend.style.top = Math.max(54, curTop - overflow) + 'px';
      }
      form.querySelector('textarea').focus();
    }
  }

  cardFriend.querySelectorAll('.reply-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleForm('rf-' + btn.dataset.idx); });
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

  cardFriend.querySelectorAll('.reply-send').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ta   = btn.closest('.inline-form').querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      const idx  = parseInt(btn.dataset.idx);
      const d    = loadUserComments();
      if (!d[highlightId])          d[highlightId]          = { comments: [], replies: {} };
      if (!d[highlightId].replies)  d[highlightId].replies  = {};
      if (!d[highlightId].replies[idx]) d[highlightId].replies[idx] = [];
      d[highlightId].replies[idx].push({ ...getUserProfile(), text });
      saveUserComments(d);
      cardLocked = false;
      rebuildFriendCard(highlightId, spanEl);
    });
  });

  const addSend = cardFriend.querySelector('.add-send');
  if (addSend) {
    addSend.addEventListener('click', e => {
      e.stopPropagation();
      const ta   = addSend.closest('.inline-form').querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      const d = loadUserComments();
      if (!d[highlightId]) d[highlightId] = { comments: [], replies: {} };
      d[highlightId].comments.push({ ...getUserProfile(), text });
      saveUserComments(d);
      cardLocked = false;
      rebuildFriendCard(highlightId, spanEl);
    });
  }

  cardFriend.querySelectorAll('.inline-textarea').forEach(ta => {
    ta.addEventListener('focus', () => { cardLocked = true; clearTimeout(hideTimer); });
  });
}

// ─── Posicionamento por offsetTop (estável no scroll) ─────────────────────────
function docTop(el)  { let t=0; while(el){t+=el.offsetTop; el=el.offsetParent;} return t; }
function docLeft(el) { let l=0; while(el){l+=el.offsetLeft; el=el.offsetParent;} return l; }

// ─── Dois cards ───────────────────────────────────────────────────────────────
const cardExpert = document.getElementById('cardExpert');
const cardFriend = document.getElementById('cardFriend');
let activeSpan   = null;
let hideTimer    = null;
let cardLocked   = false;

function showCards(spanEl, onlySide) {
  if (document.body.classList.contains('annotations-off')) return;
  clearTimeout(hideTimer);
  if (activeSpan && activeSpan !== spanEl) activeSpan.classList.remove('active');
  spanEl.classList.add('active');
  activeSpan = spanEl;

  const id   = spanEl.dataset.highlight;
  const data = ANNOTATIONS[id];
  if (!data) return;

  const textCol  = document.getElementById('textColumn');
  const spanRect = spanEl.getBoundingClientRect();
  const midY     = (spanRect.top + spanRect.bottom) / 2;

  // Expert card — à esquerda do texto
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

  // Friend card — à direita do texto (sempre visível para permitir comentários)
  if (!onlySide || onlySide === 'friend') {
    cardFriend.innerHTML =
      `<span class="card-label">Leitores</span>` +
      `<div class="card-quote">${data.quote}</div>` +
      renderFriendCard(data, id);
    cardFriend.classList.add('visible');
    placeRight(cardFriend, textCol, midY);
    attachFriendCardEvents(id, spanEl);
  }
}

function placeLeft(card, textCol, midY) {
  const colRect = textCol.getBoundingClientRect();
  const W = card.offsetWidth || 284;
  const gap = 12;
  const vh  = window.innerHeight;

  // Aparece à esquerda da coluna de texto
  let right = window.innerWidth - colRect.left + gap;
  card.style.right = Math.max(8, Math.round(right)) + 'px';
  card.style.left  = 'auto';

  const h   = card.offsetHeight || 180;
  let top   = midY - h / 2;
  if (top + h > vh - 8) top = vh - h - 8;
  if (top < 54) top = 54;
  card.style.top = Math.round(top) + 'px';
}

function placeRight(card, textCol, midY) {
  const colRect = textCol.getBoundingClientRect();
  const W = card.offsetWidth || 284;
  const gap = 12;
  const vw  = window.innerWidth;
  const vh  = window.innerHeight;

  let left = colRect.right + gap;
  if (left + W > vw - 8) left = vw - W - 8;
  card.style.left  = Math.round(left) + 'px';
  card.style.right = 'auto';

  const h  = card.offsetHeight || 180;
  let top  = midY - h / 2;
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

    // Avatar de amigos — direita (u-N: comentários vêm só do localStorage)
    const friendList = id.startsWith('u-')
      ? ((loadUserComments()[id] || {}).comments || [])
      : (data.friends || []);
    if (friendList.length) {
      const bubble = makeBubble(id, friendList, 'friend');
      layer.appendChild(bubble);
      placeRightBubble(bubble, span, col, layout);

      bubble.addEventListener('mouseenter', () => { clearTimeout(hideTimer); showCards(span, 'friend'); });
      bubble.addEventListener('mouseleave', hideCards);
    }

    // Hover no texto → mostra os dois
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
  // Mostrar no máx 3 avatares
  comments.slice(0, 3).forEach(c => {
    const av = document.createElement('div');
    av.className = 'av';
    av.dataset.color = c.color;
    av.textContent   = c.initials;
    bubble.appendChild(av);
  });
  return bubble;
}

function placeRightBubble(bubble, span, col, layout) {
  const spanT   = docTop(span);
  const layoutT = docTop(layout);
  const colR    = docLeft(col) + col.offsetWidth;
  const layoutL = docLeft(layout);
  bubble.style.top  = Math.round(spanT - layoutT + span.offsetHeight / 2 - 13) + 'px';
  bubble.style.left = Math.round(colR - layoutL + 13) + 'px';
}

function placeLeftBubble(bubble, span, col, layout) {
  const spanT   = docTop(span);
  const layoutT = docTop(layout);
  const colL    = docLeft(col);
  const layoutL = docLeft(layout);
  // Alinha pelo lado direito do bubble (próximo ao texto)
  // offsetWidth pode ser 0 antes de render — estimamos 30px por avatar
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
document.getElementById('sizeUp'  ).addEventListener('click', () => { if (sizeIdx < SIZES.length - 1) { sizeIdx++; applySize(); } });

const fontPanel = document.getElementById('fontPanel');
const userPanel = document.getElementById('userPanel');
document.getElementById('fontBtn').addEventListener('click', e => { e.stopPropagation(); userPanel.classList.remove('open'); fontPanel.classList.toggle('open'); });

// ─── Perfil do usuário ────────────────────────────────────────────────────────
const USER_COLORS = { 1:'#8b4513', 2:'#4a7a54', 3:'#3d6a8a', 4:'#7a4f8a', 5:'#2a7a6a' };
let userColor    = parseInt(localStorage.getItem('userColor')    || '5');
let userName     = localStorage.getItem('userName')     || '';
let userInitials = localStorage.getItem('userInitials') || '';

function applyUserProfile() {
  const av = document.getElementById('userAv');
  av.textContent = userInitials || '?';
  av.style.background = USER_COLORS[userColor] || '#2a7a6a';
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

// ─── Grifos criados pelo usuário ──────────────────────────────────────────────
function findAndWrapText(searchText, id) {
  const body   = document.querySelector('.text-body');
  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  const nodes  = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  let full = '';
  const map = nodes.map(n => { const s = full.length; full += n.textContent; return { n, s }; });

  const idx    = full.indexOf(searchText);
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

function addHighlightBubble(id) {
  const layer  = document.getElementById('avatarLayer');
  const layout = document.getElementById('readerLayout');
  const col    = document.getElementById('textColumn');
  const span   = document.querySelector(`[data-highlight="${id}"]`);
  if (!span) return;
  // Para u-N, os comentários vivem só no localStorage; para h-N, em ANNOTATIONS.friends
  const comments = id.startsWith('u-')
    ? ((loadUserComments()[id] || {}).comments || [])
    : ((ANNOTATIONS[id] || {}).friends || []);
  if (!comments.length) return;
  const bubble = makeBubble(id, comments, 'friend');
  layer.appendChild(bubble);
  placeRightBubble(bubble, span, col, layout);
  bubble.addEventListener('mouseenter', () => { clearTimeout(hideTimer); showCards(span, 'friend'); });
  bubble.addEventListener('mouseleave', hideCards);
  span.addEventListener('mouseenter', () => showCards(span, null));
  span.addEventListener('mouseleave', hideCards);
}

function applyUserHighlights() {
  const d = loadUserComments();
  Object.entries(d).forEach(([id, data]) => {
    if (!id.startsWith('u-') || !data.range) return;
    const q = data.range.text;
    ANNOTATIONS[id] = { quote: q.length > 80 ? q.slice(0,80) + '…' : q, experts: [], friends: [] };
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
function hidePopover() {
  annotationPopover.style.display = 'none';
  pendingRange = null;
}

document.querySelector('.text-body').addEventListener('mouseup', () => {
  setTimeout(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { hidePopover(); return; }
    const text = sel.toString().trim();
    if (text.length < 3) { hidePopover(); return; }
    const range    = sel.getRangeAt(0);
    const textBody = document.querySelector('.text-body');
    if (!textBody.contains(range.commonAncestorContainer)) { hidePopover(); return; }
    // Limitar a seleções dentro de um único parágrafo
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
  // Reposicionar se o form ultrapassar a tela
  const rect     = annotationPopover.getBoundingClientRect();
  const overflow = rect.bottom - (window.innerHeight - 8);
  if (overflow > 0) {
    annotationPopover.style.top = Math.max(58, parseInt(annotationPopover.style.top) - overflow) + 'px';
  }
});

document.getElementById('annotateCancel').addEventListener('click', () => {
  hidePopover(); window.getSelection()?.removeAllRanges();
});

document.getElementById('annotateSend').addEventListener('click', () => {
  const text = annotateText.value.trim();
  if (!text || !pendingRange) return;
  const profile = getUserProfile();
  const d   = loadUserComments();
  const uid = 'u-' + Object.keys(d).filter(k => k.startsWith('u-')).length;
  const q   = pendingRange.text;
  d[uid] = { range: { text: q }, comments: [{ ...profile, text }], replies: {} };
  saveUserComments(d);
  ANNOTATIONS[uid] = { quote: q.length > 80 ? q.slice(0,80) + '…' : q, experts: [], friends: [] };
  const ok = findAndWrapText(q, uid);
  if (ok) addHighlightBubble(uid);
  hidePopover();
  window.getSelection()?.removeAllRanges();
});

annotationPopover.addEventListener('mousedown', e => e.stopPropagation());
document.addEventListener('mousedown', e => {
  if (!annotationPopover.contains(e.target)) hidePopover();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  applyUserHighlights();   // antes de buildAvatars para que os spans existam
  buildAvatars();
  applyAnnotations();
  applyFont();
  applySize();
  applyUserProfile();
  updateProgress();
});
