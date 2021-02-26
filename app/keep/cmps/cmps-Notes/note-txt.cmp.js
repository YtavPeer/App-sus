

export default {
  name: 'note-txt-cmp',
  props: ['dynamicNote'],
  template: `
          <section class="note-txt">
          <img class="noteTypeIcon"  src="../../img/texticon.png" alt="" width=25>
             <hr class="article-icon" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />

             <h2 class="note-title">{{dynamicNote.info.title}}</h2>
             <h4>{{dynamicNote.info.txt}}</h4>

             <hr class="hr-article" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
          </section>
          `,
  computed: {

  }

}
