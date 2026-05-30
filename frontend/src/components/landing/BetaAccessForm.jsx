import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const API_URL ='https://courageous-tenderness-production-12ef.up.railway.app' ;

export default function BetaAccessForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    create_sell: '',
    current_platform: '',
    social_handle: '',
    pain_point: '',
    desired_features: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim() || !formData.create_sell.trim() || !formData.desired_features.trim()) {
        toast.error('Please fill in all required fields');
        setLoading(false);
        return;
      }

      // Send to FastAPI backend
      const response = await axios.post(`${API_URL}/api/beta-access`, formData);

      if (response.data.success) {
        toast.success('You\'re on the waitlist! We\'ll contact you soon.');
        setFormData({
          name: '',
          email: '',
          create_sell: '',
          current_platform: '',
          social_handle: '',
          pain_point: '',
          desired_features: '',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Required Fields Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Required</h3>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              required
            />
          </div>

          {/* What do you create/sell */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              What do you create or sell?
            </label>
            <textarea
              name="create_sell"
              value={formData.create_sell}
              onChange={handleChange}
              placeholder="Tell us about your digital products or services... (e.g., Notion templates, design assets, courses, etc.)"
              rows="3"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm resize-none"
              required
            />
          </div>
        </div>

        {/* Optional Fields Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Optional</h3>

          {/* Current Selling Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Where do you currently sell? (Gumroad, Payhip, etc.)
            </label>
            <input
              type="text"
              name="current_platform"
              value={formData.current_platform}
              onChange={handleChange}
              placeholder="e.g., Gumroad, Payhip, Instagram DMs"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Social Media Handle */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Social media handle (YouTube, Instagram, Twitter, etc.)
            </label>
            <input
              type="text"
              name="social_handle"
              value={formData.social_handle}
              onChange={handleChange}
              placeholder="@yourhandle or channel link"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Painful Workflows */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              What's your most painful workflow in selling?
            </label>
            <textarea
              name="pain_point"
              value={formData.pain_point}
              onChange={handleChange}
              placeholder="Tell us what frustrates you most... (e.g., manually sending files, payment tracking, etc.)"
              rows="3"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm resize-none"
            />
          </div>
        </div>

        {/* Smart Question */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            What features would make your selling experience better?
          </label>
          <textarea
            name="desired_features"
            value={formData.desired_features}
            onChange={handleChange}
            placeholder="Tell us what features matter most to you... (e.g., analytics, customization, API access, etc.)"
            rows="3"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full group relative px-8 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300 rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500 rounded-xl" />
          <span className="relative z-10 text-white flex items-center justify-center gap-2">
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Join Waitlist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </span>
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your data will only be used to contact you about DropSocket.
        </p>
      </form>
    </>
  );
}
