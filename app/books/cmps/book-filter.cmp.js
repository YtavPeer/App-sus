export default {
    template: `
    <section class="book-filter">
        <form @submit.prevent="setFilter">
        <label  for="name"> Search a book: </label>    
        <input type="text" name="name" placeholder="Search...." v-model="filterBy.byName">
        <label for="from"> From</label>
        <input type="number" name="from"  v-model.number="filterBy.from">
        <label for="to"> To</label>
        <input type="number" name="to" v-model.number="filterBy.to">
        <button>Filter</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                from: 0,
                to: Infinity
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}
