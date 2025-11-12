import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // your Auth context
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newCar = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPrice: parseFloat(form.rentPrice.value),
      location: form.location.value,
      image: form.image.value,
      provider_name: user?.displayName,
      provider_email: user?.email,
      carStatus: "Available",
      modelYear: new Date().getFullYear(),
    };

    // axiosInstance.post("/addCar", newCar)
    // .then(data => {
    //   console.log(data.data)
    // })
    try {
      const res = await axiosInstance.post("/addCar", newCar);
      if (res.data.insertedId) {
        console.log(res.data.insertedId);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } else {
        toast.error("Failed to add car!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="max-w-3xl mx-auto my-12 p-8 bg-base-200 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Add a New Car
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Car Name */}
        <div className="form-control">
          <label className="label font-semibold">Car Name</label>
          <input
            type="text"
            name="carName"
            className="input input-bordered w-full"
            placeholder="Enter car name"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Write a short description"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Rent Price */}
        <div className="form-control">
          <label className="label font-semibold">Rent Price (per day)</label>
          <input
            type="number"
            name="rentPrice"
            className="input input-bordered w-full"
            placeholder="Enter daily rent price"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label font-semibold">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label font-semibold">Car Image URL</label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            placeholder="Please Insert Car Image URL"
            required
          />
        </div>

        {/* Provider Info */}
        <div className="form-control">
          <label className="label font-semibold">Provider Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Provider Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-6">
          Add Car
        </button>
      </form>
    </section>
  );
};

export default AddCar;
