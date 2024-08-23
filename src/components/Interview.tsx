

function Interview () {

	return (
		
		<div className="w-full h-160 bg-gray-200">
			<div className="pt-20 text-center">
				<h2 className="uppercase text-2xl font-bold leading-none tracking-tight text-red-500">
					Interview
				</h2>
				<h1 className="text-5xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-10">
					Fabiola PINEL - RFI
				</h1>
			</div>
			<iframe 
				className="m-auto mt-20 pb-20 w-160 aspect-video flex flex-row justify-center items-center"
				src="https://www.youtube.com/embed/VikQTD4R5gE?si=_nkUKGfLGGzWJbq7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
			></iframe>
		</div>
	)
}

export default Interview;
