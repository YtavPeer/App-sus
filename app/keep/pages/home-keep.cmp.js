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
          <keep-add @addNote="addNewNote"></keep-add>
          <keep-list v-if="dynamicNotes" :dynamicNotes="dynamicNotes" @removeNote="removeNote"></keep-list>
      </section>
      `,
      data() {
            return {
                  filterBy: null,
                  dynamicNotes: null,
            }
      },
      methods: {
            loadsNotes() {
                  keepService.query()
                        .then(notes => this.dynamicNotes = notes);
            },
            removeNote(note) {
                  console.log('keep-home comp removeNote', note);
                  keepService.removeNote(note.id)
                        .then(res => this.loadsNotes());
            },
            addNewNote(newNote) {
                  console.log('adding new note', newNote)
            }
      },
      components: {
            keepFilter,
            keepAdd,
            keepList
      },
      created() {
            this.loadsNotes()
      }

}


