import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const SubProduct = ({ item }) => {
  const dispatch = useDispatch();
  const [subQty, setSubQty] = useState(item.qty);

  // useEffect(() => {
  //   dispatch(addToCart(item.product, Number(subQty)));
  // }, [item.product, subQty, dispatch]);

  const changeQty = (e) => {
    if (e.target.value < 1) {
      setSubQty(1);
    } else {
      setSubQty(e.target.value);
    }
  };
  return (
    <>
      <ListGroup.Item key={item.idObat}>
        <Row>
          <Col md={2}>
            <Image src={item.gambarObat} alt={item.namaObat} fluid rounded />
          </Col>
          <Col md={3}>
            <Link to={`/shop/${item.idObat}`}>{item.namaObat}</Link>
          </Col>
          <Col md={2}>Rp.{item.hargaObat}</Col>
          <Col md={2}>
            <Form.Control
              type="number"
              value={item.qty}
              onChange={changeQty}
            ></Form.Control>
          </Col>
          <Col md={2}>
            <Button
              type="button"
              variant="light"
              onClick={() => dispatch(removeFromCart(item))}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default SubProduct;
