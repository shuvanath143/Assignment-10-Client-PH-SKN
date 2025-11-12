import React from 'react';
import { Link } from 'react-router';

const LatestCarCard = ({ latestCar }) => {
    const { carName, carStatus, category, image, provider_name, rentPrice, modelYear } = latestCar;
    return (
      <div className="max-w-sm mx-auto">
        <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden relative">
          {/* Image area with badge */}
          <div className="relative bg-gray-50">
            <img
              src={image}
              alt="Toyota RAV4"
              className="w-full h-56 object-cover"
            />

            <div className="absolute top-4 right-4">
              <span className="badge badge-primary badge-lg rounded-full px-4 py-2 shadow-lg">
                {carStatus}
              </span>
            </div>
          </div>

          <div className="card-body p-6">
            <h3 className="text-2xl font-semibold">{carName}</h3>
            <p className="text-sm text-gray-400">{provider_name}</p>

            <div className="flex items-center gap-6 mt-4 text-gray-500">
              <div className="flex items-center gap-2 text-sm">
                {/* automatic icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <span>{modelYear}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                {/* hybrid icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20M2 12h20"
                  />
                </svg>
                <span>Hybrid</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  $ {rentPrice}
                  <span className="text-2xl font-normal text-gray-400">
                    /day
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LatestCarCard;