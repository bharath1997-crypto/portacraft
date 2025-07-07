import { useState } from "react";

const THEMES = [
  { name: "Minimal", color: "from-gray-200 to-gray-400" },
  { name: "Creative Studio", color: "from-purple-200 to-pink-200" },
  { name: "Professional CV", color: "from-blue-200 to-indigo-200" }
];

export default function PortfolioEditor() {
  // Editable portfolio fields
  const [form, setForm] = useState({
    name: "Your Name",
    bio: "A short professional bio goes here.",
    projects: [
      { title: "Project One", desc: "Description for project one." },
      { title: "Project Two", desc: "Description for project two." }
    ],
    theme: "Minimal",
    social: { linkedin: "", github: "" }
  });

  // Update fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Update project
  const handleProjectChange = (idx, key, value) => {
    const updated = [...form.projects];
    updated[idx][key] = value;
    setForm({ ...form, projects: updated });
  };

  // Add a new project
  const addProject = () => {
    setForm({ ...form, projects: [...form.projects, { title: "", desc: "" }] });
  };

  // Live preview theme
  const themeBg = THEMES.find(t => t.name === form.theme)?.color || "from-gray-200 to-gray-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Editor Panel */}
        <form className="bg-white rounded-xl shadow-xl p-8 space-y-6">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">Portfolio Editor</h1>
          <div>
            <label className="font-medium text-gray-700 block mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows={3}
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Projects</label>
            {form.projects.map((project, idx) => (
              <div key={idx} className="mb-3 bg-gray-50 p-3 rounded">
                <input
                  type="text"
                  value={project.title}
                  onChange={e => handleProjectChange(idx, "title", e.target.value)}
                  placeholder="Project title"
                  className="w-full mb-1 px-2 py-1 border rounded"
                  required
                />
                <textarea
                  value={project.desc}
                  onChange={e => handleProjectChange(idx, "desc", e.target.value)}
                  placeholder="Project description"
                  className="w-full px-2 py-1 border rounded"
                  rows={2}
                />
              </div>
            ))}
            <button type="button"
              onClick={addProject}
              className="mt-2 bg-purple-100 text-purple-700 font-bold py-2 px-4 rounded hover:bg-purple-200 transition"
            >
              + Add Project
            </button>
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">Theme</label>
            <select
              name="theme"
              value={form.theme}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              {THEMES.map(theme => (
                <option key={theme.name} value={theme.name}>{theme.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">LinkedIn</label>
            <input
              name="linkedin"
              value={form.social.linkedin}
              onChange={e => setForm({ ...form, social: { ...form.social, linkedin: e.target.value }})}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full px-3 py-2 border rounded"
              type="url"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">GitHub</label>
            <input
              name="github"
              value={form.social.github}
              onChange={e => setForm({ ...form, social: { ...form.social, github: e.target.value }})}
              placeholder="https://github.com/yourusername"
              className="w-full px-3 py-2 border rounded"
              type="url"
            />
          </div>
          {/* Save button (can be expanded to actually save) */}
          <button
            type="button"
            className="w-full mt-4 bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Save Portfolio
          </button>
        </form>
        
        {/* Live Preview */}
        <div className={`rounded-xl shadow-xl p-8 bg-gradient-to-br ${themeBg}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-3xl font-bold text-purple-700 mb-2">{form.name}</h2>
            <p className="text-gray-600 mb-6">{form.bio}</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Projects</h3>
            <ul className="mb-6 space-y-3">
              {form.projects.map((project, idx) => (
                <li key={idx} className="bg-purple-50 p-3 rounded">
                  <div className="font-semibold">{project.title}</div>
                  <div className="text-gray-600">{project.desc}</div>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {form.social.linkedin && (
                <a href={form.social.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 underline">LinkedIn</a>
              )}
              {form.social.github && (
                <a href={form.social.github} target="_blank" rel="noopener noreferrer"
                   className="text-gray-800 underline">GitHub</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
