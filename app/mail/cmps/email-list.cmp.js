import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <ul class="email-list clean-list ">
    <li v-for="email in emails" class="email-preview-container" :key="email.id" >
            <email-preview :email="email" @replay="replay" @star="star" @delete="deleteEmail" @mark-as-read="markAsRead" @send-to-note="sendToNote"/>
            <!-- <router-view :emailRoute="email" /> -->
        </li>
    </ul>
    `,
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
    components: {
        emailPreview
    },
}