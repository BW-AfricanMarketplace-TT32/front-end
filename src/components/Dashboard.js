import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setItems, setCategories } from "../actions";
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

  .addItem {
    width: 40%;
    margin-bottom: 5rem;
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
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .smallItemDiv {
    width: 20%;
    height: 30%;
    font-size: 1rem;
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
        setItems(props.items.push(res.data));
        setFormValues({
          item_name: "",
          item_description: "",
          item_price: 0,
          location_id: 0,
          category_id: 0
        });
      })
      .catch(err => {
        console.log("ADD ITEM ERROR:", err);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("items/categories/list")
      .then(res => {
        props.setCategories(res.data);
      })
      .catch(err => {
        console.log(err, "GET REQUEST ERROR");
      });

    axiosWithAuth()
      .get("items")
      .then(res => {
        props.setItems(res.data);
      })
      .catch(err => {
        console.log("DASHBOARD ERROR:", err);
      });
  }, []);

  function deleteItem(id) {
    axiosWithAuth()
      .delete(`items/${id}`)
      .then(res => {
        setItems(
          props.items.filter(item => {
            return item.item_id !== id;
          })
        );
        window.location.reload();
      })

      .catch(err => {
        console.log("DELETE ITEM ERROR:", err);
      });
  }
  return (
    <StyledDiv>
      <Navbar />
      <div className="welcome">
        <h4>Welcome back!</h4>
      </div>

      <h6>Categories available:</h6>
      <div className="category">
        {props.categories.map(category => {
          return (
            <div className="eachCategory" key={category.category_id}>
              <p>Category {category.category_id}</p>
              <p>{category.category_name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h6>Your Items:</h6>
        <div className="bigItemDiv">
          {props.items.map(item => {
            return (
              <div key={item.item_id} className="smallItemDiv">
                <p>{item.item_name}</p>
                <p>{item.item_description}</p>
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
                Location id: <br />
                <input
                  type="text"
                  name="location_id"
                  onChange={onChange}
                  value={formValues.location_id}
                />
              </label>
            </div>
            <div className="input">
              <label>
                Category #: <br />
                <input
                  type="text"
                  name="category_id"
                  onChange={onChange}
                  value={formValues.category_id}
                />
              </label>
            </div>
            <button type="submit">Add Item</button>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  items: state.items
});

export default connect(mapStateToProps, { setItems, setCategories })(Dashboard);
