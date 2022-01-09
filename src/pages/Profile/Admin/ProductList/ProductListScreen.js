import React, { useEffect, useState } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container, Pagination } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import {getProduct} from "../../../../redux/actions/products";
import {deleteProduct} from "../../../../redux/actions/productDetail";
// import { deleteProduct } from "../../../../actions/productActions";
import DropNotif from "../../../../components/Modal/Modal";
// import { PRODUCT_DELETE_RESET } from "../../../../constants/productConstants";

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const productAll = useSelector((state) => state.products);
  const { previousPage, nextPage, page, productList } = productAll;


  const userLogin = useSelector((state) => state.auth);
  const { loggedUser } = userLogin;

  // const productDelete = useSelector((state) => state.productDelete);
  // const {
  //   loading: loadingDelete,
  //   success: successDelete,
  //   error: errorDelete,
  // } = productDelete;

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const page = query.get('page') || 1
    dispatch(getProduct(page));
  }, [dispatch, page, location]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id,(error,result) =>{
        dispatch(getProduct(page))
      }));
    }
  };
  // const pageHandler = (e, value) => {
  //   setPage(value);
  // };

  return (
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Link
            className="my-3 btn btn-primary"
            to="/admin/product/create"
            style={{ marginLeft: "auto" }}
          >
            <i className="fas fa-plus"></i> Create Product
          </Link>
        </Col>
      </Row>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                  <tr key={product.idObat}>
                    <td>{product.idObat}</td>
                    <td>{product.namaObat}</td>
                    <td>Rp.{product.hargaObat}</td>
                    <td>{product.kategori.namaKategori}</td>
                    <td>
                      <Link to={`/admin/product/${product.idObat}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(product.idObat)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagination>
              <Pagination.Prev disabled={!previousPage} href={'/userProfile?menu=6&page=' + previousPage} />
              <Pagination.Item disabled>{page}</Pagination.Item>
              <Pagination.Next disabled={!nextPage} href={'/userProfile?menu=6&page=' + nextPage} />
            </Pagination>
    </Container>
  );
};

export default ProductListScreen;
