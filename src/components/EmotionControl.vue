<template>
  <div class="emotion-control">
    <h2>Select Emotion</h2>
    <select v-model="selectedEmotion">
      <option v-for="emotion in emotions" :key="emotion" :value="emotion">
        {{ emotion }}
      </option>
    </select>
    <button @click="applyEmotion">Apply Emotion</button>
  </div>
</template>

<script>
export default {
  name: 'EmotionControl',
  data() {
    return {
      emotions: [
        'Neutral',
        'Happy',
        'Excited',
        'Angry',
        'Sad',
        'Persuasive',
        'Surprised',
        'Confident',
      ],
      selectedEmotion: 'Neutral',
    };
  },
  methods: {
    applyEmotion() {
      this.$emit('emotion-selected', this.selectedEmotion);
    },
  },
};
</script>

<style scoped>
.emotion-control {
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
