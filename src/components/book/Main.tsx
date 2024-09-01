
import StoreButton from "./StoreButton.tsx"


function Main () {

	return (
		
		<div className="w-3/4 mx-auto py-20 flex flex-row justify-center">

			<div className="w-1/2 flex flex-col items-center">
				<img src="img/cover3d.png"/>
				<h2 className="uppercase -mt-10 p-7 text-center text-gray-900 text-3xl font-bold border-t-4 border-red-500">
					Buy Online
				</h2>

				<StoreButton 
					name="Amazon" 
					type="eBook"
					link="https://www.amazon.com/-/es/Fabiola-PINEL-ebook/dp/B0BRQSWK4V"
				/>
				<StoreButton 
					name="El Inti" 
					type="Paper Book"
					link="https://www.boutique-peruvienne.com/ecrivains-peruviens-de-france/danza-entre-cenizas-fabiola-pinel-ed-apogeo.html"
				/>

			</div>

			<div className="w-1/2"> 
				<div className="my-7 pl-7 border-l-4 border-red-500">
					<h1 className="my-5 text-gray-900 text-8xl">
						Danza entre Cenizas
					</h1>
					<p className="text-gray-900 text-2xl">
						<i>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius velit id magna viverra malesuada. Integer gravida dui vel metus feugiat congue.
						</i>
					</p>
				</div>

				<p className="my-5 text-gray-900 text-xl font-sans font-bold">
					Fabiola Pinel's novel reveals the hidden―and most human―side of political violence: the reasons why young people from Lima joined the cause and struggle of the Shining Path. It narrates their dilemmas, challenges, hopes, and disillusions through the youthful face of a woman. From the outskirts of the capital, they progressively commit to the cause while dealing with their everyday lives; they, too, will not escape the horrors they will endure for taking on this existential ideological stance. It offers a perspective that seeks to understand, not justify, and in doing so, helps build bridges between Peruvians.
				</p>

				<p className="my-5 font-sans text-gray-900 text-xl">
					Fabiola Pinel's novel reveals the hidden―and most human―side of political violence: the reasons why young people from Lima joined the cause and struggle of the Shining Path. It narrates their dilemmas, challenges, hopes, and disillusions through the youthful face of a woman. From the outskirts of the capital, they progressively commit to the cause while dealing with their everyday lives; they, too, will not escape the horrors they will endure for taking on this existential ideological stance. It offers a perspective that seeks to understand, not justify, and in doing so, helps build bridges between Peruvians.
				</p>

				<p className="my-5 font-sans text-gray-900 text-xl">
					Fabiola Pinel's novel reveals the hidden―and most human―side of political violence: the reasons why young people from Lima joined the cause and struggle of the Shining Path. It narrates their dilemmas, challenges, hopes, and disillusions through the youthful face of a woman. From the outskirts of the capital, they progressively commit to the cause while dealing with their everyday lives; they, too, will not escape the horrors they will endure for taking on this existential ideological stance. It offers a perspective that seeks to understand, not justify, and in doing so, helps build bridges between Peruvians.
				</p>
			</div>
		</div>
	)
}

export default Main;
