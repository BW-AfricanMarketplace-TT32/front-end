import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import Navbar from "./Navbar";
import Items from "./Items";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setItems } from "../actions";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: black;
  background-color: #8f1313;
  font-size: 2rem;

  h6 {
    color: white;
    text-shadow: 1px 1px black;
    margin-left: 2rem;
  }
  .welcome h2 {
    color: white;
    margin-left: 2rem;
  }
  ul {
    margin: 4px 0 14px 0;
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
  }

  .eachCategory {
    border: 1px solid white;
    font-size: 1rem;
    width: 20%;
    text-align: center;
  }

  .bigItemDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .smallItemDiv {
    width: 20%;
    min-width: 200px;
    font-size: 1rem;
    border: 1px solid red;
    background-color: white;
    opacity: 0.7;
    text-align: center;
    margin: 10px;
  }

  .smallItemDiv .btn {
    opacity: 2;
    color: white;
    background-color: black;
    padding: 0.5rem;
    font-size: 1rem;
    width: auto;
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

  const onChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("items", formValues)
      .then(res => {
        props.setItems(props.items.push(res.data));
        setFormValues({
          item_name: "",
          item_description: "",
          item_price: 0,
          location_id: 0,
          category_id: 0
        });
        window.location.reload();
      })
      .catch(err => {
        console.log("ADD ITEM ERROR:", err);
      });
  };

  return (
    <StyledDiv>
      <Navbar />
      <div className="welcome">
        <h4>Welcome back!</h4>
      </div>
      <Categories />
      <Items />

      <div className="addItem">
        <h6>Add An Item:</h6>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label>
              Item Name:
              <br />
              <input
                type="text"
                name="item_name"
                onChange={onChange}
                value={formValues.item_name}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Description: <br />
              <input
                type="text"
                name="item_description"
                onChange={onChange}
                value={formValues.item_description}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Price: <br />
              <input
                type="text"
                name="item_price"
                onChange={onChange}
                value={formValues.item_price}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Location: <br />
              <select
                name="location_id"
                value={formValues.location_id}
                onChange={onChange}
              >
                <option value="">- Select an option -</option>
                <option value={1}>1 - Mombasa</option>
                <option value={2}>2 - Nairobi</option>
                <option value={3}>3 - Kisii</option>
                <option value={4}>4 - Embu</option>
              </select>
            </label>
          </div>
          <div className="input">
            <label>
              Category: <br />
              <select
                name="category_id"
                value={formValues.category_id}
                onChange={onChange}
              >
                <option value="">- Select an option -</option>
                <option value={1}>1 - Animal Products</option>
                <option value={2}>2 - Dry Goods</option>
                <option value={3}>3 - Fruits and Vegetables</option>
                <option value={4}>4 - Other</option>
              </select>
            </label>
          </div>
          <button type="submit">Add Item</button>
        </form>
      </div>
    </StyledDiv>
  );
}

// const mapStateToProps = state => ({
//   items: state.items
// });

export default connect(null, { setItems })(Dashboard);
