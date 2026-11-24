// Dad Joke Showdown — make.fun entry (Node 22, standard library only).
// The program writes one dad joke of at most 200 characters to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader's
// container). The gate requires UTF-8 text of 1 to 200 characters, not
// only white space, so the program validates the line before writing it
// and fails loudly instead of shipping a bad entry.
//
// The joke is a clean one-line pun in a father's voice, tight, with the
// punchline at the end and a rhythm that reads naturally aloud. The
// "cutting it" turn does double work: the mower's job and the
// relationship's verdict.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "My lawnmower and I broke up — it just wasn't cutting it anymore.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, must be 1..200`);
  process.exit(1);
}
if (ENTRY.includes('\n') || ENTRY.trim().length === 0) {
  console.error('entry must be a single non-blank line');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, 'entry.txt')}`);
console.log(`entry: ${ENTRY}`);
