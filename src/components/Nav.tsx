import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-start py-4 bg-slate-300 shadow-lg navbar navbar-expand-lg navbar-light">
            <h1 className='text-4xl pl-20 w-2/3'>Controllify</h1>
            <div className="flex justify-around pr-20 w-1/3">
                <Link to='/shopping-cart'><h2 className="hover:cursor-pointer">Home</h2></Link>
                <Link to='/store'><h2 className="hover:cursor-pointer">Store</h2></Link>
                <Link to='/checkout'><h2 className="hover:cursor-pointer">Checkout</h2></Link>
            </div>
        </nav>
    )
}

export default Nav;