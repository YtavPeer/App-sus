import BookDescription from '../cmps/long-text.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'
import reviewList from '../cmps/review-list.cmp.js';
import { bookService } from "../services/book-service.js";
import { eventBus } from '../services/event-bus-service.js'



export default {
    template: `
    <section v-if="book" class="book-details">

        <h1>{{capitalizedTitle}}</h1>
        <h3>{{book.subtitle}}</h3>
        <img :src="book.thumbnail">

        <div class="autors">
            Author:
            <span v-for=" author in book.authors"  :key="author">{{author}}</span>
        </div>

        <div class="count-years-container">
        <span>{{publishedDateToDisplay}}, </span>
        <span>{{pageCountToDisplay}}</span>
        </div>

        <p>Language: {{capitalizeLanguage}}</p>
        <span class="price" :class="priceColor" >{{priceToShow}}</span>
        <div v-if="book.listPrice.isOnSale">ON SALE</div>
        
        <div class="categories">
            <span v-for=" category in book.categories" :key="category">{{category}} </span>
        </div>

        <h2>Description: </h2>    
        <book-description :description="book.description"/>

        <div class="links">
        <router-link  class="prev-link" :to="prevBookLink">Previous Book</router-link>
        <router-link :to="nextBookLink">Next Book</router-link>
        </div>



        <review-add @add-review="save"/>
        <review-list :reviews="book.review" @delete-review="deleteReview"/>
        
    </section>
    `,
    data() {
        return {
            book: null,
            nextBookId: null,
            prevBookId: null
        }
    },
    methods: {
        deleteReview(id) {
            bookService.removeReview(id, this.book.id)
                .then(() => {
                    const reviewMsg = {
                        txt: 'Review Removed',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', reviewMsg)
                    this.loadBook()
                })
        },

        loadBook() {
            const id = this.$route.params.bookId
            console.log('loading book')
            bookService.getById(id)
                .then(book => {
                    this.book = book
                    bookService.getNextPrevBookId(id).then(ids => {
                        this.nextBookId = ids.next
                        this.prevBookId = ids.prev
                    })
                })
        },


        save(review) {
            const { fullName, rating, date, userReview } = review
            if (!fullName || !rating || !date || !userReview) return
            bookService.addReview(this.book.id, review)
                .then(() => {
                    const reviewMsg = {
                        txt: 'Review Saved',
                        type: 'success',
                        link: `/book/${this.book.id}`
                    }
                    eventBus.$emit('show-msg', reviewMsg)
                    this.loadBook()
                })
        }
    },

    created() {
        this.loadBook()

    },
    computed: {
        pageCountToDisplay() {
            const pageCount = this.book.pageCount
            if (pageCount < 100) return 'Light Reading'
            else if (pageCount > 500) return 'Long Reading'
            return 'Decent Reading'
        },
        publishedDateToDisplay() {
            const publishedDate = this.book.publishedDate
            const currYear = new Date().getFullYear()
            if (currYear - publishedDate <= 1) return 'New!'
            else if (currYear - publishedDate > 10) return 'Vetran Book'
            return this.book.publishedDate
        },
        priceColor() {
            return this.book.listPrice.amount > 150 ? 'red' : 'green'
        },
        priceToShow() {
            if (this.book.listPrice.currencyCode === 'USD') return `$${this.book.listPrice.amount}`
            else if (this.book.listPrice.currencyCode === 'EUR') return `€${this.book.listPrice.amount}`
            return `${this.book.listPrice.amount}₪`
        },
        capitalizedTitle() {
            const title = this.book.title
            return title.charAt(0).toUpperCase() + title.slice(1)
        },
        capitalizeLanguage() {
            return this.book.language.toUpperCase()
        },
        nextBookLink() {
            return '/book/' + this.nextBookId
        },
        prevBookLink() {
            return '/book/' + this.prevBookId
        }
    },

    watch: {
        '$route.params.bookId'(id) {
            console.log('Changed to', id);
            this.loadBook();
        }
    },
    components: {
        BookDescription,
        reviewAdd,
        reviewList
    }
}
