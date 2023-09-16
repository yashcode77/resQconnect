import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="mb-8">
            <img
              src="https://www.hindustantimes.com/ht-img/img/2023/02/08/1600x900/National-Disaster-Response-Force-team-from-India-c_1675881346476.jpg" // Replace with your organization's image
              alt="About Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
            At resQconnect, our mission is to save lives and provide swift and effective relief during natural and man-made disasters. We are committed to coordinating rescue agencies, deploying vital resources, and fostering resilience within communities, all in pursuit of a safer, more prepared world.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
            Our vision is to create a world where communities are empowered to withstand and recover from disasters, where the coordinated efforts of rescue agencies and innovative technology ensure swift and effective responses, and where the safety and well-being of individuals and families are safeguarded during times of crisis. We aspire to be a global leader in disaster response, driving positive change, and inspiring a culture of preparedness, resilience, and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
