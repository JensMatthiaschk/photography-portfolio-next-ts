import type { Photo } from '@/types';
import LightGalleryComponent from 'lightgallery/react';
import { LightGallery } from 'lightgallery/lightgallery';
import { useRef } from "react";
import Masonry from "react-masonry-css";
import Image from 'next/image';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


type GalleryProps = {
    photos: Photo[];
}

export function Gallery({ photos }: GalleryProps) {

    const lightboxRef = useRef<LightGallery | null>(null)
    return (
        <>
            <Masonry breakpointCols={2} className="flex gap-4">
                {photos.map((photo, index) =>
                    <div className="relative">
                        < Image
                            key={photo.src}
                            src={photo.src}
                            width={photo.width}
                            height={photo.height}
                            alt={photo.alt}
                            className="mb-4"
                            placeholder='blur'
                            blurDataURL={photo.blurDataURL}
                        ></Image>
                        <div className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer" onClick={() => { lightboxRef.current?.openGallery(index) }}></div>
                    </div>
                )}
            </Masonry>
            <LightGalleryComponent
                onInit={(ref) => {
                    if (ref) {
                        lightboxRef.current = ref.instance;
                    }
                }
                }
                speed={500}
                download={false}
                dynamic
                dynamicEl={photos.map((photo) => ({
                    src: photo.src,
                    thumb: photo.thumb
                }))
                }
                plugins={[lgThumbnail, lgZoom]}
            >

            </LightGalleryComponent>
        </>
    )
}