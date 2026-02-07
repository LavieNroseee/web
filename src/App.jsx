import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Phone,
  PieChart,
  Send,
  Smartphone,
  Stethoscope,
  Target,
  Users,
  X
} from 'lucide-react';

// --- DATA ---

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Nuestros Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];

const miniServices = [
  {
    icon: <Target className="h-10 w-10 text-blue-600" />,
    title: 'Enfoque en Resultados',
    desc: 'No vendemos código, vendemos soluciones a problemas reales.'
  },
  {
    icon: <Users className="h-10 w-10 text-teal-600" />,
    title: 'Diseño Centrado en Usuario',
    desc: 'Interfaces que tu equipo realmente sabrá y querrá usar.'
  },
  {
    icon: <Activity className="h-10 w-10 text-indigo-600" />,
    title: 'Escalabilidad',
    desc: 'Sistemas preparados para crecer junto con tu organización.'
  }
];

const values = [
  {
    title: 'Transparencia',
    desc: 'Código limpio, procesos claros y comunicación honesta en cada etapa.'
  },
  {
    title: 'Innovación Práctica',
    desc: 'No usamos tecnología por moda, sino para resolver problemas reales de forma eficiente.'
  },
  {
    title: 'Compromiso',
    desc: 'Acompañamos a nuestros clientes desde la idea inicial hasta la evolución del producto.'
  }
];

const methodologySteps = [
  { step: '01', title: 'Entendimiento', desc: 'Analizamos su problema y definimos los objetivos clave.' },
  { step: '02', title: 'Diseño & Datos', desc: 'Estructuramos la información y diseñamos la experiencia visual.' },
  { step: '03', title: 'Construcción', desc: 'Desarrollamos el sistema con enfoque en seguridad y escala.' },
  { step: '04', title: 'Evolución', desc: 'Acompañamiento continuo y mejoras basadas en uso real.' }
];

const services = [
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: 'Dashboards y Analítica',
    desc: 'Tableros de control interactivos que centralizan sus KPIs en tiempo real. Integramos fuentes de datos dispersas (Excel, SQL, APIs) en una vista unificada.',
    features: ['Visualización en tiempo real', 'Alertas automáticas', 'Filtros dinámicos']
  },
  {
    icon: <Layers className="h-8 w-8 text-teal-600" />,
    title: 'Sistemas a Medida',
    desc: 'Desarrollo de software web específico para sus flujos de trabajo. Si no existe en el mercado, nosotros lo construimos a su medida exacta.',
    features: ['Arquitectura escalable', 'Seguridad de datos', 'UX personalizada']
  },
  {
    icon: <Activity className="h-8 w-8 text-indigo-600" />,
    title: 'Monitoreo y Seguimiento',
    desc: 'Herramientas especializadas para supervisar el avance de proyectos, gestión de recursos o desempeño de personal en campo.',
    features: ['Geolocalización', 'Registro de actividades', 'Líneas de tiempo']
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: 'Reportes Automatizados',
    desc: 'Olvídese de copiar y pegar en Excel cada fin de mes. Generamos sistemas que crean y envían informes PDF/Excel automáticamente.',
    features: ['Programación de envíos', 'Formatos corporativos', 'Cero errores humanos']
  },
  {
    icon: <Users className="h-8 w-8 text-teal-600" />,
    title: 'Portales de Gestión',
    desc: 'Interfaces amigables para la administración de usuarios, clientes o beneficiarios, ideales para instituciones educativas o de salud.',
    features: ['Perfiles de usuario', 'Gestión documental', 'Historiales']
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-indigo-600" />,
    title: 'Consultoría de Datos',
    desc: 'Le ayudamos a identificar qué métricas importan realmente, limpiar sus bases de datos y estructurar su información para que sea útil.',
    features: ['Auditoría de datos', 'Estrategia de KPIs', 'Limpieza de información']
  }
];

