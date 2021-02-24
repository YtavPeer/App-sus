import { emailService } from '../services/mail-service.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';



export default {
      template: `
      <section class="home-mail">
            <h1>home-mail</h1>
            <email-compose @add-email="addEmail"/>
            <h2>list-mail</h2>
            <email-filter @filtered="setFilter"/>
            <email-list  v-if="emails.length" :emails="emailsToShow" @mark-as-read="markAsRead"/>
      </section>
      `,
      data() {
            return {
                  emails: [],
                  filters: null
            }
      },
      methods: {
            loadEmails() {
                  emailService.query()
                        .then(emails => {
                              console.log(emails, "emails updated")
                              this.emails = emails
                        })
            },
            addEmail(email) {
                  emailService.add(email)
                        .then(() => {
                              this.loadEmails()
                        })
            },
            markAsRead(email) {
                  email.isRead = !email.isRead
                  emailService.update(email)
                        .then(() => {
                              console.log("hereee")
                              this.loadEmails()
                        })
            },
            setFilter(filters) {
                  this.filters = filters
            }
      },

      computed: {
            emailsToShow() {
                  if (!this.filters) return this.emails
                  console.log(this.filters, "filters")
                  const emailTxt = this.filters.byTxt.toLowerCase()
                  const isRead = this.filters.readState === 'read' ? true : false
                  console.log(emailTxt, isRead)
                  const emailsToShow = this.emails.filter(email => {
                        return email.subject.toLowerCase().includes(emailTxt)
                              && email.isRead === isRead
                  })
                  return emailsToShow
            }
      },
      created() {
            console.log('creadted')
            this.loadEmails()
      },
      components: {
            emailList,
            emailFilter,
            emailCompose
      }

}
