import CurrentOfficeCard from 'components/molecules/location/CurrentOfficeCard';
import OfficesLinkTabs from 'components/molecules/location/OfficesLinkTabs';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import empty from 'is-empty';
import {
  SubHeaderInteractive,
  SubHeaderLocationsHolder,
} from 'styles/practices/SubHeader.style';
import { motion } from 'framer-motion';
import { globalBorderRadius } from 'styles/global_styles/Global.styles';

const SubHeaderLocations = ({
  locations,
  title,
  officeInfo,
  isLocationTabs,
}) => {
  if (empty(locations)) return null;
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [currentHeight, setCurrentHeight] = useState('auto');
  const contentRef = useRef(null);

  const locationInfo = useMemo(() => {
    if (!isLocationTabs) return officeInfo;
    const currentLocation = locations[isActiveTab];
    return currentLocation;
  }, [isLocationTabs, officeInfo, locations, isActiveTab]);

  const updateContainerHeight = () => {
    if (contentRef.current) {
      const measuredHeight = contentRef.current.offsetHeight;
      setCurrentHeight(measuredHeight);
    }
  };

  useEffect(() => {
    updateContainerHeight();
  }, []);

  const onClick = (e, index) => {
    if (!isLocationTabs) return null;
    e.preventDefault();
    updateContainerHeight();
    setIsActiveTab(index);
  };

  return (
    <SubHeaderInteractive>
      <SubHeaderLocationsHolder>
        <motion.div
          key={locationInfo.databaseId}
          initial={{
            opacity: 0,
            height: currentHeight,
            overflow: 'hidden',
          }}
          animate={{
            opacity: 1,
            height: 'auto',
            transitionEnd: {
              overflow: 'visible',
            },
          }}
          exit={{
            opacity: 0,
            height: 0,
            overflow: 'hidden',
          }}
          style={{ borderRadius: globalBorderRadius.small }}
          transition={{ duration: 0.3 }}
          className="sub-header__contacts"
        >
          <CurrentOfficeCard {...locationInfo} ref={contentRef}>
            <p className="current-office-card-title">
              {isLocationTabs
                ? `${locationInfo?.addressLocality}, ${locationInfo?.addressRegion}`
                : title}
            </p>
          </CurrentOfficeCard>
        </motion.div>
        {locations?.length > 0 && (
          <OfficesLinkTabs
            officesForTabs={locations}
            isActiveTab={isActiveTab}
            isLocationTabs={isLocationTabs}
            onClick={onClick}
          />
        )}
      </SubHeaderLocationsHolder>
    </SubHeaderInteractive>
  );
};

export default SubHeaderLocations;
