import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function PublicPortfolio() {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      setLoading(true);
      const ref = doc(db, "portfolios", username);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setData(snap.data());
      } else {
        setData(null);
      }
      setLoading(false);
    }
    fetchPortfolio();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-bold text-purple-600">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">User Not Found</h1>
          <p className="text-gray-600">No portfolio exists for <strong>{username}</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <div className="flex items-center mb-6">
          {data.avatar && (
            <img src={data.avatar} alt={data.name} className="w-20 h-20 rounded-full border-4 border-purple-300 mr-6" />
          )}
          <div>
            <h1 className="text-3xl font-bold text-purple-700">{data.name}</h1>
            <div className="text-gray-500">@{data.username}</div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">{data.bio}</p>
        <div className="flex gap-4 mb-6">
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">GitHub</a>
          )}
        </div>
        {/* Projects array if you add it */}
        {Array.isArray(data.projects) && (
          <>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Projects</h2>
            <ul className="mb-6 space-y-3">
              {data.projects.map((p, idx) => (
                <li key={idx} className="bg-purple-50 p-3 rounded">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-gray-600">{p.desc}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
