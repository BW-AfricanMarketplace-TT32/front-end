import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Market from "./components/Market.js";
import Dashboard from "./components/Dashboard";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import loginschema from "./validation/loginschema";
import Register from "./components/Register";
import axios from "axios";
import registerschema from "./validation/registerschema";
import { connect } from "react-redux";
import { setLoggedStatus } from "./actions";
import data from "./data/data.js";

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
  admin_status: null
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

  // for Market and Cart components
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  /////// Add to cart function //////
  const onAdd = product => {
    // checks if the product exists
    const exist = cartItems.find(newItem => newItem.id === product.id);

    // If item exists in cart, increment quantity accordingly using setCartItems
    // while using spread operator to keep previous items in state
    if (exist) {
      setCartItems(
        cartItems.map(newItem =>
          newItem.id === product.id ? { ...exist, qty: exist.qty + 1 } : newItem
        )
      );
    } else {
      // Else if item is not in cart, we concatenate using computed values
      // and set quantity of new item to 1
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onDelete = product => {
    const exist = cartItems.find(newItem => newItem.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(newItem => newItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(newItem =>
          newItem.id === product.id ? { ...exist, qty: exist.qty - 1 } : newItem
        )
      );
    }
  };

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
        window.location.reload();
      })
      .catch(err => {
        console.log("ERROR ON LOGIN", err);
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
        console.log("NOPE ERROR IN REGISTRATION", err);
      });
  };

  return (
    <>
      <Switch>
        <Route path="/market">
          <Market
            onDelete={onDelete}
            onAdd={onAdd}
            products={products}
            cartItems={cartItems}
            countCartItems={cartItems.length}
          />
        </Route>

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
