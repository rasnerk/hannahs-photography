const Navbar = () => {
    const navItems = [ {title: "Home"}, {title: "Contact"}, {title: "About"}, {title: "Shop"}, {title: "Blog"}, {title: "Design"}, {title: "Portfolio"}, {title: "Gallery"} ]
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