import React from "react";

type ButtonProps = {
	text?: string;
	bgColor?: string;
	textColor?: string;
	shadow?: string;
};

const ButtonMain = ({ text, bgColor, textColor, shadow }: ButtonProps) => {
	return (
		<button
			className={`w-fit py-4 px-4 rounded-lg text-[14px] font-rubik font-medium ${bgColor} ${textColor} ${shadow} `}
		>
			{text ? text : "Get it on Chrome"}
		</button>
	);
};

export default ButtonMain;
