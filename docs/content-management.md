# What's FIRE? how content is managed (#12.18)

Recommendation, for Jonathan's decision.

**Choice: files in the repo (MDX with front matter).**

## Why
- The site already works this way: `content/posts/<category>/*.mdx`, read with `gray-matter` and `next-mdx-remote`. Nothing to migrate or build.
- Two articles a week is a pace one repo handles easily, and Claude writes straight into pull requests that Jonathan reviews and merges. Merging is the approval step, and git keeps the full history.
- No extra monthly cost, no extra login, no second system to keep in sync or back up.
- Fastest pages: content is built at deploy time.

## Why not Sanity or Supabase
- Sanity adds a CMS, a schema, tokens and preview wiring for a workflow that has no non-technical editor.
- Supabase for articles would put content outside version control and need a table, grants and backups. Supabase stays for forms (contact, newsletter) only.

## Revisit when
More than one person edits articles, or there are hundreds of pages that need bulk editing or scheduling from a UI.

## Front matter every article carries
title, description, date, updated, category, slug, author, and the target query (not shown on the page).
