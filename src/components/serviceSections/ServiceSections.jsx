import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaCarSide,
  FaThumbsUp,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaGift,
  FaUserTie,
  FaRoad,
  FaClock,
} from "react-icons/fa";

const ServiceSections = () => {
  
  const topRatedCars = [
    {
      name: "Tesla Model 3",
      rating: 5,
      price: "$120/day",
      type: "Electric Sedan",
      img: "https://i.ibb.co.com/ZpyQkxjV/Tesla-Model-3.jpg",
    },
    {
      name: "BMW X5",
      rating: 5,
      price: "$150/day",
      type: "Luxury SUV",
      img: "https://i.ibb.co.com/DDgZmL14/BMW-320i-2019.jpg",
    },
    {
      name: "Toyota RAV4",
      rating: 4,
      price: "$80/day",
      type: "Hybrid SUV",
      img: "https://i.ibb.co.com/ZzG8rDbs/Toyota-Yaris-2019.jpg",
    },
    {
      name: "Mercedes C-Class",
      rating: 5,
      price: "$140/day",
      type: "Luxury Sedan",
      img: "https://i.ibb.co.com/CKBhNC4R/Mercedes-Benz-E-Class-2020.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sophia Ahmed",
      text: "The booking process was incredibly smooth! I rented a car for my weekend trip and it was in perfect condition. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Arif Chowdhury",
      text: "Affordable prices and great customer service! They even helped me find the perfect car for my needs.",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      rating: 4,
    },
    {
      name: "Maria Hossain",
      text: "This is my go-to car rental service. Super reliable and friendly support every time!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
  ];

  const specialOffers = [
    {
      title: "Weekend Saver Deals",
      desc: "Book any car for Friday to Sunday and get 20% off instantly!",
      icon: <FaGift className="text-primary w-10 h-10" />,
    },
    {
      title: "Loyalty Rewards",
      desc: "Earn points on every ride and redeem for discounts on your next booking.",
      icon: <FaUserTie className="text-primary w-10 h-10" />,
    },
    {
      title: "First-Time User Bonus",
      desc: "Sign up today and enjoy an exclusive 15% discount on your first rental.",
      icon: <FaCarSide className="text-primary w-10 h-10" />,
    },
  ];

  const locations = [
    {
      city: "Dhaka",
      cars: 120,
    },
    {
      city: "Chittagong",
      cars: 90,
    },
    {
      city: "Sylhet",
      cars: 60,
    },
    {
      city: "Rajshahi",
      cars: 70,
    },
  ];

  const safetyFeatures = [
    {
      title: "Fully Insured Cars",
      desc: "Every vehicle comes with comprehensive insurance for your peace of mind.",
      icon: <FaShieldAlt className="text-primary w-10 h-10" />,
    },
    {
      title: "Real-Time Tracking",
      desc: "Track your ride in real-time with our advanced GPS system.",
      icon: <FaMapMarkedAlt className="text-primary w-10 h-10" />,
    },
    {
      title: "Verified Drivers",
      desc: "Our partner drivers are background-checked and professionally trained.",
      icon: <FaUserTie className="text-primary w-10 h-10" />,
    },
  ];

  return (
    <div className="bg-base-200 py-20 space-y-24">
      {/* Top Rated Cars Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaStar className="text-yellow-500" /> Top Rated Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topRatedCars.map((car, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition rounded-2xl overflow-hidden"
            >
              <figure>
                <img
                  src={car.img}
                  alt={car.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <p className="text-lg font-bold text-primary mt-2">
                  {car.price}
                </p>
                <div className="flex justify-center mt-2">
                  {Array(car.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaQuoteLeft className="text-primary" /> Customer Testimonials{" "}
          <FaQuoteRight className="text-primary" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-lg p-6 rounded-2xl hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary/20"
              />
              <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{t.text}</p>
              <div className="flex justify-center">
                {Array(t.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="btn btn-primary btn-wide flex items-center gap-2">
            <FaThumbsUp /> Share Your Experience
          </button>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaGift className="text-pink-500" /> Special Offers & Rewards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition rounded-2xl p-6 flex flex-col items-center text-center"
            >
              {offer.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{offer.title}</h3>
              <p className="text-gray-500 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety and Security Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaShieldAlt className="text-blue-600" /> Safety & Security
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((s, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-lg p-6 rounded-2xl hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mt-3 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Locations Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaMapMarkedAlt className="text-green-500" /> Our Popular Locations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-md p-6 rounded-2xl text-center hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{loc.city}</h3>
              <p className="text-gray-500">Available Cars: {loc.cars}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
          <FaRoad className="text-primary" /> How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="card bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl">
            <FaCarSide className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">1. Choose Your Car</h3>
            <p className="text-gray-500 text-sm">
              Browse through our wide range of cars and pick the one that fits
              your needs.
            </p>
          </div>
          <div className="card bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl">
            <FaClock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">2. Book Instantly</h3>
            <p className="text-gray-500 text-sm">
              Book online in minutes with flexible payment options and instant
              confirmation.
            </p>
          </div>
          <div className="card bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl">
            <FaThumbsUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">3. Enjoy Your Ride</h3>
            <p className="text-gray-500 text-sm">
              Pick up your car or have it delivered — then hit the road with
              confidence!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSections;