# Ezeh Start Docs

The documentation site for [Ezeh Start](../ezehstart), a Laravel 13 + Livewire 4 starter
kit. It's a static site built with Vite, Tailwind CSS v4 and Alpine.js, with no framework
and no Markdown pipeline. Each page is a hand-written HTML fragment.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # writes dist/
npm run preview    # serves dist/ on http://localhost:4173
```

`dist/` is plain static files, so any static host will serve it. Routing is by hash
(`#/installation`, `#/trademark/the-marks`), so no server rewrite rules are needed.

## How it's put together

| Path | What it is |
| --- | --- |
| `index.html` | The shell: top bar, sidebar, article, "on this page", search dialog |
| `src/nav.js` | The sidebar, in reading order. It also sets the order of the previous/next links |
| `src/pages/{slug}.html` | One file per page. The slug in `nav.js` must match the file name |
| `src/main.js` | Hash router, search, heading anchors, copy buttons, theme toggle |
| `src/styles.css` | Colour tokens for light and dark themes, and the `.doc` article typography |

### Adding a page

1. Create `src/pages/my-page.html`. Start with an `<h1>`, then an optional
   `<p class="lead">`, then `<h2>` sections. Each `<h2>` is listed under "On this page"
   automatically.
2. Add `{ slug: 'my-page', title: 'My page' }` to the right group in `src/nav.js`.

Search indexes every page's text automatically, so there's nothing else to register.

### Writing conventions

- Write for a developer adopting the kit, not for someone maintaining it.
- Get facts from the kit's code, `README.md`, `CLAUDE.md` and `CHANGELOG.md`. Where the
  docs and the code disagree, the code is right, so fix the docs.
- Put code identifiers in `<code>`. Blocks of code go in `<pre><code>…</code></pre>`, and
  `<span class="c">` inside a block marks a comment.
- Use the article components: `.callout` (add `.warn` for a caution), `.cards`/`.card`,
  and `.dos` with `.yes`/`.no` columns.

## Legal

The **License**, **Trademark policy** and **Disclaimer** pages under *Legal* are the
public legal terms for the kit. The trademark policy is adapted from the
[Cachet trademark policy](https://cachethq.io/trademark), which is itself derived from
Ubuntu's, under CC BY-SA. Keep the attribution section at the bottom of
`src/pages/trademark.html` if you edit it.

## Changes

See [CHANGELOG.md](CHANGELOG.md).
