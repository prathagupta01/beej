// backend/controllers/aiController.js
import { callHuggingFaceModel } from "../utils/huggingfaceClient.js";

export const detectDisease = async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    const model = "username/plant-disease-classifier";
    const result = await callHuggingFaceModel(model, imageBuffer, "image");
    res.json({ prediction: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
