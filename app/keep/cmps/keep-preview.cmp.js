import NoteTxt from '../cmps/cmps-Notes/note-txt.cmp.js';
import NoteImg from '../cmps/cmps-Notes/note-img.cmp.js';
import NoteTodos from '../cmps/cmps-Notes/note-todos.cmp.js';
import NoteVideo from '../cmps/cmps-Notes/note-video.cmp.js';


export default {
  props: ['dynamicNote'],
  template: `
      <section class="keep-preview"> 
           <component @toggleTodo="toggleTodo" :is="dynamicNote.type" :dynamicNote="dynamicNote"></component>
      </section>
      `,
  methods: {
    toggleTodo(dynamicNote, idx){
      this.$emit('toggleTodo', dynamicNote, idx)
    }
  },
  components: {
    NoteTxt,
    NoteImg,
    NoteTodos,
    NoteVideo,
  }

}
