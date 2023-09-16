import React, { useState } from "react";

const Agencies = () => {
  const [agencies] = useState([
    // Your agency objects here[
  {
    "id": 1,
    "name": "NDRF",
    "type": "National Disaster Response Force",
    "hospitals": 2,
    "personnel": 100,
    "vehicles": 20,
    "location": "28.6139, 77.2090"
  },
  {
    "id": 2,
    "name": "CRPF",
    "type": "Central Reserve Police Force",
    "hospitals": 1,
    "personnel": 80,
    "vehicles": 15,
    "location": "25.276987, 82.973914"
  },
  {
    "id": 3,
    "name": "Red Cross",
    "type": "Humanitarian Organization",
    "hospitals": 5,
    "personnel": 200,
    "vehicles": 25,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 4,
    "name": "FEMA",
    "type": "Federal Emergency Management Agency",
    "hospitals": 3,
    "personnel": 150,
    "vehicles": 30,
    "location": "38.8951, -77.0364"
  },
  {
    "id": 5,
    "name": "Fire Department",
    "type": "Fire and Rescue Services",
    "hospitals": 0,
    "personnel": 120,
    "vehicles": 22,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 6,
    "name": "Ambulance Services",
    "type": "Emergency Medical Services",
    "hospitals": 4,
    "personnel": 90,
    "vehicles": 18,
    "location": "41.8781, -87.6298"
  },
  {
    "id": 7,
    "name": "Coast Guard",
    "type": "Maritime Search and Rescue",
    "hospitals": 1,
    "personnel": 75,
    "vehicles": 10,
    "location": "38.9072, -77.0370"
  },
  {
    "id": 8,
    "name": "Mountain Rescue",
    "type": "Search and Rescue Team",
    "hospitals": 0,
    "personnel": 30,
    "vehicles": 6,
    "location": "39.7392, -104.9903"
  },
  {
    "id": 9,
    "name": "Animal Rescue",
    "type": "Animal Welfare Organization",
    "hospitals": 0,
    "personnel": 40,
    "vehicles": 8,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 10,
    "name": "Medical Corps",
    "type": "Medical Relief Organization",
    "hospitals": 3,
    "personnel": 60,
    "vehicles": 12,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 11,
    "name": "UNICEF",
    "type": "United Nations Children's Fund",
    "hospitals": 2,
    "personnel": 50,
    "vehicles": 10,
    "location": "48.8566, 2.3522"
  },
  {
    "id": 12,
    "name": "Police Department",
    "type": "Law Enforcement Agency",
    "hospitals": 1,
    "personnel": 110,
    "vehicles": 20,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 13,
    "name": "Search and Rescue Team",
    "type": "Volunteer Rescue Group",
    "hospitals": 0,
    "personnel": 25,
    "vehicles": 5,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 14,
    "name": "Air Force",
    "type": "Military Branch",
    "hospitals": 2,
    "personnel": 80,
    "vehicles": 15,
    "location": "38.8951, -77.0364"
  },
  {
    "id": 15,
    "name": "Emergency Relief Foundation",
    "type": "Humanitarian Organization",
    "hospitals": 4,
    "personnel": 70,
    "vehicles": 12,
    "location": "48.8566, 2.3522"
  },
  {
    "id": 16,
    "name": "National Guard",
    "type": "Military Reserve Force",
    "hospitals": 1,
    "personnel": 60,
    "vehicles": 10,
    "location": "38.9072, -77.0370"
  },
  {
    "id": 17,
    "name": "Community Health Center",
    "type": "Healthcare Facility",
    "hospitals": 3,
    "personnel": 50,
    "vehicles": 8,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 18,
    "name": "Fire and Rescue Squad",
    "type": "Fire and Rescue Services",
    "hospitals": 0,
    "personnel": 35,
    "vehicles": 7,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 19,
    "name": "Emergency Medical Team",
    "type": "Medical Response Unit",
    "hospitals": 2,
    "personnel": 45,
    "vehicles": 9,
    "location": "48.8566, 2.3522"
  },
  {
    "id": 20,
    "name": "Civil Defense",
    "type": "Emergency Preparedness Agency",
    "hospitals": 1,
    "personnel": 30,
    "vehicles": 6,
    "location": "38.9072, -77.0370"
  },
  {
    "id": 21,
    "name": "Marine Rescue Unit",
    "type": "Water Rescue Team",
    "hospitals": 0,
    "personnel": 20,
    "vehicles": 5,
    "location": "39.7392, -104.9903"
  },
  {
    "id": 22,
    "name": "Animal Shelter",
    "type": "Animal Welfare Organization",
    "hospitals": 0,
    "personnel": 25,
    "vehicles": 4,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 23,
    "name": "Emergency Relief Corps",
    "type": "Disaster Response Group",
    "hospitals": 1,
    "personnel": 40,
    "vehicles": 8,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 24,
    "name": "Red Crescent",
    "type": "Humanitarian Organization",
    "hospitals": 3,
    "personnel": 55,
    "vehicles": 11,
    "location": "48.8566, 2.3522"
  },
  {
    "id": 25,
    "name": "Sheriff's Office",
    "type": "Law Enforcement Agency",
    "hospitals": 1,
    "personnel": 65,
    "vehicles": 12,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 26,
    "name": "Disaster Relief Team",
    "type": "Volunteer Response Group",
    "hospitals": 0,
    "personnel": 30,
    "vehicles": 6,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 27,
    "name": "National Emergency Service",
    "type": "Emergency Response Agency",
    "hospitals": 2,
    "personnel": 45,
    "vehicles": 9,
    "location": "38.9072, -77.0370"
  },
  {
    "id": 28,
    "name": "Public Health Department",
    "type": "Healthcare Authority",
    "hospitals": 2,
    "personnel": 40,
    "vehicles": 8,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 29,
    "name": "Urban Search and Rescue Team",
    "type": "Search and Rescue Unit",
    "hospitals": 0,
    "personnel": 25,
    "vehicles": 5,
    "location": "39.7392, -104.9903"
  },
  {
    "id": 30,
    "name": "Wildlife Rescue",
    "type": "Animal Rescue Organization",
    "hospitals": 0,
    "personnel": 20,
    "vehicles": 4,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 31,
    "name": "Emergency Relief Association",
    "type": "Disaster Response Group",
    "hospitals": 1,
    "personnel": 35,
    "vehicles": 7,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 32,
    "name": "State Police",
    "type": "Law Enforcement Agency",
    "hospitals": 1,
    "personnel": 70,
    "vehicles": 14,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 33,
    "name": "Emergency Medical Response Team",
    "type": "Medical Aid Unit",
    "hospitals": 2,
    "personnel": 40,
    "vehicles": 8,
    "location": "48.8566, 2.3522"
  },
  {
    "id": 34,
    "name": "Homeland Security",
    "type": "National Security Agency",
    "hospitals": 1,
    "personnel": 50,
    "vehicles": 10,
    "location": "38.9072, -77.0370"
  },
  {
    "id": 35,
    "name": "Emergency Care Center",
    "type": "Healthcare Facility",
    "hospitals": 4,
    "personnel": 60,
    "vehicles": 12,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 36,
    "name": "Mountain Search and Rescue Team",
    "type": "Search and Rescue Unit",
    "hospitals": 0,
    "personnel": 30,
    "vehicles": 6,
    "location": "39.7392, -104.9903"
  },
  {
    "id": 37,
    "name": "Pet Rescue",
    "type": "Animal Welfare Organization",
    "hospitals": 0,
    "personnel": 20,
    "vehicles": 4,
    "location": "34.0522, -118.2437"
  },
  {
    "id": 38,
    "name": "Emergency Relief Team",
    "type": "Disaster Response Group",
    "hospitals": 1,
    "personnel": 40,
    "vehicles": 8,
    "location": "40.7128, -74.0060"
  },
  {
    "id": 39,
    "name": "Humanitarian Aid",
    "type": "Relief Organization",
    "hospitals": 2,
    "personnel": 55,
    "vehicles": 11,
    "location": "48.8566, 2.3522"
  },
   

    
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [agencyTypeFilter, setAgencyTypeFilter] = useState("All");

  // Filter agencies based on search term and agency type
  const filteredAgencies = agencies.filter((agency) => {
    const nameMatch = agency.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = agencyTypeFilter === "All" || agency.type === agencyTypeFilter;
    return nameMatch && typeMatch;
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Agency Information</h2>
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by name"
          className="px-4 py-2 border rounded-lg w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg"
          value={agencyTypeFilter}
          onChange={(e) => setAgencyTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          {/* Add other agency type options here */}
          <option value="National Disaster Response Force">National Disaster Response Force</option>
          <option value="Central Reserve Police Force">Central Reserve Police Force</option>
          {/* ... */}
        </select>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Hospitals</th>
            <th className="px-4 py-2">Personnel</th>
            <th className="px-4 py-2">Vehicles</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredAgencies.map((agency) => (
            <tr key={agency.id}>
              <td className="px-4 py-2">{agency.name}</td>
              <td className="px-4 py-2">{agency.type}</td>
              <td className="px-4 py-2">{agency.hospitals}</td>
              <td className="px-4 py-2">{agency.personnel}</td>
              <td className="px-4 py-2">{agency.vehicles}</td>
              <td className="px-4 py-2">
                <a
                  href={`https://maps.google.com/?q=${agency.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Map
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agencies;
