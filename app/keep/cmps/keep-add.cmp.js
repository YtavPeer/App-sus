
export default {
      template: `
      <section class="keep-add">
                  <form class="create-note" v-on:submit.prevent="createNote()">
                           <!-- <img onclick="onClickStrokeColorPallete()" class="icon changeStrokeColor"
                                    src="./ICONS/paint-board-and-brush.png" alt=""> -->
                              <input type="color" v-model="newNote.color"/>

                           <input name="title" @click="openRelevanteInput" v-model="newNote.title" placeholder="Take a note..."/>

                           <template v-if="isTakeNote">
                              <textarea ref="inputTXT" v-if="newNote.noteType === 'NoteTxt'" name="content" v-model="newNote.content" placeholder="Take a note..." rows="2">
                              </textarea>
                              <input ref="imgNote" v-if="newNote.noteType === 'NoteImg'" name="imageNote" v-model="newNote.imgUrl" placeholder="Enter Image Url"/>
                              <input ref="videoNote" v-if="newNote.noteType === 'NoteVideo'" name="videoNote" v-model="newNote.videoUrl" placeholder="Enter Video Url"/>
                              <input ref="todosNote" v-if="newNote.noteType === 'NoteTodos'" name="todosNote" v-model="newNote.todos" placeholder="Enter Todos seperate by ; "/>
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
                  elTxt: null,
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
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  this.newNote.noteType = 'NoteTodos'
                  // this.$refs.todosNote.focus()
            },
            changeToText() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  this.newNote.noteType = 'NoteTxt';
                  // this.$refs.txtNote.focus()
            },
            changeToImage() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  this.newNote.noteType = 'NoteImg';
                  // this.$refs.imgNote.focus();
            },
            changeToVideo() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  this.newNote.noteType = 'NoteVideo';
                  // this.$refs.videoNote.focus();
            },
            openRelevanteInput() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  // console.log('refs is', this.$refs)
                  // const elTxt = this.$refs.txtNote;
                  // console.log('eltxt', elTxt);
                  // this.elTxt.focus();
                  console.log('this refs', this.$refs.inputTXT)
                  // this.$refs.txtNote.focus()
            }
      },
      components: {

      },
      mounted() {
            // this.elTxt = this.$refs.txtNote;
      },
      created() {
            this.newNote.noteType = 'NoteTxt';
            console.log(this.$refs)
      }
}
