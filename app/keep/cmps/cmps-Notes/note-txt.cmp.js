

export default {
  name: 'note-txt-cmp',
  props: ['dynamicNote'],
  template: `
          <section class="note-txt">
             <h2 class="note-title">{{dynamicNote.info.title}}</h2>
             <h4>{{dynamicNote.info.txt}}</h4>
          </section>
          `,
  computed: {

  }

}
