import React from 'react';
import menu from './data/menu.js';
import MenuItem from './MenuItem.jsx';
const Menu = () => {
	const colors = ['#E8BAD2', '#e1f0fe', '#defef0', '#C6F7E0'];
	return (
		<div className="bg-ghostwhite h-[600px] z-10 w-72 rounded-lg shadow-2xl shadow-primarypurple/10 flex flex-col gap-4 pt-10 pl-8  overflow-scroll scrollbar-hide">
			<h2 className="text-2xl font-bold"> To Go Menu</h2>

			{menu.map((item) => {
				return (
					<MenuItem
						item={item}
						background={colors[Math.floor(Math.random() * colors.length)]}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
