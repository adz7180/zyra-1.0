<template>
  <div class="admin">
    <Navbar />
    <div class="container">
      <h1>Admin Dashboard</h1>
      <p>Manage users, subscriptions, and platform content.</p>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Admin',
  components: { Navbar },
};
</script>

<style scoped>
.admin {
  width: 100%;
  min-height: 100vh;
  background: #111;
  color: white;
}
.container {
  padding: 100px 50px 50px;
}
h1 {
  font-size: 3rem;
}
</style>
