
import keepPreview from './keep-preview.cmp.js';

export default {
      props: ['dynamicNotes'],
      template: `
      <ul v-if="dynamicNotes" class="dynamicNotes-list">
            <li v-for="(dynamicNote , idx) in dynamicNotes" :key="dynamicNote.id" class="dynamicNotes-preview-container" :style="{backgroundColor: dynamicNote.style.backgroundColor}">
                  <keep-preview :dynamicNote="dynamicNote" @click.native="selectKeep(dynamicNote)"></keep-preview>
                  <button @click="remove(dynamicNote)">X</button>
                  <button @click="edit(dynamicNote)">Edit</button>
                  <input type="color" @change="changeColor($event,dynamicNote)"/>
                  <button>Pin</button>
                  <button>Send Mail</button>
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
            remove(dynamicNote) {
                  this.$emit('removeNote', dynamicNote);
            },
            edit(dynamicNote) {
                  this.$emit('editNote', dynamicNote);
            },
            changeColor(event,dynamicNote) {
                  console.log(event);
                  console.log(dynamicNote);
                  // this.$emit('changeColor', dynamicNote)
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
