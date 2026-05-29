import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'Free',
      description: 'Perfect to get started',
      badge: null,
      highlight: false,
      features: [
        '1 product',
        '10 orders/month',
        'Basic storefront',
        'Razorpay integration',
        'Automated delivery',
      ],
      cta: 'Get Started',
      ctaVariant: 'secondary',
    },
    {
      id: 'creator',
      name: 'Creator',
      price: '₹499',
      period: '/month',
      description: 'For growing creators',
      badge: 'Most Popular',
      highlight: true,
      features: [
        'Unlimited products',
        'Unlimited orders',
        'Customizable storefront',
        'Automated delivery',
        'Priority support',
        'Monthly analytics',
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'primary',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'Coming Soon',
      description: 'For scale & growth',
      badge: 'Early Access',
      highlight: false,
      features: [
        'Unlimited products',
        'Unlimited orders',
        'Advanced customization',
        'Advanced analytics',
        'API access',
        'Dedicated support',
      ],
      cta: 'Notify Me',
      ctaVariant: 'secondary',
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-blue-300 font-medium">PRICING</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Simple pricing for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              creators
            </span>
          </h2>

          <p className="text-lg text-gray-400 font-light">
            Choose the plan that fits your needs. All plans include core features to start selling.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group rounded-3xl border backdrop-blur-md transition-all duration-500
                ${
                  plan.highlight
                    ? 'md:scale-105 border-blue-400/50 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-blue-500/5 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]'
                    : 'border-black/60 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_48px_rgba(59,130,246,0.2)]'
                }
                ${hoveredCard === plan.id && !plan.highlight ? 'border-blue-400/30' : ''}
                ${hoveredCard === plan.id && plan.highlight ? 'border-blue-400/70' : ''}
              `}
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none
                  ${
                    hoveredCard === plan.id
                      ? 'opacity-100'
                      : 'opacity-0'
                  }
                  ${
                    plan.highlight
                      ? 'bg-linear-to-t from-blue-500/10 to-transparent'
                      : 'bg-linear-to-t from-blue-500/5 to-transparent'
                  }`}
              />

              <div className="relative p-8 lg:p-10 flex flex-col h-full">
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-6">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border
                        ${
                          plan.highlight
                            ? 'bg-linear-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 text-blue-300'
                            : 'bg-white/10 border-white/20 text-gray-300'
                        }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 text-sm font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group/feature"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
                        ${
                          plan.highlight
                            ? 'bg-blue-500/30 border border-blue-400/50 text-blue-300'
                            : 'bg-white/10 border border-white/20 text-gray-400'
                        }`}>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed group-hover/feature:text-gray-200 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
  to="/beta-access"
  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden relative block text-center
    ${
      plan.ctaVariant === 'primary'
        ? 'group/btn'
        : ''
    }`}
>
  {plan.ctaVariant === 'primary' ? (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-100 group-hover/btn:opacity-90 transition-opacity" />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-all duration-500" />

      <span className="relative z-10 text-white block">
        {plan.cta}
      </span>
    </>
  ) : (
    <span
      className={`relative z-10
        ${
          hoveredCard === plan.id
            ? 'text-white'
            : 'text-gray-300'
        }`}
    >
      {plan.cta}
    </span>
  )}

  {plan.ctaVariant === 'secondary' && (
    <div
      className={`absolute inset-0 rounded-xl border transition-all duration-300
        ${
          hoveredCard === plan.id
            ? 'border-blue-400/50 bg-blue-500/10'
            : 'border-white/20 bg-transparent'
        }`}
    />
  )}
</Link>
                {/* Bottom accent line for highlight card */}
                {plan.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 rounded-b-3xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 space-y-4">
          <p className="text-gray-400 text-sm">
            All plans include a 4-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 text-xs">
            Questions? Contact code0.nishal@gmail.com 
          </p>
        </div>
      </div>
    </section>
  );
}
