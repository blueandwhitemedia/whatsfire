# whatsfire: tool and service inventory, pricing and free limits

Prepared 2026-11-01 for #12.16. **Planning inventory, not an audit of live subscriptions or verified billing.** Existing subscriptions can be shared; costs below represent public entry prices, not incremental account charges.

**System requirements / known condition:** Content-driven ad/affiliate publisher. CRM and Stripe are optional until traffic; DNS must be made functional before launch. Vercel project builds, but board reports whatsf​ire.com SSL/DNS issue.

| Tool | Purpose | Public starting monthly price | Key free limits and caveats |
|---|---|---|---|
| GitHub | Repository & PRs | Free $0; paid teams optional | Private repos, bounded CI usage |
| Vercel | Next.js business hosting | Pro $20/month platform fee plus usage | Hobby $0 is personal/noncommercial; Pro includes usage credit |
| Cloudflare | DNS, security, domain | Free DNS $0; registrar annual renewal | Advanced protection or add-ons cost extra |
| Google Search Console | Search indexing and query data | Free $0 | Only verified domains; no full competitor analytics |
| Google Analytics 4 + Tag Manager | Consent-aware analytics and events | Standard Free $0 | May require consent manager and disclosures |
| Resend | Forms, transactional and subscriber email | Free $0, Pro $20/month | Free 3k messages/month, 100/day, 3 domains; Pro 50k/month |
| Supabase | Structured data if needed | Free $0, Pro from $25/month | Free 500MB database, 50k MAU, pauses if inactive; 2 active projects |
| Sanity | Optional structured content management | Free $0, Growth $15/seat/month | Free 20 users, 2 public datasets |
| Uptime monitoring | Alerts on downtime | Existing shared board monitor: incremental cost unknown | Check existing site monitor; avoid unnecessary duplication |
| Keyword Planner, Trends and GSC | Free keyword discovery | $0 service subscriptions | Planner US volume ranges dependent on Ads setup; Trends normalized |

## Project-specific vendors and blockers
Monetization: ads require traffic and publisher acceptance. Public ad networks do not charge normal software subscription; fill criteria before adding ad scripts. Start with repo-managed Markdown content until editorial needs justify Sanity.

## Budget framing
Starting recurring cost after Vercel Pro: ~$20/month if free quotas suffice; up to ~$65/month if Resend and Supabase both upgrade, plus usage/domain and ad tools.

Before approving an expense: inspect current team billing, quantify expected emails/visitor traffic/storage, check overlap with the shared agency stack, and get explicit authorization for subscriptions or database work. Domain renewal is annual and not included above. Google Ads media spend, Stripe transaction fees and any affiliate payouts are variable, not a software subscription. Do not store account keys here.

## Current publicly verified vendor rate pages
- https://vercel.com/pricing
- https://supabase.com/pricing
- https://resend.com/pricing
- https://www.sanity.io/pricing
- https://ads.google.com/home/tools/keyword-planner/
- https://search.google.com/search-console/about
