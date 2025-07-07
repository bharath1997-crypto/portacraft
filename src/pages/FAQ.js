import { useState } from "react";

const faqList = [
  {
    q: "What is PortaCraft?",
    a: "PortaCraft is a no-code portfolio website builder that lets anyone create a beautiful, professional portfolio—no coding or design skills needed.",
  },
  {
    q: "How do I get started?",
    a: "Just sign up for a free account and use our dashboard to build your first portfolio. Choose a theme, add your details, and publish in minutes!",
  },
  {
    q: "Can I use PortaCraft for free?",
    a: "Yes! Our Free plan lets you build and launch a basic portfolio. Upgrade for more features, custom domains, and advanced analytics.",
  },
  {
    q: "How do I change my theme?",
    a: "Go to the Themes page in your dashboard. Preview and apply any theme instantly. Your content stays safe.",
  },
  {
    q: "Is my portfolio mobile-friendly?",
    a: "Absolutely! All themes are responsive and look great on any device.",
  },
  {
    q: "How do I contact support?",
    a: "You can email us anytime at support@portacraft.com, or use the Contact form at the bottom of this page.",
  },
  {
    q: "How can I delete my account?",
    a: "Go to Settings > Delete Account. Please note this action is permanent.",
  },
  // Add more as needed!
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-10 text-center max-w-lg mx-auto">
          Can’t find what you’re looking for? Email <a href="mailto:support@portacraft.com" className="text-purple-600 underline">support@portacraft.com</a>.
        </p>
        <div className="divide-y">
          {faqList.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                className="flex items-center justify-between w-full py-4 text-lg font-medium focus:outline-none"
              >
                <span className="text-gray-800">{item.q}</span>
                <span className={`transition-transform ${openIndex === idx ? "rotate-90" : ""}`}>▶</span>
              </button>
              {openIndex === idx && (
                <div className="pb-4 text-gray-600 border-b">{item.a}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form (optional, can remove if not needed) */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Still need help?</h2>
          <form className="space-y-5 max-w-md mx-auto">
            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input type="email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <div>
              <label className="block font-medium mb-1">Your Question</label>
              <textarea required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400" rows={3} />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              Contact Support
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
