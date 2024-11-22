"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TabContent {
	id: number;
	title: string;
	image: string;
	heading: string;
	description: string;
}

const tabData: TabContent[] = [
	{
		id: 1,
		title: "Simple Bookmarking",
		image: "/images/illustration-features-tab-1.svg",
		heading: "Bookmark in one click",
		description:
			"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
	},
	{
		id: 2,
		title: "Speedy Searching",
		image: "/images/illustration-features-tab-2.svg",
		heading: "Intelligent search",
		description:
			"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
	},
	{
		id: 3,
		title: "Easy Sharing",
		image: "/images/illustration-features-tab-3.svg",
		heading: "Share your bookmarks",
		description:
			"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
	},
];

const Features: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const handleTabChange = (tabId: number) => {
		setActiveTab(tabId);
	};

	return (
		<section className="w-full h-fit pb-16" aria-labelledby="features-heading ">
			<div className="w-full flex flex-col items-center gap-4 px-10">
				<h2
					id="features-heading"
					className="text-xl text-center font-rubik font-medium"
				>
					Features
				</h2>
				<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik">
					Our aim is to make it quick and easy for you to access your favorite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>

			<div className="w-full h-fit flex flex-col px-8 mt-10">
				<div
					role="tablist"
					aria-label="Feature tabs"
					className="w-full flex flex-col items-center justify-center border-b border-b-neutral-grayish-blue border-opacity-50 "
				>
					{tabData.map((tab) => (
						<button
							key={tab.id}
							role="tab"
							aria-selected={activeTab === tab.id}
							aria-controls={`tab-panel-${tab.id}`}
							id={`tab-${tab.id}`}
							className={`w-full text-body border-t border-t-neutral-grayish-blue border-opacity-50 text-neutral-grayish-blue font-regular font-rubik  
                flex justify-center
                hover:text-black focus:outline-none `}
							onClick={() => handleTabChange(tab.id)}
						>
							<div
								className={`py-4 w-fit ${
									activeTab === tab.id
										? "border-b-4 border-b-red-400  font-regular text-black"
										: ""
								}`}
							>
								{tab.title}
							</div>
						</button>
					))}
				</div>
			</div>

			{tabData.map((tab) => (
				<div
					key={tab.id}
					role="tabpanel"
					id={`tab-panel-${tab.id}`}
					aria-labelledby={`tab-${tab.id}`}
					hidden={activeTab !== tab.id}
					className="mt-16"
				>
					<div className="w-full relative mt-8">
						<div className="w-[80vw] relative h-[24vh] m-auto">
							<Image
								src={tab.image}
								fill
								alt={`${tab.title} illustration`}
								sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="w-[100vw] absolute top-10 right-16 z-[-1] h-[24vh] bg-primary-soft-blue rounded-r-full"></div>
					</div>

					<div className="w-full flex flex-col items-center gap-4 mt-20 px-10">
						<h3 className="text-2xl text-center font-rubik font-medium">
							{tab.heading}
						</h3>
						<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik">
							{tab.description}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Features;
