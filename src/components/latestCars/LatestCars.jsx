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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {latestCars.map((latestCar) => (
          <LatestCarCard key={latestCar._id} latestCar ={latestCar} />
        ))}
      </div>
    );
};

export default LatestCars;