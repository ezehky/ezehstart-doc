# Changelog

All notable changes to the Ezeh Start documentation site. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.5.0] - 2026-11-27

Brings the docs up to kit 2.7.0.

### Added

- **Search engines and analytics**, a new page: the app-built robots.txt and sitemap,
  `NoIndexMiddleware`, schema.org structured data, the blog RSS feed, Google Analytics
  and the cookie banner's two shapes, its categories, the `site_consent` cookie and
  what withdrawing consent does.
- **Image and video libraries**: a **File storage** section on Cloudflare R2 — the
  switch, the `R2_*` keys, landing locally then promoting, `images.disk`, and the
  batched sync.
- **Configuration**: the `R2_*` keys, and the Email settings and File storage screens.
- **Releases and upgrading**: 2.7.0 in the history, with its upgrade steps — the two
  renamed routes and gate keys, the `images.disk` index, `public/robots.txt`.
- **Going to production**: check robots.txt and the sitemap, set up R2, name Google
  Analytics in the policies.
- **Blog**: posts in the sitemap, structured data and feed.

### Changed

- **Email and newsletter**: Delivery is now a tab of **Email settings**, beside
  Sender. The cookie notice section points at the new page.
- **Disclaimer**, **The admin workspace** and **Introduction** describe the cookie
  banner, the new screens and the new areas.

## [2.4.0] - 2026-11-25

Brings the docs up to kit 2.6.0.

### Added

- **Configuration**: a **Brand colour** section covering the presets, how
  `BrandColorService` derives and prints the shades, `kBrandColor()`, and the
  `config.brand-colors` gate. The screens table gains Brand colour, and the defaults table
  gains the translate menu (off) and WebP conversion (on).
- **Languages**: a **Translate this page** section. It explains how the menu differs from
  the language switcher, where its languages come from, and the Google script and cookie
  it brings.
- **Image and video libraries**: cropping in place, WebP conversion with the Outlook
  warning, and `Image::previewUrl()`.
- **Authentication**: email addresses are stored in lower case and looked up through
  `User::normalizeEmail()`.
- **Releases and upgrading**: 2.6.0 in the history, with its upgrade steps, including
  the snippets that find case collisions and lower-case stored addresses.
- **Going to production**: pick the brand colour.

### Changed

- **Image and video libraries**: a member's library holds only their own uploads, and
  per-item visibility now decides only what a signed-out visitor sees.
- **House style**: the `brand-*` rule says never to hard-code the hex.
- **Introduction**: the media row mentions cropping and WebP.

## [2.3.0] - 2026-11-08

Brings the docs up to kit 2.5.0.

### Added

- **Payments and subscriptions**: a **Split payments** section covering subaccounts on
  Paystack, Flutterwave and Monnify, the Finance › Subaccounts screen, splitting a checkout
  with `subaccount:`, what `checkout()` refuses, and `checkoutOptionsFor()`. There's a
  split-payments column in the vendor table, and `SupportsSubaccounts` under "Adding a
  vendor".
- **Releases and upgrading**: 2.5.0 in the history, with its upgrade steps. These include
  the snippet that moves stored gate keys to `finance.*`.
- **Configuration**: `APP_REPOSITORY_URL` and `APP_DOCUMENTATION_URL`.
- A GitHub link in the docs header and footer.

### Changed

- **The admin workspace**: "Money" is now **Finance**, with all four screens and their
  `finance.*` gates.
- **Payments and subscriptions**: refunds start from Finance › Transactions, and "Going
  live" grants the `finance.*` gates.
- **Introduction**: the payments row mentions split payments.

## [2.2.0] - 2026-11-02

Brings the docs up to kit 2.4.0. It also records the kit 2.2.1 and 2.3.0 updates, which
went into the pages on 2026-10-30 without an entry here.

### Added

- **Email**: a **Delivery** section for the new Email delivery screen. It lists the four
  providers and the `.env` keys each needs, explains the fallback to the log and the test
  send, and warns that the screen overrides `MAIL_MAILER`.
