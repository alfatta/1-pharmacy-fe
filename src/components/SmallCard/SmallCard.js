import classes from "./SmallCard.module.css";
import { Link } from "react-router-dom";
const SmallCard = ({ product }) => {
  return (
    <div className={classes.container}>
      <Link to={`/product/${product.idObat}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className={classes.content}>
        <p className={classes.category}>{product.kategori.namaKategori}</p>
        <a href="/">{product.namaObat}</a>
        <p className={classes.price}>Rp.{product.hargaObat}</p>
      </div>
    </div>
  );
};

export default SmallCard;
