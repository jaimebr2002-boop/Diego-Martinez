import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scissors, Star, Clock, MapPin, Phone, Instagram, Facebook, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Corte de Cabello", price: "Desde $25", desc: "Corte personalizado según tu estilo y tipo de rostro." },
    { name: "Coloración", price: "Desde $60", desc: "Tintes, mechas, balayage y técnicas de color avanzadas." },
    { name: "Peinados", price: "Desde $40", desc: "Peinados para eventos especiales, bodas y graduaciones." },
    { name: "Tratamientos", price: "Desde $35", desc: "Hidratación profunda, keratina y reparación capilar." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776085052/257596265_431170245043199_4491070620508701295_n._reowjs.jpg" 
              alt="Diego Martínez Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-[#D4AF37]/50"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-serif font-bold tracking-tighter text-[#D4AF37]">
              DIEGO MARTÍNEZ
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre-nosotros" className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>SOBRE NOSOTROS</a>
            <a href="#servicios" className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>SERVICIOS</a>
            <a href="#galeria" className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>GALERÍA</a>
            <a href="#contacto" className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>CONTACTO</a>
            <a href="#contacto" className="px-6 py-2.5 text-sm font-medium tracking-wide transition-colors bg-[#D4AF37] text-white hover:bg-[#B8962E] shadow-lg shadow-[#D4AF37]/20 rounded-sm">
              RESERVAR
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a href="#sobre-nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Sobre Nosotros</a>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Servicios</a>
          <a href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Galería</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Contacto</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-6 py-4 bg-[#D4AF37] text-white text-center text-lg font-medium shadow-lg shadow-[#D4AF37]/20 rounded-sm">
            Reservar Cita
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
          alt="Diego Martinez Salon Interior" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20 flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776085052/257596265_431170245043199_4491070620508701295_n._reowjs.jpg"
            alt="Diego Martínez Logo"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover mb-8 border-2 border-[#D4AF37]/50 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
          >
            Eleva tu <br/><span className="italic">estilo personal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Un espacio dedicado a la belleza, el cuidado capilar y la expresión de tu mejor versión.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contacto" className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-[#B8962E] transition-colors shadow-lg shadow-[#D4AF37]/20 rounded-sm">
              RESERVAR AHORA <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-auto md:h-[700px] w-full"
          >
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/245843540_102708525534574_982489705347528426_n_mmv6yt.jpg" 
              alt="Diego Martínez" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-stone-200 -z-10 hidden md:block" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-stone-500 mb-4">SOBRE NOSOTROS</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">La pasión por el <span className="italic text-stone-500">detalle</span></h3>
            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
              <p>
                En Diego Martínez Salón, creemos que el cabello es una forma de arte y expresión personal. Con años de experiencia en el sector, nuestro objetivo es realzar la belleza natural de cada cliente.
              </p>
              <p>
                Nos mantenemos a la vanguardia de las últimas tendencias y técnicas, utilizando productos de la más alta calidad para asegurar resultados excepcionales que no solo se ven bien al salir del salón, sino que perduran.
              </p>
              <p>
                Cada visita es una experiencia personalizada, diseñada para que te relajes, disfrutes y salgas sintiéndote renovado y seguro de ti mismo.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
              <div>
                <p className="text-4xl font-serif mb-2">10+</p>
                <p className="text-sm text-stone-500 tracking-wide">AÑOS DE EXPERIENCIA</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">5k+</p>
                <p className="text-sm text-stone-500 tracking-wide">CLIENTES FELICES</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 md:py-32 bg-stone-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-medium tracking-widest text-stone-400 mb-4">NUESTROS SERVICIOS</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Experiencia y <span className="italic text-stone-400">calidad</span></h3>
            <p className="text-stone-400 font-light text-lg">
              Ofrecemos una gama completa de servicios de peluquería y estilismo adaptados a tus necesidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-stone-800 pb-8"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-2xl font-serif group-hover:text-stone-300 transition-colors">{service.name}</h4>
                  <span className="text-stone-400 font-medium tracking-wide">{service.price}</span>
                </div>
                <p className="text-stone-500 font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a href="#contacto" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 text-sm font-medium tracking-widest transition-colors">
              VER TODOS LOS SERVICIOS
            </a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-medium tracking-widest text-stone-500 mb-4">PORTAFOLIO</h2>
              <h3 className="text-4xl md:text-5xl font-serif">Galería de <span className="italic text-stone-500">resultados</span></h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone-900 hover:text-stone-500 transition-colors font-medium tracking-wide text-sm">
              <Instagram size={18} /> SÍGUENOS EN INSTAGRAM
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/649238785_18061634327661149_8192427368858696439_n._bal5h6.jpg" alt="Resultado 1" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/608738385_18054229526661149_8813562606968366868_n._scvt4k.jpg" alt="Resultado 2" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/649225789_18061634348661149_6402397685897284487_n._ljemww.jpg" alt="Resultado 3" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/358561714_17943479945661149_371122387090316100_n._s0qvsh.jpg" alt="Resultado 4" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/409159358_17974514963661149_4978387618025049562_n._jexiij.jpg" alt="Resultado 5" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
            <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776084894/621450251_18105257065691401_6508527596942626371_n._pvvgkf.jpg" alt="Resultado 6" className="w-full h-full object-cover aspect-[4/5] bg-stone-100 rounded-sm shadow-sm" />
          </div>
        </div>
      </section>

      {/* Contacto & Footer */}
      <section id="contacto" className="bg-stone-100 pt-24 md:pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Reserva tu <span className="italic text-stone-500">cita</span></h2>
              <p className="text-stone-600 font-light text-lg mb-12 max-w-md">
                Estamos listos para transformar tu look. Contáctanos para agendar tu próxima visita o resolver cualquier duda.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-stone-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-medium mb-1">Ubicación</h4>
                    <p className="text-stone-600 font-light">Av. Principal 123, Ciudad<br/>Código Postal 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-stone-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-medium mb-1">Contacto</h4>
                    <p className="text-stone-600 font-light">+1 (234) 567-8900<br/>hola@diegomartinez.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-stone-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-medium mb-1">Horario</h4>
                    <p className="text-stone-600 font-light">Mar - Sáb: 10:00 AM - 8:00 PM<br/>Dom - Lun: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-serif mb-8">Envíanos un mensaje</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-500 mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-500 mb-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-500 mb-2">Servicio de interés</label>
                  <select id="service" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent text-stone-900">
                    <option value="">Selecciona un servicio</option>
                    <option value="corte">Corte de Cabello</option>
                    <option value="color">Coloración</option>
                    <option value="peinado">Peinado</option>
                    <option value="tratamiento">Tratamiento</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#D4AF37] text-white py-4 text-sm font-medium tracking-widest hover:bg-[#B8962E] transition-colors mt-4 rounded-sm shadow-lg shadow-[#D4AF37]/20">
                  SOLICITAR CITA
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Diego Martínez Salón. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
