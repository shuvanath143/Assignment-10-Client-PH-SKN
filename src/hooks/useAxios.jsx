import axios from "axios";


const AxiosInstance = axios.create({
  baseURL: "https://car-rent-platform-api.vercel.app/",
});

const useAxios = () => {
    return AxiosInstance;
}

export default useAxios;