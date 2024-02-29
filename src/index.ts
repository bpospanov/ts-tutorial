// tuples

let person: [string, number, boolean] = ['mario', 30, true]

// tuples examples

let hsla: [number, string, string, number]

hsla = [200, '100%', '50%', 1]

let xy: [number, number]

xy = [23.4, 45.6]

function useCoords(): [number, number] {
    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords()

// named tuples

let user: [name: string, age: number]

user = ["peach", 25]

console.log(user[0])