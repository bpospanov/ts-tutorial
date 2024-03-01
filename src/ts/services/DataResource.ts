export class DataResource<T> {
    constructor(private endpoint: string) {}

    async loadAll(): Promise<T[]> {
        const res = await fetch(this.endpoint)

        return res.json()
    }

    async loadOne (id: number) {
        const res = await fetch(`${this.endpoint}`)
    }

    async delete(id: number) {}

    async save(data: T) {}
}