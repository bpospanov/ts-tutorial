// reusable interfaces

interface hasQuantity {
    quantity: number
}

const something: hasQuantity = { quantity: 50 }

function printQuantity(item: hasQuantity): void {
    console.log(`the qty of the item is ${item.quantity}`)
}

const fruit = {
    name: 'mango',
    quantity: 50
}
const vehicle = {
    type: 'car',
    quantity: 3
}
const person = {
    name: 'mario',
    age: 30
}

printQuantity(fruit)
printQuantity(vehicle) // object ahead of time AOT
printQuantity(person) // error

printQuantity({quantity: 29, title: 'something'}) // error when directly pas object