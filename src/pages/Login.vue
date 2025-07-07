<template>
  <div class="login">
    <Navbar />
    <div class="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Login',
  components: { Navbar },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Login', this.email);
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #0f0f0f;
}
.login-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding-top: 150px;
  gap: 20px;
}
input {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: white;
}
button {
  padding: 12px;
  background: #00c853;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}
button:hover {
  background: #009624;
}
h2 {
  color: white;
  text-align: center;
}
</style>
