

export default {
  name: 'note-img',
  props: ['dynamicNote'],
  template: `
              <section class="note-img">
                  <img   src="./img/imageIcon.png" alt="" width=25>
                  <hr class="article-icon" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
                  
                  <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                  <img  :src="dynamicNote.info.url" alt="this is image component" class="img-keep">

                  <hr class="hr-article" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
              </section>
              `,
  computed: {

  }

}