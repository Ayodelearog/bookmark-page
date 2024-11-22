import React from "react";
import Image from "next/image";
import ButtonMain from "./ui/ButtonMain";

const Hero: React.FC = () => {
	return (
		<div className="w-full h-screen px-4 pt-[15vh] flex flex-col items-center overflow-x-hidden">
			<div className="w-full relative">
				<div className="w-full relative h-[30vh]">
					<Image src="/images/illustration-hero.svg" fill alt="hero image" />
				</div>

				<div className="w-[100vw] absolute top-14 left-12 z-[-1] h-[24vh] bg-primary-soft-blue rounded-l-full"></div>
			</div>

			<div className="w-full flex flex-col items-center gap-4 mt-12 px-10">
				<h1 className="text-2xl text-center font-rubik font-medium">A Simple Bookmark Manager</h1>
				<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik">
					A clean and simple way to organize your favorite websites. Open a new
					browser tab and see your websites load instantly. Try it for free.
				</p>
			</div>

			<div className="flex justify-center items-center w-full gap-4 mt-6">
				<ButtonMain
					bgColor="bg-primary-soft-blue"
					textColor="text-white"
					text="Get it on Chrome"
				/>
				<ButtonMain
					bgColor="bg-white"
					textColor="text-neutral-very-dark-blue"
					text="Get it on Firefox"
                    shadow="shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Hero;
