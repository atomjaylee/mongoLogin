<template lang="html">
  <div class="login">
    <el-input v-model="email" placeholder="place input your email" />
    <el-input v-model="password" placeholder="password" type="password" />
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        this.axios.post('/api/login',{
          email: this.email,
          password: this.password
        }).then(req =>{
          this.$router.push('/list')
        })
      }
    }
  }
</script>

<style lang="scss">
  .login {
    width: 300px;
    padding: 40px 0;
    margin: 0 auto;
    border: 1px solid #ececec;
  }
</style>
