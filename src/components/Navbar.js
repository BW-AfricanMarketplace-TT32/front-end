import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  background-color: black;

  .ul {
    width: 95%;
    color: red;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  .ul a {
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
  }
`;

export default function Navbar() {
  return (
    <StyledDiv>
      <ul className="ul">
        <li>
          <a href="/">Home </a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </StyledDiv>
  );
}
