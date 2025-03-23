import Image from 'next/image';
import { GalleryImage } from '../../types/gallery';

interface ImageLightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <Image
          src={image.src}
          alt={image.title}
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
          <h3 className="text-xl font-bold">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
}