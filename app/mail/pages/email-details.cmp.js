import { emailService } from '../services/mail-service.service.js';

export default {
    props: ['emailRoute'],
    template: `
    <section v-if="email" class="details-email">
        <h1> {{email.subject}} </h1>
        <div class="sender-info flex center-align">
            <img src="./img/user.png" width="40" height="40">
            <div class="sender-email-nickname">{{email.nickname}}</div>
            <div class="sender-email">{{email.sender}}</div>
        </div>
        <p class="email-detail-body"> {{email.body}} </p>
        <img src="./img/replay.png" alt="" width="40"  @click="replay">
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
            // console.log(id, this.emailRoute.id)
            // if(id !== this.emailRoute.id) return
            emailService.getById(id).
                then(email => {
                    console.log(email)
                    this.email = email
                })
        },
        replay() {
            this.$router.replace({ name: 'email', query: { titleReplay: this.email.subject, toReplay: this.email.sender } })
        }
    },
    created() {
        console.log(this.emailRoute, "emailRoute")
        this.loadEmail()
    }
}