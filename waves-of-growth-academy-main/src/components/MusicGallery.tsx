import { useState } from "react";
import { X, Camera, Calendar, MapPin } from "lucide-react";

// Import images properly for Vite
import chennai1 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/1672091_orig.jpg";
import chennai2 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2064722_orig.jpg";
import chennai3 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2483175_orig.jpg";
import chennai4 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3148071_orig.jpg";
import chennai5 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3811014_orig.jpg";
import chennai6 from "@/assets/attached_assets/david_school/David school of music/Gallery/Chennai/4187790_orig.jpg";
import dharmapuri1 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/1268024_orig.jpg";
import dharmapuri2 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/1561769_orig.jpg";
import dharmapuri3 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/3875055_orig.jpg";
import dharmapuri4 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/563681_orig.jpg";
import dharmapuri5 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/5705688_orig.jpg";
import dharmapuri6 from "@/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/6439732_orig.jpg";

// Salem Images
import salem1 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/1526631_orig.jpg";
import salem2 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/3125306_orig.jpg";
import salem3 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/4235530_orig.jpg";
import salem4 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/5257449_orig.jpg";
import salem5 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/7438078_orig.jpg";
import salem6 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/9045999_orig.jpg";
import salem7 from "@/assets/attached_assets/david_school/David school of music/Gallery/Salem/9087625_orig.jpg";

// Tirunelveli Images
import tirunelveli1 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/1949753_orig.jpg";
import tirunelveli2 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/3634208_orig.jpg";
import tirunelveli3 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/4241119_orig.jpg";
import tirunelveli4 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/521480_orig.jpg";
import tirunelveli5 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/5728971_orig.jpg";
import tirunelveli6 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/7817021_orig.jpg";
import tirunelveli7 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/8282010_orig.jpg";
import tirunelveli8 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/8655805_orig.jpg";
import tirunelveli9 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/9455499_orig.jpg";
import tirunelveli10 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/9514392_orig.jpg";
import tirunelveli11 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/9555601_orig.jpg";
import tirunelveli12 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/9806286_orig.jpg";

// Tuticorin and Tirunelveli April 2019 Images
import tuticorin1 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0007_orig.jpg";
import tuticorin2 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0013_orig.jpg";
import tuticorin3 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0016_orig.jpg";
import tuticorin4 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0023_orig.jpg";
import tuticorin5 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0028_orig.jpg";
import tuticorin6 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0029_orig.jpg";
import tuticorin7 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0033_orig.jpg";
import tuticorin8 from "@/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0036_orig.jpg";

const galleryImages = [
  // Chennai Images
  {
    src: chennai1,
    alt: "Music Class Chennai",
    category: "Chennai",
    date: "2015"
  },
  {
    src: chennai2,
    alt: "Music Training Chennai",
    category: "Chennai",
    date: "2015"
  },
  {
    src: chennai3,
    alt: "Students Performance Chennai",
    category: "Chennai",
    date: "2015"
  },
  {
    src: chennai4,
    alt: "Keyboard Class Chennai",
    category: "Chennai",
    date: "2015"
  },
  {
    src: chennai5,
    alt: "Music Workshop Chennai",
    category: "Chennai",
    date: "2015"
  },
  {
    src: chennai6,
    alt: "Group Session Chennai",
    category: "Chennai",
    date: "2015"
  },
  // Dharmapuri Images
  {
    src: dharmapuri1,
    alt: "Music Class Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  {
    src: dharmapuri2,
    alt: "Training Session Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  {
    src: dharmapuri3,
    alt: "Students Practice Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  {
    src: dharmapuri4,
    alt: "Keyboard Training Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  {
    src: dharmapuri5,
    alt: "Music Workshop Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  {
    src: dharmapuri6,
    alt: "Group Class Dharmapuri",
    category: "Dharmapuri",
    date: "2016"
  },
  // Salem Images
  {
    src: salem1,
    alt: "Music Class Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem2,
    alt: "Training Session Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem3,
    alt: "Students Practice Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem4,
    alt: "Keyboard Training Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem5,
    alt: "Music Workshop Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem6,
    alt: "Group Session Salem",
    category: "Salem",
    date: "2017"
  },
  {
    src: salem7,
    alt: "Performance Salem",
    category: "Salem",
    date: "2017"
  },
  // Tirunelveli Images
  {
    src: tirunelveli1,
    alt: "Music Class Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli2,
    alt: "Training Session Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli3,
    alt: "Students Practice Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli4,
    alt: "Keyboard Training Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli5,
    alt: "Music Workshop Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli6,
    alt: "Group Class Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli7,
    alt: "Performance Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli8,
    alt: "Students Performance Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli9,
    alt: "Music Training Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli10,
    alt: "Workshop Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli11,
    alt: "Class Session Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  {
    src: tirunelveli12,
    alt: "Group Training Tirunelveli",
    category: "Tirunelveli",
    date: "2018"
  },
  // Tuticorin and Tirunelveli April 2019 Images
  {
    src: tuticorin1,
    alt: "Music Training Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin2,
    alt: "Students Practice Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin3,
    alt: "Keyboard Class Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin4,
    alt: "Music Workshop Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin5,
    alt: "Group Session Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin6,
    alt: "Performance Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin7,
    alt: "Training Session Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
  {
    src: tuticorin8,
    alt: "Music Class Tuticorin",
    category: "Tuticorin",
    date: "2019"
  },
];

const categories = ["All", "Chennai", "Dharmapuri", "Salem", "Tirunelveli", "Tuticorin"];

const MusicGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <section className="section-padding bg-section-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Camera className="w-6 h-6 text-primary" />
            <p className="text-sm font-black tracking-[0.3em] uppercase text-primary letter-spacing-wide">Gallery</p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
            Our Musical Journey
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
            Capturing moments of musical excellence and spiritual growth across different locations and years.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-sm mb-1">{image.alt}</p>
                    <div className="flex items-center gap-3 text-xs opacity-80">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {image.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {image.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for {selectedCategory}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[90vh] mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-xl font-semibold mb-2">{selectedImage.alt}</p>
              <div className="flex items-center justify-center gap-4 text-sm opacity-80">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedImage.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedImage.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicGallery;
