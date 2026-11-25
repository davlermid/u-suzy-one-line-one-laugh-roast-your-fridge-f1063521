import { mkdirSync, writeFileSync } from "node:fs";

// Winner: mystery-smell roast — specific detail (mystery smell),
// twist payoff in the last three words ("legally a tenant"),
// one clean line, 84 characters.
const entry =
  "The mystery smell in my fridge outlived three roommates and is now legally a tenant.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
