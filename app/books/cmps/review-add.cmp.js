

export default {
    template: `
    <section>
    <form @submit.prevent="addReview" class="review-form">
        <input type="text" placeholder="Name" v-model="review.fullName"> 
        <select v-model="review.rating" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>   
    <input type="date" id="date" name="date" v-model="review.date">   
    <textarea id="review" name="review" v-model="review.userReview" placeholder="Review">
    </textarea>
        <button>Add Review</button>
    </form>
    </section>
    `,

    data() {
        return {
            review: {
                fullName: 'Books Reader' //add default values
            }
        }
    },

    methods: {
        addReview() {
            this.$emit('add-review', this.review)
        }
    },

}


