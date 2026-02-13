import { Briefcase, Phone, Mail } from "lucide-react";
import skillImg from "@/assets/skill-dev.jpg";

const domains = [
  "Spoken English & Communication",
  "Soft Skills & Professional Etiquette",
  "Personality Development",
  "Leadership & Team Building",
  "Computer Basics & Digital Literacy",
  "Career Guidance",
  "Employability Skills",
  "Entrepreneurship Awareness",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-section-bg">
    <div className="container mx-auto max-w-6xl">
      <div className="flex items-center gap-3 justify-center mb-6">
        <Briefcase className="w-6 h-6 text-primary" />
        <p className="text-sm font-black tracking-[0.3em] uppercase text-primary letter-spacing-wide">Skill Development</p>
      </div>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
        Build Your Future
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
        Comprehensive skill development programs designed to enhance your professional capabilities and career prospects.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="relative group">
            <img src={skillImg} alt="Skill development session" className="rounded-2xl w-full h-64 md:h-72 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <p className="text-white font-black text-sm">Professional Skill Training</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-secondary/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mt-6 border border-secondary/20">
            <h4 className="font-black text-xl text-foreground mb-3">In partnership with Mr. Merwin Jose – ISRDF</h4>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
              Programmes focus on practical, industry-relevant skills that enhance employability, productivity, and professional excellence.
            </p>
            <div className="flex flex-col gap-2 text-base text-gray-700">
              <span className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +91 97877 77758</span>
              <span className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> isrdf.official@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Training Domains</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {domains.map((d) => (
              <div key={d} className="bg-muted/60 rounded-xl px-5 py-4 text-sm text-foreground font-medium">
                {d}
              </div>
            ))}
          </div>

          <h3 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">Training Approach</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["Practical demonstrations", "Interactive sessions", "Group discussions", "Activity-based learning", "Individual mentoring", "Career assessments"].map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
