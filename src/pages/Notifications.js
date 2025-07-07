// Mock notification data for demo
const notifications = [
  {
    id: 1,
    type: "success",
    message: "Your new portfolio was published successfully!",
    time: "2 hours ago",
    icon: "✅",
  },
  {
    id: 2,
    type: "info",
    message: "You switched to the ‘Creative Studio’ theme.",
    time: "1 day ago",
    icon: "🎨",
  },
  {
    id: 3,
    type: "testimonial",
    message: "You received a new testimonial: “Great work!”",
    time: "2 days ago",
    icon: "💬",
  },
  {
    id: 4,
    type: "reminder",
    message: "Don't forget to update your profile for better visibility.",
    time: "3 days ago",
    icon: "🔔",
  },
];

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Notifications</h1>
        {notifications.length === 0 ? (
          <div className="text-gray-500 text-center py-16">
            <div className="text-5xl mb-4">🔕</div>
            No new notifications.
          </div>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`flex items-start gap-4 p-4 rounded-xl shadow ${
                  notif.type === "success"
                    ? "bg-green-50"
                    : notif.type === "info"
                    ? "bg-blue-50"
                    : notif.type === "testimonial"
                    ? "bg-purple-50"
                    : "bg-yellow-50"
                }`}
              >
                <div className="text-2xl">{notif.icon}</div>
                <div className="flex-1">
                  <div className="text-gray-800">{notif.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{notif.time}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
