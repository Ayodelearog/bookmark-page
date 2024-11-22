"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
	return (
		<header className="w-full fixed top-0 left-0 z-50 ">
			<nav className={`w-full flex items-center py-8 px-8 fixed top-0 left-0 z-50 ${ isNavOpen ? "opacity-0 invisible" : "opacity-100 visible"}`}>
				<div className="relative h-6 w-32">
					<Image
						src="/images/logo-bookmark.svg"
						fill
						alt="logo icon"
						className="object-contain"
					/>
				</div>

				<div className="relative h-4 w-4 ml-auto cursor-pointer" onClick={()=> setIsNavOpen(true)}>
					<Image
						src="/images/icon-hamburger.svg"
						fill
						alt="logo icon"
						className="object-contain"
					/>
				</div>
			</nav>

			{/* open nav */}
			{isNavOpen && 
			
			<nav className={`w-full h-screen flex flex-col items-center bg-neutral-very-dark-blue opacity-95 pb-8 transition-opaciy duration-300 ease-in-out lg:hidden ${ isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
				<div className="w-full flex items-center py-8 px-8">
					<div className="relative h-6 w-32">
						<Image
							src="/images/logo-bookmark.svg"
							fill
							alt="logo icon"
							className="object-contain "
						/>
					</div>

					<div className="relative h-4 w-4 ml-auto cursor-pointer"onClick={()=> setIsNavOpen(false)}>
						<Image
							src="/images/icon-close.svg"
							fill
							alt="logo icon"
							className="object-contain"
						/>
					</div>
				</div>

                <div className="w-full h-fit flex flex-col px-8 ">
                    <div className="w-full flex items-center justify-center px-4 py-4 border-t border-neutral-grayish-blue  "><p className="text-body text-white font-regular font-rubik ">FEATURES</p></div>
                    <div className="w-full flex items-center justify-center px-4 py-4 border-t border-neutral-grayish-blue  "><p className="text-body text-white font-regular font-rubik ">PRICING</p></div>
                    <div className="w-full flex items-center justify-center px-4 py-4 border-t border-neutral-grayish-blue  "><p className="text-body text-white font-regular font-rubik ">CONTACT</p></div>
                    <div className="w-full flex items-center justify-center  py-4 border-t border-neutral-grayish-blue  "><Button /></div>

                </div>

                <div className="w-fit flex items-center gap-6 py-8 px-8 mt-auto">
					<div className="relative h-6 w-6">
						<Image
							src="/images/icon-facebook.svg"
							fill
							alt="facebook icon"
							className="object-contain "
						/>
					</div>

					<div className="relative h-6 w-6 ml-auto cursor-pointer"onClick={()=> setIsNavOpen(false)}>
						<Image
							src="/images/icon-twitter.svg"
							fill
							alt="twitter icon"
							className="object-contain"
						/>
					</div>
				</div>
			</nav>
			}
		</header>
	);
};

export default Navbar;
