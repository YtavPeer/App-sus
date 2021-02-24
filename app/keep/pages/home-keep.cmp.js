import { keepService } from '../services/keep-service.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js';
import keepAdd from '../cmps/keep-add.cmp.js';
import keepList from '../cmps/keep-list.cmp.js'

export default {
      name: 'home-keep',
      template: `
     <section class="home-keep">
          <h1>home-keep</h1>
          <keep-filter></keep-filter>
          <keep-add></keep-add>
          <keep-list v-if="dynamicNotes" :dynamicNotes="dynamicNotes"></keep-list>
      </section>
      `,
      data() {
            return {
                  filterBy: null,
                  dynamicNotes: null,
            }
      },
      components: {
            keepFilter,
            keepAdd,
            keepList
      },
      created() {
            this.dynamicNotes = keepService.query();
      }

}


