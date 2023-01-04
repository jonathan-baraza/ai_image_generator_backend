const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateImage = async (req, res, next) => {
  const { description, imageSize } = req?.body;
  if (!description || !imageSize)
    return next(new Error("Image description and size are required!"));
  try {
    let size = "";
    switch (imageSize) {
      case "small":
        size = "256x256";
        break;
      case "medium":
        size = "512x512";
        break;
      case "large":
        size = "1024x1024";
        break;
      default:
        size = "512x512";
        break;
    }

    const response = await openai.createImage({
      prompt: description,
      n: 1,
      size: size,
    });

    res.status(200).json({ success: "true", data: response.data.data[0].url });
  } catch (error) {
    console.log("error");
    console.log(error);
    next(new Error(error.message));
  }
};

module.exports = { generateImage };
