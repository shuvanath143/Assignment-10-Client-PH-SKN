import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const CarDetails = () => {
  const car = useLoaderData()
  console.log(car)
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false)

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
        setIsBooked(false);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Something went wrong!", "", "error");
      setIsBooked(false);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={car.image} alt={car.carName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.carName}</h2>
        <p>{car.description}</p>
        <p className="font-semibold">Rent: ${car.rentPrice}/day</p>
        <div className="card-actions justify-end">
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
  );
};

export default CarDetails;
