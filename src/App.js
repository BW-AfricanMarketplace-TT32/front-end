import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Homepage from "./components/Homepage";
import * as yup from "yup";
import loginschema from "./validation/loginschema";

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
      </Switch>
    </>
  );
}

export default App;
