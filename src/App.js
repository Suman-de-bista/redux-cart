import React from "react";
import FoodItems from "./Components/FoodItems/FoodItems";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Routes>
               <Route path='/' element={<FoodItems/>}/>
              <Route path='cart' element={<Cart/>}/>
          </Routes>
         </div>
    );
  }
}


export default (App);