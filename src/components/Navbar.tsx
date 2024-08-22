
function Navbar () {

	return (
		<nav className="text-white z-10 fixed top-0 font-sans flex flex-row justify-between py-4 px-52 absolute bg-transparent shadow w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest">
					Fabiola PINEL
				</a>
			</div>
			<div>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-10">
					Books
				</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-10">
					Blog
				</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-10">
					About
				</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-10">
					Contact
				</a>
					<button type="button" className="ml-10 text-white text-lg font-bold bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
						Free Excerpt
					</button>
			</div>
		</nav>
	)
}

export default Navbar;
