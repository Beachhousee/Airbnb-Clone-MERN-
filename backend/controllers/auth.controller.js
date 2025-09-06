import genToken from "../config/token.js";
import User from "../model/user.model";

export const sighUp =async(req,res)=>{
  try {
    let{name,email,password}= req.body;
    let existUser =await User.findOne({email});
    if(existUser){
      return res.status(400).json({message:"user already exist"})
    }
    let hashPassword = await bcrypt.hash(password,10);
    let user = await User.create({
      name,email,password:hashPassword
    })
    let token  = await genToken(user._id)
  } catch (error) {
    
  }
}