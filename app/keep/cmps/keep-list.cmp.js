
import keepPreview from './keep-preview.cmp.js';

export default {
      props: ['dynamicNotes'],
      template: `
      <ul v-if="dynamicNotes" class="dynamicNotes-list">
            <li v-for="(dynamicNote , idx) in dynamicNotes" :key="dynamicNote.id" class="dynamicNotes-preview-container" :style="{backgroundColor: dynamicNote.style.backgroundColor}">
                  <keep-preview :dynamicNote="dynamicNote" @click.native="selectKeep(dynamicNote)"></keep-preview>
                  <button @click="remove(dynamicNote)">X</button>
                  <button>Edit</button>
                  <button>Change Color</button>
                  <button>Pin</button>
           </li>
      </ul>
      `,
      data() {
            return {
            }
      },
      methods: {
            selectKeep(keep) {
                  this.$emit('selected', keep);
            },
            remove(dynamicNote){
                  this.$emit('removeNote', dynamicNote);
            }
      },
      computed: {

      },
      components: {
            keepPreview,
      },
      created() {

      }

}
