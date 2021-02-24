

export default {
  name: 'note-img',
  props: ['dynamicNote'],
  template: `
              <section class="note-img">
    
                <h2>{{dynamicNote.info.title}}</h2>
                <img :src="dynamicNote.info.url" alt="this is image component">
    
              </section>
              `,
  computed: {

  }

}