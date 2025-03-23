'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryImage } from '../../types/gallery';
import { ImageLightbox } from './image-lightbox';

interface ImageGridProps {
  images: GalleryImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage !== null && (
        <ImageLightbox
          image={images[selectedImage]}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}