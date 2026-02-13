import { GraduationCap, Phone, Mail, CheckCircle } from "lucide-react";
import tnpscImg from "@/assets/tnpsc-coaching.jpg";

const exams = ["TNPSC Group I", "TNPSC Group II", "TNPSC Group IIA", "TNPSC Group IV", "Other TN Govt Exams"];
const methodology = ["Comprehensive syllabus coverage", "Concept-based teaching", "Analytical learning approach", "Regular assessments", "Model exams & mock tests", "Personalized mentoring", "Interview preparation"];

const TNPSCSection = () => (
  <section id="tnpsc" className="section-padding bg-section-bg">
    <div className="container mx-auto max-w-6xl">
      <div className="flex items-center gap-3 justify-center mb-6">
        <GraduationCap className="w-6 h-6 text-primary" />
        <p className="text-sm font-black tracking-[0.3em] uppercase text-primary letter-spacing-wide">TNPSC Coaching</p>
      </div>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-hero-heading text-center mb-8">
        Preparing for Government Service
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-16">
        Systematic, focused, and result-driven training that empowers aspirants to achieve success with purpose and excellence.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img src={tnpscImg} alt="TNPSC coaching classroom" className="rounded-2xl w-full h-64 md:h-72 object-cover mb-6" />
          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-1">Led by Mrs. Hepzi Imman</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Senior Inspector in Cooperatives, Krishnagiri. Her professional experience and passion for mentoring guide aspirants with practical insights and exam strategies.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary" /> +91 94426 95191</span>
              <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary" /> jesusgrace.muthu@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Exams Covered</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {exams.map((e) => (
              <span key={e} className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">{e}</span>
            ))}
          </div>

          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Coaching Methodology</h3>
          <div className="space-y-3">
            {methodology.map((m) => (
              <div key={m} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TNPSCSection;
