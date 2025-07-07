export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { sceneData } = req.body;

  const exportPackage = {
    downloadLinks: {
      mp4: `/downloads/${sceneData.id}.mp4`,
      glb: `/downloads/${sceneData.id}.glb`,
      pdf: `/downloads/${sceneData.id}.pdf`,
    },
    message: 'Export package ready',
  };

  res.status(200).json(exportPackage);
}
