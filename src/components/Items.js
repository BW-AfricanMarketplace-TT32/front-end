import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { connect } from "react-redux";
import { setItems } from "../actions";

function Items(props) {
  useEffect(() => {
    axiosWithAuth()
      .get("items")
      .then(res => {
        props.setItems(res.data);
      })
      .catch(err => {
        console.log("DASHBOARD ERROR:", err);
      });
  }, [props]);

  function deleteItem(id) {
    axiosWithAuth()
      .delete(`items/${id}`)
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
    <div className='items_container'>
      <h6>Your Items:</h6>
      <div className="bigItemDiv">
        {props.items.map(item => {
          return (
            <div key={item.item_id} className="smallItemDiv">
              <p className='title'>{item.item_name}</p>
              <p>{item.item_description}</p>
              <p>Category: {item.category_name}</p>
              <p>{item.item_price} ZAR</p>
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
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, { setItems })(Items);
