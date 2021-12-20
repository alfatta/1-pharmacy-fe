import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, ListGroup, Button, Card, Container } from "react-bootstrap";
import SubProduct from "./SubProduct/SubProduct";
import classes from "./CartScreen.module.css";
import { checkout } from "../../redux/actions/cart";

const CartScreen = ({ match, location, history }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch()

  const checkoutHandler = () => {
    dispatch(checkout(() => {
      history.push("/shop");
    }))
  };
  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <SubProduct key={item.product} item={item} />
                ))}
              </ListGroup>
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  Rp.
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.hargaObat, 0)
                    .toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartScreen;
