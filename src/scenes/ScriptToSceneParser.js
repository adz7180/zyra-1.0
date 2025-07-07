export default class ScriptToSceneParser {
  constructor(script) {
    this.script = script;
  }

  parse() {
    const lowerScript = this.script.toLowerCase();

    const detectedBackground = lowerScript.includes('beach')
      ? '/assets/backgrounds/beach.jpg'
      : lowerScript.includes('forest')
      ? '/assets/backgrounds/forest.jpg'
      : lowerScript.includes('space')
      ? '/assets/backgrounds/space.jpg'
      : lowerScript.includes('city')
      ? '/assets/backgrounds/urban_city.jpg'
      : '/assets/backgrounds/studio_room.jpg';

    const detectedEmotion = lowerScript.includes('angry')
      ? 'Angry'
      : lowerScript.includes('happy')
      ? 'Happy'
      : lowerScript.includes('excited')
      ? 'Excited'
      : lowerScript.includes('sad')
      ? 'Sad'
      : 'Neutral';

    return {
      background: detectedBackground,
      emotion: detectedEmotion,
    };
  }
}
