export default {
    template: `
    <section>
        <form @submit.prevent="addEmail" class="email-form">
            <input type="email" placeholder="To:" v-model="email.receiver">
            <input type="text" placeholder="Subject" v-model="email.subject">
            <textarea name="body" id="body" placeholder="Body" v-model="email.body" ></textarea>
            <button>Add Email</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                receiver: '',
                subject: '',
                body: ''
            }
        }
    },
    methods: {
        addEmail() {
            const { subject, body } = this.email
            if (!subject || !body) return

            this.$emit('add-email', this.email)
        }
    }
}