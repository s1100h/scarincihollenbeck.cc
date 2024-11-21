import Tooltip from 'components/atoms/Tooltip';
import empty from 'is-empty';
import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';
import {
  AnchorsTopBarItem,
  AnchorsTopBarItems,
  AnchorsTopBarWrapper,
} from 'styles/practices/AnchorTopBar.style';

const AnchorsTopBar = ({ title, anchorData }) => {
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
