class errorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode
    }
}



export const errorMiddleWare = (error,req,res,next)=>{
    error.message = error.message || "internal server error";
    error.statuscode = error.statuscode || 400
    return res.
    status(error.statuscode).
    json({
        success:false,
        error:error.message
    })
}
export default errorHandler