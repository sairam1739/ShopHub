import JWT from "jsonwebtoken";

//protected route token base

export const requireSignIn = async(req,res,next)=>{

 try{
    const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
    );
    req.user = decode;
    next();
 }catch(error){
    console.log(error);
    res.status(401).send({
        success:false,
        error,
        message:"error in Admin Middlewares",
    })
 }

};