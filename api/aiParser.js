export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { blueprint, script } = req.body;

  const parsedScene = {
    sceneId: Date.now(),
    background: '/assets/backgrounds/studio_room.jpg',
    emotion: 'Neutral',
    message: 'Parsed successfully from AI',
    result: {
      blueprint,
      script,
    },
  };

  return res.status(200).json(parsedScene);
}
