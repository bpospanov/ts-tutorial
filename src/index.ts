// classes 101


type Base = 'classic' | 'thick' | 'thin' | 'garlic'
class Pizza {
    constructor(private title: string, private price: number) {}

    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }

    selectBase(b: Base): void {
        this.base = b
    }
}

const pizzaOne = new Pizza('mario special', 15)
const pizzaTwo = new Pizza('luigi special', 10)

function addMushroomsToPizza(pizzas: Pizza[]): void {
    for (const pizza of pizzas) {
        pizza.addTopping('mushrooms')
    }
}

addMushroomsToPizza([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo)