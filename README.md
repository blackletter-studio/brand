# brand

Black Letter Studio brand assets.

- `tokens/` - color, typography, spacing tokens (CSS + TypeScript). Consumed by `site` and `fair-copy`.
- `fonts/` - self-hosted woff2 subsets for Fraunces + IBM Plex Sans + IBM Plex Mono (all SIL OFL 1.1).
- `wordmark/` - SVG wordmarks (currently a placeholder; final wordmark lands in M1).

### Wordmark files

- `wordmark/black-letter-wordmark.svg` — full horizontal wordmark for masthead, site headers, email signatures
- `wordmark/black-letter-mark.svg` — 128x128 square monogram ("BL" with serif B and italic oxblood L) for favicons, task-pane icons, app-icon source
- `wordmark/black-letter-wordmark-placeholder.svg` — M0 placeholder, kept for historical reference

All derived formats (PNG exports, favicon sizes, Apple touch icons) are generated at site build time from these two SVG sources — do not commit PNG exports here.

Private repo. Consumed as a git submodule by public sibling repos.
