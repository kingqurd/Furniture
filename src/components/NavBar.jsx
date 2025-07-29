import React from "react";
import {useState, useEffect} from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import LOGO from "../assets/images/WRLD-WIDE LOGO.png"; // Adjust the path as necessary


const NavBar = () => {
  const [isOpen, setIsOpen] = useState()
const [isScrolled, setIsScrolled] = useState(false);



 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Living Room', href: '#living-room' },
    { name: 'Dining Room', href: '#dining-room' },
    { name: 'Bedroom', href: '#bedroom' },
    { name: 'Office', href: '#office' },
    { name: 'Sale', href: '#sale' }
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 sticky${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[#111827] italic">
              WRLD-WIDE FURNISH
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-[#111827] italic font-bold group-hover:text-[#111827]/90">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 text-[#111827] ">
            <button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </button>
            <button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#111827] " />
              ) : (
                <Menu className="h-6 w-6 text-[#111827]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border text-white bg-[#111827] italic font-bold">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </button>
                <button variant="ghost" size="icon">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

    // <div>
    //   <div>
    //     <nav  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled
    //       ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
    //       : "bg-transparent"
    //   }`}>
    //       <div className="container flex flex-wrap items-center justify-between mx-auto">
    //         <a href="#" className="flex items-center ">
    //           <span className=" flex item-center self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase italic">
    //             {/* WRLD-WIDE */}
    //             <img
    //               src={LOGO}
    //               alt=""
    //               className="h-20 mr-5 text-[#111827] rounded-lg"
    //             />
    //             <span className="text-[#111827] py-5 font-bold hidden md:inline text-2xl">
    //               WRLD-WIDE FURNISH
    //             </span>
    //           </span>
    //         </a>
    //         <div className="hidden w-full md:block md:w-auto  ">
    //           <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 font-bold">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //                 aria-current="page"
    //               >
    //                 Home
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //               >
    //                 Living Room
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //               >
    //                 Dinning Room 
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //               >
    //                 Bedroom
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //               >
    //                 Office
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pl-3 pr-4 text-[#111827] rounded hover:bg-[#111827] md:hover:bg-transparent md:hover:text-blue-700 dark:text-[#111827] md:dark:hover:text-[#111827]/70"
    //               >
    //                 Scale
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
      
    //   </div>
    // </div>
//   );
// };

// export default NavBar;
