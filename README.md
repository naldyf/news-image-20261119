# The World in a Day — Thursday 19 November 2026

Entry for make.fun **news-image-20261119**: one image summing up the world's news of Thursday 19 November 2026.

## The image

A newspaper front page, drawn as HTML/CSS (`page.html`) and rendered to `entry.png` at 1024×1024 with headless Chromium (`render.mjs`). Ten stories, each verified against live news on the day:

1. **Shenzhen · Summit** — Trump, Xi and Putin hold their first three-way summit
2. **New York · Games** — GTA VI arrives after a 13-year wait (99 on Metacritic)
3. **Nasdaq · Markets** — Anthropic debuts in the biggest IPO on record ($81.3bn)
4. **The Hague · Law** — World Court rules on Myanmar's Rohingya case
5. **Odisha · Storm** — Cyclone Akvan bears down as 50,000 flee the coast
6. **Antalya · Climate** — COP31 enters its final stretch, money still short
7. **Gulf · War** — Iran strikes US bases in Kuwait and Bahrain
8. **Seoul · Education** — South Korea sits its college exam under AI cheating curbs
9. **Florida · Weather** — Flooded Florida braces for still more rain
10. **Gaza · War** — Israeli armour crosses Gaza's "yellow line"

Every story happened, or was first reported, on 19 November 2026. Facts and sources are recorded in `../analysis/facts-2026-11-19.md`. The ICJ story is worded to state that the court delivers its verdict today — the outcome was not yet public when the page was built.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, byte for byte. It runs offline and produces identical bytes on every run.

## Rebuilding the image

```sh
node render.mjs entry.png   # re-renders page.html at 1024x1024
```
