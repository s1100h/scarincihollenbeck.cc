import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SITE_NAVIGATION } from 'utils/constants';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e9e9e9;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 70vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  width: 75%;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgb(138 155 165 / 15%);
  margin-top: 1em;
  @media (min-width: 0px) and (max-width: 449px) {
    height: 84vh;
  }
  li {
    font-size: 1.2rem;
    list-style-type: none;

    ul {
      margin-left: 1em;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #db2220;
    }
  }
`;
const StyledBurger = styled.button`
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 449px) {
    position: absolute;
    top: -3.1em;
    right: 2rem;
  }

  @media (min-width: 768px) {
    top: 0em;
  }
`;

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <ul>
      {SITE_NAVIGATION.map((nav) => (
        <li key={nav.label}>
          {nav.slug ? (
            <Link href={nav.slug}>
              <a>{nav.label}</a>
            </Link>
          ) : nav.children ? (
            <>
              {nav.label}
              <ul>
                {nav.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.slug}>
                      <a>{child.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </StyledMenu>
);

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
    <span className="sr-only">Mobile Menu</span>
  </StyledBurger>
);

export default function HamburgerMobileMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}
