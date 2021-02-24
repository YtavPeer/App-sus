export default {
    template: `
    <section class="email-side-menu">
        <ul class="clean-list">
            <li>
                <!-- <a href="#" class="email-inbox active">Inbox</a> -->
                <router-link to="/email">Inbox</router-link> <!-- STYLE! -->
            </li>
            <li>
                <!-- <a href="#" class="email-send" @click="sentEmails">Sent</a> -->
                <router-link to="/email/sent">Sent</router-link> <!-- STYLE! -->
            </li>
            <li>
                <!-- <a href="#" class="email-starred">Starred</a> -->
                <router-link to="/email/starred">Starred</router-link> <!-- STYLE! -->
            </li>
        </ul>
    </section>
    `,
    methods: {
        sentEmails() {
            this.$emit('sent-emails')
        }
    }
}