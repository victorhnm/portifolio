import { useState, useEffect } from 'react';
import { Globe, Mail, Linkedin, ChevronDown, ExternalLink } from 'lucide-react';

const Portfolio = () => {
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

  const dashboards = [
    {
      id: 1,
      title: 'Dashboard Financeiro',
      category: 'Finanças',
      description: 'KPIs financeiros e análise de fluxo de caixa',
      details: 'Análise completa de métricas financeiras, incluindo controle de despesas, receitas e indicadores de performance.',
      image: '/api/placeholder/400/250',
      technologies: ['Power BI', 'DAX', 'SQL']
    },
    {
      id: 2,
      title: 'Dashboard Logística',
      category: 'Operações',
      description: 'Otimização de rotas e KPIs logísticos',
      details: 'Monitoramento em tempo real de operações logísticas, incluindo roteirização e performance de entregas.',
      image: '/api/placeholder/400/250',
      technologies: ['Power BI', 'Python', 'Azure']
    },
    // Adicione mais dashboards conforme necessário
  ];

  const skills = [
    {
      category: 'Visualização de Dados',
      items: [
        { name: 'Power BI', level: 95 },
        { name: 'DAX', level: 90 },
        { name: 'Data Modeling', level: 85 },
      ]
    },
    {
      category: 'Análise de Dados',
      items: [
        { name: 'SQL', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'R', level: 75 },
      ]
    },
    {
      category: 'Cloud & ETL',
      items: [
        { name: 'Azure', level: 85 },
        { name: 'Alteryx', level: 80 },
        { name: 'AWS', level: 75 },
      ]
    }
  ];

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
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-transparent opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-emerald-400 mb-4 text-lg font-medium tracking-wide">Olá! Meu nome é</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Victor Melo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            Especialista em Power BI certificado pela Microsoft, transformando dados em insights valiosos através de dashboards interativos e automatizados.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 font-medium">
              Ver Projetos
            </button>
            <button className="px-8 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 font-medium">
              Contato
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-emerald-400 w-8 h-8" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Expertise & Experiência
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium text-emerald-400">{skillGroup.category}</h3>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Projetos em Destaque
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboards.map((project) => (
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
                  
                  <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group">
                    <span>Ver detalhes</span>
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-32 relative">
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
              href="mailto:seu@email.com"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://seu-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <Globe className="w-5 h-5" />
              <span>Website</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;