import ps5 from '../images/ps5.jpg';

export type CartItem = {
    id: string;
    name: string;
    price: number;
    src: string;
  }

type StoreProps = {
    cart: Object[]
    addToCart: () => void
}

const Store = (props: StoreProps) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen">
            <h1 className="text-4xl text-center font-bold pt-20 pb-10">Products</h1>
            <div className="grid m-20">
                <div>
                    <img src={ps5} className="h-48 w-48" />
                    <div className='bg-white h-36 w-48 mt-2 pt-2 pl-1'>
                        <p>Playstation 5 Controller</p>
                        <p>Price: $50</p>
                        <span className='mr-2'>Quantity: </span>
                        <div className='inline-block border-solid border-2 border-indigo-600 w-fit bg-white px-2 divide-x'>
                            <button className='pr-2'>-</button>
                            <input type="number" value="1" className='w-10 text-center'></input>
                            <button className='pl-2'>+</button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;

// https://www.pexels.com/photo/white-sony-ps-4-controller-3945659/