import { useEffect, useState } from "react";
import classes from "./ProductScreen.module.css";
import Container from "../../components/Container";
import ProductSection from "./ProductSection/ProductSection";
import ProductDescription from "./ProductDescription/ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productDetail";
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { productData } = productDetail;

  const productId = match.params.id;
  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [dispatch, productId]);


  return (
    <Container>
          <ProductSection product={productData}></ProductSection>
          <div className={classes["selection-container"]}>
            <ProductDescription content={productData.infoObat} />
          </div>
    </Container>
  );
};

export default ProductScreen;
