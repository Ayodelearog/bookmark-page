import React from "react";
import EmailInput from "./ui/EmailInput";

const UpToDate = () => {
	return (
		<section className="w-full px-10 py-12 mt-12 bg-primary-soft-blue">
			<div className="w-full flex flex-col items-center gap-4  ">
				<p className="text-white uppercase text-rubiks text-center text-[14px] font-rubik tracking-wide">
					35,000+ already joined
				</p>

				<h2
					id="Downloads-heading"
					className="text-xl text-center font-rubik font-medium text-white lg:hidden"
				>
					Stay up-to-date with what we&apos;re doing
				</h2>
				<h2
					id="Downloads-heading"
					className="text-xl text-center font-rubik font-medium text-white hidden lg:block"
				>
					Stay up-to-date with what <br /> we&apos;re doing
				</h2>
			</div>

            <div className="w-full mt-6">
                <EmailInput />
                

            </div>
		</section>
	);
};

export default UpToDate;
