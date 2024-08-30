

function Interview () {

	return (
		
		<div className="w-full h-200 bg-gray-200 mx-auto">
			<div className="pt-20 text-center">
				<h2 className="uppercase text-2xl font-bold text-red-500">
					Interview
				</h2>
				<h1 className="text-5xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-5">
					Danza entre cenizas - RFI
				</h1>
			</div>
			<iframe 
				className="m-auto mt-10 w-232 aspect-video flex flex-row justify-center items-center"
				src="https://www.youtube.com/embed/VikQTD4R5gE?si=_nkUKGfLGGzWJbq7" title="YouTube video player" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
			></iframe>
		</div>
	)
}

export default Interview;
