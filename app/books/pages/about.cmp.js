
export default {
    template: `
    <section class="about">
    <nav>
        <router-link to="/about/me">About Me</router-link> |
        <router-link to="/about/team">About our Team</router-link>
    </nav>
    <router-view />
    </section>

    `,
}