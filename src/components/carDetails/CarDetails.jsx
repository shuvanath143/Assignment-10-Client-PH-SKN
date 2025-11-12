import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CarDetails = () => {
  const car = useLoaderData()
  console.log(car)
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();

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
      userEmail: user.email,
      userName: user.displayName,
      bookingDate: new Date(),
    };

    try {
      const res = await axiosInstance.post("/bookings", bookingData);
      if (res.data.success) {
        Swal.fire("Booking successful!", "Car has been booked.", "success");
      } else {
        Swal.fire("Booking failed!", "", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Something went wrong!", "", "error");
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
            disabled={car.carStatus === "Booked"}
          >
            {car.carStatus === "Booked" ? "Booked" : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
