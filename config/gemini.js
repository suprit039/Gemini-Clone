import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY
);

// Use Gemini 2.5 Model
async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });



  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