const dashboardPreview = {
  corporativo: {
    title: 'Panel de Gestión Corporativa',
    metrics: [
      { label: 'Eficiencia Operativa', value: '94%', change: '+12%', up: true },
      { label: 'Proyectos Activos', value: '23', change: 'En curso', up: true },
      { label: 'ROI Estimado', value: '1.2M', change: '+8%', up: true }
    ]
  },
  salud: {
    title: 'Monitoreo de Gestión Hospitalaria',
    metrics: [
      { label: 'Pacientes Atendidos', value: '1,450', change: '+5%', up: true },
      { label: 'Ocupación de Camas', value: '82%', change: '-3%', up: false },
      { label: 'Tiempo de Espera', value: '14min', change: '-20%', up: true }
    ]
  },
  educacion: {
    title: 'Seguimiento Académico Institucional',
    metrics: [
      { label: 'Retención Estudiantil', value: '88%', change: '+4%', up: true },
      { label: 'Cursos Completados', value: '450', change: '+15%', up: true },
      { label: 'Satisfacción', value: '4.8/5', change: 'Estable', up: true }
    ]
  }
};

// --- SECTIONS ---

const HeroSection = ({ navigateTo }) => (
  <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60 z-0"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Consultoría en Transformación Digital
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            Diseñamos soluciones digitales que <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              convierten información en decisiones.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            GOTA Consulting transforma la complejidad de sus datos en claridad estratégica mediante sistemas a
            medida y dashboards intuitivos.
          </p>
          <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel neque at mauris consequat
            posuere, sed commodo lectus ullamcorper. Curabitur interdum, massa eget aliquet lacinia, erat
            sapien pulvinar justo, vitae fermentum lorem justo at nibh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigateTo('contacto')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl group"
            >
              Cuéntanos tu proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('proyectos')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
            >
              Ver Proyectos
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative h-[400px] sm:h-[500px] flex items-center justify-center">
          <div className="relative z-20 bg-white p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center gap-2 w-48 animate-float">
            <div className="bg-blue-600 p-4 rounded-xl text-white shadow-lg shadow-blue-200">
              <Database size={40} />
            </div>
            <div className="text-center">
              <div className="font-bold text-slate-800">Data Core</div>
              <div className="text-xs text-slate-500">Processing...</div>
            </div>
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 opacity-30 pointer-events-none"
              viewBox="0 0 600 600"
            >
              <circle
                cx="300"
                cy="300"
                r="100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="animate-spin-slow"
              />
              <circle cx="300" cy="300" r="180" fill="none" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="300" y1="300" x2="150" y2="150" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="300" y1="300" x2="450" y2="150" stroke="#CBD5E1" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-10 left-4 sm:left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-delayed z-20">
            <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
              <PieChart size={24} />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700">Analítica</div>
              <div className="text-[10px] text-green-600 font-bold">+24% Crecimiento</div>
            </div>
          </div>
          <div className="absolute bottom-20 right-4 sm:right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float z-20">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Smartphone size={24} />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700">Mobile First</div>
              <div className="text-[10px] text-slate-500">Acceso Remoto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MiniServicesSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir GOTA?</h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-6">
        Combinamos estrategia de negocio con tecnología de punta para entregar impacto sostenido.
      </p>
      <p className="text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae porta lacus. Donec auctor, nunc
        sed consequat lacinia, magna lacus posuere lectus, at feugiat justo erat sed nulla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {miniServices.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutHeroSection = () => (
  <section className="bg-slate-900 text-white py-20 px-4 mb-20">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Más que consultores, somos aliados estratégicos</h1>
      <p className="text-xl text-slate-300">
        Nuestra misión es democratizar el acceso a la inteligencia de negocios mediante herramientas digitales
        accesibles y potentes.
      </p>
      <p className="text-sm text-slate-400 mt-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, augue non ultricies
        malesuada, lectus lacus lacinia risus, non fermentum neque tortor sed justo.
      </p>
    </div>
  </section>
);

const AboutStorySection = () => (
  <section className="grid md:grid-cols-2 gap-16 items-center mb-24">
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
      <p className="text-slate-600 mb-4 leading-relaxed">
        GOTA Consulting nació de una observación simple: muchas organizaciones tienen datos valiosos, pero
        carecen de las herramientas para interpretarlos.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Fundada por un equipo multidisciplinario de ingenieros, diseñadores y analistas de negocio, nos
        dedicamos a cerrar la brecha entre la información cruda y la toma de decisiones ejecutivas.
      </p>
      <p className="text-slate-500 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et orci at metus convallis
        tincidunt, sed gravida metus pretium. Suspendisse et ultrices libero, nec consequat nisi.
      </p>
      <div className="flex gap-4 mt-8 flex-wrap">
        <div className="flex items-center gap-2 text-blue-700 font-semibold bg-blue-50 px-4 py-2 rounded-lg">
          <Award size={20} /> +50 Proyectos Exitosos
        </div>
        <div className="flex items-center gap-2 text-teal-700 font-semibold bg-teal-50 px-4 py-2 rounded-lg">
          <Users size={20} /> Equipo Senior
        </div>
        <div className="flex items-center gap-2 text-indigo-700 font-semibold bg-indigo-50 px-4 py-2 rounded-lg">
          <Lightbulb size={20} /> Laboratorio de Innovación
        </div>
      </div>
    </div>
    <div className="bg-slate-100 rounded-3xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>
      <div className="text-center relative z-10">
        <div className="flex justify-center -space-x-4 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-slate-300 font-bold shadow-md"
            >
              <Users size={24} />
            </div>
          ))}
        </div>
        <p className="font-bold text-slate-900 text-xl">Talento Humano</p>
        <p className="text-slate-500">El corazón de nuestra tecnología</p>
      </div>
    </div>
  </section>
);

