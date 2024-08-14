
function Welcome () {
	
	return (
		<div className="pt-20 w-full h-fit flex flex-row bg-[url('src/assets/mpdarkbg.webp')] bg-cover bg-blend-darken justify-center">
			<img src="src/assets/cover3d.png" className="w-1/3"/>
			<div className="w-96 flex flex-col justify-center">
				<h2 className="text-white">
					Last realease
				</h2>
				<h1 className="text-white">
					Danza entre la cenezas
				</h1>
				<p className="text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula enim sit amet pellentesque iaculis. Nullam maximus laoreet fringilla. Nunc volutpat rhoncus tempus. Donec volutpat urna non fringilla tincidunt. Sed sagittis dui justo, at mattis velit posuere id.
				</p>
			</div>
		</div>
	)
}

export default Welcome;
