import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateCar = () => {
  const car = useLoaderData();
  console.log(car);
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
      // alert("Car updated successfully!");
      Swal.fire("Updated!", "Car updated successfully!", "success");
      navigate("/dashboard/myCars");
    }
  };

  return (
    <section className="max-w-3xl mx-auto my-12 p-8 bg-base-200 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Update Car's Data
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <label name="carName" className="label">
          Car Name
        </label>
        <input
          name="carName"
          defaultValue={car.carName}
          className="input input-bordered w-full"
        />
        <label name="carName" className="label">
          Category
        </label>
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
        <label name="rentPrice" className="label">
          Rent Price (per day)
        </label>
        <input
          name="rentPrice"
          defaultValue={car.rentPrice}
          className="input input-bordered w-full"
        />
        <label name="location" className="label">
          Location
        </label>
        <input
          name="location"
          defaultValue={car.location}
          className="input input-bordered w-full"
        />
        <label name="modelYear" className="label">
          Model Year
        </label>
        <input
          name="modelYear"
          defaultValue={car.modelYear}
          className="input input-bordered w-full"
        />
        <label name="location" className="label">
          Status
        </label>
        <select
          name="carStatus"
          defaultValue={car.carStatus}
          className="select select-bordered w-full"
        >
          <option>Available</option>
          <option>Booked</option>
        </select>
        <button className="btn btn-primary w-full mt-2">Update</button>
      </form>
    </section>
  );
};

export default UpdateCar;