import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ExternalLink, Mail, Instagram, GraduationCap, Code, Layers, Send, Phone, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import contextImage1 from "@/assets/magicpath/context/01-context-image-1-7ea954162bc9.jpg";

// --- Types & Interfaces ---

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}
interface StatItem {
  label: string;
  value: string;
}

// --- Data ---

const EXPERIENCE_DATA: ExperienceItem[] = [{
  company: 'Massiv.',
  role: 'UI/UX Designer',
  period: '2025 – 2026',
  description: 'Designed user-focused web and mobile experiences, wireframes, prototypes, and UI systems.'
}, {
  company: 'Upwork and Independent Projects',
  role: 'Freelance Designer',
  period: 'Ongoing',
  description: 'Worked with international clients on UI/UX design, branding, and visual design projects.'
}, {
  company: 'Independent Freelance',
  role: 'UI/UX and Graphic Designer',
  period: '2022 – Present',
  description: 'Provided UI/UX and graphic design services for a range of digital and branding projects.'
}];
const SKILLS_DESIGN = ['UI/UX Design', 'Web Design', 'Graphic Design', 'Branding'];
const SKILLS_TOOLS = ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'AI Tools'];
const EDUCATION = [{
  institution: 'State Academy of Fine Arts of Armenia Foundation',
  degree: 'Design and Decorative Applied Arts',
  period: '2021 – 2025'
}, {
  institution: 'T. Postajhan School',
  degree: 'General Education',
  period: '2009 – 2021'
}];
const STATS: StatItem[] = [{
  label: 'Years Experience',
  value: '3+'
}, {
  label: 'Projects Completed',
  value: '20+'
}, {
  label: 'Happy Clients',
  value: '15+'
}];

// --- Sub-components ---

const SectionHeading = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("mb-12 relative inline-block", className)}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{children}</h2>
    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#4B3FE4]" />
  </div>;
const NavItem = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => <a href={href} onClick={onClick} className="text-sm font-medium text-muted-foreground hover:text-[#4B3FE4] transition-colors duration-200">
    {children}
  </a>;

// --- Main Component ---

