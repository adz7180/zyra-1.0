<template>
  <div class="video-renderer">
    <h2>Render Complete</h2>
    <video
      v-if="videoUrl"
      controls
      :src="videoUrl"
      class="render-video"
    ></video>
    <div v-else class="placeholder">
      <p>No video generated yet. Please input a script to create a scene.</p>
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
