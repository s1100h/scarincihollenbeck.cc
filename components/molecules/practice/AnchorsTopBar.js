import Tooltip from 'components/atoms/Tooltip';
import empty from 'is-empty';
import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AnchorsTopBarItem,
  AnchorsTopBarItems,
  AnchorsTopBarWrapper,
} from 'styles/practices/AnchorTopBar.style';
import { setScrollDirection } from '../../../redux/slices/sizes.slice';

const AnchorsTopBar = ({ title, anchorData }) => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = throttle(() => {
    const scrollPosition = window.scrollY;

    const newActiveSection = Object.values(anchorData).find((item) => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 250;
        const sectionBottom = sectionTop + sectionElement.clientHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      }
      return false;
    });

    setActiveSection(newActiveSection?.id);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorData]);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const scrollY = window.scrollY;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const direction = scrollY > targetPosition ? 'up' : 'down';
    dispatch(setScrollDirection(direction));

    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <AnchorsTopBarWrapper>
      <Tooltip textTooltip={title}>
        <p className="anchors-title">{title}</p>
      </Tooltip>
      <nav>
        <AnchorsTopBarItems>
          {!empty(anchorData)
            && Object.values(anchorData)?.map((item) => (
              <li key={item.id}>
                <AnchorsTopBarItem
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleAnchorClick(e, item.id)}
                >
                  {item.title}
                </AnchorsTopBarItem>
              </li>
            ))}
        </AnchorsTopBarItems>
      </nav>
    </AnchorsTopBarWrapper>
  );
};

export default AnchorsTopBar;
