export default {
    props: ['searchBookResult'],
    template: `
    <ul class="book-search-list">
        <li v-for="book in searchBookResult">
            {{book.volumeInfo.title}}
            <button @click="addBook(book)">+</button>
        </li>
    </ul>
    `,
    
    created() {
        console.log('created')
        console.log(this.searchBookResult)
    },

    methods: {
        addBook(book) {
            this.$emit('addBook', book)
        }
    },

}