import React, { useState, useEffect } from 'react';

function StoreBlock() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full rounded-3xl border border-black/70 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 shadow-[0_8px_48px_rgba(0,0,0,0.7)] overflow-hidden min-h-[520px]">

      {/* LEFT 70% - Device Mockups */}
      <div className="relative w-full lg:w-[70%] h-[520px] flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-950/60 to-slate-950/80">

        {/* Laptop */}
        <div className="relative w-[540px] h-[340px] rounded-[28px] border border-white/10 bg-[#111827] shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10">

          {/* Top bezel */}
          <div className="h-6 bg-[#1f2937] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-500" />
          </div>

          {/* Screen */}
          <div className="bg-white h-full overflow-hidden">

            {/* Browser bar */}
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>

              <div className="flex-1 bg-white rounded-md text-xs text-gray-400 px-3 py-1 text-center">
                yourstore.dropsocket.com
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-lg font-bold text-gray-800 mb-5">
                Your Store
              </p>

              <div className="space-y-3">
                {['Notion CRM Template', 'Canva Pack', 'Ebook PDF'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl"
                  >
                    <div className="w-10 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-500 text-xs font-bold">
                      PDF
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        {item}
                      </p>

                      <p className="text-sm text-gray-400">
                        ₹299
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* iPhone */}
        <div className="absolute left-10 bottom-0 w-[170px] h-[350px] rounded-[36px] border-[6px] border-black bg-black shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden z-20">

          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-30" />

          {/* Screen */}
          <div className="bg-white w-full h-full overflow-hidden pt-5">

            {/* Mobile browser bar */}
            <div className="bg-gray-100 px-2 py-1.5 flex items-center gap-1 border-b border-gray-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>

              <div className="flex-1 bg-white rounded text-[8px] text-gray-400 px-1 py-0.5 text-center">
                yourstore.dropsocket.com
              </div>
            </div>

            {/* Mobile content */}
            <div className="p-3">
              <p className="text-[11px] font-bold text-gray-700 mb-2">
                Your Store
              </p>

              <div className="space-y-2">
                {['Notion CRM Template', 'Canva Pack', 'Ebook PDF'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-2 border border-gray-100 rounded-lg"
                  >
                    <div className="w-6 h-7 rounded bg-blue-100 flex items-center justify-center text-[8px] text-blue-500 font-bold">
                      PDF
                    </div>

                    <div>
                      <p className="text-[9px] font-medium text-gray-700 leading-none">
                        {item}
                      </p>

                      <p className="text-[8px] text-gray-400 mt-1">
                        ₹299
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT 30% - Text */}
      <div className="w-full lg:w-[30%] p-10 flex flex-col justify-center space-y-4">
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          01
        </span>

        <h3 className="text-3xl font-bold text-white leading-tight">
          Create Your Own Store
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Build a personalized creator storefront to showcase and sell your digital products. Share one link, sell everything.
        </p>
      </div>
    </div>
  );
}

