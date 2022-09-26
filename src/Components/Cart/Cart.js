import React from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import { MdDelete, MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../Redux/FoodActions";

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler() {
    this.forceUpdate();
  }
  render() {
    const cartItem = this.props.cartItems;
    const quantity = this.props.quantity;
    console.log(cartItem);
    const calculateTotal = cartItem
      .map((val) => val.price * val.cartQuantity)
      .reduce((ac, val) => ac + val, 0);
    return cartItem.length ? (
      <div>
        <div className={styles.cart}>
          <h1>Shopping Cart</h1>
          <div className={styles.title}>
            <h3></h3>
            <div className={styles.itemName}>
              <h3>Item Name</h3>
            </div>
            <div className={styles.price}>
              <h3>Price</h3>
            </div>
            <h3 className={styles.price}>Quantity</h3>
            <h3>Total</h3>
          </div>
          <ul>
            {cartItem.map((meal) => (
              <li key={meal.id}>
                <img src={meal.image} alt="Food" />
                <div className={styles.itemName}>
                  <h2>{meal.name}</h2>
                  <p>{meal.description}</p>
                </div>
                <div className={styles.price}>
                  <h4>{`$${meal.price}`}</h4>
                </div>
                <div className={styles.quantityBtns}>
                  <button
                    onClick={() => {
                      this.forceUpdateHandler();
                      return this.props.increaseItem(meal);
                    }}
                  >
                    +
                  </button>
                  <h4>{meal.cartQuantity}</h4>
                  <button
                    onClick={() => {
                      this.forceUpdateHandler();
                      return this.props.decreaseItem(meal);
                    }}
                  >
                    -
                  </button>
                </div>
                <div className={styles.total}>
                  <h4>${(meal.price * meal.cartQuantity).toFixed(2)}</h4>
                </div>
                <button
                  onClick={() => {
                    this.forceUpdateHandler();
                    return this.props.removeItem(meal);
                  }}
                >
                  <MdDelete />
                </button>
              </li>
            ))}

            <div className={styles.subtotal}>
              <h2>
                Subtotal:
                <span>({quantity} items)</span>
              </h2>
              <h2>$ {calculateTotal.toFixed(2)}</h2>
            </div>

            <div className={styles.checkout}>
              <button>Check Out</button>
              <Link to="/">
                Go Back to Place Order <MdArrowBack />
              </Link>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
    ) : (
      <div className={styles.cartEmpty}>
        <h2>There is No Items in the Cart</h2>
        <Link to="/">
          Go Back to Place Order <MdArrowBack />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cartItems = state.cartItems;
  const quantity = state.quantity;
  return {
    cartItems,
    quantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (meal) => dispatch(removeItem(meal)),
    increaseItem: (meal) => dispatch(increaseItem(meal)),
    decreaseItem: (meal) => dispatch(decreaseItem(meal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
