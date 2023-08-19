import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Modal from "./Components/Modal/Modal";
import Context from "./Context";
import Search from "./Components/Search/Search";
import itemList from "./Items";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [item, setItem] = useState(itemList);
  const [shoppingCard, setShoppingCard] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  return (
    <Context.Provider value={{ isOpen, setIsOpen, item, setItem, shoppingCard, setShoppingCard, totalCost, setTotalCost}}>
      <Navbar />
      <Search />
      <Card />
      <Modal />
    </Context.Provider>
  );
}

export default App;
