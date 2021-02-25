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
    </section>
    `,
    computed: {
        barValue() {
            return { 
                width: this.percentages + '%',
                'border-bottom-right-radius': Math.floor(this.percentages) === 100 ? 10 + 'px' : 0 ,
                'border-top-right-radius':  Math.floor(this.percentages) ? 10 + 'px' : 0 ,
            };
        },
        percentagesToDisplay() {
            return Math.floor(this.percentages) + '%'
        }
    }
}
