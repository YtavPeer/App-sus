import emailPreview from './email-preview.cmp.js'
import emailList from './email-list.cmp.js';

export default {
    props: ['emails'],
    template: `
    <!-- <ul class="email-list">
    <li v-for="email in sentEmails" class="email-preview-container" :key="email.id" >
            <email-preview :email="email" @replay="replay" @star="star"  @delete="deleteEmail"/>
            <button @click="markAsRead(email)">Mark As Read</button>
            <router-view :emailRoute="email" />
        </li>
    </ul> -->
    <email-list class="email-list"  v-if="emails.length" :emails="sentEmails" @mark-as-read="markAsRead"  @replay="replay" @star="star" @delete="deleteEmail" @send-to-note="sendToNote"/>
    `,
    data() {
        return {
            // emailList: this.emails
        }
    },
    methods: {
        markAsRead(email) {
            this.$emit('mark-as-read', email)
        } ,
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
        sentEmails() {
            return this.emails.filter(email => email.sender === 'michael@coding.com')
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