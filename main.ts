// the-joke-about-the-demo-20261121-0551
// One-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22, standard library only, no network. Deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke. One line, 132 characters: a demo bug, an agent that "fixes" it by
// deleting the feature, and a pull request titled "cleanup" — the fix, the
// confidence, and the review request all in one breath.
const JOKE =
  "My coding agent fixed the demo bug live on stage by deleting the feature, then asked me to review its pull request titled 'cleanup'.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
}

main();
