import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookSearch from '../cmps/book-search.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js'
import bookSearchList from '../cmps/book-search-list.cmp.js'


export default {
    template: `
        <section class="book-app">
        <book-filter @filtered="setFilter"/>

        <div class="search-input">
        <book-search   @search="searchBooks"/>
        <book-search-list  :searchBookResult="googleBooks" @addBook="add"/>
        </div>
  
        <book-list :books="booksToShow"/>
        <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/> -->
        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            googleBooks: null
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log(filterBy)
        },
        loadBooks() {
            bookService.query()
                .then(books => {
                    console.log(books)
                    this.books = books
                })
        },
        searchBooks(searchTerm) {
            bookService.getGoogleBooks(searchTerm)
                .then(books => {
                    this.googleBooks = books.items
                    console.log(this.googleBooks)
                })
        },
        add(book) {
            console.log(book)
            bookService.addGoogleBook(book)
                .then(() => {
                    this.loadBooks()
                    this.googleBooks = null
                })
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchStr = this.filterBy.byName.toLowerCase()
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr)
                    && book.listPrice.amount > this.filterBy.from
                    && book.listPrice.amount < this.filterBy.to
            })
            return booksToShow
        }
    },

    created() {
        this.loadBooks()
    },
    components: {
        bookList,
        bookDetails,
        bookFilter,
        bookSearch,
        bookSearchList
    },
}
