import Item from "./Item";
import React, { useState } from "react";
import data from "./data.json";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import tree from "./assets/images/icon-carbon-neutral.svg";
function App() {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const removeFromCart = (item) => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  const addToCart = (item) => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (itemIndex === -1) {
      item.quantity = 1;
      newCart.push(item);
    } else {
      newCart[itemIndex].quantity = newCart[itemIndex].quantity + 1;
    }
    setCart(newCart);
  };

  const reduceFromCart = (item) => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (newCart[itemIndex].quantity === 1) {
      newCart.splice(itemIndex, 1);
    } else {
      newCart[itemIndex].quantity = newCart[itemIndex].quantity - 1;
    }
    setCart(newCart);
  };

  return (
    <div className="font-red-hat font-400 bg-rose-50 grid sm:grid-cols-5 grid-cols-1 ml-10 mt-10">
      <div className="sm:col-span-3 bg-rose-50">
        <h1 className=" text-2xl font-bold text-left"> Desserts </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                item={item}
                addToCart={addToCart}
                reduceFromCart={reduceFromCart}
                addedToCart={cart.findIndex(
                  (cartItem) => cartItem.name === item.name
                )}
              />
            );
          })}
        </div>
      </div>

      <div className="sm:col-span-2 bg-rose-50 ">
        <div className="bg-white m-8 rounded-lg min-h-20 ml-5 mr-5 ">
          <h1 className="text-left text-lg font-bold text-red mb-10">
            {" "}
            Your Cart ({cart.length}){" "}
          </h1>

          <table className="mb-5 w-full">
            {cart.map((item, index) => {
              return (
                <tr className=" mb-5 border border-b-1 border-l-0 border-r-0 border-t-0">
                  <td>
                    <p className=" mb-2 text-sm text-rose-900 font-semibold">
                      {" "}
                      {item.name}
                    </p>
                    <p className="">
                      <span className="text-red text-sm">{item.quantity}x</span>
                      <span className="text-gray-500 text-sm px-5">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="text-rose-900 text-sm px-5 text-right">
                        ${(item.price.toFixed(2) * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </td>
                  <td>
                    <button
                      className=" w-3 h-3 border border-rose-400  rounded-full"
                      onClick={() => removeFromCart(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#CAAFA7"
                          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          {cart.length === 0 ? (
            <div className="text-center">
              <img src={emptyCart} alt="Empty Cart" className="mx-auto mb-4" />
              <p className="text-center text-sm font-semibold text-rose-500">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <span className="text-sm text-rose-900">Order Total</span>
                </div>
                <div>
                  <span className="text-2xl text-rose-900 font-bold">
                    ${total}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="bg-rose-100 text-sm p-4 rounded-lg text-center"> 
                  <span className="flex justify-center items-center">
                    <img src={tree} alt="tree" className="mr-2"/>
                    This is a <span className="font-bold mx-1"> carbon-neutral</span> delivery
                  </span>
                   
                </p>
                <button className="w-full bg-red text-white text-sm font-bold rounded-3xl p-3 my-5">
                  Confirm Order
                </button>  
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
