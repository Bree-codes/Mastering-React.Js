import React, { useState } from "react";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                        TheShoeParlor
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-8 font-semibold text-slate-700">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Men</li>
                        <li className="hover:text-blue-600 cursor-pointer">Ladies</li>
                        <li className="hover:text-blue-600 cursor-pointer">Kids</li>
                        <li className="hover:text-blue-600 cursor-pointer">Sneakers</li>
                        <li className="hover:text-blue-600 cursor-pointer">Heels</li>
                    </ul>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <Search size={20} className="text-slate-600 cursor-pointer" />
                        <Heart size={20} className="text-slate-600 cursor-pointer" />
                        <ShoppingCart size={20} className="text-slate-600 cursor-pointer" />

                        {/* Mobile Menu Icon */}
                        <Menu
                            size={25}
                            className="lg:hidden text-slate-600 cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4">
                    <div className="flex justify-end mb-4">
                        <X size={25} className="text-slate-600 cursor-pointer" onClick={toggleMenu} />
                    </div>
                    <ul className="space-y-3 font-semibold text-slate-700">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Men</li>
                        <li className="hover:text-blue-600 cursor-pointer">Ladies</li>
                        <li className="hover:text-blue-600 cursor-pointer">Kids</li>
                        <li className="hover:text-blue-600 cursor-pointer">Sneakers</li>
                        <li className="hover:text-blue-600 cursor-pointer">Heels</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
