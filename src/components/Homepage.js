import React from "react";
import Navbar from "./Navbar";
import marketImg from "../images/pic01.jpeg";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>African Marketplace</h1>
        <p>
          African marketplace provides trade and market information services
          that empower cross-border traders to trade legally, profitably, and
          safely.
        </p>
      </div>
      <div>
        <img src={marketImg} alt="marketplace" />
      </div>
    </div>
  );
}
