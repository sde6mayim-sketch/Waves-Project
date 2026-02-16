import { useState, useEffect } from "react";
import { ArrowLeft, Users, Heart, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const navigate = useNavigate();

  const leadershipTeam = [
    {
      name: "Mr. Samuel Kumar",
      role: "Director",
      description: "Under the directorship of Mr. Samuel Kumar, The Waves Academy stands as a beacon of excellence in creative and educational empowerment. With a vision to transform lives through quality education and skill development."
    },
    {
      name: "Ps. John Ebenezer",
      role: "Music Department Head",
      description: "Leading Music Department with passion and expertise, nurturing musical talent and creating opportunities for students to excel in their musical journey."
    },
    {
      name: "Mrs. Hepzi Imman",
      role: "TNPSC Division Head",
      description: "Expert guidance for TNPSC aspirants with comprehensive coaching and proven track record of success in competitive examinations."
    },
    {
      name: "Mr. Merwin Jose",
      role: "Skill Development Head",
      description: "Bridging the gap between education and employment with industry-relevant skills and practical training programs."
    }
  ];

  const purposes = [
    {
      icon: Users,
      title: "Quality Education",
      description: "Providing excellent learning environment with experienced faculty and comprehensive curriculum"
    },
    {
      icon: Heart,
      title: "Student Welfare",
      description: "Focusing on holistic development and well-being of every student"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining high standards in education and skill development"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Preparing students for successful careers and future opportunities"
    }
  ];

  const achievements = [
    "20+ Years of Educational Excellence",
    "5000+ Successful Alumni",
    "Multiple Educational Programs",
    "Industry Partnerships",
    "State-of-the-Art Facilities",
    "Qualified and Experienced Faculty"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-br from-primary/20 to-blue-600/20 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg opacity-30" // A little bit lighter than original
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
                About The Waves Academy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A Unit of The River - "Do the Basics Right"
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Two decades of transforming lives through excellence in education and skill development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-display text-xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education and skill development that empowers individuals to achieve their full potential and succeed in their chosen paths.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="font-display text-xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution that nurtures talent, fosters creativity, and builds bridges to successful careers through innovative education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated professionals behind The Waves Academy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="group">
                  {/* Image Frame */}
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/80 border-2 border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {/* Photo Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <div className="text-center p-6">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                          <svg className="w-16 h-16 text-primary/60" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-foreground/80">Photo</p>
                          <p className="text-xs text-muted-foreground">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Purposes */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Purposes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The core values that drive everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {purposes.map((purpose, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <purpose.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{purpose.title}</h3>
                  <p className="text-muted-foreground">{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Milestones that define our journey of excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of an institution that transforms lives through quality education and skill development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-foreground transition-all duration-300"
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

export default About;
