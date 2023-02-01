import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Navbar";

const Header = () => {
  return (
    <MainHeader style={{background:'#81c9db',color:'white',height:'60px'}}>
      <NavLink to="/" >
        <img src="./images/logo-d.png" alt="my logo img" style={{width:"100px",height:"100px"}} />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;