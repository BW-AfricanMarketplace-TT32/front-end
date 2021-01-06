import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setItems } from "../actions";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: black;
  font-size: 2rem;

  .bigItemDiv {
    border: 1px solid black;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .smallItemDiv {
    width: 40%;
    height: 40%;
    border: 1px solid red;
    background-color: white;
    opacity: 0.7;
    text-align: center;
  }

  .smallItemDiv .btn {
    opacity: 2;
    color: white;
    background-color: black;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

// function deleteItem(){
//add this to an onClick for buttons
// }

function Dashboard(props) {
  useEffect(() => {
    axiosWithAuth()
      .get("items")
      .then(res => {
        props.setItems(res.data);
        console.log(res.data, "RESULTS  HERE!!!");
      })
      .catch(err => {
        console.log(err, "NOPE TRY AGAIN");
      });
  }, []);

  return (
    <StyledDiv>
      <Navbar />
      <div className="bigItemDiv">
        {props.items.map(item => {
          return (
            <div key={item.item_id} className="smallItemDiv">
              <p>{item.item_name}</p>
              <p>${item.item_price}</p>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, { setItems })(Dashboard);
