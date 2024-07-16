import LogoSeparator from 'components/common/LogoSeparator';
import AttorneyCard from 'components/shared/AttorneyCard';
import React, { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ContainerDefault } from 'styles/Containers.style';
import {
  RandomBioCard,
  RandomBioControlButton,
  RandomBioControlPanel,
  RandomBioControlProgress,
  RandomBioDescription,
  RandomBioDescriptionText,
  RandomBioFooter,
  RandomBioHolder,
  RandomBioSubtitle,
  RandomBioTitle,
  RandomBioWrapper,
} from 'styles/RandomBio.style';
import empty from 'is-empty';
import Loader from 'components/atoms/Loader';
import Link from 'next/link';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import { FaArrowRotateLeft, FaArrowRotateRight } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import CircledProgressBar from './CircledProgressBar';

const usedIndices = new Set();
const indexSequence = [];
let currentIndex = -1;

const getRandomIndex = (min, max) => {
  if (usedIndices.size >= max - min) {
    usedIndices.clear();
    indexSequence.length = 0;
    currentIndex = -1;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * (max - min) + min);
  } while (usedIndices.has(randomIndex));

  usedIndices.add(randomIndex);
  indexSequence.push(randomIndex);
  currentIndex = indexSequence.length - 1;
  return randomIndex;
};

const RandomBioSection = ({ attorneys }) => {
  const [randomIndex, setRandomIndex] = useState(0);
  const interval = 15;
  const [timeLeft, setTimeLeft] = useState(interval);
  const [isTimerStopped, setIsTimerStopped] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const timerRef = useRef(null);
  const displayedCard = attorneys[randomIndex];
  const [initialized, setInitialized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!empty(attorneys) && !initialized) {
      setRandomIndex(getRandomIndex(0, attorneys.length));
      setInitialized(true);
    }

    if (!isVisible) {
      setIsTimerStopped(true);
    } else {
      setIsTimerStopped(false);
    }
  }, [attorneys, initialized, isVisible]);

  const nextSlide = () => {
    if (currentIndex === indexSequence.length - 1) {
      setRandomIndex(getRandomIndex(0, attorneys.length));
    } else {
      currentIndex += 1;
      setRandomIndex(indexSequence[currentIndex]);
    }
    setIsPrevDisabled(currentIndex <= 0);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          nextSlide();
          return interval;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const restartTimer = () => {
    setTimeLeft(interval);
    startTimer();
  };

  useEffect(() => {
    if (!empty(attorneys) && !isTimerStopped) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerStopped, attorneys.length]);

  const handleCircleClick = () => {
    setIsTimerStopped(!isTimerStopped);
  };

  const handleNextClick = () => {
    nextSlide();

    if (!empty(attorneys) && !isTimerStopped) {
      restartTimer();
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      setRandomIndex(indexSequence[currentIndex]);
    }
    setIsPrevDisabled(currentIndex <= 0);

    if (!empty(attorneys) && !isTimerStopped) {
      restartTimer();
    }
  };

  return (
    <RandomBioWrapper ref={containerRef}>
      <ContainerDefault>
        <RandomBioHolder>
          <RandomBioTitle>We can help!</RandomBioTitle>

          <RandomBioSubtitle>
            OUR APPROACH IS AS UNIQUE AS YOUR SITUATION
          </RandomBioSubtitle>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={randomIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <RandomBioCard>
                {empty(displayedCard) ? (
                  <Loader />
                ) : (
                  <>
                    <AttorneyCard
                      link={displayedCard?.uri || displayedCard?.link || '#'}
                      name={displayedCard?.display_name || displayedCard?.title}
                      designation={displayedCard?.designation}
                      image={
                        displayedCard?.profileImage
                        || displayedCard?.better_featured_image
                      }
                      officeLocations={displayedCard?.location_array}
                      number={displayedCard?.phone}
                      email={displayedCard?.email}
                      width={300}
                      height={300}
                      svgPhone={<FaPhoneAlt />}
                      svgEmail={<MdEmail />}
                    />
                    <LogoSeparator />

                    <RandomBioDescription>
                      <RandomBioDescriptionText
                        as={!empty(displayedCard?.biography) && 'div'}
                      >
                        {displayedCard?.miniBio
                          || (!empty(displayedCard?.biography) && (
                            <JSXWithDynamicLinks
                              HTML={displayedCard?.biography}
                            />
                          ))}
                      </RandomBioDescriptionText>

                      <Link
                        className="link-to-bio"
                        href={displayedCard?.uri || displayedCard?.link || '#'}
                      >
                        link to
                        {' '}
                        {displayedCard?.display_name || displayedCard?.title}
                        {' '}
                        bio
                      </Link>
                    </RandomBioDescription>
                  </>
                )}
              </RandomBioCard>
            </motion.div>
          </AnimatePresence>

          <RandomBioFooter>
            <RandomBioControlPanel>
              <RandomBioControlProgress>
                <CircledProgressBar
                  isTimerStopped={isTimerStopped}
                  timeLeft={timeLeft}
                  interval={interval}
                  clickHandler={handleCircleClick}
                />

                <span className="label">next Attorney</span>
              </RandomBioControlProgress>

              <RandomBioControlButton
                disabled={isPrevDisabled}
                onClick={handlePrevClick}
              >
                <span className="icon">
                  <FaArrowRotateLeft />
                </span>
                PREV
              </RandomBioControlButton>
              <RandomBioControlButton onClick={handleNextClick}>
                NEXT
                <span className="icon">
                  <FaArrowRotateRight />
                </span>
              </RandomBioControlButton>
            </RandomBioControlPanel>
          </RandomBioFooter>
        </RandomBioHolder>
      </ContainerDefault>
    </RandomBioWrapper>
  );
};

export default RandomBioSection;
