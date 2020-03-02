import React, { useState, useEffect } from 'react';
import { locationApi } from '../../api/location-api'
import './index.css';

export default function LocationCousel() {
  useEffect(() => {
    const fetchData = async () => {
      const offices = await locationApi();
      console.log(offices);
    };

    fetchData();
  }, []);

  return <div>Location Counsel here..</div>
}