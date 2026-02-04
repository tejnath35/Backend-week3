import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  if (!req.cookies) {
    return res.status(401).json({ message: "Cookies not found" });
  }

  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    let decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

