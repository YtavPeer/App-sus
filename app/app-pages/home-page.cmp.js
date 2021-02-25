

export default {
      template: `
     <section class="app-home">

           <h1 class="hero-title">Welcome to app sos</h1>
           <div class="section-container">
      
           <div class="books card">
                 <router-link to="/books"><img class="app-home-box" src="../img/books-home.png" alt="" height="400px" width="400px"></router-link>
                 <h1 class="home-title">Books</h1>
           </div>
           <div class="keep card">
                 <router-link to="/keep"><img class="app-home-box" src="../img/home-emil.png" alt="" height="400px" width="400px"></router-link>
                 <h1 class="home-title">keep</h1>
           </div>
           <div class="email card">
                 <router-link to="/email"><img class="app-home-box" src="../img/note.png" alt="" height="400px" width="400px"></router-link>
                 <h1 class="home-title">email</h1>
           </div>
           </div>
   
      </section>
      `,
      methods: {

      }

}
