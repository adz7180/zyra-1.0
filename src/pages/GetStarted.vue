<template>
  <div class="get-started">
    <Navbar />
    <div class="container">
      <h1>Choose Your Mode</h1>
      <div class="cards">
        <div class="card" @click="$router.push('/editor')">
          <h2>Editor</h2>
          <p>Build custom scenes with avatars, backgrounds, and voice sync.</p>
        </div>
        <div class="card" @click="$router.push('/login')">
          <h2>Account</h2>
          <p>Access your videos, subscriptions, and account settings.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'GetStarted',
  components: { Navbar },
};
</script>

<style scoped>
.get-started {
  width: 100%;
  height: 100vh;
  background: url('/assets/backgrounds/urban_city.jpg') center/cover no-repeat;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  backdrop-filter: blur(5px);
}
h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 40px;
}
.cards {
  display: flex;
  gap: 30px;
}
.card {
  background: rgba(255, 255, 255, 0.08);
  padding: 30px;
  border-radius: 15px;
  cursor: pointer;
  width: 250px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, background 0.2s;
}
.card:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.15);
}
h2 {
  color: white;
}
p {
  color: rgba(255, 255, 255, 0.8);
}
</style>
