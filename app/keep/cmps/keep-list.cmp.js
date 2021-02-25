
import keepPreview from './keep-preview.cmp.js';

export default {
      props: ['dynamicNotes'],
      template: `
      <ul v-if="dynamicNotes" class="dynamicNotes-list">
            <li v-for="(dynamicNote , idx) in dynamicNotes" :key="dynamicNote.id" class="dynamicNotes-preview-container card" :style="{borderColor: dynamicNote.style.backgroundColor}">


                  <div class="cards-top">
                        <img v-if="!dynamicNote.isPinned" class="noteTypeIcon pin" @click="pinNotes(dynamicNote)" src="../../img/push-pin.png" alt="" width=25>
                        <img v-if="dynamicNote.isPinned" class="noteTypeIcon pin" @click="pinNotes(dynamicNote)" src="../../img/office-push-pin.png" alt="" width=25>
                 </div>
      
                  <div class="cards-content">
                        <keep-preview :dynamicNote="dynamicNote" @toggleTodo="toggleTodo"></keep-preview>
                  </div>
           
           

               <div class="cards-btn">
                  <img class="noteTypeIcon" @click="remove(dynamicNote)" src="../../img/delete.png" alt="" width=30 height=30>
                  <img class="noteTypeIcon" @click="edit(dynamicNote)" src="../../img/edit-button.png" alt="" width=30 height=30>
                  <!-- <button @click="edit(dynamicNote)">Edit</button> -->
                  <input class="colorArticleBtn" type="color" @input="changeColor($event,dynamicNote)"/>
                  <img class="noteTypeIcon email" @click="sendEmail(dynamicNote)" src="../../img/send.png" alt="" width=30 height=30>
              </div>
           

                 
           </li>
      </ul>
      `,
      data() {
            return {
            }
      },
      methods: {
            remove(dynamicNote) {
                  this.$emit('removeNote', dynamicNote);
            },
            edit(dynamicNote) {
                  this.$emit('editNote', dynamicNote);
            },
            changeColor(event, dynamicNote) {
                  var color = event.target.value
                  this.$emit('changeColor', dynamicNote, color)
            },
            pinNotes(dynamicNote) {
                  this.$emit('togglePin', dynamicNote)
            },
            sendEmail(dynamicNote) {
                  //need to implement send email by bus
                  console.log(dynamicNote)
                  this.$emit('sendEmail', dynamicNote);
            },
            toggleTodo(dynamicNote, idx) {
                  this.$emit('toggleTodo', dynamicNote, idx)
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
