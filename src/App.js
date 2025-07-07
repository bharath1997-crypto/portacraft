import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Themes from "./pages/Themes";
import Pricing from "./pages/Pricing";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PortfolioEditor from "./pages/PortfolioEditor";
import PublicPortfolio from "./pages/PublicPortfolio"; // <-- new public portfolio page!

// Mock user; replace with your actual user state (from context/auth) in real app
const user = { 
  username: "bharath",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg"
};

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex items-center gap-6">
        <Link
          to={user ? `/portfolio/${user.username}` : "/about"}
          className="font-bold text-xl text-purple-600"
        >
          PortaCraft
        </Link>
        <Link to="/about" className="hover:text-purple-500">About</Link>
        <Link to="/dashboard" className="hover:text-purple-500">Dashboard</Link>
        <Link to="/themes" className="hover:text-purple-500">Themes</Link>
        <Link to="/pricing" className="hover:text-purple-500">Pricing</Link>
        <Link to="/settings" className="hover:text-purple-500">Settings</Link>
        <Link to="/notifications" className="hover:text-purple-500">Notifications</Link>
        <Link to="/faq" className="hover:text-purple-500">FAQ</Link>
        <Link to="/portfolio-editor" className="hover:text-purple-500">Portfolio Editor</Link>
        <div className="ml-auto flex gap-4 items-center">
          <Link to="/login" className="hover:text-purple-500">Login</Link>
          <Link to="/signup" className="hover:text-purple-500">Sign Up</Link>
          <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border-2 border-purple-200 ml-2" />
        </div>
      </nav>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio-editor" element={<PortfolioEditor />} />
        {/* Public, shareable user portfolio route */}
        <Route path="/portfolio/:username" element={<PublicPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
