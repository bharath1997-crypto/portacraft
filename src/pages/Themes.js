const themes = [
  {
    name: "Minimal Portfolio",
    description: "Clean, elegant, easy to read.",
    color: "from-slate-400 via-gray-400 to-zinc-400",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "/themes?theme=minimal",
  },
  {
    name: "Creative Studio",
    description: "Perfect for designers and artists.",
    color: "from-purple-400 via-pink-400 to-rose-400",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    link: "/themes?theme=creative",
  },
  {
    name: "Professional CV",
    description: "Ideal for resumes and job seekers.",
    color: "from-blue-400 via-indigo-400 to-purple-400",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "/themes?theme=professional",
  },
  // Add more as you grow!
];

export default function Themes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Browse Portfolio Themes</h1>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Explore our curated collection of portfolio themes. Choose the one that fits your style—apply it instantly to your site!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className={`h-36 w-full bg-gradient-to-br ${theme.color} flex items-center justify-center`}>
                <img
                  src={theme.img}
                  alt={theme.name}
                  className="w-32 h-24 object-cover rounded-lg shadow border-4 border-white"
                />
              </div>
              <div className="p-6 flex flex-col items-center">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{theme.name}</h2>
                <p className="text-gray-600 text-sm mb-4 text-center">{theme.description}</p>
                <a
                  href={theme.link}
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-purple-700 transition"
                >
                  Preview Theme
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center text-gray-400 text-sm">
          More themes launching soon—stay tuned!
        </div>
      </div>
    </div>
  );
}
