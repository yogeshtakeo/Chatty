import jwt from "jsonwebtoken";

export const generateJWT = (data): String => {
  console.log(data);
  const token = jwt.sign(data, "191919", { expiresIn: "1d" });
  return token;
};
