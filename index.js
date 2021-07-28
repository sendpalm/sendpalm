import request from 'request'

export default class EmailValidator{
    constructor(token=""){
        this.token = token
    }
    verify(address){
        const options = {
            method: 'POST',
            url: 'https://sendpalm.com/api/check_email',
            headers: {
                'content-type': 'application/json',
                'authorization': this.token
            },
            body: {
                toEmail: address
            },
            json: true
        }
        console.log("options: ",options)
        return new Promise(function(resolve,reject){
            request(options, (error, response, body) => {
                // if (error) throw new Error(error)
                // console.log(body)
                if(error){
                    reject(new Error(error))
                }
                resolve(body)
            })
        })
        
    }
} 