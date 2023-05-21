import { load } from "https://deno.land/std@0.188.0/dotenv/mod.ts";

const env = await load();
start();

async function start() {
  console.log(
    "🚀🐡 ~ file: main.ts:5 ~ start ~ API_KEY:",
    env["OPENAI_API_KEY"]
  );
}
