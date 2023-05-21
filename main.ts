import { load } from "https://deno.land/std@0.188.0/dotenv/mod.ts";
import { OpenAI } from "https://esm.sh/langchain@0.0.78/llms/openai";

const env = await load();
llm();

async function llm() {
  const model = new OpenAI({
    openAIApiKey: env["OPENAI_API_KEY"],
    temperature: 0.9,
  });

  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );

  console.log(res);
}
