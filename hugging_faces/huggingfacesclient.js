// backend/utils/huggingfaceClient.js
import fetch from "node-fetch";

export const callHuggingFaceModel = async (model, input, type = "text") => {
  const HF_API_KEY = process.env.HF_API_KEY;
  const headers = {
    "Authorization": `Bearer ${HF_API_KEY}`,
  };

  let response;
  if (type === "image") {
    response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers,
      body: input,
    });
  } else {
    response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: input }),
    });
  }

  const result = await response.json();
  return result;
};
