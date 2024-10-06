import Item from './Item';
import React , {useState} from 'react';
import data from './data.json';
function App() {
  
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  }

  return (
    <div className="font-red-hat font-400 bg-rose-50 grid sm:grid-cols-4 grid-cols-1">
      <div className='sm:col-span-3 bg-rsoe-50'>
        <h1 className='text-center text-2xl'> Desserts </h1>
        <div className='grid sm:grid-cols-3 grid-cols-1'>
          {
            items.map((item, index) => {
              return (
                <Item key={index} item={item} addToCart={addToCart}/>
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
                <p> {item.name}</p>
              )
            })
          }
          
      </div>
    </div>
  );
}

export default App;
