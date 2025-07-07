import { useState } from "react";

export default function Settings() {
  // Mock user data – in a real app, fetch this from your backend/auth provider
  const [profile, setProfile] = useState({
    name: "Bharath Nidumolu",
    email: "bharath@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Aspiring product designer. Lover of great coffee and elegant UIs.",
    location: "San Francisco, CA",
    website: "bharath.design",
    linkedin: "linkedin.com/in/bharath",
    twitter: "@bharath_design",
    notifications: {
      email: true,
      push: false,
      marketing: true,
      portfolio: true
    },
    theme: "light",
    language: "en",
    timezone: "PST"
  });

  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const [activeTab, setActiveTab] = useState("profile");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Profile change handler
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Notification change handler
  const handleNotificationChange = (type) => {
    setProfile({
      ...profile,
      notifications: {
        ...profile.notifications,
        [type]: !profile.notifications[type]
      }
    });
  };

  // Password change handler
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Save profile
  const saveProfile = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccessMsg("Profile updated successfully!");
    setIsLoading(false);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // Change password
  const changePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      setErrorMsg("New passwords do not match.");
      setTimeout(() => setErrorMsg(""), 3000);
      return;
    }
    if (passwords.new.length < 8) {
      setErrorMsg("Password must be at least 8 characters long.");
      setTimeout(() => setErrorMsg(""), 3000);
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccessMsg("Password changed successfully!");
    setPasswords({ old: "", new: "", confirm: "" });
    setIsLoading(false);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // Delete account
  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deletion initiated. You will receive an email confirmation.");
    }
  };

  const tabs = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "account", name: "Account", icon: "⚙️" },
    { id: "notifications", name: "Notifications", icon: "🔔" },
    { id: "privacy", name: "Privacy", icon: "🛡️" },
    { id: "billing", name: "Billing", icon: "💳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-purple-100">{profile.email}</p>
                <p className="text-purple-200 text-sm">{profile.bio}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 border-r border-gray-200">
              <nav className="p-6">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      {tab.name}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-8">
              
              {/* Success/Error Messages */}
              {successMsg && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {successMsg}
                </div>
              )}
              
              {errorMsg && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errorMsg}
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={profile.name}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          disabled
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Contact support to change your email</p>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        rows={3}
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={profile.location}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                          placeholder="City, Country"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Website</label>
                        <input
                          type="url"
                          name="website"
                          value={profile.website}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                          placeholder="your-website.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">LinkedIn</label>
                        <input
                          type="text"
                          name="linkedin"
                          value={profile.linkedin}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                          placeholder="linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Twitter</label>
                        <input
                          type="text"
                          name="twitter"
                          value={profile.twitter}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                          placeholder="@username"
                        />
                      </div>
                    </div>

                    <button
                      onClick={saveProfile}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? "Saving..." : "Save Profile"}
                    </button>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === "account" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                  
                  {/* Password Change */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          name="old"
                          value={passwords.old}
                          onChange={handlePasswordChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          name="new"
                          value={passwords.new}
                          onChange={handlePasswordChange}
                          minLength={8}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          name="confirm"
                          value={passwords.confirm}
                          onChange={handlePasswordChange}
                          minLength={8}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                      </div>
                      <button
                        onClick={changePassword}
                        disabled={isLoading}
                        className="bg-purple-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                      >
                        {isLoading ? "Updating..." : "Update Password"}
                      </button>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="space-y-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Theme</label>
                      <select
                        name="theme"
                        value={profile.theme}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto (System)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Language</label>
                        <select
                          name="language"
                          value={profile.language}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">Timezone</label>
                        <select
                          name="timezone"
                          value={profile.timezone}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                          <option value="PST">Pacific (PST)</option>
                          <option value="MST">Mountain (MST)</option>
                          <option value="CST">Central (CST)</option>
                          <option value="EST">Eastern (EST)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="mt-12 border-t pt-8">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
                      <p className="text-red-600 text-sm mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button
                        onClick={deleteAccount}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    {[
                      { key: "email", title: "Email Notifications", desc: "Receive notifications via email" },
                      { key: "push", title: "Push Notifications", desc: "Receive push notifications in your browser" },
                      { key: "marketing", title: "Marketing Emails", desc: "Receive updates about new features and tips" },
                      { key: "portfolio", title: "Portfolio Activity", desc: "Get notified when someone views your portfolio" }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={profile.notifications[item.key]}
                            onChange={() => handleNotificationChange(item.key)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === "privacy" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy & Security</h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-800 font-medium">Your account is secure</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h3>
                      <p className="text-gray-600 mb-4">Add an extra layer of security to your account.</p>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Export</h3>
                      <p className="text-gray-600 mb-4">Download a copy of all your data.</p>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        Request Data Export
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing & Subscription</h2>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-purple-800">Silver Plan</h3>
                        <p className="text-purple-600">$9/month • Next billing: Jan 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          Upgrade to Gold
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-5 bg-blue-500 rounded mr-3"></div>
                          <span>•••• •••• •••• 4242</span>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700">Update</button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Billing History</h3>
                      <div className="space-y-3">
                        {["Dec 15, 2023 - $9.00", "Nov 15, 2023 - $9.00", "Oct 15, 2023 - $9.00"].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span>{item}</span>
                            <button className="text-purple-600 hover:text-purple-700 text-sm">Download</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}