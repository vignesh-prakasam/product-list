
function Item(props){

    return (
        <div className='border b-2 w-full h-96 bg-teal-300'>
            <h1 className="text-center">{props.item.name}</h1>
            <button className="h-20 w-20 bg-orange-300" onClick={() => props.addToCart(props.item)}> Add to Cart</button>
        </div>
    )

}

export default Item;