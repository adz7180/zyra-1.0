<template>
  <div class="background-selector">
    <h2>Select Background</h2>
    <select v-model="selectedBackground">
      <option v-for="bg in backgrounds" :key="bg" :value="bg">
        {{ formatName(bg) }}
      </option>
    </select>
    <button @click="applyBackground">Apply Background</button>
    <button @click="autoSelect">Auto Select from Script</button>
  </div>
</template>

<script>
export default {
  name: 'BackgroundSelector',
  data() {
    return {
      backgrounds: [
        '/assets/backgrounds/urban_city.jpg',
        '/assets/backgrounds/forest.jpg',
        '/assets/backgrounds/beach.jpg',
        '/assets/backgrounds/space.jpg',
      ],
      selectedBackground: '/assets/backgrounds/urban_city.jpg',
    };
  },
  methods: {
    applyBackground() {
      this.$emit('background-selected', this.selectedBackground);
    },
    autoSelect() {
      this.$emit('auto-background');
    },
    formatName(name) {
      return name
        .split('/')
        .pop()
        .replace('.jpg', '')
        .replace(/_/g, ' ')
        .toUpperCase();
    },
  },
};
</script>

<style scoped>
.background-selector {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
}
h2 {
  margin: 0;
  color: white;
}
select {
  padding: 10px;
  border-radius: 10px;
  background: #111;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
button {
  padding: 10px 15px;
  background: #007aff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}
button:hover {
  background: #0051c7;
}
</style>
