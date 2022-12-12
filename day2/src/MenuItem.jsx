import React from 'react';

const MenuItem = ({ item, background }) => {
	return (
		<div
			className="w-full h-36 rounded-l-lg flex justify-around relative mt-5 pb-4 overflow-visible"
			style={{ backgroundColor: background }}
		>
			<img
				src={item.image}
				alt={item.item}
				className="h-28 w-28 rounded-full absolute -top-5 -left-5"
			/>
			<div className="flex z-20 flex-col gap-1 w-3/4 ml-24 mt-2 overflow-visible p-2">
				<p className="text-sm">{item.item}</p>
				<h2 className="font-bold text-2xl">{item.price}</h2>
				<button className="bg-primarypurple text-xs rounded-full px-4 py-1 text-ghostwhite  absolute top-[100px] right-16">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default MenuItem;
