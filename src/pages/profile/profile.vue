<template>
  <div>
    <input type="username" placeholder="请输入用户名" v-model="username">
    <br>
    <br>
    <input type="password" placeholder="请输入密码" v-model="password">
    <br>
    <br>
    <!-- <router-link to='/api/profile/singup' tag="button">注册</router-link>
    <router-link to='/profile/singup' tag="button">登录</router-link> -->
    <button @click='signup'>注册</button>
    <button @click='signin'>登录</button>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signup() {
      let username = this.username;
      let password = this.password;
      
      axios
        .post("/api/user/signup", {
          username: username,
          password: password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    signin() {
      let username = this.username;
      let password = this.password;
      
      axios
        .post("/api/user/signin", {
          username: username,
          password: password
        })
        .then(function(response) {
          //if/* (response.data.data.ret === true){ */
            console.log(response)
            //this.$router.push('/home/shouye/today')
          
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="stylus" scoped>
button {
  margin-left: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background: #cccccc;
}

input {
  margin-left: 0.3rem;
  margin-top: 0.1rem;
}
</style>
