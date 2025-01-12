import React from "react";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Existing Components",
      price: "Free",
      description: "All the components that are freely available on the website are free to use.",
      features: ["A growing library of awesome components"],
    },
    // Add other plans similarly...
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
            <p className="text-green-500 text-3xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-300 mb-6">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
