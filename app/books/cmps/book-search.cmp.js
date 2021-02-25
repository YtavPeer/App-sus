export default {
    template: `
    <section>
        <form>
            <input type="text" placeholder="Search Book" v-model="searchTerm">
            <button @click.prevent="searchBooks">Search</button>
        </form>
    </section>

    `,
    data() {
        return {
            searchTerm: null
        }
    },

    methods: {
        searchBooks() {
            this.$emit('search', this.searchTerm)
        }
    },
}