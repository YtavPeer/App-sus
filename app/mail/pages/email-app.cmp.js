import { emailService } from '../services/mail-service.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
import emailSideMenu from '../cmps/email-side-menu.cmp.js';



export default {
      template: `
      <section class="home-mail">
            <h1>home-mail</h1>
            <button @click="compose">Compose</button>
            <email-status :percentages="precForBar" />
            <email-compose v-if="emailToEdit || isEmailToAdd" @add-email="addEmail" @close-modal="closeModal" :emailToEdit="emailToEdit" />
            <h2>list-mail</h2>
            <email-filter @filtered="setFilter" @sorted="setSort"/>
            <div class="flex">
                  <email-side-menu class="email-side-menu1"/>
                  <email-list class="email-list"  v-if="emails.length" :emails="emailsToShow" @mark-as-read="markAsRead"  @replay="replay"/>
            </div>emails.container
      </section>
      `,
      data() {
            return {
                  emails: [],
                  emailToEdit: null,
                  isEmailToAdd: false,
                  filters: null,
                  sort: 'date'
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
                              this.closeModal()
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
            replay(email) {
                  console.log('replaying.......')
                  this.emailToEdit = email
                  console.log( this.emailToEdit)
            },
            setFilter(filters) {
                  this.filters = filters
            },
            setSort(sort) {
                  this.sort = sort
                  console.log(this.sort)
            },
            compose() {
                  console.log('creating new mail..')
                  this.isEmailToAdd = true
            },
            closeModal() {
                  this.isEmailToAdd = false
                  this.emailToEdit = null
            }
      },

      computed: {
            emailsToShow() {
                  console.log("rendering") //TODO: Export to function
                  if(this.sort === 'date') this.emails = this.emails.sort((email1, email2) => email2.sentAt - email1.sentAt)
                  else this.emails = this.emails.sort((email1, email2) => {
                        if(email1.subject < email2.subject) return -1
                        else if(email1.subject > email2.subject) return 1
                        return 0
                  })
                  

                  if (!this.filters) return this.emails
                  const emailTxt = this.filters.byTxt.toLowerCase()
                  const isRead = this.filters.readState === 'read' ? true : false
                  const emailsToShow = this.emails.filter(email => {
                        return (email.subject.toLowerCase().includes(emailTxt)
                              || email.body.toLowerCase().includes(emailTxt))
                              && email.isRead === isRead
                  })
                  return emailsToShow
            },
            precForBar() {
                  const emailsBar = {
                        total: this.emails.length,
                        unread: 0
                  }
                  this.emails.forEach(email => {
                        if (!email.isRead) emailsBar.unread++
                  });

                  return ((emailsBar.unread / emailsBar.total) * 100).toFixed(2)
            }
      },
      created() {
            this.loadEmails()
      },
      components: {
            emailList,
            emailFilter,
            emailCompose,
            emailStatus,
            emailSideMenu
      }

}