- **Payments and subscriptions**: Bachs as the eighth vendor and its production webhook
  secret, a **Cards from abroad** section on international fees and the home country,
  resuming a cancelled subscription (and why PayPal can't), `SubscriptionResumed` in the
  event list, and `resumeSubscription()` under "Adding a vendor".
- **Legal pages and consent**: **Telling members**, the optional email sent when a policy
  is published.
- **Releases and upgrading**: 2.4.0 in the history, with its upgrade steps.
- Kit 2.2.1 and 2.3.0 coverage, added on 2026-10-30: both versions in the release history
  with their upgrade steps, processing fees, folder import in the image library, public
  pages on controllers, rich-text policies and FAQs, and the `brand-*` palette.

### Changed

- **Configuration**: the Email delivery screen and the Resend and Brevo keys.
- **Installation** and **Commands**: `db:seed` also seeds states and regions.
- **Introduction**: the feature table mentions email delivery, eight vendors, international
  fees, resuming, and policy emails.
- **Going to production**: pick a mail provider and send a test, instead of "a real mail
  driver".

## [2.1.0] - 2026-10-13

Brings the docs up to kit 2.2.0. They had stopped at kit 2.0.0, which was still listed as
unreleased.

### Added

- **Payments and subscriptions** page: the seven vendors, how a payment is settled,
  taking a payment for something of your own, refunds, subscription plans, prices,
  features and trials, gating a paid feature, the commands, going live, and adding a
  vendor.
- **Account lifecycle**: the unverified-account sweep and the "we missed you" reminder.
- **Authentication**: password reset doesn't reveal whether an address is registered.
- **Configuration**: the contact locations screen, and the lifecycle switches in the
  defaults table.
- **Releases and upgrading**: 2.0.0, 2.1.0 and 2.2.0 in the history, with upgrade steps
  for each. 2.2.0's steps include the `transaction_gateways` columns an existing install
  has to add by hand.

### Changed

- **Scheduler and queue** and **Commands** list the five new account and payment
  commands. The queue section no longer says the kit has no `app/Jobs`.
- **The house style** lists sixteen `app/` folders. `Events`, `Listeners` and `Jobs`
  are no longer under "Deliberately not used", and the page says when each is the right
  tool.
- **Introduction**, **The admin workspace**, **Ledger and currencies**, **Going to
  production** and **Disclaimer** now mention payments.

## [2.0.0] - 2026-09-24

A rewrite. The site was a single landing page. It's now a documentation site with one page
per topic.

### Added

- **A proper docs layout**: grouped sidebar, previous/next links, "on this page" with the
  current section highlighted, linkable heading anchors (`#/page/section`), and copy
  buttons on code blocks.
- **Search** across every page, opened with `/` or `Ctrl`/`⌘` + `K`, and navigable with
  the arrow keys.
- **Light and dark themes** that follow the system setting, with a toggle that remembers
  your choice. The accent is the kit's lime, replacing the previous cyan.
- **27 pages** in five groups:
  - *Getting started*: introduction, installation, configuration, scheduler and queue,
    releases and upgrading.
  - *Core concepts*: workspaces and user types, roles and gates, the house style.
  - *Features*: authentication, account lifecycle, impersonation, image and video
    libraries, blog, ledger and currencies, email and newsletter, legal pages and consent,
    languages, data tables, the admin workspace, activity log.
  - *Development*: commands, testing, extending the kit, going to production.
  - *Legal*: license, trademark policy, disclaimer.
- **Trademark policy** for the Ezeh Start name and logo, adapted from the Cachet trademark
  policy (CC BY-SA). It covers which uses need no permission, which need a licence, how
  forks should be named, and how to ask.
- **License** page with the MIT text, a plain-language summary, and how the code licence
  differs from the trademark.
- **Disclaimer** page: no warranty, not legal advice, demo policies are placeholders, and
  the ledger isn't a payment service.
- `src/nav.js` as the single source for the sidebar and page order.
- `CHANGELOG.md`.

### Changed

- Page content now lives in `src/pages/*.html`, loaded through `import.meta.glob`.
  There are no new dependencies.
- Feature descriptions are checked against the kit's code rather than written as
  marketing copy.

### Removed

- The landing-page hero, the "starter kit status" progress bars, and the FAQ accordion.
  Their content is covered by the introduction and the topic pages.

## [1.0.0]

- A single landing page covering an overview, features, stack, setup commands and an FAQ.
