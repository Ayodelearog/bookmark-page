import React from "react";

interface ButtonProps {
	text?: string;
	bgColor?: string;
	textColor?: string;
	shadow?: string;
	className?: string;
};

const ButtonMain: React.FC<ButtonProps> = ({ text, bgColor, textColor, shadow, className }) => {
	return (
		<button
			className={`w-fit py-4 px-4 rounded-lg text-[14px] font-rubik font-medium ${bgColor} ${textColor} ${shadow} ${className} `}
		>
			{text ? text : "Get it on Chrome"}
		</button>
	);
};

export default ButtonMain;
