import { emailService } from '../services/mail-service.service.js';

export default {
    template: `
    <section v-if="email">
    <h1> {{email.subject}} </h1>
    <p> {{email.body}} </p>
    </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        loadEmail() {
            const id = this.$route.params.emailId
            emailService.getById(id).
                then(email => {
                    console.log(email)
                    this.email = email
                })
        }
    },
    created() {
        this.loadEmail()
    }
}