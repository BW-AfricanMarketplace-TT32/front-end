import React, { useEffect } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { setCategories } from "../actions";

function Categories(props) {
  useEffect(() => {
    axiosWithAuth()
      .get("items/categories/list")
      .then(res => {
        props.setCategories(res.data);
      })
      .catch(err => {
        console.log("GET REQUEST ERROR", err);
      });
  }, []);

  return (
    <div>
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
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps, { setCategories })(Categories);
