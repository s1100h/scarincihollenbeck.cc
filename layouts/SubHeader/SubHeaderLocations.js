import CurrentOfficeCard from 'components/molecules/location/CurrentOfficeCard';
import OfficesLinkTabs from 'components/molecules/location/OfficesLinkTabs';
import React, { useMemo, useState } from 'react';
import empty from 'is-empty';
import {
  SubHeaderInteractive,
  SubHeaderLocationsHolder,
} from 'styles/practices/SubHeader.style';
import { motion, AnimatePresence } from 'framer-motion';
import { globalBorderRadius } from 'styles/global_styles/Global.styles';

const SubHeaderLocations = ({
  locations,
  title,
  officeInfo,
  isLocationTabs,
}) => {
  if (empty(locations)) return null;
  const [isActiveTab, setIsActiveTab] = useState(0);

  const locationInfo = useMemo(() => {
    if (!isLocationTabs) return officeInfo;
    const currentLocation = locations[isActiveTab];
    return currentLocation;
  }, [isLocationTabs, officeInfo, locations, isActiveTab]);

  return (
    <SubHeaderInteractive>
      <SubHeaderLocationsHolder>
        <AnimatePresence>
          <motion.div
            key={locationInfo.databaseId}
            initial={{
              opacity: 0,
              height: 0,
              overflow: 'hidden',
              position: 'absolute',
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              transitionEnd: {
                overflow: 'visible',
              },
              position: 'static',
            }}
            exit={{
              opacity: 0,
              height: 0,
              overflow: 'hidden',
              position: 'absolute',
            }}
            style={{ borderRadius: globalBorderRadius.small }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <CurrentOfficeCard {...locationInfo}>
              <p className="current-office-card-title">
                {isLocationTabs
                  ? `${locationInfo?.addressLocality}, ${locationInfo?.addressRegion}`
                  : title}
              </p>
            </CurrentOfficeCard>
          </motion.div>
        </AnimatePresence>
        {locations?.length > 0 && (
          <OfficesLinkTabs
            officesForTabs={locations}
            isActiveTab={isActiveTab}
            setIsActiveTab={setIsActiveTab}
            isLocationTabs={isLocationTabs}
          />
        )}
      </SubHeaderLocationsHolder>
    </SubHeaderInteractive>
  );
};

export default SubHeaderLocations;
