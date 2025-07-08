import React, { useState, useEffect } from 'react';
import { Eye, Mail, MapPin, Globe, Star, Calendar, Briefcase, GraduationCap, Code, MessageCircle, Phone, Download, ExternalLink, Github, Linkedin, Twitter, ChevronDown, ChevronUp, Filter, Search, Heart, Share2, Copy, Check } from 'lucide-react';

// Mock data for demonstration
const mockPortfolioData = {
  name: "Alex Johnson",
  username: "alexj",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://alexjohnson.dev",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  bio: "Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and emerging technologies.",
  contactMessage: "Let's build something amazing together! I'm always open to discussing new opportunities and exciting projects.",
  resumeUrl: "#",
  totalViews: 1234,
  monthlyViews: 89,
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson"
  },
  skills: [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "GraphQL",
    "AWS", "Docker", "MongoDB", "PostgreSQL", "Redis", "Kubernetes"
  ],
  experience: [
    {
      position: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      duration: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines reducing deployment time by 70%."
    },
    {
      position: "Software Engineer",
      company: "StartupXYZ",
      duration: "2020 - 2022",
      description: "Built responsive web applications using React and Node.js. Collaborated with designers to create intuitive user interfaces and optimized application performance."
    },
    {
      position: "Junior Developer",
      company: "WebSolutions",
      duration: "2019 - 2020",
      description: "Developed and maintained client websites using modern web technologies. Gained experience in agile development methodologies and version control systems."
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2019",
      description: "Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude."
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "UC Berkeley",
      year: "2017",
      description: "Focused on algorithms and data structures. Active member of the Computer Science Club."
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/alexjohnson/taskmaster"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      liveUrl: "https://weather-dash.com",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard"
    }
  ],
  testimonials: [
    {
      name: "Sarah Mitchell",
      position: "Product Manager at TechCorp",
      content: "Alex consistently delivers high-quality code and innovative solutions. His attention to detail and collaborative spirit make him an invaluable team member.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "CTO at StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and helped scale it to handle thousands of users.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ]
};

