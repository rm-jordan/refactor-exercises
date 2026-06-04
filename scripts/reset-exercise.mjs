#!/usr/bin/env node
import { cpSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const raw = process.argv[2];
if (!raw) {
  console.error("Usage: npm run reset -- <exercise-folder>");
  console.error("       npm run reset:js -- <exercise-folder>");
  console.error("       npm run reset:react -- <exercise-folder>");
  console.error("Example: npm run reset -- 04-conditional-explosion");
  console.error("         npm run reset:js -- 05-magic-numbers");
  console.error("         npm run reset:react -- 01-messy-user-card");
  process.exit(1);
}

const js = process.env.RESET_JS === "1" || raw.startsWith("js/");
const react = process.env.RESET_REACT === "1" || raw.startsWith("react/");
const id = raw.replace(/^js\//, "").replace(/^react\//, "");

const root = join(import.meta.dirname, "..");
const base = react ? "exercises-react" : js ? "exercises-js" : "exercises";
const refBase = react ? "reference-react" : js ? "reference-js" : "reference";
const refDir = join(root, refBase, id);
const exDir = join(root, base, id);

if (!existsSync(refDir)) {
  console.error(`No reference folder: ${refBase}/${id}`);
  process.exit(1);
}
if (!existsSync(exDir)) {
  console.error(`No exercise folder: ${base}/${id}`);
  process.exit(1);
}

let copied = 0;
for (const name of readdirSync(refDir)) {
  if (!name.endsWith(".ts") && !name.endsWith(".js") && !name.endsWith(".tsx")) {
    continue;
  }
  if (name.includes(".test.")) continue;
  cpSync(join(refDir, name), join(exDir, name), { force: true });
  copied++;
}

if (copied === 0) {
  console.error(`No source files to copy in ${refBase}/${id}`);
  process.exit(1);
}

console.log(`Reset ${base}/${id} from ${refBase}/ (${copied} files). Tests untouched.`);
console.log("Run: npm test");
