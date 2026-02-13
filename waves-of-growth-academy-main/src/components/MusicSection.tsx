import { Music, Quote, Phone, Mail, Camera, X, Piano, Guitar, Drum, Mic } from "lucide-react";
import musicImg from "@/assets/music-dept.jpg";
import { useState } from "react";
import MusicGallery from "./MusicGallery";

const instruments = ["Keyboard / Piano", "Acoustic Guitar", "Electric Guitar", "Bass Guitar", "Drums & Percussion"];
const vocal = ["Western Vocal", "Indian Vocal", "Harmony & Choir Training"];

// Course images data
const courseImages = {
  "Keyboard / Piano": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/1672091_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2064722_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/1526631_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/1949753_orig.jpg",
  ],
  "Acoustic Guitar": [
    "/acoustic-guitar-children.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2483175_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3148071_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/1561769_orig.jpg",
  ],
  "Electric Guitar": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3811014_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/4187790_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/3875055_orig.jpg",
  ],
  "Bass Guitar": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/4195601_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/5624855_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/563681_orig.jpg",
  ],
  "Drums & Percussion": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/6930778_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/7757074_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/5705688_orig.jpg",
  ],
  "Western Vocal": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/8818305_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Salem/3125306_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Tirunelveli/3634208_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Tuticorin and Tirunelveli-April 2019/img-20190415-wa0007_orig.jpg",
  ],
  "Indian Vocal": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/1672091_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2064722_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/7151436_orig.jpg",
  ],
  "Harmony & Choir Training": [
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/2483175_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Chennai/3148071_orig.jpg",
    "/src/assets/attached_assets/david_school/David school of music/Gallery/Dharmapuri/7338461_orig.jpg",
  ],
};

const testimonials = [
  {
    name: "Bro. Andrew",
    role: "Auditor",
    text: "Ebi demystified the learning process of playing the keyboard and helped me overcome my frustration from 30 years of failed attempts. Today, I play the keyboard joyfully!",
  },
  {
    name: "Sis. Reena",
    role: "Worship Leader",
    text: "I learned keyboard at The Waves Academy in 2000. Over the past 18 years, this training has become an invaluable blessing in my ministry.",
  },
  {
    name: "Ps. Francis Gnanasekhar",
    role: "FGT India",
    text: "Two young boys from our congregation joined and today both are skilled keyboard players and worship leaders in our church. I highly recommend The Waves Academy.",
  },
];

const MusicSection = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Icon mapping for courses
  const getCourseIcon = (course: string) => {
    if (course.includes("Keyboard") || course.includes("Piano")) return <Piano className="w-4 h-4" />;
    if (course.includes("Guitar")) return <Guitar className="w-4 h-4" />;
    if (course.includes("Drums") || course.includes("Percussion")) return <Drum className="w-4 h-4" />;
    if (course.includes("Vocal") || course.includes("Choir")) return <Mic className="w-4 h-4" />;
    return <Music className="w-4 h-4" />;
  };

  return (
    <>
      <section id="music" className="section-padding bg-section-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Music className="w-6 h-6 text-primary" />
            <p className="text-sm font-black tracking-[0.3em] uppercase text-primary letter-spacing-wide">Music Department</p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
            Learn Music with Excellence
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16 italic">
            "To raise up an army of musicians who would use the gift of music as a tool to be involved in Kingdom purpose"
          </p>

          <div className="text-center mb-12">
            <button
              onClick={() => setShowGallery(true)}
              className="inline-flex items-center gap-3 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/20 px-8 py-4 font-black text-primary hover:from-primary/20 hover:to-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-5 h-5" />
              View Music Gallery
            </button>
          </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <div>
          <img src={musicImg} alt="Music training at The Waves Academy" className="rounded-3xl w-full h-80 md:h-96 object-cover shadow-2xl" />
          <div className="mt-8 bg-gradient-to-br from-secondary to-secondary/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h4 className="font-black text-xl text-foreground mb-3">Led by Ps. John Ebenezer</h4>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
              Serving with YWAM since 2001, leading the School of Worship in India. Conducted keyboard training across 9+ districts in Tamil Nadu, Andhra Pradesh & Kerala.
            </p>
            <div className="flex flex-col gap-2 text-base text-gray-700">
              <span className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +91 98414 60320</span>
              <span className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> johnebi@hotmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl font-black text-foreground mb-6">Courses & Training</h3>
          <div className="mb-8">
            <h4 className="text-base font-black text-primary uppercase tracking-[0.2em] mb-4">Instrumental Training</h4>
            <div className="flex flex-wrap gap-3">
              {instruments.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCourse(i)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-muted to-muted/60 hover:from-primary/20 hover:to-primary/30 text-foreground text-base px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  {getCourseIcon(i)}
                  {i}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h4 className="text-base font-black text-primary uppercase tracking-[0.2em] mb-4">Vocal Training</h4>
            <div className="flex flex-wrap gap-3">
              {vocal.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedCourse(v)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-muted to-muted/60 hover:from-primary/20 hover:to-primary/30 text-foreground text-base px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  {getCourseIcon(v)}
                  {v}
                </button>
              ))}
            </div>
          </div>

          <h3 className="font-display text-3xl font-black text-foreground mb-6">Teaching Methodology</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["Step-by-step progression", "Strong foundations", "Hands-on sessions", "Regular assessments", "One-on-one mentoring", "Worship-based exposure"].map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">Testimonials</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
            <Quote className="w-5 h-5 text-primary/40 mb-3" />
            <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/90 animate-fade-in">
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            onClick={() => setShowGallery(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="h-full overflow-y-auto py-8">
            <MusicGallery />
          </div>
        </div>
      )}

      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/90 animate-fade-in">
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="h-full overflow-y-auto py-8">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-4">
                  {getCourseIcon(selectedCourse)}
                  <h2 className="text-2xl font-black text-primary">{selectedCourse}</h2>
                </div>
                <p className="text-white/80">Related training images and sessions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courseImages[selectedCourse as keyof typeof courseImages]?.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`${selectedCourse} training ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-semibold text-sm">{selectedCourse}</p>
                        <p className="text-xs opacity-80">Training Session {index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicSection;
