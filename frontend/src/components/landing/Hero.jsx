import React, { useState } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
  <section className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 pt-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-8">
    {/* Beta Badge */}
    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 w-fit">
    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
    <span className="text-sm text-blue-300">Now in private beta</span>
    </div>

    {/* Main Heading*/}
    <div className="space-y-4">
    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
    Build Your Creator {''}

    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                </h1>
    <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
    Storefront
    </span>
    
    </h1>
    <p className="text-lg text-gray-300 leading-relaxed mx-w-xl">
    Sell digital products, grow your audience, and automate delivery in one place.
    </p>
    </div>

    {/* buttons */}
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <button className="group relative px-8 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500" />
      <span className="relative z-10 txt-white">Get Started</span>
    </button>

    <button className="px-8 py-3 rounded-xl font-semibold text-base border border-gray-600 text-white hover:border-blue-400/50 hover:bg-blue-500/5 transition-all duration-300 fex items-center gap-2">
    <span className="text-xl">➡</span> See How It Works
    </button>
    </div>
    </div>

    {/* RIGHT SIDE - Phone UI */}
    <div className="flex justify-center lg:justify-end">
    <div
      onMouseEnter = {() => setIsHovering(true)}
      onMouseLeave = {() => setIsHovering(false)}
      className={`transition-transform duration-300 ${isHovering ? 'scale-110':'scale-100'}`}
      >
       <div className="relative w-90 h-[510px] bg-linear-to-b from-purple-900/40 via-blue-900/40 to-purple-900/40 rounded-[40px] border-8 border-black p-6 shadow-2xl shadow-black/80 my-8">
       {/* Mobile Notch */}
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
       {/* Phone Status Bar */}
       <div className="flex justify-between items-center mb-6 px-2">
        <span className="text-xs text-gray-400">9:41</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
       </div>

       {/* Dashboard Header*/}
       <div className="space-y-4">
        <div className="space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Dashboards</p>
        <h2 className="text-2xl font-bold text-white">Your Products</h2>
        </div>
        {/* Stats Card*/}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-linear-to-br from-green-500/20 to-green-600/10 border border-green-500/20 rounded-xl p-3">
            <p className="text-xs text-gray-400">Payment Received</p>
            <p className="text-lg font-bold text-white">$500</p>
          </div>
          <div className="bg-linear-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 rounded-xl p-3">
            <p className="text-xs text-gray-400">Delivered</p>
            <p className="text-lg font-bold text-white">48</p>
          </div>
        </div>

        {/* Product List*/}
        <div className="space-y-1 max-h-48 overflow-y-auto scrollbar-hide">
          <div className="bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/10 rounded-lg p-3">
            <div className="flex items-start gap-3">
             
              <div className="flex-1">
                <p className="text-xs font-semibold text-white">Notion Study Template</p>
                <p className="text-xs text-gray-400">Auto delivery on</p>
              </div>
              <p className="text-sm font-bold text-white">$25</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-500/10  to-blue-500/10 border border-purple-500/10 rounded-lg p-3">
            <div className="flex items-start gap-3">

            <div className="flex-1">
              <p className="text-xs font-semibold text-white">Canva Invitation Pack</p>
              <p className="text-xs text-gray-400">Auto delivery on</p>
            </div>
            <p className="text-sm font-bold text-white">$25</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/10 rounded-lg p-3">
          <div className="flex items-start gap-3">
           
            <div className="flex-1">
              <p className="text-xs font-semibold txt-white">Productivity EBooks</p>
              <p className="text-xs text-gray-400">Auto delivery on</p>
            </div>
            <p className="text-sm font-bold text-white">$10</p>
          </div>
          </div>
        </div>

        {/* Payment Status */}
        <div className="bg-linear-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-lg p-3 mt-4">
          <div className="flex items-center justifty-between">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-sm font-semibold text-white">Payment Received</p>
              <p className="text-xs text-gray-400">Razorpay - $25 just now</p>
            </div>
          </div>
          </div>
        </div> 
      </div>
    </div>
    </div>
  </div>
  </div>
  </div>
  </section>

)}
