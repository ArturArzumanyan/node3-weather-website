const name = 'Artur'
const userAge = '27'

const user= {
  name,
  age: userAge,
  location: 'Yerevan'
}

console.log(user)


const transaction = (type, {label,stock} = {})=>{
  console.log(type,label,stock)
}

transaction('order',product   )