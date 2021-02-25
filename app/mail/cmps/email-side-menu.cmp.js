export default {
    template: `
    <section class="email-side-menu">
        <ul class="clean-list">
            <li v-for="(category, idx) in categories">
            <router-link :to="category.route" :class="{current: idx === active}" @click.native="changeActive(idx)">{{category.name}}</router-link> <!-- STYLE! -->
            </li>
<!-- 
            <li>
                <router-link to="/email">Inbox</router-link> 
            </li>
            <li>
                <router-link to="/email/sent">Sent</router-link> 
            </li>
            <li>
                <router-link to="/email/starred">Starred</router-link> 
            </li> -->

                            <!-- <a href="#" class="email-starred">Starred</a> -->
                <!-- <a href="#" class="email-send" @click="sentEmails">Sent</a> -->
                <!-- <a href="#" class="email-inbox active">Inbox</a> -->

        </ul>
    </section>
    `,
    data() {
        return {
            active: 0,
            categories: [{ name: 'Inbox', route: '/email' }, { name: 'Sent', route: '/email/sent' }, { name: 'Starred', route: '/email/starred' }]
        }
    },
    methods: {
        sentEmails() {
            this.$emit('sent-emails')
        },
        changeActive(idx) {
            this.active = idx
        }
    },
    computed: {
        activeCategory(idx) {
            return {
                active: idx === this.active
            }
        }
    }
}