const InteractivePortfolio = () => {
  const [portfolioData] = useState(mockPortfolioData);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [skillFilter, setSkillFilter] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    education: true,
    projects: true
  });
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [copiedText, setCopiedText] = useState('');
  const [viewCount, setViewCount] = useState(portfolioData.totalViews);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
    
    // Simulate view increment
    setTimeout(() => setViewCount(prev => prev + 1), 2000);
  }, []);

  const filteredSkills = portfolioData.skills.filter(skill =>
    skill.toLowerCase().includes(skillFilter.toLowerCase())
  );

  const filteredProjects = portfolioData.projects.filter(project => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'featured') return project.featured;
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(projectFilter.toLowerCase())
    );
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleProjectLike = (index) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareProfile = async () => {
    try {
      await navigator.share({
        title: `${portfolioData.name}'s Portfolio`,
        text: portfolioData.bio,
        url: window.location.href,
      });
    } catch (err) {
      copyToClipboard(window.location.href, 'url');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto"></div>
            <div className="animate-pulse mt-4">
              <div className="h-4 bg-purple-200 rounded w-32 mx-auto mb-2"></div>
              <div className="h-3 bg-purple-100 rounded w-24 mx-auto"></div>
            </div>
          </div>
          <p className="mt-6 text-purple-600 font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-purple-100">
        <div className="flex space-x-6">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-purple-600 hover:bg-purple-100'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 pt-20">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={portfolioData.profileImage} 
                  alt={portfolioData.name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  {portfolioData.name}
                </h1>
                <p className="text-purple-600 text-lg mb-2 font-medium">
                  @{portfolioData.username}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center group cursor-pointer" onClick={() => copyToClipboard(portfolioData.email, 'email')}>
                    <Mail className="w-4 h-4 mr-2 group-hover:text-purple-600 transition-colors" />
                    <span className="group-hover:text-purple-600 transition-colors">{portfolioData.email}</span>
                    {copiedText === 'email' && <Check className="w-4 h-4 ml-2 text-green-500" />}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {portfolioData.location}
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <a 
                      href={portfolioData.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      Portfolio Website
                    </a>
                  </div>
                  <div className="flex items-center text-sm bg-purple-100 px-3 py-1 rounded-full">
                    <Eye className="w-4 h-4 mr-1" />
                    {viewCount.toLocaleString()} views
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                  {portfolioData.socialLinks?.linkedin && (
                    <a 
                      href={portfolioData.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {portfolioData.socialLinks?.github && (
                    <a 
                      href={portfolioData.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {portfolioData.socialLinks?.twitter && (
                    <a 
                      href={portfolioData.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  <button
                    onClick={shareProfile}
                    className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                
                {portfolioData.bio && (
                  <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                    {portfolioData.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter skills..."
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-3 rounded-xl text-center font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:font-bold transition-all">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Professional Experience
                </h2>
              </div>
              <button
                onClick={() => toggleSection('experience')}
                className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
              >
                {expandedSections.experience ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {expandedSections.experience && (
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 group-last:hidden"></div>
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-purple-600 font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'experience' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>
              <button
                onClick={() => toggleSection('education')}
                className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
              >
                {expandedSections.education ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {expandedSections.education && (
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.year}
                    </div>
                    {edu.description && (
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={projectFilter}
                  onChange={(e) => setProjectFilter(e.target.value)}
                  className="px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Projects</option>
                  <option value="featured">Featured</option>
                  <option value="react">React</option>
                  <option value="node">Node.js</option>
                  <option value="vue">Vue.js</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button
                      onClick={() => toggleProjectLike(index)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                        likedProjects.has(index) 
                          ? 'bg-red-500 text-white scale-110' 
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedProjects.has(index) ? 'fill-current' : ''}`} />
                    </button>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {portfolioData.testimonials && portfolioData.testimonials.length > 0 && activeSection === 'about' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What People Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">
                      {Array.from({ length: testimonial.rating || 5 }, (_, i) => (
                        <Star key={i} className="w-5 h-5 inline fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200"
                    />
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-purple-600 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-8 border border-purple-100 animate-fadeIn">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let's Connect
              </h2>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                {portfolioData.contactMessage}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => copyToClipboard(portfolioData.email, 'email')}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Email Me</h3>
                  <p className="text-sm opacity-90">{portfolioData.email}</p>
                  {copiedText === 'email' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-2xl">
                      <div className="flex items-center text-white font-medium">
                        <Check className="w-5 h-5 mr-2" />
                        Copied!
                      </div>
                    </div>
                  )}
                </div>
              </button>

              {portfolioData.phone && (
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative text-center">
                    <Phone className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Call Me</h3>
                    <p className="text-sm opacity-90">{portfolioData.phone}</p>
                  </div>
                </a>
              )}

              {portfolioData.socialLinks?.linkedin && (
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative text-center">
                    <Linkedin className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">LinkedIn</h3>
                    <p className="text-sm opacity-90">Connect with me</p>
                  </div>
                </a>
              )}

              {portfolioData.resumeUrl && (
                <a
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative text-center">
                    <Download className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Resume</h3>
                    <p className="text-sm opacity-90">Download PDF</p>
                  </div>
                </a>
              )}
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Quick Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Section (Default) */}
        {activeSection === 'about' && (
          <div className="space-y-8">
            {/* Skills Preview */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Top Skills
                  </h2>
                </div>
                <button
                  onClick={() => setActiveSection('skills')}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center"
                >
                  View All <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {portfolioData.skills.slice(0, 8).map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-3 rounded-xl text-center font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Preview */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Featured Projects
                  </h2>
                </div>
                <button
                  onClick={() => setActiveSection('projects')}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center"
                >
                  View All <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.projects.slice(0, 2).map((project, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    What People Say
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioData.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl">
                          {Array.from({ length: testimonial.rating || 5 }, (_, i) => (
                            <Star key={i} className="w-5 h-5 inline fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200"
                        />
                        <div>
                          <div className="font-bold text-gray-800">{testimonial.name}</div>
                          <div className="text-purple-600 text-sm">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-8 text-gray-600">
          <p className="mb-2">© 2025 {portfolioData.name}. Built with React & ❤️</p>
          <div className="flex justify-center space-x-4 text-sm">
            <button 
              onClick={() => copyToClipboard(window.location.href, 'url')}
              className="hover:text-purple-600 transition-colors flex items-center"
            >
              {copiedText === 'url' ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Share Portfolio
                </>
              )}
            </button>
            <span>•</span>
            <span>{viewCount.toLocaleString()} total views</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default InteractivePortfolio;