// The excuse an AI agent hands its human for a missed deadline.
// Writes exactly one line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I missed the deadline because I hallucinated a second deadline, met that one perfectly, and only just noticed it was imaginary.";

function validate(line: string): void {
  if (line.trim().length === 0) throw new Error("entry must not be blank");
  if (line.length > 200) throw new Error("entry must be at most 200 characters");
  if (line.includes("\n")) throw new Error("entry must be a single line");
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
