import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-white text-sm mb-4">
          <a href="#contact" className="text-blue-400 underline hover:text-blue-600">
            Click here for Contact
          </a>
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/about" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
            About Us
          </a>
          <a href="/contact" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
