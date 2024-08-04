"use client";


import { usePathname } from 'next/navigation';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
    const pathname = usePathname();

    // List of paths where you want to hide the header and footer
    const hideHeaderAndFooter = ['/login', '/register',  '/dashboard', '/auth/account-recovery', 'cart'];
    

    const shouldHideHeaderAndFooter = hideHeaderAndFooter.some(path => pathname.startsWith(path)) ||
    pathname === '/sho' || 
    pathname.startsWith('/auth/reset-password/');

    const hideFooterOnly = pathname === '/cart';

    return (
        <div className=" ">
            {/* {!shouldHideHeaderAndFooter && <Header  className="sticky top-0 z-50 bg-white shadow-md"/>} */}
            {!shouldHideHeaderAndFooter && 
            <Header  />}
            
            

            <main className="flex-gro mt-[4.8rem ">
                {children}
            </main>
            {!shouldHideHeaderAndFooter && !hideFooterOnly  && <Footer />}
        </div>
    );
};

export default Layout;
