'use client';

import { ImageGrid } from '../../components/gallery/image-grid';
import { galleryImages } from '../../data/gallery-images';

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the beauty and luxury of Wild Earth Jungle Camp
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container">
          <ImageGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
}