import React from 'react';

function Welcome() {

	return (
		<div className="relative w-full z-0">
			<img
				className="h-64 w-full object-cover rounded-md"
				src="src/assets/serros3.jpg"
				alt="Random image"
			/>
			<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
			<div className="absolute inset-0 flex items-center justify-center">
				<h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2>
			</div>
		</div>
	);
}

export default Welcome;
