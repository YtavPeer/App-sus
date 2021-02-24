export default {
    props: ['percentages'],

    //TODO: Transitions on change!!!
    
    template: `
    <section>
        <div class="email-bar">
            <div class="email-bar-value" :style="barValue">
                <div class="perc-email-txt">{{percentagesToDisplay}}</div>
            </div>
        </div>
        <h1>percentage: {{percentages}}</h1>
    </section>
    `,
    computed: {
        barValue() {
            return { width: this.percentages + '%' };
        },
        percentagesToDisplay() {
            return Math.floor(this.percentages) + '%'
        }
    }
}
