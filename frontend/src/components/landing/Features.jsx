import React, { useEffect, useState, useRef } from 'react';

function UploadAnimation() {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const run = () => {
      setClicked(false);
      setDone(false);
      setTimeout(() => setClicked(true), 800);
      setTimeout(() => setDone(true), 1400);
      setTimeout(() => {
        setClicked(false);
        setDone(false);
      }, 3500);
    };
    run();
    const interval = setInterval(run, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <button
        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border
          ${clicked
            ? 'bg-blue-600 border-blue-400 scale-95 text-white shadow-lg shadow-blue-500/30'
            : 'bg-white/5 border-white/20 text-gray-300'
          }`}
      >
        Upload
      </button>
      <span
        className={`text-sm font-medium border rounded-lg px-4 py-1.5 transition-all duration-500
          ${done
            ? 'opacity-100 border-green-400 text-green-400 translate-y-0'
            : 'opacity-0 border-transparent text-green-400 translate-y-2'
          }`}
      >
        ✓ Product Uploaded
      </span>
    </div>
  );
}

function PaymentLinkAnimation() {
  const [clicked, setClicked] = useState(false);
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const fullLink = 'dropsocket/you/product/01';
  const fullPrice = '₹299';

  useEffect(() => {
    const run = () => {
      setClicked(false);
      setLink('');
      setPrice('');
      setTimeout(() => {
        let i = 0;
        const pi = setInterval(() => {
          setPrice(fullPrice.slice(0, i + 1));
          i++;
          if (i >= fullPrice.length) clearInterval(pi);
        }, 80);
      }, 600);
      setTimeout(() => setClicked(true), 1400);
      setTimeout(() => {
        let i = 0;
        const li = setInterval(() => {
          setLink(fullLink.slice(0, i + 1));
          i++;
          if (i >= fullLink.length) clearInterval(li);
        }, 40);
      }, 1800);
      setTimeout(() => {
        setClicked(false);
        setLink('');
        setPrice('');
      }, 5000);
    };
    run();
    const interval = setInterval(run, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-3 py-4 w-full px-2">
      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-blue-300 font-mono min-h-[36px]">
        {price || <span className="text-gray-600">Set price...</span>}
      </div>
      <button
        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border w-full
          ${clicked
            ? 'bg-blue-600 border-blue-400 scale-95 text-white shadow-lg shadow-blue-500/30'
            : 'bg-white/5 border-white/20 text-gray-300'
          }`}
      >
        Generate Link
      </button>
      <div
        className={`text-xs font-mono text-blue-400 border border-blue-500/30 rounded-lg px-3 py-2 bg-blue-500/10 transition-all duration-700
          ${link ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        https://{link}
      </div>
    </div>
  );
}

function RazorpayAnimation() {
  const [clicked, setClicked] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const run = () => {
      setClicked(false);
      setConnected(false);
      setTimeout(() => setClicked(true), 800);
      setTimeout(() => setConnected(true), 1500);
      setTimeout(() => {
        setClicked(false);
        setConnected(false);
      }, 4000);
    };
    run();
    const interval = setInterval(run, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <button
        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border
          ${clicked
            ? 'bg-blue-600 border-blue-400 scale-95 text-white shadow-lg shadow-blue-500/30'
            : 'bg-white/5 border-white/20 text-gray-300'
          }`}
      >
        Connect Razorpay
      </button>
      <span
        className={`text-sm font-medium border rounded-lg px-4 py-1.5 transition-all duration-500
          ${connected
            ? 'opacity-100 border-green-400 text-green-400 translate-y-0'
            : 'opacity-0 border-transparent translate-y-2'
          }`}
      >
        ✓ Razorpay Connected
      </span>
    </div>
  );
}

