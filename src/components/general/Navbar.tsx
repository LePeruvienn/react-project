import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Languages from "./Languages.tsx";


function Navbar () {

	const { t } = useTranslation ();

	return (
		<nav className="text-white z-10 fixed top-0 font-sans flex flex-row justify-between py-4 px-52 absolute bg-transparent shadow w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest">
					Fabiola PINEL
				</a>
			</div>
			<div className="w-120 flex flex-row justify-between items-center">
				<NavLink
					to="/home"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					{ t ("home") }
				</NavLink>
				
				<NavLink
					to="/book"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					{ t ("book") }
				</NavLink>

				<NavLink
					to="/blog"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					{ t ("blog") }
				</NavLink>

				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					{ t ("about") }
				</NavLink>

				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					{ t ("contact") }
				</NavLink>

				<button type="button" className="text-white text-lg font-bold bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
					Free Excerpt
				</button>

				<Languages/>

			</div>
		</nav>
	)
}

export default Navbar;
