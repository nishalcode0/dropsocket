import React from 'react';

export default function CTA() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-32 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse opacity-50" />
        {/* Blob 2 */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse opacity-50 delay-1000" />
        {/* Blob 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Card container */}
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Inner card */}
          <div className="relative rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500 p-8 lg:p-16">

            {/* Content wrapper */}
            <div className="space-y-8 text-center">

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Launch Your{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Digital Store
                  </span>
                  {' '}Today
                </h2>

                {/* Subtext */}
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                  Create your storefront, upload products, and start selling instantly with DropSocket. Build your creator business in minutes, not months.
                </p>
              </div>

              {/* Buttons container */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                
                {/* Primary button */}
                <a
                  href="#features"
                  className="group/btn relative px-8 lg:px-10 py-3 lg:py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-all duration-500 rounded-xl" />
                  <span className="relative z-10 text-white block group-hover/btn:scale-105 transition-transform duration-300">
                    Get Started Free
                  </span>
                </a>

                {/* Secondary button */}
                <a
                  href="#pricing"
                  className="group/btn2 relative px-8 lg:px-10 py-3 lg:py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 border border-white/30 rounded-xl transition-all duration-300 group-hover/btn2:border-blue-400/60" />
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover/btn2:opacity-100 transition-all duration-300" />
                  <span className="relative z-10 text-gray-300 group-hover/btn2:text-white block transition-colors duration-300 group-hover/btn2:scale-105 transform">
                    View Pricing
                  </span>
                </a>
              </div>

              {/* Trust text */}
              <p className="text-sm text-gray-500 font-light">
                ✓ No credit card required • 4-day free trial
              </p>

            </div>

            {/* Floating animation on card */}
            <style>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
              #about {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>

          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">
            Join 100+ creators already selling on DropSocket
          </p>
        </div>
      </div>
    </section>
  );
}
