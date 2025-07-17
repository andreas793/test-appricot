import Link from "next/link";
import {FC} from "react";

const links  = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
]

const Navbar: FC = () => {
    return (
        <nav className="navbar px-4 py-20 max-w-6xl mx-auto ">
            <ul className="menu menu-horizontal flex gap-4 max-width flex-row">
                {links.map(({href, label}) =>(
                    <li key={href}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;