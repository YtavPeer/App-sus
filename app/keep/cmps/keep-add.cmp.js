
export default {
      template: `
      <section class="keep-add">
              <h3>add dynamic components</h3>
              <button>Add Notes</button>
              <button>Add img</button>
              <button>Add video</button>
                  <form class="create-note" v-on:submit.prevent="createNote()">
                      <input name="title" v-model="newNote.title" placeholder="Title"/>
                        <textarea v-if="newNote.noteType === 'NoteTxt'" name="content" v-model="newNote.content" placeholder="Text goes here..." rows="2">
                        </textarea>
                        <input v-if="newNote.noteType === 'NoteImg'" name="imageNote" v-model="newNote.imgUrl" placeholder="Enter Image Url"/>
                        <input v-if="newNote.noteType === 'NoteVideo'" name="videoNote" v-model="newNote.videoUrl" placeholder="Enter Video Url"/>
                        <input v-if="newNote.noteType === 'NoteTodos'" name="todosNote" v-model="newNote.todos" placeholder="Enter Todos Url"/>
                      <button type="submit">Add</button>
                  </form>
                  <button type="submit">Todos</button>
                  <button type="submit">text</button>
                  <button type="submit">image</button>
                  <button type="submit">video</button>
      </section>
      `,
      data() {
            return {
                  newNote: {
                        noteType: 'NoteImg',
                        title: null,
                        content: null,
                        imgUrl: null,
                        videoUrl: null,
                        todos: null,
                  }
            }
      },
      methods: {
            createNote() {
                  console.log('emit data to father');
                  this.$emit('addNote', this.newNote)
            }
      },
      components: {

      }
}
