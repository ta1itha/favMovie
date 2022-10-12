const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ msg: "Authorization denied due to lack of token" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();

  }
  // if there is a token but it is not valis, catch it and throw error
  catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
