import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setItems, setCategories } from "../actions";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: black;
  font-size: 2rem;

  h4 {
    color: white;
    margin-left: 2rem;
  }
  .welcome h2 {
    color: white;
    margin-left: 2rem;
  }

  .welcome {
    color: white;
  }

  .category {
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .eachCategory {
    border: 1px solid white;
    width: 20%;
    text-align: center;
  }

  .bigItemDiv {
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .smallItemDiv {
    width: 20%;
    height: 30%;
    font-size: 1.25rem;
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

function Dashboard(props) {
  useEffect(() => {
    axiosWithAuth()
      .get("items/categories/list")
      .then(res => {
        props.setCategories(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err, "GET REQUEST ERROR");
      });

    axiosWithAuth()
      .get("items")
      .then(res => {
        props.setItems(res.data);
        console.log(res.data, "RESULTS  HERE!!!");
      })
      .catch(err => {
        console.log("DASHBOARD ERROR:", err);
      });
  }, []);

  //this item gets added to onclick for add item form
  // function addItem() {
  //   axiosWithAuth()
  //     .post("items", newItemFormValsVariable)
  //     .then(res => {
  //       console.log(res);
  //       setFormVals({
  //         name: "",
  //         description: "",
  //         price: ""
  //       });
  //     })
  //     .catch(err => {
  //       console.log("ADD ITEM ERROR:", err);
  //     });
  // }

  function deleteItem(id) {
    axiosWithAuth()
      .delete(`items/${id}`, id)
      .then(res => {
        setItems(
          props.items.filter(item => {
            return item.item_id !== id;
          })
        );
      })
      .catch(err => {
        console.log("DELETE ITEM ERROR:", err);
      });
  }
  return (
    <StyledDiv>
      <Navbar />
      <div className="welcome">
        <h2>Welcome back!</h2>
        <p> Add item form goes here **** </p>{" "}
      </div>
      <h4>Categories available:</h4>
      <div className="category">
        {props.categories.map(category => {
          return (
            <div className="eachCategory" key={category.category_id}>
              <p>{category.category_name}</p>
            </div>
          );
        })}
      </div>
      <h4>Your Items:</h4>
      <div className="bigItemDiv">
        {props.items.map(item => {
          return (
            <div key={item.item_id} className="smallItemDiv">
              <p>{item.item_name}</p>
              <p>Category: {item.category_name}</p>
              <p>${item.item_price}</p>
              <button className="btn">Edit</button>
              <button
                className="btn"
                onClick={e => {
                  deleteItem(item.item_id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  items: state.items
});

export default connect(mapStateToProps, { setItems, setCategories })(Dashboard);
