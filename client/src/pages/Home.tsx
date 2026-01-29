import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Brain, 
  Database, 
  Terminal, 
  ChevronDown,
  Phone,
  Cpu,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Link } from "react-scroll";
import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const submitContact = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-sm mb-6">
                Hello, I'm
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
                Rachana <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">N V</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
                Aspiring Software Engineer & AI/ML Specialist
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  <Link to="projects" smooth={true} duration={500}>
                    View My Work
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:w-auto text-lg px-8 py-6 border-white/10 hover:bg-white/5"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank">Download Resume</a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6">
                <SocialLink href="https://github.com" icon={<Github className="w-6 h-6" />} />
                <SocialLink href="https://linkedin.com/in/rachana-n-v-456377308" icon={<Linkedin className="w-6 h-6" />} />
                <SocialLink href="mailto:rachanavnv55@gmail.com" icon={<Mail className="w-6 h-6" />} />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="About Me" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-3xl border-l-4 border-primary"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-light">
                I am an aspiring software engineer pursuing a Bachelor’s degree in <strong className="text-primary font-semibold">Computer Science (AI & ML)</strong> at Maharaja Institute of Technology Mysore.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                I am passionate about applying programming, <strong className="text-foreground">Data Structures & Algorithms</strong>, and AI/ML to solve real-world challenges. My goal is to continuously learn, build impactful software solutions, and grow as a professional in software development and artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeading title="Technical Expertise" subtitle="Tools and technologies I work with" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <SkillCard 
              title="Languages" 
              skills={["Java", "Python", "C", "Dart"]} 
              icon={<Code2 className="w-6 h-6" />}
              delay={0.1}
            />
            <SkillCard 
              title="Development" 
              skills={["Flutter", "Git", "GitHub", "VS Code"]} 
              icon={<Terminal className="w-6 h-6" />}
              delay={0.2}
            />
            <SkillCard 
              title="Core Concepts" 
              skills={["OOP", "DSA", "Artificial Intelligence", "Machine Learning"]} 
              icon={<Brain className="w-6 h-6" />}
              delay={0.3}
            />
            <SkillCard 
              title="Databases" 
              skills={["MongoDB", "DBMS", "SQL"]} 
              icon={<Database className="w-6 h-6" />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-padding bg-secondary/20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="Experience" />
          
          <div className="relative border-l border-primary/30 ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[59px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_var(--primary)]" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">App Development Intern</h3>
                    <p className="text-primary font-medium">RunShaw Technologies</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm w-fit">
                    Internship
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Developed cross-platform mobile applications using <strong>Flutter</strong> framework.</li>
                  <li>Designed intuitive User Interfaces (UI) focusing on user experience.</li>
                  <li>Integrated RESTful APIs for seamless data communication.</li>
                  <li>Collaborated with senior developers to troubleshoot and optimize app performance.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeading title="Featured Projects" subtitle="Building solutions with code and data" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ProjectCard 
              title="Titanic Survival Prediction"
              description="A Machine Learning model built to predict passenger survival on the Titanic. Implemented data preprocessing, feature engineering, and classification algorithms to analyze the dataset and generate accurate predictions."
              tags={["Python", "Scikit-Learn", "Pandas", "Machine Learning"]}
              links={{ github: "#" }}
              delay={0.1}
            />
            <ProjectCard 
              title="Relay Control System"
              description="IoT project using ESP8266 microcontroller for efficient relay switching. Developed a hardware automation system enabling remote control of electrical appliances through a web interface."
              tags={["IoT", "ESP8266", "Embedded C", "Hardware"]}
              links={{ github: "#" }}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="section-padding bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold mb-2">Maharaja Institute of Technology Mysore</h3>
                <p className="text-lg text-muted-foreground mb-4">Bachelor of Engineering - CSE (AI & ML)</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-mono">2023 – Present</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">CGPA: 7.4</span>
                </div>
              </motion.div>
            </div>

            {/* Certifications Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  "Git & GitHub Bootcamp",
                  "Dive into Agentic AI",
                  "Prompt Wars",
                  "GenAI Powered Data Analytics (Forage)",
                  "Data Analytics Essentials (Cisco)",
                  "HP LIFE Data Science & AI"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-colors flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeading title="Get In Touch" centered />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground">
                Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <ContactItem icon={<Mail />} label="Email" value="rachanavnv55@gmail.com" href="mailto:rachanavnv55@gmail.com" />
                <ContactItem icon={<Phone />} label="Phone" value="+91 8073633608" href="tel:+918073633608" />
                <ContactItem icon={<Linkedin />} label="LinkedIn" value="Rachana N V" href="https://www.linkedin.com/in/rachana-n-v-456377308" />
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mt-8">
                <h4 className="font-bold mb-2 text-primary flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Open to Opportunities
                </h4>
                <p className="text-sm text-muted-foreground">
                  I am currently looking for internships and entry-level positions in Software Engineering and AI/ML domains.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-background/50 border-white/10 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="bg-background/50 border-white/10 min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-white/5 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Rachana N V. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div className="p-3 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
        <p className="text-lg font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}
