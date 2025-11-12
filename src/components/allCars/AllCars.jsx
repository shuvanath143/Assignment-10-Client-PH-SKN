import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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

          {/* Tooltip component */}
          <Tooltip
            id={`tooltip-${car._id}`}
            place="top"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "6px",
              fontSize: "14px",
              padding: "6px 10px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AllCars;
