import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { getCategory } from "../../../../redux/actions/category";
import { createProduct } from "../../../../redux/actions/productDetail";
import DropNotif from "../../../../components/Modal/Modal";
import MarkdownEditor from "../../../../components/TextEditor/MarkdownEditor";

const ProductCreateScreen = ({ match, history }) => {
  const [namaObat, setNamaObat] = useState("");
  const [hargaObat, setHargaObat] = useState(0);
  const [gambarObat, setGambarObat] = useState("");
  const [idKategori, setIdKategori] = useState("");
  const [infoObat, setInfoObat] = useState("");
  const [dosisObat, setDosisObat] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory())

  }, [dispatch])

  const categoryAll = useSelector((state) => state.category);
  const { categoryList } = categoryAll;


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        namaObat,
        hargaObat,
        gambarObat,
        idKategori,
        infoObat,
        dosisObat,
      }, (error,result) =>{
        history.replace('/userProfile?menu=6')
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/tes/upload", formData, config);

      setGambarObat(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const onChange = (value) => {
    setInfoObat(value);
  };
  return (
    <>
      <Container className="mb-5">
        <Link to="/userProfile" className="btn btn-primary my-3">
          Go Back
        </Link>
        <h1>Create Product</h1>
        {/* {success && (
          <DropNotif
            heading="Create Product"
            text="Create Product Successfully"
            resetData={() => {
              history.push(`/admin/product/${product._id}/edit`);
              dispatch({ type: PRODUCT_CREATE_RESET });
            }}
          ></DropNotif>
        )} */}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                value={namaObat}
                onChange={(e) => setNamaObat(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={hargaObat}
                onChange={(e) => setHargaObat(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Enter image URL"
                value={gambarObat}
                onChange={(e) => setGambarObat(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Col xs={6} md={4}>
              <Image className="img-fluid" src={gambarObat} rounded />
            </Col>
            <Form.Group controlId="selection">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                placeholder="Enter the category"
                value={idKategori}
                onChange={(e) => setIdKategori(e.target.value)}
              >
                <option value=""></option>
                {categoryList.map((item) =>(
                  <option value= {item.idKategori}>{item.namaKategori}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <MarkdownEditor text={infoObat} onChange={onChange} />
            </Form.Group>

            <Form.Group controlId="name" className="my-3">
              <Form.Label>Dosis Obat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan dosis obat"
                value={dosisObat}
                onChange={(e) => setDosisObat(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Create product
            </Button>
          </Form>
      </Container>
    </>
  );
};

export default ProductCreateScreen;
