import { useState, useEffect } from "react";
import { BookOpen, Users, Phone, Mail, ArrowLeft, Award, Target, Clock, CheckCircle, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tnpscGroup1 from "@/assets/tnpsc-group2.webp";
import tnpscGroup2 from "@/assets/tnpsc-group2.webp";
import tnpscGroup3 from "@/assets/tnpsc-group4.webp";
import heroBg from "@/assets/hero-bg.jpg";

const TNPSCCoaching = () => {
  const navigate = useNavigate();

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

  const courses = [
    {
      id: "group1",
      title: "Group I Exam",
      description: "Deputy Collector, DSP, and other high-level posts",
      image: tnpscGroup1,
      features: ["Comprehensive syllabus coverage", "Regular mock tests", "Interview preparation", "Current affairs updates"]
    },
    {
      id: "group2",
      title: "Group II Exam", 
      description: "Sub-Collector, Assistant Commissioner, and other posts",
      image: tnpscGroup2,
      features: ["Focused syllabus", "Practice papers", "Time management skills", "Subject-wise coaching"]
    },
    {
      id: "group3",
      title: "Group III Exam",
      description: "Junior Assistant, Typist, and other posts",
      image: tnpscGroup3,
      features: ["Basic concepts", "Speed typing practice", "Previous year papers", "Weekend batches available"]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Experienced retired officials and subject matter experts"
    },
    {
      icon: Target,
      title: "Result Oriented",
      description: "Focus on clearing exams with high scores"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Weekend and evening batches for working professionals"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Individual attention and personalized coaching"
    }
  ];

  const achievements = [
    "500+ students cleared various TNPSC exams",
    "85% success rate in Group IV exams",
    "70% success rate in Group II exams",
    "Regular toppers in competitive exams"
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
                TNPSC Coaching
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Your pathway to success in Tamil Nadu Public Service Commission exams with expert guidance and proven results
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Courses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized coaching for all TNPSC exam categories
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {courses.map((course) => (
                <div key={course.id} className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-foreground mb-3">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-green-800 font-semibold text-sm">Government Job Opportunities</p>
                    </div>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-section-bg">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Why Choose Our TNPSC Coaching
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide the best environment and resources for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proven track record of success in TNPSC examinations
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-foreground font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-section-bg">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="font-display text-3xl font-black text-primary-foreground mb-6">
                Start Your TNPSC Journey Today
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto text-xl mb-8">
                Join our successful candidates and achieve your dream government job
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Phone className="w-5 h-5" />
                  <span>+91 94437 72547</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Mail className="w-5 h-5" />
                  <span>info@wavesacademy.com</span>
                </div>
              </div>
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TNPSCCoaching;
