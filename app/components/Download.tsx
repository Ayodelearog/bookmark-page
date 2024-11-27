import React from "react";
import Image from "next/image";
import ButtonMain from "./ui/ButtonMain";

interface CardContent {
	id: number;
	image: string;
	heading: string;
	description: string;
	buttonText: string;
}

const cardData: CardContent[] = [
	{
		id: 1,
		image: "/images/logo-chrome.svg",
		heading: "Add to Chrome",
		description: "Minimum version 62",
		buttonText: "Add & Install Extension",
	},
	{
		id: 2,
		image: "/images/logo-firefox.svg",
		heading: "Add to Firefox",
		description: "Minimum version 55",
		buttonText: "Add & Install Extension",
	},
	{
		id: 3,
		image: "/images/logo-opera.svg",
		heading: "Add to Opera",
		description: "Minimum version 46",
		buttonText: "Add & Install Extension",
	},
];

const Download: React.FC = () => {
	return (
		<section className="w-full px-4 mt-14 pb-8 flex flex-col items-center">
			<div className="w-full flex flex-col items-center gap-4 mt-12 px-10">
				<h2
					id="Downloads-heading"
					className="text-xl lg:text-2xl text-center font-rubik font-medium"
				>
					Download the extension
				</h2>
				<p className="text-neutral-grayish-blue lg:hidden text-center text-[14px] font-rubik">
					We&apos;ve got more browsers in the pipeline. Please do let us know if
					you&apos;ve got a favorite you&apos;d like us to prioritize.
				</p>

				<p className="text-neutral-grayish-blue hidden lg:block text-center text-[14px] font-rubik">
					We&apos;ve got more browsers in the pipeline. Please do let us know if <br />
					you&apos;ve got a favorite you&apos;d like us to prioritize.
				</p>
			</div>

			<div className="w-full flex flex-col gap-4 items-center mt-8 lg:flex-row lg:px-[15vw] lg:gap-8 ">
				{cardData.map((card) => {
					return (
						<div
							className={`w-[80vw] rounded-2xl shadow-md flex    flex-col items-center py-6  pt-8 gap-6 ${card.id === 2 ? 'mt-14': card.id === 3 ? 'mt-28' : ''}`}
							key={card.id}
						>
							<div className="w-24 h-24 relative">
								<Image
									src={card.image}
									fill
									alt="chrome logo"
									className="object-contain"
								/>
							</div>

							<div className="text-center ">
								<h2 className="text-lg text-center font-rubik font-medium">
									{card.heading}
								</h2>
								<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik">
									{card.description}
								</p>
							</div>

							<div className="w-full px-2 py-4 flex justify-center border-t-[6px] border-dotted border-spacing-12 rounded-b-lg">
								<ButtonMain
									text={card.buttonText}
									bgColor="bg-primary-soft-blue"
									textColor="text-white"
									shadow="sm"
									className="border-2 border-primary-soft-blue hover:bg-transparent hover:text-primary-soft-blue hover:border-primary-soft-blue transition-colors duration-300 px-12"
								/>
							</div>
						</div>
					);
				})}
			</div>

			
		</section>
	);
};

export default Download;
