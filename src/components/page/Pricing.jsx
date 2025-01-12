import React from "react";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Starter Plan",
      price: "Free",
      description: "Get started with essential tools and services for small-scale business needs.",
      features: [
        "Access to CFO Dashboard for basic financial insights.",
        "Essential Tax Services support.",
        "Design + Development",
        "Basic Audit Readiness tools for compliance preparation.",
        "Limited Risk Consulting for small-scale businesses.",
      ],
    },
    {
      title: "Professional Plan",
      price: "$3499/mo",
      description:
        "Elevate your operations with advanced dashboards and comprehensive support.",
      features: [
        "Premium access to CFO Dashboard, Audit Manager, and Risk Manager.",
        "Complete Executive Services for leadership excellence.",
        "Extensive Risk Consulting with tailored mitigation strategies.",
        "End-to-end support with all products and dashboards included.",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$4995/mo",
      description:
        "Unlock premium features and expert consulting for large-scale business excellence.",
      features: [
        "Full access to CFO Dashboard and Audit Manager tools.",
        "Comprehensive Digital Transformation support.",
        "Advanced Tax Services with planning and compliance.",
        "Real-time insights with the Real-Time Analytics Dashboard.",
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Pricing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800 hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-green-400 text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-3">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
