import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export default function Dashboard() {
  useEffect(() => {
    axiosWithAuth()
      .get("items")
      .then(res => {
        console.log(res, "RESULTS  HERE!!!");
      })
      .catch(err => {
        console.log(err, "NOPE TRY AGAIN");
      });
  }, []);

  return (
    <div>
      <h2> hello</h2>
      {/* {user === 1 ? (
        <div>
          <p>{item.name}</p>
        </div>
      ) : (
        <p>...Loading</p>
      )} */}
    </div>
  );
}
