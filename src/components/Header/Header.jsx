import { useState } from "react";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const Header = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/allMeals', name: 'All Meals' },
        { id: 4, path: '/contact', name: 'Contact Us' },
    ]

    const [barOpen, setBarOpen] = useState(false);


    return (

        <nav className="flex items-center justify-between py-6 w-[90%] mx-auto">

            <div>
                <img className="w-[160px] md:max-w-[200px]" src={logo} alt="" />
            </div>

            <ul className={`
            flex flex-col gap-2 md:flex-row md:gap-8 font-bold text-lg
            absolute top-16 text-right md:static md:text-left
            ${barOpen ? 'right-6' : '-right-72'}
            duration-700
            `}>
                {
                    routes.map(route => (
                        <NavLink key={route.id} to={route.path}>{route.name}</NavLink>
                    ))

                }
            </ul>

            <div
                className="text-3xl md:hidden"
                onClick={() => setBarOpen(!barOpen)}
            >
                {
                    barOpen ? <FaX /> : <FaBarsStaggered />
                }

            </div>

        </nav>
    );
};

export default Header;