/* 全站互動邏輯 */
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('[data-nav-link]');
const exploreBtn = document.querySelector('#explore-btn');
const timelineItems = document.querySelectorAll('.timeline__item');
const experiencePanels = document.querySelectorAll('.experience-panel');
const skillFilters = document.querySelectorAll('[data-skill-filter]');
const skillsGrid = document.querySelector('.skills-grid');
const projectTrack = document.querySelector('.project-track');
const projectCards = document.querySelectorAll('.project-card');
const carouselControls = document.querySelectorAll('.carousel-control');
const projectDetailsToggle = document.querySelectorAll('[data-project-detail]');
const meetingBtn = document.querySelector('#meeting-btn');
const meetingSuggestion = document.querySelector('#meeting-suggestion');
const footerYear = document.querySelector('#footer-year');
const storyCards = document.querySelectorAll('.story-card');
const contactForm = document.querySelector('.contact-form');
const formFeedback = document.querySelector('#form-feedback');

const SKILL_MAP = {
  ux: [
    { label: 'UX Research', score: 90, description: '深度訪談、卡片分類、情境劇本、可用性測試' },
    { label: 'Product Discovery', score: 85, description: '定義問題、工作坊引導、策略地圖' },
    { label: 'Service Blueprint', score: 80, description: '跨接觸點旅程設計，連結內部流程' }
  ],
  ui: [
    { label: 'Design Systems', score: 88, description: '建立跨平台元件庫與 Token 管理' },
    { label: 'Motion Design', score: 78, description: '以原子動畫製作流暢互動與微動效' },
    { label: 'Accessibility', score: 82, description: 'WCAG 準則、可訪問色彩與鍵盤操作規劃' }
  ],
  tech: [
    { label: 'Rapid Prototyping', score: 84, description: 'Figma Prototype、ProtoPie 與 Framer' },
    { label: 'Front-end Basics', score: 72, description: 'HTML、CSS、JavaScript 建構互動頁面' },
    { label: 'Data Visualization', score: 76, description: 'D3.js、Canvas 與儀表板圖表設計' }
  ],
  ops: [
    { label: 'Design Ops', score: 86, description: '跨部門協作流程、設計治理、資源管理' },
    { label: 'Team Mentoring', score: 82, description: '設計評審制度、教練式回饋循環' },
    { label: 'OKR / KPI', score: 80, description: '以數據衡量設計價值，推動成效追蹤' }
  ]
};

const MEETING_SLOTS = [
  '週二 10:30 · 線上共同研討 30 分鐘',
  '週四 14:00 · 產品需求探索 45 分鐘',
  '週五 09:00 · UX 健檢會議 30 分鐘',
  '下週一 16:00 · 遠端工作流程分享 1 小時'
];

function toggleNav() {
  const isOpen = navList.classList.toggle('is-open');
  navToggle?.setAttribute('aria-expanded', String(isOpen));
}

function closeNav() {
  navList.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

function handleTimelineClick(event) {
  const target = event.currentTarget;
  const panelId = target.dataset.target;
  if (!panelId) return;

  timelineItems.forEach((item) => item.classList.remove('is-active'));
  experiencePanels.forEach((panel) => panel.classList.remove('is-active'));

  target.classList.add('is-active');
  const activePanel = document.querySelector(`#${panelId}`);
  activePanel?.classList.add('is-active');
  activePanel?.focus();
}

function renderSkillCards(filterKey = 'ux') {
  const items = SKILL_MAP[filterKey] ?? [];
  const fragment = document.createDocumentFragment();

  items.forEach(({ label, score, description }) => {
    const card = document.createElement('article');
    card.className = 'skill-card';
    card.innerHTML = `
      <h3>${label} <span>${score}/100</span></h3>
      <p>${description}</p>
      <progress value="${score}" max="100">${score}</progress>
    `;
    fragment.appendChild(card);
  });

  skillsGrid.innerHTML = '';
  skillsGrid.appendChild(fragment);
}

function handleSkillFilter(event) {
  const button = event.currentTarget;
  const key = button.dataset.skillFilter;
  if (!key) return;

  skillFilters.forEach((chip) => {
    const isActive = chip === button;
    chip.classList.toggle('is-active', isActive);
    chip.setAttribute('aria-selected', String(isActive));
  });

  renderSkillCards(key);
}

function updateActiveProject(index) {
  projectCards.forEach((card) => {
    const isActive = Number(card.dataset.index) === index;
    card.classList.toggle('is-active', isActive);
  });
  if (projectTrack) {
    projectTrack.style.setProperty('--active-index', index);
  }
}

function handleCarousel(direction) {
  const total = projectCards.length;
  const currentIndex = [...projectCards].findIndex((card) => card.classList.contains('is-active'));
  const offset = direction === 'next' ? 1 : -1;
  const nextIndex = (currentIndex + offset + total) % total;
  updateActiveProject(nextIndex);
}

function handleProjectDetailToggle(event) {
  const button = event.currentTarget;
  const detailList = button.nextElementSibling;
  if (!detailList) return;
  const isOpen = detailList.classList.toggle('is-open');
  detailList.setAttribute('aria-hidden', String(!isOpen));
  button.setAttribute('aria-expanded', String(isOpen));
}

function handleMeetingSuggestion() {
  const randomIndex = Math.floor(Math.random() * MEETING_SLOTS.length);
  meetingSuggestion.textContent = `建議時段：${MEETING_SLOTS[randomIndex]}`;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = (formData.get('name') || '').toString().trim() || '朋友';
  if (formFeedback) {
    formFeedback.textContent = `${name}，感謝來信！我會在 24 小時內與您聯繫。`;
  }
  contactForm.reset();
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const navLink = document.querySelector(`[data-nav-link][href="#${id}"]`);
        if (!navLink) return;
        navLink.classList.toggle('is-active', entry.isIntersecting && entry.intersectionRatio >= 0.6);
      });
    },
    { threshold: [0.6], rootMargin: '-10% 0px -10% 0px' }
  );

  document.querySelectorAll('section').forEach((section) => observer.observe(section));
}

function initStoryHover() {
  storyCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-highlighted');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-highlighted');
    });
    card.addEventListener('focusin', () => {
      card.classList.add('is-highlighted');
    });
    card.addEventListener('focusout', () => {
      card.classList.remove('is-highlighted');
    });
  });
}

function smoothScrollTo(hash) {
  const element = document.querySelector(hash);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function init() {
  footerYear.textContent = String(new Date().getFullYear());

  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const hash = link.getAttribute('href');
      if (hash) {
        smoothScrollTo(hash);
        closeNav();
      }
    });
  });

  exploreBtn?.addEventListener('click', () => smoothScrollTo('#experience'));

  timelineItems.forEach((item) => item.addEventListener('click', handleTimelineClick));

  skillFilters.forEach((chip) => chip.addEventListener('click', handleSkillFilter));
  renderSkillCards('ux');

  carouselControls.forEach((control) => {
    control.addEventListener('click', () => {
      const direction = control.dataset.direction;
      handleCarousel(direction);
    });
  });

  projectDetailsToggle.forEach((button) => button.addEventListener('click', handleProjectDetailToggle));

  meetingBtn?.addEventListener('click', handleMeetingSuggestion);

  contactForm?.addEventListener('submit', handleContactSubmit);

  updateActiveProject(0);
  observeSections();
  initStoryHover();
}

document.addEventListener('DOMContentLoaded', init);
