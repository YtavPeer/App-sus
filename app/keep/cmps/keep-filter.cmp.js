
export default {
      template: `
      <section class="keep-filter">

          
         <div class="searchContainer">
               <div class="search-input">

               <input type="text" @input="setFilter" id="box" v-model="filterBy.name"  placeholder="Search anything...">

               </div>

               <div class="search-btn">
                        <button>GET</button>


               </div>

         </div>
 

        
       
      </section>
      `,
      data() {
            return {
                  filterBy: {
                        name: '',
                  }
            }
      },
      methods: {
            setFilter() {
                  this.$emit('filtered', this.filterBy)
            },
      },
      components: {

      }
}

