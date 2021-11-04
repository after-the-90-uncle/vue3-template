<template>
  {{$store.state.home.session}}<br/>
1
  {{$store.state.session}}---
  <a>ddd</a>
</template>

<script>

export default {
  name: 'Session1',
  components: {

  },
  mounted(){
    console.log(this.$router)
  }
 
}
</script>

