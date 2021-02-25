import reviewPreview from './review-preview.cmp.js'



export default {
    props: ['reviews'],
    template: `
        <ul class="review-list">
        <li v-for="review in reviews" :key="review.id" class="book-review-container" >
            <review-preview @click="addReview" :review="review"  />
            <button @click="deleteReview(review.id)">X</button>
        </li>
    </ul>
    `,
    
    created() {
        console.log("hereee", this.reviews)
    },

    methods: {
        deleteReview(reviewId) {
            this.$emit('delete-review', reviewId)
        },

        addReview() {
            this.$emit('add-review')
        }
    },
    components: {
        reviewPreview
    }
}