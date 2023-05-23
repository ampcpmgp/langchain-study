import { load } from "https://deno.land/std@0.188.0/dotenv/mod.ts";
import { OpenAI } from "https://esm.sh/langchain@0.0.78/llms/openai";
import { PromptTemplate, LLMChain } from "https://esm.sh/langchain@0.0.78";

const env = await load();
template();
// llm();

export async function template() {
  const model = new OpenAI({
    openAIApiKey: env["OPENAI_API_KEY"],
    temperature: 0.9,
  });

  const template = "{product}を販売する素敵な会社名は何ですか？";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["product"],
  });

  const chain = new LLMChain({ llm: model, prompt });
  const res = await chain.call({ product: "カラフルな靴下" });

  console.log(res);
}

export async function llm() {
  const model = new OpenAI({
    openAIApiKey: env["OPENAI_API_KEY"],
    temperature: 0.9,
  });

  const res = await model.call(
    "カラフルな靴下を販売する素敵な会社名は何ですか？"
  );

  console.log(res);
}
