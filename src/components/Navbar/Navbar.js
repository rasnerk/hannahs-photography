import "./Navbar.css"
const Navbar = () => {
    const navItems = [ {title: "Home"}, {title: "Portfolio"}, {title: "Blog"}, {title: "About"}, {title: "Contact"}, {title: "Shop"} ]
    return (
        <div id="navbar">
            <div id="logo">LOGO</div>
            <ul>
                {navItems.map(item => <li key={item.title}>{item.title}</li> )}
            </ul>
        </div>
    )
}

export default Navbar