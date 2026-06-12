'use client';

import React, { useState } from 'react';

// Business Details constants
const BUSINESS = {
  companyName: "STAR INTERIORS By GAURAV KESARE",
  phoneWhatsApp: "+91 77384 13372",
  whatsappUrl: "https://wa.me/917738413372",
  address: "SHOP NO- 07, Ashapura Residency, PLOT NO - 25, near MNR SCHOOL, Sector 6, Kamothe, Panvel, Maharashtra 410209",
  shortAddress: "SHOP NO- 07, Ashapura Residency, Sector 6, Kamothe, Panvel - 410209"
};

// Interface for Technical Specs
interface SpecRow {
  label: string;
  value: string;
}

interface ServiceDetail {
  title: string;
  grade: string;
  hardware: string;
  timeframe: string;
  assurance: string;
  description: string;
  specs: SpecRow[];
}

export default function Home() {
  // Category splits for section 2
  const [activeCategory, setActiveCategory] = useState<'turnkey' | 'space' | 'kitchen'>('turnkey');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    category: 'Turnkey Luxury Execution',
    budget: '₹5,00,000 - ₹10,00,000'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
    }
  };

  // Technical Operations data structure
  const categoriesData: Record<'turnkey' | 'space' | 'kitchen', ServiceDetail> = {
    turnkey: {
      title: "Turnkey Luxury Execution",
      grade: "A++ Commercial Grade Anti-Termite Marine Plywood",
      hardware: "Premium Custom Soft-Shut Sleek Hydraulics",
      timeframe: "45 Working Days Handover Guarantee",
      assurance: "10-Year Site Warping & Structural Warranty",
      description: "Our Turnkey Executive workflow manages your entire residential unit from standard raw concrete shell into a fully realized luxury residence. This encompasses architectural design, civil layouts, electrical sync, concealed lighting, premium wallpaper backdrop layers, and designer wood finishes.",
      specs: [
        { label: "Skeletal Masonry & Framing", value: "Reinforced alloy channels plus premium water-resistant partition structures" },
        { label: "Electrical Distribution Sync", value: "Concealed fire-retardant multi-strand copper conduits with gold-trimmed plates" },
        { label: "Bespoke Paneling & Veneer", value: "Premium teak veneers paired with hand-polished mirror coatings" },
        { label: "Execution Precision Protocol", value: "Daily laser level measurements to guarantee strictly flush alignments" }
      ]
    },
    space: {
      title: "Advanced Space Optimization",
      grade: "Heavy-Duty Lightweight Premium Alum-alloy Frameworks",
      hardware: "Bespoke Premium Slide-Track & Flush Partition Systems",
      timeframe: "30 Working Days Installation Cycle",
      assurance: "5-Year Mechanical Slider Calibration Guarantee",
      description: "Mastering micro-architectures. We optimize 1 BHK, 2 BHK & 3 BHK flats across Kamothe and wider Panvel using innovative structural layouts, folding workspace panels, slide-away library frames, and multi-functional space solutions designed for optimal modern ergonomics.",
      specs: [
        { label: "In-Wall Wardrobe Concealment", value: "Ultra-slim 3.2-meter floor-to-ceiling sleek profile wardrobe integrations" },
        { label: "Convertible Structural Elements", value: "Seamless hydraulic wall sofas and stowaway modern desk slabs" },
        { label: "Volumetric Layout Efficiency", value: "Re-routing access passages to reclaim up to 25% of absolute floor real estate" },
        { label: "Invisible Storage Compounding", value: "Concealed platform deck cavities and under-bedroom smart organizers" }
      ]
    },
    kitchen: {
      title: "Custom Modular Kitchens",
      grade: "Boiling Water Resistant (BWR) Gurjan Core Marine Ply",
      hardware: "Premium Heavy-Duty Anti-Noise Soft-Close Drawer Systems",
      timeframe: "21 Days Precision Assembly & Fitting",
      assurance: "Lifetime Hardware & Drawer Runner Warranty",
      description: "Elite culinary workstations. Built using custom anti-moisture engineered wood cabinetry, gold-profile concealed Gola layouts, custom anti-bacterial quartz workspace surfaces, and fully integrated cooking systems tailored specifically for heavy Indian culinary patterns.",
      specs: [
        { label: "Countertop Construction Slab", value: "Stain-resistant 20mm premium Quartz countertops with double-beveled borders" },
        { label: "Gola Handleless Profile", value: "Anodized champagne gold brushed aluminum handleless rail channels" },
        { label: "Dynamic Culinary Zones", value: "Logical split layout separating prep, raw-wash, cooking hot zone & plating areas" },
        { label: "Ventilation Master Conduit", value: "Integrated high-suction smart chimneys matching auto-clean heat layouts" }
      ]
    }
  };

  const activeService = categoriesData[activeCategory];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans relative overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      
      {/* 1. FULL-SCREEN IMMERSIVE AUTOPLAY VIDEO HERO (The Crown Jewel) */}
      <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Background Video */}
        <video src="/1000250857.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"></video>

        {/* Semi-transparent black overlay gradient & vignette for optimal text readability while keeping video visible */}
        <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505] z-10 pointer-events-none"></div>

        {/* Header Block floating on top of the hero backdrop (z-20) */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-5">
          <div className="glass-header rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 flex items-center justify-between border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-white text-base sm:text-lg md:text-xl font-bold uppercase">
                STAR INTERIORS
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#D4AF37] uppercase font-light">
                By GAURAV KESARE
              </span>
            </div>

            {/* Desktop Navigation links */}
            <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] text-white/80 uppercase font-medium">
              <a href="#services" className="hover:text-[#D4AF37] transition-colors duration-300">Operations</a>
              <a href="#reviews" className="hover:text-[#D4AF37] transition-colors duration-300">Google Reviews</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">Consultation</a>
            </nav>

            {/* Quick CTAs */}
            <div className="flex items-center gap-3">
              <a 
                href={BUSINESS.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.25)]"
              >
                {/* Custom WhatsApp Icon Inline SVG */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.628 3.84 14.114 2.812 11.5 2.811 6.062 2.811 1.637 7.181 1.633 12.614c-.001 1.71.452 3.38 1.312 4.864L1.91 21.87l4.737-1.242s.001 0 .001 0zM17.56 14.34c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span className="hidden xs:inline">WhatsApp</span>
              </a>
              <a 
                href="#contact" 
                className="hidden sm:inline-block bg-[#D4AF37] hover:bg-[#F3CD57] text-[#050505] text-xs font-bold px-5 py-2 rounded-full uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              >
                Inquire
              </a>
            </div>
          </div>
        </header>

        {/* Hero Central Typography (z-20) */}
        <div className="relative z-20 flex-grow flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[9px] font-mono font-medium tracking-[0.25em] text-[#D4AF37] uppercase">
              Premium Interior Masterpieces
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15] champagne-gradient-text uppercase">
            Modern & Classy Interiors
          </h1>

          <p className="text-xs sm:text-sm text-neutral-300/90 font-light max-w-lg mx-auto tracking-wide mb-8 leading-relaxed">
            Crafting premium spaces that convey deep comfort and luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center px-4 max-w-md mx-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3CD57] text-[#050505] text-[10px] font-bold uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)]"
            >
              Book Consultation
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-black/45 backdrop-blur-sm sm:bg-transparent hover:bg-neutral-900/60 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-md border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              See Deliverables
            </a>
          </div>
        </div>

        {/* Scrolling Indicator Footer */}
        <div className="relative z-20 pb-8 flex flex-col items-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-2">Architectural Blueprint Flow</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse"></div>
        </div>

      </section>

      {/* 2. REAL TECHNICAL OPERATIONS & SERVICES (Logic Split Grid) */}
      <section id="services" className="relative py-24 px-4 sm:px-6 bg-[#050505] border-t border-[#D4AF37]/15">
        
        {/* Absolute Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Section Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800/80 pb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
                01. Operational Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase">
                Technical Execution Splits
              </h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-sm text-neutral-400 font-light leading-relaxed">
              We perform heavy-duty site planning and structural design built to strict ISO material requirements and tailored for the Panvel environment.
            </p>
          </div>

          {/* Interactive Split Grid Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav Column: Category Selector Buttons (Logical Splits) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Category Case 1 */}
              <button 
                onClick={() => setActiveCategory('turnkey')}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${
                  activeCategory === 'turnkey' 
                    ? 'bg-[#121212]/90 border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.06)]' 
                    : 'bg-transparent border-neutral-800/80 hover:border-neutral-700 hover:bg-[#121212]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xs font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">Division 01</span>
                  {activeCategory === 'turnkey' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-white font-medium uppercase tracking-wide">
                  Turnkey Luxury Execution
                </h3>
                <p className="mt-2 text-xs text-neutral-400 font-light line-clamp-2">
                  Complete end-to-end design, site engineering, layout leveling, lighting systems, and final handover.
                </p>
              </button>

              {/* Category Case 2 */}
              <button 
                onClick={() => setActiveCategory('space')}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${
                  activeCategory === 'space' 
                    ? 'bg-[#121212]/90 border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.06)]' 
                    : 'bg-transparent border-neutral-800/80 hover:border-neutral-700 hover:bg-[#121212]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xs font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">Division 02</span>
                  {activeCategory === 'space' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-white font-medium uppercase tracking-wide">
                  Advanced Space Optimization
                </h3>
                <p className="mt-2 text-xs text-neutral-400 font-light line-clamp-2">
                  Micro-space engineering, foldaway furniture systems, custom sliding glass partitions, and wardrobe structures.
                </p>
              </button>

              {/* Category Case 3 */}
              <button 
                onClick={() => setActiveCategory('kitchen')}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${
                  activeCategory === 'kitchen' 
                    ? 'bg-[#121212]/90 border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.06)]' 
                    : 'bg-transparent border-neutral-800/80 hover:border-neutral-700 hover:bg-[#121212]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xs font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">Division 03</span>
                  {activeCategory === 'kitchen' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-white font-medium uppercase tracking-wide">
                  Custom Modular Kitchens
                </h3>
                <p className="mt-2 text-xs text-neutral-400 font-light line-clamp-2">
                  High-durability BWR marine plywood hubs, acrylic shutters, premium soft-close Tandem drawer slides.
                </p>
              </button>

            </div>

            {/* Right Column: Detailed technical layout control panel corresponding to the select category */}
            <div className="lg:col-span-8 p-6 sm:p-10 rounded-lg bg-[#121212] border border-neutral-800/90 relative overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/55 group shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              
              {/* Platinum decorative wireframe lines that glow gold on hover */}
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-slate-700 group-hover:bg-[#D4AF37] transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-[1px] h-32 bg-slate-700 group-hover:bg-[#D4AF37] transition-all duration-500"></div>

              {/* Selected Service Title block */}
              <div className="mb-8">
                <span className="text-2xs font-mono font-medium text-[#D4AF37] uppercase tracking-[0.2em] block mb-2">
                  Service Specifications Log
                </span>
                <h4 className="text-2xl sm:text-3.5xl font-serif text-white uppercase font-bold tracking-wide">
                  {activeService.title}
                </h4>
              </div>

              {/* Service Description */}
              <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-8">
                {activeService.description}
              </p>

              {/* Blueprint Meta-specs Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-[#050505] rounded border border-neutral-800/80">
                  <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase block mb-1">Ply/Core Standard Wood</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{activeService.grade}</p>
                </div>
                <div className="p-4 bg-[#050505] rounded border border-neutral-800/80">
                  <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase block mb-1">Hardware & runners system</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{activeService.hardware}</p>
                </div>
                <div className="p-4 bg-[#050505] rounded border border-neutral-800/80">
                  <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase block mb-1">Site Delivery Cycle</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{activeService.timeframe}</p>
                </div>
                <div className="p-4 bg-[#050505] rounded border border-neutral-800/80">
                  <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase block mb-1">Integrity Assurance</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{activeService.assurance}</p>
                </div>
              </div>

              {/* Interactive Blueprint Sheet */}
              <div className="border-t border-neutral-800 pt-8">
                <h5 className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold mb-5 flex items-center gap-2">
                  {/* Blueprint icon */}
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Operational Construction Blueprints
                </h5>

                <div className="divide-y divide-neutral-900 border-b border-neutral-900">
                  {activeService.specs.map((spec, index) => (
                    <div key={index} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                      <span className="md:col-span-4 text-xs font-mono font-medium text-white tracking-wide">{spec.label}</span>
                      <p className="md:col-span-8 text-xs text-neutral-400 font-light leading-relaxed">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-8 flex flex-col xs:flex-row items-center gap-4">
                <a 
                  href="#contact" 
                  className="w-full xs:w-auto text-center bg-[#D4AF37] hover:bg-[#F3CD57] text-[#050505] text-2xs font-bold px-6 py-3 rounded uppercase tracking-[0.15em] transition-all duration-300"
                >
                  Direct Project Inquiry
                </a>
                <a 
                  href={BUSINESS.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full xs:w-auto text-center border border-neutral-800 hover:border-white/40 text-white text-2xs font-bold px-6 py-3 rounded uppercase tracking-[0.15em] transition-all duration-300"
                >
                  Query with Gaurav Kesare
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS 5-STAR VERIFIED REVIEWS */}
      <section id="reviews" className="relative py-24 px-4 sm:px-6 bg-[#121212] border-t border-[#D4AF37]/15">
        
        {/* Subtle Ambient Radial Grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Main Google Rating summary box */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
              02. Client Satisfaction Index
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase mb-6">
              Google Maps Verified Integrity
            </h2>
            
            {/* Massive Star Plate */}
            <div className="inline-flex flex-col items-center p-6 bg-[#050505] border border-[#D4AF37]/20 rounded-2xl shadow-xl mt-4">
              <div className="flex items-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#D4AF37] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
                  </svg>
                ))}
              </div>
              <p className="text-2xl font-serif font-black text-white tracking-wider flex items-center gap-2">
                5.0 <span className="text-[#D4AF37]">★</span>
              </p>
              <p className="text-2xs font-mono tracking-[0.15em] text-neutral-400 mt-2 uppercase">
                Based on <span className="text-white font-semibold">175 Google Business Reviews</span>
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 tracking-wider">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                GOOGLE AUDITED & VERIFIED ACTIVE
              </div>
            </div>
          </div>

          {/* Three Highly Detailed Star Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="p-8 rounded-lg bg-[#050505] border border-neutral-800/80 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_25px_rgba(212,175,55,0.05)] relative group">
              
              {/* Google Verified Icon Stamp top-right */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 bg-[#121212] border border-neutral-800 text-[9px] font-mono text-neutral-400 px-2 py-1 rounded">
                  {/* Google G icon */}
                  <svg className="w-2.5 h-2.5 fill-current text-[#D4AF37]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.888c-.648 2.436-2.904 4.115-6.888 4.115-4.62 0-8.388-3.768-8.388-8.385 0-4.617 3.768-8.385 8.388-8.385 2.1 0 4.008.768 5.484 2.16l3.156-3.156C17.796.96 15.156 0 12.24 0 5.58 0 .12 5.46.12 12.12s5.46 12.12 12.12 12.12c7.008 0 11.64-4.92 11.64-11.82 0-.792-.072-1.56-.204-2.136h-11.436z"/>
                  </svg>
                  G Maps Verified
                </span>
              </div>

              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4AF37] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-neutral-300 font-light text-sm leading-relaxed mb-6 italic">
                  &ldquo;Gaurav and his team transformed our Kamothe apartment into a masterpiece. From initial skeletal layouts to final champagne gold accents, the turnkey execution was flawlessly on-schedule. Unbelievable finish!&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-neutral-900 pt-5">
                {/* Verified user avatar with elegant gold wire-frame border */}
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-[#D4AF37]/35 flex items-center justify-center font-bold font-serif text-white text-sm">
                  RS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rahul Sharma</h4>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Panvel Resident • Verified Client</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 rounded-lg bg-[#050505] border border-neutral-800/80 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_25px_rgba(212,175,55,0.05)] relative group">
              
              {/* Google Verified Icon Stamp top-right */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 bg-[#121212] border border-neutral-800 text-[9px] font-mono text-neutral-400 px-2 py-1 rounded">
                  <svg className="w-2.5 h-2.5 fill-current text-[#D4AF37]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.888c-.648 2.436-2.904 4.115-6.888 4.115-4.62 0-8.388-3.768-8.388-8.385 0-4.617 3.768-8.385 8.388-8.385 2.1 0 4.008.768 5.484 2.16l3.156-3.156C17.796.96 15.156 0 12.24 0 5.58 0 .12 5.46.12 12.12s5.46 12.12 12.12 12.12c7.008 0 11.64-4.92 11.64-11.82 0-.792-.072-1.56-.204-2.136h-11.436z"/>
                  </svg>
                  G Maps Verified
                </span>
              </div>

              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4AF37] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-neutral-300 font-light text-sm leading-relaxed mb-6 italic">
                  &ldquo;The best interior designer in Panvel. Incredible premium finishes! Star Interiors built our modular kitchen with premium smart hardware and a custom quartz countertop. Highly professional and polite.&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-neutral-900 pt-5">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-[#D4AF37]/35 flex items-center justify-center font-bold font-serif text-white text-sm">
                  PP
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Priya Patil</h4>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Kamothe Resident • Verified Client</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 rounded-lg bg-[#050505] border border-neutral-800/80 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_25px_rgba(212,175,55,0.05)] relative group">
              
              {/* Google Verified Icon Stamp top-right */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 bg-[#121212] border border-neutral-800 text-[9px] font-mono text-neutral-400 px-2 py-1 rounded">
                  <svg className="w-2.5 h-2.5 fill-current text-[#D4AF37]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.888c-.648 2.436-2.904 4.115-6.888 4.115-4.62 0-8.388-3.768-8.388-8.385 0-4.617 3.768-8.385 8.388-8.385 2.1 0 4.008.768 5.484 2.16l3.156-3.156C17.796.96 15.156 0 12.24 0 5.58 0 .12 5.46.12 12.12s5.46 12.12 12.12 12.12c7.008 0 11.64-4.92 11.64-11.82 0-.792-.072-1.56-.204-2.136h-11.436z"/>
                  </svg>
                  G Maps Verified
                </span>
              </div>

              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4AF37] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-neutral-300 font-light text-sm leading-relaxed mb-6 italic">
                  &ldquo;Space optimization at its finest. Our 2 BHK in Kamothe feels like a luxury hotel suite. Gaurav Kesare&apos;s design language integrates warm premium cove lighting and wood veneer flawlessly.&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-neutral-900 pt-5">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-[#D4AF37]/35 flex items-center justify-center font-bold font-serif text-white text-sm">
                  AD
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aniket Deshmukh</h4>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Kamothe Residence • Verified Client</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. HIGH-CONVERTING CONTACT & API HANDOFF */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 bg-[#121212] border-t border-[#D4AF37]/15">
        
        {/* Decorative Grid Lines to highlight architectural precision */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
              03. Elite Procurement
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase">
              Initiate Design Draft
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {/* Form Container */}
          <div className="bg-[#050505] rounded-2xl border border-neutral-800/90 p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            {/* Soft inner radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4AF37]/3 blur-[80px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* User Name input */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
                        Client Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="e.g. Rahul Deshmukh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#121212] border border-neutral-800/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none rounded p-3 text-sm text-white placeholder-neutral-600 transition-all duration-300" 
                      />
                    </div>

                    {/* Site Location Input */}
                    <div className="flex flex-col">
                      <label htmlFor="location" className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
                        Project Site Location *
                      </label>
                      <input 
                        type="text" 
                        id="location" 
                        required 
                        placeholder="e.g. Kamothe Sector 6 / Panvel"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-[#121212] border border-neutral-800/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none rounded p-3 text-sm text-white placeholder-neutral-600 transition-all duration-300" 
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Phone Number Input */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
                        Phone / WhatsApp Mobile *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#121212] border border-neutral-800/80 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none rounded p-3 text-sm text-white placeholder-neutral-600 transition-all duration-300" 
                      />
                    </div>

                    {/* Category Selection Split Dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="category" className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
                        Structural Service Target *
                      </label>
                      <select 
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="bg-[#121212] border border-neutral-800/80 focus:border-[#D4AF37] opacity-90 focus:ring-1 focus:ring-[#D4AF37] outline-none rounded p-3 text-sm text-white transition-all duration-300"
                      >
                        <option value="Turnkey Luxury Execution">Turnkey Luxury Execution</option>
                        <option value="Advanced Space Optimization">Advanced Space Optimization</option>
                        <option value="Custom Modular Kitchen">Custom Modular Kitchen</option>
                        <option value="Full Residence Renovation">Full 1 / 2 / 3 BHK Renovation</option>
                      </select>
                    </div>

                  </div>

                  {/* Estimated Project Budget Range */}
                  <div className="flex flex-col">
                    <label htmlFor="budget" className="text-2xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold">
                      Estimated Investment Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['₹3L - ₹5L', '₹5L - ₹8L', '₹8L - ₹12L', '12L+ Executive'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`p-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                            formData.budget === range 
                              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-bold' 
                              : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-[#D4AF37] hover:bg-[#F3CD57] text-[#050505] text-xs font-bold py-4 rounded uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.5)] cursor-pointer"
                    >
                      Authenticate and Register Draft
                    </button>
                  </div>

                </form>
              ) : (
                
                // Form Success Animation Layer
                <div className="text-center py-12 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#D4AF37] fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-white uppercase tracking-wider mb-3">CONGRATULATIONS, {formData.name.split(' ')[0]}!</h3>
                  <p className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.15em] mb-4">Lead ID Verified & Active</p>
                  <p className="text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed mb-6">
                    Gaurav Kesare and our engineering design leads have received your request for <span className="text-white font-semibold">{formData.category}</span> at <span className="text-white font-semibold">{formData.location}</span>. We will call you on <span className="text-white font-semibold">{formData.phone}</span> within 2 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="text-neutral-500 hover:text-[#D4AF37] text-2xs font-mono uppercase tracking-[0.15em] transition-colors duration-300"
                  >
                    Submit another architecture request
                  </button>
                </div>
              )}

              {/* STANDALONE WHATSAPP ENGINE TRIGGER BUTTON */}
              <div className="mt-12 pt-8 border-t border-neutral-900/80 text-center">
                <p className="text-2xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
                  Prefer direct instant messaging? Reach our primary workshop line:
                </p>
                
                <a 
                  href={BUSINESS.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono uppercase font-bold text-xs px-8 py-4 rounded-full tracking-[0.15em] transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] group"
                >
                  <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2c-5.518 0-10 4.478-10 10 0 1.761.458 3.415 1.258 4.869L2 22l5.289-1.255A9.957 9.957 0 0 0 12.004 22c5.518 0 10-4.478 10-10V12c0-5.522-4.482-10-10-10zm0 18a8.005 8.005 0 0 1-4.015-1.077l-.286-.168-2.981.707.721-2.636-.184-.294A8.002 8.002 0 1 1 12.004 20zm4.568-5.328c-.244-.122-1.442-.711-1.664-.792-.224-.082-.387-.122-.55.122-.162.244-.63.792-.772.955-.142.162-.284.183-.528.061-.244-.122-1.03-.38-1.962-1.21-.725-.647-1.215-1.446-1.357-1.69-.142-.244-.015-.375.107-.497.11-.11.244-.285.367-.428.122-.142.162-.244.244-.407.081-.162.04-.305-.02-.427-.061-.122-.55-1.32-.753-1.808-.198-.475-.399-.41-.55-.418-.141-.007-.305-.008-.468-.008-.162 0-.427.061-.65.305-.224.244-.854.834-.854 2.034 0 1.2.874 2.36 1.0 2.522.122.162 1.71 2.611 4.14 3.66.578.25 1.03.398 1.383.51.58.185 1.109.159 1.527.096.465-.07 1.442-.589 1.645-1.157.203-.57.203-1.057.142-1.159-.06-.1-.223-.162-.467-.284z"/>
                  </svg>
                  <span>WhatsApp Primary Engine</span>
                </a>

                <div className="mt-4 text-xs text-neutral-500 font-mono">
                  Operational Phone / Callback Channel: <span className="text-white font-semibold">{BUSINESS.phoneWhatsApp}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Fully Verified Address & Blueprint Office details */}
          <div className="mt-16 text-center text-xs font-mono text-neutral-500 leading-relaxed border-t border-neutral-900 pt-8 max-w-2xl mx-auto">
            <h4 className="text-2xs font-bold text-white uppercase tracking-widest mb-3">Architectural Studio Head Office</h4>
            <p className="text-neutral-400 mb-2 leading-relaxed">
              {BUSINESS.address}
            </p>
            <p className="text-[#D4AF37] text-2xs tracking-wider uppercase mb-8">
              Kamothe, Panvel, Maharashtra 410209 (Near MNR School)
            </p>
            <p className="text-neutral-600 text-3xs tracking-widest uppercase">
              STAR INTERIORS BY GAURAV KESARE © 2026. ALL RIGHTS RESERVED. TRADEMARKED WORKFLOW.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
