export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export async function getImgLink(relPath) {
  if (import.meta.env.MODE === "production") {
    return fetch(
      `${import.meta.env.VITE_IMAGE_PATH_PROD}/${relPath.prod}`
    ).then((res) => res.url);
  }

  const promisedPath = await import(
    `${import.meta.env.VITE_IMAGE_PATH_LOCAL}/${relPath.local}`
  );

  return promisedPath.default;
}
