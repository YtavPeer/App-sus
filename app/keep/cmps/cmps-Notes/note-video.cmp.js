export default {
     name: 'note-video',
     props: ['dynamicNote'],
     template: `
              <section class="note-video">
              <img  src="./img/videoIcon.png" alt="" width=25>
              <hr class="article-icon" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
                    <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                     <video class="keep-video" width="100%" height="180" controls>
                        <source :src="dynamicNote.info.url" type="video/mp4">
                        <source :src="dynamicNote.info.url" type="video/ogg">
                         Your browser does not support the video tag.
                    </video>
                    <hr class="hr-article" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
                         <!-- <iframe width="100%" height="315"
                              :src="dynamicNote.info.url">
                              </iframe> -->
              </section>
              `,
     computed: {

     }

}
