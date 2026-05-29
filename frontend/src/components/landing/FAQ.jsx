import React, { useRef, useState } from 'react';

export default function FAQ() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const faqs = [
    {
      id: 1,
      question: 'What can I sell?',
      answer: 'Sell digital products like Notion templates, ebooks, PDFs, guides, design assets, and more.',
    },
    {
      id: 2,
      question: 'Does the platform have payout thresholds?',
      answer: 'We keep no payout thresholds for creators, the money you earn directly comes to you',
    },
    {
      id: 3,
      question: 'How are products delivered?',
      answer: 'Customers automatically receive secure download access immediately after successful payment.',
    },
    {
      id: 4,
      question: 'Which payment methods are supported?',
      answer: 'Payments are processed through Razorpay with support for UPI, cards, net banking, and more.',
    },
    {
      id: 5,
      question: 'Can I customize my storefront?',
      answer: 'Yes. Creator and Pro plans include customizable storefront options.',
    },
    {
      id: 6,
      question: 'Is there a free plan?',
      answer: 'Yes. The Starter plan allows creators to begin with 1 product and limited monthly orders.',
    },
    {
      id: 7,
      question: 'When will Pro features launch?',
      answer: 'Advanced analytics and additional creator tools are currently in development.',
    },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  return (
    <section
      id="faq"
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-32 overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-blue-300 font-medium">FAQ</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Frequently asked{' '}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="text-lg text-gray-400 font-light">
            Everything you need to know about DropSocket and getting started.
          </p>
        </div>

        {/* Scroll container wrapper */}
        <div className="relative">
          
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 lg:px-0 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Hide scrollbar */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* FAQ Cards */}
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="shrink-0 w-full sm:w-96 snap-center"
              >
                <div className="group relative h-full rounded-3xl border border-black/60 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_48px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-hidden p-8 lg:p-10 flex flex-col justify-between min-h-[380px]">

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    
                    {/* Question */}
                    <div className="space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                        Q{faq.id.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Answer */}
                    <p className="text-gray-400 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative z-10 pt-6 mt-auto">
                    <div className="h-1 w-12 bg-linear-to-r from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile hint */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-xs text-gray-500">
            ← Swipe to explore more →
          </p>
        </div>
      </div>
    </section>
  );
}
