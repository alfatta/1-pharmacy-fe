import classes from "./SmallCard.module.css";
import { Link } from "react-router-dom";
const SmallCard = ({ product }) => {
  return (
    <div className={classes.container}>
      <Link to={`/shop/${product.idObat}`}>
        <img src={product.gambarObat} alt="product" />
      </Link>
      <div className={classes.content}>
        <p className={classes.category}>{product.kategori.namaKategori}</p>
        <Link to={`/shop/${product.idObat}`}>{product.namaObat}</Link>
        <p className={classes.price}>Rp.{product.hargaObat}</p>
      </div>
    </div>
  );
};

export default SmallCard;
