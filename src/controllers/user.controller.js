import { asyncHandler } from "../utils/asynchandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { usename, email, password } = req.body;
  return res.status(200).json({
    message: "ok",
  });
});
