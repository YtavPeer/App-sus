import appHeader from './app-cmps/app-header.cmp.js'
import { myRouter } from './service/routes.js';


const options = {
      el: '#app',
      router: myRouter,
      template: `
        <section>
            <!-- <userMsg /> -->
            <app-header />
            <router-view class="main-view" />
            <!-- <footer class="footer"><p class="cofee-rights"> &copy; Coffeerights 2021</p></footer> -->
        </section>
    `,
      router: myRouter,
      components: {
            appHeader
      }
}

const app = new Vue(options)
