import empty from 'is-empty';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnchorsTopBarItem,
  AnchorsTopBarItems,
  AnchorsTopBarWrapper,
} from 'styles/practices/AnchorTopBar.style';

const AnchorsTopBar = ({ title, anchorData }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const newActiveSection = Object.values(anchorData).find((item) => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 300;
        const sectionBottom = sectionTop + sectionElement.clientHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      }
      return false;
    });

    setActiveSection(newActiveSection?.id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorData]);

  return (
    <AnchorsTopBarWrapper>
      <h5>{title}</h5>
      <AnchorsTopBarItems>
        {!empty(anchorData)
          && Object.values(anchorData)?.map((item) => (
            <AnchorsTopBarItem
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.title}
            </AnchorsTopBarItem>
          ))}
      </AnchorsTopBarItems>
    </AnchorsTopBarWrapper>
  );
};

export default AnchorsTopBar;
