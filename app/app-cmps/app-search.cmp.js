
export default {
      name: 'app-search',
      template: `
     <header class="app-search">
  
         <!-- <input class="app-search-input" type="text" @input="setFilter" placeholder="Search..." v-model="filterBy.name">
         <select class="app-select-filter"> 
               <option value="1">1</option>
               <option value="2">2</option>
         </select>
         <select class="app-select-sort"> 
               <option value="1">1</option>
               <option value="2">2</option>
         </select> -->

      </header>
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



