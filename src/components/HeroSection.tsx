import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, ChevronRight, Phone, Mail, MapPin, Menu } from "lucide-react";

const stats = [
  { value: "50+", label: "Courses Offered" },
  { value: "10K+", label: "Students Enrolled" },
  { value: "200+", label: "Expert Faculty" },
  { value: "95%", label: "Placement Rate" },
];

const courses = [
  { icon: BookOpen, title: "Engineering", desc: "B.Tech, M.Tech programs in cutting-edge fields" },
  { icon: GraduationCap, title: "Sciences", desc: "Pure & applied science programs with research focus" },
  { icon: Users, title: "Management", desc: "MBA and executive programs for future leaders" },
  { icon: Award, title: "Research", desc: "Doctoral programs with world-class facilities" },
];

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +91 1234 567 890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> admissions@iist.edu</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Thiruvananthapuram, Kerala</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="#" className="hover:underline">Student Portal</a>
            <a href="#" className="hover:underline">Alumni</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-bold text-primary">IIST</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-display text-sm font-medium">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#admission" className="text-muted-foreground hover:text-primary transition-colors">Admission</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <button
              className="bg-accent text-accent-foreground px-5 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
              onClick={() => {
                const toggle = document.querySelector('.n8n-chat .chat-toggle') as HTMLElement;
                if (toggle) toggle.click();
              }}
            >
              Ask IIST
            </button>
          </div>
          <button className="md:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="font-display text-sm tracking-widest text-primary-foreground/70 uppercase mb-4">
              Welcome to IIST
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Education is the Best Key to{" "}
              <span className="text-accent">Success</span> in Life
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl leading-relaxed">
              Join one of India's premier institutes and shape your future with world-class education, research, and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#admission"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-display font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded font-display font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-accent-foreground">
              <div className="font-display text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="font-display text-sm tracking-widest text-accent uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Few Words About the Institute
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              IIST is a premier institution dedicated to excellence in education and research. Our state-of-the-art campus, distinguished faculty, and innovative curriculum prepare students to lead in their chosen fields and contribute to society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Curated Degrees", desc: "Programs designed in collaboration with industry leaders to ensure job-readiness." },
              { title: "Global Studies", desc: "Exchange programs and partnerships with 50+ international universities." },
              { title: "Expert Faculty", desc: "Learn from professors with decades of industry and academic experience." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-display text-sm tracking-widest text-accent uppercase mb-3">Programs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Courses</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section id="admission" className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Admissions Open 2025-26
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Begin your journey with IIST. Talk to our AI assistant for instant help with admissions, courses, and campus life.
            </p>
            <button
              onClick={() => {
                const toggle = document.querySelector('.n8n-chat .chat-toggle') as HTMLElement;
                if (toggle) toggle.click();
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-display font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Chat with IIST Assistant <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-accent" />
              <span className="font-display text-xl font-bold text-background">IIST</span>
            </div>
            <p className="text-sm leading-relaxed">Empowering minds, shaping futures. A premier institution committed to academic excellence and innovation.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-accent transition-colors">Courses</a></li>
              <li><a href="#admission" className="hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Thiruvananthapuram, Kerala</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 1234 567 890</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admissions@iist.edu</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-background/10 text-center text-sm">
          © 2025 IIST. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
