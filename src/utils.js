export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export async function getImgLink(relPath) {
  const imagePath = await `${import.meta.env.VITE_IMAGE_PATH}/${relPath}`;

  return imagePath;
}
