import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyListings = () => {
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/myCars?email=${user.email}`)
        .then((res) => {
          console.log("Response:", res.data);
          setCars(res.data || []); // ensure array
        })
        .catch((err) => console.log(err));
    }
  }, [user, axiosInstance]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(`/myCars/${_id}`);
          console.log(_id, typeof _id);
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Car has been deleted.", "success");
            const remainingCars = cars.filter((car) => car._id !== _id);
            setCars(remainingCars);
          }
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto pt-20 mx-auto">
      <table className="table w-full">
        <thead className="text-center">
          <tr>
            <th>Car Name</th>
            <th>Category</th>
            <th>Rent Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Array.isArray(cars) &&
            cars.map((car) => (
              <tr key={car._id}>
                <td>{car.carName}</td>
                <td>{car.category}</td>
                <td>${car.rentPrice}</td>
                <td>{car.carStatus}</td>
                <td className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => navigate(`/dashboard/updateCar/${car._id}`)}
                    className="btn btn-xs btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListings;
