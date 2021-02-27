export default {
    template: `
    <section class="email-filter flex">
        <form @submit.prevent="setFilter" class="flex form-filter">
            <div class="searchContainer search-container">
                <div class="search-input">
                    <input type="text" name="name" placeholder="Search..." v-model="filterBy.byTxt">
                </div>
                <div class="search-btn">
                    <button>Seach</button>
                </div>
        </div>
        <div class="filter-btn-container flex">
        <select name="readState" id="readState" v-model="filterBy.readState">
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select> 
        <select @change="setSort" name="sortBy" v-model="sortBy">
                <option value="date">Date</option>
                <option value="subject">Subject</option>
        </select>
        <button>Filter</button>
        </div>

    </form>

     
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTxt: '',
                readState: 'all'
            },
            sortBy: 'date'
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
