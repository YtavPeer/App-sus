export default {
    props: ['txt'],
    template: `
    <section>
        <p>{{txtToShow}}</p>
    </section>
    `,
    computed: {
        txtToShow() {
            if (this.txt.length < 40) return this.txt
            return this.txt.substring(0, 40) + '...'
        }
    }

}

