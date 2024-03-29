import { Router } from "express";

import authController from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/index.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import jwtAuth from "../../../middlewares/jwtAuth.middleware.js";
import resetPasswordValidator from "../validators/resetPassword.validator.js";
import fileUpload from "../../../../common/middlewares/fileUpload.middleware.js";
import canResetPassword from "../middlewares/canResetPassword.js";

const authRouter = Router();

// /api/v1/auth

authRouter.get("/register", authController.getRegisterForm);

authRouter.post(
  "/register",
  registerValidator,
  isLoggedIn,
  authController.postRegister
);

authRouter.get(
  "/verify-user/:userId",
  authController.getUserVerificationStatus
);

authRouter.post(
  "/verify-user/:userId",
  authController.postUserVerificationStatus
);

authRouter.get("/login", authController.getLoginForm);
authRouter.post("/login", isLoggedIn, loginValidator, authController.postLogin);

// note: important do not use get method to logout
authRouter.post("/logout", authController.postLogoutUser);

authRouter.patch(
  "/update",
  jwtAuth,
  fileUpload.single("profileImg"),
  authController.patchUpdateUser
);

authRouter.post("/change-password", jwtAuth, authController.postChangePassword);

authRouter.post(
  "/change-email-request",
  jwtAuth,
  authController.postChangeEmailRequest
);

authRouter.post("/change-email", authController.postChangeEmail);

authRouter.post(
  "/request-reset-password",
  canResetPassword,
  authController.postRequestResetPassword
);

authRouter.get(
  "/token-validate",
  canResetPassword,
  authController.getResetPasswordTokenValidity
);

authRouter.patch(
  "/reset-password",
  canResetPassword,
  resetPasswordValidator,
  authController.postResetPassword
);

authRouter.delete("/delete-user", jwtAuth, authController.deleteUser);

export default authRouter;
