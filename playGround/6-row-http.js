const http = require('http')
const url ='http://api.weatherstack.com/current?access_key=c0de245cd37022e45ca5c501870d4080&query=40,-75' 
  
const request = http.request(url,(responce) =>{
  let data = ''
  responce.on('data',(chunk)=>{
    data = data + chunk.toString()
  })

  responce.on('end',()=>{
    const body = JSON.parse(data)
    console.log(body)
      
  })

  responce.on('error',()=>{
    console.log('An error',error)
  })
})

request.end()