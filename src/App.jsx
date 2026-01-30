import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  LineChart, 
  PieChart, 
  Activity, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Briefcase,
  Menu,
  X,
  Send,
  Database,
  Network,
  Globe,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('corporativo');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Soluciones', href: '#servicios' },
    { name: 'Metodología', href: '#proceso' },
    { name: 'Sectores', href: '#sectores' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const dashboardPreview = {
    corporativo: {
      title: "Panel de Gestión Corporativa",
      metrics: [
        { label: "Eficiencia Operativa", value: "94%", change: "+12%", up: true },
        { label: "Proyectos Activos", value: "23", change: "En curso", up: true },
        { label: "ROI Estimado", value: "1.2M", change: "+8%", up: true }
      ]
    },
    salud: {
      title: "Monitoreo de Gestión Hospitalaria",
      metrics: [
        { label: "Pacientes Atendidos", value: "1,450", change: "+5%", up: true },
        { label: "Ocupación de Camas", value: "82%", change: "-3%", up: false },
        { label: "Tiempo de Espera", value: "14min", change: "-20%", up: true }
      ]
    },
    educacion: {
      title: "Seguimiento Académico Institucional",
      metrics: [
        { label: "Retención Estudiantil", value: "88%", change: "+4%", up: true },
        { label: "Cursos Completados", value: "450", change: "+15%", up: true },
        { label: "Satisfacción", value: "4.8/5", change: "Estable", up: true }
      ]
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Layers size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">GOTA Consulting</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#contacto" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                Iniciar Proyecto
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Consultoría en Transformación Digital
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Diseñamos soluciones digitales que <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">convierten información en decisiones.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Creamos sistemas a medida, dashboards intuitivos y plataformas de análisis que transforman la complejidad de sus datos en claridad estratégica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl group">
                  Cuéntanos tu proyecto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                  Explorar servicios
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic SVG Composition */}
            <div className="lg:w-1/2 w-full relative h-[400px] sm:h-[500px] flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative z-20 bg-white p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center gap-2 w-48 animate-float">
                <div className="bg-blue-600 p-4 rounded-xl text-white shadow-lg shadow-blue-200">
                  <Database size={40} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-800">Data Core</div>
                  <div className="text-xs text-slate-500">Processing...</div>
                </div>
                {/* Connecting Lines (SVG) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 opacity-30 pointer-events-none" viewBox="0 0 600 600">
                  <circle cx="300" cy="300" r="100" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                  <circle cx="300" cy="300" r="180" fill="none" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="300" y1="300" x2="150" y2="150" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="300" y1="300" x2="450" y2="150" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="300" y1="300" x2="150" y2="450" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="300" y1="300" x2="450" y2="450" stroke="#CBD5E1" strokeWidth="2" />
                </svg>
              </div>

              {/* Floating Satellite: Analytics */}
              <div className="absolute top-10 left-4 sm:left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-delayed z-20">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <PieChart size={24} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700">Analítica</div>
                  <div className="text-[10px] text-green-600 font-bold">+24% Crecimiento</div>
                </div>
              </div>

              {/* Floating Satellite: Mobile */}
              <div className="absolute bottom-20 right-4 sm:right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float z-20">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700">Mobile First</div>
                  <div className="text-[10px] text-slate-500">Acceso Remoto</div>
                </div>
              </div>

               {/* Floating Satellite: Global */}
               <div className="absolute top-20 right-8 sm:right-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float-delayed-2 z-10 opacity-90">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Globe size={24} />
                </div>
              </div>

              {/* Floating Satellite: Server/Tech */}
              <div className="absolute bottom-10 left-10 sm:left-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float-delayed z-10 opacity-90">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Network size={24} />
                </div>
              </div>

              {/* Code Snippet Decoration */}
              <div className="absolute top-1/2 -right-4 sm:-right-10 transform -translate-y-1/2 bg-slate-800 text-blue-300 p-4 rounded-lg shadow-xl text-[10px] font-mono opacity-80 hidden sm:block z-0 rotate-6">
                <div>const init = async () ={'>'} {'{'}</div>
                <div className="pl-2">await data.fetch();</div>
                <div className="pl-2">return optimize();</div>
                <div>{'}'}</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Services */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Lo que hacemos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              No solo desarrollamos software; construimos herramientas que resuelven problemas operativos y estratégicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-blue-600" />,
                title: "Dashboards y Analítica",
                desc: "Tableros de control interactivos que centralizan sus KPIs en tiempo real para una visión global inmediata."
              },
              {
                icon: <Layers className="h-8 w-8 text-teal-600" />,
                title: "Sistemas a Medida",
                desc: "Plataformas web diseñadas específicamente para sus flujos de trabajo únicos, eliminando cuellos de botella."
              },
              {
                icon: <Activity className="h-8 w-8 text-indigo-600" />,
                title: "Monitoreo y Seguimiento",
                desc: "Herramientas para supervisar proyectos, recursos o personal, garantizando el cumplimiento de objetivos."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: "Reportes Automatizados",
                desc: "Olvídese de las hojas de cálculo manuales. Generamos informes dinámicos que ahorran cientos de horas."
              },
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: "Portales de Gestión",
                desc: "Interfaces amigables para la administración de usuarios, clientes o beneficiarios en entornos públicos y privados."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-indigo-600" />,
                title: "Consultoría de Datos",
                desc: "Le ayudamos a identificar qué métricas importan realmente y cómo estructurar su información para que sea útil."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-5 bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo / Visuals - LIGHT MODE ENHANCED */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Background Gradients - Light Mode */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-100 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                Experiencia de Usuario
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Control total en una <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">interfaz unificada</span>
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Transformamos hojas de cálculo complejas en tableros visuales que su equipo realmente querrá usar. Priorizamos la usabilidad sin sacrificar la profundidad de los datos.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Tiempo Real", desc: "Sincronización instantánea de datos." },
                  { title: "Multi-dispositivo", desc: "Acceso seguro desde cualquier lugar." },
                  { title: "Alertas Smart", desc: "Notificaciones proactivas de KPIs." },
                  { title: "Exportable", desc: "Reportes PDF/Excel en un clic." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                      <CheckCircle2 size={12} />
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-medium text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Segmented Control - Light Mode */}
              <div className="bg-slate-100 p-1.5 rounded-xl inline-flex flex-wrap gap-1 border border-slate-200">
                {['corporativo', 'salud', 'educacion'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-white text-blue-700 shadow-md ring-1 ring-black/5' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Dashboard Mockup - Light Mode UI */}
            <div className="lg:w-1/2 w-full perspective-1000">
              <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl transform rotate-y-12 hover:rotate-0 transition-all duration-700 ease-out border border-slate-800">
                {/* Glow Effect behind */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-10 -z-10"></div>
                
                {/* Screen Content - Light Mode */}
                <div className="bg-slate-50 rounded-xl overflow-hidden h-full min-h-[450px] flex flex-col">
                  {/* Browser Header */}
                  <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="px-4 py-1 bg-slate-50 rounded-md text-xs text-slate-500 font-mono border border-slate-100 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> secure-app.gota.com
                    </div>
                  </div>

                  {/* App Layout */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 hidden sm:flex">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20"><Layers size={16} /></div>
                      <div className="w-full h-px bg-slate-100"></div>
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${i === 1 ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50'}`}>
                           {i === 1 ? <PieChart size={18} /> : i === 2 ? <Activity size={18} /> : i === 3 ? <Users size={18} /> : <Database size={18} />}
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{dashboardPreview[activeTab].title}</h3>
                          <p className="text-sm text-slate-500">Vista general del sistema</p>
                        </div>
                        <div className="flex gap-2">
                           <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors shadow-sm">Exportar</div>
                           <div className="px-3 py-1 bg-slate-900 rounded text-xs text-white hover:bg-slate-800 cursor-pointer transition-colors shadow-lg shadow-slate-900/10">Reporte</div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {dashboardPreview[activeTab].metrics.map((metric, i) => (
                          <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-semibold">{metric.label}</p>
                            <p className="text-2xl font-bold text-slate-900 mb-2">{metric.value}</p>
                            <div className={`text-xs inline-flex items-center px-2 py-0.5 rounded-full ${metric.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                              {metric.up ? '↑' : '↓'} {metric.change}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chart Area */}
                      <div className="grid grid-cols-3 gap-4 h-40">
                        <div className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
                          <div className="flex justify-between mb-4">
                             <div className="text-xs font-semibold text-slate-500">Rendimiento Mensual</div>
                          </div>
                          <div className="flex-1 flex items-end justify-between gap-2 px-2">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60].map((h, i) => (
                              <div key={i} className="w-full relative group">
                                <div style={{height: `${h}%`}} className="w-full bg-blue-500 rounded-t-sm group-hover:bg-blue-600 transition-colors"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="col-span-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col items-center justify-center relative">
                          <div className="text-xs font-semibold text-slate-500 absolute top-4 left-4">Meta</div>
                          <div className="relative w-24 h-24 flex items-center justify-center">
                            <svg className="transform -rotate-90 w-full h-full">
                                <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                                <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={226} strokeDashoffset={226 - (226 * 85) / 100} className="text-blue-600" strokeLinecap="round" />
                            </svg>
                            <div className="absolute font-bold text-slate-800 text-lg">85%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectores" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Experiencia Multisectorial</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <Building2 className="mx-auto h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg text-slate-900">Empresas</h3>
              <p className="text-slate-600 text-sm mt-2">Optimización de procesos y BI</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <Stethoscope className="mx-auto h-10 w-10 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg text-slate-900">Salud</h3>
              <p className="text-slate-600 text-sm mt-2">Gestión de pacientes y recursos</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <GraduationCap className="mx-auto h-10 w-10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg text-slate-900">Educación</h3>
              <p className="text-slate-600 text-sm mt-2">Plataformas académicas</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <Briefcase className="mx-auto h-10 w-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg text-slate-900">Sector Público</h3>
              <p className="text-slate-600 text-sm mt-2">Transparencia y monitoreo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Cómo trabajamos</h2>
            <p className="text-slate-600 mt-4">Un proceso estructurado para garantizar resultados predecibles.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-0 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Entendimiento", desc: "Analizamos su problema y definimos los objetivos clave." },
                { step: "02", title: "Diseño & Datos", desc: "Estructuramos la información y diseñamos la experiencia visual." },
                { step: "03", title: "Construcción", desc: "Desarrollamos el sistema con enfoque en seguridad y escala." },
                { step: "04", title: "Evolución", desc: "Acompañamiento continuo y mejoras basadas en uso real." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 ring-4 ring-white">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Hablemos de su proyecto</h2>
              <p className="text-slate-600">
                ¿Tiene datos dispersos o necesita una herramienta a medida? Cuéntenos su desafío.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Empresa / Institución</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="Ej. Empresa SAC" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="juan@empresa.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Proyecto</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-slate-600">
                  <option>Seleccione una opción...</option>
                  <option>Dashboard / Analítica</option>
                  <option>Sistema de Gestión a Medida</option>
                  <option>Monitoreo de Proyectos</option>
                  <option>Consultoría de Datos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">¿Cuál es el principal reto a resolver?</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white resize-none" placeholder="Describa brevemente qué necesita solucionar..."></textarea>
              </div>

              <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                Solicitar Propuesta <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
              <Layers size={20} />
            </div>
            <span className="font-bold text-xl text-slate-900">GOTA Consulting</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} GOTA Consulting. Todos los derechos reservados.</p>
            <p className="mt-1">Diseñando el futuro de la información.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;