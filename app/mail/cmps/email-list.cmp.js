import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
    <li v-for="email in emails" class="email-preview-container" >
            <email-preview :email="email"/>
        </li>
    </ul>
    `,
    components: {
        emailPreview
    },
}
