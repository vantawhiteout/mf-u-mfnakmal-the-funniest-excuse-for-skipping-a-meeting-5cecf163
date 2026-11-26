import { mkdirSync, writeFileSync } from "node:fs";

// One line, one excuse, one laugh. The meeting never needed us.
const entry = "I'm skipping the sync: read the email it should've been, closed the ticket. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
