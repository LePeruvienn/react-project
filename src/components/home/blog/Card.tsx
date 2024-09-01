
interface Props {
	image: string;
	heading: string;
	text: string;
	author: string;
}

function Card ({image, heading, text, author}: Props) {

	return (
		<div className="mx-10 max-w-sm bg-white border border-gray-200 shadow hover:scale-110 transition">
			<a href="#">
				<img src={image}/>
			</a>
			<div className="p-5">
				<a href="#">
					<h1 className="uppercase mb-2 text-2xl font-bold tracking-tight text-gray-900">
						{heading}
					</h1>
				</a>
				<p className="font-normal text-gray-700">
					{text}
				</p>
				<p className="italic text-sm text-gray-500 mb-5">
					By {author}
				</p>
				<a href="#" className="text-red-500 text-lg underline">
					Read more
				</a>
			</div>
		</div>
	)
}

export default Card;
