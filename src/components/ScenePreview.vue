<template>
  <div class="scene-preview">
    <h2>Scene Preview</h2>
    <video
      v-if="sceneUrl"
      controls
      :src="sceneUrl"
      class="preview-video"
    ></video>
    <div v-else class="waiting">
      <div class="frame"></div>
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
.waiting {
  width: 100%;
  height: 500px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
}
.frame {
  width: 100%;
  height: 100%;
}
</style>
