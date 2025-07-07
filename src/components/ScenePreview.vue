<template>
  <div class="scene-preview">
    <h2>Scene Preview</h2>
    <video
      v-if="sceneUrl"
      controls
      :src="sceneUrl"
      class="preview-video"
    ></video>
    <div v-else class="placeholder">
      <p>No scene generated yet. Enter a script to get started.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScenePreview',
  props: {
    sceneUrl: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.scene-preview {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 20px;
}
h2 {
  margin: 0;
  color: white;
}
.preview-video {
  width: 100%;
  max-height: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  text-align: center;
}
</style>
