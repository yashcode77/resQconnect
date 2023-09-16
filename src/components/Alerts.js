import React, { useState } from "react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Weather Warning",
      description: "Severe thunderstorms expected in the area.",
      timestamp: "2023-09-14 08:30 AM",
    },
    {
      id: 2,
      title: "Flood Alert",
      description: "Flash flood warning for low-lying areas.",
      timestamp: "2023-09-13 05:15 PM",
    },
    {
      id: 3,
      title: "Fire Advisory",
      description: "High wildfire risk due to dry conditions.",
      timestamp: "2023-09-12 10:45 AM",
    },
    // Add more entries here...
  ]);

  const addAlert = () => {
    // Generate a unique ID for the new alert
    const newId = Math.max(...alerts.map((alert) => alert.id), 0) + 1;

    // Create a new alert object and add it to the alerts array
    const newAlert = {
      id: newId,
      title: "New Alert",
      description: "Description of the new alert.",
      timestamp: new Date().toLocaleString(),
    };

    setAlerts([...alerts, newAlert]);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Alerts</h2>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-4"
        onClick={addAlert}
      >
        Add Alert
      </button>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{alert.title}</h3>
            <p className="text-gray-600">{alert.description}</p>
            <p className="text-gray-400 text-sm">{alert.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
