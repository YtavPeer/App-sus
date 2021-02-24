

export default {
      name: 'app-header',
      template: `
     <header class="app-header" >
           <section class="logo">
                 <h1>Books</h1>
           </section>
           <nav class="main-navbar">
                 <router-link to="/">Home</router-link>|
                 <router-link to="/keep">keep</router-link>|
                 <router-link to="/mail">mail</router-link>|
           </nav>
      </header>
      `,
}
