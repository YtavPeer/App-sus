import homePage from '../app-pages/home-page.cmp.js';
import homeKeep from '../keep/pages/home-keep.cmp.js';
import emailApp from '../mail/pages/email-app.cmp.js'
import emailDetails from '../mail/pages/email-details.cmp.js'

import emailList from '../mail/cmps/email-list.cmp.js';
import sentEmailList from '../mail/cmps/email-sent-list.cmp.js';
import starredEmailList from '../mail/cmps/email-starred-list.cmp.js';

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
            component: emailDetails
      },
      {
            path: '/keep',
            component: homeKeep
      },
]

export const myRouter = new VueRouter({ routes })