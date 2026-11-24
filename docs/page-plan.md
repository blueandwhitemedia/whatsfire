# What's FIRE? page plan and URL structure (#12.7)

Draft for Jonathan's approval. Docs only; nothing here changes the live site.

## URL rules
- Lowercase, hyphens, no dates, no file extensions, no trailing slash.
- Articles live at `/blog/<slug>`; category hubs at `/blog/<category>` (the existing `[category]` route).
- Slug is the main query, trimmed: `what-is-lean-fire`, `fire-vs-traditional-retirement`.
- Never rename a published URL. If one must change, add a 301 in `next.config.ts` in the same pull request.

## Pages that exist today (keep as they are)
| URL | Purpose |
|---|---|
| `/` | Home: what FIRE means, paths into the four hubs |
| `/start-here` | Plain-language starting path for first-time readers |
| `/about` | Who runs the site and why to trust it |
| `/blog` and `/blog/<category>` | Article index and category hubs |
| `/fire-number-calculator` | The one tool |
| `/resources` | Books and tools (affiliate links only where a program approved the site) |
| `/disclaimer`, `/disclosure`, `/privacy` | Legal and trust |

## Pages to add
| URL | Purpose | Task |
|---|---|---|
| `/contact` | Contact form, saves to the database then emails (Resend) | #12.40 |
| `/terms` | Terms of use | #12.55 |
| `/glossary` | One-page A to Z of FIRE terms, each linking to its full article. Fits the glossary-first positioning and earns definition queries | new |
| `/newsletter/thanks`, `/contact/thanks` | Thank-you pages, one per form (they double as conversion pages) | #12.44 |
| `not-found` and `error` | 404 and error pages | #12.46 |

## Category hubs (the six clusters from the brief)
The blog route currently has two categories (`fire-basics`, `investing`). Map the six clusters to hubs like this, so the nav stays short:

| Hub URL | Clusters it holds |
|---|---|
| `/blog/fire-basics` | Definition, Pitfalls |
| `/blog/types-of-fire` | Types, Comparisons |
| `/blog/fire-math` | FIRE math |
| `/blog/real-life` | Real life, Lifestyle |
| `/blog/investing` | Investing basics (kept; Resources books list links here) |

Each hub gets a short intro (80 to 150 words) and a list of its articles, newest first.

## Navigation
Header: Start Here, Articles, Calculator, Glossary, About. Footer: Resources, Contact, Disclaimer, Affiliate Disclosure, Privacy, Terms.

## Rules that keep it clean
- Every article links to its hub, the calculator where it fits, and two sibling articles.
- The Financial Disclaimer link stays visible near the calculator and any money guidance.
- Links to fireinstitute.com: none by default (Jonathan, Nov 2). Revisit only when the build is being finalized.

## Open questions
1. Is a `/glossary` page wanted, or should definitions stay inside articles only?
2. Are five hubs right, or keep just the two that exist until there are more articles?
