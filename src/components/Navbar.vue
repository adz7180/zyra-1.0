<template>
  <nav class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img src="/assets/logos/zyra-logo.png" alt="Zyra Logo" />
      <span>Zyra</span>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/editor">Editor</router-link>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo img {
  width: 40px;
  height: 40px;
}
.logo span {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
.links {
  display: flex;
  gap: 25px;
}
a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}
a:hover {
  color: #00c853;
}
</style>
