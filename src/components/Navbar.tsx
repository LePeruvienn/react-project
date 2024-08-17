
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
				<a href="#" className="text-lg text-grey-darkest hover:text-red-700 ml-10">
					Free
				</a>
			</div>
		</nav>
	)
}

export default Navbar;
