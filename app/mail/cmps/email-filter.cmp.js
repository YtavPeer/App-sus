export default {
    template: `
    <section class="email-filter flex">
        <form @submit.prevent="setFilter">
        <input type="text" name="name" placeholder="Search..." v-model="filterBy.byTxt">
        <select name="readState" id="readState" v-model="filterBy.readState">
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select> 
        <button>Filter</button>
        </form>

        <select @change="setSort" name="sortBy" v-model="sortBy">
                <option value="date">Date</option>
                <option value="subject">Subject</option>
            </select>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTxt: '',
                readState: 'all'
            },
            sortBy: ''
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        },
        setSort() {
            this.$emit('sorted', this.sortBy)
        }
    }
}
