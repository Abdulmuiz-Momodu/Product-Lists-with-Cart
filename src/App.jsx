import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Hero from "./components/hero/Hero";
import { GlobalStateProvider } from "./context/GlobalState";
import Modal from "./components/modal/Modal";


function App() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal((prevstate) => !prevstate)
  }

  return (
    <GlobalStateProvider>
      <div className="App">
        <Hero/>
        <Cart openModal={handleOpenModal}  />
        <Modal modal={modal} setModal={setModal}  />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
