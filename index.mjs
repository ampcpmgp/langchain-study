import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import * as dotenv from 'dotenv'

dotenv.config()
start();

async function start () {
  const chat = new ChatOpenAI({ temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY });
  
  const response = await chat.call([
    new HumanChatMessage(
      "Translate this sentence from English to French. I love programming."
    ),
  ]);
  
  console.log(response);
}
