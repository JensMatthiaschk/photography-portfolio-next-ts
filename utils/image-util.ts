import type { Photo } from "@/types";
import lqip from "lqip-modern";
import type { createApi } from "unsplash-js";

async function getDataUrl(url: string) {

  const imgData = await fetch(url)
  const arrayBufferData = await imgData.arrayBuffer()
  const lqipData = await lqip(Buffer.from(arrayBufferData))
  return lqipData.metadata.dataURIBase64
}

export async function getImages(
  cli: ReturnType<typeof createApi>,
  query: string
): Promise<Photo[]> {
  const mappedPhotos: Photo[] = [];

  const photos = await cli.search.getPhotos({
    query,
  })

  if (photos.type === 'success') {

    const photosArr = photos.response.results.map((photo, index) => ({
      src: photo.urls.full,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description ?? `image-${index}`,
    }));

    const photosArrWithDataUrl: Photo[] = []

    for (const photo of photosArr) {
      const blurDataURL = await getDataUrl(photo.src)
      photosArrWithDataUrl.push({ ...photo, blurDataURL })
    }

    mappedPhotos.push(...photosArrWithDataUrl)
  } else {
    console.error("Could not get photos")
  }

  return mappedPhotos
}
