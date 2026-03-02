import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/company';

const footerLinks = {
  services: [
    { name: 'Heavy Structures', path: '/services#heavy-structures' },
    { name: 'Piping Fabrication', path: '/services#piping' },
    { name: 'Pressure Vessels', path: '/services#pressure-vessels' },
    { name: 'Storage Tanks', path: '/services#storage-tanks' },
    { name: 'Machining', path: '/services#machining' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Quality & Safety', path: '/quality' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <span className="font-oswald font-bold text-[400px] leading-none text-white">MWA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={companyInfo.logo}
                alt="MWA Industries"
                className="h-16 w-auto object-contain"
              />
            </Link>
            {/* Tagline */}
            <p className="text-amber-400 text-sm italic mb-4 leading-relaxed">
              Excellence is our foundation.<br />
              Trust is our legacy.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              A new firm powered by 35+ years of fabrication expertise.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
              <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors">
                <Phone size={18} className="text-amber-400 shrink-0" />
                <span>+91 {companyInfo.contact.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors">
                <Mail size={18} className="text-amber-400 shrink-0" />
                <span>{companyInfo.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald font-medium text-white uppercase tracking-wide mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-oswald font-medium text-white uppercase tracking-wide mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-oswald font-medium text-white uppercase tracking-wide mb-6">Get Started</h4>
            <p className="text-neutral-400 text-sm mb-6">
              Ready to discuss your fabrication requirements? Get a quote from our team.
            </p>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-oswald font-bold uppercase text-sm px-6 py-3 transition-all"
              data-testid="footer-request-quote-btn"
            >
              Request Quote
              <ArrowRight size={16} />
            </Link>
            <div className="mt-6 p-4 bg-neutral-800 border border-neutral-700">
              <p className="text-xs text-neutral-400 font-mono">GST: {companyInfo.contact.gst}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} MWA Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <span>Metal Fabrication in Raipur</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Industrial Fabrication Chhattisgarh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
