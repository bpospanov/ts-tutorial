// union types

let someId: number | string

someId = 1
someId = '2'

let email: string | null = null
email = `mario@netninja.dev`
email = null

type Id = number | string

let anotherId: Id
anotherId = '123dasdasd'
anotherId = 5



// union type pitfall
function swapIdType(id: Id): Id {
    parseInt(id)
    return id
}

swapIdType("5")