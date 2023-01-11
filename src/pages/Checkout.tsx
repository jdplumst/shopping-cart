import Product from "../components/Product";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    src: string;
}

type CheckoutProps = {
    cart: CartItem[]
    removeFromCart: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Checkout = (props: CheckoutProps) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen h-fit">
            <h1 className="text-4xl text-center font-bold pt-20 pb-10">Checkout</h1>
            <div className="grid grid-cols-3 justify-items-center p-20">
                {props.cart.map((product) => {
                    return (
                            <Product 
                                key = {product.id}
                                id = {product.id}
                                name = {product.name}
                                price = {product.price}
                                src = {product.src}
                                removeFromCart = {props.removeFromCart}
                                mutation = "remove" />
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout;