# What's FIRE: niche rules check (finance education)

Prepared 2026-11-19 for #12.5. This is a working checklist from public rules as I know them, not legal advice. Items marked CONFIRM need a primary-source read (or a lawyer) before launch. I could not browse the live policy pages from this run.

## What the site is
Educational finance content (FIRE: investing, accounts, saving, early retirement) monetized with AdSense and affiliate links. It gives no personalized advice, holds no client money and sells no regulated product. That keeps it in the publisher lane, not the adviser lane.

## 1. Not-advice and regulatory posture
- Keep every page general and educational. Do not tell a reader what to buy, in what amount, for their situation. Calculators should show assumptions and say "illustration, not a prediction".
- Do not use words like "guaranteed", "safe withdrawal rate" stated as a promise, or "you will" about returns. Say "historically" and cite the source and period.
- Avoid anything that looks like individualized investment advice (a free-text "what should I buy" tool, model portfolios sold as recommendations). If the site ever offers those, the SEC publisher's exclusion and state adviser rules need a lawyer. CONFIRM.
- Current /disclaimer already covers: not advice, past performance, consult a professional, accuracy. Gaps: no line about calculator outputs, no "we may hold or earn from products mentioned" cross-reference, dated "March 2026".

## 2. Affiliate disclosure (FTC)
- FTC Endorsement Guides (16 CFR Part 255): disclose the material connection clearly and close to the link, before the reader clicks. A footer link alone is not enough.
- Every page with affiliate links needs a short disclosure near the top of the article or next to the link block. components/shared/Disclosure.tsx exists: check it renders on every post that has links, and in AffiliateCTA.
- Links get rel="sponsored" (already the stated practice on /disclosure).
- Do not publish "best of" rankings where the order follows payout. Say how products are picked.
- Amazon Associates: the required sentence is "As an Amazon Associate I earn from qualifying purchases." It must appear on the site, and Amazon bars showing price text that is not live and using shortened or cloaked links. /disclosure does not have it yet. Add it when the Associates account is approved. CONFIRM current wording in the Operating Agreement.
- Each affiliate program (ProjectionLab, Rocket Money, Empower, others in docs/research/affiliate-programs-2026-11.md) has its own content rules. Read each signed agreement before activating links. Finance programs often limit rate or APY claims, require their approved disclaimers, and ban certain placement.

## 3. Google AdSense and Google Search
- AdSense: finance is allowed. Restricted areas to stay away from: misleading financial claims, "get rich quick" content, and payday-loan style products. Do not place ads so they look like site navigation or buttons. CONFIRM against the live AdSense program policies.
- Do not click or ask for clicks on your own ads. Do not run ads on pages with thin or copied content (the usual cause of AdSense "low value content" rejections).
- Finance sits in Google's "Your Money or Your Life" quality area. That means visible author, sources and dates matter: byline with real credentials or a clearly stated experience basis, "last reviewed" dates, links to primary sources (IRS, SSA, Vanguard, Trinity study papers) and an editorial policy page.
- Ad-supported pages need the privacy policy to name Google as a third-party vendor and explain ad cookies and opt-out (Google's "How Google uses information from sites that use our services" page).

## 4. Privacy and consent
- Required before ads and analytics go on: privacy policy that lists analytics, ad cookies, email list (if any) and affiliate tracking. /privacy exists; I have not checked it for the ad-cookie language. CONFIRM.
- California (CCPA/CPRA): "Do Not Sell or Share" link and Global Privacy Control support if ad personalization is on. A consent banner for EU/UK/EEA visitors if ads serve there (Google requires a certified consent platform for personalized ads in EEA/UK). Knifesets is being given the same setup (#23.68), so reuse it.
- Email signups: opt-in only, unsubscribe link, physical address in the footer (CAN-SPAM).

## 5. Topic-by-topic risk
| Topic | Rule of thumb |
|---|---|
| Investing and returns | Cite sources and periods. No predictions. Show risk. |
| Retirement accounts and taxes | State the tax year and link IRS.gov. Limits change every year, so date every figure and review each January. |
| Credit cards and loans | Only if a program approves it. Card issuers require rate and fee disclosures near the offer. Do not show APR, bonus or rate claims you did not read from the issuer today. |
| Insurance | Licensed-producer rules apply if the site refers or quotes. Education only for now. |
| Health, VA and SSDI | Out of scope for this site. Do not publish benefits advice. |
| Crypto and options | Avoid recommending. Mention only as risk. |
| Testimonials and income claims | No "I retired at 35 with $X" claims without a source. If personal stories are used, label them as individual results. |

## 6. What this means for the build
1. Update /disclaimer: add calculator-output line and a current date.
2. Update /disclosure: add the Amazon Associates sentence once approved; link to a short "how we choose products" policy.
3. Check /privacy for the ad-cookie and Google vendor language.
4. Make sure the inline disclosure shows on every affiliate post.
5. Add an editorial policy page and author bylines (also a ranking signal).
6. Add a consent banner and GPC handling before ads go live.

Nothing here has been changed on the site. Legal wording on the live pages is Jonathan's call.
