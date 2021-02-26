export default {
    props: ['txt'],
    template: `
    <section>
        <p>{{txtToShow}}</p>
    </section>
    `,
    computed: {
        txtToShow() {
            if (this.txt.length < 25) return this.txt
            return this.txt.substring(0, 25) + '...'
        }
    }

}

