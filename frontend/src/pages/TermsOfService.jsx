import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: 'Platform Usage',
    content:
      'By accessing or using DropSocket, you agree to be bound by these Terms of Service. The platform is intended for creators selling legitimate digital products. You must be at least 16 years old to create an account and use our services.',
  },
  {
    title: 'Creator Responsibilities',
    content:
      'As a creator, you are solely responsible for the digital products you upload and sell. You must ensure you hold the rights to distribute all content on your storefront. You are responsible for accurately describing your products and setting appropriate pricing.',
  },
  {
    title: 'Prohibited Content',
    content:
      'You may not upload, sell, or distribute content that is illegal, harmful, fraudulent, or infringes on intellectual property rights. This includes pirated software, plagiarized content, misleading products, or anything that violates applicable laws.',
  },
  {
    title: 'Payments & Refunds',
    content:
      'All payments are processed through Razorpay. DropSocket charges a platform fee on transactions as outlined in your plan. Refunds are handled on a case-by-case basis. Creators are encouraged to maintain clear refund policies on their storefronts.',
  },
  {
    title: 'Account Termination',
    content:
      'DropSocket reserves the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or harm the platform or its users. You may also delete your account at any time through your account settings.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'DropSocket is not liable for indirect, incidental, or consequential damages arising from platform usage. Our total liability is limited to the amount paid by you in the 30 days preceding the incident. We do not guarantee uninterrupted or error-free service.',
  },
  {
    title: 'Changes to Terms',
    content:
      'DropSocket reserves the right to modify these Terms of Service at any time. We will notify users of significant changes via email or platform notice. Continued use of the platform after changes constitutes acceptance of the updated terms.',
  },
];

export default function TermsOfService() {
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
            Terms of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Last updated: May 2026. Please read these terms carefully before using DropSocket.
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
