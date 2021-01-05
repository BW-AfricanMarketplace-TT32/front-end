import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

import marketImg from "../assets/images/pic01.jpeg";
import George from "../assets/images/George.png";
import Victoria from "../assets/images/Victoria.jpeg";
import Leah from "../assets/images/Leah.jpeg";
import Christina from "../assets/images/Christina.jpeg";

const StyledDiv = styled.div`
  .bodyDiv {
    display: flex;
    background-color: #b22222;
    height: 100vh;
  }
  .paraDiv {
    text-align: center;
    width: 45%;
    color: white;
  }
  .paraDiv h1 {
    letter-spacing: 0.65rem;
    text-shadow: 2px 2px black;
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

  .paraDiv .team {
    width: 90%;
    margin-top: 1rem;
    border: 1px solid white;
  }

  .team img {
    width: 20%;
    border-radius: 100%;
  }

  .imgDiv {
    width: 45%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  .imgDiv img {
    width: 100%;
    height: auto;
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
              <p>Centralized online market for both vendors and customers.</p>
            </div>
            <div className="team">
              <h2>Our Team</h2>
              <img src={Victoria} alt="avatar" />
              <img src={Christina} alt="avatar" />
              <img src={Leah} alt="avatar" />
              <img src={George} alt="avatar" />
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
