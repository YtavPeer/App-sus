

export default {
  name: 'note-img',
  props: ['dynamicNote'],
  template: `
              <section class="note-img">
    
                <h1> this is img component</h1>
                <img :src="dynamicNote.info.url" alt="this is image component">
    
              </section>
              `,
  computed: {

  }

}