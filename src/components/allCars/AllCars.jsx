import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import SearchCars from "../searchCars/SearchCars";

const AllCars = () => {
  const axiosInstance = useAxios();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axiosInstance.get("/cars").then((res) => {
      console.log(res.data);
      setCars(res.data);
    });
  }, [axiosInstance]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <SearchCars />
      <div className="grid grid-cols-1 sm:grid-cols-2md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cars.map((car) => (
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
        ))}
      </div>
    </div>
  );
};

export default AllCars;
