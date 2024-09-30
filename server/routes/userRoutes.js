import express from "express";
import {
  acceptFriendRequest,
  deleteMyProfile,
  getMyFriends,
  getMyNotifications,
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
  sendFriendRequest,
  updateMyProfile,
} from "../controllers/userControllers.js";
import {
  acceptRequestValidator,
  loginValidator,
  registerValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validators.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleAvatar } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new", singleAvatar, registerValidator(), validateHandler, newUser);
app.post("/login", loginValidator(), validateHandler, login);

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.delete("/me/delete/:id",deleteMyProfile);

app.put("/me/update/:id",updateMyProfile)

app.get("/logout", logout);

app.get("/search", searchUser);

app.put(
  "/sendrequest",
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);

app.put(
  "/acceptrequest",
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);

app.get("/notifications", getMyNotifications);

app.get("/friends", getMyFriends);

export default app;
