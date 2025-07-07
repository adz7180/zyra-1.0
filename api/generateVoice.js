export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { script, voiceId } = req.body;

  const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID_HERE', {
    method: 'POST',
    headers: {
      'xi-api-key': process.env.ELEVEN_LABS_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: script,
      voice_settings: { stability: 0.75, similarity_boost: 0.85 },
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ message: 'Voice API error' });
  }

  const arrayBuffer = await response.arrayBuffer();
  const filename = `voice-${Date.now()}.mp3`;

  // Simulate saving file (in real deployment, stream to cloud storage or file system)
  const voiceUrl = `/generated/${filename}`;

  return res.status(200).json({ voiceUrl });
}
