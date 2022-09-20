import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { SITE_NAVIGATION } from 'utils/constants';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { Visible } from 'styles/MobileMenu.style';
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
    <Visible ref={node}>
      {dropDown ? (
        <button
          className={styles.btn}
          onClick={() => setDropDown(!dropDown)}
          aria-label="mobile menu"
        >
          <IoCloseSharp className={styles.icon} />
        </button>
      ) : (
        <button
          className={styles.btn}
          onClick={() => setDropDown(!dropDown)}
          aria-label="mobile menu"
        >
          <IoMenuSharp className={styles.icon} />
        </button>
      )}
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
              <li>
                <Link href="/">
                  <a className="text-dark">Home</a>
                </Link>
              </li>
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
    </Visible>
  );
};

export default MobileMenu;
