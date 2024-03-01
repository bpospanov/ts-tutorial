// Generic Interface

interface Collection<T> {
    data: T[]
    name: string
}

const collectionOne: Collection<string> = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters'
}

const collectionTwo: Collection<number> = {
    data: [10,2,3,4],
    name: 'winning lottery numbers',
}

function randomCollectionItem<T>(c: Collection<T>): T {
    const idx = Math.floor(Math.random() * c.data.length)

    return c.data[idx]
}

console.log(randomCollectionItem<string>(collectionOne))
console.log(randomCollectionItem(collectionTwo))