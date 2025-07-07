export default function Dashboard() {
  // Mock data for demonstration. You can later connect to backend or props.
  const user = {
    name: "Bharath",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    plan: "Pro",
    joinDate: "March 2024"
  };

  const stats = [
    { 
      label: "Portfolios Created", 
      value: 3, 
      icon: "🎨",
      change: "+1 this month",
      color: "from-purple-500 to-pink-500"
    },
    { 
      label: "Themes Used", 
      value: 2, 
      icon: "🖼️",
      change: "Creative & Minimal",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      label: "Visitors This Month", 
      value: 128, 
      icon: "👥",
      change: "+23% from last month",
      color: "from-green-500 to-teal-500"
    },
    { 
      label: "Testimonials", 
      value: 7, 
      icon: "💬",
      change: "+2 this week",
      color: "from-orange-500 to-red-500"
    },
  ];

  const recent = [
    { 
      type: "Edited portfolio", 
      detail: "Updated 'My Product Design Work'", 
      time: "2 hours ago",
      icon: "✏️",
      color: "bg-blue-100 text-blue-700"
    },
    { 
      type: "Changed theme", 
      detail: "Switched to 'Creative Studio'", 
      time: "1 day ago",
      icon: "🎨",
      color: "bg-purple-100 text-purple-700"
    },
    { 
      type: "Received testimonial", 
      detail: "Priya: 'Fantastic presentation!'", 
      time: "3 days ago",
      icon: "⭐",
      color: "bg-green-100 text-green-700"
    },
    { 
      type: "Portfolio viewed", 
      detail: "Your portfolio got 12 new views", 
      time: "1 week ago",
      icon: "👀",
      color: "bg-indigo-100 text-indigo-700"
    }
  ];

  const portfolios = [
    {
      name: "My Product Design Work",
      theme: "Creative Studio",
      views: 89,
      lastUpdated: "2 hours ago",
      status: "Published",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Photography Portfolio",
      theme: "Minimal",
      views: 34,
      lastUpdated: "5 days ago", 
      status: "Draft",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Professional Resume",
      theme: "Professional CV",
      views: 5,
      lastUpdated: "1 week ago",
      status: "Published",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Welcome Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-lg" 
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-gray-600 text-lg">Here's a snapshot of your PortaCraft activity.</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {user.plan} Plan
                  </span>
                  <span className="text-gray-500 text-sm">Member since {user.joinDate}</span>
                </div>
              </div>
            </div>
            
            <div className="md:ml-auto">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-sm opacity-90">Total Portfolio Views</div>
                <div className="text-2xl font-bold">128</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
                  <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Your Portfolios */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Portfolios</h2>
                <a href="/create-portfolio" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                  Create New
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {portfolios.map((portfolio, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={portfolio.image} 
                        alt={portfolio.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                        portfolio.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {portfolio.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{portfolio.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{portfolio.theme} theme</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{portfolio.views} views</span>
                        <span>{portfolio.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Activity</h2>
              <div className="space-y-4">
                {recent.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <span className="font-semibold text-gray-800">{item.type}:</span>
                          <span className="text-gray-600 ml-2">{item.detail}</span>
                        </div>
                        <span className="text-gray-400 text-sm mt-1 sm:mt-0">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Tips */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <a href="/edit-profile" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-all duration-300 flex items-center">
                  <span className="mr-2">👤</span>
                  Edit Profile
                </a>
                <a href="/create-portfolio" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-all duration-300 flex items-center">
                  <span className="mr-2">➕</span>
                  Create New Portfolio
                </a>
                <a href="/themes" className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-all duration-300 flex items-center">
                  <span className="mr-2">🎨</span>
                  Browse Themes
                </a>
                <a href="/settings" className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium shadow hover:bg-gray-200 transition-all duration-300 flex items-center">
                  <span className="mr-2">⚙️</span>
                  Settings
                </a>
              </div>
            </div>

            {/* Tips & Updates */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-purple-100 mb-4">
                Add testimonials to your portfolio to build trust with potential clients. Portfolios with testimonials get 40% more inquiries!
              </p>
              <a href="/testimonials" className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Add Testimonials
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Upgrade Banner */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">🚀 Upgrade to Pro+</h3>
              <p className="text-orange-100 text-sm mb-4">
                Get advanced analytics, custom domains, and priority support.
              </p>
              <a href="/upgrade" className="inline-flex items-center bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors text-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}