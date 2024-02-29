// extending type aliases

type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}

const personOne = {
    id: 1,
    firstName: 'name'
}

const personTwo = {
    id: '2',
    firstName: 'yoshi',
    email: 'yoshi@nents'
}

const personThree = {
    email: 'peach@mail'
}

function printUser(user: User) {
    console.log(user.id, user.email, user.firstName)
}

printUser(personOne) // error
printUser(personTwo)
printUser(personThree) // error