import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const CarDetails = () => {
  const car = useLoaderData();
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = async () => {
    if (!user) {
      Swal.fire("Please login to book this car!");
      navigate("/login");
      return;
    }

    const bookingData = {
      carId: car._id,
      carName: car.carName,
      rentPrice: car.rentPrice,
      image: car.image,
      location: car.location,
      provider_email: car.provider_email,
      provider_name: car.provider_name,
      userEmail: user.email,
      userName: user.displayName,
      bookingDate: new Date(),
      status: "Booked",
    };

    try {
      const res = await axiosInstance.post("/bookings", bookingData);

      if (res.data.success) {
        Swal.fire("Booking successful!", "Car has been booked.", "success");
        setIsBooked(true);
      } else {
        Swal.fire("Booking failed!", "", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Something went wrong!", "", "error");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="card w-full md:w-2/3 lg:w-1/2 bg-base-100 shadow-2xl">
        <figure className="p-4">
          <img
            src={car.image}
            alt={car.carName}
            className="rounded-xl object-cover w-full h-72"
          />
        </figure>

        <div className="card-body space-y-2">
          <h2 className="card-title text-2xl font-bold text-primary">
            {car.carName}
          </h2>
          <p className="text-gray-600">{car.description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-semibold">Category:</span> {car.category}
            </p>
            <p>
              <span className="font-semibold">Model Year:</span>{" "}
              {car.modelYear}
            </p>
            <p>
              <span className="font-semibold">Rent Price:</span> $
              {car.rentPrice}/day
            </p>
            <p>
              <span className="font-semibold">Location:</span> {car.location}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {car.carStatus}
            </p>
          </div>

          <div className="divider"></div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Provider Information</h3>
            <p>
              <span className="font-semibold">Name:</span> {car.provider_name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {car.provider_email}
            </p>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={handleBooking}
              className="btn btn-primary"
              disabled={car.carStatus === "Booked" || isBooked}
            >
              {car.carStatus === "Booked" || isBooked ? "Booked" : "Book Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
