---
name: math
description: Render clean math formulas (LaTeX via KaTeX) in Cafe Docs pages. Use whenever a doc needs equations, fractions, sums, integrals, limits, matrices, Greek letters, or complexity notation such as O(n log n), instead of plain text or hand-built HTML sub/sup.
---

# Math rendering with KaTeX

Cafe Docs pages are single self-contained HTML files. Use KaTeX to typeset formulas written in LaTeX. It is fast, needs no build step, and renders synchronously.

Follow `rule.md` at the repo root as well: English content, "Back to home" link first in `<main>`, accessible SVGs, `prefers-reduced-motion`.

## 1. Add KaTeX to a page

Put this in `<head>`, after the Google Fonts links. The version is pinned on purpose.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
```

Put this once at the end of `<body>`, before or after the page script:

```html
<script>
document.addEventListener('DOMContentLoaded', function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    ignoredTags: ['script', 'style', 'textarea', 'pre', 'code'],
    throwOnError: false
  });
});
</script>
```

Because both scripts use `defer`, they run before `DOMContentLoaded` fires, so the listener above is safe.

## 2. Style

Add to the page `<style>`. It keeps the existing `.formula` card look and lets wide equations scroll instead of overflowing.

```css
.formula{background:#fff;border:1px solid var(--rule-solid);border-radius:8px;padding:16px 20px;margin:16px 0;text-align:center;overflow-x:auto}
.formula .katex{font-size:1.25em}
.katex{color:var(--ink)}
p .katex{font-size:1.05em}
```

Do not set `font-family` on `.formula` for KaTeX content. KaTeX ships its own math fonts.

## 3. Write formulas

Display (own line), inside a `.formula` block:

```html
<div class="formula">$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$</div>
```

Inline, inside a paragraph:

```html
<p>The slope at <span>$x = a$</span> is <span>$f'(a)$</span>.</p>
```

Plain `$...$` in running text is fine. Write a literal dollar sign as `\$`.

### Common snippets

| Need | LaTeX |
| --- | --- |
| Fraction | `\frac{a}{b}` |
| Power, subscript | `x^{n-1}`, `a_{ij}` |
| Root | `\sqrt{x}`, `\sqrt[3]{x}` |
| Sum | `\sum_{n=0}^{N-1} x_n` |
| Integral | `\int_a^b f(x)\,dx` |
| Limit | `\lim_{x \to a} f(x)` |
| Greek | `\alpha \beta \theta \pi \xi \omega` |
| Complexity | `O(n \log n)`, `\Theta(n^2)` |
| Complex exponential | `e^{-2\pi i k n / N}` |
| Piecewise | `\begin{cases} 1 & x \ge 0 \\ -1 & x < 0 \end{cases}` |
| Matrix | `\begin{bmatrix} a & b \\ c & d \end{bmatrix}` |
| Aligned steps | `\begin{aligned} a &= b \\ &= c \end{aligned}` |
| Text in math | `\text{average rate}` |

## 4. Use in JavaScript-built content

Auto-render only scans the DOM once. For text that a script inserts later (readouts, SVG labels built at runtime), render it directly:

```js
katex.render('\\int_0^x f(t)\\,dt', element, { throwOnError: false, displayMode: false });
// or
element.innerHTML = katex.renderToString('x^2', { throwOnError: false });
```

Remember to double the backslashes in JS strings.

Do not put KaTeX inside `<svg>` `<text>`. Use a `<foreignObject>` or place the formula in HTML next to the SVG. Keep the SVG `<title>` and `<desc>` as plain text that spells the formula in words.

## 5. Convert an existing page

1. Add the three tags from section 1 and the init script.
2. Replace hand-built formulas such as `lim<sub>h→0</sub>` and `x<sup>n</sup>` inside `.formula` with LaTeX.
3. In tables and prose, replace `<code>(x<sup>n</sup>)′ = n·x<sup>n−1</sup></code>` with `$(x^n)' = n x^{n-1}$`. Keep `<code>` for real code and variable names in code.
4. Check that nothing inside `<code>` or `<pre>` was meant to render, because those tags are ignored on purpose.

## 6. Accessibility and checks

- KaTeX emits MathML alongside the visual output, so screen readers can read formulas. Do not disable it (`output: 'html'` is not allowed).
- Keep a sentence of plain explanation near each important formula. Do not rely on the formula alone.
- `throwOnError: false` shows broken LaTeX in red instead of failing silently. Open the page and make sure no red text remains.
- Pages need network access for the CDN. Open the page once online to confirm formulas render before committing.

## 7. Done checklist

- [ ] KaTeX CSS and both scripts are included, version `0.16.11`.
- [ ] Init script runs once and ignores `code` and `pre`.
- [ ] Formulas are display (`$$`) in `.formula`, or inline (`$`) in text.
- [ ] No red error text on the page.
- [ ] `rule.md` checklist is satisfied (back link, registry entry, English text).
