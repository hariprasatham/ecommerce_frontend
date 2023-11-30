import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persister, store } from "./redux/store.ts";
import Cart from "./components/pages/Cart.tsx";
import Navbar from "./components/custom/Navbar/Navbar.tsx";
import MenTshirt from "./components/pages/MenTshirt.tsx";
import MenSweatShirt from "./components/pages/MenSweatShirt.tsx";
import WomenTshirt from "./components/pages/WomenTshirt.tsx";
import WomenSweatShirt from "./components/pages/WomenSweatShirt.tsx";
import Kids from "./components/pages/Kids.tsx";
import Footer from "./components/custom/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Router>
          <Navbar />

          <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="men/tshirt" element={<MenTshirt />} />
            <Route path="men/sweatshirt" element={<MenSweatShirt />} />
            <Route path="women/tshirt" element={<WomenTshirt />} />
            <Route path="women/sweatshirt" element={<WomenSweatShirt />} />
            <Route path="/kids" element={<Kids />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
