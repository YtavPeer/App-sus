export default {
    props: ['description'],
    template: `
    <section class="book-description">
        <p>{{descToShow}}</p>
        <button v-if="shoudShowButton" @click="readMore">read more</button>
    </section>
    `,
    data() {
        return {
            shoudShowButton: this.description.length > 100,
            shouldShowFullDesc: false
        }
    },
    methods: {
        readMore() {
            this.shouldShowFullDesc = true
            this.shoudShowButton = false
        }
    },
    computed: {
        descToShow() {
            if (this.shouldShowFullDesc || !this.shoudShowButton) return this.description
            return this.description.substring(0, 100) + '...'
        }
    }

}

