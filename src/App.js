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
import registerschema from "./validation/registerschema";
import { connect } from "react-redux";
import { setLoggedStatus } from "./actions";

//login form initial
const initialLoginValues = {
  email: "",
  password: ""
};
const initialLoginErrors = {
  email: "",
  password: ""
};

//register form initial
const initialRegisterValues = {
  email: "",
  password: "",
  admin_status: 0
};
const initialRegisterErrors = {
  email: "",
  password: "",
  main: ""
};

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const history = useHistory();
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
  const [registerDisabled, setRegisterDisabled] = useState(true);

  //log-in form functions
  useEffect(() => {
    loginschema.isValid(loginValues).then(valid => setLoginDisabled(!valid));
  }, [loginValues]);

  const loginChange = e => {
    const name = e.target.name;
    const value = e.target.value;

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
    axios
      .post(
        "https://bw-african-marketplace-tt32.herokuapp.com/auth/login",
        loginValues
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setLoggedStatus(true);
      })
      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err, "ERROR SOMETHING IS WRONG");
      });
  };

  //register form functions
  useEffect(() => {
    registerschema
      .isValid(registerValues)
      .then(valid => setRegisterDisabled(!valid));
  }, [registerValues]);

  const registerChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e.target.value, "CHANGE VALUES");
    yup
      .reach(registerschema, name)
      .validate(value)
      .then(() => {
        setRegisterErrors({
          ...registerErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setRegisterErrors({
          ...registerErrors,
          [name]: err.errors[0]
        });
      });

    setRegisterValues({
      ...registerValues,
      [name]: value
    });
  };

  const registerSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://bw-african-marketplace-tt32.herokuapp.com/auth/register",
        registerValues
      )
      .then(() => {
        setRegisterValues({
          email: "",
          password: "",
          admin_status: 0
        });
        history.push("/login");
      })
      .catch(err => {
        console.log(err, "NOPE ERROR IN REGISTRATION");
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
        <Route path="/register">
          <Register
            values={registerValues}
            submit={registerSubmit}
            change={registerChange}
            errors={registerErrors}
            disabled={registerDisabled}
          />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, { setLoggedStatus })(App);
