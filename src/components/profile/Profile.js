import React, { useState, useEffect } from "react";
import app from '../../firebase/firebase';
import { agenciesRef } from "../../firebase/firebase";


const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    hospitals: "",
    personnel: "",
    vehicles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Use Geolocation API to fetch the user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({
          ...formData,
          location: `${latitude}, ${longitude}`,
        });
      });
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a backend API
    console.log(formData);
  };

  return (
    <div className="bg-white p-6 mx-60">
      <h2 className="text-2xl font-semibold mb-4">Agency Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-600">
            Location (Automatically detected)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            readOnly
            className="w-full border rounded-md py-2 px-3 text-gray-700 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-600">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="NDRF">NDRF</option>
            <option value="CRPF">CRPF</option>
            <option value="CRPF">Fire Brigade</option>
            <option value="CRPF">Police</option>
            <option value="CRPF">Red Cross</option>
            <option value="CRPF">Hospital</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="personnel" className="block text-gray-600">
            No. of Personnel
          </label>
          <input
            type="number"
            id="personnel"
            name="personnel"
            value={formData.personnel}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicles" className="block text-gray-600">
            No. of Vehicles
          </label>
          <input
            type="number"
            id="vehicles"
            name="vehicles"
            value={formData.vehicles}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
