import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Mountain, Building, Droplet, Beaker, Landmark, Factory, Users } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { industries } from '../data/industries';

const iconMap = {
  Zap, Mountain, Building, Droplet, Beaker, Landmark, Factory, Users, Flask: Beaker
};

const Industries = () => {
  return (
    <div className="min-h-screen pt-32 lg:pt-44" data-testid="industries-page">
      {/* Hero Section */}
      <section className="py-16 bg-[rgb(var(--industrial-black))]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="font-mono text-xs uppercase tracking-widest text-[rgb(var(--safety-yellow))] mb-4 block">
              Industries We Serve
            </span>
            <h1 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-[rgb(var(--text-primary))] mb-6">
              Powering <span className="text-[rgb(var(--safety-yellow))]">Indian Industry</span>
            </h1>
            <p className="text-[rgb(var(--text-secondary))] text-lg max-w-3xl leading-relaxed">
              From power plants to chemical facilities, we provide fabrication solutions for India's most demanding industrial sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[rgb(var(--industrial-gray))]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Factory;
              return (
                <AnimatedSection key={industry.id} delay={index * 0.1}>
                  <div className="group bg-[rgb(var(--industrial-black))] border border-[rgb(var(--border))] overflow-hidden hover:border-[rgb(var(--safety-yellow))]/30 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5 aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgb(var(--industrial-black))]/50 hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--industrial-black))] via-transparent to-transparent lg:hidden" />
                      </div>
                      <div className="lg:w-3/5 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[rgb(var(--safety-yellow))]/10 flex items-center justify-center group-hover:bg-[rgb(var(--safety-yellow))]/20 transition-colors">
                            <Icon size={24} className="text-[rgb(var(--safety-yellow))]" />
                          </div>
                          <h3 className="font-oswald font-medium text-2xl text-[rgb(var(--text-primary))] uppercase">
                            {industry.name}
                          </h3>
                        </div>
                        <p className="text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        <div className="mb-6">
                          <span className="font-mono text-xs uppercase tracking-wide text-[rgb(var(--text-secondary))] block mb-3">
                            Key Services:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {industry.services.map((service) => (
                              <span key={service} className="text-xs text-[rgb(var(--text-secondary))] bg-[rgb(var(--industrial-gray))] px-3 py-1">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          to={`/request-quote?industry=${encodeURIComponent(industry.name)}`}
                          className="inline-flex items-center gap-2 text-[rgb(var(--safety-yellow))] font-mono text-sm uppercase tracking-wide hover:gap-3 transition-all"
                          data-testid={`industry-quote-btn-${industry.id}`}
                        >
                          Get Quote for {industry.name} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[rgb(var(--industrial-black))]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="font-oswald font-bold text-3xl md:text-5xl uppercase tracking-tight text-[rgb(var(--text-primary))] mb-6">
              Your Industry <span className="text-[rgb(var(--safety-yellow))]">Not Listed?</span>
            </h2>
            <p className="text-[rgb(var(--text-secondary))] text-lg mb-10 max-w-2xl mx-auto">
              We serve diverse industrial sectors. Contact us to discuss your specific fabrication requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="group bg-[rgb(var(--safety-yellow))] text-black font-oswald font-bold uppercase px-8 py-4 flex items-center gap-3 hover:brightness-110 transition-all"
                data-testid="industries-request-quote-btn"
              >
                Request a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-[rgb(var(--border))] text-[rgb(var(--text-primary))] font-oswald uppercase px-8 py-4 hover:bg-[rgb(var(--industrial-gray))] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Industries;
