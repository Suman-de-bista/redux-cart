import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    let quantity = this.props.quantity;
    console.log(quantity);
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>
            <Link to="/">Chitto Mittho</Link>
          </h2>
          <Link to="/cart" className={styles.button}>
            <span className={styles.icon}>
              <MdShoppingCart />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{quantity}</span>
          </Link>
        </div>
        <div className={styles["main-image"]}>
          <img
            src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/06/blog-1030x538.png"
            alt="Cover"
          />
        </div>
        <div className={styles.summary}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const quantity = state.quantity;
  return {
    quantity,
  };
};

export default connect(mapStateToProps)(Header);
