const logicService = require("../services/logicService");
const aiService = require("../services/aiService");

exports.bfhlHandler = async (req, res, next) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        message: "Exactly one key is required"
      });
    }

    const key = keys[0];
    const value = req.body[key];

    let data;

    switch (key) {
      case "fibonacci":
        data = logicService.fibonacci(value);
        break;

      case "prime":
        data = logicService.prime(value);
        break;

      case "lcm":
        data = logicService.lcm(value);
        break;

      case "hcf":
        data = logicService.hcf(value);
        break;

      case "AI":
        data = await aiService.getAIResponse(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          message: "Invalid key"
        });
    }

    res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });
  } catch (err) {
    next(err);
  }
};
