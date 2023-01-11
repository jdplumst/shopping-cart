import Product from '../components/Product';
import ps5 from '../images/ps5.jpg';

type StoreProps = {
    addToCart: () => void
}

const Store = (props: StoreProps) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen">
            <h1 className="text-4xl text-center font-bold pt-20 pb-10">Products</h1>
            <div className="grid m-20">
                <Product 
                    name="PlayStation 5 Controller"
                    price={50}
                    src={ps5}/>
            </div>
        </div>
    )
}

export default Store;

// https://www.pexels.com/photo/white-sony-ps-4-controller-3945659/