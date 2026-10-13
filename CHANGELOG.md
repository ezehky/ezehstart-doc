# Changelog

All notable changes to the Ezeh Start documentation site. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
