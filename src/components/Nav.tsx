const Nav = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-start py-4 bg-red-100 shadow-lg navbar navbar-expand-lg navbar-light">
            <h1 className='text-4xl pl-20 w-2/3'>Shopping Cart</h1>
            <div className="flex justify-around pr-20 w-1/3">
                <h2 className="hover:cursor-pointer">Home</h2>
                <h2 className="hover:cursor-pointer">Products</h2>
            </div>
        </nav>
    )
}

export default Nav;