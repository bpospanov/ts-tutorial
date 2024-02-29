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

const pizza = new Pizza('mario special', 15)
pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)