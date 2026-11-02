/* PressReady project site: interactions
   No libraries. Everything degrades to readable static content. */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------------- theme ---------------- */
  var themeBtn = $('#themeBtn');
  function effectiveTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('pr-theme', next); } catch (e) {}
      themeBtn.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
    themeBtn.setAttribute('aria-label', effectiveTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  /* ---------------- top bar, menu, progress, back to top ---------------- */
  var topbar = $('#topbar'), nav = $('#nav'), menuBtn = $('#menuBtn');
  var progress = $('.progress'), toTop = $('#toTop'), ring = toTop ? $('.prog', toTop) : null;
  var hero = $('.hero');
  var RING = 2 * Math.PI * 24;
  if (ring) { ring.style.strokeDasharray = RING; ring.style.strokeDashoffset = RING; }

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var h = doc.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, y / h) : 0;
    if (progress) progress.style.transform = 'scaleX(' + p + ')';
    if (ring) ring.style.strokeDashoffset = RING * (1 - p);
    var heroH = hero ? hero.offsetHeight - 70 : 300;
    if (topbar) topbar.classList.toggle('solid', y > heroH || (nav && nav.classList.contains('open')));
    if (toTop) toTop.classList.toggle('show', y > window.innerHeight * 0.9);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    var b = $('.brand'); if (b) setTimeout(function () { b.focus({ preventScroll: true }); }, reduce ? 0 : 600);
  });

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      onScroll();
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu'); onScroll();
      });
    });
  }

  // active section in nav
  if ('IntersectionObserver' in window && nav) {
    var links = $$('a[href^="#"]', nav);
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
          var id = en.target.id;
          var alias = { method: 'questions', discussion: 'analysis', conclusion: 'limitations' };
          var a = map[id] || map[alias[id]];
          if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'true'); }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { secObs.observe(s); });
  }

  /* ---------------- reveal + counters ---------------- */
  function countUp(el) {
    var end = +el.getAttribute('data-count');
    if (reduce || !end) { el.textContent = end.toLocaleString('en-GB'); return; }
    var t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e).toLocaleString('en-GB');
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var onReveal = {};
  if ('IntersectionObserver' in window) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add('in');
        $$('[data-count]', el).forEach(countUp);
        if (el.id && onReveal[el.id]) onReveal[el.id]();
        $$('[id]', el).forEach(function (c) { if (onReveal[c.id]) { onReveal[c.id](); delete onReveal[c.id]; } });
        revObs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal, .section-head').forEach(function (el) { revObs.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- hero lamplight ---------------- */
  (function lamp() {
    if (!hero) return;
    var lit = $('#sheetLit'), dark = $('.sheet-dark'), h1 = $('h1', hero);
    var toggle = $('#lampToggle');
    if (lit && dark) dark.appendChild(lit.firstElementChild.cloneNode(true));
    var target = { x: 0, y: 0 }, pos = { x: 0, y: 0 }, last = 0, active = false, raf = null, t = 0;
    var heroRect = hero.getBoundingClientRect();

    function setLamp(x, y) {
      hero.style.setProperty('--x', x + 'px');
      hero.style.setProperty('--y', y + 'px');
      if (lit) {
        var r = lit.getBoundingClientRect();
        lit.style.setProperty('--lx', (heroRect.left + x - r.left) + 'px');
        lit.style.setProperty('--ly', (heroRect.top + y - r.top) + 'px');
      }
      if (h1) {
        var hr = h1.getBoundingClientRect();
        h1.style.setProperty('--hx', (heroRect.left + x - hr.left) + 'px');
        h1.style.setProperty('--hy', (heroRect.top + y - hr.top) + 'px');
      }
    }
    function centre() {
      heroRect = hero.getBoundingClientRect();
      var s = lit ? lit.getBoundingClientRect() : heroRect;
      target.x = pos.x = s.left - heroRect.left + s.width * 0.42;
      target.y = pos.y = s.top - heroRect.top + s.height * 0.38;
      setLamp(pos.x, pos.y);
    }
    centre();
    window.addEventListener('resize', centre);

    function tick(now) {
      raf = null;
      heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom < 0) return;
      // drift on a slow figure-eight when idle
      if (!reduce && now - last > 2600 && lit) {
        t += 0.006;
        var s = lit.getBoundingClientRect();
        target.x = s.left - heroRect.left + s.width * (0.5 + 0.34 * Math.sin(t));
        target.y = s.top - heroRect.top + s.height * (0.48 + 0.3 * Math.sin(t * 2));
      }
      var k = reduce ? 1 : 0.14;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      setLamp(pos.x, pos.y);
      if (!reduce || Math.abs(target.x - pos.x) > 0.5) raf = requestAnimationFrame(tick);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(tick); }

    function move(e) {
      heroRect = hero.getBoundingClientRect();
      target.x = e.clientX - heroRect.left;
      target.y = e.clientY - heroRect.top;
      last = performance.now();
      if (!active) { active = true; hero.classList.remove('no-lamp'); }
      kick();
    }
    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerdown', move);
    hero.addEventListener('pointerleave', function () { last = 0; kick(); });
    if (!reduce) kick();

    if (toggle) toggle.addEventListener('click', function () {
      var on = !hero.classList.contains('lit-all');
      hero.classList.toggle('lit-all', on);
      toggle.setAttribute('aria-pressed', String(on));
      toggle.textContent = on ? 'Dim the page again' : 'Light the whole page';
    });

    // keep the loop alive only while the hero is visible
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { if (en[0].isIntersecting) kick(); }).observe(hero);
    }

    // dust motes in the beam
    var cv = $('canvas.motes', hero);
    if (!cv || reduce) return;
    var ctx = cv.getContext('2d'), motes = [], W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
    function size() {
      W = hero.clientWidth; H = hero.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, W * H / 16000));
      motes = [];
      for (var i = 0; i < n; i++) motes.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + 0.3, vx: (Math.random() - 0.5) * 0.12, vy: -Math.random() * 0.18 - 0.03, p: Math.random() * 6.28 });
    }
    size(); window.addEventListener('resize', size);
    var visible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) requestAnimationFrame(draw); }).observe(hero);
    function draw() {
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      var R = 260;
      for (var i = 0; i < motes.length; i++) {
        var m = motes[i];
        m.x += m.vx; m.y += m.vy; m.p += 0.02;
        if (m.y < -5) { m.y = H + 5; m.x = Math.random() * W; }
        if (m.x < -5) m.x = W + 5; if (m.x > W + 5) m.x = -5;
        var dx = m.x - pos.x, dy = m.y - pos.y, d = Math.sqrt(dx * dx + dy * dy);
        var a = d < R ? (1 - d / R) * 0.85 : 0.05;
        a *= 0.6 + 0.4 * Math.sin(m.p);
        if (a < 0.02) continue;
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.283);
        ctx.fillStyle = 'rgba(255,236,190,' + a.toFixed(3) + ')';
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  })();

  /* ---------------- shared tooltip ---------------- */
  var tip = $('#tip');
  function showTip(el, html) {
    if (!tip) return;
    tip.innerHTML = html;
    tip.classList.add('show');
    var r = el.getBoundingClientRect();
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var x = Math.min(window.innerWidth - tw - 10, Math.max(10, r.left + r.width / 2 - tw / 2));
    var y = r.top - th - 10;
    if (y < 10) y = r.bottom + 10;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
  function hideTip() { if (tip) tip.classList.remove('show'); }
  window.addEventListener('scroll', hideTip, { passive: true });

  /* ---------------- data ---------------- */
  var MODULES = [
    { id: 'skill', file: 'SKILL.md', name: 'SKILL.md', sub: 'router', g: 'hub', title: 'Router, workflow and ground rules', text: 'The entry point. Its name and description tell the assistant when to use PressReady. Inside are the five-step workflow, seven ground rules (no invented data, quotations untouched, editor first), the module map, and the ten rules each publisher’s authors most often break.', n: '59 lines of rules and reference' },
    { id: 'b1', file: 'bloomsbury-manuscript.md', name: 'Manuscript', sub: 'Bloomsbury', g: 'b', title: 'Bloomsbury manuscript preparation', text: 'Double spacing, 2.5 cm margins and continuous page numbers; heading tags; image resolution; the eighteen-step order of preliminary pages; figures, captions, tables, paragraphs; rules for volume editors, biographies, abbreviation lists and glossaries.', n: '97 rule statements' },
    { id: 'b2', file: 'bloomsbury-style.md', name: 'Style for copy', sub: 'Bloomsbury', g: 'b', title: 'Bloomsbury spelling, numbers and punctuation', text: 'The style sheet of preferred forms, -ize spelling, abbreviations, capitals, italics, numbers, dates, measurements, money, other languages, and every punctuation rule, with UK and US English side by side.', n: '127 rule statements' },
    { id: 'b3', file: 'bloomsbury-references.md', name: 'References', sub: 'Bloomsbury', g: 'b', title: 'Bloomsbury notes and references', text: 'Note placement, the limits on ibid. and the banned Latin abbreviations, the author–date and short-title systems, reference patterns for books, chapters, journals, films, podcasts and online sources, and special cases such as biblical and classical citations.', n: '125 rule statements' },
    { id: 'b4', file: 'bloomsbury-imprints.md', name: 'Imprints', sub: 'Bloomsbury', g: 'b', title: 'T&T Clark, Arden Shakespeare, Methuen Drama', text: 'Biblical book abbreviations for T&T Clark, the Arden play abbreviations and the layout of play extracts, and the Methuen Drama rules for play texts, including the accessible editions that avoid italics.', n: '56 rule statements' },
    { id: 'r1', file: 'routledge-manuscript.md', name: 'Manuscript', sub: 'Routledge', g: 'r', title: 'Routledge manuscript preparation', text: 'One Word file per chapter; callouts and captions; tables and boxes; the absence of a house style; referencing and endnotes; the 100 to 200 word abstract; ORCID iDs; front and end matter; endorsements; the AI authorship policy.', n: '120 rule statements' },
    { id: 'r2', file: 'routledge-artwork-permissions.md', name: 'Artwork and permissions', sub: 'Routledge', g: 'r', title: 'Routledge artwork, alt text and permissions', text: 'The 1,500 pixel rule for halftones, editable line art, greyscale printing, alt text for every figure, the six-step permissions process with the request template, covers and new editions.', n: '72 rule statements' },
    { id: 'r3', file: 'routledge-submission.md', name: 'Submission', sub: 'Routledge', g: 'r', title: 'Routledge file naming and submission', text: 'One file per element, names of 30 characters or fewer, no special characters, one artwork folder, one final version of each file, and a single zipped folder named with the author’s surname.', n: '35 rule statements' },
    { id: 'c', file: 'publisher-comparison.md', name: 'Comparison', sub: 'both publishers', g: 's', title: 'Bloomsbury and Routledge compared', text: 'The thirty-point table behind the comparison chart on this page, plus step-by-step instructions for converting a manuscript from one publisher to the other.', n: '30 points compared' },
    { id: 'k', file: 'checklists.md', name: 'Checklists', sub: 'both publishers', g: 's', title: 'Checklists and audit template', text: 'A report template the model fills in for every task, and full pre-submission checklists for each publisher, ticked, crossed or queried against the author’s material.', n: '92 checklist lines' },
    { id: 'e', file: 'worked-examples.md', name: 'Worked examples', sub: 'both publishers', g: 's', title: 'Before-and-after examples', text: 'The demonstration chapter in both house styles, one reference converted across systems, an abstract check, a file-name check and a contributor biography.', n: '5 worked examples' }
  ];

  var PAGE_MODS = {
    b1: { name: 'Bloomsbury manuscript', c: 'var(--b-col)', o: 1 },
    b2: { name: 'Bloomsbury style', c: 'var(--b-col)', o: 0.78 },
    b3: { name: 'Bloomsbury references', c: 'var(--b-col)', o: 0.56 },
    b4: { name: 'Bloomsbury imprints', c: 'var(--b-col)', o: 0.34 },
    r1: { name: 'Routledge manuscript', c: 'var(--r-col)', o: 1 },
    r2: { name: 'Routledge artwork and permissions', c: 'var(--r-col)', o: 0.66 },
    r3: { name: 'Routledge submission', c: 'var(--r-col)', o: 0.38 },
    none: { name: 'No rules (cover, contents, blank)', c: 'var(--rule)', o: 1 }
  };
  function rng(a, b, m, t) { var o = []; for (var i = a; i <= b; i++) o.push([i, m, t]); return o; }
  var DOCS = [
    {
      name: 'Bloomsbury, House Style Guidelines for Authors and Editors', meta: 'version 2, September 2025, 66 pages',
      pages: [].concat(
        [[1, 'none', 'Cover and list of imprints'], [2, 'none', 'Title history, 2014 to 2025'],
         [3, 'b1', 'How to use the guide; manuscript preparation; cross-references; headings'],
         [4, 'b1', 'Images; language; manuscript structure; order of prelims'],
         [5, 'b1', 'Prelims (continued); special characters; volume editors'],
         [6, 'b1', 'Reference authorities; Cite Them Right'],
         [7, 'b1', 'Belonging and inclusion; figures'],
         [8, 'b1', 'Captions and credits; lists; paragraphs; tables'],
         [9, 'b2', 'Tables (continued); style sheet of preferred spellings'],
         [10, 'b1', 'Half-title and title page; author biographies; abbreviations'],
         [11, 'b1', 'Glossaries'],
         [12, 'b2', 'Spelling; abbreviations and contractions; capitalization'],
         [13, 'b2', 'Capitalization (continued); italics'],
         [14, 'b2', 'Italics (continued); numbers'],
         [15, 'b2', 'Numbers (continued); dates and time'],
         [16, 'b2', 'Time; measurements; money'],
         [17, 'b2', 'Other languages; ancient languages; apostrophes'],
         [18, 'b2', 'Colons; commas; double punctuation; ellipses'],
         [19, 'b2', 'Full points; hyphens and dashes; brackets'],
         [20, 'b2', 'Brackets (continued); quotations'],
         [21, 'b2', 'Block quotations; poetry and plays'],
         [22, 'b3', 'Notes; ibid. and the banned abbreviations'],
         [23, 'b3', 'Referencing systems; place of publication; author–date'],
         [24, 'b3', 'Author–date citations; the references section'],
         [25, 'b3', 'Ordering entries by one author; books'],
         [26, 'b3', 'Chapters; dissertations; film and broadcast'],
         [27, 'b3', 'Journals; newspapers; online sources; reprints'],
         [28, 'b3', 'Short-title notes; bibliography'],
         [29, 'b3', 'Names; styling books and chapters'],
         [30, 'b3', 'Styling journals and newspapers'],
         [31, 'b3', 'Biblical references; classical works'],
         [32, 'b3', 'Classical works (continued); classic poems and plays; unpublished material'],
         [33, 'none', 'List of appendices'], [34, 'none', 'Blank page']],
        rng(35, 45, 'b4', 'Appendix A: Dead Sea Scrolls, Josephus, Philo and other ancient sources'),
        [[46, 'b4', 'Appendix A: Old Testament and Apocrypha'], [47, 'b4', 'Appendix A: New Testament']],
        rng(48, 57, 'b4', 'Appendix A: bibliographical abbreviations for T&T Clark'),
        [[58, 'b4', 'Appendix B: Arden Shakespeare text and play abbreviations']],
        rng(59, 60, 'b4', 'Appendix B: formatting play extracts'),
        rng(61, 63, 'b4', 'Appendix C: Methuen Drama play texts'),
        rng(64, 66, 'b4', 'Appendix D: accessible Methuen Drama play texts')
      )
    },
    {
      name: 'Taylor & Francis, Manuscript preparation guide', meta: '30 pages',
      pages: [
        [1, 'r1', 'Introduction and list of sections'], [2, 'r1', 'Diversity, equity and inclusion'], [3, 'r1', 'AI tools and authorship'],
        [4, 'r1', 'Typescript: chapter files and layout'], [5, 'r1', 'Callouts'], [6, 'r1', 'Captions; tables; boxes'],
        [7, 'r1', 'Editorial style; referencing; bibliographies'], [8, 'r1', 'Notes; headings; special characters'],
        [9, 'r1', 'Special characters (continued); abstracts; ORCID'], [10, 'r1', 'ORCID (continued); research data'],
        [11, 'r1', 'Sample chapter'], [12, 'r1', 'Sample chapter (continued)'], [13, 'r1', 'Front matter'],
        [14, 'r1', 'Contents; list of contributors'], [15, 'r1', 'Preface; acknowledgements; end matter'], [16, 'r1', 'Endorsements'],
        [17, 'r2', 'Artwork; halftones'], [18, 'r2', 'Line art; composite images'], [19, 'r2', 'Checking image size'], [20, 'r2', 'Alt text'],
        [21, 'r2', 'Permissions: overview and disclaimer'], [22, 'r2', 'Third-party material; copyright'], [23, 'r2', 'Creative Commons; public domain; fair use'],
        [24, 'r2', 'T&F fair use policy; epigraphs; permission-free sources'], [25, 'r2', 'Finding rights holders; applying for permission'],
        [26, 'r2', 'Permission email template; documenting permission'], [27, 'r2', 'Submitting permission; works under copyright'],
        [28, 'r2', 'Works under copyright (continued)'], [29, 'r2', 'Cover design'], [30, 'r2', 'New editions']
      ]
    },
    {
      name: 'Taylor & Francis, Manuscript submission guide', meta: '3 pages',
      pages: [[1, 'r3', 'Before submission; naming and organising files'], [2, 'r3', 'Example structure; final versions only'], [3, 'r3', 'Sending the files']]
    }
  ];

  var CATS = [
    ['Language and style', 132, 5],
    ['Notes and references', 125, 13],
    ['Front and end matter', 47, 50],
    ['Figures, tables and artwork', 22, 55],
    ['Layout and file structure', 19, 24],
    ['Permissions, ethics and AI', 4, 34],
    ['Submission and production', 0, 46],
    ['Imprint-specific rules', 56, 0]
  ];

  var TOPICS = [
    ['House style', 'differs', 'A full prescriptive house style, in UK or US English.', 'No house style. Consistency is the rule; the editor may ask for a particular style.'],
    ['Spelling', 'differs', 'UK or US English only, both with -ize spellings. No other variants.', 'The author’s choice of UK or US spelling, applied consistently.'],
    ['Manuscript files and page numbers', 'differs', 'Pages numbered continuously through the whole manuscript, centred in the footer.', 'One Word file per chapter, with pages numbered from 1 in each file.'],
    ['Spacing and margins', 'differs', 'At least double-spaced throughout; margins of at least 2.5 cm.', 'A simple layout in a Unicode font. No spacing or margin rule.'],
    ['Paragraphs', 'differs', 'First line indented (not after a heading); no extra space between paragraphs.', 'A blank line between paragraphs and no indents.'],
    ['Heading markup', 'differs', 'Tag heading levels <A>, <B>, <C>.', 'Word styles Heading 1 to 3; no more than three levels; avoid numbered headings.'],
    ['Figure callouts', 'differs', '[Figure 2.3 here] on a new line after the paragraph.', '<Figure 2.3 here>, highlighted, with the caption directly below.'],
    ['Figure numbering', 'differs', 'Authored books: sequential or by chapter, agreed with the editor. Multi-author books: by chapter.', 'Always by chapter (Figure 1.1), matching the file names exactly.'],
    ['“Above” and “below”', 'same', 'Refer to figures and tables by number, never as above or below.', 'Refer to figures and tables by number, never as above or below.'],
    ['Images in the text file', 'same', 'Never embed images; supply them as separate files.', 'Never paste images into chapter files (Word-editable images excepted).'],
    ['Image specification', 'differs', '.tif or high-resolution .jpg; 300 dpi for halftones, 600 dpi for line art, at print size.', 'Halftones at least 1,500 pixels wide (.jpg, .tiff; .png for screenshots); line art editable or vector.'],
    ['Colour', 'one', 'No rule in this guide.', 'Books print in greyscale unless agreed; never refer to colour in the text.'],
    ['Alt text', 'one', 'Not covered in this guide.', 'Required for every figure; transcripts for audio and video.'],
    ['Tables', 'differs', 'Word Table tool; notes a, b, c beneath; caption in title case without a full point; a Source line.', 'Editable Word tables kept in the chapter file, with the caption below.'],
    ['Notes', 'differs', 'Authored books: book endnotes. Contributed volumes: chapter endnotes. Footnotes only by agreement.', 'Endnotes numbered by chapter, added with Insert Endnote.'],
    ['Referencing system', 'differs', 'Author–date or short-title, consistent across the whole book.', 'Any recognised style, consistently, unless the editor specifies one.'],
    ['Where references go', 'differs', 'A references section or bibliography, at the end of the book or of each chapter.', 'A reference list or bibliography at the end of every chapter.'],
    ['DOIs', 'differs', 'Not required; formally published sources need no URL.', 'Include DOIs wherever they are available.'],
    ['Banned abbreviations', 'one', 'op. cit., loc. cit., idem, supra, infra and et seq. are prohibited; no 3-em dash in references.', 'No rule.'],
    ['Chapter abstracts', 'one', 'Not required by this guide.', 'Required: 100 to 200 words, third person, before the chapter text.'],
    ['ORCID iDs', 'one', 'Not mentioned.', 'Required beneath every author’s name.'],
    ['Epigraphs', 'differs', 'Allowed in prelims and chapters once permission is obtained.', 'Not allowed at all.'],
    ['Contributor biographies', 'differs', 'Up to 100 words; name in bold; current position first; publications with year only.', 'Optional, up to 50 words; name in bold, affiliation and country.'],
    ['Position of contributors list', 'differs', 'In the prelims for UK titles; in the endmatter for US titles.', 'In the front matter, after the contents.'],
    ['Inclusive language', 'same', 'Required; follow the APA Inclusive Language Guide and C4DISC.', 'Required; follow chapter 5 of the APA Publication Manual.'],
    ['Sensitive quoted material', 'same', 'Tell the editor before submission.', 'Tell the editor in advance.'],
    ['Special characters', 'same', 'Unicode font; talk to the editor; PDFs of chapters if used extensively.', 'Unicode font available in Word; PDFs of chapters with special characters or equations.'],
    ['AI-generated content', 'one', 'Not addressed in this guide.', 'LLMs cannot be authors; AI help with content must be acknowledged.'],
    ['File naming and delivery', 'one', 'Not covered in this guide.', 'Names of 30 characters or fewer, no special characters, one artwork folder, one zipped folder.'],
    ['Cross-references', 'one', 'Avoid them; if needed, refer by chapter and subheading, never by page.', 'No rule beyond referring to figures and tables by number.']
  ];

  /* ---------------- architecture diagram ---------------- */
  (function arch() {
    var svg = $('#archSvg'), panel = $('#archPanel');
    if (!svg || !panel) return;
    var NS = 'http://www.w3.org/2000/svg';
    var pos = {
      skill: [320, 205], b1: [95, 70], b2: [95, 145], b3: [95, 220], b4: [95, 295],
      r1: [545, 105], r2: [545, 180], r3: [545, 255], c: [130, 380], k: [320, 380], e: [510, 380]
    };
    var W = 158, H = 46;
    function el(n, a) { var e = doc.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); return e; }
    var gl = el('g', {}), gn = el('g', {});
    svg.appendChild(gl); svg.appendChild(gn);
    [['Bloomsbury', 20, 30], ['Routledge / T&F', 470, 65], ['Shared', 20, 432]].forEach(function (l) {
      var t = el('text', { x: l[1], y: l[2], class: 'group-label' }); t.textContent = l[0]; svg.insertBefore(t, gl);
    });
    var linkEls = {};
    MODULES.forEach(function (m) {
      if (m.id === 'skill') return;
      var a = pos.skill, b = pos[m.id], d;
      if (m.g === 'b') d = 'M' + (a[0] - 70) + ',' + a[1] + ' C' + (a[0] - 130) + ',' + a[1] + ' ' + (b[0] + 140) + ',' + b[1] + ' ' + (b[0] + W / 2) + ',' + b[1];
      else if (m.g === 'r') d = 'M' + (a[0] + 70) + ',' + a[1] + ' C' + (a[0] + 130) + ',' + a[1] + ' ' + (b[0] - 140) + ',' + b[1] + ' ' + (b[0] - W / 2) + ',' + b[1];
      else d = 'M' + a[0] + ',' + (a[1] + 25) + ' C' + a[0] + ',' + (a[1] + 90) + ' ' + b[0] + ',' + (b[1] - 80) + ' ' + b[0] + ',' + (b[1] - H / 2);
      var p = el('path', { d: d, class: 'link' });
      gl.appendChild(p); linkEls[m.id] = p;
    });
    var nodes = {};
    MODULES.forEach(function (m) {
      var c = pos[m.id], w = m.id === 'skill' ? 140 : W, h = m.id === 'skill' ? 52 : H;
      var g = el('g', { class: 'node ' + m.g + (m.id === 'skill' ? ' hub' : ''), tabindex: '0', role: 'button', 'aria-label': m.file + ': ' + m.title, transform: 'translate(' + (c[0] - w / 2) + ',' + (c[1] - h / 2) + ')' });
      g.appendChild(el('rect', { width: w, height: h, rx: 7 }));
      var t1 = el('text', { x: 12, y: m.id === 'skill' ? 24 : 20 }); t1.textContent = m.name; g.appendChild(t1);
      var t2 = el('text', { x: 12, y: m.id === 'skill' ? 41 : 36, class: 'sub' }); t2.textContent = m.id === 'skill' ? 'workflow, ground rules' : m.sub; g.appendChild(t2);
      if (m.id === 'skill') { t1.setAttribute('style', 'font-size:14px;font-weight:600'); t2.setAttribute('style', 'fill:currentColor;opacity:.75'); }
      gn.appendChild(g); nodes[m.id] = g;
      function sel() { select(m.id); }
      g.addEventListener('click', sel);
      g.addEventListener('mouseenter', sel);
      g.addEventListener('focus', sel);
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel(); } });
    });
    function select(id) {
      var m = MODULES.filter(function (x) { return x.id === id; })[0];
      Object.keys(nodes).forEach(function (k) { nodes[k].classList.toggle('sel', k === id); });
      Object.keys(linkEls).forEach(function (k) { linkEls[k].classList.toggle('hot', k === id || id === 'skill'); });
      panel.innerHTML = '<span class="file">' + esc(m.file) + '</span><h3>' + esc(m.title) + '</h3><p>' + esc(m.text) + '</p><p class="meta">' + esc(m.n) + '</p><a href="https://github.com/SimantaDH/skill/blob/main/' + esc(m.file) + '" target="_blank" rel="noopener">Open ' + esc(m.file) + ' on GitHub</a>';
    }
    select('skill');
    // draw-in animation for links
    var paths = Object.keys(linkEls).map(function (k) { return linkEls[k]; });
    if (!reduce) {
      paths.forEach(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
      var go = function () { paths.forEach(function (p, i) { p.style.transition = 'stroke-dashoffset 1.1s ease ' + (i * 0.08) + 's, stroke .3s'; p.style.strokeDashoffset = 0; }); };
      if ('IntersectionObserver' in window) {
        var o = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { go(); o.disconnect(); } }, { threshold: 0.3 });
        o.observe(svg);
      } else go();
    }
  })();

  /* ---------------- page-to-module strip ---------------- */
  (function pagesViz() {
    var box = $('#pages'), info = $('#pageInfo'), legend = $('#modLegend');
    if (!box) return;
    var all = [];
    DOCS.forEach(function (d, di) {
      var row = doc.createElement('div'); row.className = 'doc-row';
      row.innerHTML = '<h4>' + esc(d.name) + ' <span>' + esc(d.meta) + '</span></h4>';
      var strip = doc.createElement('div'); strip.className = 'strip';
      d.pages.forEach(function (p, i) {
        var b = doc.createElement('button');
        var m = PAGE_MODS[p[1]];
        b.type = 'button'; b.className = 'pg'; b.dataset.m = p[1];
        b.style.setProperty('--c', m.c); b.style.background = 'color-mix(in srgb, ' + m.c + ' ' + Math.round(m.o * 100) + '%, var(--paper))';
        b.style.transitionDelay = reduce ? '0s' : (all.length * 0.012) + 's';
        b.setAttribute('aria-label', d.name + ', page ' + p[0] + ': ' + p[2] + ' (' + m.name + ')');
        var show = function () {
          $$('.pg', box).forEach(function (x) { x.classList.remove('sel'); });
          b.classList.add('sel');
          info.innerHTML = '<b>' + esc(d.name.split(',')[0]) + ', page ' + p[0] + '.</b> ' + esc(p[2]) + '. <span style="color:var(--muted)">Fed into: ' + esc(m.name) + '.</span>';
        };
        b.addEventListener('click', show); b.addEventListener('mouseenter', show); b.addEventListener('focus', show);
        strip.appendChild(b); all.push(b);
      });
      row.appendChild(strip); box.appendChild(row);
    });
    var active = null;
    Object.keys(PAGE_MODS).forEach(function (k) {
      var m = PAGE_MODS[k];
      var n = all.filter(function (b) { return b.dataset.m === k; }).length;
      var btn = doc.createElement('button'); btn.type = 'button'; btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = '<i style="background:color-mix(in srgb, ' + m.c + ' ' + Math.round(m.o * 100) + '%, var(--paper))"></i>' + esc(m.name) + ' <span style="color:var(--muted)">' + n + '</span>';
      btn.addEventListener('click', function () {
        active = active === k ? null : k;
        $$('button', legend).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        if (active) btn.setAttribute('aria-pressed', 'true');
        all.forEach(function (b) { b.classList.toggle('faded', !!active && b.dataset.m !== active); });
        info.textContent = active ? m.name + ': ' + n + ' page' + (n === 1 ? '' : 's') + ' of 99.' : 'Select a page.';
      });
      legend.appendChild(btn);
    });
    var show = function () { box.classList.add('in'); };
    if ('IntersectionObserver' in window) {
      var o = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { show(); o.disconnect(); } }, { threshold: 0.2 });
      o.observe(box);
    } else show();
  })();

  /* ---------------- category bars ---------------- */
  (function bars() {
    var box = $('#bars');
    if (!box) return;
    var TB = 405, TR = 227, mode = 'count', drawn = false;
    CATS.forEach(function (c) {
      var row = doc.createElement('div'); row.className = 'bar-row';
      row.innerHTML = '<div class="lab">' + esc(c[0]) + '</div><div class="bar-pair">' +
        '<div class="bar b"><div class="fill"></div><span class="val"></span></div>' +
        '<div class="bar r"><div class="fill"></div><span class="val"></span></div></div>';
      box.appendChild(row);
    });
    function render() {
      var rows = $$('.bar-row', box);
      var max = mode === 'count' ? 140 : 70;
      rows.forEach(function (row, i) {
        var c = CATS[i];
        var vb = mode === 'count' ? c[1] : c[1] / TB * 100, vr = mode === 'count' ? c[2] : c[2] / TR * 100;
        var fb = $('.b .fill', row), fr = $('.r .fill', row);
        fb.style.width = drawn ? Math.max(0.4, vb / max * 85) + '%' : '0';
        fr.style.width = drawn ? Math.max(0.4, vr / max * 85) + '%' : '0';
        $('.b .val', row).innerHTML = '<b>' + (mode === 'count' ? vb : vb.toFixed(1) + '%') + '</b> Bloomsbury';
        $('.r .val', row).innerHTML = '<b>' + (mode === 'count' ? vr : vr.toFixed(1) + '%') + '</b> Routledge';
      });
    }
    render();
    $$('.seg button[data-mode]').forEach(function (b) {
      b.addEventListener('click', function () {
        mode = b.dataset.mode;
        $$('.seg button[data-mode]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        render();
      });
    });
    var go = function () { drawn = true; render(); };
    if ('IntersectionObserver' in window) {
      var o = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { setTimeout(go, 150); o.disconnect(); } }, { threshold: 0.25 });
      o.observe(box);
    } else go();
  })();

  /* ---------------- comparison tiles ---------------- */
  (function tiles() {
    var box = $('#tiles'), detail = $('#tileDetail'), tally = $('#tally'), filter = $('#tileFilter');
    if (!box) return;
    var label = { same: 'Same', differs: 'Different', one: 'One only' };
    TOPICS.forEach(function (t, i) {
      var b = doc.createElement('button'); b.type = 'button'; b.className = 'tile'; b.dataset.s = t[1];
      var who = t[1] === 'one' ? (/^(No rule|Not )/.test(t[2]) ? ' (Routledge)' : ' (Bloomsbury)') : '';
      b.innerHTML = '<span class="t">' + esc(t[0]) + '</span><span class="s">' + label[t[1]] + who + '</span>';
      b.addEventListener('click', function () { show(i, b); });
      box.appendChild(b);
    });
    function show(i, b) {
      var t = TOPICS[i];
      $$('.tile', box).forEach(function (x) { x.classList.remove('sel'); });
      if (b) b.classList.add('sel');
      detail.innerHTML = '<div class="head">' + esc(t[0]) + '</div>' +
        '<div class="side"><h4>Bloomsbury</h4><p>' + esc(t[2]) + '</p></div>' +
        '<div class="side r"><h4>Routledge / Taylor &amp; Francis</h4><p>' + esc(t[3]) + '</p></div>';
    }
    show(4, $$('.tile', box)[4]);
    var n = { same: 0, differs: 0, one: 0 };
    TOPICS.forEach(function (t) { n[t[1]]++; });
    tally.innerHTML = '<span><b style="color:var(--same)">' + n.same + '</b>the same</span><span><b style="color:var(--differs)">' + n.differs + '</b>different</span><span><b style="color:var(--one)">' + n.one + '</b>covered by one publisher only</span>';
    $$('button', filter).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.dataset.f;
        $$('button', filter).forEach(function (x) { x.setAttribute('aria-pressed', String(x === btn)); });
        $$('.tile', box).forEach(function (t) { t.classList.toggle('dim', f !== 'all' && t.dataset.s !== f); });
      });
    });
  })();

  /* ---------------- demonstration ---------------- */
  var AUDIT = {
    draft: {
      title: 'What is wrong with the draft',
      what: 'Wavy lines mark problems. Some break both publishers’ rules; others break only one. Switch to a formatted version to see each fix.',
      rows: [
        ['Photograph pasted into the chapter file', 'Both publishers', 'block'],
        ['op. cit. in a note', 'Banned by Bloomsbury', 'block'],
        ['“digitise” and “digitized” in one chapter', 'Consistency', 'style'],
        ['“1990’s” with an apostrophe', 'Both publishers', 'style'],
        ['“The figure below”', 'Both publishers', 'style'],
        ['US date order with UK spelling', 'Consistency', 'query'],
        ['40%, 2500, 15th century, 5 lakh', 'Bloomsbury numbers', 'style'],
        ['Double quotation marks', 'Bloomsbury UK', 'style'],
        ['No abstract, author name or ORCID iD', 'Routledge', 'block'],
        ['Interview with no date', 'Both publishers', 'query']
      ]
    },
    bloomsbury: {
      title: 'Audit: Bloomsbury, UK English, author–date',
      what: 'Double spacing, first-line indents and a folio centred at the foot, numbered continuously through the book. Gold marks are fixes; red marks are queries for the author.',
      rows: [
        ['Photograph pasted in. Now [Figure 3.1 here]; supply a .tif or .jpg at 300 dpi at print size', 'B1 Images; Figures', 'block'],
        ['op. cit. is prohibited, and author–date uses no reference notes. Folded into the citation', 'B3 ibid. and Latin abbreviations', 'block'],
        ['Title case in the chapter title. Minimum capitals', 'B2 Capitalization', 'style'],
        ['digitise to digitize (-ize in UK and US English)', 'B2 Spelling', 'style'],
        ['1990’s to 1990s', 'B2 Dates', 'style'],
        ['Serial comma removed (UK)', 'B2 Commas', 'style'],
        ['March 3, 2021 to 3 March 2021', 'B2 Dates', 'style'],
        ['2500 to 2,500', 'B2 Numbers', 'style'],
        ['40% to 40 per cent (% only in tables)', 'B2 Numbers', 'style'],
        ['15th century to fifteenth-century (adjective)', 'B2 Dates', 'style'],
        ['(Ong, 1982) to (Ong 1982)', 'B3 Author–date', 'style'],
        ['Double to single quotation marks', 'B2 Quotations (UK)', 'style'],
        ['5 lakh rupees to five lakh (500,000) rupees', 'B2 Other languages', 'style'],
        ['Spaced em dash to spaced en dash', 'B2 Hyphens and dashes', 'style'],
        ['Full point moved outside a quoted fragment', 'B2 Quotations (UK)', 'style'],
        ['The figure below to Figure 3.1', 'B1 Figures', 'style'],
        ['Heading tagged <A>', 'B1 Headings', 'style'],
        ['References set as Surname, Initials (Year), Title, Publisher.', 'B3 Reference patterns', 'style'],
        ['Date of the Purulia conversation', 'B3 Unpublished material', 'query'],
        ['Sequential or chapter figure numbering?', 'B1 Figures', 'query'],
        ['Caption, source and credit line for Figure 3.1', 'B1 Captions and credits', 'query']
      ]
    },
    routledge: {
      title: 'Audit: Routledge / Taylor & Francis',
      what: 'No house style, so PressReady keeps the author’s own majority choices (UK -ise spelling, double quotation marks, serial comma, APA 7) and makes the rest match. Blank lines between paragraphs; page 1 of its own file.',
      rows: [
        ['No abstract. 100 to 200 words, third person, highlighted, before the text', 'R1 Abstracts', 'block'],
        ['No author name or ORCID iD beneath the title', 'R1 ORCID iDs', 'block'],
        ['Photograph pasted in. Separate file Figure 3.1.jpg, at least 1,500 px wide; highlighted callout', 'R1 Callouts; R2 Halftones', 'block'],
        ['Alt text needed for Figure 3.1', 'R2 Alt text', 'block'],
        ['The figure below to Figure 3.1', 'R1 Callouts', 'style'],
        ['digitized to digitised, matching the author’s majority spelling', 'R1 Editorial style', 'style'],
        ['1990’s to 1990s', 'Consistency; APA 7', 'style'],
        ['2500 to 2,500', 'APA 7 (author’s style)', 'style'],
        ['Spaced em dash closed up', 'APA 7 (author’s style)', 'style'],
        ['op. cit. replaced: See Ong (1982), via Insert Endnote', 'R1 Referencing; Notes', 'style'],
        ['Reference titles in sentence case', 'APA 7 (author’s style)', 'style'],
        ['Heading set as Word Heading 1', 'R1 Headings', 'style'],
        ['File named 03_Chapter 3.docx', 'R3 Naming files', 'style'],
        ['US date order with UK spelling: choose one', 'R1 Editorial style', 'query'],
        ['Date of the Purulia conversation', 'APA 7 personal communications', 'query'],
        ['“lakh” may puzzle readers outside South Asia', 'No T&F rule; a suggestion', 'query'],
        ['Has the editor asked for keywords?', 'R1 Abstracts', 'query']
      ]
    }
  };

  function ed(text, tipText, q) { return '<span class="ed' + (q ? ' q' : '') + '" tabindex="0" data-tip="' + esc(tipText) + '">' + text + '</span>'; }
  function er(text, tipText) { return '<span class="err" tabindex="0" data-tip="' + esc(tipText) + '">' + text + '</span>'; }

  var VIEWS = {
    draft:
      '<span class="ms-tag">Author’s draft</span>' +
      '<p class="m-chap">Chapter 3</p>' +
      '<h4 class="m-title">' + er('Songs That Live When Sung', 'Title case. Bloomsbury asks for a minimum of capitals in headings.') + ': ' + er('Digitising', 'Spelt “digitise” here and “digitized” later. One chapter, two spellings.') + ' Oral Narratives in Eastern India</h4>' +
      '<p class="m-h">Introduction</p>' +
      '<p>In the ' + er('1990’s', 'Decades take no apostrophe.') + ', regional archives in West Bengal, Assam' + er(',', 'Serial comma. Bloomsbury UK style leaves it out.') + ' and Odisha began to ' + er('digitise', 'Bloomsbury uses -ize in UK and US English.') + ' their audio collections. By ' + er('March 3, 2021', 'US date order in a text with UK spelling.') + ', more than ' + er('2500', 'Thousands take a comma: 2,500.') + ' recordings had been catalogued, and nearly ' + er('40%', 'Bloomsbury: per cent in the text; % only in tables.') + ' of them were songs from the ' + er('15th century', 'Bloomsbury spells out centuries and hyphenates them as adjectives.') + ' repertoire.</p>' +
      '<p>As Ong argued, oral cultures keep knowledge alive through performance rather than storage ' + er('(Ong, 1982)', 'Bloomsbury author–date has no comma: (Ong 1982).') + '. Taylor makes a related point about the ' + er('“repertoire”', 'Double quotation marks. Bloomsbury UK style uses single.') + ' as a form of embodied memory (Taylor, 2003).<sup>1</sup> The ' + er('digitized', 'Inconsistent with “digitise” above.') + ' collection now carries conservation costs of ' + er('5 lakh rupees', 'Bloomsbury: spell out numbers to one hundred and explain local units.') + er(' — ', 'Spaced em dash.') + 'a figure that surprised the archivists.</p>' +
      '<p>A singer in Purulia told me, ' + er('“the songs live only when they are sung.”', 'An unidentified interview, and a full point inside a quoted fragment.') + ' ' + er('The figure below', 'Neither publisher allows “above” or “below”. Use the number.') + ' shows how quickly the archive grew.</p>' +
      '<div class="m-img">' + er('photograph pasted into the document', 'Both publishers forbid embedded images.') + '</div>' +
      '<div class="m-notes"><p><b>Notes</b></p><p>1. See Ong, ' + er('op. cit.', 'Banned by Bloomsbury, and out of place in an author–date style.') + '</p></div>' +
      '<div class="m-refs"><p class="m-h">References</p><p>Ong, W. J. (1982). Orality and Literacy: The Technologizing of the Word. Methuen.</p><p>Taylor, D. (2003). The Archive and the Repertoire: Performing Cultural Memory in the Americas. Duke University Press.</p></div>' +
      '<span class="folio">3</span>',

    bloomsbury:
      '<span class="ms-tag">Bloomsbury, UK English, author–date</span>' +
      '<p class="m-chap">Chapter 3</p>' +
      '<h4 class="m-title">' + ed('Songs that live when sung', 'B2 Capitalization: a minimum of capitals in chapter headings.') + ': ' + ed('digitizing', 'B2 Spelling: -ize in both UK and US English.') + ' oral narratives in eastern India</h4>' +
      '<p class="m-h">' + ed('&lt;A&gt;', 'B1 Headings: mark heading levels with tags.') + 'Introduction</p>' +
      '<p>In the ' + ed('1990s', 'B2 Dates: decades as 1930s, never 1930’s.') + ', regional archives in West Bengal, ' + ed('Assam and', 'B2 Commas (UK): no serial comma unless needed for clarity.') + ' Odisha began to ' + ed('digitize', 'B2 Spelling: -ize.') + ' their audio collections. By ' + ed('3 March 2021', 'B2 Dates (UK): 1 May 1975.') + ', more than ' + ed('2,500', 'B2 Numbers: a comma in thousands.') + ' recordings had been catalogued, and nearly ' + ed('40 per cent', 'B2 Numbers: per cent spelt out in the text; % only in tables.') + ' of them were songs from the ' + ed('fifteenth-century', 'B2 Dates: centuries spelt out, hyphenated as adjectives.') + ' repertoire.</p>' +
      '<p class="ind">As Ong argued, oral cultures keep knowledge alive through performance rather than storage ' + ed('(Ong 1982)', 'B3 Author–date: (West 1979: 131–6), no comma.') + '. Taylor makes a related point about the ' + ed('‘repertoire’', 'B2 Quotations (UK): single quotation marks.') + ' as a form of embodied memory ' + ed('(Taylor 2003; see also Ong 1982)', 'B3: op. cit. is prohibited and author–date uses no reference notes, so the note is folded into the citation.') + '. The digitized collection now carries conservation costs of ' + ed('five lakh (500,000) rupees', 'B2 Other languages: explain local units, as in the guide’s own example.') + ed(' – ', 'B2 Hyphens and dashes (UK): spaced en dash for asides.') + 'a figure that surprised the archivists.</p>' +
      '<p class="ind">A singer in Purulia told me, ' + ed('‘the songs live only when they are sung’', 'B2 Quotations (UK): the full point goes outside unless the quotation is a complete sentence beginning with a capital.') + ' ' + ed('(personal communication, [CHECK: date])', 'B3 Unpublished material: cite in the text only, with no reference entry. The date must come from the author.', true) + '. ' + ed('Figure 3.1', 'B1 Figures: refer by number, never “below”.') + ' shows how quickly the archive grew.</p>' +
      '<p class="m-callout">' + ed('[Figure 3.1 here]', 'B1 Figures: position on a new line after the paragraph. Image supplied as a separate .tif or .jpg.') + '</p>' +
      '<p class="m-cap">Figure 3.1. ' + ed('[CHECK: caption with full source]. [CHECK: credit line.]', 'B1 Captions and credits: full source, then the credit after a full point, in the agreed wording.', true) + '</p>' +
      '<div class="m-refs"><p class="m-h">References</p>' +
      '<p>' + ed('Ong, W. J. (1982), <i>Orality and Literacy: The Technologizing of the Word</i>, Methuen.', 'B3 Reference patterns. The spelling “Technologizing” in the title is never changed.') + '</p>' +
      '<p>' + ed('Taylor, D. (2003), <i>The Archive and the Repertoire: Performing Cultural Memory in the Americas</i>, Duke University Press.', 'B3 Reference patterns: Surname, Initials (Year), Title, Publisher.') + '</p></div>' +
      '<span class="folio">57</span>',

    routledge:
      '<span class="ms-tag">Routledge, 03_Chapter 3.docx</span>' +
      '<span class="folio tr">1</span>' +
      '<h4 class="m-title" style="margin-top:0.8rem">3. Songs That Live When Sung: Digitising Oral Narratives in Eastern India</h4>' +
      '<p class="m-meta">' + ed('[CHECK: author name]', 'R1 ORCID iDs: author name beneath the chapter title.', true) + '<br>' + ed('[CHECK: ORCID iD]', 'R1 ORCID iDs: beneath each author name, before the abstract. Never guessed.', true) + '</p>' +
      '<p class="m-h" style="margin-top:0.8rem">Abstract</p>' +
      '<p class="m-abs">' + ed('[CHECK: 100 to 200 words in the third person, e.g. “This chapter examines …”. No abbreviations, notes or citations.]', 'R1 Abstracts: every chapter, highlighted, under the heading “Abstract”.', true) + '</p>' +
      '<p class="m-h">' + ed('Introduction', 'R1 Headings: Word style Heading 1.') + '</p>' +
      '<p>In the ' + ed('1990s', 'Decades take no apostrophe in any style.') + ', regional archives in West Bengal, Assam, and Odisha began to digitise their audio collections. By ' + ed('March 3, 2021', 'R1 Editorial style: US date order with UK spelling. The author must choose one and record it.', true) + ', more than ' + ed('2,500', 'APA 7, the author’s chosen style: commas in numbers of 1,000 and above.') + ' recordings had been catalogued, and nearly 40% of them were songs from the 15th century repertoire.</p>' +
      '<p>As Ong argued, oral cultures keep knowledge alive through performance rather than storage (Ong, 1982). Taylor makes a related point about the “repertoire” as a form of embodied memory (Taylor, 2003).' + ed('<sup>1</sup>', 'R1 Notes: numbered by chapter and added with Insert Endnote.') + ' The ' + ed('digitised', 'R1 Editorial style: the author used -ise twice and -ize once, so -ise wins.') + ' collection now carries conservation costs of ' + ed('5 lakh rupees', 'No T&F rule. Query: readers outside South Asia may not know “lakh”.', true) + ed('—', 'APA 7: closed em dash.') + 'a figure that surprised the archivists.</p>' +
      '<p>A singer in Purulia told me, “the songs live only when they are sung” ' + ed('(personal communication, [CHECK: date])', 'APA 7 personal communications: in the text only. The date must come from the author.', true) + '. ' + ed('Figure 3.1', 'R1 Callouts: always refer by number.') + ' shows how quickly the archive grew.</p>' +
      '<p class="m-callout hl">' + ed('<span>&lt;Figure 3.1 here&gt;</span>', 'R1 Callouts: highlighted, matching the file name Figure 3.1.jpg exactly. At least 1,500 px wide; alt text required.') + '</p>' +
      '<p class="m-cap">Figure 3.1. ' + ed('[CHECK: caption with source and any required credit line]', 'R1 Captions: directly below the callout.', true) + '</p>' +
      '<div class="m-notes"><p><b>Notes</b></p><p>1. ' + ed('See Ong (1982).', 'R1 Referencing: one style throughout; op. cit. has no place in APA.') + '</p></div>' +
      '<div class="m-refs"><p class="m-h">References</p>' +
      '<p>' + ed('Ong, W. J. (1982). <i>Orality and literacy: The technologizing of the word</i>. Methuen.', 'APA 7: sentence case for book titles. R1: a reference list at the end of every chapter, with DOIs where available.') + '</p>' +
      '<p>' + ed('Taylor, D. (2003). <i>The archive and the repertoire: Performing cultural memory in the Americas</i>. Duke University Press.', 'APA 7: sentence case for book titles.') + '</p></div>'
  };

  (function demo() {
    var page = $('#msPage'), body = $('#auditBody'), title = $('#sideTitle'), what = $('#sideWhat'), marks = $('#marksToggle');
    if (!page) return;
    var current = 'draft';
    var sevName = { block: 'Blocking', style: 'Style', query: 'Query' };
    function render(v, animate) {
      var go = function () {
        page.className = 'ms-page v-' + v + (marks && !marks.checked ? ' hide-marks' : '');
        page.innerHTML = VIEWS[v];
        var a = AUDIT[v];
        title.textContent = a.title; what.textContent = a.what;
        body.innerHTML = a.rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td><span class="sev ' + r[2] + '">' + sevName[r[2]] + '</span></td></tr>'; }).join('');
        if (!reduce && v !== 'draft') $$('.ed', page).forEach(function (e, i) { e.style.animationDelay = (i * 0.05) + 's'; e.classList.add('pop'); });
        page.classList.remove('swap');
      };
      if (animate && !reduce) { page.classList.add('swap'); setTimeout(go, 260); } else go();
    }
    render('draft');
    $$('.demo-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.dataset.v; if (v === current) return; current = v;
        $$('.demo-switch button').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
        render(v, true);
      });
    });
    if (marks) marks.addEventListener('change', function () { page.classList.toggle('hide-marks', !marks.checked); });
    function tipFor(e) {
      var t = e.target.closest && e.target.closest('[data-tip]');
      if (!t || !page.contains(t)) return;
      var q = t.classList.contains('q'), err = t.classList.contains('err');
      showTip(t, '<b>' + (err ? 'Problem' : q ? 'Query for the author' : 'Rule applied') + '</b>' + esc(t.getAttribute('data-tip')));
    }
    page.addEventListener('mouseover', tipFor);
    page.addEventListener('focusin', tipFor);
    page.addEventListener('click', tipFor);
    page.addEventListener('mouseout', function (e) { if (!e.relatedTarget || !page.contains(e.relatedTarget) || !e.relatedTarget.closest('[data-tip]')) hideTip(); });
    page.addEventListener('focusout', hideTip);
  })();

  /* ---------------- quick checker ---------------- */
  var STEMS = 'organi|recogni|reali|digiti|emphasi|characteri|categori|critici|summari|speciali|prioriti|standardi|minimi|maximi|utili|finali|visuali|contextuali|theori|conceptuali|marginali|globali|moderni|normali|populari|mobili|memoriali|coloni|harmoni|apologi|civili|legitimi|memori|optimi|symboli|authori|capitali|centrali|generali|institutionali|internali|locali|nationali|rationali|sociali|stabili|canoni|democrati|dramati|fantasi|fertili|ideali|itemi|scrutini|sympathi|synchroni|archivi|catalogi|periodi|historici|romantici|sensiti|sanitis|vandali|westerni|urbani|industriali|commerciali|digitali|monetis|mesmeri|politici|publici|stigmati|subsidi|tranquilli|traumati|weaponi|anglici';
  var SUFFIX = '(e|es|ed|ing|ation|ations|er|ers)';
  var ISE = new RegExp('\\b(' + STEMS.replace(/\|(sanitis|monetis)/g, '') + ')s' + SUFFIX + '\\b', 'gi');
  var IZE = new RegExp('\\b(' + STEMS.replace(/\|(sanitis|monetis)/g, '') + ')z' + SUFFIX + '\\b', 'gi');
  var MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';

  function findAll(re, text) { var out = [], m; re.lastIndex = 0; while ((m = re.exec(text))) { out.push({ i: m.index, j: m.index + m[0].length, s: m[0] }); if (!re.global) break; if (m[0].length === 0) re.lastIndex++; } return out; }

  function runChecks(text, pub) {
    var F = [];
    var BL = pub !== 'rt', UK = pub === 'bl-uk', US = pub === 'bl-us', RT = pub === 'rt';
    function add(re, sev, title, ref, fix, filter) {
      findAll(re, text).forEach(function (h) { if (!filter || filter(h)) F.push({ i: h.i, j: h.j, s: h.s, sev: sev, title: title, ref: ref, fix: typeof fix === 'function' ? fix(h.s) : fix }); });
    }
    add(/\b(1[0-9]|20)\d0['’]s\b/g, 'style', 'Apostrophe in a decade', BL ? 'B2 Dates' : 'Consistency', function (s) { return 'Write ' + s.replace(/['’]/, '') + '.'; });
    add(/\b(?:op\.\s?cit\.|loc\.\s?cit\.|et seq\.|supra|infra|idem)(?=[\s,.;:)]|$)/gi, BL ? 'block' : 'style', BL ? 'Prohibited abbreviation' : 'Old-style Latin abbreviation', BL ? 'B3 ibid. and other Latin abbreviations' : 'R1 Referencing', BL ? 'Bloomsbury bans this. Cite the work itself, e.g. Ong, Orality and Literacy.' : 'Not banned by T&F, but most author-date styles never use it. Cite the work instead.');
    if (BL) add(/\bibid\./gi, 'info', 'ibid.', 'B3 ibid. and other Latin abbreviations', 'Allowed only with short-title notes, and citing the work again is preferred.');
    add(/\b(?:the\s+)?(?:figure|table|image|map|chart|box|photograph|diagram)s?\s+(?:above|below)\b|\b(?:the\s+)?(?:above|below|following|preceding)\s+(?:figure|table|image|map|chart|box|photograph|diagram)s?\b/gi, 'style', 'Figure or table referred to by position', BL ? 'B1 Figures; Tables' : 'R1 Callouts', 'Give the number instead, e.g. Figure 3.1. Typesetters cannot promise the position.');
    if (UK) add(/\d\s?%/g, 'style', '% sign in running text', 'B2 Numbers', 'Write per cent in the text; % belongs only in tables.');
    if (US) add(/\d\s?%/g, 'style', '% sign in running text', 'B2 Numbers', 'Write percent in the text; % belongs only in tables.');
    if (UK) add(/\bpercent\b/gi, 'style', '“percent” in UK English', 'B2 Style sheet', 'UK English uses per cent.');
    if (US) add(/\bper cent\b/gi, 'style', '“per cent” in US English', 'B2 Style sheet', 'US English uses percent.');
    if (UK) add(/“[^”\n]{1,240}”|"[^"\n]{1,240}"/g, 'style', 'Double quotation marks', 'B2 Quotations (UK)', 'UK style uses single quotation marks, with double only for a quotation inside a quotation.');
    if (US) add(/(?:^|(?<=[\s(]))[‘'][A-Za-z][^'’\n]{0,200}[’'](?=[\s.,;:)!?]|$)/g, 'style', 'Single quotation marks', 'B2 Quotations (US)', 'US style uses double quotation marks, with single inside.');
    if (BL) add(ISE, 'style', '-ise spelling', 'B2 Spelling', function (s) { return 'Bloomsbury uses -ize in UK and US English: ' + s.replace(/is(?=(e|es|ed|ing|ation|ations|er|ers)$)/i, 'iz') + '.'; });
    if (UK) add(/\b[A-Za-z][\w-]*, [A-Za-z][\w-]*(?: [A-Za-z][\w-]*)?, (?:and|or) [A-Za-z][\w-]*/g, 'style', 'Possible serial comma', 'B2 Commas (UK)', 'UK style drops the comma before “and” in a list unless it is needed for clarity.');
    if (US) add(/\b[A-Za-z][\w-]*, [A-Za-z][\w-]*(?: [A-Za-z][\w-]*)? (?:and|or) [A-Za-z][\w-]*/g, 'info', 'Possible list without a serial comma', 'B2 Commas (US)', 'If this is a list of three or more, US style adds a comma before “and”.');
    if (UK) add(new RegExp('\\b(?:' + MONTHS + ') \\d{1,2},? \\d{4}\\b', 'g'), 'style', 'US date order', 'B2 Dates (UK)', function (s) { var m = s.match(/(\w+) (\d{1,2}),? (\d{4})/); return 'Write ' + m[2] + ' ' + m[1] + ' ' + m[3] + '.'; });
    if (US) add(new RegExp('\\b\\d{1,2} (?:' + MONTHS + ') \\d{4}\\b', 'g'), 'style', 'UK date order', 'B2 Dates (US)', function (s) { var m = s.match(/(\d{1,2}) (\w+) (\d{4})/); return 'Write ' + m[2] + ' ' + m[1] + ', ' + m[3] + '.'; });
    if (BL) add(/\b\d{1,2}(?:st|nd|rd|th)[\s-]centur(?:y|ies)\b/gi, 'style', 'Century in figures', 'B2 Dates', 'Spell centuries out (the fifteenth century) and hyphenate them before a noun (fifteenth-century songs).');
    add(/(?:^|[.!?]\s+)\d[\d,]*\b/g, 'style', 'Sentence starts with a numeral', BL ? 'B2 Numbers' : 'Most styles', 'Spell the number out or rephrase the sentence.');
    add(/\b(?:than|over|about|nearly|around|some|almost|approximately|only|exactly)\s+\d{4,}\b(?!\s*(?:BCE|CE|AD|BC))/gi, 'style', 'Thousands without a comma', BL ? 'B2 Numbers' : 'Most styles', function (s) { return 'Write ' + s.replace(/\d+/, function (n) { return Number(n).toLocaleString('en-GB'); }) + '.'; });
    if (BL) add(/(?<![\d.,:/£$€₹–-])\b[1-9]\d?\b(?![\d.,:%/–-])(?=\s+(?!per\b|cent\b|percent\b|cm\b|mm\b|km\b|kg\b|g\b|m\b|ml\b|am\b|pm\b|BCE\b|CE\b|AD\b|BC\b)[a-z])/g, 'info', 'Number under 101 in figures', 'B2 Numbers', 'Bloomsbury uses words for one to one hundred, except for exact measurements and series.');
    if (UK) add(/ ?— ?| -- /g, 'style', 'Em dash or double hyphen', 'B2 Hyphens and dashes (UK)', 'UK style uses a spaced en dash ( – ) for asides.');
    if (US) add(/ [–—] /g, 'style', 'Spaced dash', 'B2 Hyphens and dashes (US)', 'US style uses a closed em dash (—) for asides.');
    if (BL) add(/—{2,}|_{3,}/g, 'block', 'Dash in place of a repeated author', 'B3 References section', 'Repeat the author’s name. Bloomsbury does not allow the 3-em dash.');
    if (UK) add(/\b(?:e\.g\.|i\.e\.),/g, 'style', 'Comma after e.g. or i.e.', 'B2 Style sheet', 'UK style: e.g. and i.e. without a comma.');
    if (US) add(/\b(?:e\.g\.|i\.e\.)(?!,)/g, 'style', 'No comma after e.g. or i.e.', 'B2 Style sheet', 'US style: e.g., and i.e., with a comma.');
    if (UK) add(/\b(?:Mr|Mrs|Dr|St|Ltd)\./g, 'style', 'Full point after a contraction', 'B2 Abbreviations (UK)', 'UK style: Mr, Dr, St, Ltd without a full point.');
    if (US) add(/\b(?:Mr|Mrs|Dr)\b(?!\.)/g, 'style', 'No period after a contraction', 'B2 Abbreviations (US)', 'US style: Mr., Dr.');
    if (UK) add(/\bjudgments?\b|\banalyz(?:e|es|ed|ing)\b/gi, 'style', 'US spelling', 'B2 Style sheet', 'UK style sheet: judgement, analyse.');
    if (US) add(/\bjudgements?\b|\banalys(?:e|es|ed|ing)\b/gi, 'style', 'UK spelling', 'B2 Style sheet', 'US style sheet: judgment, analyze.');
    if (BL) add(/\(([A-Z][A-Za-z'’-]+(?: et al\.)?), (\d{4}[a-z]?)\)/g, 'style', 'Comma between author and year', 'B3 Author–date', function (s) { return 'Bloomsbury author–date: ' + s.replace(', ', ' ') + '.'; });
    if (RT) add(/\b(?:red|blue|green|yellow|orange|purple|pink|grey|gray)\s+(?:section|line|bar|area|segment|part|region|column|curve|dots?|shading|portion)s?\b/gi, 'style', 'Reference to colour', 'R2 Artwork: general', 'Routledge books print in greyscale unless agreed. Describe the element another way.');
    if (RT) add(/[\w.+-]+@[\w-]+\.[\w.]+/g, 'block', 'Email address', 'R1 ORCID iDs', 'Leave contact details out of the manuscript.');
    if (RT) {
      var ise = findAll(new RegExp(ISE.source, 'gi'), text), ize = findAll(new RegExp(IZE.source, 'gi'), text);
      if (ise.length && ize.length) {
        var minor = ise.length >= ize.length ? ize : ise, major = minor === ize ? '-ise' : '-ize';
        minor.forEach(function (h) { F.push({ i: h.i, j: h.j, s: h.s, sev: 'style', title: 'Mixed -ise and -ize spellings', ref: 'R1 Editorial style', fix: 'Most of your text uses ' + major + '. Make this match.' }); });
      }
      var dq = findAll(/“[^”\n]{1,240}”|"[^"\n]{1,240}"/g, text), sq = findAll(/(?:^|(?<=[\s(]))[‘'][A-Za-z][^'’\n]{0,200}[’'](?=[\s.,;:)!?]|$)/g, text);
      if (dq.length && sq.length) {
        var mnr = dq.length >= sq.length ? sq : dq;
        mnr.forEach(function (h) { F.push({ i: h.i, j: h.j, s: h.s, sev: 'style', title: 'Mixed quotation marks', ref: 'R1 Editorial style', fix: 'Choose single or double quotation marks and use them throughout.' }); });
      }
      var sc = findAll(/\b[A-Za-z][\w-]*, [A-Za-z][\w-]*(?: [A-Za-z][\w-]*)?, (?:and|or) /g, text), nsc = findAll(/\b[A-Za-z][\w-]*, [A-Za-z][\w-]* (?:and|or) [A-Za-z]/g, text);
      if (sc.length && nsc.length) nsc.forEach(function (h) { F.push({ i: h.i, j: h.j, s: h.s, sev: 'info', title: 'Serial comma used elsewhere', ref: 'R1 Editorial style', fix: 'If this is a list, match the serial comma you use elsewhere.' }); });
      var us = findAll(new RegExp('\\b(?:' + MONTHS + ') \\d{1,2},? \\d{4}\\b', 'g'), text), uk = findAll(new RegExp('\\b\\d{1,2} (?:' + MONTHS + ') \\d{4}\\b', 'g'), text);
      if (us.length && uk.length) us.forEach(function (h) { F.push({ i: h.i, j: h.j, s: h.s, sev: 'style', title: 'Mixed date formats', ref: 'R1 Editorial style', fix: 'Use one date order throughout.' }); });
      else if (us.length && ise.length > ize.length) us.forEach(function (h) { F.push({ i: h.i, j: h.j, s: h.s, sev: 'info', title: 'US date order with UK spelling', ref: 'R1 Editorial style', fix: 'Not wrong in itself, but check it matches the conventions you recorded for the copy editor.' }); });
    }
    F.sort(function (a, b) { return a.i - b.i || b.j - a.j; });
    return F;
  }

  (function checker() {
    var ta = $('#checkText'), sel = $('#checkPub'), btn = $('#checkBtn'), out = $('#checkResults'), prev = $('#checkPreview'), count = $('#checkCount');
    if (!ta) return;
    var timer;
    function run() {
      var text = ta.value, F = [];
      try { F = runChecks(text, sel.value); } catch (e) { F = []; }
      // preview with non-overlapping marks
      var html = '', at = 0;
      F.forEach(function (f) {
        if (f.i < at) return;
        html += esc(text.slice(at, f.i)) + '<mark title="' + esc(f.title) + '">' + esc(text.slice(f.i, f.j)) + '</mark>';
        at = f.j;
      });
      html += esc(text.slice(at));
      prev.innerHTML = html || '<span style="color:var(--muted)">Your text will appear here with problems highlighted.</span>';
      count.textContent = F.length ? '(' + F.length + ')' : '';
      if (!F.length) {
        out.innerHTML = '<li class="ok"><div class="r-head">Nothing flagged</div>None of the patterns this small checker knows about turned up. The full skill checks far more, including structure, references and files.</li>';
        return;
      }
      out.innerHTML = F.map(function (f) {
        return '<li class="' + (f.sev === 'block' ? 'block' : f.sev === 'info' ? 'ok' : '') + '"><div class="r-head">' + esc(f.title) + ' <span>' + esc(f.ref) + '</span></div><q>' + esc(f.s.trim()) + '</q> ' + esc(f.fix) + '</li>';
      }).join('');
    }
    btn.addEventListener('click', run);
    sel.addEventListener('change', run);
    ta.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 450); });
    run();
  })();

  /* ---------------- abstract meter ---------------- */
  (function absMeter() {
    var ta = $('#absText'), cnt = $('#absCount'), meter = $('#absMeter'), out = $('#absResults');
    if (!ta) return;
    var needle = $('.needle', meter);
    function run() {
      var t = ta.value.trim();
      var words = t ? t.split(/\s+/).filter(function (w) { return /[A-Za-z0-9]/.test(w); }).length : 0;
      cnt.textContent = words;
      needle.style.width = Math.min(100, words / 250 * 100) + '%';
      meter.classList.toggle('ok', words >= 100 && words <= 200);
      meter.classList.toggle('over', words > 200);
      var R = [];
      if (words < 100) R.push(['block', 'Too short', words + ' words. Routledge asks for 100 to 200.']);
      else if (words > 200) R.push(['block', 'Too long', words + ' words. Cut to 200 or fewer.']);
      else R.push(['ok', 'Length is right', words + ' words, inside the 100 to 200 range.']);
      var fp = t.match(/\bI\b|\b(?:me|my|mine|we|us|our|ours)\b/gi);
      if (fp) R.push(['block', 'First person', 'Found: ' + Array.from(new Set(fp.map(function (x) { return x.toLowerCase() === 'i' ? 'I' : x.toLowerCase(); }))).join(', ') + '. Write in the third person, e.g. “This chapter examines …”.']);
      else if (t) R.push(['ok', 'Third person', 'No first-person words found.']);
      var ab = t.match(/\b[A-Z]{2,}s?\b/g);
      if (ab) R.push(['style', 'Abbreviations', 'Found: ' + Array.from(new Set(ab)).join(', ') + '. Spell names out in full; the abstract must stand alone.']);
      var ci = t.match(/\([^)]*\b\d{4}[a-z]?\b[^)]*\)|\bet al\.|\[\d+\]|[¹²³⁴⁵⁶⁷⁸⁹]/g);
      if (ci) R.push(['style', 'Citations or note markers', 'Found: ' + ci.join(', ') + '. Remove references from the abstract.']);
      if (t && /\bthis chapter\b/i.test(t)) R.push(['ok', 'Good opening', 'It names the chapter in the third person.']);
      out.innerHTML = R.map(function (r) { return '<li class="' + (r[0] === 'block' ? 'block' : r[0] === 'ok' ? 'ok' : '') + '"><div class="r-head">' + esc(r[1]) + '</div>' + esc(r[2]) + '</li>'; }).join('');
    }
    ta.addEventListener('input', run);
    run();
  })();

  /* ---------------- citation machine ---------------- */
  (function cite() {
    var tabs = $('#citeTabs'), out = $('#citeOut'), copyBtn = $('#copyCite'), copied = $('#copied');
    if (!tabs) return;
    var d = new Date();
    var MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var MLAM = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    var uk = d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear();
    var mla = d.getDate() + ' ' + MLAM[d.getMonth()] + ' ' + d.getFullYear();
    var van = d.getFullYear() + ' ' + MON[d.getMonth()].slice(0, 3) + ' ' + d.getDate();
    var URL = 'https://github.com/SimantaDH/skill';
    var TT = 'PressReady: A Modular LLM Skill for Formatting Research Manuscripts to Bloomsbury and Routledge House Styles';
    var TS = 'PressReady: A modular LLM skill for formatting research manuscripts to Bloomsbury and Routledge house styles';
    var TV = 'PressReady: a modular LLM skill for formatting research manuscripts to Bloomsbury and Routledge house styles';
    var i = function (s) { return '<i>' + s + '</i>'; };
    var F = [
      { k: 'APA 7', ref: 'Nandi, S. (2026). ' + i(TS) + ' (Version 1.0) [Computer software]. GitHub. ' + URL, intext: '(Nandi, 2026)' },
      { k: 'MLA 9', ref: 'Nandi, Simanta. ' + i(TT) + '. Version 1.0, GitHub, 3 Nov. 2026, github.com/SimantaDH/skill. Accessed ' + mla + '.', intext: '(Nandi)' },
      { k: 'Chicago author-date', ref: 'Nandi, Simanta. 2026. ' + i(TT) + '. Version 1.0. GitHub. ' + URL + '.', intext: '(Nandi 2026)' },
      { k: 'Chicago notes', ref: 'Nandi, Simanta. ' + i(TT) + '. Version 1.0. GitHub, 2026. ' + URL + '.', intext: 'Note: 1. Simanta Nandi, ' + i(TT) + ', version 1.0 (GitHub, 2026), ' + URL + '.' },
      { k: 'Harvard', ref: 'Nandi, S. (2026) ' + i(TS) + ' (Version 1.0) [Computer program]. Available at: ' + URL + ' (Accessed: ' + uk + ').', intext: '(Nandi, 2026)' },
      { k: 'IEEE', ref: '[1] S. Nandi, “' + TS + ',” Version 1.0, GitHub, 2026. [Online]. Available: ' + URL, intext: '[1]' },
      { k: 'Vancouver', ref: '1. Nandi S. ' + TV + ' [Internet]. Version 1.0. GitHub; 2026 [cited ' + van + ']. Available from: ' + URL, intext: '(1)' },
      { k: 'Bloomsbury author–date', ref: 'Nandi, S. (2026), ' + i(TT) + ', version 1.0, GitHub. Available online: ' + URL + ' (accessed ' + uk + ').', intext: '(Nandi 2026)' },
      { k: 'Bloomsbury short-title', ref: 'Nandi, Simanta. ' + i(TT) + '. Version 1.0. GitHub, 2026. ' + URL + '.', intext: 'First note: 1. Simanta Nandi, ' + i(TT) + ', version 1.0 (GitHub, 2026), ' + URL + '. Later notes: Nandi, ' + i('PressReady') + '.' },
      { k: 'BibTeX', code: '@software{nandi2026pressready,\n  author    = {Nandi, Simanta},\n  title     = {{PressReady}: A Modular {LLM} Skill for Formatting Research Manuscripts to {Bloomsbury} and {Routledge} House Styles},\n  year      = {2026},\n  month     = nov,\n  version   = {1.0},\n  publisher = {GitHub},\n  url       = {' + URL + '},\n  note      = {Licensed under CC BY-NC 4.0}\n}' },
      { k: 'RIS', code: 'TY  - COMP\nAU  - Nandi, Simanta\nTI  - ' + TT + '\nPY  - 2026\nDA  - 2026/11/03\nET  - 1.0\nPB  - GitHub\nUR  - ' + URL + '\nER  - ' }
    ];
    var cur = 0;
    function strip(h) { var t = doc.createElement('div'); t.innerHTML = h; return t.textContent; }
    function show(n) {
      cur = n;
      $$('button', tabs).forEach(function (b, j) { b.setAttribute('aria-selected', String(j === n)); b.tabIndex = j === n ? 0 : -1; });
      var f = F[n];
      if (f.code) out.innerHTML = '<span class="label">' + esc(f.k) + '</span><pre>' + esc(f.code) + '</pre>';
      else out.innerHTML = '<span class="label">Reference list entry</span><p class="hang" style="margin:0">' + f.ref + '</p><p class="intext"><span class="label" style="display:inline">In the text:</span> ' + f.intext + '</p>';
      out.setAttribute('aria-label', f.k + ' citation');
    }
    F.forEach(function (f, n) {
      var b = doc.createElement('button'); b.type = 'button'; b.role = 'tab'; b.setAttribute('role', 'tab'); b.textContent = f.k;
      b.addEventListener('click', function () { show(n); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); var m = (n + (e.key === 'ArrowRight' ? 1 : F.length - 1)) % F.length; show(m); $$('button', tabs)[m].focus(); }
      });
      tabs.appendChild(b);
    });
    show(0);
    copyBtn.addEventListener('click', function () {
      var f = F[cur], text = f.code || strip(f.ref);
      var done = function () { copied.classList.add('show'); setTimeout(function () { copied.classList.remove('show'); }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
      else { fallback(text); done(); }
    });
    function fallback(text) {
      var t = doc.createElement('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      doc.body.appendChild(t); t.select(); try { doc.execCommand('copy'); } catch (e) {} doc.body.removeChild(t);
    }
  })();

  /* ---------------- install tabs ---------------- */
  (function installTabs() {
    var list = $('.install .tabs');
    if (!list) return;
    var tabsEls = $$('.tab', list);
    function act(t) {
      tabsEls.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        var p = $('#' + x.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
    }
    tabsEls.forEach(function (t, n) {
      t.addEventListener('click', function () { act(t); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault(); var m = tabsEls[(n + (e.key === 'ArrowRight' ? 1 : tabsEls.length - 1)) % tabsEls.length]; act(m); m.focus();
        }
      });
    });
  })();

  /* ---------------- method ink line ---------------- */
  (function inkLine() {
    var wrap = $('#stepsWrap'), ink = wrap ? $('.ink', wrap) : null;
    if (!ink) return;
    var items = $$('li', wrap);
    function upd() {
      var r = wrap.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height));
      ink.style.height = (p * (r.height - 20)) + 'px';
      items.forEach(function (li) { var lr = li.getBoundingClientRect(); li.classList.toggle('on', lr.top < vh * 0.62); });
    }
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  })();

  /* ---------------- portrait tilt ---------------- */
  (function tilt() {
    var p = $('#portrait'), f = p ? $('.frame', p) : null, s = p ? $('.shine', p) : null;
    if (!f || reduce) return;
    p.addEventListener('pointermove', function (e) {
      var r = f.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      f.style.transform = 'rotateY(' + ((x - 0.5) * 10) + 'deg) rotateX(' + ((0.5 - y) * 8) + 'deg)';
      if (s) { s.style.setProperty('--sx', (x * 100) + '%'); s.style.setProperty('--sy', (y * 100) + '%'); }
    });
    p.addEventListener('pointerleave', function () { f.style.transform = ''; });
  })();
})();
