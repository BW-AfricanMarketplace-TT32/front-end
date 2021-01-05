import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import loginschema from "./validation/loginschema";
import Register from "./components/Register";
import axios from "axios";
// import { axiosWithAuth } from "./auth/axiosWithAuth";

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
  const history = useHistory();

  useEffect(() => {
    loginschema.isValid(loginValues).then(valid => setLoginDisabled(!valid));
  }, [loginValues]);

  const loginChange = e => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    console.log(loginValues, "CURRENT LOGIN");

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
    console.log(loginValues, "vals");
  };

  const submit = e => {
    e.preventDefault();
    //verify user info
    axios
      .post(
        "https://bw-african-marketplace-tt32.herokuapp.com/auth/login",
        loginValues
      )
      .then(res => {
        // console.log(res, "SUBMITTED RES");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id");
      })
      .then(res => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err, "ERROR SOMETHING IS WRONG");
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
