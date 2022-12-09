# codetest-lb

## Task Requirements

Fetch a public JSON and build a responsive and sortable table in Vue 3, using TailwindCSS, and host it on AWS (S3 is fine). Just a single page. Please share the URL and a link to GitHub for Source.

- [x] JSON: https://content.launchbrightly.com/lbdemo/baremetrics.json
- [x] Vue 3.2 (use Script Setup)
- [x] TailwindCSS (and we use TailwindUI as our default templates)
- [x] Columns: Name, Descriptions, Edition(s), timeOfScreenshot, And others you like.
- [x] Make Column headers clickable for ASC/DESC sort
- [ ] Make the Edition Column a filter on Editions (which works with Sorting)

# Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run serve
```

### Compiles and minifies for production

```
pnpm run build
```

### Run your unit tests

```
pnpm run test:unit
```

### Run your end-to-end tests

```
pnpm run test:e2e
```

### Lints and fixes files

```
pnpm run lint
```
