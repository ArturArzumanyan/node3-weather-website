const request = require('request')

// const forecast = (latitude,longitude,callback)=>{
//   const url ='http://api.weatherstack.com/current?access_key=c0de245cd37022e45ca5c501870d4080&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)+'&units=f'
//  // console.log(url)
//   request({url: url,json: true},(error,response)=>{
//       if(error){
//           callback('Unabel to connect to weather service',undefined)
//       }else if(response.body.error){
//          callback('Unabel to find connection',undefined)
//       }else{
//         callback(undefined,'It is currently ' + response.body.current.temperature + " degrees out.There is a " + response.body.current.precip+"% chanse of rain" )
          
//       }
//   })
// }

const forecast = (latitude,longitude,callback)=>{
  const url ='http://api.weatherstack.com/current?access_key=c0de245cd37022e45ca5c501870d4080&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)+ '&units=f'
  // console.log(url)
  request({url,json: true},(error,{body})=>{
      if(error){
          callback('Unabel to connect to weather service',undefined)
      }else if(body.error){
         callback('Unabel to find connection',undefined)
      }else{
        console.log(body.current)
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + " degrees out. Its feels like " + body.current.feelslike +" degrees out."+
                          " There is a " + body.current.precip+"% chance of rain." + "The humidity is " + body.current.humidity + "%." )
          
      }
  })
}

module.exports = forecast