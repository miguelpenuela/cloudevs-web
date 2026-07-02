# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reload)
npm run build      # Production build → dist/
npm test           # Run unit tests with Vitest
npm run serve:ssr  # Run SSR server at http://localhost:4000 (requires prior build)
```

To run a single test file:
```bash
npx ng test --include="**/banner.spec.ts"
```

## Architecture

This is an **Angular 21 SSR corporate website** for Cloudevs. All components are standalone; there is no NgModule pattern.

### Routing strategy
The root route (`/`) loads `Landing`, which is a **composite page** — it directly imports and renders `Home`, `Services`, `About`, `Portfolio`, and `Contact` as child components (not via router). The same feature components are also available as individual lazy-loaded routes (`/about`, `/services`, etc.) for direct navigation.

The layout shell (`Website`) sits at the top of every route and provides `NavigationMenu` + `<router-outlet>`.

### Content is hardcoded
There is no backend, CMS, or HTTP layer. All page content (services list, project cards, values) lives as typed arrays inside the feature component `.ts` files. Adding content means editing those arrays directly.

### Shared component conventions
- `EnfasisTag` — small label/badge used as a section eyebrow (`tagIcon` + `tagLabel` inputs)
- `InfoCard` — icon + title + description card; used by both Services and About sections (`IInfoCard` model)
- `ProjectCard` — project showcase card (`IProjectInfoCard` model: topic, title, description, tags, path, externalLink, image)

### Navigation scroll behavior
Both `NavigationMenu` and `NavigationMenuMobile` use Angular's `ViewportScroller.scrollToAnchor()` to scroll to sections by ID. Section IDs are defined on elements inside each feature component's template.

### SSR
SSR is fully configured with `@angular/ssr` + Express 5. The CI pipeline only deploys the browser bundle to S3 (static hosting); `npm run serve:ssr` is for self-hosted deployments using the Express server at `src/server.ts`.

### Deploy
Merging to `master` triggers GitHub Actions → `npm run build` → `aws s3 sync ./dist/cloudevs-web/browser s3://cloudevs-website` (us-east-1). Secrets `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` must be set in the repo.