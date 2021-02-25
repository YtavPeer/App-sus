
export default {
      template: `
      <section class="keep-filter">

          
         <div class="search">
          <input type="text" @input="setFilter" id="box" v-model="filterBy.name" class="form-control" placeholder="Search anything...">
            <div class="button-src">
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

