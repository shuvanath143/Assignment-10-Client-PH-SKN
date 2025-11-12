import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { motion } from "framer-motion";
import LatestCarCard from './LatestCarCard';

const LatestCars = () => {

    const [latestCars, setLatestCars] = useState([])
    const axiosInstance = useAxios()

    useEffect(() => {
        axiosInstance.get("/latestCars").then((data) => {
          console.log(data.data);
          setLatestCars(data.data);
        });
    }, [axiosInstance])
    
    return (
      <div>
        {latestCars.map((latestCar) => (
          <LatestCarCard latestCar ={latestCar} />
        ))}
      </div>
    );
};

export default LatestCars;