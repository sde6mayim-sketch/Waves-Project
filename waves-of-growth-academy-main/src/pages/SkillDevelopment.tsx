import { useState } from "react";
import { Briefcase, Users, Phone, Mail, ArrowLeft, Award, Target, Clock, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import skillImg from "@/assets/skill-dev.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import tnpscImg from "@/assets/tnpsc-coaching.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// Custom online image for Digital Skills - matches web development, coding, and tech skills
const digitalSkillsImg = "https://picsum.photos/seed/web-development-coding-technology/800/600.jpg";

const SkillDevelopment = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: "digital",
      title: "Digital Skills",
      description: "Master essential digital technologies",
      image: digitalSkillsImg,
      skills: ["Web Development", "Digital Marketing", "Data Analytics", "UI/UX Design", "Mobile App Development"]
    },
    {
      id: "professional",
      title: "Professional Skills",
      description: "Develop workplace competencies", 
      image: musicImg,
      skills: ["Communication Skills", "Leadership", "Project Management", "Time Management", "Team Building"]
    },
    {
      id: "technical",
      title: "Technical Skills",
      description: "Industry-relevant technical training",
      image: tnpscImg,
      skills: ["Programming", "Database Management", "Cloud Computing", "Cybersecurity", "AI/ML Basics"]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Industry Certified",
      description: "Recognized certifications with ISRDF partnership"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Industry professionals with real-world experience"
    },
    {
      icon: Target,
      title: "Practical Training",
      description: "Hands-on projects and real-world applications"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend and evening batches available"
    }
  ];

  const benefits = [
    "100% practical training with real projects",
    "Industry expert trainers with 10+ years experience",
    "Small batch sizes for personalized attention",
    "Lifetime access to course materials",
    "Interview preparation and resume building",
    "Alumni network for career opportunities"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <ParallaxHero
          backgroundImage={heroBg}
          title="Skill Development"
          subtitle="Transform your career with industry-relevant skills and practical training in partnership with ISRDF"
        />

        {/* Programs Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive skill development programs for career growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {programs.map((program) => (
                <div key={program.id} className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
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
                We provide the best learning environment for your professional growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Program Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for successful skill development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
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
              Start Your Skill Development Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive skill development programs and transform your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => navigate("/contact")}
              >
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-foreground"
                onClick={() => navigate("/")}
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

export default SkillDevelopment;
