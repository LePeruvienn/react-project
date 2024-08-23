
interface Props {
	image: string;
	heading: string;
	text: string;
}

function Header ({image, heading, text}: Props) {

	return (
		<div className="relative w-full z-0">
			<img
				className="h-72 w-full object-cover rounded-md"
				src={image}
			/>
			<div className="absolute inset-0 bg-black opacity-80"></div>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-left">
				<div className="w-full max-w-screen-sm">
					<h2 className="uppercase mt-7 font-bold font-sans text-red-500 text-3xl"> {heading} </h2>
					<h1 className="mb-7 pb-7 text-white text-6xl border-b-4 border-red-500"> {text} </h1>
				</div>
			</div>
		</div>
	)
}

export default Header;
