<template>
    <router-view />
</template>
<script >
export default {
    async mounted(){
        await this.login();
        this.$store.dispatch("login")

    },
    methods:{
        login(){
            return new Promise((resolve) => {
                let timer = setTimeout(() => {
                    clearTimeout(timer)
                    resolve(true)
                },2000)
            })
        }
    }
}
</script>
<style src="./styles/base.scss" lang="scss"></style>
<style src="./styles/toast.scss" lang="scss"></style>
<style src="./styles/dialog.scss" lang="scss"></style>


