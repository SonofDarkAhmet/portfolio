export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

export async function getImgLink(relPath) {
  let module = null;
  if (import.meta.env.MODE === "production") {
    module = await import(
      `${import.meta.env.VITE_IMAGE_PATH_PROD}/${relPath.prod}`
    );
  } else {
    module = await import(
      `${import.meta.env.VITE_IMAGE_PATH_LOCAL}/${relPath.local}`
    );
  }

  const profileImgPath = module.default;

  return profileImgPath;
}
