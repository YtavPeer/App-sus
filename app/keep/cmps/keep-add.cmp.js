
export default {
      template: `
      <section class="keep-add">
              <h3>add dynamic components</h3>
              <button>Add Notes</button>
              <button>Add img</button>
              <button>Add video</button>
                  <form class="create-note" v-on:submit.prevent="createNote()">
                           <!-- <img onclick="onClickStrokeColorPallete()" class="icon changeStrokeColor"
                                    src="./ICONS/paint-board-and-brush.png" alt=""> -->
                              <input type="color" v-model="newNote.color"/>
                           <input name="title" v-model="newNote.title" placeholder="Title"/>
                        <textarea v-if="newNote.noteType === 'NoteTxt'" name="content" v-model="newNote.content" placeholder="Text goes here..." rows="2">
                        </textarea>
                        <input v-if="newNote.noteType === 'NoteImg'" name="imageNote" v-model="newNote.imgUrl" placeholder="Enter Image Url"/>
                        <input v-if="newNote.noteType === 'NoteVideo'" name="videoNote" v-model="newNote.videoUrl" placeholder="Enter Video Url"/>
                        <input v-if="newNote.noteType === 'NoteTodos'" name="todosNote" v-model="newNote.todos" placeholder="Enter Todos seperate by ; "/>
                      <button type="submit">Add</button>
                  </form>
                  <button @click="changeToTodos" type="submit">Todos</button>
                  <button @click="changeToText" type="submit">text</button>
                  <button @click="changeToImage" type="submit">image</button>
                  <button @click="changeToVideo" type="submit">video</button>
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
                  }
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
            }
      },
      components: {

      },
      created() {
            this.newNote.noteType = 'NoteTxt';
      }
}
