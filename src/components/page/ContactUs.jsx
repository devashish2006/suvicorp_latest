import React from "react";
import FAQSection from "../Faq";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l4 4m-4-4l4-4m8 12V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold ml-4">Contact us</h1>
            </div>
            <p className="text-gray-400 mb-8">
              We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> contact@yoursaas.ai
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> +1 (800) 123 XX21
            </p>
            <p className="mb-6">
              <span className="font-bold">Support:</span> support@yoursaas.ai
            </p>
            <div className="relative h-64">
              <MapContainer
                center={[12.9716, 77.5946]} // Coordinates for Bangalore
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[12.9716, 77.5946]}>
                  <Popup>Bangalore, India</Popup>
                </Marker>
              </MapContainer>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-blue-500 p-4 text-white rounded-lg animate-pulse text-lg font-semibold">
                  We are here!
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="fullName">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter your company name"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};

export default ContactUs;
