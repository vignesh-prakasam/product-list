import Item from './Item';
import React , {useState} from 'react';
import data from './data.json';
function App() {
  
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(cartItem => cartItem.name === item.name);
    if( itemIndex === -1)
     {
      item.quantity = 1;
      newCart.push(item);
     }   
    else
    {
        newCart[itemIndex].quantity = newCart[itemIndex].quantity + 1;
    }
    setCart(newCart);
  }

  const removeFromCart = (item) => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(cartItem => cartItem.name === item.name);
    if( newCart[itemIndex].quantity === 1)
     {
      newCart.splice(itemIndex, 1);
     }   
    else
    {
        newCart[itemIndex].quantity = newCart[itemIndex].quantity - 1;
    }
    setCart(newCart);
  }

  return (
    <div className="font-red-hat font-400 bg-rose-50 grid sm:grid-cols-4 grid-cols-1 ml-4">
      <div className='sm:col-span-3 bg-rose-50'>
        <h1 className='text-center text-2xl'> Desserts </h1>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
          {
            items.map((item, index) => {
              return (
                <Item key={index} item={item} addToCart={addToCart} removeFromCart={removeFromCart} addedToCart={cart.findIndex(cartItem => cartItem.name === item.name)}/>
              )
            })
          }
        </div>
      </div>
      
      <div className='sm:col-span-1 bg-slate-500'>
        <h1 className='text-center text-2xl'> Cart </h1>
          {
            cart.map((item, index) => {
              return (
                <p> {item.name} - {item.quantity}</p>
              )
            })
          }
          
      </div>
    </div>
  );
}

export default App;
