import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect information you provide directly to us when creating an account, such as your name, email address, and payment details. We also collect usage data including pages visited, features used, and actions taken within the platform.',
  },
  {
    title: 'How We Use Information',
    content:
      'Your information is used to provide, maintain, and improve our services. This includes processing payments, sending transactional emails, delivering digital products to your customers, and communicating platform updates with you.',
  },
  {
    title: 'Payments',
    content:
      'Payment processing is handled securely through Razorpay. DropSocket does not store your full card details. All payment data is encrypted and processed in accordance with PCI-DSS standards. By using our platform, you agree to Razorpay\'s terms of service.',
  },
  {
    title: 'Cookies',
    content:
      'We use cookies and similar tracking technologies to enhance your experience, maintain session state, and analyze platform usage. You can control cookie preferences through your browser settings. Disabling cookies may affect certain platform functionality.',
  },
  {
    title: 'Third-Party Services',
    content:
      'DropSocket integrates with third-party services including Razorpay for payment processing and Resend for transactional email delivery. These services operate under their own privacy policies. We encourage you to review their policies separately.',
  },
  {
    title: 'Data Protection',
    content:
      'We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Your data is stored on secure servers with encryption at rest and in transit. We regularly review and update our security practices.',
  },
  {
    title: 'Contact Information',
    content:
      'If you have questions about this Privacy Policy or how your data is handled, please reach out to us at code0.nishal@gmail.com. We aim to respond to all privacy-related inquiries within 48 hours.',
  },
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-20">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Go Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300 mb-12"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-blue-300 font-medium">Legal</span>
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Last updated: May 2026. This policy describes how DropSocket collects, uses, and protects your information.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-black/60 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 backdrop-blur-md p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-blue-400/30 hover:shadow-[0_16px_48px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-blue-400/60 mt-1 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 DropSocket. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
