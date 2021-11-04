<template>
  <a href="javascript:;" @click="login">登录1</a><br/>
  {{$store.state.home.session}}<br/>
  <a href="javascript:;" @click="login2">登录2</a><br/>
  {{$store.state.session}}<br/>

  <a href="javascript:;" @click="forwad1">跳转111</a><br/>

  <a href="javascript:;" @click="forwad2">跳转2</a><br/>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
  },
  methods:{
    login(){
      // this.$store.dispatch("home/login")
      // this.$zrzb.toast("哈哈哈")
      this.$zrzb.alertTips.loading("处理中...")

    },
    login2(){
        this.$zrzb.dialog.open({
            title:"提示",
            html:"哈哈哈",
            footer:{
                okText:"确定"
            }
            
        })
        // this.$zrzb.alertTips.hide()
      // this.$store.dispatch("login")
      // console.log(this.$store.state,this)
    },
    forwad1(){
        this.$router.push("/session1")
    },
    forwad2(){
        this.$router.push("/session2")
    }
  }
}
</script>

<style lang="scss">
#app {
  color: red;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transition: all linear 0.1s;
}
</style>
