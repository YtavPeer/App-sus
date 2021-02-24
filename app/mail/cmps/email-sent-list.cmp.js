import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
    <li v-for="email in sentEmails" class="email-preview-container" :key="email.id" >
            <email-preview :email="email" @replay="replay" @star="star"/>
            <button @click="markAsRead(email)">Mark As Read</button>
            <router-view :emailRoute="email" />
        </li>
    </ul>
    `,
    data() {
        return {
            emailList: this.emails
        }
    },
    methods: {
        markAsRead(email) {
            this.$emit('mark-as-read', email)
        } ,
        replay(email) {a
            this.$emit('replay', email)
        },
        star(email) {
            this.$emit('star', email)
        }
    },
    computed: {
        sentEmails() {
            return this.emailList.filter(email => email.sender === 'michael@coding.com')
        }
    },
    created() {
        console.log('created')
    },
    components: {
        emailPreview
    },
}