import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<section className="w-full bg-neutral-very-dark-blue flex flex-col lg:flex-row gap-8 items-center py-8 lg:px-[12vw]">
			<div className="relative h-6 w-32">
				<Image
					src="/images/logo-bookmark.svg"
					fill
					alt="logo icon"
					className="object-contain "
				/>
			</div>

			<div className="w-full h-fit flex flex-col lg:flex-row items-center gap-4 px-8 ">
				<p className="text-[14px] text-neutral-grayish-blue font-regular font-rubik hover:text-primary-soft-red cursor-pointer transition-colors duration-300">
					FEATURES
				</p>

				<p className="text-[14px] text-neutral-grayish-blue font-regular font-rubik hover:text-primary-soft-red cursor-pointer transition-colors duration-300">
					PRICING
				</p>

				<p className="text-[14px] text-neutral-grayish-blue font-regular font-rubik hover:text-primary-soft-red cursor-pointer transition-colors duration-300">
					CONTACT
				</p>
			</div>

			<div className="w-fit flex items-center gap-6 px-8 ">
				<div className="relative h-6 w-6 cursor-pointer">
					<Image
						src="/images/icon-facebook.svg"
						fill
						alt="facebook icon"
						className="object-contain hover:bg-primary-soft-red transition-colors duration-300"
					/>
				</div>

				<div className="relative h-6 w-6 ml-auto cursor-pointer">
					<Image
						src="/images/icon-twitter.svg"
						fill
						alt="twitter icon"
						className="object-contain hover:bg-primary-soft-red transition-colors duration-300"
					/>
				</div>
			</div>
		</section>
	);
};

export default Footer;
