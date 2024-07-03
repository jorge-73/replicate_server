import Replicate from "replicate";

const replicate = new Replicate({
  token: process.env.REPLICATE_API_TOKEN,
});

const replicateController = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  try {
    const input = {
      cfg: 2.28,
      steps: 28,
      prompt: prompt,
      aspect_ratio: "16:9",
      output_format: "webp",
      output_quality: 90,
      negative_prompt: "",
      prompt_strength: 0.85,
    };

    const output = await replicate.run("stability-ai/stable-diffusion-3", {
      input,
    });
    // console.log(output);

    res.json(output);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default replicateController;
