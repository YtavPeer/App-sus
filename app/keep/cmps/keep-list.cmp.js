
import keepPreview from './keep-preview.cmp.js';

export default {
      props: ['dynamicNotes'],
      template: `
      <ul v-if="dynamicNotes" class="dynamicNotes-list">
            <li v-for="(dynamicNote , idx) in dynamicNotes" :key="dynamicNote.id" class="dynamicNotes-preview-container">
                  <keep-preview :dynamicNote="dynamicNote" @click.native="selectKeep(dynamicNote)"></keep-preview>
                  <button>X</button>
                  <button>Edit</button>
                  <button>Change Color</button>
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
      },
      computed: {

      },
      components: {
            keepPreview,
      },
      created() {
      }

}
