
interface Props {

	title: string;
	image: string;
	language: string;
	author: string;
	date: string;
	summary: string;
}

function Card ({title, image, language, author, date, summary}: Props) {

	return (
		<div className="w-200 h-56 m-5 inline-flex rounded-lg shadow-xl hover:scale-105 transition">
			<div className="w-1/2">
				<img 
					className="w-full h-full rounded-l-lg object-cover shadow-xl"
					src={image}
				/>
			</div>

			<div className="p-5 text-left">
				<h1 className="uppercase mb-2 text-2xl font-bold tracking-tight text-gray-900">
					<span> { title } </span>
					<span className="text-sm text-gray-500"> { language } </span>
				</h1>
				<p className="text-lg"> 
					{ summary } 
				</p>
				<h2 className="mt-2 text-gray-500"> 
					By { author } 
				</h2>
				<h3 className="text-gray-500"> 
					{ date } 
				</h3>
			</div>
		</div>
	)
}

export default Card;
