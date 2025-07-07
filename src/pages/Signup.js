import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Firebase/Auth API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">
          Create Your PortaCraft Account
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Join thousands of creators and launch your portfolio today!
        </p>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-green-600 font-semibold mb-2">Sign up successful!</div>
            <div className="text-gray-500">Check your email to confirm your account.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Password (min 6 characters)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline font-semibold">Log In</a>
        </p>
      </div>
    </div>
  );
}
