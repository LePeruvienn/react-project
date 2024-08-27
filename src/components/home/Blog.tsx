import { Link } from "react-router-dom";

import Card from "./blog/Card.tsx"


function Blog () {

	const cards = [
		{
			image: "img/serros3.jpg",
			heading: "heading 1",
			text: "more details about card 1",
			author: "Fabiola PINEL",
		},
		{
			image: "img/serros3.jpg",
			heading: "heading 2",
			text: "more details about card 2",
			author: "Fabiola PINEL",
		},
		{
			image: "img/serros3.jpg",
			heading: "heading 3",
			text: "more details about card 3",
			author: "Fabiola PINEL",
		},
	];

	return (
		<div className="w-full h-200 bg-white">
			<div className="pt-20 text-center">
				<h2 className="uppercase text-2xl font-bold leading-none tracking-tight text-red-500">
					Blog
				</h2>
				<h1 className="text-5xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-5">
					My Articles
				</h1>
				<div className="flex flex-row justify-center mt-20">

					<Card 
						image={cards[0].image}
						heading={cards[0].heading}
						text={cards[0].text}
						author={cards[0].author}
					/>

					<Card 
						image={cards[1].image}
						heading={cards[1].heading}
						text={cards[1].text}
						author={cards[1].author}
					/>

					<Card 
						image={cards[2].image}
						heading={cards[2].heading}
						text={cards[2].text}
						author={cards[2].author}
					/>
				</div>
				<Link to="/blog">
					<button 
						type="button" 
						className="mx-auto mt-10 text-white text-2xl font-bold bg-red-500 px-20 py-2.5 rounded-xl focus:ring-4 focus:outline-none focus:ring-red-300"
					>
						See More
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Blog;
