import { useState } from "react";
import { useTranslation } from "react-i18next";

import FranceFlag from "./flags/France.tsx";
import SpainFlag from "./flags/Spain.tsx";
import UkFlag from "./flags/Uk.tsx";


function Languages () {

	// il18n Setup
	const { i18n } = useTranslation ();
	// Chaging language function
	const handleLanguageChange = (lng: string) => {

		i18n.changeLanguage (lng);
	};

	// Setting language list
	const languages = [

		{
			code: "en",
			elt: <UkFlag/>
		},
		{
			code: "es",
			elt: <SpainFlag/>
		},
		{
			code: "fr",
			elt: <FranceFlag/>
		},
	];

	// State for dropdown
	const [dropdownOpen, setDropdownOpen] = useState (false);

	// Toogle dropdown function
	const toggleDropdown = () => {

		setDropdownOpen (!dropdownOpen);
	};

	return (
		<div>
			<button 
				className="inline-flex items-center" 
				type="button"
				onClick={toggleDropdown}
			> 
				{i18n.language}
				<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
				</svg>
			</button>
			{dropdownOpen && (
				<div className="absolute z-10 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow">
					<ul className="p-2">
						{ languages.map ((lang) => (
							<li 
								key={ lang.code }
								onClick={() => (handleLanguageChange (lang.code))}
							>
								{ lang.elt }
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Languages;
