import homePage from '../app-pages/home-page.cmp.js';
import homeKeep from '../keep/pages/home-keep.cmp.js';
import emailApp from '../mail/pages/email-app.cmp.js'
import emailDetails from '../mail/pages/email-details.cmp.js'

import emailList from '../mail/cmps/email-list.cmp.js';
import sentEmailList from '../mail/cmps/email-sent-list.cmp.js';
import starredEmailList from '../mail/cmps/email-starred-list.cmp.js';

import about from '../books/pages/about.cmp.js';
import aboutMe from '../books/cmps/about-me.cmp.js';
import aboutTeam from '../books/cmps/about-team.cmp.js';
import bookApp from '../books/pages/book-app.cmp.js'
import bookDetails from '../books/pages/book-details.cmp.js';

const routes = [
      {
            path: '/',
            component: homePage,
      },
      {
            path: '/email',
            component: emailApp,
            children: [
                  {
                        path: 'sent',
                        component: sentEmailList
                  },
                  {
                        path: 'starred',
                        component: starredEmailList
                  },
                  {
                        name: 'email',
                        path: ':noteInfo?',
                        component: emailList
                  },
                  {
                        path: '/',
                        component: emailList
                  }
            ]
            // children: [
            //       {
            //             path: ':emailId',
            //             component: emailDetails
            //       }
            // ]
      },
      {
            path: '/email/:emailId',
            component: emailDetails,
            name: 'emailDetails'
      },
      {
            path: '/keep',
            component: homeKeep,
            children: [
                  {
                        name: 'keep',
                        path: ':emailInfo?',
                        component: homeKeep
                  },
            ]
      },
      {
            path: '/about',
            component: about,
            children: [
                  {
                        path: 'me',
                        component: aboutMe
                  },
                  {
                        path: 'team',
                        component: aboutTeam
                  },
                  {
                        path: '/',
                        component: aboutMe
                  }
            ]
      },
      {
            path: '/book',
            component: bookApp
      },
      {
            path: '/book/:bookId',
            component: bookDetails
      },
]

export const myRouter = new VueRouter({ routes })