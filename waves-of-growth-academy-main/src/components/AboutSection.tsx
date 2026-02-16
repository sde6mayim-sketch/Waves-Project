import { Target, Users, BookOpen, Award, Lightbulb } from "lucide-react";

interface LeadershipMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Mr. Samuel Kumar",
    role: "Director",
    description: "Under the directorship of Mr. Samuel Kumar, The Waves Academy stands as a beacon",
    image: "/src/assets/attached_assets/david_school/David school of music/About us images/Screenshot (6).png",
  },
  {
    name: "Ps. John Ebenezer",
    role: "Music Department Head",
    description: "Leading the Music Department with YWAM since 2001, conducting keyboard training",
    image: "/src/assets/attached_assets/david_school/David school of music/About us images/Pastor.John Ebenezer.jpg",
  },
  {
    name: "Mrs. Hepzi Imman",
    role: "TNPSC Division Head",
    description: "Senior Inspector in Cooperatives, Krishnagiri, guiding aspirants with practical",
    image: "/src/assets/attached_assets/david_school/David school of music/About us images/BRO.immanuel Baskaran.jpg",
  },
  {
    name: "Mr. Merwin Jose",
    role: "Skill Development Head",
    description: "Leading Skill Development programmes in partnership with ISRDF, focusing on practical, industry-relevant skills",
    image: "/src/assets/attached_assets/david_school/David school of music/About us images/Screenshot (6).png",
  },
];

const purposes = [
  { icon: Target, text: "Nurture creative and musical excellence" },
  { icon: BookOpen, text: "Empower students with academic competence" },
  { icon: Lightbulb, text: "Build practical, employable skills" },
  { icon: Users, text: "Develop character, leadership & service" },
  { icon: Award, text: "Equip youth to impact church, workplace & society" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-section-bg">
    <div className="container mx-auto max-w-6xl">
      <p className="text-sm font-black tracking-[0.3em] uppercase text-primary mb-6 text-center letter-spacing-wide">About Us</p>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
        Our Identity
      </h2>
      <p className="text-gray-600 text-center max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-8">
        The Waves Academy is a comprehensive education and training institution dedicated to holistic transformation through creative skills, academic excellence, and professional development. A unit of The River, the academy integrates spiritual values, ethical principles, and practical learning to shape well-rounded individuals.
      </p>
      <p className="text-gray-600 text-center max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
        Under the Directorship of <span className="font-bold text-foreground text-2xl">Mr. Samuel Kumar</span>, the academy continues to expand its impact through innovative programmes, strategic partnerships, and value-based education models.
      </p>

      <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl p-10 md:p-14 mb-16">
        <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4 text-center">Our Vision</h3>
        <p className="text-primary text-center font-display text-2xl md:text-3xl font-light italic mb-12">Transforming lives through creative skills.</p>

        <h4 className="font-bold text-2xl text-foreground mb-8 text-center">Core Purpose</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {purposes.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-4 bg-gradient-to-br from-muted/60 to-muted/40 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-base text-foreground font-medium leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-4xl md:text-5xl font-black text-foreground mb-16 text-center">Leadership Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {leadershipTeam.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary/60">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h4 className="font-black text-2xl text-foreground mb-3">{member.name}</h4>
              <p className="text-primary font-bold text-lg mb-4">{member.role}</p>
              <p className="text-base text-gray-600 leading-relaxed font-light">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
