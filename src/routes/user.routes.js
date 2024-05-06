import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

userRouter.post("/login", loginUser);

// secured Route

userRouter.post("/logout", verifyJwt, logoutUser);

userRouter.post("/new-access-token", refreshAccessToken);

userRouter.post("/update-password", verifyJwt, changeCurrentPassword);

userRouter.get("/get-current-user", verifyJwt, getCurrentUser);
userRouter.post("/update-account", verifyJwt, updateAccountDetails);
userRouter.post("/update-avatar", upload.single, updateUserAvatar);
userRouter.post("/update-cover-image", upload.single, updateUserCoverImage);

export default userRouter;
