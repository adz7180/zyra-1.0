<template>
  <div class="video-renderer">
    <h2>Render Complete</h2>
    <video
      v-if="videoUrl"
      controls
      :src="videoUrl"
      class="render-video"
    ></video>
    <div v-else class="waiting">
      <div class="frame"></div>
    </div>
    <div class="actions" v-if="videoUrl">
      <button @click="downloadVideo">Download</button>
      <button @click="shareVideo">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoRenderer',
  props: {
    videoUrl: {
      type: String,
      default: '',
    },
  },
  methods: {
    downloadVideo() {
      const link = document.createElement('a');
      link.href = this.videoUrl;
      link.download = 'zyra-video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    shareVideo() {
      navigator.clipboard.writeText(this.videoUrl);
      alert('Video link copied to clipboard!');
    },
  },
};
</script>

<style scoped>
.video-renderer {
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
.render-video {
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
.actions {
  display: flex;
  gap: 15px;
}
button {
  padding: 10px 20px;
  background: #00c853;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}
button:hover {
  background: #009624;
}
</style>
