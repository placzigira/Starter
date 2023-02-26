import Jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (data) => {
  return Jwt.sign(data, process.env.JWT_KEY, { expiresIn: "1d" });
};
export const decodeToken= (token)=>{
    return Jwt.verify(token,process.env.JWT_KEY)
}