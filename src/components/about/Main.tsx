import { useTranslation } from 'react-i18next';

function Main () {

	const { t } = useTranslation ();

	return (
		<div className="w-full h-auto py-20 bg-white">
			<div className="w-2/3 mx-auto">
				<h2 className="uppercase text-3xl font-bold text-red-500">
					About
				</h2>
				<h1 className="mb-5 text-7xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-5">
					Fabiola PINEL
				</h1>
					<p className="text-xl my-5">			
						{ t ("about_p1") }
					</p>
					<p className="text-xl my-5">			
						{ t ("about_p2") }
					</p>
					<p className="text-xl my-5">			
						{ t ("about_p3") }
					</p>
			</div>
		</div>
	)
}

export default Main;
