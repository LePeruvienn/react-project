
function About () {

	return (
		<div className="flex items-center justify-center w-full h-160 bg-gray-900">
			<div className="grid grid-cols-2 gap-20 p-28 w-full max-w-7xl">
				<div>
					<h2 className="uppercase text-2xl font-bold leading-none tracking-tight text-red-500">
						About the author
					</h2>
					<h1 className="text-5xl text-white font-extrabold inline-block border-b-4 border-b-red-500 pb-10">
						Fabiola PINEL
					</h1>
					<p className="mt-10 text-white text-lg font-medium">
						Fabiola Pinel (Lima, 1973) is an artist, choreographer, and dancer. She has lived in France for over twenty years. She graduated from the National University of San Marcos (UNMSM) in Physical Education, specializing in Dance. She holds a ballet teaching degree in both Peru and France, a psychomotrician diploma from the Ministry of Health in France, and a Master's degree in Disability, Movement, and Adaptation from the University of Paris XI. She currently works in various institutions as a ballet teacher and psychomotrician. She participates in several Latin American associations and cultural projects in France. She made her literary debut with the novel Danza entre cenizas, about the political violence in Lima from 1988 to 1992.
					</p>
				</div>
				<div className="flex items-center justify-center">
					<img className="w-112 rounded-md" src="src/assets/fabiolarfi.jpg" alt="Fabiola Pinel"/>
				</div>
			</div>
		</div>
	)
}

export default About;
