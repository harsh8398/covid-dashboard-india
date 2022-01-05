import {
  readJSON,
  writeJSON,
  removeFile,
} from "https://deno.land/x/flat@0.0.8/mod.ts";
import { format } from "https://deno.land/std@0.69.0/datetime/mod.ts";

const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace("_latest", "");

const contents = await readJSON(inputFilename);

const parsedContents = contents.map((d) => ({
  cases: d["new_active"],
  deaths: d["new_death"],
  date: format(new Date(), "MM/dd/yyyy"),
  state: d["state_name"].replaceAll("*", ""),
  sno: d["sno"],
}));

// await removeFile(inputFilename);

const existingContents = await readJSON(outputFilename);
await writeJSON(outputFilename, existingContents + parsedContents);
