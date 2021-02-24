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
          <keep-list v-if="dynamicNotes" :dynamicNotes="dynamicNotes" @removeNote="removeNote" @editNote="editNote"></keep-list>
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
                              newTodosNote.info.todos = newNote.todos.split(';');
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
                  switch (note.noteType) {
                        case 'NoteTxt':
                              // const newTxtNote = keepService.getEmptyNoteTxt()
                              // newTxtNote.info.title = newNote.title;
                              // newTxtNote.info.txt = newNote.content;
                              // newTxtNote.style.backgroundColor = newNote.color;
                              // console.log('the new txt obj', newTxtNote);
                              // keepService.addNote(newTxtNote)
                              //       .then(res => this.loadsNotes())
                              break;
                        case 'NoteImg':
                              newImgNote.info.title = newNote.title;
                              newImgNote.info.url = newNote.imgUrl;
                              newImgNote.style.backgroundColor = newNote.color;
                              keepService.addNote(newImgNote)
                                    .then(res => this.loadsNotes())
                              break;
                        case 'NoteVideo':
                              // const newVideoNote = keepService.getEmptyNoteVideo();
                              // newVideoNote.info.title = newNote.title;
                              // newVideoNote.info.url = newNote.videoUrl;
                              // newVideoNote.style.backgroundColor = newNote.color;
                              // keepService.addNote(newVideoNote)
                              //       .then(res => this.loadsNotes())
                              break;
                        case 'NoteTodos':
                              // const newTodosNote = keepService.getEmptyNoteTodos();
                              // newTodosNote.info.title = newNote.title;
                              // newTodosNote.style.backgroundColor = newNote.color;
                              // newTodosNote.info.todos = newNote.todos.split(';');
                              // console.log(newTodosNote);
                              // keepService.addNote(newTodosNote)
                              //       .then(res => this.loadsNotes())
                              break;
                        default:
                              break;
                  }
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


