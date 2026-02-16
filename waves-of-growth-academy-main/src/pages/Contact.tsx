import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Phone, Mail, Heart, QrCode, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QRCodeModal from "@/components/QRCodeModal";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const speed = 0.3; // Lighter parallax effect
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      title: "Music Department",
      person: "Ps. John Ebenezer",
      phone: "+91 98414 60320",
      email: "johnebi@hotmail.com",
      description: "For music course inquiries and enrollment"
    },
    {
      title: "TNPSC Coaching",
      person: "Mrs. Hepzi Imman",
      phone: "+91 94437 72547",
      email: "info@wavesacademy.com",
      description: "For TNPSC exam preparation details"
    },
    {
      title: "Skill Development",
      person: "Mr. Merwin Jose",
      phone: "+91 97877 77758",
      email: "isrdf.official@gmail.com",
      description: "For skill development program information"
    },
    {
      title: "General Inquiries",
      person: "Office",
      phone: "+91 94437 72547",
      email: "info@wavesacademy.com",
      description: "For general information and administrative queries"
    }
  ];

  const donationInfo = [
    "All donations are tax-exempt under 80G",
    "Official receipts provided for all donations",
    "Corporate donations welcome",
    "Make a difference in someone's life today",
    "Your support helps us continue our mission"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-br from-primary/20 to-blue-600/20 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg opacity-20" // Lighter background
            style={{ 
              backgroundImage: `url(${heroBg})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              transform: "translateY(0)",
              willChange: "transform"
            }}
          />
          <div className="relative container mx-auto max-w-6xl h-full flex items-center">
            <div className="text-center w-full">
              <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6">
                Contact & Support
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with us or support our mission through your generous contributions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out to us through any of the following channels
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="font-display text-xl text-foreground mb-4">{contact.title}</h3>
                  <p className="text-muted-foreground mb-6">{contact.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{contact.person}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-padding bg-section-bg">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Visit Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Come visit our center and experience our learning environment
              </p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">The Waves Academy</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Main Center</p>
                        <p className="text-sm">Krishnagiri, Tamil Nadu</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 94437 72547</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>info@wavesacademy.com</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 text-center">
                  <div className="text-6xl font-black text-primary mb-2">📍</div>
                  <p className="text-foreground font-semibold">Visit Our Center</p>
                  <p className="text-muted-foreground text-sm mt-2">Experience our learning environment firsthand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Our Mission */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-center shadow-2xl">
              <Heart className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-3xl md:text-4xl font-black text-primary-foreground mb-4">
                Support Our Mission
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto text-xl font-light leading-relaxed mb-8">
                Your generous contributions help us continue transforming lives through creative skills and education.
              </p>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {donationInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <p className="text-sm">{info}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => setShowQR(true)}
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QR Code Modal */}
      <QRCodeModal isOpen={showQR} onClose={() => setShowQR(false)} />
      <Footer />
    </div>
  );
};

export default Contact;
