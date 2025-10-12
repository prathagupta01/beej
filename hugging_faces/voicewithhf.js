const model = "openai/whisper-tiny";
const result = await callHuggingFaceModel(model, audioBuffer, "audio");


//Model: openai/whisper-tiny or facebook/wav2vec2-base-960h
//Endpoint type: audio upload