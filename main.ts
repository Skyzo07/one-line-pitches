// One-line pitch entry for make.fun "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).
// Writes the winning sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning pitch: tiny-commitment ask (C10). Chosen by the independent
// CrowLLM judge panel (unanimous: minimax-m3.1-flash, ernie-5.5-flash-preview,
// grok-4.7-fast) over the internal top pick. See candidates.md.
const PITCH =
  "Just try one sentence: tell make.fun's AI agent your app idea in plain words and it'll build your first version — no code, no cost, and you can watch it happen.";

// Sealed gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space — and the brief requires exactly one sentence.
if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}
if (/\n|\r/.test(PITCH)) {
  throw new Error("pitch must be a single line");
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only white space");
}
// One sentence: no sentence-ending punctuation followed by a new sentence
// start (a question + imperative would read as two sentences). The period
// inside "make.fun" is not a terminator: it is followed by a lowercase letter.
if (/[.?!]\s+[A-Z]/.test(PITCH)) {
  throw new Error("pitch must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote /output/entry.txt (${PITCH.length} chars)`);
