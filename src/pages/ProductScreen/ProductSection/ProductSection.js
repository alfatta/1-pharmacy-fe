import { useState } from "react";
import classes from "./ProductSection.module.css";
import { addToCart } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";
import CartModal from "../../../components/CartModal/CartModal";

const ProductSection = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const cartHandler = () =>{
    dispatch (addToCart(product, qty))
    setShowModal(true)
  }
  
  return (
    <div className={classes.container}>
      <CartModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      ></CartModal>
      <img className={classes.productImage} src={product.gambarObat} alt="Product" />
      <div className={classes.content}>
        <h3 className={classes.productName}>{product.namaObat}</h3>
        <h2 className={classes.productPrice}>Rp.{new Intl.NumberFormat().format(product.hargaObat)}</h2>
        <ul className={classes.list}>
          <li>
            <a class="active" href="/">
              <span>Kategori</span> : {product.kategori ? product.kategori.namaKategori : '-'}
            </a>
          </li>
        </ul>
        <div className={classes.productCount}>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          ></input>
        </div>
        <button
          className={classes.addCart}
          onClick={cartHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
