import emailPreview from './email-preview.cmp.js'
import emailList from './email-list.cmp.js';


export default {
    props: ['emails'],
    template: `
    <email-list class="email-list"  v-if="emails.length" :emails="starredEmails" @mark-as-read="markAsRead"  @replay="replay" @star="star" @delete="deleteEmail" @send-to-note="sendToNote"/>
    `,
    data() {
        return {
            emailList: this.emails
        }
    },
    methods: {
        markAsRead(email) {
            this.$emit('mark-as-read', email)
        },
        replay(email) {
            this.$emit('replay', email)
        },
        star(email) {
            this.$emit('star', email)
        },
        deleteEmail(id) {
            console.log(id, "list")
            this.$emit('delete', id)
        },
        sendToNote(dataToSend) {
            this.$emit('send-to-note', dataToSend)
        }
    },
    computed: {
        starredEmails() {
            return this.emailList.filter(email => email.isStarred)
        }
    },
    created() {
        console.log('created')
    },
    components: {
        emailPreview,
        emailList
    },
}