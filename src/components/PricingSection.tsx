import React from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "1 job posting",
        "Job promoted for 7 days",
        "Job posting for 30 days"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    },
    {
      name: "Standard",
      price: "$399.99",
      period: "/month",
      features: [
        "1 job posting",
        "Job promoted for 7 days", 
        "Job posting for 30 days",
        "Featured job posting"
      ],
      popular: true,
      buttonText: "Get Started",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700"
    },
    {
      name: "Extended",
      price: "$999.99",
      period: "/month",
      features: [
        "1 job posting",
        "Job promoted for 7 days",
        "Job posting for 30 days", 
        "Featured job posting",
        "Premium support"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Choose a plan that's right for you.
            </h2>
            <p className="text-lg text-gray-600">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;