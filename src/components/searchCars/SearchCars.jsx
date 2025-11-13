import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const SearchCars = () => {
const axiosInstance = useAxiosSecure();
  const [cars, setCars] = useState([]); // ✅ cars state
  const [query, setQuery] = useState("");

  // Fetch cars from API
  useEffect(() => {
    axiosInstance.get("/cars").then((res) => setCars(res.data));
  }, [axiosInstance]);

  // Filter cars dynamically
  const filteredCars = cars.filter((car) =>
    car.carName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Search Bar */}
      <div className="relative w-80 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=""
          className="w-full border border-gray-300 rounded-full p-3 pl-5 focus:outline-none shadow-md"
        />

        {/* Typewriter Placeholder */}
        {query === "" && (
          <span className="absolute left-6 top-3 text-gray-400 pointer-events-none">
            <Typewriter
              words={[
                "Search by car name...",
                "Type to find your dream car...",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {filteredCars.length ? (filteredCars.map((car) => (
        <div
          key={car._id}
          className="card shadow-xl cursor-pointer"
          data-tooltip-id={`tooltip-${car._id}`}
          data-tooltip-content={`Rent: $${car.rentPrice}/day`}
        >
          <figure>
            <img src={car.image} alt={car.carName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{car.carName}</h2>
            <p>{car.description.slice(0, 100)}...</p>
            <p>
              <b>${car.rentPrice}</b> /day
            </p>
            <div className="card-actions justify-end">
              <Link
                to={`/cars/${car._id}`}
                className="btn btn-outline btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))) : (
        <p className="text-gray-500 text-lg font-medium">
            {query ? "No cars found" : "Start typing to search"}
          </p>
      )}
    </div>
    </div>
  );
};

export default SearchCars;
