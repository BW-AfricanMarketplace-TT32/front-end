import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import axios from "axios";

import * as yup from "yup";
import loginschema from "./validation/loginschema";
import Register from "./components/Register";
import { axiosWithAuth } from "./auth/axiosWithAuth";

const initialLoginValues = {
  email: "",
  password: ""
};
const initialLoginErrors = {
  email: "",
  password: ""
};

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [loginDisabled, setLoginDisabled] = useState(true);

  useEffect(() => {
    loginschema.isValid(loginValues).then(valid => setLoginDisabled(!valid));
  }, [loginValues]);

  const submit = e => {
    e.preventDefault();
    //verify user info
    axiosWithAuth()
      .post("/login")
      .then(res => {
        console.log(res, "RESULTS OF SUBMIT");
      })
      .catch(err => {
        console.log(err, "ERROR SOMETHING IS WRONG");
      });
  };

  const loginChange = e => {
    const { name, value } = e.target;

    yup
      .reach(loginschema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({
          ...loginErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0]
        });
      });

    setLoginValues({
      ...loginValues,
      [name]: value
    });
  };

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login
            values={loginValues}
            submit={submit}
            change={loginChange}
            errors={loginErrors}
            disabled={loginDisabled}
          />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
