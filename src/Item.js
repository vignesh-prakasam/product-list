
function Item(props){

    return (
        <div className='border b-2 w-full h-96 grid grid-rows-3 '>
            <div className="row-span-2">
                <img src={props.item.image.desktop} alt={props.item.name} className="w-full h-3/4"/>
            </div>

            <div className="row-span-1">
            <h2 className="text-left text-gray-500 text-sm">{props.item.category}</h2>
            <h2 className="text-left text-black text-md font-semibold">{props.item.category}</h2>
            <h2 className="text-left text-rose-600 text-md font-semibold">${props.item.price.toFixed(2)}</h2>
            <button className="h-10 w-40 bg-orange-300" onClick={() => props.addToCart(props.item)}> Add to Cart</button>
            </div>

            
        </div>
    )

}

export default Item;