export default {
    template: `
    <section class="email-filter">
        <form @submit.prevent="setFilter">
        <label  for="name"> Filter By Text </label>    
        <input type="text" name="name" placeholder="Search..." v-model="filterBy.byTxt">
        <label  for="readState"> Filter By Read State </label>   
        <select name="readState" id="readState" v-model="filterBy.readState">
            <option selected="selected" value="read">Read</option>
            <option value="unread">Unread</option>
        </select> 
        <button>Filter</button>
        </form>

        <div class="email-sort">
            <h2>Sort</h2>
        <select @change="setSort" name="sortBy" v-model="sortBy">
                <option value="date">Date</option>
                <option value="subject">Subject</option>
            </select>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTxt: '',
                readState: 'read'
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
