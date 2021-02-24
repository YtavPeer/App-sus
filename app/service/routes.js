import homePage from '../app-pages/home-page.cmp.js';
import homeKeep from '../keep/pages/home-keep.cmp.js';
import homeMail from '../mail/pages/home-mail.cmp.js';

const routes = [
      {
            path: '/',
            component: homePage,
      },
      {
            path: '/mail',
            component: homeMail
      },
      {
            path: '/keep',
            component: homeKeep
      },
]

export const myRouter = new VueRouter({ routes })