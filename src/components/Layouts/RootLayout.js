import React from "react"; 
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Menu from "./Navbar/Menu";


const RootLayout = () => { 
 
     



    return (
        <>
            <Menu />
            <Outlet/>
            <Footer />
        </>
    )
}

export default  RootLayout;

export function preLoader() 
{
     document.querySelector('body').classList.add('page-in');
     setTimeout(function() {
            document.querySelector('body').classList.remove('page-in');
        }
        , 550);
}