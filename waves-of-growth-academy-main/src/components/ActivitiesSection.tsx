import { Music, BookOpen, Briefcase, Users, Phone, Mail } from "lucide-react";
import musicImg from "@/assets/music-dept.jpg";
import skillImg from "@/assets/skill-dev.jpg";
import tnpscImg from "@/assets/tnpsc-coaching.jpg";

const activities = [
  {
    id: "music",
    title: "Music Department",
    description: "Learn music with excellence - To raise up an army of musicians who would use gift of music as a tool to be involved in Kingdom purpose",
    icon: Music,
    image: musicImg,
    features: [
      "Instrumental Training",
      "Vocal Training", 
      "Expert Instructors",
      "Performance Opportunities"
    ],
    contact: {
      name: "Ps. John Ebenezer",
      role: "Music Department Head",
      phone: "+91 98414 60320",
      email: "johnebi@hotmail.com"
    }
  },
  {
    id: "tnpsc",
    title: "TNPSC Coaching",
    description: "Excel in government exams with expert guidance and comprehensive preparation",
    icon: BookOpen,
    image: tnpscImg,
    features: [
      "Group I, II, IV Exams",
      "Experienced Faculty",
      "Regular Mock Tests",
      "Interview Preparation"
    ],
    contact: {
      name: "Mrs. Hepzi Imman",
      role: "TNPSC Division Head",
      phone: "+91 94437 72547",
      email: "info@wavesacademy.com"
    }
  },
  {
    id: "skills",
    title: "Skill Development",
    description: "Transform your career with industry-relevant skills and practical training",
    icon: Briefcase,
    image: skillImg,
    features: [
      "Digital Skills",
      "Professional Development",
      "Technical Training",
      "Placement Support"
    ],
    contact: {
      name: "Mr. Merwin Jose",
      role: "In partnership with ISRDF",
      phone: "+91 97877 77758",
      email: "isrdf.official@gmail.com"
    }
  }
];

const ActivitiesSection = () => (
  <section id="activities" className="section-padding bg-section-bg">
    <div className="container mx-auto max-w-6xl">
      <div className="flex items-center gap-3 justify-center mb-6">
        <Users className="w-6 h-6 text-primary" />
        <p className="text-sm font-black tracking-[0.3em] uppercase text-primary letter-spacing-wide">Activities</p>
      </div>
      
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
        Our Programs & Activities
      </h2>
      
      <p className="text-gray-600 text-center max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
        Discover your potential through our comprehensive range of programs designed to nurture creativity, academic excellence, and professional growth.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
        {activities.map((activity) => (
          <div key={activity.id} className="group h-full">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              {/* Activity Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4 flex items-center gap-3">
                  <activity.icon className="w-6 h-6 text-primary" />
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {activity.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {activity.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{activity.contact.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.contact.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{activity.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{activity.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
