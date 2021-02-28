import { keepService } from '../services/keep-service.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js';
import keepAdd from '../cmps/keep-add.cmp.js';
import keepList from '../cmps/keep-list.cmp.js'

export default {
      name: 'home-keep',
      template: `
     <section class="home-keep">
          <keep-filter @filtered="setFilter"></keep-filter>
          <keep-add @addNote="addNewNote"></keep-add>
          <keep-list v-if="notesToShow" :dynamicNotes="notesToShow" 
          @removeNote="removeNote" 
          @editNote="editNote"
          @changeColor="changeColor"
          @togglePin="togglePin"
          @toggleTodo="toggleTodo"
          @sendEmail="sendEmail">
          </keep-list>
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
                        .then(notes => {
                              notes.sort((a, b) => {
                                    return b.isPinned - a.isPinned
                              })
                              return this.dynamicNotes = notes
                        });
            },
            removeNote(note) {
                  Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              keepService.removeNote(note.id)
                                    .then(res => this.loadsNotes());
                              Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                              )
                        }
                  })
            },
            addNewNote(newNote) {
                  console.log('adding new note', newNote)
                  switch (newNote.noteType) {
                        case 'NoteTxt':
                              const newTxtNote = keepService.getEmptyNoteTxt()
                              newTxtNote.info.title = newNote.title;
                              newTxtNote.info.txt = newNote.content;
                              newTxtNote.style.backgroundColor = newNote.color;
                              console.log('the new txt obj', newTxtNote);
                              keepService.addNote(newTxtNote)
                                    .then(res => this.loadsNotes())
                              break;
                        case 'NoteImg':
                              const newImgNote = keepService.getEmptyNoteImg();
                              newImgNote.info.title = newNote.title;
                              newImgNote.info.url = newNote.imgUrl;
                              newImgNote.style.backgroundColor = newNote.color;
                              keepService.addNote(newImgNote)
                                    .then(res => this.loadsNotes())
                              break;
                        case 'NoteVideo':
                              const newVideoNote = keepService.getEmptyNoteVideo();
                              newVideoNote.info.title = newNote.title;
                              newVideoNote.info.url = newNote.videoUrl;
                              newVideoNote.style.backgroundColor = newNote.color;
                              keepService.addNote(newVideoNote)
                                    .then(res => this.loadsNotes())
                              break;
                        case 'NoteTodos':
                              const newTodosNote = keepService.getEmptyNoteTodos();
                              newTodosNote.info.title = newNote.title;
                              newTodosNote.style.backgroundColor = newNote.color;
                              let todosArr = newNote.todos.split(';')
                              console.log(todosArr);
                              todosArr.forEach(todo => {
                                    newTodosNote.info.todos.push(
                                          { txt: todo, doneAt: new Date(), isDone: false }
                                    )
                              });
                              console.log(newTodosNote);
                              keepService.addNote(newTodosNote)
                                    .then(res => this.loadsNotes())
                              break;
                        default:
                              break;
                  }
                  Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                  })
            },
            editNote(note) {
                  //make swall alert with 3 input according to the type
                  console.log('editing note', note);
                  switch (note.type) {
                        case 'NoteTxt':
                              Swal.mixin({
                                    input: 'text',
                                    confirmButtonText: 'Next &rarr;',
                                    showCancelButton: true,
                                    progressSteps: ['1', '2']
                              }).queue([
                                    {
                                          title: 'new title',
                                          text: 'Please set your new title',
                                          inputPlaceholder: note.info.title
                                    },
                                    {
                                          title: 'new text',
                                          text: 'Please set your new Text',
                                          inputPlaceholder: note.info.txt
                                    }
                              ]).then((result) => {
                                    if (result.value) {
                                          note.info.title = result.value[0];
                                          note.info.txt = result.value[1];
                                          keepService.editNote(note)
                                                .then(res => this.loadsNotes())
                                          Swal.fire({
                                                title: 'Update done!',
                                                confirmButtonText: 'Ok!'
                                          })
                                    }
                              })
                              break;
                        case 'NoteImg':
                              Swal.mixin({
                                    input: 'text',
                                    confirmButtonText: 'Next &rarr;',
                                    showCancelButton: true,
                                    progressSteps: ['1', '2']
                              }).queue([
                                    {
                                          title: 'new title',
                                          text: 'Please set your new title',
                                          inputPlaceholder: note.info.title
                                    },
                                    {
                                          title: 'new image url',
                                          text: 'Please set your new Image Url',
                                          inputPlaceholder: note.info.url
                                    }
                              ]).then((result) => {
                                    if (result.value) {
                                          note.info.title = result.value[0];
                                          note.info.url = result.value[1];
                                          keepService.editNote(note)
                                                .then(res => this.loadsNotes())
                                          Swal.fire({
                                                title: 'Update done!',
                                                confirmButtonText: 'Ok!'
                                          })
                                    }
                              })
                              break;
                        case 'NoteVideo':
                              Swal.mixin({
                                    input: 'text',
                                    confirmButtonText: 'Next &rarr;',
                                    showCancelButton: true,
                                    progressSteps: ['1', '2']
                              }).queue([
                                    {
                                          title: 'new title',
                                          text: 'Please set your new title',
                                          inputPlaceholder: note.info.title
                                    },
                                    {
                                          title: 'new Video url',
                                          text: 'Please set your new Video Url',
                                          inputPlaceholder: note.info.url
                                    }
                              ]).then((result) => {
                                    if (result.value) {
                                          note.info.title = result.value[0];
                                          note.info.url = result.value[1];
                                          keepService.editNote(note)
                                                .then(res => this.loadsNotes())
                                          Swal.fire({
                                                title: 'Update done!',
                                                confirmButtonText: 'Ok!'
                                          })
                                    }
                              })
                              break;
                        case 'NoteTodos':
                              Swal.mixin({
                                    input: 'text',
                                    confirmButtonText: 'Next &rarr;',
                                    showCancelButton: true,
                                    progressSteps: ['1', '2']
                              }).queue([
                                    {
                                          title: 'new title',
                                          text: 'Please set your new title',
                                          inputPlaceholder: note.info.title
                                    },
                                    {
                                          title: 'new todos',
                                          text: 'Please set your todos seperate by ;',
                                          inputPlaceholder: JSON.stringify(note.info.todos)
                                    }
                              ]).then((result) => {
                                    if (result.value) {
                                          note.info.title = result.value[0];
                                          let todosArr = result.value[1].split(';');
                                          note.info.todos = [];
                                          todosArr.forEach(todo => {
                                                note.info.todos.push(
                                                      { txt: todo, doneAt: new Date(), isDone: false }
                                                )
                                          });
                                          keepService.editNote(note)
                                                .then(res => this.loadsNotes())
                                          Swal.fire({
                                                title: 'Update done!',
                                                confirmButtonText: 'Ok!'
                                          })
                                    }
                              })
                              break;
                        default:
                              break;
                  }
            },
            changeColor(note, color) {
                  console.log('get color', note, color)
                  keepService.changeColor(note, color)
                        .then(res => console.log('color update'))

            },
            setFilter(filterValues) {
                  this.filterBy = filterValues;
            },
            togglePin(noteToToggle) {
                  noteToToggle.isPinned = !noteToToggle.isPinned
                  keepService.editNote(noteToToggle)
                        .then(res => this.loadsNotes())
            },
            toggleTodo(dynamicNote, idx) {
                  dynamicNote.info.todos[idx].isDone = !dynamicNote.info.todos[idx].isDone
                  if (dynamicNote.info.todos[idx].isDone === true) {
                        dynamicNote.info.todos[idx].doneAt = new Date();
                  } else {
                        dynamicNote.info.todos[idx].doneAt = null;
                  }
                  keepService.editNote(dynamicNote)
                        .then(res => this.loadsNotes())
            },
            sendEmail(note) {
                  console.log('getting note to send', note);
                  switch (note.type) {

                        case 'NoteTodos':
                              this.$router.replace({ name: 'email', query: { title: note.info.title, txt: JSON.stringify(note.info.todos) } })
                              break;

                        case 'NoteImg':
                              this.$router.replace({ name: 'email', query: { title: note.info.title, txt: note.info.url } })
                              break;

                        case 'NoteVideo':
                              this.$router.replace({ name: 'email', query: { title: note.info.title, txt: note.info.url } })
                              break;

                        case 'NoteTxt':
                              this.$router.replace({ name: 'email', query: { title: note.info.title, txt: note.info.txt } })
                              break;

                        default:
                              break;
                  }

            }
      },
      computed: {
            notesToShow() {
                  if (!this.filterBy) return this.dynamicNotes
                  const searchStr = this.filterBy.name.toLowerCase();
                  const notesForDisplay = this.dynamicNotes.filter(notes => {
                        return notes.info.title.toLowerCase().includes(searchStr)
                  })
                  return notesForDisplay;
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


