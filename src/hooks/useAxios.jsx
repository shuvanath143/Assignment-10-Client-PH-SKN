import axios from "axios";


const AxiosInstance = axios.create({
  baseURL: "https://car-rent-platform-api.vercel.app/",
  // baseURL: "http://localhost:3000",
});

const useAxios = () => {
    return AxiosInstance;
}

export default useAxios;