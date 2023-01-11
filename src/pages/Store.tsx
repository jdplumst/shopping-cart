import Product from '../components/Product';
import ps5 from '../images/ps5.jpg';
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
                    name="PlayStation 5 Controller"
                    price={50}
                    src={ps5}
                    addToCart={props.addToCart} />
                <Product 
                    name="Xbox Series X Controller"
                    price={45}
                    src={xbox}
                    addToCart={props.addToCart} />
                <Product 
                    name="Nintendo Switch Joy-Cons"
                    price={30}
                    src={joycons}
                    addToCart={props.addToCart} />
                <Product 
                    name="NES Controller"
                    price={80}
                    src={nes}
                    addToCart={props.addToCart} />
                <Product 
                    name="PlayStation 1 Controller"
                    price={90}
                    src={ps1}
                    addToCart={props.addToCart} />
                <Product 
                    name="Nintendo 64 Controller"
                    price={100}
                    src={n64}
                    addToCart={props.addToCart} />
            </div>
        </div>
    )
}

export default Store;

// https://www.pexels.com/photo/white-sony-ps-4-controller-3945659/
// https://www.pexels.com/photo/xbox-game-console-pad-14642107/
// https://www.pexels.com/photo/removable-controllers-and-nintendo-on-a-white-surface-4523018/
// https://www.pexels.com/photo/low-light-photo-of-nes-controller-1637436/
// https://www.pexels.com/photo/vintage-nintendo-video-games-cartridge-and-controller-9281229/
// https://www.pexels.com/photo/a-vintage-nintendo-game-console-9281221/