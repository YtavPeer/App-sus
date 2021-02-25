export default {
    props: ['emailToEdit', 'emailFromNote'],
    template: `
    <section class="modal center">
        <div class="modal-email-headline flex center-align">
            <button @click="close" class="email-modal-btn-close">X</button>
            <span class="email-modal-headline-msg">{{message}}</span>
        </div>
        <form @submit.prevent="addEmail" class="email-form flex flex-column">
            <input class="email-form-to" type="email" placeholder="To:" v-model="email.sender">
            <input class="email-form-subject" type="text" placeholder="Subject" v-model="email.subject">
            <textarea class="email-form-body" name="body" id="body" placeholder="Body" v-model="email.body" ></textarea>
            <button class="email-form-btn">Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                sender: '',
                subject: '',
                body: '',
            }
        }
    },
    methods: {
        addEmail() {
            console.log('sending')
            const { subject, body } = this.email
            if (!subject || !body) return

            this.$emit('add-email', this.email)
        },
        close() {
            this.$emit('close-modal')
        }
    },
    computed: {
        message() {
            return this.emailToEdit ? 'Replay Message' : 'New Message'
        },
        subjectForDisplay() {
            if (this.email.subject.startsWith('Re: Re:')) return this.email.subject.slice(4)
            else return this.email.subject
        }
    },

    watch: {
        emailToEdit: function (newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            this.email.subject = `Re: ${newVal.subject}`
            this.email.subject = this.subjectForDisplay
            this.email.sender = newVal.sender
        },
        emailFromNote: function (newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            this.email.subject = newVal.subject
            this.emailb.body = newVal.body
        },

    },
    created() {
        if (this.emailToEdit) {
            this.email.subject = `Re: ${this.emailToEdit.subject}`
            this.email.subject = this.subjectForDisplay

            this.email.sender = this.emailToEdit.sender
        } else if (this.emailFromNote) {
            this.email.subject = this.emailFromNote.subject
            this.email.body = this.emailFromNote.body
        }
    },
    updated() {
        console.log(this.emailToEdit)
        console.log("updated")
    }
}
