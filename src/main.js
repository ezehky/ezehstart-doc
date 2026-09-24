import Alpine from 'alpinejs';
import './styles.css';
import { nav } from './nav.js';

// Every page is an HTML fragment in src/pages, keyed by its file name.
const files = import.meta.glob('./pages/*.html', { query: '?raw', import: 'default', eager: true });
const html = Object.fromEntries(
  Object.entries(files).map(([path, body]) => [path.split('/').pop().replace('.html', ''), body]),
);

// A flat, ordered list drives previous/next and search.
const pages = nav.flatMap((group) =>
  group.pages.map((page) => {
    const body = html[page.slug] ?? `<h1>${page.title}</h1><p>This page has not been written yet.</p>`;
    const text = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return { ...page, group: group.title, html: body, text: text.toLowerCase(), plain: text };
  }),
);

const slugify = (value) =>
  value.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

window.Alpine = Alpine;

Alpine.data('docsApp', () => ({
  nav,
  navOpen: false,
  searchOpen: false,
  query: '',
  resultIndex: 0,
  dark: document.documentElement.classList.contains('dark'),
  current: pages[0],
  toc: [],
  activeHeading: null,

  get index() {
    return pages.findIndex((p) => p.slug === this.current.slug);
  },
  get prev() {
    return pages[this.index - 1] ?? null;
  },
  get next() {
    return pages[this.index + 1] ?? null;
  },

  get results() {
    const q = this.query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);

    return pages
      .map((p) => {
        const title = p.title.toLowerCase();
        if (!terms.every((t) => title.includes(t) || p.text.includes(t))) return null;

        // Title hits rank above body hits; more body hits rank higher.
        const score = terms.reduce(
          (sum, t) => sum + (title.includes(t) ? 100 : 0) + p.text.split(t).length - 1,
          0,
        );
        const at = p.text.indexOf(terms[0]);
        const snippet = at < 0 ? p.plain.slice(0, 110) : '…' + p.plain.slice(Math.max(0, at - 40), at + 80) + '…';
        return { ...p, score, snippet };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  },

  boot() {
    window.addEventListener('hashchange', () => this.route());
    window.addEventListener('scroll', () => this.trackHeading(), { passive: true });
    this.route();
  },

  // Routes look like #/slug or #/slug/heading-id.
  route() {
    const [slug, anchor] = location.hash.replace(/^#\/?/, '').split('/');
    const page = pages.find((p) => p.slug === (slug || pages[0].slug));

    if (!page) {
      location.replace('#/');
      return;
    }

    const changed = page.slug !== this.current.slug || !this.toc.length;
    this.current = page;
    document.title = `${page.title} · Ezeh Start Docs`;

    this.$nextTick(() => {
      if (changed) this.decorate();
      const target = anchor && document.getElementById(anchor);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      } else if (changed) {
        window.scrollTo({ top: 0 });
      }
      this.trackHeading();
    });
  },

  // Adds heading ids, anchor links and copy buttons to the page just rendered.
  decorate() {
    const doc = this.$refs.doc;
    this.toc = [];

    doc.querySelectorAll('h2, h3').forEach((h) => {
      h.id ||= slugify(h.textContent);
      if (h.tagName === 'H2') this.toc.push({ id: h.id, text: h.textContent });

      const link = document.createElement('a');
      link.href = `#/${this.current.slug}/${h.id}`;
      link.className = 'heading-anchor';
      link.setAttribute('aria-label', 'Link to this section');
      link.textContent = '#';
      h.appendChild(link);
    });

    doc.querySelectorAll('pre').forEach((pre) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-btn';
      button.textContent = 'Copy';
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(pre.querySelector('code')?.innerText ?? pre.innerText);
          button.textContent = 'Copied';
        } catch (e) {
          button.textContent = 'Press Ctrl+C';
        }
        setTimeout(() => (button.textContent = 'Copy'), 1600);
      });
      pre.appendChild(button);
    });
  },

  trackHeading() {
    let active = this.toc[0]?.id ?? null;
    for (const h of this.toc) {
      const el = document.getElementById(h.id);
      if (el && el.getBoundingClientRect().top < 120) active = h.id;
    }
    this.activeHeading = active;
  },

  openSearch() {
    this.searchOpen = true;
    this.resultIndex = 0;
    this.$nextTick(() => this.$refs.search.focus());
  },

  moveResult(step) {
    const count = this.results.length;
    if (count) this.resultIndex = (this.resultIndex + step + count) % count;
  },

  pickResult() {
    const hit = this.results[this.resultIndex];
    if (!hit) return;
    location.hash = `#/${hit.slug}`;
    this.searchOpen = false;
  },

  shortcut(event) {
    const typing = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);
    if ((event.key === '/' && !typing) || (event.key === 'k' && (event.metaKey || event.ctrlKey))) {
      event.preventDefault();
      this.openSearch();
    }
  },

  toggleTheme() {
    this.dark = !this.dark;
    document.documentElement.classList.toggle('dark', this.dark);
    try {
      localStorage.setItem('ezs-theme', this.dark ? 'dark' : 'light');
    } catch (e) {}
  },
}));

Alpine.start();
