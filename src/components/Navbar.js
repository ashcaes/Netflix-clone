import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate()

  const transitionOnScroll = () => {
    window.scrollY > 100? setShow(false) : setShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionOnScroll);
    return () => window.removeEventListener("scroll", transitionOnScroll);
  }, []);

  return (
    <Nav show={show}>
      <NavContents>
        <Logo onClick={()=>navigate('/')}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          width={120}
        />
        <Avatar onClick={()=>navigate('/profile')}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="avatar"
          width={42}
          height={42}
        />
      </NavContents>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  background-color: ${(props) => (props.show ? 'transparent' : "#000000")};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 36px;
  z-index: 1;
  transition: all 250ms ease-in;
`;

const NavContents = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Logo = styled.img`
  position: fixed;
  left: 0;
  top: 0px;
  object-fit: contain;
  padding-left: 20px;
`;

const Avatar = styled.img`
  position: fixed;
  right: 20px;
  top: 12px;
  cursor: pointer;
`;
