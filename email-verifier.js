const request = require('request')  
const fs = require('fs') 

const options = { 
  method: 'POST', 
  url: 'https://sendpalm.com/api/check_email', 

  headers: { 
    'content-type': 'application/json', 
    'authorization': '6100013956d77b69cf6e9739' // your AUTH_TOKEN
  }, 
  body: { 
    toEmail: 'service@sendpalm.com' //fromEmail is optional parameter,toEmail is a required parameter
  },
  json: true 
} 

request(options, (error, response, body) => { 
  if (error) throw new Error(error)
  console.log(body) 
})       

