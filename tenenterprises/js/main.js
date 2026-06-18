// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Active nav link on scroll (index page)
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navAnchors.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// Load portfolio items from data file
async function loadPortfolio(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const res = await fetch('/data/portfolio.json');
    const items = await res.json();
    const display = limit ? items.slice(0, limit) : items;

    if (display.length === 0) {
      container.innerHTML = `
        <div class="portfolio-empty">
          <div class="mark">{10}</div>
          <p>Portfolio coming soon. Projects will appear here.</p>
        </div>`;
      return;
    }

    container.innerHTML = display.map(item => `
      <div class="portfolio-card">
        <div class="portfolio-img">
          ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy">` : '<span>No image yet</span>'}
        </div>
        <div class="portfolio-info">
          <div class="portfolio-tag">${item.type || 'Web Development'}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${item.url ? `<a href="${item.url}" target="_blank" class="blog-read-more" style="margin-top:16px;display:inline-block;">View Site →</a>` : ''}
        </div>
      </div>
    `).join('');
  } catch (e) {
    container.innerHTML = `<div class="portfolio-empty"><div class="mark">{10}</div><p>Portfolio coming soon.</p></div>`;
  }
}

// Load blog posts from data file
async function loadBlog(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const res = await fetch('/data/posts.json');
    const posts = await res.json();
    const display = limit ? posts.slice(0, limit) : posts;

    if (display.length === 0) {
      container.innerHTML = `<div class="portfolio-empty"><div class="mark">{10}</div><p>Blog posts coming soon.</p></div>`;
      return;
    }

    container.innerHTML = display.map(post => `
      <a href="/blog/${post.slug}.html" class="blog-card" style="text-decoration:none;color:inherit;">
        <div class="blog-card-img">
          ${post.image ? `<img src="${post.image}" alt="${post.title}" loading="lazy">` : ''}
        </div>
        <div class="blog-card-body">
          <div class="blog-date">${post.date}</div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <span class="blog-read-more">Read Post →</span>
        </div>
      </a>
    `).join('');
  } catch (e) {
    container.innerHTML = `<div class="portfolio-empty"><div class="mark">{10}</div><p>Blog posts coming soon.</p></div>`;
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  loadPortfolio('portfolio-grid', 3);
  loadPortfolio('portfolio-grid-full', null);
  loadBlog('blog-grid', 3);
  loadBlog('blog-grid-full', null);
});
