class ApiResponse {
    constructor(statusCode,data,message="success"){
        this.statusCode = statusCode
        this.data = data
        this.success = message
        this.success = statusCode < 400 
    }
}