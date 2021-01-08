import React, { useState } from "react";
import Navbar from "./Navbar";
import Items from "./Items";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setItems } from "../actions";
import styled from "styled-components";
import AddItem from "./AddItem";

const StyledDiv = styled.div`
  color: black;
  background-color: #b22222;
  font-size: 2rem;

  h4 {
    text-shadow: 2px 2px black;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0;
    font-size: 32px;
  }
  h6 {
    color: white;
    text-shadow: 1px 1px black;
    padding-left: 2rem;
    max-width: 1150px;
    margin: 20px auto;
  }
  .welcome h2 {
    color: white;
    margin-left: 2rem;
  }

  .addItem {
    width: 40%;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .addItem .input {
    color: white;
    font-size: 1rem;
    margin: 1rem auto;
  }

  .welcome {
    color: white;
  }

  .category {
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    max-width: 1150px;
    margin: 0 auto;
  }

  .eachCategory {
    border: 1px solid white;
    font-size: 1rem;
    width: 20%;
    text-align: center;
    background: rgba(0,0,0,.5);

    :hover {
      background: transparent;
    }
  }

  .bigItemDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 1150px;
    margin: 0 auto;
  }
  .items_container {
    margin-top: 5%;
  }

  .smallItemDiv {
    width: 20%;
    min-width: 200px;
    font-size: 1rem;
    border: 1px solid white;
    background-color: rgba(0,0,0,.5);
    text-align: center;
    margin: 10px;
    color: white;
    padding: 5px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  .smallItemDiv .btn {
    opacity: 2;
    color: white;
    background-color: rgba(0,0,0,.8);
    padding: 0.5rem;
    font-size: 1rem;
    width: auto;
    border: 1px solid rgba(0,0,0,.8);
    font-weight: normal;

    :hover {
      border: 1px solid white;
    }
  }
  .addItemBtn {
    max-width: 1150px;
    margin: 0 auto;
    text-align: center;
    padding: 5px;
    margin-top: 40px;
  }
  .addItemBtn button {
    color: white;
    background-color: rgba(0,0,0,.8);
    padding: .5rem;
    font-size: 1.2rem;
    border: 1px solid rgba(0,0,0,.8);
    font-weight: normal;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;

    :hover {
      border: 1px solid white;
    }
  }

  .addItem {
    max-width: 1150px;
    margin: 0 auto;
    text-align: center;
  }
  .addItem h6 {
    text-align: center;
    margin-top: 40px;
  }
`;

const initialFormValues = {
  item_name: "",
  item_description: "",
  item_price: 0,
  location_id: 0,
  category_id: 0
};

function Dashboard(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [addItem, setAddItem] = useState(false);

  return (
    <StyledDiv>
      <Navbar />
      <div className="welcome">
        <h4>Welcome back!</h4>
      </div>
      <Categories />
      <Items />
      {!addItem && (
        <div className='addItemBtn'>
          <button onClick={()=> {setAddItem(true)}}>Add A New Item</button>
        </div>
      )}

      {addItem && (<AddItem formValues={formValues} setFormValues={setFormValues} setAddItem={setAddItem}/>)}

      <div className="addItem">
        
      </div>
    </StyledDiv>
  );
}

export default connect(null, { setItems })(Dashboard);
