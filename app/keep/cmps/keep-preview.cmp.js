import NoteTxt from '../cmps/note-txt.cmp.js';


export default {
  props: ['dynamicNote'],
  template: `
      <section class="keep-preview">

        <pre>{{dynamicNote}}</pre>
        
        <component :is="dynamicNote.type"></component>

      </section>
      `,
  components: {
    NoteTxt
  }

}
