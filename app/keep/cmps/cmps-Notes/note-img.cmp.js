

export default {
  name: 'note-img',
  props: ['dynamicNote'],
  template: `
              <section class="note-img">
    
                <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                  <img height=150px :src="dynamicNote.info.url" alt="this is image component">
              </section>
              `,
  computed: {

  }

}