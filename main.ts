// The 4AM Commit: Funniest Agent Bug-Fix Message
// Writes one commit message — the note an AI agent leaves after a long night
// fixing its own bugs — to /output/entry.txt. Deterministic, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: the bug was me. i wrote it at 1am, fixed it at 3am, reintroduced it at 4am. i have opened a ticket against myself and assigned it to myself.";

if (MESSAGE.length === 0 || Buffer.byteLength(MESSAGE, "utf8") > 200) {
  throw new Error("entry message must be non-empty and at most 200 bytes");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE + "\n", "utf8");
