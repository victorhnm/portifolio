import { useState, useEffect } from 'react';
import { Mail, Linkedin, ChevronDown, ExternalLink, Github, BarChart, Layout, GraduationCap } from 'lucide-react';
import { CONFIG, TOOLS, SERVICES, SOLUTIONS } from './config/portfolio';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-transparent opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-emerald-400 mb-4 text-lg font-medium tracking-wide">Olá! Meu nome é</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Victor Melo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            Transformo seus dados em{' '}
            <span className="text-emerald-400 font-semibold">DECISÕES ESTRATÉGICAS</span>
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 font-medium"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 font-medium"
            >
              Contato
            </button>
          </div>
          
          <div 
            onClick={() => scrollToSection('tools')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          >
            <ChevronDown className="text-emerald-400 w-8 h-8" />
          </div>
        </div>
      </header>

      {/* Tools Section */}
      <section id="tools" className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Principais Ferramentas
            </span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
            {TOOLS.map((tool) => (
              <div 
                key={tool.name}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 relative">
                  <img
                    src={tool.image}
                    alt={tool.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-center text-gray-300 group-hover:text-emerald-400">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 relative bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Soluções
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Serviços
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  {service.icon === 'BarChart' && <BarChart className="w-6 h-6 text-emerald-500" />}
                  {service.icon === 'Layout' && <Layout className="w-6 h-6 text-emerald-500" />}
                  {service.icon === 'GraduationCap' && <GraduationCap className="w-6 h-6 text-emerald-500" />}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Expertise & Experiência
            </span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">+2 Anos de Experiência</h3>
              <p className="text-gray-300">
                Atuação em projetos de Inteligência Comercial em multinacionais como Bosch e Honda, 
                com foco em análise de dados e desenvolvimento de soluções de Business Intelligence.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Especialização Power BI</h3>
              <p className="text-gray-300">
                Desde 2017 trabalhando com Power BI, desenvolvendo expertise em DAX, modelagem de dados
                e criação de dashboards que transformam dados complexos em visualizações intuitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Projetos em Destaque
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFIG.projects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-emerald-400 tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => window.open(project.url, '_blank')}
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Pronto para transformar seus dados em
            </span>
          </h2>
          <h3 className="text-5xl font-bold mb-12 text-emerald-400">
            DECISÕES ESTRATÉGICAS?
          </h3>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 font-medium text-lg"
          >
            Entre em Contato
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades de colaboração.
            Se você tem um projeto em mente ou precisa de consultoria em Business Intelligence,
            entre em contato!
          </p>
          
          <div className="flex justify-center gap-8">
            <a 
              href={`mailto:${CONFIG.social.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a 
              href={CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;