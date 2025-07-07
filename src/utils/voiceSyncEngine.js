export default class VoiceSyncEngine {
  constructor(script, voice) {
    this.script = script;
    this.voice = voice;
  }

  generateVoiceUrl() {
    return `/generated/voice-${Date.now()}.mp3`;
  }

  sync() {
    return {
      voiceUrl: this.generateVoiceUrl(),
      transcript: this.script,
      voice: this.voice,
    };
  }
}
