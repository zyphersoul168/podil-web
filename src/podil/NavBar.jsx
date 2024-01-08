// import { useState } from "react";

// const items = ["Log In", "Sign Up"];

// // list items in navbar
// const listItems = items.map((item) => (
//     <li
//         className="text-gray-100 p-3 mx-2 backdrop-blur-sm cursor-pointer rounded hover:bg-zinc-50/50"
//         key={item}
//     >
//         {item}
//     </li>
// ));

// export const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <div className="fixed w-full">
//             <div className="p-3 flex justify-between items-center bg-gray-950">
//                     <div className="flex">
//                         <h1 className="text-2xl font-sans font-extrabold text-gray-100 ml-3">
//                             PODIL
//                         </h1>
//                         <ul className="flex absolute md:relative flex-col md:flex-row text-center top-12 left-0 md:top-0 md:flex text-slate-50 self-center ml-10 gap-x-6">
//                             <li>About</li>
//                             <li>Offerings</li>
//                             <li>Pricing</li>
//                             <li>Partners</li>
//                         </ul>
//                     </div>
//                     <nav className={isOpen ? "flex" : " hidden md:flex"}>
//                         <ul className="flex absolute md:relative flex-col md:flex-row shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">
//                             {listItems}
//                         </ul>
//                     </nav>
//                     <div className="md:hidden">
//                         <button
//                             className="flex justify-center items-center"
//                             onClick={toggleNavbar}
//                         >
//                             <svg
//                                 viewBox="0 0 24 24"
//                                 width="24"
//                                 height="24"
//                                 stroke="#f3f4f6"
//                                 strokeWidth="2"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className={isOpen ? "hidden" : "flex"}
//                             >
//                                 <line x1="3" y1="12" x2="21" y2="12"></line>
//                                 <line x1="3" y1="6" x2="21" y2="6"></line>
//                                 <line x1="3" y1="18" x2="21" y2="18"></line>
//                             </svg>
//                             <svg
//                                 viewBox="0 0 24 24"
//                                 width="24"
//                                 height="24"
//                                 stroke="#f3f4f6"
//                                 strokeWidth="2"
//                                 fill="none"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className={isOpen ? "flex" : "hidden"}
//                             >
//                                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                                 <line x1="6" y1="6" x2="18" y2="18"></line>
//                             </svg>
//                         </button>
//                     </div>
//             </div>
//         </div>
//     );
// };

import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "About", href: "#", current: true },
    { name: "Offerings", href: "#", current: false },
    { name: "Princing", href: "#", current: false },
    { name: "Partners", href: "#", current: false },
];

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const NavBar = () => {
    return (
        <Disclosure as="nav" className="bg-black fixed w-screen z-10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="text-2xl font-sans font-extrabold text-gray-100 ml-3">
                                        PODIL
                                    </h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <p className="text-white hover:bg-amber-600 bg-amber-500 py-2 px-3 text-sm font-medium rounded-md">
                                            Login
                                        </p>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
