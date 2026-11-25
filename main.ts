// Two Robots in an Elevator — make.fun bounty entry.
//
// One line of awkward small talk that one robot says to another while they
// ride an elevator together. This program writes that single line to
// /output/entry.txt, where the bounty judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have ridden with you seventeen times and still introduce myself every morning. My memory is perfect. My courage is still in beta.";

// The gate only accepts 1–200 characters: refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`Entry line is ${LINE.length} characters; the gate needs 1–200.`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
