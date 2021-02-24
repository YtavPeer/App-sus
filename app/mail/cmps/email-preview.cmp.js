import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
    <section class="email-preview flex space-between" :class="markRead">
    <h1>{{email.subject}}</h1>
    <long-text :txt="email.body"/>
    <router-link class="detail-preview" :to="'/email/'+email.id">Details</router-link>
    <button @click="replay">Replay</button>
    <button @click="star">Star</button>
    </section>
    `,
    data() {
        return {
            // isRead: this.email.isRead
        }
    },
    methods: {
        replay() {
            this.$emit('replay', this.email)
        },
        star() {
            this.$emit('star', this.email)
        }
    },
    computed: {
        markRead() {
            return {
                'read': this.email.isRead
            }
        }
    },
    components: {
        longText
    }
}