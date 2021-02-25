export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <img :src="book.thumbnail">
        <div class="preview-content">
        <h1>{{capitalizedTitle}}</h1>
        <p>{{priceToShow}}</p>
        </div>
        <router-link class="detail-preview" :to="'/book/'+book.id">Details</router-link>
    </section>
    `,

    computed: {
        priceToShow() {
            if (this.book.listPrice.currencyCode === 'USD') return `$${this.book.listPrice.amount}`
            else if (this.book.listPrice.currencyCode === 'EUR') return `€${this.book.listPrice.amount}`
            else return `${this.book.listPrice.amount}₪`
        },
        capitalizedTitle() {
            const title = this.book.title
            return title.charAt(0).toUpperCase() + title.slice(1)
        }
    }

}

