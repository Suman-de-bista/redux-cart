import React from "react";
import { connect } from "react-redux";
import DummyFoods from "../DummyFoods";
import styles from "./FoodItems.module.css";
import { addTocart } from "../../Redux/FoodActions";

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.meals}>
        <ul>
          {DummyFoods.map((meal) => (
            <li key={meal.id}>
              <img src={meal.image} alt="Food" />
              <div className={styles.details}>
                <h2>{meal.name}</h2>
                <p>{meal.description}</p>
                <h3>{`$${meal.price}`}</h3>
              </div>
              <div>
                <div className={styles.addcartbtn}>
                  <button onClick={() => this.props.addToCart(meal)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (meal) => dispatch(addTocart(meal)),
  };
};

export default connect(null, mapDispatchToProps)(FoodItems);
