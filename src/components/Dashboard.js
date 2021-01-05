import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setItems } from "../actions";

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
    <div>
      <Navbar />
      <div>
        {/* {props.state.items.map(item => {
          return (
            <div>
              <p>{item.item_name}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

const mapStateToProps = state => console.log(state, "MAP STATE:");

export default connect(mapStateToProps, { setItems })(Dashboard);
