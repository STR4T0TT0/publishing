# STR4T0TT0 Publishing Platform

An editorial publishing platform for strategic intelligence on AI, cybersecurity, and crypto.

## Purpose

STR4T0TT0 explores how digital systems become strategic risk: where power concentrates, risk reprices, and decision-makers lose or regain optionality.

## Stack

- Astro framework
- MDX
- Cloudflare Pages
- TypeScript
- Custom bilingual routing
- Git-based editorial workflow

## Current status

Implemented in this staging version :
- EN/FR routing
- Category pages
- Article pages
- MDX content
- SEO metadata
- Open Graph images
- Cloudflare Pages deployment
- Cloudflare Access staging protection

## Content model

Articles use:

- metadata in `src/data/articles.ts`
- body content in `src/content/articles/*.mdx`
- media assets in `public/images/articles/[category]/[article-slug]/`

## Image convention

```text
public/images/articles/[category]/[article-slug]/
[category]-[image-topic]-[lang]-[image-type].webp
```

## License

This repository uses a mixed licensing model:

- Source code is released under the MIT License.
- Editorial content, articles, visual assets, logos, and STR4T0TT0 brand assets are not licensed under MIT.
- STR4T0TT0 content and brand assets are © STR4T0TT0. All rights reserved unless explicitly stated otherwise.
- Public references, excerpts, and screenshots are allowed with clear attribution to STR4T0TT0 and a link to the original repository or website.

The STR4T0TT0 name, logo, and visual identity may not be reused as a trademark, brand identity, or endorsement signal without permission.