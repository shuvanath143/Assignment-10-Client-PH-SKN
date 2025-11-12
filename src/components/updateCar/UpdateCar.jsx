import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateCar = () => {
  const car = useLoaderData();
  console.log(car)
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      carName: form.carName.value,
      category: form.category.value,
      rentPrice: form.rentPrice.value,
      location: form.location.value,
      carStatus: form.carStatus.value,
    };

    const res = await axiosSecure.put(`/cars/${car._id}`, updatedCar);
    if (res.data.modifiedCount) {
      alert("Car updated successfully!");
      navigate("/myListings");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="carName"
          defaultValue={car.carName}
          className="input input-bordered w-full"
        />
        <select
          name="category"
          defaultValue={car.category}
          className="select select-bordered w-full"
        >
          <option>Sedan</option>
          <option>SUV</option>
          <option>Hatchback</option>
          <option>Luxury</option>
          <option>Electric</option>
        </select>
        <input
          name="rentPrice"
          defaultValue={car.rentPrice}
          className="input input-bordered w-full"
        />
        <input
          name="location"
          defaultValue={car.location}
          className="input input-bordered w-full"
        />
        <select
          name="carStatus"
          defaultValue={car.carStatus}
          className="select select-bordered w-full"
        >
          <option>Available</option>
          <option>Booked</option>
        </select>
        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateCar;