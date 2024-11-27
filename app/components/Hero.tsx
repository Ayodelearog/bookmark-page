import React from "react";
import Image from "next/image";
import ButtonMain from "./ui/ButtonMain";

const Hero: React.FC = () => {
	return (
		<section className="w-full h-screen lg:h-[90vh] px-4 pt-[15vh] flex flex-col items-center overflow-x-hidden ">
			<div className="w-full relative lg:hidden">
				<div className="w-full relative h-[30vh]">
					<Image src="/images/illustration-hero.svg" fill alt="hero image" />
				</div>

				<div className="w-[100vw] absolute top-14 left-12 z-[-1] h-[24vh] bg-primary-soft-blue rounded-l-full"></div>
			</div>

			<div className="w-full flex flex-col items-center gap-4 mt-12 px-10 lg:hidden">
				<h1 className="text-2xl text-center font-rubik font-medium">
					A Simple Bookmark Manager
				</h1>
				<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik">
					A clean and simple way to organize your favorite websites. Open a new
					browser tab and see your websites load instantly. Try it for free.
				</p>
			</div>

			<div className="flex justify-center items-center w-full gap-4 mt-6 lg:hidden">
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

			{/* Desktop view */}
			<div className="w-full hidden lg:flex items-center justify-between mt-12 px-[8vw]">
				<div className="w-[50%] flex items-center flex-col">
					<div className="w-[100%] flex flex-col items-left gap-4  text-left ">
						<h1 className="text-5xl text-left font-rubik font-medium">
							A Simple Bookmark <br /> Manager
						</h1>
						<p className="text-neutral-grayish-blue text-left text-[14px] font-rubik">
							A clean and simple way to organize your favorite <br /> websites. Open a
							new browser tab and see your websites load <br /> instantly. Try it for
							free.
						</p>
					</div>
					<div className="flex justify-start items-center w-full gap-4 mt-6 ">
						<ButtonMain
							bgColor="bg-primary-soft-blue"
							textColor="text-white"
							text="Get it on Chrome"
							shadow="shadow-md"
							className="border-2 border-primary-soft-blue hover:bg-transparent hover:border-primary-soft-blue hover:text-primary-soft-blue transition-color duration-300 "
						/>
						<ButtonMain
							bgColor="bg-white"
							textColor="text-neutral-very-dark-blue"
							text="Get it on Firefox"
							shadow="shadow-md"
							className="border-2 border-transparent hover:bg-transparent hover:border-neutral-very-dark-blue hover:text-neutral-very-dark-blue transition-color duration-300"
						/>
					</div>
				</div>

				<div className="w-[50%] relative">
					<div className="w-full relative h-[45vh]">
						<Image src="/images/illustration-hero.svg" fill alt="hero image" />
					</div>

					<div className="w-[40vw] absolute top-28 left-[30%] z-[-1] h-[34vh] bg-primary-soft-blue rounded-l-full"></div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
