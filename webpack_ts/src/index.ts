import Dog from './Dog'
import ShelterDog from './ShelterDog'
import { add, multiply, divide, subtract } from './utils'
console.log('From INDEX file')

const elton =new Dog('Elton', 'Golden Retriever', 3)
elton.bark() 

console.log(add(1, 2))
console.log(multiply(1, 2))
console.log(divide(1, 2))

const buffy = new ShelterDog('Buffy', 'Golden Retriever', 3, 'Bark Avenue')