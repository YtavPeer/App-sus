import { emailService } from '../services/mail-service.service.js';

export default {
    template: `
    <section v-if="email">
        <h1> {{email.subject}} </h1>
        <div class="sender-info flex">
            <div class="sender-email">{{email.sender}}</div>
            <div class="sender-email-nickname">{{email.nickname}}</div>
        </div>
        <p> {{email.body}} </p>
        <button>Replay</button>
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