
const initialState = {
  cartItems: [],
  quantity: 0,
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      let addItemToCart;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        addItemToCart = state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        addItemToCart = state.cartItems.push(tempProduct);
      }

      state.quantity++;

      return {
        cartItems: addItemToCart,
        quantity: state.quantity,
        ...state,
      };

    case "removeItem":
      const itemRemoveIndex = state.cartItems.findIndex(
        (item) => item === action.payload
      );
      const decreasedQuantity =
        state.quantity - state.cartItems[itemRemoveIndex].cartQuantity;
      state.quantity = decreasedQuantity > 0 ? decreasedQuantity : 0;
      state.cartItem = state.cartItems.splice(itemRemoveIndex, 1);

      return {
        ...state,
      };

    case "increaseItem":
      state.quantity += 1;
      const increaseItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[increaseItemIndex].cartQuantity += 1;
      console.log(state.quantity);
      return {
        ...state,
      };

    case "decreaseItem":
      state.quantity -= 1;
      const decreaseItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const decreaseQuantity =
        state.cartItems[decreaseItemIndex].cartQuantity - 1;
      state.cartItems[decreaseItemIndex].cartQuantity =
        decreaseQuantity > 0
          ? decreaseQuantity
          : (state.cartItem = state.cartItems.splice(decreaseItemIndex, 1));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default FoodReducer;