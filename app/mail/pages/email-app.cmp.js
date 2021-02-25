import { emailService } from '../services/mail-service.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
import emailSideMenu from '../cmps/email-side-menu.cmp.js';



export default {
      template: `
      <section class="home-mail">
            <!-- <button @click="compose">Compose</button> -->
            <!-- <email-status :percentages="precForBar" /> -->
            <email-compose v-if="emailToEdit || isEmailToAdd ||dataFromNotes" @add-email="addEmail" @close-modal="closeModal" :emailToEdit="emailToEdit" :emailFromNote="dataFromNotes" />
            <!-- <email-filter @filtered="setFilter" @sorted="setSort"/> -->
            <div class="flex">
                  <email-side-menu class="email-side-menu1" @sent-emails="sentEmails" @compose="compose" :percentages="precForBar"/>
                  <!-- <email-list class="email-list"  v-if="emails.length" :emails="emailsToShow" @mark-as-read="markAsRead"  @replay="replay"/> -->
                  <router-view  class="email-list"  v-if="emails.length" :emails="emailsToShow" @mark-as-read="markAsRead"  @replay="replay" @star="star" @delete="deleteEmail" @send-to-note="sendToNote"/>
            </div>
      </section>
      `,
      data() {
            return {
                  emails: [],
                  emailToEdit: null,
                  isEmailToAdd: false,
                  filters: null,
                  sort: 'date',
                  dataFromNotes: null
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
                  console.log(this.emailToEdit)
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
                  this.dataFromNotes = null
            },
            sentEmails() {
                  this.emails = this.emails.filter(email => {
                        return email.sender === 'michal@coding.com'
                  })
            },
            star(email) {
                  email.isStarred = !email.isStarred
                  emailService.update(email)
            },
            deleteEmail(id) { //TODO: Extract to util function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              emailService.remove(id).then(() => {
                                    Swal.fire(
                                          'Deleted!',
                                          'Your file has been deleted.',
                                          'success'
                                    )
                                    this.loadEmails() //How to render the correct route?
                              })
                        }
                  })
            },


            sendToNote(emailData) {
                  this.$router.replace({ name: 'keep', query: { title: emailData.subject, txt: emailData.body } })
            }
      },

      computed: {
            emailsToShow() {
                  console.log("rendering") //TODO: Export to function
                  if (this.sort === 'date') this.emails = this.emails.sort((email1, email2) => email2.sentAt - email1.sentAt)
                  else this.emails = this.emails.sort((email1, email2) => {
                        if (email1.subject < email2.subject) return -1
                        else if (email1.subject > email2.subject) return 1
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
            const subject = this.$route.query.title
            const body = this.$route.query.txt
            console.log(subject, body)
            if (subject && body) this.dataFromNotes = { subject, body }
            console.log(this.dataFromNotes, "data from nites")
      },
      components: {
            emailList,
            emailFilter,
            emailCompose,
            emailStatus,
            emailSideMenu
      }

}
