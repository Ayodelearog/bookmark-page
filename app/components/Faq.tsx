"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonMain from "./ui/ButtonMain";

interface FaqComponent {
	id: number;
	question: string;
	icon: string;
	answer: string;
}

const faqDataArray: FaqComponent[] = [
	{
		id: 1,
		question: "What is Bookmark?",
		icon: "/images/icon-arrow.svg",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis explicabo eum hic laboriosam fugit illo tempore exercitationem, quaerat, eaque at repudiandae ullam debitis placeat beatae fuga recusandae quia excepturi, quidem sapiente? Quos earum eligendi repellat adipisci optio quaerat ullam voluptatem illum. Aut, adipisci ipsum. Explicabo velit similique veniam aspernatur quos.",
	},
	{
		id: 2,
		question: "How can I request a new browser?",
		icon: "/images/icon-arrow.svg",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus.",
	},
	{
		id: 3,
		question: "Is there a mobile app?",
		icon: "/images/icon-arrow.svg",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis explicabo eum hic laboriosam fugit illo tempore exercitationem, quaerat, eaque at repudiandae ullam debitis placeat beatae fuga recusandae quia excepturi, quidem sapiente? Quos earum eligendi repellat adipisci optio quaerat ullam voluptatem illum. Aut, adipisci ipsum. Explicabo velit similique veniam aspernatur quos.",
	},
	{
		id: 4,
		question: "What about other Chromium broswers?",
		icon: "/images/icon-arrow.svg",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis explicabo eum hic laboriosam fugit illo tempore exercitationem, quaerat, eaque at repudiandae ullam debitis placeat beatae fuga recusandae quia excepturi, quidem sapiente? Quos earum eligendi repellat adipisci optio quaerat ullam voluptatem illum. Aut, adipisci ipsum. Explicabo velit similique veniam aspernatur quos.",
	},
];

const Faq: React.FC = () => {
	const [openId, setOpenId] = useState<number | null>(null);

	const toggleFaq = (faqId: number) => {
		setOpenId(openId === faqId ? null : faqId);
	};

	return (
		<section className="px-4 mt-12 pb-8 flex flex-col items-center ">
			<div className="w-full flex flex-col items-center gap-4 mt-12 px-10">
				<h2
					id="Downloads-heading"
					className="text-xl text-center font-rubik font-medium"
				>
					Frequently Asked Questions
				</h2>
				<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik lg:hidden">
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<p className="text-neutral-grayish-blue text-center text-[14px] font-rubik hidden lg:block">
					Here are some of our FAQs. If you have any other questions <br /> you'd like
					answered please feel free to email us.
				</p>
			</div>

			<div className="w-full mt-8 px-4 lg:px-[35vw] ">
				{faqDataArray.map((faqItem) => (
					<div
						className=" py-2  border-b border-b-neutral-grayish-blue border-opacity-30"
						key={faqItem.id}
					>
						<button
							className="w-full flex items-center justify-between cursor-pointer py-2 "
							onClick={() => toggleFaq(faqItem.id)}
						>
							<span className="font-rubik text-[14px] text-neutral-very-dark-blue font-regular hover:text-primary-soft-red transition-colors duration-300">
								{faqItem.question}
							</span>

							<div className="w-4 h-4 relative">
								<Image
									src={faqItem.icon}
									fill
									alt="caret icon"
									className={`object-contain transform transition-transform duration-500 ${
										openId === faqItem.id ? "rotate-180" : ""
									}`}
								/>
							</div>
						</button>

						{openId === faqItem.id && (
							<div
								className={`overflow-y-scroll transition-[max-height] duration-300 ease-in-out ${
									faqItem.id ? "max-h-40" : "max-h-0"
								}`}
							>
								<p className="py-4 font-rubik text-[12px] text-neutral-grayish-blue">
									{faqItem.answer}
								</p>
							</div>
						)}
					</div>
				))}
			</div>

			<div className="mt-8">
				<ButtonMain
					text="More Info"
					textColor="text-white"
					bgColor="bg-primary-soft-blue"
					shadow="shadow-sm"
				/>
			</div>
		</section>
	);
};

export default Faq;
