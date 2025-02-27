export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export async function getImgLink(relPath) {
  const imagePath = `${import.meta.env.VITE_IMAGE_PATH}/${relPath}`;
  const imageModule = await import(imagePath);

  return imageModule.default;
}
