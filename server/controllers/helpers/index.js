const { sign, verify } = require("jsonwebtoken");

async function createToken(user_id) {
  try {
    const token = await sign({ user_id: user_id }, process.env.JWT_SECRET);

    return token;
  } catch (error) {
    console.log(error.message);
  }
}

async function authenticate(req, res, next) {
  const token = req.cookies.token;

  console.log(token);

  next();
}

module.exports = { createToken, authenticate };
