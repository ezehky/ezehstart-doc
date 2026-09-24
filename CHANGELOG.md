# Changelog

All notable changes to the Ezeh Start documentation site. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
