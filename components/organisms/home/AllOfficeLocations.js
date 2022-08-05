import dynamic from 'next/dynamic';
import lineStyles from 'styles/LineHeader.module.css';
import React, { useContext } from 'react';
import { sortByKey } from '../../../utils/helpers';
import OfficeDetails from '../../molecules/location/OfficeDetails';
import { LocationContext } from '../../../contexts/LocationContext';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = () => (
  <div />
  // <div className="wrapper-section">
  //   <h3 className="title-block">OFFICE LOCATIONS</h3>
  //   <div className={lineStyles.location}>
  //     <div className={lineStyles.items}>
  //       <div className={lineStyles.item}>
  //
  //       </div>
  //     </div>
  //   </div>
  // </div>
);
export default AllOfficeLocations;
