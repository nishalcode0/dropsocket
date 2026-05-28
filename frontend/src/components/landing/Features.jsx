import React from 'react';

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'One-Click Upload',
      description: 'Upload Notion, Canva, PDFs, eBooks, Zips in seconds with our intelligent file handler',
      gradient: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      id: 2,
      title: 'Payment Links',
      description: 'Generate shareable payment links instantly with customizable pricing and details',
      gradient: 'from-purple-500/20 to-blue-500/10',
    },
    {
      id: 3,
      title: 'Razorpay Ready',
      description: 'Seamless Razorpay integration. Connect once, earn forever with instant settlements',
      gradient: 'from-blue-500/20 to-indigo-500/10',
    },
    {
      id: 4,
      title: 'Auto Delivery',
      description: 'Files delivered instantly to customer emails via Resend. No manual work required',
      gradient: 'from-cyan-500/20 to-blue-500/10',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Real-time sales tracking, revenue insights, and customer order history at a glance',
      gradient: 'from-purple-500/20 to-pink-500/10',
    },
    {
      id: 6,
      title: 'Secure Downloads',
      description: 'Protected download links with expiry options and access control for your customers',
      gradient: 'from-indigo-500/20 to-blue-500/10',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-sm text-blue-300 font-medium">FEATURES</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Comprehensive tools built for creators, designed for scale. Manage products, payments, and customers effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500"
            >
              {/* Background with gradient */}
              <div 
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                syle = {{
                  Background:`linear-gradient(to bottom right, rgba(59,130,246,0.1), rgba(34,197,94,0.05))`, 
                }}
                >
                {/* Background*/}
                <div className="absolute inset-0 backdrop-blur-md border border-white/10 group-hover:border-blue-400/40 transition-all duration-500" /> 

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col z-10">

                </div>
              </div>
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col z-10">
                {/* Number indicator */}
                <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-blue-400/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-500">
                  <span className="text-sm font-medium">Learn more</span>
                  <span className="text-lg">→</span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
