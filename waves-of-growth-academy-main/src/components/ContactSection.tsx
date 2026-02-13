import { MapPin, Phone, Mail, Heart } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-section-bg">
    <div className="container mx-auto max-w-6xl text-center">
      <p className="text-sm font-black tracking-[0.3em] uppercase text-primary mb-6 letter-spacing-wide">Get In Touch</p>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading mb-8">
        Contact Us
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
        Ready to start your journey of transformation? Reach out to us today.
      </p>

      <div className="grid sm:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <p className="text-base text-gray-700 font-medium">Music: +91 98414 60320</p>
          <p className="text-base text-gray-700 font-medium">TNPSC: +91 94426 95191</p>
          <p className="text-base text-gray-700 font-medium">Skills: +91 97877 77758</p>
        </div>
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <p className="text-base text-gray-700 font-medium">johnebi@hotmail.com</p>
          <p className="text-base text-gray-700 font-medium">isrdf.official@gmail.com</p>
        </div>
        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <p className="text-base text-gray-700 font-medium">The Waves Academy</p>
          <p className="text-base text-gray-700 font-medium">A Unit of The River</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
        <Heart className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
        <h3 className="font-display text-3xl md:text-4xl font-black text-primary-foreground mb-4">Support Our Mission</h3>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto text-xl font-light leading-relaxed mb-8">
          Your generous contributions help us continue transforming lives through creative skills and education.
        </p>
        <a
          href="mailto:johnebi@hotmail.com?subject=Donation Inquiry"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-black px-12 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          <Heart className="w-5 h-5" /> Donate Now
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
