
export default {
      template: `
      <section class="keep-add">
                  <form class="create-note" v-on:submit.prevent="createNote()">
                           <!-- <img onclick="onClickStrokeColorPallete()" class="icon changeStrokeColor"
                                    src="./ICONS/paint-board-and-brush.png" alt=""> -->
                              <div class="mainNoteContainer">
                                 <input class="takeNoteInput" ref="mainInput" name="title" @click.prevent="openRelevanteInput" v-model="newNote.title" placeholder="Take a note..."/>
                                 <div class="btn-container">
                                    <img class="noteTypeIcon" @click="changeType('NoteTxt')" src="../../img/texticon.png" alt="" width=20 />
                                    <img class="noteTypeIcon" @click="changeType('NoteTodos')" src="../../img/list.png" alt="" width=20 />
                                    <img class="noteTypeIcon" @click="changeType('NoteImg')" src="../../img/imageicon.png" alt="" width=20 />
                                    <img class="noteTypeIcon" @click="changeType('NoteVideo')" src="../../img/videoicon.png" alt="" width=20 />

                                          <img class="noteTypeIcon" @click="clickChangeColor"  src="../../img/color-wheel.png" alt="" width=20>
                                          <input class="colorpickerer" @change="colorChanged"  ref="colorPicker"  :style="{visibility: isTakeColor ? 'visible' : 'hidden'}" type="color" v-model="newNote.color"  tabindex=-1 >
                                 </div>
                              </div>
                  
                             <section class="specificContainer" v-show="isTakeNote">
                                   <div class="section">
                                   <textarea class="specificInput" ref="contentText" v-show="newNote.noteType === 'NoteTxt'" name="NoteTxt" v-model="newNote.content" placeholder="Take a note..." rows="2">
                                   </textarea>
                                   <input class="specificInput" ref="NoteImg" v-if="newNote.noteType === 'NoteImg'" name="NoteImg" v-model="newNote.imgUrl" placeholder="Enter Image Url"/>
                                   <input class="specificInput" ref="NoteVideo" v-if="newNote.noteType === 'NoteVideo'" name="NoteVideo" v-model="newNote.videoUrl" placeholder="Enter Video Url"/>
                                   <input class="specificInput" ref="NoteTodos" v-if="newNote.noteType === 'NoteTodos'" name="NoteTodos" v-model="newNote.todos" placeholder="Enter Todos seperate by ; "/>
                                </div>
                                <button class="addNoteBtn" type="submit">Add</button>
                              </section> 
                  </form>
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
                  isTakeColor: false,
                  isFirstMainClick: false,
            }
      },
      methods: {
            createNote() {
                  console.log('emit data to father');
                  if (this.newNote.content === '' || this.newNote.content === null) {
                        Swal.fire('You cant add note without content')
                        return false;
                  }
                  if (this.newNote.title === '' || this.newNote.title === null || this.newNote.title === 'title') {
                        Swal.fire('Please add also a title')
                        return false;
                  }
                  this.$emit('addNote', this.newNote);
                  this.newNote.noteType = 'NoteTxt';
                  this.newNote.title = null;
                  this.newNote.content = null;
                  this.newNote.imgUrl = null;
                  this.newNote.videoUrl = null;
                  this.newNote.todos = null;
                  this.newNote.color = null;
                  this.isFirstMainClick = false;
                  this.isTakeNote = false;
            },
            changeType(noteType) {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';
                  this.newNote.noteType = noteType;
                  this.$refs.noteType.focus();

                  this.nextTick()
                        .then(() => {
                              return this.focusInput(noteType)
                        })
            },
            openRelevanteInput() {
                  this.isTakeNote = true;
                  this.newNote.title = 'title';

                  if (!this.isFirstMainClick) {
                        this.$refs.mainInput.blur()
                  }

                  console.log('data if undefind or not', this.$refs.contentText);
                  if (!this.isFirstMainClick) {
                        setTimeout(() => {
                              this.$refs.contentText.focus();
                              this.isFirstMainClick = true
                        }, 200)
                  }
            },
            focusInput(noteType) {
                  console.log('this refs', this.$refs.content)
                  this.$refs.noteType.focus()
            },
            clickChangeColor() {
                  this.$refs.colorPicker.style.display = 'block';
                  this.$refs.colorPicker.focus()
                  this.$refs.colorPicker.value = "#3333ee";
                  this.$refs.colorPicker.click();
            },
            colorChanged() {
                  swal.fire('color Change successfully')
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

            //handle getting email to keep
            if (this.$route.query.title) {
                  this.newNote.title = this.$route.query.title;
                  this.isTakeNote = true;
            }
            if (this.$route.query.txt) {
                  this.newNote.content = this.$route.query.txt;
                  this.isTakeNote = true;
            }
      }
}
