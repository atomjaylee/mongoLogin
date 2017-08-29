<template lang="html">
  <div>
    <div class="list" v-for="item in list">
      {{item.email}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:{}
    }
  },
  mounted(){
    this.axios.get('/api/user').then(req =>{
      this.list = req.data
    })
  }
}
</script>

<style lang="scss">
.list{
  width: 200px;
  height: 100px;
  background: red;
  margin: 0 auto;
  color: #fff;
}
</style>
