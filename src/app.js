const express =require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')



//Difine paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

 //setup handlerbar engine and views location
app.set('views',viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

//setup static directoryto server
app.use(express.static(publicDirectoryPath))



app.get('/about',(req,res)=>{
  res.render('about',{
    title: 'About Something',
    name: 'Artur Arzumanian'
  })
})



app.get('',(req,res)=>{
  res.render('index',{
    title: 'weather',
    name: 'Artur'
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    title: 'Help Page!!!',
    name: 'Artur',
    helpText: 'Doesnt exist hopeful text'
  })
})


// app.get('/weather',(req,res)=>{
//   console.log(req.query.address)
//   if(!req.query.address){
//     return res.send({
//       error: 'You must provide a search term'
//     })
//   }

//   res.send({
//     forecast: 'It is snowing',
//     location: 'Philadelphia',
//     address: req.query.address
//   })
// })


app.get('/weather',(req,res)=>{
 
  if(!req.query.address){
    return res.send({
      error: 'You must provide a search term'
    })
  }  
  geocode(req.query.address,(error,{latitude,longitude,location} = {})=>{
    if(error){
      return res.send({error})
    }    
    forecast(latitude,longitude,(error,forecastData)=>{      
      if(error){
        return res.send({error})
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })
 
  
})


app.get('/products',(req,res)=>{
  if(!req.query.search){
     return  res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search)
  res.send({
    products: []
  })
})


app.get('/help/*',(req,res)=>{
  res.render('404page',{
    title: '404',
    name: "Artur",
    errorMessage: 'Help article is not found'
  })
})

app.get('*',(req,res)=>{
  res.render('404page',{
    title: '404',
    name: "Artur",
    errorMessage: 'Page not found'
  })
})





app.listen(3000,()=>{
  console.log('Server is up on port 3000')
})