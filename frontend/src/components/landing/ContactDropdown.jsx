import React, { useState, useRef, useEffect } from 'react';

export default function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const contactLinks = [
    {
      label: 'Email',
      value: 'code0.nishal@gmail.com',
      href: 'mailto:code0.nishal@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'nishalcode0',
      href: 'https://github.com/nishalcode0',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Discord',
      value: 'soulfragment_z',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.492c-1.53-.742-3.247-1.31-5.095-1.616a.75.75 0 00-.861.371c-.217.398-.467.921-.639 1.334a14.645 14.645 0 00-4.364 0c-.172-.413-.423-.936-.64-1.334a.75.75 0 00-.86-.37c-1.849.305-3.565.874-5.095 1.615a.75.75 0 00-.331.67c0 2.139.87 4.233 2.447 5.805a.75.75 0 00.091.963c.731.563 1.519 1.045 2.348 1.436a.75.75 0 00.861-.112c.527-.44 1.001-.956 1.416-1.537a.75.75 0 00-.413-1.235c-.811-.308-1.581-.732-2.286-1.262a.75.75 0 00-.898 1.248c.757.574 1.593 1.082 2.483 1.47a.75.75 0 00.826-.154c.496-.617.942-1.286 1.32-2.001.378.715.824 1.384 1.32 2.001a.75.75 0 00.826.154c.89-.388 1.726-.896 2.483-1.47a.75.75 0 00-.898-1.248c-.705.53-1.475.954-2.286 1.262a.75.75 0 00-.413 1.235c.415.581.889 1.097 1.416 1.537a.75.75 0 00.861.112c.829-.391 1.617-.873 2.348-1.436a.75.75 0 00.091-.963c1.577-1.572 2.447-3.666 2.447-5.805a.75.75 0 00-.332-.67z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      value: '@NishalDev',
      href: 'https://twitter.com/NishalDev',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 11-4s1-6.75-1-9.5a5.5 5.5 0 00-.855-.855Z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Contact Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="text-inherit bg-none border-none p-0 cursor-pointer text-sm hover:text-blue-300 transition-colors duration-300"
      > 
        <span className="relative z-10">Contact</span>
        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute bottom-full right-0 mb-2 animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <div className="rounded-2xl border border-blue-400/30 bg-linear-to-br from-blue-500/15 via-purple-500/10 to-blue-500/5 backdrop-blur-lg shadow-[0_20px_48px_rgba(59,130,246,0.2)] overflow-hidden min-w-64">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="text-sm font-semibold text-white">Get in touch</h3>
              <p className="text-xs text-gray-400 mt-1">Reach out anytime</p>
            </div>

            {/* Contact Links */}
            <div className="p-4 space-y-1.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group/link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 hover:bg-blue-500/10 border border-transparent hover:border-blue-400/20"
                >
                  <div className="text-gray-400 group-hover/link:text-blue-300 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-xs font-medium group-hover/link:text-blue-300 transition-colors duration-300">
                      {link.label}
                    </p>
                    <p className="text-gray-500 text-xs truncate group-hover/link:text-gray-400 transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <div className="text-gray-600 opacity-0 group-hover/link:opacity-100 transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-7h.01M9 15h.01" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer text */}
            <div className="px-6 py-3 border-t border-white/10 bg-white/2">
              <p className="text-xs text-gray-500 text-center">
                Usually responds within 24h
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
