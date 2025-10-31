import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const InstagramFeed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your Instagram posts URLs - add more here
  const instagramPosts = [
    "https://www.instagram.com/reel/DPt-4Qmgnpe/",
    "https://www.instagram.com/p/DPjskrIAkZH/",
    "https://www.instagram.com/p/DPcFPoNgkOn/",
    "https://www.instagram.com/p/DPWix4ughWV/",
    "https://www.instagram.com/p/DOblay5gnGW/"
  ];

  // Calculate how many posts to show at once based on screen size
  const [postsPerView, setPostsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPostsPerView(1); // Mobile: 1 post
      } else if (window.innerWidth < 1024) {
        setPostsPerView(3); // Tablet: 3 posts
      } else {
        setPostsPerView(4); // Desktop: 4 posts
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max slide position (shows one more post each time)
  const maxSlide = Math.max(0, instagramPosts.length - postsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [maxSlide]);

  return (
    <section className="py-16 bg-primary/30">
      <div className="w-full px-8 md:px-16 lg:px-24">

        {/* Instagram Carousel - One Post at a Time */}
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / postsPerView)}%)`
              }}
            >
              {instagramPosts.map((postUrl, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / postsPerView}%` }}>
                  <div className="w-full flex justify-center">
                    <div style={{ transform: 'scale(0.9)', transformOrigin: 'center' }}>
                      <InstagramEmbed
                        url={postUrl}
                        width={320}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
