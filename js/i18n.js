/* ==========================================================================
   Internationalization Module (i18n)
   Manages bilingual content switching (EN/RU) without page reload.
   ========================================================================== */

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.headline1": "Less AI Hype.",
    "hero.headline2": "More Results.",
    "hero.subtitle": "I help companies automate high-impact work and build AI-native products on AWS — from strategy to production.",
    "hero.cta": "Let's Talk",
    "hero.download": "Download CV",

    // About
    "about.title": "About Me",
    "about.text": "Lead AWS Solutions Architect with 10+ years of experience. Specialized in GenAI/Agentic AI solutions, AWS infrastructure, Kubernetes, and DevOps. Delivered 20+ production systems and 8+ AI solutions for international B2B and SaaS companies.",

    // Skills
    "skills.title": "Skills & Certifications",
    "skills.cat.cloud": "Cloud Architecture",
    "skills.cat.ai": "AI & GenAI",
    "skills.cat.devops": "DevOps & IaC",
    "skills.cat.observability": "Leadership & Compliance",
    "skills.cloud.1": "Cloud Architecture & Migration Strategy",
    "skills.cloud.2": "Container Orchestration & Serverless",
    "skills.cloud.3": "Cost Optimization & FinOps",
    "skills.ai.1": "Generative AI & Agentic AI Systems",
    "skills.ai.2": "AWS Bedrock, Agentcore, RAG, MCP Tools",
    "skills.ai.3": "AI-native Product Development",
    "skills.devops.1": "Infrastructure as Code & Automation",
    "skills.devops.2": "CI/CD Pipeline Design",
    "skills.observability.1": "Observability & Disaster Recovery",
    "skills.observability.2": "Technical Leadership & Pre-sales",
    "skills.observability.3": "Security Compliance (SOC2, ISO27001, GDPR)",

    // Certifications
    "skills.certs.title": "Certifications",
    "skills.cert.0": "AWS Certified Generative AI Developer – Professional",
    "skills.cert.1": "AWS Certified Solutions Architect – Professional",
    "skills.cert.2": "AWS Certified Solutions Architect – Associate",
    "skills.cert.3": "AWS Knowledge: Migration Foundations",
    "skills.cert.4": "Microsoft Certified: Azure Fundamentals",
    "skills.cert.5": "Scaleway Foundations",

    // Experience
    "exp.title": "Experience",
    "exp.1.date": "Jun 2025 – Present",
    "exp.1.role": "Tech Lead / Solutions Architect",
    "exp.1.company": "Noveo Group",
    "exp.1.a1": "Architected and delivered 8+ AI agentic systems integrated into high-availability production environments",
    "exp.1.a2": "Conducted 30+ pre-sales technical presentations, contributing to $2M+ annual contracts pipeline",
    "exp.1.a3": "Led a team of 10+ Solution Architects: weekly architecture reviews, technical interviews, sign-off on production decisions",
    "exp.1.a4": "Reduced AWS compute costs by 25-40% across client accounts",
    "exp.1.a5": "Designed DR strategies achieving RPO <1h and RTO <4h for enterprise infrastructure",
    "exp.1.a6": "Led 3+ Azure-to-AWS migrations with zero downtime, supporting SOC2/ISO27001 compliance",

    "exp.2.date": "Mar 2025 – Jun 2025",
    "exp.2.role": "AWS Solutions Architect",
    "exp.2.company": "Noveo Group",
    "exp.2.a1": "Delivered 10+ AWS cloud-native architectures from scratch to production",
    "exp.2.a2": "Migrated 4+ projects from Azure, GCP, Scaleway, and Heroku to AWS with zero data loss",
    "exp.2.a3": "Implemented CI/CD pipelines, observability platforms, DR plans, and security compliance (SOC2, ISO27001, GDPR)",
    "exp.2.a4": "Reduced AWS compute costs by 30% through ARM64 and multi-architecture EKS migration",

    "exp.3.date": "Feb 2022 – Mar 2025",
    "exp.3.role": "Senior DevOps System Engineer",
    "exp.3.company": "EPAM Systems",
    "exp.3.a1": "Supported enterprise SaaS platform serving 5000+ developers with 99.9% uptime SLA",
    "exp.3.a2": "Reduced CI/CD infrastructure costs 10x (from 50 to 5 Jenkins servers)",
    "exp.3.a3": "Reduced deployment time by 60% through Terraform/CDK, Helm automation and GitLab/Jenkins CI pipelines",
    "exp.3.a4": "Improved system observability coverage from 40% to 95% across distributed microservices",

    "exp.4.date": "Mar 2021 – Feb 2022",
    "exp.4.role": "DevOps Engineer",
    "exp.4.company": "NAUMEN",
    "exp.4.a1": "Supported low-latency SaaS infrastructure on AWS",
    "exp.4.a2": "Implemented Kubernetes-based deployments and CI/CD automation",
    "exp.4.a3": "Worked with Prometheus, Grafana, Postgres, Redis, and monitoring tooling",

    "exp.5.date": "Nov 2017 – Mar 2021",
    "exp.5.role": "System Engineer",
    "exp.5.company": "TurboRender",
    "exp.5.a1": "Designed scalable client-server architectures with 1000+ instances",
    "exp.5.a2": "Implemented automation, monitoring, and infrastructure optimization workflows",
    "exp.5.a3": "Worked across AWS, Azure, and Yandex Cloud environments",

    // Projects
    "projects.title": "Projects",
    "projects.error": "Unable to load projects. Please try again later.",

    // Stats
    "stats.experience": "Years Experience",
    "stats.architects": "Architects Led",
    "stats.cost": "Cost Reduction",
    "stats.developers": "Developers Supported",

    // Clients
    "clients.title": "Trusted by",

    // Contact
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message"
  },

  ru: {
    // Navigation
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    // Hero
    "hero.headline1": "Меньше хайпа.",
    "hero.headline2": "Больше результатов.",
    "hero.subtitle": "Помогаю компаниям автоматизировать ключевые процессы и создавать AI-продукты на AWS — от стратегии до продакшна.",
    "hero.cta": "Обсудить проект",
    "hero.download": "Скачать CV",

    // About
    "about.title": "Обо мне",
    "about.text": "Lead AWS Solutions Architect с более чем 10-летним опытом. Специализация: GenAI/Agentic AI решения, AWS-инфраструктура, Kubernetes и DevOps. Доставлено 20+ продакшн-систем и 8+ AI-решений для международных B2B и SaaS компаний.",

    // Skills
    "skills.title": "Навыки и сертификации",
    "skills.cat.cloud": "Облачная архитектура",
    "skills.cat.ai": "AI и GenAI",
    "skills.cat.devops": "DevOps и IaC",
    "skills.cat.observability": "Лидерство и Compliance",
    "skills.cloud.1": "Облачная архитектура и стратегия миграции",
    "skills.cloud.2": "Оркестрация контейнеров и Serverless",
    "skills.cloud.3": "Оптимизация затрат и FinOps",
    "skills.ai.1": "Generative AI и Agentic AI системы",
    "skills.ai.2": "AWS Bedrock, Agentcore, RAG, MCP Tools",
    "skills.ai.3": "Разработка AI-native продуктов",
    "skills.devops.1": "Infrastructure as Code и автоматизация",
    "skills.devops.2": "Проектирование CI/CD пайплайнов",
    "skills.observability.1": "Наблюдаемость и аварийное восстановление",
    "skills.observability.2": "Техническое лидерство и Pre-sales",
    "skills.observability.3": "Security Compliance (SOC2, ISO27001, GDPR)",

    // Certifications
    "skills.certs.title": "Сертификации",
    "skills.cert.0": "AWS Certified Generative AI Developer – Professional",
    "skills.cert.1": "AWS Certified Solutions Architect – Professional",
    "skills.cert.2": "AWS Certified Solutions Architect – Associate",
    "skills.cert.3": "AWS Knowledge: Migration Foundations",
    "skills.cert.4": "Microsoft Certified: Azure Fundamentals",
    "skills.cert.5": "Scaleway Foundations",

    // Experience
    "exp.title": "Опыт работы",
    "exp.1.date": "Июнь 2025 – настоящее время",
    "exp.1.role": "Tech Lead / Solutions Architect",
    "exp.1.company": "Noveo Group",
    "exp.1.a1": "Проектирование и внедрение 8+ AI agentic систем, интегрированных в высокодоступные продакшн-среды",
    "exp.1.a2": "Проведение 30+ pre-sales технических презентаций, вклад в $2M+ годовой pipeline контрактов",
    "exp.1.a3": "Руководство командой 10+ Solution Architects: еженедельные архитектурные ревью, технические интервью, sign-off продакшн-решений",
    "exp.1.a4": "Снижение затрат на вычисления AWS на 25-40% по клиентским аккаунтам",
    "exp.1.a5": "Проектирование DR-стратегий с RPO <1ч и RTO <4ч для корпоративной инфраструктуры",
    "exp.1.a6": "Руководство 3+ миграциями Azure-to-AWS с нулевым даунтаймом, поддержка SOC2/ISO27001",

    "exp.2.date": "Март 2025 – Июнь 2025",
    "exp.2.role": "AWS Solutions Architect",
    "exp.2.company": "Noveo Group",
    "exp.2.a1": "Доставка 10+ облачных AWS-архитектур с нуля до продакшна",
    "exp.2.a2": "Миграция 4+ проектов из Azure, GCP, Scaleway и Heroku в AWS без потери данных",
    "exp.2.a3": "Внедрение CI/CD пайплайнов, платформ наблюдаемости, DR-планов и security compliance (SOC2, ISO27001, GDPR)",
    "exp.2.a4": "Снижение затрат AWS на 30% через ARM64 и мультиархитектурную миграцию EKS",

    "exp.3.date": "Февраль 2022 – Март 2025",
    "exp.3.role": "Senior DevOps System Engineer",
    "exp.3.company": "EPAM Systems",
    "exp.3.a1": "Поддержка корпоративной SaaS-платформы для 5000+ разработчиков с SLA 99.9%",
    "exp.3.a2": "Снижение затрат на CI/CD инфраструктуру в 10 раз (с 50 до 5 Jenkins серверов)",
    "exp.3.a3": "Сокращение времени деплоя на 60% через автоматизацию Terraform/CDK, Helm и GitLab/Jenkins CI",
    "exp.3.a4": "Повышение покрытия наблюдаемости с 40% до 95% по распределённым микросервисам",

    "exp.4.date": "Март 2021 – Февраль 2022",
    "exp.4.role": "DevOps Engineer",
    "exp.4.company": "NAUMEN",
    "exp.4.a1": "Поддержка низколатентной SaaS-инфраструктуры на AWS",
    "exp.4.a2": "Внедрение деплоев на базе Kubernetes и автоматизация CI/CD",
    "exp.4.a3": "Работа с Prometheus, Grafana, Postgres, Redis и инструментами мониторинга",

    "exp.5.date": "Ноябрь 2017 – Март 2021",
    "exp.5.role": "System Engineer",
    "exp.5.company": "TurboRender",
    "exp.5.a1": "Проектирование масштабируемых клиент-серверных архитектур на 1000+ инстансов",
    "exp.5.a2": "Внедрение автоматизации, мониторинга и оптимизации инфраструктуры",
    "exp.5.a3": "Работа в средах AWS, Azure и Yandex Cloud",

    // Projects
    "projects.title": "Проекты",
    "projects.error": "Не удалось загрузить проекты. Попробуйте позже.",

    // Stats
    "stats.experience": "Лет опыта",
    "stats.architects": "Архитекторов в команде",
    "stats.cost": "Снижение затрат",
    "stats.developers": "Разработчиков поддержано",

    // Clients
    "clients.title": "Доверяют",

    // Contact
    "contact.title": "Контакты",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.message": "Сообщение",
    "contact.send": "Отправить"
  }
};

