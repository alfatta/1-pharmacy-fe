import React, { useState, useEffect } from "react";
// import Details from "./Details";
// import Addresses from "./Addresses";
import Orders from "./Orders";
import AllOrder from "./AllOrder";
import { useSelector } from "react-redux";
// import Request from "./Request";
import { Container } from "react-bootstrap";
import classes from "../../ProductScreen/ProductScreen.module.css";
// import UserListScreen from "../Admin/UserListScreen";
import ProductListScreen from "../Admin/ProductList/ProductListScreen";
// import OrderListScreen from "../Admin/OrderList/OrderListScreen";
// import ManageRequestScreen from "../Admin/ManageRequest/ManageRequestScreen";

const UserProfile = ({ history, location }) => {
  const userLogin = useSelector((state) => state.auth);
  const { isLogin,loggedUser } = userLogin;
  const query = new URLSearchParams(location.search)

  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
  }, [history, isLogin]);

  const [selection, setSelection] = useState(query.get('menu') || "3");

  const changeSelection = (e) => {
    setSelection(e.target.getAttribute("data-selection"));
  };

  let selectionShow;
  if (selection === "1") {
    // selectionShow = <Details></Details>;
  } else if (selection === "2") {
    // selectionShow = <Addresses />;
  } else if (selection === "3") {
    selectionShow = <Orders />;
  } else if (selection === "4") {
    // selectionShow = <Request />;
  } else if (selection === "5") {
    // selectionShow = <UserListScreen />;
  } else if (selection === "6") {
    selectionShow = <ProductListScreen />;
  } else if (selection === "7") {
    // selectionShow = <OrderListScreen />;
  } else if (selection === "8") {
    // selectionShow = <ManageRequestScreen />;
  } else if (selection === "9"){
    selectionShow = <AllOrder />
  }

  return (
    <Container>
      <div className={classes["selection-container"]}>
        <ul className={classes.navSelection}>
          {/* <li
            className={classes.navItem}
            data-selection="1"
            onClick={changeSelection}
          >
            User Profile
          </li>
          {userInfo && !userInfo.isAdmin && (
            <li
              className={classes.navItem}
              data-selection="2"
              onClick={changeSelection}
            >
              User Addresses
            </li>
          )} */}
          {/* {userInfo && !userInfo.isAdmin && ( */}
            <li
              className={classes.navItem}
              data-selection="3"
              onClick={changeSelection}
            >
              User Orders
            </li>
          {/* )} */}

        {loggedUser && loggedUser.isAdmin && (
          <li
              className={classes.navItem}
              data-selection="9"
              onClick={changeSelection}
            >
              All Orders
            </li>
          )}
          
          {/* {userInfo && !userInfo.isAdmin && (
            <li
              className={classes.navItem}
              data-selection="4"
              onClick={changeSelection}
            >
              User Requests
            </li>
          )} */}
          {/* {userInfo && userInfo.isAdmin && (
            <li
              className={classes.navItem}
              data-selection="5"
              onClick={changeSelection}
            >
              Manage Users
            </li>
          )} */}
          {loggedUser && (loggedUser.isAdmin) && (
            <li
              className={classes.navItem}
              data-selection="6"
              onClick={changeSelection}
            >
              Manage Products
            </li>
          )}
          {/* {userInfo && userInfo.isAdmin && (
            <li
              className={classes.navItem}
              data-selection="7"
              onClick={changeSelection}
            >
              Manage Orders
            </li>
          )} */}
          {/* {userInfo && userInfo.isAdmin && (
            <li
              className={classes.navItem}
              data-selection="8"
              onClick={changeSelection}
            >
              Manage requests
            </li>
          )} */}
        </ul>
        {selectionShow}
      </div>
      <div style={{ marginBottom: "100px" }}></div>
    </Container>
  );
};

export default UserProfile;
