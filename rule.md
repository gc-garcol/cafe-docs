# Cafe Docs: Contribution Rules

These rules apply to every doc added to this repository, by people and by AI agents.

## 1. Tooling

Use these skills when creating or editing a doc:

- `anatomy`: isometric, interactive SVG figures that explain an idea as a physical object.
- `diagram-design`: branded diagrams and charts.
- `math`: required for any doc that contains math. Render every formula (equations, fractions, sums, integrals, limits, matrices, Greek letters, complexity notation such as O(n log n)) with this skill (LaTeX via KaTeX). Do not use plain text or hand-built HTML sub/sup for formulas.

## 2. Language

All content is written in English. This covers page text, code comments, and the registry in `index.js`.

## 3. Content pages

Each doc is a single self-contained HTML file at `content/datastructure-algorithm/<name>/<name>.html` (math docs live in `content/math/<name>/<name>.html`, at the same depth). AI docs sit one level deeper, under a topic folder: `content/AI/machine-learning/<name>/<name>.html` and `content/AI/deep-learning/<name>/<name>.html`. Engineering docs do the same: `content/engineering/<topic>/<name>/<name>.html`, for example `content/engineering/caching/caching-strategies/caching-strategies.html`.

- **Navigation:** every page must start with a "Back to home" link that points to `../../../index.html` (use `../../../../index.html` for docs under `content/AI/` and `content/engineering/`), placed at the top of `<main>`, before the header. Right after it, add a "Back to <category>" link (class `back back-cat`) that points to the same `index.html` with `#cat=<category>` (URL-encoded, for example `#cat=Data%20structures`), using the doc's `category` from `DOCS`.
- **Main tags:** put a `<nav class="doc-tags" aria-label="Main tags">` at the end of `<header>`, with the doc's first 4 `tags` from `DOCS`. Each tag links to the home page with `index.html#tag=<tag>` (same relative path as "Back to home"), so a click opens the home filtered to that tag.
- **Styling:** reuse the shared design tokens and fonts from the existing pages (Instrument Serif, Geist, Geist Mono).
- **Accessibility:** give every SVG a `<title>` and `<desc>`, keep controls keyboard reachable with a visible focus state, and respect `prefers-reduced-motion`.

## 4. Registry

The category, index, and search data live in `index.js`, not in the HTML.

- Register every new doc by adding an entry to `DOCS` in `index.js`.
- Required fields: `title`, `path`, `category`, `topic`, `level`, `order`, `tags`, `summary`.
- `order` is a number for the reading order inside a category (lower comes first). Put prerequisites before what builds on them, for example Limits, then Derivatives, then Integrals. Cards, the contents list and the mind map all follow it, and topics are ordered by their first doc. When you insert a doc in the middle, shift the `order` of the docs after it.
- **Contents ordering in each group:** a group is a `category` (for example Data structures, Algorithms, Mathematics, or an AI category).
  - Numbering is per group. Start at `1` in every group and do not share or continue numbers across groups.
  - Within a group, `order` values are unique and contiguous (1, 2, 3, ...) with no gaps or duplicates.
  - The contents list shows each group's docs sorted by `order`, lowest first. Docs of the same topic stay next to each other, and a topic's position is set by its first doc.
  - When you add, move, or remove a doc, renumber the affected group so it stays contiguous and in reading order (prerequisites first).
- Optional field: `related`, a list of other doc titles.
- **Several categories:** a doc can belong to more than one category. `category`, `topic` and `order` give its home category, which the page's "Back to <category>" link uses. Add the others with the optional `also` field, one entry per extra category: `also: [{ category: 'Mathematics', topic: 'Probability', order: 16 }]`. Each entry has its own topic and its own `order` in that category, and counts toward that group's contiguous numbering. List a doc in every category it really belongs to, for example a Quant doc that is mainly math also goes under Mathematics.
- Categories, tags, the mind map, and the contents list are derived from `DOCS`. Do not edit them by hand.
- Do not list docs in `readme.md`. It has no `## Docs` section, so there is nothing to update there when adding a doc.

## 5. Commits

- After finishing a change to a doc or to the registry, commit it directly to the `main` branch without waiting to be asked.
- Stage only the files you changed. Do not include unrelated or untracked work.
- Write a short, imperative commit message in English, such as `Add Octree doc`.
- Pushing is a separate step: do not push unless asked.

## 6. Checklist before merging

- [ ] The page opens correctly from the file system.
- [ ] The "Back to home" and "Back to <category>" links work.
- [ ] The doc is registered in `DOCS` and appears in search, the mind map, and contents.
