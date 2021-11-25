
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

console.log(process.argv);

const address = process.argv[2]
// if(!address){
//   console.log(('Please, enter the address'));
// }else{
//   geocode(address,(error,data)=>{
//     if(error){
//       return console.log(error)
//     }  
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//       if(error){
//         return console.log(error)
//       }      
//       console.log(data.location)
//       console.log(forecastData)
  
//     })
//   })
  
// }
if(!address){
  console.log(('Please, enter the address'));
}else{
  geocode(address,(error,{latitude,longitude,location} = {})=>{
    if(error){
      return console.log(error)
    }  
    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }      
      console.log(location)
      console.log(forecastData)
  
    })
  })
  
}




