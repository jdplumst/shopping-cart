import React, { useState } from 'react';

type ProductProps = {
    id?: string
    name: string
    price: number
    src: string
    addToCart?: (name: string, price: number, src: string) => void
    removeFromCart?: (e: React.MouseEvent<HTMLButtonElement>) => void
    mutation: "add" | "remove"
}

const Product = (props: ProductProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    // Adds all items to cart, each with unique id
    const addAllToCart = () => {
        for (let i = 0; i < quantity; i++) {
            props.addToCart?.(props.name, props.price, props.src);
        }
    }

    // Set either Add To Cart or Remove From Cart button if on Store or Checkout page
    let btn;
    if (props.mutation === 'add') {
        btn = <button onClick={addAllToCart} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add To Cart</button>
    } else if (props.mutation === 'remove') {
        btn = <button id={props.id} onClick={props.removeFromCart} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Remove From Cart</button>
    }

    return (
        <div>
            <img src={props.src} className="h-80 w-80" />
            <div className='bg-white h-36 w-80 pt-2 pl-1 mb-20'>
                <p>{props.name}</p>
                <p>Price: ${props.price}</p>
                <span className='mr-2'>Quantity: </span>
                <div className='inline-block border-solid border-2 border-indigo-600 w-fit bg-white px-2 divide-x'>
                    <button onClick={decrementQuantity} className='pr-2'>-</button>
                    <input onChange={changeQuantity} type="number" value={quantity} className='w-10 text-center'></input>
                    <button onClick={incrementQuantity} className='pl-2'>+</button>
                </div>
                <div className='flex justify-center'>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default Product;