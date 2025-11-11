import { useState } from "react";


export default function NavbarSection() {
    // const [isOpen, setIsOpen] = useState(false)

    // const navList =[
    //     { name: 'Home', href: '/' },
    //     { name: 'About', href: '/about' },
    //     { name: 'Services', href: '/services' },
    //     { name: 'Contact', href: '/contact' },
    // ]

    return (
        <div className="navbar-section">
            {/* Navbar content goes here */}
            {/* <button onClick={() => setIsOpen(!isOpen)}>
                Toggle Menu
            </button>
            {isOpen && (
                <ul>
                    {navList.map((item) => (
                        <li key={item.name}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
}