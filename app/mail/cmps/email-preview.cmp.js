import longText from './long-text.cmp.js';

export default {
    props: ['email'],
    template: `
    <section class="email-preview flex center-align space-between" @mouseover="showIcons" @mouseleave="hideIcons" :class="markRead">
        <h1>{{email.nickname}}</h1>
        <div class="email-preview-content">
            <h1 class="email-preview-title">{{email.subject}} - </h1>
            <long-text :txt="email.body"/>
        </div>
        <!-- <router-link class="detail-preview" :to="'/email/'+email.id">Details</router-link> -->
        <div>{{timeFromDate}}</div>
        <div class="email-preview-icons" :class="iconsState">
            <!-- <button @click="replay">Replay</button> -->
            <!-- <button @click="star">Star</button> -->
            <!-- <button @click="deleteEmail">Delete</button> -->
            <img src="../../img/delete2.png" alt="" width="25" @click="deleteEmail">
            <img :src="imgStarSrc" alt="" width="25"  @click="star">
            <img src="../../img/replay.png" alt="" width="25"  @click="replay">
            <img :src="imgCheckSrc" alt="" width="25"  @click="markAsRead(email)">
            
            <!-- <button @click="markAsRead(email)">Mark As Read</button> -->
        </div>

    </section>
    `,
    data() {
        return {
            hover:false
            // isRead: this.email.isRead
        }
    },
    methods: {
        replay() {
            this.$emit('replay', this.email)
        },
        star() {
            this.$emit('star', this.email)
        },
        deleteEmail() {
            this.$emit('delete', this.email.id)
        },
        markAsRead(email) {
            this.$emit('mark-as-read', email)
        },
        showIcons() {
            this.hover = true
            console.log(this.hover)
        },
        hideIcons() {
            this.hover = false
        }
    },
    computed: {
        markRead() {
            return {
                'read': this.email.isRead
            }
        },
        timeFromDate() {
            const date = new Date(this.email.sentAt)
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        iconsState() {
            return {
                'email-preview-icons-show': this.hover
            }
        },
        imgStarSrc() {
            return this.email.isStarred ? '../../img/star.png' : '../../img/star-empty.png'
        },
        imgCheckSrc() {
            console.log(this.email)
            return this.email.isRead ? '../../img/checked (1).png' : '../../img/checked.png'
        }
    },
    components: {
        longText
    }
}