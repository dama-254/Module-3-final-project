import { useEffect, useState } from "react";
import { getFeeds } from "../services/feedApi";

function FeedManagement() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getFeeds();
      setFeeds(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Feed Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{feed.feedName}</h2>
            <p className="text-gray-600">Quantity: {feed.quantity} kg</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedManagement;