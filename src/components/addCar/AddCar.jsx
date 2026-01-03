import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // your Auth context
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const image_API_URL = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_image_host
}`;

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();
  const axios = useAxios()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const imageFile = form.image.files[0];
    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }

    let imageURL = "";

    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgRes = await axios.post(image_API_URL, formData);
      imageURL = imgRes.data.data.url;
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed");
      return;
    }

    const newCar = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPrice: parseFloat(form.rentPrice.value),
      location: form.location.value,
      image: imageURL,
      provider_name: user?.displayName,
      provider_email: user?.email,
      carStatus: "Available",
      modelYear: form.modelYear.value,
    };

    try {
      const res = await axiosInstance.post("/addCar", newCar);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Car added successfully",
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add car");
    }
  };


  return (
    <section className="max-w-3xl my-10 mx-auto p-8 bg-base-200 rounded-2xl shadow-xl">
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

        {/* Car Model Year*/}
        <div className="form-control">
          <label className="label font-semibold">Model Year</label>
          <input
            type="text"
            name="modelYear"
            className="input input-bordered w-full"
            placeholder="Enter car model year"
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
          <label className="label font-semibold">Car Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
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
