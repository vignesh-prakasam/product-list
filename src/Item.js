
function Item(props){

    return (
        <div className='w-full h-full grid grid-rows-3 '>
            <div className="row-span-2 ">
                <img src={props.item.image.desktop} alt={props.item.name} className="w-full h-full rounded-lg"/>
            </div>

            <div className="row-span-1">
            <h2 className="text-left text-gray-500 text-sm">{props.item.category}</h2>
            <h2 className="text-left text-black text-md font-semibold">{props.item.name}</h2>
            <h2 className="text-left text-red text-md font-semibold">${props.item.price.toFixed(2)}</h2>
            <button className=" h-10 w-40 bg-orange-300" onClick={() => props.addToCart(props.item)}> Add to Cart</button>
            </div>

            
        </div>
    )

}

export default Item;