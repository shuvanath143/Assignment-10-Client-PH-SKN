import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosInstance
      .get(`/bookings/${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user, axiosInstance]);

  if (loading) return <p>Loading your bookings...</p>;
  if (bookings.length === 0) return <p>You have no bookings yet.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col"
          >
            <img
              src={booking.carImage}
              alt={booking.carName}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{booking.carName}</h3>
            <p>
              <strong>Provider:</strong> {booking.providerName}
            </p>
            <p>
              <strong>Rent Price:</strong> ${booking.rentPrice}/day
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  booking.status === "Booked"
                    ? "text-red-600"
                    : "text-green-600"
                }
              >
                {booking.status}
              </span>
            </p>
            <p>
              <strong>Booked At:</strong>{" "}
              {new Date(booking.bookedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
