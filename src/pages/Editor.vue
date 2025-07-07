<template>
  <div class="editor">
    <Navbar />
    <div class="editor-container">
      <AvatarRenderer @avatar-selected="setAvatar"/>
      <BackgroundSelector @background-selected="setBackground" @auto-background="autoBackground"/>
      <EmotionControl @emotion-selected="setEmotion"/>
      <ScriptInput @script-submitted="handleScript"/>
      <ScenePreview :sceneUrl="sceneUrl"/>
      <VideoRenderer :videoUrl="videoUrl"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AvatarRenderer from '@/components/AvatarRenderer.vue';
import BackgroundSelector from '@/components/BackgroundSelector.vue';
import EmotionControl from '@/components/EmotionControl.vue';
import ScriptInput from '@/components/ScriptInput.vue';
import ScenePreview from '@/components/ScenePreview.vue';
import VideoRenderer from '@/components/VideoRenderer.vue';

export default {
  name: 'Editor',
  components: {
    Navbar,
    AvatarRenderer,
    BackgroundSelector,
    EmotionControl,
    ScriptInput,
    ScenePreview,
    VideoRenderer,
  },
  data() {
    return {
      avatar: '',
      background: '',
      emotion: '',
      script: '',
      sceneUrl: '',
      videoUrl: '',
    };
  },
  methods: {
    setAvatar(val) {
      this.avatar = val;
    },
    setBackground(val) {
      this.background = val;
    },
    autoBackground() {
      this.background = '/assets/backgrounds/studio_room.jpg';
    },
    setEmotion(val) {
      this.emotion = val;
    },
    handleScript(data) {
      this.script = data.script;
      if (data.autoBackground) this.autoBackground();
      if (data.autoEmotion) this.emotion = 'Neutral';
      this.sceneUrl = '/generated/scene.mp4';
      this.videoUrl = '/generated/final.mp4';
    },
  },
};
</script>

<style scoped>
.editor-container {
  padding: 120px 30px 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
}
</style>
