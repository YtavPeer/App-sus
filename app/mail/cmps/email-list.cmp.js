import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
    <li v-for="email in emails" class="email-preview-container" :key="email.id" >
            <email-preview :email="email"/>
            <button @click="markAsRead(email)">Mark As Read</button>
        </li>
    </ul>
    `,
    methods: {
        markAsRead(email) {
            this.$emit('mark-as-read', email)
        }  
    },
    components: {
        emailPreview
    },
}
