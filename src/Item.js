
function Item(props){

    return (
        <div className='sm:w-full sm:h-full  sm:grid-rows-3 '>
            <div className={`sm:row-span-2 row-span-1 relative ${ props.addedToCart !== -1 ? ' border-2 border-red rounded-lg' : null }`}>
                <img src={props.item.image.mobile} 
                srcSet={`${props.item.image.mobile} 640w, ${props.item.image.desktop} 1024w`} 
                sizes="(min-width: 640px) 1024px, 100vw"
                alt={props.item.name} 
                className="sm:w-full sm:h-full w-full  rounded-lg pb-0 "
                />
                <div className="flex flex-col justify-center items-center">
                {
                    props.addedToCart !== -1 ? 
                    <span className="absolute transform -translate-x-1/5 -translate-y-1/5 h-10 w-2/3 bg-red border border-1 border-rose-400 rounded-3xl text-sm flex items-center justify-between"> 
                        <button className="rounded-full border border-white border-1 w-4 h-4 ml-5" onClick={() => props.reduceFromCart(props.item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="pl-1" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                        </button>
                        <span className="text-white text-sm font-semibold">{props.item.quantity}</span>
                        <button className="rounded-full border border-white border-1 w-4 h-4 mr-5" onClick={() => props.addToCart(props.item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="pl-1" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                        </button>
                    </span>
                    : 
                    <button className="absolute transform -translate-x-1/5 -translate-y-1/5 h-10 w-2/3 bg-white border border-1 border-rose-400 rounded-3xl text-sm flex items-center justify-center" onClick={() => props.addToCart(props.item)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-1" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
                        </svg>
                        <span className="ml-1">Add to Cart</span>
                    </button>
                }    
                </div>
            </div>

            <div className="row-span-1 my-5 ">
                <h2 className="text-left text-gray-500 text-sm">{props.item.category}</h2>
                <h2 className="text-left text-black text-md font-semibold">{props.item.name}</h2>
                <h2 className="text-left text-red text-md font-semibold">${props.item.price.toFixed(2)}</h2>
            </div>

            
        </div>
    )

}

export default Item;