<template>
  <div class="script-input">
    <h2>Enter Your Script</h2>
    <textarea
      v-model="script"
      placeholder="Type your script or prompt here..."
    ></textarea>
    <div class="options">
      <label>
        <input
          type="checkbox"
          v-model="autoBackground"
        />
        Auto Select Background
      </label>
      <label>
        <input
          type="checkbox"
          v-model="autoEmotion"
        />
        Auto Detect Emotion
      </label>
    </div>
    <button @click="submitScript">Generate Scene</button>
  </div>
</template>

<script>
export default {
  name: 'ScriptInput',
  data() {
    return {
      script: '',
      autoBackground: true,
      autoEmotion: true,
    };
  },
  methods: {
    submitScript() {
      this.$emit('script-submitted', {
        script: this.script,
        autoBackground: this.autoBackground,
        autoEmotion: this.autoEmotion,
      });
    },
  },
};
</script>

<style scoped>
.script-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 20px;
}
h2 {
  margin: 0;
  color: white;
}
textarea {
  width: 100%;
  min-height: 150px;
  padding: 15px;
  border-radius: 10px;
  background: #111;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  resize: vertical;
}
.options {
  display: flex;
  gap: 20px;
  align-items: center;
}
label {
  color: white;
  display: flex;
  gap: 8px;
  align-items: center;
}
input[type='checkbox'] {
  transform: scale(1.3);
}
button {
  padding: 10px 20px;
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
