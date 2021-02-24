import homePage from '../app-pages/home-page.cmp.js';
import homeKeep from '../keep/pages/home-keep.cmp.js';
import emailApp from '../mail/pages/email-app.cmp.js'
import emailDetails from '../mail/pages/email-details.cmp.js'

const routes = [
      {
            path: '/',
            component: homePage,
      },
      {
            path: '/email',
            component: emailApp
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