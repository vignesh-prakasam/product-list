import Item from "./Item";
import React, { useState } from "react";
import data from "./data.json";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import tree from "./assets/images/icon-carbon-neutral.svg";
import orderConfirmed from "./assets/images/icon-order-confirmed.svg"
import Modal from "./Modal";
function App() {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

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
    <div className="font-red-hat font-400 bg-rose-50 grid sm:grid-cols-5 grid-cols-1 ml-10 mt-10 mr-10">
      <div className="sm:col-span-3 col-span-1 bg-rose-50">
        <h1 className="text-2xl font-bold text-left mb-5"> Desserts </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-4">
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
        <div className="bg-white pt-5 rounded-lg min-h-20 sm:ml-5 sm:mr-5 ">
          <h1 className="text-left text-lg font-bold text-red mb-2 ml-5">
            Your Cart ({cart.length})
          </h1>

          <table className="mb-5 w-full">
            {cart.map((item, index) => {
              return (
                <tr className="border border-b-1 border-l-0 border-r-0 border-t-0">
                  <td className="px-4 py-2">
                    <p className=" mb-2 text-sm text-rose-900 font-semibold ">
                      {item.name}
                    </p>
                    <p className="">
                      <span className="text-red text-sm font-semibold">{item.quantity}x</span>
                      <span className="text-gray-500 text-sm px-5">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="text-rose-900 text-sm px-5 text-right">
                        ${(item.price.toFixed(2) * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </td>
                  <td className="px-4 py-2"> 
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
            <div className="text-center mb-10">
              <img src={emptyCart} alt="Empty Cart" className="mx-auto mb-4" />
              <p className="text-center text-sm font-semibold text-rose-500 mb-10">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-between items-center ml-5 mr-5">
                <div>
                  <span className="text-sm text-rose-900">Order Total</span>
                </div>
                <div>
                  <span className="text-2xl text-rose-900 font-bold">
                    ${total}
                  </span>
                </div>
              </div>
              <div className="mt-5 mx-5">
                <p className="bg-rose-100 text-sm p-4 rounded-lg text-center"> 
                  <span className="flex justify-center items-center">
                    <img src={tree} alt="tree" className="mr-2"/>
                    This is a <span className="font-bold mx-1"> carbon-neutral</span> delivery
                  </span>
                   
                </p>
                <button className="w-full bg-red text-white text-sm font-bold rounded-3xl p-3 my-5" onClick={() => setOpen(true)}>
                  Confirm Order
                </button>   
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal open={open} Onclose={() => setOpen(false)}>
        <div className="m-5">
          <img src={orderConfirmed} alt="Order Confirmed" className="my-auto mb-4"/>
          <h1 className="text-2xl font-bold text-left mb-5 text-left">Order Confirmed</h1>
          <p className="text-sm text-rose-500 text-left">
            We hope you enjoy your food!
          </p>

          <div className="sm:max-h-96 max-h-80 overflow-auto">
            <table className="mt-5 mb-5 w-full bg-rose-100 rounded-lg">
              {cart.map((item, index) => {
                return (
                  <tr className="border-b border-gray-200">
                    <td>
                    <img src={item.image.thumbnail} alt={item.name} className="rounded-2xl py-3 pl-3 w-30 h-30"/>
                    </td>
                    <td className="py-2">
                      <p className="mb-2 text-sm text-rose-900 font-semibold ">
                        {item.name}
                      </p>
                      <p className="">
                        <span className="text-red text-sm font-semibold text-left">{item.quantity}x</span>
                        <span className="text-gray-500 text-sm px-5">
                          @ ${item.price.toFixed(2)}
                        </span>
       
                      </p>
                    </td>
                    <td className="px-4 py-4 text-right"> 
                    <span className="text-rose-900 text-sm px-5 text-right">
                          ${(item.price.toFixed(2) * item.quantity).toFixed(2)}
                    </span>
                    
                    </td>
                  </tr>
                );
              })}
              
              <tr>
                <td className="px-4 py-4">
                  <p className="text-sm text-rose-500 font-semibold">Order total</p>
                </td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4 text-right">
                  <span className="text-rose-900 text-2xl px-5 font-bold">${total}</span>
                </td>
              </tr>
            </table>
          </div>

          <button
            className="w-full bg-red text-white text-sm font-bold rounded-3xl p-3 my-5"
            onClick={() => {setOpen(false); setCart([])}}
          >
            Start new order
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
