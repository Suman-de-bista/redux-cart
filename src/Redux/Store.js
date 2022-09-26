import { createStore } from "redux";
import FoodReducer from './FoodReducer'

const Store = createStore(FoodReducer);

export default Store;