function DeliveryAnimation() {
  const [step, setStep] = useState(0);
  const emails = ['john@gmail.com', 'sam@gmail.com', 'tom@gmail.com'];

  useEffect(() => {
    const run = () => {
      setStep(0);
      setTimeout(() => setStep(1), 800);
      setTimeout(() => setStep(2), 1600);
      setTimeout(() => setStep(3), 2400);
      setTimeout(() => setStep(0), 5000);
    };
    run();
    const interval = setInterval(run, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 py-4 w-full px-2">
      <div className="text-xs font-mono text-blue-400 border border-blue-500/30 rounded-lg px-3 py-2 bg-blue-500/10 mb-1 text-center">
        product-file.pdf
      </div>
      {emails.map((email, i) => (
        <div
          key={email}
          className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border transition-all duration-500
            ${step > i
              ? 'border-green-400 text-green-400 bg-green-400/10'
              : 'border-white/10 text-gray-400 bg-white/5'
            }`}
        >
          <span>{email}</span>
          <span
           className={`transition-all duration-500 ${
           step > i ? 'opacity-100' : 'opacity-0'
           }`}
          >
            ✓ Sent
          </span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsAnimation() {
  return (
    <div className="py-3 w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
        {/* Mac title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="text-xs text-gray-400 ml-2 font-medium">DropSocket Analytics</span>
        </div>
        {/* Content */}
        <div className="p-3 grid grid-cols-2 gap-2 bg-gray-50">
          <div className="bg-white rounded-lg p-2 border border-blue-100 shadow-sm col-span-2">
            <p className="text-xs text-gray-400">Revenue Earned</p>
            <p className="text-lg font-bold text-blue-600">₹12,480</p>
          </div>
          <div className="bg-white rounded-lg p-2 border border-blue-100 shadow-sm">
            <p className="text-xs text-gray-400">Products Sold</p>
            <p className="text-lg font-bold text-gray-800">48</p>
          </div>
          <div className="bg-white rounded-lg p-2 border border-blue-100 shadow-sm">
            <p className="text-xs text-gray-400">Orders</p>
            <p className="text-lg font-bold text-gray-800">31</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecureDownloadAnimation() {
  const [clicked, setClicked] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const run = () => {
      setClicked(false);
      setDownloading(false);
      setDone(false);
      setTimeout(() => setClicked(true), 800);
      setTimeout(() => setDownloading(true), 1400);
      setTimeout(() => setDone(true), 2400);
      setTimeout(() => {
        setClicked(false);
        setDownloading(false);
        setDone(false);
      }, 5000);
    };
    run();
    const interval = setInterval(run, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-4 w-full px-2">
      <div
        className={`text-xs font-mono px-3 py-2 rounded-lg border w-full text-center transition-all duration-300 cursor-pointer
          ${clicked
            ? 'border-blue-400 text-blue-300 bg-blue-500/10 scale-95'
            : 'border-white/10 text-gray-400 bg-white/5'
          }`}
      >
        https://dropsocket/download/abc123
      </div>
      <div
      className={`text-xs text-gray-400 transition-all duration-500 ${
     downloading ? 'opacity-100' : 'opacity-0'
      }`} 
      >
        Downloading securely...
      </div>
      <span
        className={`text-sm font-medium border rounded-lg px-4 py-1.5 transition-all duration-500
          ${done
            ? 'opacity-100 border-green-400 text-green-400 translate-y-0'
            : 'opacity-0 border-transparent translate-y-2'
          }`}
      >
        ✓ Download Complete
      </span>
    </div>
  );
}

// ─── Main Features Component ──────────────────────────────────────

export default function Features() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const features = [
    {
      number: '01',
      title: 'One-Click Upload',
      description: 'Upload Notion, Canva, PDFs, eBooks and Zips in seconds with our intelligent file handler.',
      animation: <UploadAnimation />,
    },
    {
      number: '02',
      title: 'Payment Links',
      description: 'Generate shareable payment links instantly. Set your price and share anywhere.',
      animation: <PaymentLinkAnimation />,
    },
    {
      number: '03',
      title: 'Razorpay Ready',
      description: 'Seamless Razorpay integration. Connect once, collect payments forever.',
      animation: <RazorpayAnimation />,
    },
    {
      number: '04',
      title: 'Auto Delivery',
      description: 'Files delivered instantly to customer emails via Resend. Zero manual work.',
      animation: <DeliveryAnimation />,
    },
    {
      number: '05',
      title: 'Analytics Dashboard',
      description: 'Track revenue, products sold, and order history in real-time.',
      animation: <AnalyticsAnimation />,
    },
    {
      number: '06',
      title: 'Secure Downloads',
      description: 'Protected download links with expiry options. Your customers download safely.',
      animation: <SecureDownloadAnimation />,
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-blue-300 font-medium">FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Built for creators. Designed for scale.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            className={`relative flex flex-col rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-6 transition-all duration-700 hover:border-blue-400/20 hover:bg-white/[0.05]
            ${
            visibleCards.includes(index)
            ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
          }`} 
            >
              {/* Number */}
              <span className="text-4xl font-bold text-blue-400/60 mb-2">
                {feature.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Animation Area */}
              <div className="mt-auto border border-white/5 rounded-xl bg-white/[0.02] px-2 min-h-[140px] flex items-center justify-center">
                {feature.animation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