export const AnahitPortfolio = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Sync dark mode class
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return <div className="min-h-screen font-sans transition-colors duration-300 bg-background text-foreground selection:bg-[#4B3FE4]/20 selection:text-[#4B3FE4]">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#4B3FE4]">AP.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#education">Education</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <a href="#contact" className="hidden sm:block px-5 py-2 rounded-full bg-[#4B3FE4] text-white text-sm font-semibold hover:bg-[#3A30C8] transition-all transform hover:scale-105">
              Hire Me
            </a>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-background border-t border-border overflow-hidden">
              <div className="flex flex-col p-6 gap-4">
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
                <NavItem href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavItem>
                <NavItem href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavItem>
                <NavItem href="#education" onClick={() => setIsMenuOpen(false)}>Education</NavItem>
                <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
                <a href="#contact" className="mt-2 w-full text-center px-5 py-3 rounded-xl bg-[#4B3FE4] text-white font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Hire Me
                </a>
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background Iridescent Blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-20 dark:opacity-30 pointer-events-none">
          <div className="w-full h-full rounded-full bg-radial-[at_50%_50%] from-indigo-500 via-purple-500 via-amber-200 via-pink-400 to-transparent blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] mb-8 tracking-tighter">
              Petrosyan<br />
              <span className="text-[#4B3FE4]">Anahit</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Mid-Level UI/UX Designer | Graphic Designer
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Crafting premium digital experiences through thoughtful design systems and editorial precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/twex.design?igsh=MW4xNDZqYjc4MXE2ZA%3D%3D&utm_source=qr" className="px-8 py-4 rounded-full bg-[#4B3FE4] text-white font-bold hover:bg-[#3A30C8] transition-all shadow-lg shadow-[#4B3FE4]/25 flex items-center gap-2 group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border-2 border-[#4B3FE4] text-[#4B3FE4] font-bold hover:bg-[#4B3FE4]/5 transition-all">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Profile Wrapper */}
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#4B3FE4]/20 shadow-2xl relative z-10 bg-white flex items-center justify-center">
                <div className="w-full h-full" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/375162299763294208/assets/320dbb50-95a2-4a17-b763-b577789cd1e0.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1"
              }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/375162299763294208/assets/5a964a55-9ca6-47e1-9423-77e13a93bbcf.jpg" alt="Anahit Petrosyan — UI/UX Designer" className="w-full h-full object-cover object-top" style={{
                  opacity: "1",
                  lineHeight: "1",
                  color: "rgb(255 255 255 / 0)",
                  objectFit: "cover",
                  objectPosition: "50% 0%"
                }} />
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-[#4B3FE4]/10 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-[#E040B5]/10 animate-reverse-spin-slow pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Separator Matching CV */}
        <div className="container mx-auto px-6 mt-20">
          <hr className="border-border opacity-50" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <SectionHeading>About Me</SectionHeading>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a mid-level UI/UX and Graphic Designer with experience in both team-based and freelance environments. 
                  I focus on creating clean, user-centered, and visually engaging designs that combine functionality with strong aesthetics.
                </p>
                <p>
                  My philosophy is rooted in clarity and purpose. Every pixel should serve a function, whether it's guiding a user through a flow 
                  or establishing a brand's authority. I blend Swiss editorial design principles with modern digital interaction patterns.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS.map((stat, idx) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }} className="p-8 rounded-3xl bg-background border border-border shadow-sm flex flex-col justify-center items-center text-center group hover:border-[#4B3FE4] transition-all">
                  <span className="text-4xl md:text-5xl font-black text-[#4B3FE4] mb-2">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </motion.div>)}
              <div className="hidden sm:block p-8 rounded-3xl bg-[#4B3FE4] text-white flex flex-col justify-center items-center text-center transform rotate-3">
                 <p className="font-bold text-xl leading-tight">Always<br />Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading>Experience</SectionHeading>
          <div className="max-w-4xl space-y-12">
            {EXPERIENCE_DATA.map((item, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="relative pl-8 border-l-2 border-border group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-[#4B3FE4] transition-colors duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{item.role}</h3>
                  <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="text-lg font-bold text-[#4B3FE4] mb-4">{item.company}</div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
                {idx !== EXPERIENCE_DATA.length - 1 && <div className="mt-12 h-px w-full bg-border/50" />}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <SectionHeading>Skills & Tools</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Design Skills */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="p-10 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#4B3FE4]/10 text-[#4B3FE4]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Design</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {SKILLS_DESIGN.map(skill => <span key={skill} className="px-5 py-2 rounded-full border border-border text-sm font-medium hover:border-[#4B3FE4] hover:text-[#4B3FE4] transition-all cursor-default">
                    {skill}
                  </span>)}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="p-10 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#E040B5]/10 text-[#E040B5]">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {SKILLS_TOOLS.map(skill => <span key={skill} className="px-5 py-2 rounded-full border border-border text-sm font-medium hover:border-[#E040B5] hover:text-[#E040B5] transition-all cursor-default">
                    {skill}
                  </span>)}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Education</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => <motion.div key={edu.institution} initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="p-8 rounded-3xl bg-background border border-border flex flex-col group hover:border-[#4B3FE4] transition-all">
                <div className="p-3 rounded-2xl bg-[#4B3FE4]/10 text-[#4B3FE4] w-fit mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{edu.institution}</h3>
                <p className="text-muted-foreground font-medium mb-4">{edu.degree}</p>
                <div className="mt-auto pt-6 border-t border-border/50 text-sm font-bold text-[#4B3FE4]">{edu.period}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-5xl font-black text-foreground mb-8 tracking-tighter">Let's Work<br />Together</h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-muted text-[#4B3FE4]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase">Phone</p>
                    <p className="text-lg font-bold text-foreground">+374 94 669414</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-muted text-[#4B3FE4]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase">Email</p>
                    <p className="text-lg font-bold text-foreground">anahit-petrosyan-2022@mail.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-muted text-[#4B3FE4]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase">Socials</p>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.behance.net/Anahitpetrosyann" className="p-2 bg-muted hover:bg-[#4B3FE4] hover:text-white rounded-lg transition-all"><ExternalLink className="w-5 h-5" /></a>
                      <a href="https://instagram.com/twex.design" className="p-2 bg-muted hover:bg-[#E040B5] hover:text-white rounded-lg transition-all"><Instagram className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h4 className="text-sm font-black text-muted-foreground uppercase mb-4 tracking-widest">Languages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between max-w-xs">
                      <span className="font-bold">Armenian</span>
                      <span className="text-muted-foreground">Native</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="font-bold">Russian</span>
                      <span className="text-muted-foreground">Mediate</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="font-bold">English</span>
                      <span className="text-muted-foreground">Mediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-background border border-border rounded-2xl p-4 focus:ring-2 focus:ring-[#4B3FE4] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Email</label>
                    <input type="email" placeholder="Your Email" className="w-full bg-background border border-border rounded-2xl p-4 focus:ring-2 focus:ring-[#4B3FE4] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-background border border-border rounded-2xl p-4 focus:ring-2 focus:ring-[#4B3FE4] focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Message</label>
                  <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-background border border-border rounded-2xl p-4 focus:ring-2 focus:ring-[#4B3FE4] focus:border-transparent outline-none transition-all resize-none" />
                </div>
                <button className="w-full py-4 rounded-2xl bg-[#4B3FE4] text-white font-bold hover:bg-[#3A30C8] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#4B3FE4]/20">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-black text-[#4B3FE4] mb-2">AP.</span>
              <p className="text-muted-foreground text-sm">UI/UX & Graphic Designer</p>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Petrosyan Anahit. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="https://www.behance.net/Anahitpetrosyann" className="p-2 text-muted-foreground hover:text-[#4B3FE4] transition-colors"><ExternalLink className="w-5 h-5" /></a>
              <a href="https://instagram.com/twex.design" className="p-2 text-muted-foreground hover:text-[#E040B5] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="mailto:anahit-petrosyan-2022@mail.ru" className="p-2 text-muted-foreground hover:text-[#4B3FE4] transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Spin Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 25s linear infinite;
        }
      `}</style>
    </div>;
};