const AboutValuesSection = () => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Nuestros Valores</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {values.map((val, i) => (
        <div key={i} className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
          <p className="text-slate-600">{val.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const AboutMethodologySection = () => (
  <section className="bg-slate-50 rounded-3xl p-8 md:p-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900">Metodología de Trabajo</h2>
      <p className="text-slate-600 mt-4">Un proceso estructurado para garantizar resultados predecibles.</p>
      <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis posuere nulla. Integer luctus diam
        non turpis aliquam, eget interdum magna lacinia. Aliquam erat volutpat.
      </p>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {methodologySteps.map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 ring-4 ring-white">
            {item.step}
          </div>
          <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const ServicesHeaderSection = () => (
  <section className="text-center mb-16">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h1>
    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
      Ofrecemos un abanico completo de soluciones digitales diseñadas para optimizar la gestión y
      visualización de información.
    </p>
    <p className="text-slate-500 max-w-3xl mx-auto mt-4 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id orci vestibulum, elementum sem
      non, egestas sem. In vel libero at ipsum commodo luctus sed eget justo.
    </p>
  </section>
);

const ServicesGridSection = () => (
  <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
      >
        <div className="mb-5 bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm mb-6">{service.desc}</p>
        <ul className="space-y-2">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-center text-xs text-slate-500 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div> {feat}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

const ServicesCtaSection = () => (
  <section className="mt-20 bg-blue-600 rounded-3xl p-10 text-center text-white relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-4">¿No encuentra lo que busca?</h3>
      <p className="mb-4 opacity-90">
        Cada organización es única. Conversemos para diseñar una solución específica para usted.
      </p>
      <p className="mb-8 opacity-80 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate bibendum sapien, eget
        finibus nisl. Integer a turpis quis dolor consectetur fermentum.
      </p>
      <a
        href="#contacto"
        className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-block"
      >
        Consultar Personalización
      </a>
    </div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -ml-16 -mb-16"></div>
  </section>
);

const ProjectsHeaderSection = () => (
  <section className="text-center mb-12">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Proyectos</h1>
    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
      Explore cómo nuestras soluciones se adaptan a diferentes industrias. Esta demostración interactiva
      refleja la calidad de nuestros entregables.
    </p>
    <p className="text-slate-500 max-w-3xl mx-auto mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ligula sit amet mi posuere,
      non posuere eros aliquet. Etiam at placerat lacus, quis luctus sem.
    </p>
  </section>
);

const ProjectsDemoSection = ({ activeTab, onChangeTab }) => (
  <section className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-20">
    <div className="p-8 bg-slate-50 border-b border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Demo Interactiva</h2>
          <p className="text-slate-500">Seleccione un sector para ver el dashboard en acción.</p>
        </div>
        <div className="bg-white p-1.5 rounded-xl inline-flex flex-wrap gap-1 border border-slate-200 shadow-sm">
          {['corporativo', 'salud', 'educacion'].map((tab) => (
            <button
              key={tab}
              onClick={() => onChangeTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="p-8 bg-slate-100">
      <div className="relative rounded-2xl bg-white p-2 shadow-lg border border-slate-200 max-w-5xl mx-auto">
        <div className="bg-slate-50 rounded-xl overflow-hidden h-full min-h-[450px] flex flex-col">
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
          <div className="flex flex-1 overflow-hidden">
            <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 hidden sm:flex">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Layers size={16} />
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    i === 1 ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {i === 1 ? (
                    <PieChart size={18} />
                  ) : i === 2 ? (
                    <Activity size={18} />
                  ) : i === 3 ? (
                    <Users size={18} />
                  ) : (
                    <Database size={18} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{dashboardPreview[activeTab].title}</h3>
                  <p className="text-sm text-slate-500">Vista general del sistema</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors shadow-sm">
                    Exportar
                  </div>
                  <div className="px-3 py-1 bg-slate-900 rounded text-xs text-white hover:bg-slate-800 cursor-pointer transition-colors shadow-lg shadow-slate-900/10">
                    Reporte
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {dashboardPreview[activeTab].metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-semibold">
                      {metric.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-900 mb-2">{metric.value}</p>
                    <div
                      className={`text-xs inline-flex items-center px-2 py-0.5 rounded-full ${
                        metric.up ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {metric.up ? '↑' : '↓'} {metric.change}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 h-40">
                <div className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <div className="text-xs font-semibold text-slate-500">Rendimiento Mensual</div>
                  </div>
                  <div className="flex-1 flex items-end justify-between gap-2 px-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60].map((h, i) => (
                      <div key={i} className="w-full relative group">
                        <div style={{ height: `${h}%` }} className="w-full bg-blue-500 rounded-t-sm group-hover:bg-blue-600 transition-colors"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col items-center justify-center relative">
                  <div className="text-xs font-semibold text-slate-500 absolute top-4 left-4">Meta</div>
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        cx="48"
                        cy="48"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-100"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={226}
                        strokeDashoffset={226 - (226 * 85) / 100}
                        className="text-blue-600"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute font-bold text-slate-800 text-lg">85%</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar consequat lectus,
                vitae posuere ipsum laoreet non.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSectorsSection = () => (
  <section>
    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Sectores de Impacto</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group text-center">
        <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="font-semibold text-lg text-slate-900">Empresas</h3>
        <p className="text-slate-600 text-sm mt-2">Finanzas y Operaciones</p>
      </div>
      <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group text-center">
        <Stethoscope className="mx-auto h-12 w-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="font-semibold text-lg text-slate-900">Salud</h3>
        <p className="text-slate-600 text-sm mt-2">Clínicas y Hospitales</p>
      </div>
      <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group text-center">
        <GraduationCap className="mx-auto h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="font-semibold text-lg text-slate-900">Educación</h3>
        <p className="text-slate-600 text-sm mt-2">Universidades y Colegios</p>
      </div>
      <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 group text-center">
        <Briefcase className="mx-auto h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="font-semibold text-lg text-slate-900">Gobierno</h3>
        <p className="text-slate-600 text-sm mt-2">Instituciones Públicas</p>
      </div>
    </div>
  </section>
);

const ContactIntroSection = () => (
  <section>
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Empecemos a trabajar juntos</h1>
    <p className="text-lg text-slate-600 mb-6">
      Estamos listos para escuchar sus necesidades y proponer una solución a medida. Complete el formulario y
      nos pondremos en contacto a la brevedad.
    </p>
    <p className="text-slate-500 mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, mi sed facilisis
      ullamcorper, ex sem porttitor lorem, id pharetra velit massa vitae nisi.
    </p>

    <div className="space-y-6 mb-12">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
          <Mail size={24} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Correo Electrónico</h3>
          <p className="text-slate-600">contacto@gotaconsulting.com</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
          <Phone size={24} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Teléfono</h3>
          <p className="text-slate-600">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
          <MapPin size={24} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Oficinas</h3>
          <p className="text-slate-600">
            Centro Empresarial Torre A, Piso 12
            <br />
            Ciudad de Negocios
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Formulario de Contacto</h2>
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
            placeholder="Ej. Juan Pérez"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
            placeholder="Ej. Empresa SAC"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
          placeholder="juan@empresa.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Proyecto</label>
        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 text-slate-600">
          <option>Seleccione una opción...</option>
          <option>Dashboard / Analítica</option>
          <option>Sistema de Gestión a Medida</option>
          <option>Monitoreo de Proyectos</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
        <textarea
          rows="4"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 resize-none"
          placeholder="Cuéntenos sobre su desafío..."
        ></textarea>
      </div>

      <button
        type="button"
        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2"
      >
        Enviar Mensaje <Send size={18} />
      </button>
    </form>
  </section>
);

// --- PAGES ---

const HomePage = ({ navigateTo }) => (
  <>
    <HeroSection navigateTo={navigateTo} />
    <MiniServicesSection />
  </>
);

const AboutPage = () => (
  <div className="pt-24 pb-20">
    <AboutHeroSection />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutStorySection />
      <AboutValuesSection />
      <AboutMethodologySection />
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ServicesHeaderSection />
    <ServicesGridSection />
    <ServicesCtaSection />
  </div>
);

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('corporativo');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeaderSection />
        <ProjectsDemoSection activeTab={activeTab} onChangeTab={setActiveTab} />
        <ProjectsSectorsSection />
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16">
      <ContactIntroSection />
      <ContactFormSection />
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-blue-100 flex flex-col">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('inicio')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Layers size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">GOTA Consulting</span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigateTo('contacto')}
                className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                Iniciar Proyecto
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 h-screen">
            <div className="px-4 pt-8 pb-3 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`block w-full text-left px-3 py-3 rounded-lg text-lg font-medium ${
                    currentPage === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {currentPage === 'inicio' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'nosotros' && <AboutPage />}
        {currentPage === 'servicios' && <ServicesPage />}
        {currentPage === 'proyectos' && <ProjectsPage />}
        {currentPage === 'contacto' && <ContactPage />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
                  <Layers size={20} />
                </div>
                <span className="font-bold text-xl text-slate-900">GOTA Consulting</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">
                Transformando datos en decisiones estratégicas. Su aliado tecnológico para el futuro digital.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <button onClick={() => navigateTo('nosotros')} className="hover:text-blue-600">
                    Quiénes Somos
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('servicios')} className="hover:text-blue-600">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('proyectos')} className="hover:text-blue-600">
                    Proyectos
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <span className="cursor-pointer hover:text-blue-600">Privacidad</span>
                </li>
                <li>
                  <span className="cursor-pointer hover:text-blue-600">Términos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} GOTA Consulting. Todos los derechos reservados.</p>
            <p>Diseñado con precisión.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
