import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import CarDetails from "../carDetails/CarDetails";

const Profile = () => {
  const { user } = useAuth();
  
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [displayName, setDisplayName] = useState(user?.name || "");
  const [photoURL, setPhotoURL] = useState(user?.photo || "");

  // Get number of cars owned by user
  const { data: userCars = [] } = useQuery({
    queryKey: ["userCars", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCars?creatorEmail=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Get number of bookings by user
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myBookings?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleUpdateProfile = async () => {
    if (!displayName) {
      return Swal.fire("Error", "Name cannot be empty", "error");
    }

    try {
      await axiosSecure.patch(`/users/update-profile/${user.uid}`, {
        name: displayName,
        photo: photoURL,
      });

      queryClient.invalidateQueries(["userProfile", user?.email]);

      Swal.fire("Updated!", "Profile updated successfully", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update profile", "error");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 text-center md:text-left mb-6">
        My Profile
      </h2>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Panel */}
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 transition-transform hover:scale-105 duration-300">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-300 shadow-md"
            alt="Profile"
          />
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-900">
              {user?.displayName}
            </h3>
          </div>
          <p className="text-gray-500">{user?.email}</p>

          {/* Stats */}
          <div className="mt-4 bg-indigo-50 w-full rounded-xl p-4 text-center space-y-2 shadow-inner">
            <div className="flex justify-between px-4">
              <span className="text-gray-700 font-medium">
                Number of Owned Cars:
              </span>
              <span className="font-bold text-gray-900">
                {userCars.length}
              </span>
            </div>
            <div className="flex justify-between px-4">
              <span className="text-gray-700 font-medium">Number of Bookings:</span>
              <span className="font-bold text-gray-900">
                {bookings.length}
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-2/3 transition-shadow hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Update Profile
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 rounded-lg"
              defaultValue={user.displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
            />
            <input
              type="text"
              className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 rounded-lg"
              value={user.photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
            />
            <button
              onClick={handleUpdateProfile}
              className="btn btn-primary w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Profile;
