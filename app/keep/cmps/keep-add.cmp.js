
export default {
      template: `
      <section class="keep-add">
                  <form class="create-note" v-on:submit.prevent="createNote()">
                           <!-- <img onclick="onClickStrokeColorPallete()" class="icon changeStrokeColor"
                                    src="./ICONS/paint-board-and-brush.png" alt=""> -->
                              <input type="color" v-model="newNote.color"/>

                           <input name="title" @click="openRelevanteInput" v-model="newNote.title" placeholder="Take a note..."/>

                           <template v-if="isTakeNote">
                              <textarea v-if="newNote.noteType === 'NoteTxt'" name="content" v-model="newNote.content" placeholder="Take a note..." rows="2">
                              </textarea>
                              <input v-if="newNote.noteType === 'NoteImg'" name="imageNote" v-model="newNote.imgUrl" placeholder="Enter Image Url"/>
                              <input v-if="newNote.noteType === 'NoteVideo'" name="videoNote" v-model="newNote.videoUrl" placeholder="Enter Video Url"/>
                              <input v-if="newNote.noteType === 'NoteTodos'" name="todosNote" v-model="newNote.todos" placeholder="Enter Todos seperate by ; "/>
                           </template> 

                      <button type="submit">Add</button>
                  </form>
                  <img class="noteTypeIcon" @click="changeToTodos" src="../../img/list.png" alt="" width=25>
                  <img class="noteTypeIcon" @click="changeToImage" src="../../img/imageicon.png" alt="" width=25>
                  <img class="noteTypeIcon" @click="changeToVideo" src="../../img/videoicon.png" alt="" width=25>
                  <img class="noteTypeIcon" @click="changeToText" src="../../img/texticon.png" alt="" width=25>
      </section>
      `,
      data() {
            return {
                  newNote: {
                        noteType: 'NoteTxt',
                        title: null,
                        content: null,
                        imgUrl: null,
                        videoUrl: null,
                        todos: null,
                        color: null,
                  },
                  isTakeNote: false,
            }
      },
      methods: {
            createNote() {
                  console.log('emit data to father');
                  this.$emit('addNote', this.newNote);
                  this.newNote.noteType = 'NoteTxt';
                  this.newNote.title = null;
                  this.newNote.content = null;
                  this.newNote.imgUrl = null;
                  this.newNote.videoUrl = null;
                  this.newNote.todos = null;
                  this.newNote.color = null;
            },
            changeToTodos() {
                  this.newNote.noteType = 'NoteTodos'
            },
            changeToText() {
                  this.newNote.noteType = 'NoteTxt'
            },
            changeToImage() {
                  this.newNote.noteType = 'NoteImg'
            },
            changeToVideo() {
                  this.newNote.noteType = 'NoteVideo'
            },
            openRelevanteInput() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
            }
      },
      components: {

      },
      created() {
            this.newNote.noteType = 'NoteTxt';
      }
}
