import appSearch from '../app-cmps/app-search.cmp.js'

export default {
      name: 'app-header',
      template: `
     <header class="app-header flex space-between" >
           <section class="logo">
                 <h1>Books</h1>
           </section>

           <app-search></app-search>

           <nav class="main-navbar">
                 <router-link to="/">Home</router-link>|
                 <router-link to="/keep">keep</router-link>|
                 <router-link to="/email">mail</router-link>|
           </nav>
      </header>
      `,
      components: {
            appSearch
      }
}
