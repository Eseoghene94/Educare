import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

/**
 * Middleware to verify JWT token
 */
export const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.header("Authorization");

  // Check if the token exists and is in the correct format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access Denied: No token provided" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    return res.status(401).json({ message: "Authentication failed" });
  }
};

/**
 * Middleware to authorize based on user roles
 * @param {...string} roles - Roles allowed to access the route
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Unauthorized: Role missing" });
    }

    // Ensure role is uppercase to match Prisma Role ENUM
    const userRole = req.user.role.toUpperCase();

    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permissions" });
    }

    next(); // Proceed to the next middleware or route handler
  };
};

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import process from "node:process";

// dotenv.config();

// /**
//  * Middleware to verify JWT token
//  */
// export const verifyToken = (req, res, next) => {
//   // Get the token from the Authorization header
//   const authHeader = req.header("Authorization");

//   // Check if the token exists and is in the correct format
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res
//       .status(401)
//       .json({ message: "Access Denied: No token provided" });
//   }

//   // Extract the token from the header
//   const token = authHeader.split(" ")[1];

//   try {
//     // Verify the token
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified; // Attach the decoded user data to the request object
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token has expired" });
//     }
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     return res.status(401).json({ message: "Authentication failed" });
//   }
// };

// /**
//  * Middleware to authorize based on user roles
//  * @param {...string} roles - Roles allowed to access the route
//  */
// export const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!req.user || !req.user.role) {
//       return res.status(403).json({ message: "Unauthorized: Role missing" });
//     }

//     // Ensure role is uppercase to match Prisma Role ENUM
//     const userRole = req.user.role.toUpperCase();

//     if (!roles.includes(userRole)) {
//       return res
//         .status(403)
//         .json({ message: "Forbidden: Insufficient permissions" });
//     }

//     next(); // Proceed to the next middleware or route handler
//   };
// };
