import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setLoggedStatus } from "../actions";

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
    cursor: pointer;
  }
`;

function Navbar(props) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setLoggedStatus(false);
    history.push("/");
  };

  return (
    <div>
      {props.isLoggedIn ? (
        <StyledDiv>
          <ul className="ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/dashboard">My Shop</a>
            </li>
            <li>
              <a href="/market">Market</a>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>
                Log Out
              </a>
            </li>
          </ul>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <ul className="ul">
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="/dashboard">My Shop</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/market">Market</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
          </ul>
        </StyledDiv>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, { setLoggedStatus })(Navbar);
