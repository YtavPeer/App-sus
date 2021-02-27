

export default {
      template: `
     <section class="app-home">

           <!-- <h1 class="hero-title">Welcome to app sos</h1> -->
           <div class="section-container">
      
           <div class="books card home-container">
                 <router-link to="/book"><img class="app-home-box" src="./img/books-home.png" alt="" height="330px" width="330px"></router-link>
                 <h1 class="home-title">Books</h1>
           </div>
           <div class="keep card home-container">
                 <router-link to="/keep"><img class="app-home-box" src="./img/home-emil.png" alt="" height="330px" width="330px"></router-link>
                 <h1 class="home-title">keep</h1>
           </div>
           <div class="email card home-container">
                 <router-link to="/email"><img class="app-home-box" src="./img/note.png" alt="" height="330px" width="330px"></router-link>
                 <h1 class="home-title">email</h1>
           </div>
           </div>
   
      </section>
      `,
      methods: {

      }

}
