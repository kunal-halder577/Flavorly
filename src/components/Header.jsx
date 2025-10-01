import { useId, useRef, useState, useEffect } from "react"
import Button from "./Button"
import Logo from "./Logo"
import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
export default function Header({className=""}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const id = useId();
    const navRef = useRef();
    const buttonRef = useRef();
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
    useEffect(() => {
        function handleClickOutside(event) {
        if (navRef.current && !navRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={`relative z-50 h-full bg-white/70 px-4 w-full border-b border-black/15 backdrop-blur-lg shadow-[0_2px_6px_-1px_rgba(0,0,0,0.2)]  ${className} flex items-center md:block`}
        >
                <section className="w-full flex items-center justify-between h-full">
                    <section className="logo cursor-pointer text-2xl font-medium text-orange-400">
                        <NavLink to={`/`} className={({isActive}) => `focus:ring-2 ring-orange-500 ${isActive? 'underline underline-offset-2 decoration-orange-500': ""}`}>
                            <Logo fill="#ea580c" width={90} height={32}/>
                        </NavLink>
                    </section>
                    <div className="flex-1 flex items-center h-full px-2 overflow-x-auto">
                      <nav className="w-full hidden md:flex justify-between">
                            <ul className="flex flex-wrap gap-0.5 lg:gap-2 flex-grow justify-center">
                                {navItems.map(nav => (
                                    <li key={nav.title} className="">
                                        <NavLink to={nav.path} tabIndex={-1}>
                                           {
                                                ({isActive}) => (
                                                    <Button className={`bg-white shadow-2xl text-amber-500 hover:text-orange-600 text-lg px-4 py-0.5 underline-offset-2 decoration-2 focus:text-orange-600 font-semibold hover:bg-gray-100
                                                    ${isActive? 'border-b-2 border-orange-500': ""}
                                                    `
                                                    }
                                                    ring={false}
                                                    underline={true}
                                                    >
                                                        {nav.title}
                                                    </Button>
                                                )
                                           }
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="auth">
                                {/* <NavLink to={``} tabIndex={-1}> */}
                                    <Button className="bg-white shadow-2xl text-amber-500 hover:text-orange-600 text-lg px-4 py-0.5 underline-offset-2 decoration-2 focus:text-orange-600 font-semibold hover:bg-gray-100"
                                    ring={false}
                                    underline={true}
                                    >
                                        Login
                                    </Button>
                                {/* </NavLink> */}
                            </div>
                        </nav>
                    </div>
                </section>
                <div className="menu md:hidden">
                    <button 
                        ref={buttonRef}
                        className="switch p-0.5 rounded shadow-2xl focus:outline-2 outline-orange-600 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="text-orange-500 hover:text-orange-600" size={28}/>
                    </button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            ref={navRef}
                            initial={{ height: 0, opacity: 0, y: -10 }}
                            animate={{ height: "auto", opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute shadow-md md:hidden mt-2 right-6 top-full rounded-lg bg-white overflow-hidden w-fit"
                            style={{ width: "max-content" }} 
                        >
                        <motion.ul
                            className="flex flex-col gap-2"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                            open: { transition: { staggerChildren: 0.05 } },
                            closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
                            }}
                        >
                            {navItems.map((nav, idx) => (
                            <NavLink to={nav.path} tabIndex={-1}>
                                {
                                    ({isActive}) => (
                                        <motion.li
                                            key={idx}
                                            variants={{
                                            open: { opacity: 1, y: 0 },
                                            closed: { opacity: 0, y: -5 }
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className={`font-semibold w-full text-orange-500 hover:text-orange-600 hover:bg-gray-100 px-10 py-2 cursor-pointer
                                            ${isActive? 'bg-gray-100' : ''}
                                            `}
                                        >
                                            {nav.title}
                                        </motion.li>
                                    )
                                }
                            </NavLink>
                            ))}
                        </motion.ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
        </header>
    )
}