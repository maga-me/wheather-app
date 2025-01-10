<template>
    <nav class="nav">
        <a href="#!" class="nav__logo">
            <img src="../../assets/images/logo.svg" alt="">
            <h1 class="nav__title">vue weather</h1>
        </a>
        <form action="" class="nav__form" @submit.prevent="getWeather(search), search = ''">
            <img src="../../assets/images/kaplya.svg" alt="" @click="changeTheme">
            <input type="search" placeholder="Search country..." class="nav__form-input" v-model="search">
        </form>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'


export default {
    name: "Nav",
    data() {
        return {
            search: ""
        }
    },
    methods: {
        changeTheme() {
            if (body.classList.contains("light-theme")) {
                body.classList.remove("light-theme")
                body.classList.add("dark-theme")
                localStorage.setItem("theme", "dark-theme")
            } else {
                body.classList.add("light-theme")
                body.classList.remove("dark-theme")
                localStorage.setItem("theme", "light-theme")
            }
        },
        ...mapActions(["getWeather"])
    },
    mounted() {
        if (localStorage.getItem("theme") === "dark-theme") {
            body.classList.remove("light-theme")
            body.classList.add("dark-theme")
        } else {
            body.classList.add("light-theme")
            body.classList.remove("dark-theme")
        }
    },
    // created() {
    //     this.getWeather()
    // }
}

</script>