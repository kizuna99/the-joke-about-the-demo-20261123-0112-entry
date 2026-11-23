// The Hundred-and-First Demo — make.fun entry for "The joke about the demo".
// Writes exactly one line (the joke plus a trailing newline) to the output file.
// The joke: rehearsals are flawless; the crash waits for an audience.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The agent ran the demo flawlessly a hundred times; it crashed on the hundred-and-first, the first one with witnesses.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
