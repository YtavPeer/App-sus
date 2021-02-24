import { emailService } from '../services/mail-service.service.js';

import emailList from '../cmps/email-list.cmp.js';



export default {
      template: `
      <section class="home-mail">
            <h1>home-mail</h1>
            <email-list  v-if="emails.length" :emails="emails"/>
      </section>
      `,
      data() {
            return {
                  emails: []
            }
      },
      methods: {
            loadEmails() {
                  emailService.query()
                        .then(emails => {
                              console.log(emails)
                              this.emails = emails
                        })
            }
      },
      created() {
            console.log('creadted')
            this.loadEmails()
      },
      components: {
            emailList
      }

}
