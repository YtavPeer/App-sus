export default {
    name: 'note-video',
    props: ['dynamicNote'],
    template: `
              <section class="note-video">
                    <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                     <video width="100%" height="180" controls>
                        <source :src="dynamicNote.info.url" type="video/mp4">
                        <source :src="dynamicNote.info.url" type="video/ogg">
                         Your browser does not support the video tag.
                    </video>
                         <!-- <iframe width="100%" height="315"
                              :src="dynamicNote.info.url">
                              </iframe> -->
              </section>
              `,
    computed: {

    }

}
