import Product from '../components/Product';
import ps4 from '../images/ps4.jpg';
import xbox from '../images/xbox.jpg';
import joycons from '../images/joycons.jpg';
import nes from '../images/nes.jpg';
import n64 from '../images/n64.jpg';
import ps1 from '../images/ps1.jpg';

type StoreProps = {
    addToCart: (name: string, price: number, src: string) => void
}

const Store = (props: StoreProps) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-fit">
            <h1 className="text-4xl text-center font-bold pt-20 pb-10">Products</h1>
            <div className="grid grid-cols-3 justify-items-center p-20">
                <Product 
                    name="PlayStation 4 Controller"
                    price={50}
                    src={ps4}
                    addToCart={props.addToCart}
                    mutation="add" />
                <Product 
                    name="Xbox Series X Controller"
                    price={45}
                    src={xbox}
                    addToCart={props.addToCart}
                    mutation="add" />
                <Product 
                    name="Nintendo Switch Joy-Cons"
                    price={30}
                    src={joycons}
                    addToCart={props.addToCart}
                    mutation="add" />
                <Product 
                    name="NES Controller"
                    price={80}
                    src={nes}
                    addToCart={props.addToCart}
                    mutation="add" />
                <Product 
                    name="PlayStation 1 Controller"
                    price={90}
                    src={ps1}
                    addToCart={props.addToCart}
                    mutation="add" />
                <Product 
                    name="Nintendo 64 Controller"
                    price={100}
                    src={n64}
                    addToCart={props.addToCart}
                    mutation="add" />
            </div>
        </div>
    )
}

export default Store;