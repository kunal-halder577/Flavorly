import { useId } from "react"
import Button from "./Button"
import Logo from "./Logo"
import { Link } from "react-router-dom"

export default function Header({className=""}) {
    const navItems = [
        {
            title: "Home",
            path: "/",
            active: true
        },
        {
            title: "Favorites",
            path: "/favorites",
            active: true
        },
        {
            title: "Recipes",
            path: "/search",
            active: true
        },
        {
            title: "About",
            path: "/about",
            active: true
        }
    ]
    return (
        <header className={`relative h-full bg-white/70 px-4 w-full border-b border-black/15 backdrop-blur-lg shadow-[0_2px_6px_-1px_rgba(0,0,0,0.2)] overflow-hidden ${className}`}
        >
                <section className="w-full flex items-center justify-between h-full">
                    <section className="logo cursor-pointer text-2xl font-medium text-orange-400">
                        <Link to={`/`}>
                            <Logo fill="#ea580c" width={90} height={32}/>
                        </Link>
                    </section>
                    <div className="flex-1 flex items-center h-full px-2 overflow-x-auto">
                      <nav className="navItems w-full flex justify-between">
                            <ul className="flex flex-wrap gap-2 flex-grow justify-center">
                                {navItems.map(nav => (
                                    <li key={useId()}>
                                        <Link to={nav.path}>
                                            <Button className="bg-white shadow-2xl text-amber-500 hover:text-orange-600 text-lg px-4 py-0.5 underline-offset-2 decoration-2 focus:text-orange-600 font-semibold hover:bg-gray-200 focus:outline-0"
                                            ring={false}
                                            underline={true}
                                            >
                                                {nav.title}
                                            </Button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="auth">
                                {/* <Link to={``}> */}
                                    <Button className="bg-white shadow-2xl text-amber-500 hover:text-orange-600 text-lg px-4 py-0.5 underline-offset-2 decoration-2 focus:text-orange-600"
                                    ring={false}
                                    underline={true}
                                    >
                                        Login
                                    </Button>
                                {/* </Link> */}
                            </div>
                        </nav>
                    </div>
                </section>
        </header>
    )
}