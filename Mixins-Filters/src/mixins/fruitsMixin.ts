export const mixinFruits={

    data() {
        return {
            fruits: ['Apple', 'Banana', 'Strawberry', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(): string[] {
            const data = this.fruits;
            return data.filter((element: string) => {
                return element.match(this.filterText)
            })
        }
    }
}