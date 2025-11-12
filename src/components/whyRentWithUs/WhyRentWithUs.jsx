import React from "react";
import {
  FaClock,
  FaMoneyBillWave,
  FaUserShield,
  FaHeadset,
  FaCarAlt,
  FaMapMarkedAlt,
  FaSmileBeam,
  FaMobileAlt,
} from "react-icons/fa";

const WhyRentWithUs = () => {
  const benefits = [
    {
      title: "Easy Booking",
      desc: "Book your favorite car online in just a few clicks — fast, simple, and hassle-free.",
      icon: <FaClock className="w-10 h-10 text-primary" />,
    },
    {
      title: "Affordable Rates",
      desc: "Enjoy competitive prices with transparent billing and zero hidden charges.",
      icon: <FaMoneyBillWave className="w-10 h-10 text-primary" />,
    },
    {
      title: "Trusted Providers",
      desc: "We partner only with verified and reliable car owners to ensure safety and trust.",
      icon: <FaUserShield className="w-10 h-10 text-primary" />,
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated support team is always available — anytime, anywhere.",
      icon: <FaHeadset className="w-10 h-10 text-primary" />,
    },
    {
      title: "Wide Car Selection",
      desc: "Choose from a wide variety of vehicles — economy to luxury, all at your fingertips.",
      icon: <FaCarAlt className="w-10 h-10 text-primary" />,
    },
    {
      title: "Nationwide Coverage",
      desc: "Available in multiple cities across the country for your convenience.",
      icon: <FaMapMarkedAlt className="w-10 h-10 text-primary" />,
    },
    {
      title: "Customer Satisfaction",
      desc: "Thousands of happy customers trust us for their daily and travel needs.",
      icon: <FaSmileBeam className="w-10 h-10 text-primary" />,
    },
    {
      title: "Mobile Friendly",
      desc: "Book, manage, and track your rentals easily from your smartphone.",
      icon: <FaMobileAlt className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Rent With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRentWithUs;