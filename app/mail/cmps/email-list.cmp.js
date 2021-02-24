import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
    <li v-for="email in emails" class="email-preview-container" :key="email.id" >
            <email-preview :email="email" @replay="replay" @star="star"/>
            <button @click="markAsRead(email)">Mark As Read</button>
            <router-view :emailRoute="email" />
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
        }
    },
    components: {
        emailPreview
    },
}