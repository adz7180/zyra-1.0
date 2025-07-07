<template>
  <div class="home">
    <Navbar />
    <section class="hero">
      <div class="content">
        <h1>Create Hyper-Realistic AI Videos</h1>
        <p>The most advanced AI platform on the planet. Generate lifelike scenes with avatars, voices, and cinematic environments.</p>
        <div class="buttons">
          <router-link to="/getstarted" class="btn primary">Get Started</router-link>
          <router-link to="/editor" class="btn secondary">Open Editor</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}
.hero {
  width: 100%;
  height: 100vh;
  background: url('/assets/backgrounds/studio_room.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  background: rgba(0,0,0,0.6);
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  max-width: 700px;
}
h1 {
  color: white;
  font-size: 3rem;
}
p {
  color: rgba(255, 255, 255, 0.8);
  margin: 20px 0;
  font-size: 1.2rem;
}
.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.btn {
  padding: 12px 25px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: background 0.2s;
}
.btn.primary {
  background: #00c853;
}
.btn.primary:hover {
  background: #009624;
}
.btn.secondary {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
}
.btn.secondary:hover {
  background: rgba(255,255,255,0.2);
}
</style>
