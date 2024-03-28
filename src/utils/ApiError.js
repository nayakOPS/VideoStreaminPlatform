class ApiError extends Error {
    constructor(
        statuscode,
        messag = "Something Went Wrong",
        errors  = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statuscode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { ApiError }