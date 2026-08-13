"use client";

import { useState } from "react";
import {
  Code2, Braces, Download, ArrowRight, Github, Linkedin,
  ExternalLink, Mail, Phone, MapPin, ChevronRight,
  Briefcase, GraduationCap, Star, Menu, X,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const STATS = [
  { value: "60+", label: "Projects Completed" },
  { value: "500+", label: "Problems Solved" },
  { value: "2+", label: "Years of Learning" },
  { value: "5+", label: "Technologies" },
];

const SKILLS = {
  Frontend: [
    { name: "HTML5", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "CSS3", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
    { name: "React", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { name: "Next.js", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { name: "Tailwind CSS", color: "bg-teal-50 text-teal-600 border-teal-200" },
  ],
  Backend: [
    { name: "Node.js", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Express.js", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { name: "Java", color: "bg-red-50 text-red-600 border-red-200" },
    { name: "Spring Boot", color: "bg-green-50 text-green-700 border-green-200" },
  ],
  Database: [
    { name: "MongoDB", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "MySQL", color: "bg-blue-50 text-blue-600 border-blue-200" },
  ],
  "Tools & Others": [
    { name: "Git", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "GitHub", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { name: "AWS", color: "bg-amber-50 text-amber-600 border-amber-200" },
    { name: "Docker", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Postman", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "VS Code", color: "bg-blue-50 text-blue-700 border-blue-200" },
  ],
};

const PROJECTS = [
  {
    title: "Ship Booking Platform",
    desc: "A full-stack booking platform for ships with real-time availability, route management and secure payments.",
    tags: ["React", "Node.js", "MongoDB"],
    tagColors: ["bg-cyan-50 text-cyan-600", "bg-green-50 text-green-700", "bg-green-50 text-green-700"],
    img: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=600&q=80",
    github: "https://github.com/shamir29/ship-project",
  },
  {
    title: "Eduverse AI",
    desc: "An AI-powered learning platform offering personalized learning paths, smart quizzes, progress tracking and analytics.",
    tags: ["Next.js", "TypeScript", "MongoDB", "AI APIs"],
    tagColors: [
      "bg-slate-100 text-slate-700",
      "bg-blue-50 text-blue-600",
      "bg-green-50 text-green-700",
      "bg-purple-50 text-purple-600",
    ],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    github: "https://github.com/shamir29/Eduverse-AI",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    org: "Aptitude Guru HEM",
    year: "2024",
    desc: "Developed and maintained web applications using MERN stack. Collaborated with the team to build scalable solutions.",
  },
  {
    role: "Web Development Intern",
    org: "IT TO ALL",
    year: "2024",
    desc: "Worked on frontend development tasks and enhanced web functionalities using JavaScript.",
  },
];

const EDUCATION = [
  {
    degree: "B.E in Computer Science",
    institution: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    detail: "CGPA: 7.4 (3rd Sem)",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Natchimuthu Polytechnic College",
    period: "2022 – 2025",
    detail: "Percentage: 76.7%",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Arckilamatha Matric Hr Sec School",
    period: "2021 – 2022",
    detail: "Percentage: 59%",
  },
];

const CODING_PROFILES = [
  { platform: "LeetCode", detail: "Max Rating: 7.4 | Global Rank: 2,139,835 | Problems Solved: 60" },
  { platform: "StackRack", detail: "Global Rank: 80630 | Problems Solved: 388" },
  { platform: "HackerRank", detail: "Java Basic, SQL Basic | 2025" },
];

const TESTIMONIAL = {
  text: "Shamir is a quick learner and a dedicated developer. His problem-solving skills and consistency truly stand out on any project.",
  author: "– Mentor, Aptitude Guru HEM",
};

/* ─── NAVBAR ────────────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl text-slate-900 tracking-tight">
          <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg inline-flex items-center justify-center text-sm font-bold mr-2">S</span>
          Shamir.
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="https://drive.google.com/file/d/1wPrSShBPQKaRaxaTDUqKYKad3j9FMlN0/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all">
          <Download className="w-4 h-4" /> Download CV
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">{l}</a>
          ))}
          <a href="https://drive.google.com/file/d/1wPrSShBPQKaRaxaTDUqKYKad3j9FMlN0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all">
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Full Stack Developer
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-3">
            Hi, I&apos;m<br />
            Mohamed <span className="text-indigo-600">Shamir S</span>
          </h1>
          <p className="text-lg font-semibold text-slate-700 mb-3">
            I build scalable, efficient and user-friendly web applications.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
            Passionate about turning ideas into impactful digital solutions using modern technologies.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02]">
              Let&apos;s Connect <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects"
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition-all">
              View My Work <Code2 className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="font-medium">Find me on</span>
            {[
              { icon: <Github className="w-4 h-4" />, href: "https://github.com/shamir29" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" },
              { icon: <Code2 className="w-4 h-4" />, href: "https://leetcode.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-indigo-100 rounded-full opacity-60 blur-3xl" />
          <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-indigo-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/myimg.jpeg"
              alt="Mohamed Shamir S"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100">
            <Code2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="absolute bottom-8 left-2 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100">
            <Braces className="w-5 h-5 text-indigo-600" />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-slate-100">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-extrabold text-indigo-600">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── ABOUT + SKILLS ────────────────────────────────────────────────────── */
function AboutAndSkills() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* About */}
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> About Me
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-5">
            Building the web,{" "}
            <span className="text-indigo-600 italic">one line</span>{" "}
            at a time.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            I&apos;m a passionate <span className="text-indigo-600 font-semibold">Full Stack Developer</span> skilled
            in building modern web applications. I love working with clean code, solving real-world problems and
            continuously learning new technologies.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all">
            Read More About Me
          </a>
        </div>
        {/* Skills */}
        <div id="skills">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Technical Skills
          </span>
          <div className="flex flex-col gap-5">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill.name}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${skill.color}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ──────────────────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Featured Projects
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">Things I&apos;ve built</h2>
          </div>
          <a href="#projects"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:gap-2 transition-all">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block cursor-pointer">
              <div className="relative h-44 overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg shadow flex items-center justify-center text-slate-600 group-hover:text-indigo-600 group-hover:bg-white transition-colors">
                  <Github className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                    {p.title}
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" />
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, i) => (
                    <span key={tag}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${p.tagColors[i]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE & EDUCATION ────────────────────────────────────────────── */
function ExperienceAndEducation() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Experience &amp; Education
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="flex flex-col gap-4">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{e.role}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{e.org}</p>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 shrink-0 bg-indigo-50 px-2 py-0.5 rounded-full">
                        {e.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">{e.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Education */}
          <div className="flex flex-col gap-4">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{e.degree}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{e.institution}</p>
                      </div>
                      <span className="text-xs text-slate-500 shrink-0 font-medium">{e.period}</span>
                    </div>
                    <p className="text-xs text-indigo-600 font-semibold mt-1">{e.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CODING + TESTIMONIAL + CONTACT ────────────────────────────────────── */
function BottomSections() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coding Profiles */}
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Coding Profiles
          </span>
          <div className="flex flex-col gap-3">
            {CODING_PROFILES.map((p) => (
              <div key={p.platform}
                className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-4 py-3 hover:shadow-md hover:border-indigo-200 transition-all group cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-slate-800">{p.platform}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{p.detail}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
        {/* Testimonial */}
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> What People Say
          </span>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 h-fit">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed italic mb-4">
              &ldquo;{TESTIMONIAL.text}&rdquo;
            </p>
            <p className="text-xs font-semibold text-slate-500">{TESTIMONIAL.author}</p>
          </div>
        </div>
        {/* Contact */}
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Let&apos;s Work Together
          </span>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-sm text-slate-600 mb-5">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: <Mail className="w-4 h-4" />, text: "mohamedshamir45@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=mohamedshamir45@gmail.com" },
                { icon: <Phone className="w-4 h-4" />, text: "8946011657", href: "tel:8946011657" },
                { icon: <MapPin className="w-4 h-4" />, text: "Tamil Nadu, India", href: undefined },
              ].map((c) => (
                c.href ? (
                  <a key={c.text} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                    <span className="text-indigo-500">{c.icon}</span>
                    {c.text}
                  </a>
                ) : (
                  <div key={c.text} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="text-indigo-500">{c.icon}</span>
                    {c.text}
                  </div>
                )
              ))}
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedshamir45@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
              Let&apos;s Connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-slate-100 py-6 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-400">
          © 2025 Mohamed Shamir S. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 flex items-center gap-1">
          Designed &amp; Built with <span className="text-red-500">♥</span> by Shamir
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <AboutAndSkills />
      <Projects />
      <ExperienceAndEducation />
      <BottomSections />
      <Footer />
    </div>
  );
}
