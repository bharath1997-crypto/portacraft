export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            About PortaCraft
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            PortaCraft empowers anyone to build a professional portfolio website—no coding required. We offer beautiful, customizable themes, smart integrations, and a seamless editor, so you can focus on showcasing your work and landing opportunities.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Founded in 2023 by a team of designers and developers who were frustrated with the complexity of existing website builders, PortaCraft was born from the simple idea that creating a stunning portfolio shouldn't require a computer science degree. We believe everyone deserves to showcase their work beautifully, whether you're a photographer, designer, writer, or entrepreneur.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-semibold text-purple-700">10,000+ Users</span>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-semibold text-pink-700">50+ Themes</span>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-semibold text-indigo-700">99.9% Uptime</span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="Modern workspace with laptop showing portfolio website"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Mission & Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At PortaCraft, we're democratizing web design. We believe that great design shouldn't be reserved for those with technical skills or big budgets. Our mission is to empower creators, freelancers, and professionals to build stunning online portfolios that truly represent their work and personality.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We've helped over 10,000 users land their dream jobs, attract new clients, and grow their personal brands. From photographers showcasing their latest shoots to UX designers displaying their case studies, PortaCraft makes it easy to create a professional online presence that stands out from the crowd.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform combines the simplicity of drag-and-drop editing with the power of professional web design, giving you complete creative control without the technical complexity.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
                alt="Team collaborating on creative project"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose PortaCraft?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Customizable Themes",
                description: "Choose from a variety of modern templates and personalize them to fit your brand.",
                color: "from-pink-400 via-purple-400 to-indigo-400"
              },
              {
                icon: "⚡",
                title: "Instant Publishing",
                description: "Get your site live in minutes with a simple, user-friendly editor and one-click publishing.",
                color: "from-yellow-400 via-orange-400 to-red-400"
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "Enjoy secure hosting, SSL, and fast content delivery—no tech expertise required.",
                color: "from-emerald-400 via-teal-400 to-cyan-400"
              },
              {
                icon: "🧩",
                title: "Smart Integrations",
                description: "Connect with social media, analytics, and other tools to grow your audience.",
                color: "from-blue-400 via-indigo-400 to-purple-400"
              },
              {
                icon: "💬",
                title: "Built-in Testimonials",
                description: "Showcase customer reviews and feedback to build trust with visitors.",
                color: "from-purple-400 via-pink-400 to-rose-400"
              },
              {
                icon: "📈",
                title: "Growth Analytics",
                description: "Track visitor stats and improve your online presence with easy-to-read analytics.",
                color: "from-indigo-400 via-blue-400 to-cyan-400"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Users Say</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users are saying about their PortaCraft experience and how it's helped them achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "PortaCraft made building my online portfolio incredibly easy. I got hired within a week!",
                author: "Anjali",
                role: "UX Designer",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                quote: "The available themes are stunning and customizable. Highly recommended.",
                author: "Marcus",
                role: "Frontend Developer",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                quote: "Excellent support and fast site setup. Loved the experience!",
                author: "Priya",
                role: "Data Scientist",
                rating: 5,
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="italic text-gray-700 mb-4 leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={review.image} 
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{review.author}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Themes Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Explore Our Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Minimal Portfolio",
                description: "Clean, elegant, easy to read.",
                color: "from-slate-400 via-gray-400 to-zinc-400",
                href: "/themes?theme=minimal"
              },
              {
                name: "Creative Studio",
                description: "For designers and creators.",
                color: "from-purple-400 via-pink-400 to-rose-400",
                href: "/themes?theme=creative"
              },
              {
                name: "Professional CV",
                description: "Perfect for resumes and job-seekers.",
                color: "from-blue-400 via-indigo-400 to-purple-400",
                href: "/themes?theme=professional"
              }
            ].map((theme, index) => (
              <a key={index} href={theme.href} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`h-24 bg-gradient-to-br ${theme.color}`}></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {theme.name}
                    </h3>
                    <p className="text-gray-600">{theme.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                alt="Modern office space with creative workspace"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why We're Different</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Unlike other website builders that try to be everything to everyone, PortaCraft is laser-focused on one thing: helping you create the perfect portfolio. This specialization means every feature, every template, and every tool is designed specifically for showcasing your work.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand that your portfolio isn't just a website—it's your professional identity online. That's why we've invested in premium hosting, lightning-fast loading times, and mobile-optimized designs that look perfect on every device.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Built specifically for portfolios</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Premium hosting included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Mobile-first design approach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What's New?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              {[
                { date: "June 2025", update: "Added AI-powered resume review tool.", icon: "🔥" },
                { date: "May 2025", update: "Released 3 new creative portfolio themes.", icon: "🎨" },
                { date: "April 2025", update: "Improved site speed by 50%.", icon: "⚡" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-bold text-purple-600">{item.date}:</span>
                    <span className="text-gray-700 ml-2">{item.update}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Portfolio?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've already created stunning portfolios with PortaCraft.
            </p>
            <a 
              href="/signup" 
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Portfolio
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