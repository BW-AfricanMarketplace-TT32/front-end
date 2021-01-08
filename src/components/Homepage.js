import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import George from "../assets/images/George.png";
import Victoria from "../assets/images/Victoria.jpeg";
import Leah from "../assets/images/Leah.jpeg";
import Christina from "../assets/images/Christina.jpeg";
import '../assets/stylesheets/market.css'

const StyledDiv = styled.div`
  .bodyDiv {
    background-color: #b22222;
    color: white;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .paraDiv {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 50px;
  }
  h1 {
    letter-spacing: 0.65rem;
    text-shadow: 2px 2px black;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1.5% 0 1.5% 0;
    font-size: 36px;
    margin: 0;
  }
  .paraDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
  }
  .paraDiv .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    min-width: 400px;
    max-width: 100%;
  }
  .sections {
    display: flex;
    flex-direction: column;
  }
  .sections div {
    border: 1px solid white;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    margin: 10px;
    padding: 10% 10px;
  }
  .team {
    border: 1px solid white;
    width: 40%;
    min-width: 400px;
    background: rgba(0, 0, 0, .5);
    margin: 10px;
  }
  .team img {
    width: 35%;
    border-radius: 100%;
    padding: 5px;
  }

  .hero-container {
    padding: 300px;
    background-repeat: no-repeat;
  }
`;

export default function Homepage() {
  return (
    <StyledDiv>
      <Navbar />
      <div className="bodyDiv">
        <div className='hero-container'>
          {/* <img src={hero} alt='African woman' /> */}
        </div>
        <h1>African Marketplace</h1>
        <div className="paraDiv">
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
    </StyledDiv>
  );
}