const STORAGE_KEY = 'portfolio-lang';

/**
 * Get the current language preference from localStorage.
 * Defaults to 'en' if no preference is stored or localStorage is unavailable.
 */
function getLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (e) {
    return 'en';
  }
}

/**
 * Set the language preference and apply translations.
 * @param {string} lang - Language code ('en' or 'ru')
 */
function setLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage unavailable (e.g. private browsing) — continue without persistence
  }
  applyTranslations(lang);
}

/**
 * Apply translations to all elements with [data-i18n] attributes.
 * Updates document.documentElement.lang to reflect the active language.
 * @param {string} lang - Language code ('en' or 'ru')
 */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  var lang = getLanguage();
  applyTranslations(lang);

  var langBtn = document.getElementById('lang-switch');
  if (langBtn) {
    // Update button text to reflect current state
    langBtn.textContent = lang === 'en' ? 'EN | RU' : 'RU | EN';

    langBtn.addEventListener('click', function () {
      var current = getLanguage();
      var next = current === 'en' ? 'ru' : 'en';
      setLanguage(next);
      langBtn.textContent = next === 'en' ? 'EN | RU' : 'RU | EN';
      // Reload projects to display in the new language
      if (typeof reloadProjects === 'function') {
        reloadProjects();
      }
    });
  }
});
