
function Navbar () {

	return (
		<nav className="font-sans flex flex-row justify-between py-4 px-6 bg-white shadow w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest hover:text-blue-dark">Home</a>
			</div>
			<div>
				<a href="#" className="text-lg text-grey-darkest hover:text-blue-dark ml-2">One</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-blue-dark ml-2">Two</a>
				<a href="#" className="text-lg text-grey-darkest hover:text-blue-dark ml-2">Three</a>
			</div>
		</nav>
	)
}

export default Navbar;
