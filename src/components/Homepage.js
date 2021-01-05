import React from "react";
import Navbar from "./Navbar";
import marketImg from "../images/pic01.jpeg";
import styled from "styled-components";

const StyledDiv = styled.div`
  .bodyDiv {
    display: flex;
    background-color: red;
  }
  .paraDiv {
    text-align: center;
    width: 45%;
    color: white;
  }
  .paraDiv .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .paraDiv .about {
    width: 50%;
    border: 1px solid white;
  }
  .paraDiv .services {
    width: 50%;
    margin-top: 1rem;
    border: 1px solid white;
  }

  .imgDiv {
    width: 45%;
  }
`;

export default function Homepage() {
  return (
    <StyledDiv>
      <Navbar />
      <div className="bodyDiv">
        <div className="paraDiv">
          <h1> African Marketplace</h1>
          <div className="sections">
            <div className="about">
              <h2>About Us</h2>
              <p>
                African marketplace provides trade and market information
                services that empower cross-border traders to trade legally,
                profitably, and safely.
              </p>
            </div>
            <div className="services">
              <h2>Services</h2>
              <p>Services go here</p>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img src={marketImg} alt="marketplace" />
        </div>
      </div>
    </StyledDiv>
  );
}
