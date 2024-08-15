
function Navbar () {

	return (
		<nav className="z-10 fixed top-0 font-sans flex flex-row justify-between py-4 px-52 absolute bg-white shadow w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest hover:text-blue-dark">
					Fabiola PINEL
				</a>
			</div>
			<div>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-2">
					About
				</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-2">
					Books
				</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-2">
					Blog
				</a>
			</div>
		</nav>
	)
}

export default Navbar;
