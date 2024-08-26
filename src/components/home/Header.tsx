
function Header () {

	return (
		<div className="w-full h-160 bg-white flex flex-row justify-around items-center">
			<div>
				<h2 className="uppercase text-4xl font-bold leading-none tracking-tight text-red-500">
					Fabiola PINEL
				</h2>
				<h1 className="text-6xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-7">
					Artist, Dancer & Writer
				</h1>
				<p className="mt-10 text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className="z-50 w-136 bg-white flex flex-col justify-center text-center shadow-2xl">
				<div className="w-80 mx-auto mt-10">
					<h2 className="uppercase text-2xl font-bold leading-none tracking-tight text-red-500">
						Start Reading Now
					</h2>
					<h1 className="uppercase text-5xl text-gray-900 font-extrabold">
						Get 1 Free Chapter
					</h1>
				</div>
				<img 
					src="src/assets/cover3dTab.png"
					className="w-136 mx-auto"
				/>
				<button 
					type="button" 
					className="uppercase mx-auto mb-10 text-white text-2xl font-bold bg-red-500 px-20 py-2.5 rounded-xl focus:ring-4 focus:outline-none focus:ring-red-300"
				>
					Read Now
				</button>
			</div>
		</div>
	)
}

export default Header;
