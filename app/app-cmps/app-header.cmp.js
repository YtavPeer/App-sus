import appSearch from '../app-cmps/app-search.cmp.js'

export default {
      name: 'app-header',
      template: `
     <!-- <header class="app-header flex space-between" >
            <section class="logo">
                  <h1>Books</h1>
            </section>

            <app-search></app-search>

            <nav class="main-navbar">
                  <router-link to="/">Home</router-link>|
                  <router-link to="/keep">keep</router-link>|
                  <router-link to="/email">mail</router-link>|
                  <router-link to="/book">books</router-link>|

           </nav>
      </header> -->


      <header class="main-header" :class="menuState">
        <div class="header-container main-container flex space-between center-align">
            
            <router-link to="/"  style="text-decoration: none"><div class="logo">APPSUS</div></router-link>
            <!-- <img src="../../img/logo.jpg" alt="" height=70px> -->

            <app-search></app-search>
            <ul class="navbar-conntainer clean-list flex ">
            <router-link @click.native="toggleMenu" class="flex center-align nav-item" to="/">Home</router-link>
                  <router-link @click.native="toggleMenu" class="flex center-align nav-item" to="/keep">keep</router-link>
                  <router-link @click.native="toggleMenu" class="flex center-align nav-item" to="/email">mail</router-link>
                  <router-link @click.native="toggleMenu"  class="flex center-align nav-item" to="/book">books</router-link>
            </ul>
            <button  @click="toggleMenu" class="menu-btn" >&#9776</button>
            <!-- <button  onclick="toggleMenu()" class="menu-btn">&#9776</button> -->
        </div>
    </header>
      `,
      data(){
            return {
                  isMenuOpen: false
            }
      },
      methods: {
            toggleMenu() {
                  this.isMenuOpen = !this.isMenuOpen
            }
      },
      computed: {
            menuState() {
                  return {
                        'menu-open': this.isMenuOpen
                  }
            }
      },
      components: {
            appSearch
      }
}
