"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import ButtonMain from "./ui/ButtonMain";

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { title: "FEATURES", href: "#features" },
        { title: "PRICING", href: "#pricing" },
        { title: "CONTACT", href: "#contact" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white lg:px-[8vw]">
            <nav className="w-full flex items-center justify-between py-8 px-8 lg:px-16">
                <div className="relative h-6 w-32">
                    <Image
                        src="/images/logo-bookmark.svg"
                        fill
                        alt="logo icon"
                        className="object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link key={item.title} href={item.href} className="text-neutral-very-dark-blue  hover:text-primary-soft-red transition-colors text-[13px]">
                            {item.title}
                        </Link>
                    ))}
                    <button className="border-2 border-primary-soft-red px-6 py-2 rounded-md hover:border-primary-soft-red hover:bg-transparent hover:text-primary-soft-red text-[14px] bg-primary-soft-red text-white font-medium  transition-colors">
						LOGIN
					</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden relative h-4 w-4 cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <Image
                        src={isNavOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
                        fill
                        alt={isNavOpen ? "close icon" : "menu icon"}
                        className="object-contain"
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isNavOpen && (
                <div className="lg:hidden fixed inset-0 bg-neutral-very-dark-blue bg-opacity-95 z-50">
                    <div className="flex flex-col items-center pt-8 px-8">
                        <div className="w-full flex items-center justify-between mb-8">
                            <div className="relative h-6 w-32">
                                <Image
                                    src="/images/logo-bookmark.svg"
                                    fill
                                    alt="logo icon"
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-4 w-4 cursor-pointer" onClick={() => setIsNavOpen(false)}>
                                <Image
                                    src="/images/icon-close.svg"
                                    fill
                                    alt="close icon"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            {navItems.map((item, index) => (
                                <React.Fragment key={item.title}>
                                    <Link href={item.href} className="w-full text-center py-4 text-white font-rubik border-t border-neutral-grayish-blue">
                                        {item.title}
                                    </Link>
                                    {index === navItems.length - 1 && (
                                        <div className="w-full border-t border-neutral-grayish-blue py-4">
                                            <Button  />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="flex items-center space-x-8 mt-8">
                            <Link href="#" aria-label="Facebook">
                                <Image src="/images/icon-facebook.svg" width={24} height={24} alt="Facebook icon" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <Image src="/images/icon-twitter.svg" width={24} height={24} alt="Twitter icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;