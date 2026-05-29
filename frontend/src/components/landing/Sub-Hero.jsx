import React, { useState } from 'react';

function OwnStoreCard() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-black/60 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_20px_48px_rgba(59,130,246,0.2)] hover:-translate-y-2"
    >
      {/* Title & Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500">
          Own Your Product Store
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Create a personalized creator page to showcase and sell your digital products.
        </p>
      </div>

      {/* Browser Window */}
      <div
        className={`relative rounded-lg overflow-hidden bg-white shadow-lg transition-all duration-500 ${
          isHovering ? 'scale-105' : 'scale-100'
        }`}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <input
            type="text"
            value="yourstore.dropsocket.com"
            readOnly
            className="ml-2 text-xs text-gray-600 bg-white flex-1 border-none outline-none"
          />
        </div>

        {/* Store page content */}
        <div className="px-6 py-8 bg-white">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Your Store</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="w-8 h-10 bg-gray-300 rounded flex items-center justify-center text-lg">
                  📄
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Product {i}</p>
                  <p className="text-xs text-gray-500">$29</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SellAnywhereCard() {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const platforms = ['Instagram', 'Discord', 'Notion', 'Twitter', 'TikTok', 'Email'];

  return (
    <div className="group relative bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-black/60 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_20px_48px_rgba(59,130,246,0.2)] hover:-translate-y-2">
      {/* Title & Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500">
          Sell Anywhere
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Share your products across Instagram, Discord, Notion, Twitter, and more.
        </p>
      </div>

      {/* Platforms Grid */}
      <div className="space-y-3">
        {platforms.map((platform, i) => (
          <div
            key={platform}
            onMouseEnter={() => setHoveredPlatform(i)}
            onMouseLeave={() => setHoveredPlatform(null)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-300
              ${hoveredPlatform === i
                ? 'bg-blue-500/20 border-blue-400/40 translate-x-2'
                : 'bg-white/5 border-white/10'
              }`}
          >
            <span className="text-sm font-medium text-gray-300">→</span>
            <span className="text-sm text-gray-300">{platform}</span>
            <span
              className={`ml-auto text-blue-400 transition-all duration-300 ${
                hoveredPlatform === i ? 'opacity-100 translate-x-1' : 'opacity-0'
              }`}
            >
              ↗️
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstantDeliveryCard() {
  const [step, setStep] = useState(0);

  React.useEffect(() => {
    const run = () => {
      setStep(0);
      setTimeout(() => setStep(1), 600);
      setTimeout(() => setStep(2), 1200);
      setTimeout(() => setStep(3), 2000);
      setTimeout(() => setStep(0), 4500);
    };
    run();
    const interval = setInterval(run, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-black/60 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_20px_48px_rgba(59,130,246,0.2)] hover:-translate-y-2">
      {/* Title & Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500">
          Instant Delivery
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Automatically deliver secure download links immediately after successful payment.
        </p>
      </div>

      {/* Animated Delivery Flow */}
      <div className="flex flex-col gap-6">
        {/* Payment Step */}
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 ${step >= 1 ? 'bg-blue-500/20 border-blue-400/40' : 'bg-white/5 border-white/10'}`}
        >
          <span className={`text-lg ${step >= 1 ? 'opacity-100' : 'opacity-50'}`}>💳</span>
          <span className="text-sm text-gray-300">Payment received</span>
          {step >= 1 && (
            <span className="ml-auto text-green-400 font-bold animate-pulse">✓</span>
          )}
        </div>

        {/* Arrow */}
        <div
         className={`h-8 flex items-center justify-center transition-all duration-500 ${step >= 2 ? 'text-green-400' : 'text-gray-600'}`} 
        >
          ↓
        </div>

        {/* Delivery Step */}
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500
            ${step >= 2 ? 'bg-green-500/20 border-green-400/40' : 'bg-white/5 border-white/10'}`}
        >
          <span className={`text-lg ${step >= 2 ? 'opacity-100' : 'opacity-50'}`}>📧</span>
          <span className="text-sm text-gray-300">Download link sent</span>
          {step >= 2 && (
            <span className="ml-auto text-green-400 font-bold animate-pulse">✓</span>
          )}
        </div>

        {/* Arrow */}
        <div
          className={`h-8 flex items-center justify-center transition-all duration-500
            ${step >= 3 ? 'text-green-400' : 'text-gray-600'}`}
        >
          ↓
        </div>

        {/* Success Step */}
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500
            ${step >= 3 ? 'bg-green-500/20 border-green-400/40' : 'bg-white/5 border-white/10'}`}
        >
          <span className={`text-lg ${step >= 3 ? 'opacity-100' : 'opacity-50'}`}>✓</span>
          <span className="text-sm text-gray-300">File downloaded</span>
          {step >= 3 && (
            <span className="ml-auto text-green-400 font-bold animate-pulse">✓</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SubHero() {
  return (
    <section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Built for{' '}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Modern Creators
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Everything creators need to sell digital products, build their presence, and grow their audience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <OwnStoreCard />
          <SellAnywhereCard />
          <InstantDeliveryCard />
        </div>
      </div>
    </section>
  );
}
