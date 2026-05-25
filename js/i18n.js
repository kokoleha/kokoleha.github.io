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
    "hero.title": "Lead AWS Solutions Architect",
    "hero.tagline": "GenAI & Cloud Migration Specialist",
    "hero.cta": "Get in Touch",

    // About
    "about.title": "About Me",
    "about.text": "Lead AWS Solutions Architect with 10+ years of experience delivering cloud-native and AI-powered systems for international B2B and SaaS companies. Specialized in AWS migrations, Kubernetes platforms, DevOps transformation, observability, and production-grade GenAI / Agentic AI solutions using AWS Bedrock and serverless architectures.",

    // Skills
    "skills.title": "Skills & Certifications",
    "skills.cat.cloud": "Cloud Architecture",
    "skills.cat.ai": "AI & GenAI",
    "skills.cat.devops": "DevOps & IaC",
    "skills.cat.observability": "Observability",
    "skills.cloud.1": "AWS Cloud Architecture & Migration",
    "skills.cloud.2": "Kubernetes, EKS, ECS, Serverless",
    "skills.cloud.3": "Cost Optimization & High Availability",
    "skills.ai.1": "Generative AI & Agentic AI Systems",
    "skills.ai.2": "AWS Bedrock, Agentcore, RAG, MCP Tools",
    "skills.ai.3": "Enterprise SaaS Platforms",
    "skills.devops.1": "Infrastructure as Code (Terraform, CDK, Helm, Ansible)",
    "skills.devops.2": "CI/CD & DevOps Automation",
    "skills.observability.1": "Observability, Reliability & Disaster Recovery",
    "skills.observability.2": "Technical Leadership & Solution Reviews",

    // Certifications
    "skills.certs.title": "Certifications",
    "skills.cert.1": "AWS Certified Solutions Architect – Professional",
    "skills.cert.2": "AWS Certified Solutions Architect – Associate",
    "skills.cert.3": "AWS Knowledge: Migration Foundations",
    "skills.cert.4": "Microsoft Certified: Azure Fundamentals",
    "skills.cert.5": "Scaleway Foundations",

    // Experience
    "exp.title": "Experience",
    "exp.1.date": "Jun 2025 – Present",
    "exp.1.role": "Tech Lead Solutions Architect",
    "exp.1.company": "Noveo Group",
    "exp.1.a1": "Led Solution Architect team (15+ architects), conducted architecture reviews and technical interviews",
    "exp.1.a2": "Architected and delivered Agentic AI solutions using AWS Bedrock AgentCore, SageMaker, and serverless services",
    "exp.1.a3": "Reduced AWS compute costs by 30% through ARM64 and multi-architecture EKS migration",
    "exp.1.a4": "Designed disaster recovery strategies and cross-region resilience solutions",
    "exp.1.a5": "Led Azure-to-AWS migration initiatives and supported SOC2 compliance programs",

    "exp.2.date": "Mar 2025 – Aug 2025",
    "exp.2.role": "Solutions Architect",
    "exp.2.company": "Noveo Group",
    "exp.2.a1": "Designed scalable, secure, and cost-efficient AWS cloud-native architectures",
    "exp.2.a2": "Implemented CI/CD pipelines, observability platforms, and Infrastructure as Code practices",
    "exp.2.a3": "Integrated AI/ML services into high-availability production environments",

    "exp.3.date": "Feb 2022 – Mar 2025",
    "exp.3.role": "DevOps System Engineer",
    "exp.3.company": "EPAM Systems",
    "exp.3.a1": "Worked on enterprise SaaS platforms supporting 5000+ developers",
    "exp.3.a2": "Built and optimized AWS infrastructure using ECS, Fargate, Lambda, and API Gateway",
    "exp.3.a3": "Implemented Terraform, AWS CDK, Helm, and GitLab/GitHub CI pipelines",
    "exp.3.a4": "Improved deployment reliability, observability, and scalability across distributed systems",

    "exp.4.date": "Mar 2021 – Feb 2022",
    "exp.4.role": "DevOps Engineer",
    "exp.4.company": "NAUMEN",
    "exp.4.a1": "Supported low-latency SaaS infrastructure on AWS",
    "exp.4.a2": "Implemented Kubernetes-based deployments and CI/CD automation",
    "exp.4.a3": "Worked with Prometheus, Grafana, Postgres, Redis, and monitoring tooling",

    "exp.5.date": "Nov 2020 – Mar 2021",
    "exp.5.role": "System Engineer",
    "exp.5.company": "TurboRender",
    "exp.5.a1": "Designed scalable client-server architectures with 1000+ instances",
    "exp.5.a2": "Implemented automation, monitoring, and infrastructure optimization workflows",
    "exp.5.a3": "Worked across AWS, Azure, and Yandex Cloud environments",

    // Projects
    "projects.title": "Projects",
    "projects.error": "Unable to load projects. Please try again later.",

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
    "hero.title": "Lead AWS Solutions Architect",
    "hero.tagline": "Специалист по GenAI и облачной миграции",
    "hero.cta": "Связаться",

    // About
    "about.title": "Обо мне",
    "about.text": "Lead AWS Solutions Architect с более чем 10-летним опытом создания облачных и AI-систем для международных B2B и SaaS компаний. Специализация: миграция в AWS, платформы Kubernetes, DevOps-трансформация, наблюдаемость и продакшн-решения GenAI / Agentic AI на базе AWS Bedrock и serverless-архитектур.",

    // Skills
    "skills.title": "Навыки и сертификации",
    "skills.cat.cloud": "Облачная архитектура",
    "skills.cat.ai": "AI и GenAI",
    "skills.cat.devops": "DevOps и IaC",
    "skills.cat.observability": "Наблюдаемость",
    "skills.cloud.1": "Облачная архитектура AWS и миграция",
    "skills.cloud.2": "Kubernetes, EKS, ECS, Serverless",
    "skills.cloud.3": "Оптимизация затрат и высокая доступность",
    "skills.ai.1": "Generative AI и Agentic AI системы",
    "skills.ai.2": "AWS Bedrock, Agentcore, RAG, MCP Tools",
    "skills.ai.3": "Корпоративные SaaS-платформы",
    "skills.devops.1": "Infrastructure as Code (Terraform, CDK, Helm, Ansible)",
    "skills.devops.2": "CI/CD и DevOps-автоматизация",
    "skills.observability.1": "Наблюдаемость, надёжность и аварийное восстановление",
    "skills.observability.2": "Техническое лидерство и ревью решений",

    // Certifications
    "skills.certs.title": "Сертификации",
    "skills.cert.1": "AWS Certified Solutions Architect – Professional",
    "skills.cert.2": "AWS Certified Solutions Architect – Associate",
    "skills.cert.3": "AWS Knowledge: Migration Foundations",
    "skills.cert.4": "Microsoft Certified: Azure Fundamentals",
    "skills.cert.5": "Scaleway Foundations",

    // Experience
    "exp.title": "Опыт работы",
    "exp.1.date": "Июнь 2025 – настоящее время",
    "exp.1.role": "Tech Lead Solutions Architect",
    "exp.1.company": "Noveo Group",
    "exp.1.a1": "Руководство командой Solution Architect (15+ архитекторов), проведение архитектурных ревью и технических интервью",
    "exp.1.a2": "Проектирование и внедрение Agentic AI решений на базе AWS Bedrock AgentCore, SageMaker и serverless-сервисов",
    "exp.1.a3": "Снижение затрат на вычисления AWS на 30% за счёт миграции на ARM64 и мультиархитектурный EKS",
    "exp.1.a4": "Проектирование стратегий аварийного восстановления и кросс-региональной отказоустойчивости",
    "exp.1.a5": "Руководство миграцией Azure-to-AWS и поддержка программ соответствия SOC2",

    "exp.2.date": "Март 2025 – Август 2025",
    "exp.2.role": "Solutions Architect",
    "exp.2.company": "Noveo Group",
    "exp.2.a1": "Проектирование масштабируемых, безопасных и экономичных облачных архитектур AWS",
    "exp.2.a2": "Внедрение CI/CD пайплайнов, платформ наблюдаемости и практик Infrastructure as Code",
    "exp.2.a3": "Интеграция AI/ML сервисов в высокодоступные продакшн-среды",

    "exp.3.date": "Февраль 2022 – Март 2025",
    "exp.3.role": "DevOps System Engineer",
    "exp.3.company": "EPAM Systems",
    "exp.3.a1": "Работа над корпоративными SaaS-платформами с поддержкой 5000+ разработчиков",
    "exp.3.a2": "Построение и оптимизация инфраструктуры AWS с использованием ECS, Fargate, Lambda и API Gateway",
    "exp.3.a3": "Внедрение Terraform, AWS CDK, Helm и CI пайплайнов GitLab/GitHub",
    "exp.3.a4": "Повышение надёжности деплоя, наблюдаемости и масштабируемости распределённых систем",

    "exp.4.date": "Март 2021 – Февраль 2022",
    "exp.4.role": "DevOps Engineer",
    "exp.4.company": "NAUMEN",
    "exp.4.a1": "Поддержка низколатентной SaaS-инфраструктуры на AWS",
    "exp.4.a2": "Внедрение деплоев на базе Kubernetes и автоматизация CI/CD",
    "exp.4.a3": "Работа с Prometheus, Grafana, Postgres, Redis и инструментами мониторинга",

    "exp.5.date": "Ноябрь 2020 – Март 2021",
    "exp.5.role": "System Engineer",
    "exp.5.company": "TurboRender",
    "exp.5.a1": "Проектирование масштабируемых клиент-серверных архитектур на 1000+ инстансов",
    "exp.5.a2": "Внедрение автоматизации, мониторинга и оптимизации инфраструктуры",
    "exp.5.a3": "Работа в средах AWS, Azure и Yandex Cloud",

    // Projects
    "projects.title": "Проекты",
    "projects.error": "Не удалось загрузить проекты. Попробуйте позже.",

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
    });
  }
});
