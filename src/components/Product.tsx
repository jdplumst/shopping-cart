import React, { useState } from 'react';

type ProductProps = {
    name: string
    price: number
    src: string
}

const Product = (props: ProductProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    return (
        <div>
            <img src={props.src} className="h-80 w-80" />
            <div className='bg-white h-36 w-80 pt-2 pl-1 mb-20'>
                <p>{props.name}</p>
                <p>Price: ${props.price}</p>
                <span className='mr-2'>Quantity: </span>
                <div className='inline-block border-solid border-2 border-indigo-600 w-fit bg-white px-2 divide-x'>
                    <button className='pr-2'>-</button>
                    <input onChange={changeQuantity} type="number" defaultValue={1} className='w-10 text-center'></input>
                    <button className='pl-2'>+</button>
                </div>
                <div className='flex justify-center'>
                    <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;