const Navbar = ({setContact}) => {
    return (
        <nav>
            <h4>Home</h4>
            <h4>Shop</h4>
            <h4 onClick={() => setContact(true)}>Contact</h4>
        </nav>
    )
}

export default Navbar
