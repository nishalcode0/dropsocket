import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 11-4s1-6.75-1-9.5a5.5 5.5 0 00-.855-.855Z" />
        </svg>
      ),
    },
    {
      label: 'Discord',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.492c-1.53-.742-3.247-1.31-5.095-1.616a.75.75 0 00-.861.371c-.217.398-.467.921-.639 1.334a14.645 14.645 0 00-4.364 0c-.172-.413-.423-.936-.64-1.334a.75.75 0 00-.86-.37c-1.849.305-3.565.874-5.095 1.615a.75.75 0 00-.331.67c0 2.139.87 4.233 2.447 5.805a.75.75 0 00.091.963c.731.563 1.519 1.045 2.348 1.436a.75.75 0 00.861-.112c.527-.44 1.001-.956 1.416-1.537a.75.75 0 00-.413-1.235c-.811-.308-1.581-.732-2.286-1.262a.75.75 0 00-.898 1.248c.757.574 1.593 1.082 2.483 1.47a.75.75 0 00.826-.154c.496-.617.942-1.286 1.32-2.001.378.715.824 1.384 1.32 2.001a.75.75 0 00.826.154c.89-.388 1.726-.896 2.483-1.47a.75.75 0 00-.898-1.248c-.705.53-1.475.954-2.286 1.262a.75.75 0 00-.413 1.235c.415.581.889 1.097 1.416 1.537a.75.75 0 00.861.112c.829-.391 1.617-.873 2.348-1.436a.75.75 0 00.091-.963c1.577-1.572 2.447-3.666 2.447-5.805a.75.75 0 00-.332-.67z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 border-t border-blue-400/20">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Top section: Brand + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 lg:pb-16 border-b border-white/10">
          
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg" />
              <span className="text-xl font-bold text-white">DropSocket</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Build your creator storefront and sell digital products instantly. No coding required.
            </p>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Features & Pricing */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Product</h3>
              <ul className="space-y-2.5">
                {navLinks.slice(0, 2).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Support</h3>
              <ul className="space-y-2.5">
                {navLinks.slice(2).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Legal</h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section: Social + Copyright */}
        <div className="pt-12 lg:pt-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Social icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-blue-500/10"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-right">
            <p className="text-gray-500 text-xs">
              © {currentYear} DropSocket. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs font-light">
              Designed and built by{' '}
              <span className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Nishal
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle top glow accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </footer>
  );
}
