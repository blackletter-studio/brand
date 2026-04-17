# Fonts - Black Letter

## Licensing

- **Fraunces** - SIL OFL 1.1 (free for embedding + redistribution, including commercial). Source: https://fonts.google.com/specimen/Fraunces
- **IBM Plex Sans + IBM Plex Mono** - SIL OFL 1.1. Source: https://github.com/IBM/plex

Both are safe to self-host and redistribute. No commercial license purchase needed.

## Files

Self-hosted `.woff2` subsets live under `fonts/woff2/`. Subsetting target: Latin + common punctuation + a few typographic extras (smart quotes, en/em dashes). Add new files via PR with two reviewers.

## Adding a font

1. Download source `.ttf` from the upstream.
2. Run `glyphhanger --subset=*.ttf --formats=woff2 --LATIN` (or equivalent subsetting tool) to produce `.woff2` files.
3. Commit the subsetted files only.
4. Update `tokens.css` / `tokens.ts` font-family strings if needed.
5. Open PR.
