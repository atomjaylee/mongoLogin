<template lang="html">
  <el-row class="register">
    <el-col :span='4'>邮箱:</el-col>
    <el-col :span='6'>
      <el-input v-model="email" placeholder="输入邮箱" />
    </el-col>
    <el-col :span='4'>密码:</el-col>
    <el-col :span='6'>
      <el-input v-model="password" placeholder="password" />
    </el-col>
    <el-col :span='4'>
      <el-button @click="submit">注册</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      submit(){
        this.axios.post('/api/register',{
          email: this.email,
          password: this.password
        }).then(req =>{
          this.$message({
            message: '注册成功',
            type: 'success'
          })
        }).catch(err =>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  .register {
    width: 600px;
    height: 36px;
    line-height: 36px;
    margin: 0 auto;
  }
</style>
