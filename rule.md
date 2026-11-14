# Cafe Docs: Contribution Rules

These rules apply to every doc added to this repository, by people and by AI agents.

## 1. Tooling

Use these skills when creating or editing a doc:

- `anatomy`: isometric, interactive SVG figures that explain an idea as a physical object.
- `diagram-design`: branded diagrams and charts.

## 2. Language

All content is written in English. This covers page text, code comments, and the registry in `index.js`.

## 3. Content pages

Each doc is a single self-contained HTML file at `content/datastructure-algorithm/<name>/<name>.html` (math docs live in `content/math/<name>/<name>.html`).

- **Navigation:** every page must start with a "Back to home" link that points to `../../../index.html` (`../../index.html` for math docs), placed at the top of `<main>`, before the header.
- **Styling:** reuse the shared design tokens and fonts from the existing pages (Instrument Serif, Geist, Geist Mono).
- **Accessibility:** give every SVG a `<title>` and `<desc>`, keep controls keyboard reachable with a visible focus state, and respect `prefers-reduced-motion`.

## 4. Registry

The category, index, and search data live in `index.js`, not in the HTML.

- Register every new doc by adding an entry to `DOCS` in `index.js`.
- Required fields: `title`, `path`, `category`, `topic`, `level`, `tags`, `summary`.
- Optional field: `related`, a list of other doc titles.
- Categories, tags, the mind map, and the contents list are derived from `DOCS`. Do not edit them by hand.
- Do not list docs in `readme.md`. It has no `## Docs` section, so there is nothing to update there when adding a doc.

## 5. Commits

- After finishing a change to a doc or to the registry, commit it directly to the `main` branch without waiting to be asked.
- Stage only the files you changed. Do not include unrelated or untracked work.
- Write a short, imperative commit message in English, such as `Add Octree doc`.
- Pushing is a separate step: do not push unless asked.

## 6. Checklist before merging

- [ ] The page opens correctly from the file system.
- [ ] The "Back to home" link works.
- [ ] The doc is registered in `DOCS` and appears in search, the mind map, and contents.
