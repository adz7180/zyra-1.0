<template>
  <div class="avatar-renderer">
    <model-viewer
      :src="currentAvatar"
      alt="Avatar Preview"
      camera-controls
      auto-rotate
      exposure="1"
    ></model-viewer>
    <div class="avatar-controls">
      <label>Select Avatar:</label>
      <select v-model="selectedAvatar">
        <option v-for="avatar in avatars" :key="avatar" :value="avatar">
          {{ formatName(avatar) }}
        </option>
      </select>
      <button @click="applyAvatar">Apply Avatar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarRenderer',
  data() {
    return {
      avatars: [
        '/assets/models/avatar1.glb',
        '/assets/models/avatar2.glb',
        '/assets/models/avatar3.glb',
      ],
      selectedAvatar: '/assets/models/avatar1.glb',
    };
  },
  computed: {
    currentAvatar() {
      return this.selectedAvatar;
    },
  },
  methods: {
    applyAvatar() {
      this.$emit('avatar-selected', this.selectedAvatar);
    },
    formatName(name) {
      return name.split('/').pop().replace('.glb', '').toUpperCase();
    },
  },
};
</script>

<style scoped>
.avatar-renderer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
model-viewer {
  width: 100%;
  height: 500px;
  border-radius: 20px;
}
.avatar-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}
select {
  padding: 10px;
  border-radius: 10px;
  background: #111;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
button {
  padding: 10px 20px;
  background: #007aff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
button:hover {
  background: #0051c7;
}
</style>
