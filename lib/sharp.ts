import sharp from 'sharp';

export async function getBase64Image(imagePath: string | null) {
  try {
    const buffer = await sharp(imagePath).resize(10).blur().toBuffer();

    const base64Image = buffer.toString('base64');
    return `data:image/jpeg;base64,${base64Image}`;
  } catch (err) {
    console.error(err);
    return null;
  }
}
