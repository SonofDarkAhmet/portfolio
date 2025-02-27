export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export async function getImgLink(relPath) {
  if (import.meta.env.MODE === "production") {
    return fetch(import.meta.env.VITE_IMAGE_PATH_PROD + relPath.prod).then(
      (res) => res.url
    );
  } else {
    const imageModule = await import(
      `${import.meta.env.VITE_IMAGE_PATH_LOCAL}/${relPath.local}`
    );

    return imageModule.default;
  }
}
