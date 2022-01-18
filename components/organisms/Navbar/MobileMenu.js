import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { SITE_NAVIGATION } from 'utils/constants';
import useOnClickOutside from 'hooks/useOnClickOutside';
import styles from 'styles/MobileMenu.module.css';

const transition = {
  transition: {
    opacity: {
      duration: 0.4,
    },
  },
};

const menuVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  in: {
    opacity: 1,
    x: 0,
    transition,
  },
  out: {
    opacity: 0,
    x: -200,
    transition,
  },
};

const MobileMenu = () => {
  const [dropDown, setDropDown] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setDropDown(false));

  return (
    <div ref={node}>
      <div className={styles.container}>
        {dropDown ? (
          <button
            className={styles.btn}
            onClick={() => setDropDown(!dropDown)}
            aria-label="mobile menu"
          >
            <IoCloseSharp style={{ height: '36px', width: '36px' }} />
          </button>
        ) : (
          <button
            className={styles.btn}
            onClick={() => setDropDown(!dropDown)}
            aria-label="mobile menu"
          >
            <IoMenuSharp style={{ height: '36px', width: '36px' }} />
          </button>
        )}
      </div>
      {dropDown && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={menuVariants}
          className={`${styles.menu} shadow rounded`}
        >
          <div className={styles.menuContainer}>
            <ul>
              {SITE_NAVIGATION.map((nav) => (
                <li key={nav.label}>
                  {nav.slug ? (
                    <Link href={nav.slug}>
                      <a className="text-dark">{nav.label}</a>
                    </Link>
                  ) : nav.children ? (
                    <>
                      <span className="text-muted">{nav.label}</span>
                      <ul>
                        {nav.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.slug}>
                              <a className="text-dark">{child.label}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;

// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #e9e9e9;
//   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
//   height: 70vh;
//   text-align: left;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;
//   z-index: 10;
//   width: 75%;
//   border-radius: 3px;
//   box-shadow: 0 5px 10px 0 rgb(138 155 165 / 15%);
//   margin-top: 1em;
//   @media (min-width: 0px) and (max-width: 449px) {
//     height: 84vh;
//   }
//   li {
//     font-size: 1.2rem;
//     list-style-type: none;

//     ul {
//       margin-left: 1em;
//     }
//   }

//   a {
//     color: #000;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     &:hover {
//       color: #db2220;
//     }
//   }
// `;
// const StyledBurger = styled.button`
//   margin-right: 1em;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;
//     :first-child {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? '0' : '1')};
//       transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }

//   @media (min-width: 449px) {
//     position: absolute;
//     top: -3.1em;
//     right: 2rem;
//   }

//   @media (min-width: 768px) {
//     top: 0em;
//   }
// `;

// const Menu = ({ open }) => (
//   <StyledMenu open={open}>

//   </StyledMenu>
// );

// const Burger = ({ open, setOpen }) => (
//   <StyledBurger open={open} onClick={() => setOpen(!open)}>
//     <div />
//     <div />
//     <div />
//     <span className="sr-only">Mobile Menu</span>
//   </StyledBurger>
// );

// export default function HamburgerMobileMenu() {
//   const [open, setOpen] = useState(false);
//   const node = useRef(null);
//   useOnClickOutside(node, () => setOpen(false));

//   return (
//     <div ref={node}>
//       <Burger open={open} setOpen={setOpen} />
//       <Menu open={open} setOpen={setOpen} />
//     </div>
//   );
// }
