import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import musicImg from "@/assets/tnpsc-group2.webp";
import vocalImg from "@/assets/vocal-training-new.webp";
import heroBg from "@/assets/hero-bg.jpg";

const MusicDepartment = () => {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images from attached_assets - using actual images
  const galleryImages = {
    salem: [
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/1526631_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/3125306_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/4235530_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/5257449_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/7438078_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/9045999_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/9087625_orig.jpg"
    ],
    tirunelveli: [
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0007_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0013_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0016_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0023_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0028_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0029_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190416-wa0000_orig.jpg"
    ],
    chennai: [
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/1672091_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2064722_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2483175_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3148071_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3811014_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/4187790_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/4195601_orig.jpg"
    ],
    dharmapuri: [
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/1268024_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/1561769_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/3875055_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/563681_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/5705688_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/6439732_orig.jpg",
      "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/7151436_orig.jpg"
    ]
  };

  interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
  features: string[];
}

const courses: Course[] = [
    {
      id: "vocal",
      title: "Vocal Training",
      description: "Professional vocal coaching for all levels",
      image: vocalImg,
      features: ["Classical training", "Modern techniques", "Performance practice", "Voice care"]
    },
    {
      id: "instrumental",
      title: "Instrumental Training",
      description: "Learn various musical instruments",
      image: musicImg,
      features: ["Piano", "Guitar", "Violin", "Drums", "Wind instruments"]
    },
    {
      id: "theory",
      title: "Music Theory",
      description: "Comprehensive music theory education",
      image: musicImg,
      features: ["Music notation", "Harmony", "Composition", "Music history"]
    }
  ];

  const features = [
    {
      icon: "🎵",
      title: "Expert Instructors",
      description: "Learn from professional musicians with years of experience"
    },
    {
      icon: "🎼",
      title: "Performance Opportunities",
      description: "Regular concerts and recitals to showcase your talent"
    },
    {
      icon: "🎹",
      title: "Modern Facilities",
      description: "State-of-the-art music studios and practice rooms"
    },
    {
      icon: "🎓",
      title: "Certification",
      description: "Recognized certification upon completion"
    }
  ];

  const benefits = [
    "Individual attention with small class sizes",
    "Flexible timing for working professionals",
    "Regular performance opportunities",
    "Recording studio access",
    "Career guidance and placement support",
    "Certification upon completion"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <ParallaxHero
          backgroundImage={heroBg}
          title="Music Department"
          subtitle="Learn music with excellence - To raise up an army of musicians who would use gift of music as a tool to be involved in Kingdom purpose"
          gradient="from-primary/20 to-purple-600/20"
        />

        {/* Courses Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Courses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training programs for all skill levels
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {courses.map((course) => (
                <div key={course.id} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {course.image && (
                    <div className="mb-6 overflow-hidden rounded-2xl">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="font-display text-xl text-foreground mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="space-y-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide the best music education experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Gallery
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our music journey across different locations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {Object.entries(galleryImages).map(([location, images]) => (
                <div key={location} className="bg-card border border-border rounded-3xl p-6 shadow-lg">
                  <h3 className="font-display text-xl text-foreground mb-4 capitalize">{location}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {images.slice(0, 6).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${location} gallery ${index + 1}`}
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => {
                          setSelectedImage(image);
                          setShowGallery(location);
                        }}
                      />
                    ))}
                  </div>
                  <button
                    className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                    onClick={() => setShowGallery(location)}
                  >
                    View All {location} Photos
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Program Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for successful music education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Start Your Musical Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our music department and discover your musical potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-background text-foreground px-8 py-3 rounded-lg hover:bg-background/90 transition-colors font-medium"
                onClick={() => navigate("/contact")}
              >
                Enroll Now
              </button>
              <button 
                className="border-2 border-background text-background px-8 py-3 rounded-lg hover:bg-background hover:text-foreground transition-colors font-medium"
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-2xl font-bold capitalize">{showGallery} Gallery</h3>
                <button
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setShowGallery(null)}
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages[showGallery].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${showGallery} gallery ${index + 1}`}
                    className="w-full h-40 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      )}
    </div>
  );
};

export default MusicDepartment;
