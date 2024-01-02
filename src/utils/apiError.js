class ApiError extends Error {
    constructor(
        statusCode,//http status code assosiated with error
        message= "Something went wrong",
        errors = [],//an array to store additional errors
        stack = ""//stack trace assosiated with error
    ){
        super(message)//when we overwrite the constructor we super call & we are overwriting the message here
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
        //above "this." refers to the current instances
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}