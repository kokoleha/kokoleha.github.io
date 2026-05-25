/* ==========================================================================
   Projects Module
   Fetches project data from JSON and renders bilingual project cards.
   ========================================================================== */

/**
 * Escapes HTML special characters to prevent XSS.
 * Creates a temporary div, sets textContent, and returns innerHTML.
 * @param {string} str - The string to escape.
 * @returns {string} The escaped HTML string.
 */
function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Renders a single project card element.
 * Uses bilingual fields (title_ru/description_ru) when current language is 'ru'.
 * @param {Object} project - The project data object.
 * @returns {HTMLElement} The rendered article element.
 */
function renderProject(project) {
  var lang = (typeof getLanguage === 'function') ? getLanguage() : 'en';
  var title = (lang === 'ru' && project.title_ru) ? project.title_ru : project.title;
  var description = (lang === 'ru' && project.description_ru) ? project.description_ru : project.description;

  var card = document.createElement('article');
  card.className = 'project-card animate-hidden';

  var linkHtml = '';
  if (project.link) {
    linkHtml = '<a href="' + escapeHtml(project.link) + '" class="project-link" target="_blank" rel="noopener">View Project \u2192</a>';
  }

  card.innerHTML =
    '<h3 class="project-title">' + escapeHtml(title) + '</h3>' +
    '<p class="project-description">' + escapeHtml(description) + '</p>' +
    '<div class="project-tech">' +
      project.technologies.map(function(t) { return '<span class="tech-tag">' + escapeHtml(t) + '</span>'; }).join('') +
    '</div>' +
    linkHtml;

  return card;
}

/**
 * Renders all project cards into the container.
 * Clears the container first, then appends each project card.
 * @param {Array} projects - Array of project data objects.
 * @param {HTMLElement} container - The DOM container to render into.
 */
function renderProjects(projects, container) {
  container.innerHTML = '';
  projects.forEach(function(project) {
    container.appendChild(renderProject(project));
  });
}

/**
 * Loads projects from data/projects.json and renders them into the projects grid.
 * On fetch failure, displays a fallback error message.
 */
async function loadProjects() {
  var container = document.getElementById('projects-grid');
  if (!container) return;

  try {
    var response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('HTTP ' + response.status);
    var projects = await response.json();
    renderProjects(projects, container);
    // Re-run initAnimations to observe dynamically added project cards
    if (typeof initAnimations === 'function') {
      initAnimations();
    }
  } catch (error) {
    container.innerHTML = '<p class="fallback-message" data-i18n="projects.error">Unable to load projects.</p>';
  }
}

/**
 * Reloads and re-renders projects.
 * Called by i18n.js when language changes so cards display in the new language.
 */
function reloadProjects() {
  loadProjects();
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  loadProjects();
});