function PaymentsBlock() {
  const [showPayment, setShowPayment] = useState(false);
  const [ripple, setRipple] = useState(false);

  const handleCardClick = () => {
    setRipple(true);
    setShowPayment(true);

    setTimeout(() => setShowPayment(false), 2000);
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center w-full rounded-3xl border border-black/70 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 shadow-[0_8px_48px_rgba(0,0,0,0.7)] overflow-hidden min-h-[500px]">

      {/* Text */}
      <div className="w-full lg:w-[30%] p-10 flex flex-col justify-center space-y-4 order-2 lg:order-1">
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          02
        </span>

        <h3 className="text-3xl font-bold text-white leading-tight">
          Get Paid Seamlessly
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Accept payments instantly. Customers pay, you earn.
        </p>
      </div>

      {/* Card */}
      <div className="relative w-full lg:w-[70%] h-[420px] flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-950/60 to-slate-950/80 order-1 lg:order-2">

        <div className="flex flex-col items-center gap-6">

          <div
            onClick={handleCardClick}
            className={`relative cursor-pointer w-80 h-48 rounded-2xl bg-linear-to-br from-blue-400 via-blue-500 to-blue-700 shadow-[0_20px_60px_rgba(59,130,246,0.5)] transition-all duration-300 select-none ${
              ripple ? 'scale-95' : 'hover:scale-105'
            }`}
          >
            {/* Shine */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-between">

              <div className="flex justify-between items-start">
                <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  DropSocket
                </p>

                <div className="w-10 h-6 rounded bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-white/60" />
                </div>
              </div>

              {/* Chip */}
              <div className="w-10 h-8 rounded bg-yellow-400/80 border border-yellow-300/50 shadow-inner" />

              <div>
                <p className="text-white font-mono text-lg tracking-widest mb-2">
                  1234 5678 9012
                </p>

                <div className="flex justify-between items-end">
                  <p className="text-white/80 text-xs uppercase tracking-widest">
                    Creator Name
                  </p>

                  <div className="text-right">
                    <p className="text-white/50 text-[9px] uppercase">
                      Valid
                    </p>

                    <p className="text-white text-xs font-mono">
                      06/30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popup */}
            {showPayment && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg animate-bounce border border-green-400">
                ✓ Payment Received
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />

            <span className="text-gray-300 text-sm font-medium">
              Powered by Razorpay
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryBlock() {
  const emails = [
    {
      subject: 'Your download is ready!',
      time: 'Just now',
      tag: 'New',
    },
    {
      subject: 'Your Notion CRM is here',
      time: '2m ago',
      tag: 'New',
    },
    {
      subject: 'Download: Canva Pack',
      time: '5m ago',
      tag: null,
    },
    {
      subject: 'Ebook delivered successfully',
      time: '1h ago',
      tag: null,
    },
  ];

  const [activeEmail, setActiveEmail] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEmail((prev) => (prev + 1) % emails.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full rounded-3xl border border-black/70 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 shadow-[0_8px_48px_rgba(0,0,0,0.7)] overflow-hidden min-h-[500px]">

      {/* Inbox */}
      <div className="relative w-full lg:w-[70%] h-[420px] flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-950/60 to-slate-950/80 p-6">

        <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-white/10">

          {/* Tabs */}
          <div className="bg-gray-200 px-3 pt-2 flex items-end gap-1">
            <div className="bg-white px-4 py-1.5 rounded-t-lg flex items-center gap-2 text-xs text-gray-700 border-t border-l border-r border-gray-300">
              <div className="w-3 h-3 rounded-full bg-red-400" />

              <span className="font-medium">
                Gmail — Inbox
              </span>
            </div>
          </div>

          {/* Address bar */}
          <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-300">

            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>

            <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-300">
              mail.google.com
            </div>
          </div>

          {/* Emails */}
          <div className="bg-white">

            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
              <span className="text-sm font-semibold text-gray-700">
                Primary
              </span>

              <span className="text-xs text-gray-400">
                4 new messages
              </span>
            </div>

            {emails.map((email, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 transition-all duration-500 ${
                  activeEmail === i
                    ? 'bg-blue-50 border-l-2 border-l-blue-400'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    activeEmail === i
                      ? 'bg-blue-500'
                      : 'bg-gray-400'
                  }`}
                >
                  DS
                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex items-center gap-2 mb-0.5">

                    <p
                      className={`text-xs font-semibold truncate ${
                        activeEmail === i
                          ? 'text-blue-700'
                          : 'text-gray-700'
                      }`}
                    >
                      DropSocket
                    </p>

                    {email.tag && (
                      <span className="text-[9px] bg-green-100 text-green-600 border border-green-300 rounded px-1.5 py-0.5 font-semibold">
                        {email.tag}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs truncate ${
                      activeEmail === i
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-500'
                    }`}
                  >
                    {email.subject}
                  </p>
                </div>

                <p className="text-[10px] text-gray-400">
                  {email.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-[30%] p-10 flex flex-col justify-center space-y-4">

        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          03
        </span>

        <h3 className="text-3xl font-bold text-white leading-tight">
          Instant Delivery
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Automatic download delivery directly to your customer’s inbox.
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 px-6 lg:px-20 py-32"
    >
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center mb-24 space-y-4">

          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            All tools needed for{' '}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              creators to sell
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Everything in one place. No juggling tools. No manual work.
          </p>
        </div>

        {/* Feature Blocks */}
        <StoreBlock />
        <PaymentsBlock />
        <DeliveryBlock />
      </div>
    </section>
  );
}
