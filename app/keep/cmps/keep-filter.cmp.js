
export default {
      template: `
      <section class="keep-filter">

         <label> Search for note: </label>    
         <input type="text" @input="setFilter" placeholder="Search..." v-model="filterBy.name">

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

