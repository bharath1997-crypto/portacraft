import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Basic",
      price: { monthly: 0, yearly: 0 },
      description: "For students and beginners. Get started with all the basics.",
      features: [
        "1 portfolio website",
        "Basic themes (5 templates)",
        "Community support",
        "Standard analytics",
        "PortaCraft branding",
        "Basic contact form"
      ],
      cta: "Get Started Free",
      link: "/signup",
      highlight: false,
      icon: "🥉",
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-white",
      tier: "basic"
    },
    {
      name: "Silver",
      price: { monthly: 9, yearly: 90 },
      description: "For freelancers and professionals who want to grow their brand.",
      features: [
        "Up to 5 portfolios",
        "Premium & custom themes (50+ templates)",
        "Advanced analytics & insights",
        "Priority support (24/7)",
        "Custom domain connection",
        "Remove PortaCraft branding",
        "Advanced contact forms",
        "SEO optimization tools"
      ],
      cta: "Try Silver",
      link: "/signup?plan=silver",
      highlight: true,
      badge: "Most Popular",
      icon: "🥈",
      color: "from-gray-300 to-gray-500",
      bgColor: "from-gray-50 to-slate-50",
      tier: "silver"
    },
    {
      name: "Gold",
      price: { monthly: 25, yearly: 250 },
      description: "For agencies and power users. Unlock the full platform.",
      features: [
        "Unlimited portfolios",
        "All themes & future releases",
        "Team collaboration (up to 10 users)",
        "AI content generation tools",
        "White-label branding",
        "Dedicated success manager",
        "Custom integrations",
        "Priority feature requests",
        "Advanced team analytics"
      ],
      cta: "Start Gold",
      link: "/signup?plan=gold",
      highlight: false,
      icon: "🥇",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      tier: "gold"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UX Designer",
      company: "TechCorp",
      quote: "PortaCraft helped me land my dream job! The pro plan paid for itself in one client.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Developer",
      company: "MR Studios",
      quote: "The Pro+ plan is perfect for my agency. Team collaboration features are game-changing.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. No questions asked."
    },
    {
      question: "What happens to my portfolios if I downgrade?",
      answer: "Your portfolios remain safe. You'll just have access to fewer features based on your new plan."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees, no hidden costs. The price you see is exactly what you pay."
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
  };

  const getSavings = (plan) => {
    if (plan.price.monthly === 0) return 0;
    return Math.round(((plan.price.monthly * 12 - plan.price.yearly) / (plan.price.monthly * 12)) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center py-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            No hidden fees. Pick the plan that fits your needs and upgrade anytime. Get a 7-day free trial on all paid plans!
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-purple-600 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-purple-600 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            <div className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Save up to 25%
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 ${
                plan.highlight 
                  ? "border-4 border-purple-400 scale-105 z-10 shadow-2xl" 
                  : "border border-gray-100 hover:shadow-xl hover:-translate-y-2"
              }`}
              onMouseEnter={() => setHoveredPlan(idx)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-6 py-2 rounded-full font-semibold shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {plan.icon}
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{plan.name}</h2>
                <div className="mb-4">
                  <div className="text-5xl font-extrabold text-purple-600">
                    {getPrice(plan) === 0 ? (
                      "Free"
                    ) : (
                      <>
                        ${getPrice(plan)}
                        <span className="text-lg font-medium text-gray-400">
                          /{billingCycle === 'yearly' ? 'year' : 'month'}
                        </span>
                      </>
                    )}
                  </div>
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      Save {getSavings(plan)}% yearly
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-center leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.link}
                className={`w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${hoveredPlan === idx ? 'transform scale-105' : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Plan Comparison Table */}
        <div className="mt-20 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Compare All Features</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Pro+</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Portfolios", free: "1", pro: "5", proplus: "Unlimited" },
                    { feature: "Themes", free: "5 Basic", pro: "50+ Premium", proplus: "All + Future" },
                    { feature: "Custom Domain", free: "❌", pro: "✅", proplus: "✅" },
                    { feature: "Analytics", free: "Basic", pro: "Advanced", proplus: "Team Analytics" },
                    { feature: "Support", free: "Community", pro: "Priority 24/7", proplus: "Dedicated Manager" },
                    { feature: "Team Collaboration", free: "❌", pro: "❌", proplus: "✅" },
                    { feature: "AI Tools", free: "❌", pro: "❌", proplus: "✅" },
                    { feature: "White-label", free: "❌", pro: "❌", proplus: "✅" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.free}</td>
                      <td className="px-6 py-4 text-sm text-purple-600 text-center font-medium">{row.pro}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.proplus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Plans Include */}
        <div className="mt-20 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">All Plans Include</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🔒", text: "Free SSL & Hosting" },
              { icon: "📱", text: "Mobile-Responsive" },
              { icon: "⚡", text: "Fast Loading" },
              { icon: "🎨", text: "Professional Design" },
              { icon: "📊", text: "Basic Analytics" },
              { icon: "🛡️", text: "Security Features" },
              { icon: "🔄", text: "Regular Updates" },
              { icon: "💳", text: "No Hidden Fees" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white px-4 py-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-gray-700">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've already created stunning portfolios with PortaCraft. Start your free trial today!
            </p>
            <a 
              href="/signup" 
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}