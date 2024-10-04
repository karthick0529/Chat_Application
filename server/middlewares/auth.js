import { DHEECHAT_TOKEN } from "../constants/config.js";
import { User } from "../models/user.js";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "./error.js";
import jwt from "jsonwebtoken";

// HTTP Request Authentication Middleware
const isAuthenticated = TryCatch((req, res, next) => {
  // Get the token from cookies
  const token = req.cookies[DHEECHAT_TOKEN];
  if (!token) {
    return next(new ErrorHandler("Please login to access this route", 401));
  }

  try {
    // Verify token and extract user data
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedData._id;

    next(); // Call next middleware
  } catch (err) {
    // Handle token verification error (e.g., expired or invalid token)
    return next(new ErrorHandler("Invalid or expired token, please login again", 401));
  }
});

// Socket Authentication Middleware
const socketAuthenticator = async (socket, next) => {
  try {
    // Get token from socket request cookies
    const authToken = socket.request.cookies[DHEECHAT_TOKEN];

    if (!authToken) {
      return next(new Error("Authentication error: Please login to access this route"));
    }

    // Verify token and decode
    const decodedData = jwt.verify(authToken, process.env.JWT_SECRET);

    // Find the user based on decoded token data
    const user = await User.findById(decodedData._id);

    if (!user) {
      return next(new Error("Authentication error: User not found, please login again"));
    }

    // Attach user data to socket object
    socket.user = user;
    return next();
  } catch (error) {
    console.log("Socket authentication error: ", error);
    return next(new Error("Authentication error: Please login to access this route"));
  }
};

export { isAuthenticated, socketAuthenticator };
