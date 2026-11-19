// Entry for make.fun news-image-20261119: "Sum up 19 November's world news in one image".
//
// The image (entry.png) is a newspaper front page built from the day's verified
// news — researched and drawn in this repository (see page.html, rendered with
// render.mjs). This program's only job is to place that exact image at
// /output/entry.png. It reads the file and writes it back byte for byte, so
// two runs produce identical output, and it never touches the network.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
