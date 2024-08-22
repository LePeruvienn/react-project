import React from 'react';

function Welcome() {

	return (
		<div className="relative w-full z-0">
			<img
				className="h-200 w-full object-cover rounded-md"
				src="src/assets/serros3.jpg"
				alt="Random image"
			/>
			<div className="absolute inset-0 bg-black opacity-80"></div>
			<div className="absolute inset-0 flex items-center justify-center -ml-24">
				<img src="src/assets/cover3d.png" className="w-176"/>
				<div className="flex flex-col text-left w-160">
					<h2 className="uppercase font-bold font-sans text-red-500 text-4xl">Last Release</h2>
					<h1 className="my-7 pl-7 text-white text-7xl border-l-4 border-red-500"> Danza entre la Cenizas</h1>
					<p className="font-sans text-white text-lg">Fabiola Pinel's novel reveals the hidden―and most human―side of political violence: the reasons why young people from Lima joined the cause and struggle of the Shining Path. It narrates their dilemmas, challenges, hopes, and disillusions through the youthful face of a woman. From the outskirts of the capital, they progressively commit to the cause while dealing with their everyday lives; they, too, will not escape the horrors they will endure for taking on this existential ideological stance. It offers a perspective that seeks to understand, not justify, and in doing so, helps build bridges between Peruvians.</p>
					<button type="button" className="mt-10 w-1/2 text-white text-xl bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Learn More </button>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
