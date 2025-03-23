import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { AmenityCard } from '../components/home/amenity-card';
import { Leaf, Utensils, Wifi, Coffee } from 'lucide-react';

const amenities = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices and minimal environmental impact',
  },
  {
    icon: Utensils,
    title: 'Gourmet Dining',
    description: 'Fresh, local ingredients prepared by expert chefs',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi',
    description: 'Stay connected with high-speed internet',
  },
  {
    icon: Coffee,
    title: 'Premium Service',
    description: '24/7 concierge and personalized attention',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center text-white">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Wild Earth Jungle Camp
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience luxury in the heart of nature
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Welcome to Paradise</h2>
              <p className="text-lg mb-6">
                Nestled in the heart of pristine wilderness, Wild Earth Jungle Camp offers an unparalleled
                blend of luxury and nature. Our eco-friendly resort provides an intimate connection with
                the wild while ensuring world-class comfort and service.
              </p>
              <p className="text-lg mb-8">
                Whether you're seeking adventure, relaxation, or a bit of both, our experienced staff
                and modern amenities ensure an unforgettable stay.
              </p>
              <Link href="/gallery">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Explore More
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
                alt="Luxury tent in nature"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="section-title text-center">Our Amenities</h2>
          <p className="section-subtitle text-center">
            Experience comfort in the wilderness with our premium amenities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Locate us Here</h2>
              <p className="text-lg mb-6">
              Whether you're looking for a peaceful retreat or an adventure-filled vacation, our campsite has something for everyone. We can't wait to have you join us and experience all that the backwaters have to offer.
              </p>
              <p className="text-lg mb-8">
                Nestled in the heart of pristine wilderness, Wild Earth Jungle Camp offers an unparalleled
                blend of luxury and nature. Our eco-friendly resort provides an intimate connection with
                the wild while ensuring world-class comfort and service.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="rounded-2xl z-10 relative overflow-hidden card-border">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.9952042559709!2d76.531856!3d12.452276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7f44a2414d33%3A0x8570e5b538e44c12!2sWild%20Earth%20Jungle%20Camp!5e0!3m2!1sen!2sus!4v1742757630526!5m2!1sen!2sus" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='z-10 relative'
            />
          </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for an Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of luxury and nature.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}