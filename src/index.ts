// generics 101

function logAndReturnValue<T>(val: T) {
    console.log(val)
    return val
}

const resultOne = logAndReturnValue<string>('mario')
const resultTwo = logAndReturnValue<number>(25)

function getRandomArrayValue<T>(values: T[]): T {
    const i = Math.floor(Math.random() * values.length)

    return values[i]
}

interface User {
    name: string
    score: number
}

const users: User[] = [
    { name: "mario", score: 60},
    { name: "luigi", score: 620},
    { name: "bowser", score: 630},
    { name: "nana", score: 610},
]

console.log(getRandomArrayValue<User>(users))
console.log(getRandomArrayValue<User>(users))