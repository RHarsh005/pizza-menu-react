import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import pizzaData from "./data";
// console.log(pizzaData);
// console.log(typeof pizzaData);
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "" }}>PIZZA MENU</h1>
    </header>
  );
}

function Menu() {
  //   for (let d : JSON.parse(data)) {
  //     console.log(d);
  //   }
  let length = pizzaData.length;
  //   pizzaData.forEach((pizza) => console.log(pizza));
  return (
    <main className="menu">
      <h2> Our Menu </h2>

      {length > 0 && (
        <>
          <p>
            A pizzeria is a restaurant focusing on pizza. As well as pizza, dishes at pizzerias can
            include kebab, salads and pasta.{" "}
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price="50"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //   console.log(test);

  //   if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3> {pizzaObj.name} </h3>
        <p> {pizzaObj.ingredients} </p>
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  let hour = new Date().getHours();
  let open = 12,
    close = 18;
  let openFlag = open <= hour && hour <= close;
  return (
    <footer className="footer">
      We are currently {openFlag ? "Open" : "Close"} <Order />
    </footer>
  );
  //   return React.createElement("footer", null, " ---- FOOTER ---- ");
}

function Order() {
  return (
    <div className="order">
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
