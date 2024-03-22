import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { TfiAlignJustify } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [Open,setOpen] =useState(false)

    const routes = [
        { path: "/", name: "Home", id: "home" },
        { path: "/about", name: "About", id: "about" },
        { path: "/products/:id", name: "Product Details", id: "product-details" },
        { path: "/contact", name: "Contact Us", id: "contact" },
        { path: "*", name: " Not Found", id: "not-found" }
    ];

    return (
        <nav className='bg-gray-800 text-white p-6'>
           <div className='md:hidden' onClick={() => setOpen(!Open)} >
            {
                Open===true ?<RxCross2></RxCross2>:   <TfiAlignJustify></TfiAlignJustify>
            }

         
           </div>
            <ul className={`md:flex absolute bg-gray-800 px-3 duration-1000 md:static ${Open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route =><Link  key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;