
import Card from "./Card.tsx";

function Articles () {

	const datas = [

		{
			id: 0,
			title: "Article 1",
			image: "img/serros.jpg",
			language: "es",
			author: "Fabiola PINEL",
			date: "02/12/2024",
			summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ullamcorper felis, ac tristique dolor. Sed aliquet ex ut arcu convallis, eget vulputate dui facilisis."
		},
		{
			id: 1,
			title: "Article 1",
			image: "img/serros.jpg",
			language: "es",
			author: "Fabiola PINEL",
			date: "02/12/2024",
			summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ullamcorper felis, ac tristique dolor. Sed aliquet ex ut arcu convallis, eget vulputate dui facilisis."
		},
		{
			id: 2,
			title: "Article 1",
			image: "img/serros.jpg",
			language: "es",
			author: "Fabiola PINEL",
			date: "02/12/2024",
			summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ullamcorper felis, ac tristique dolor. Sed aliquet ex ut arcu convallis, eget vulputate dui facilisis."
		},
		{
			id: 3,
			title: "Article 1",
			image: "img/serros.jpg",
			language: "es",
			author: "Fabiola PINEL",
			date: "02/12/2024",
			summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ullamcorper felis, ac tristique dolor. Sed aliquet ex ut arcu convallis, eget vulputate dui facilisis."
		},
	];

	return (
		<div className="w-full bg-white text-center p-20">
			{
				datas.map ((article) => (
					
					<Card
						key={article.id}
						title={article.title}
						image={article.image}
						language={article.language}
						author={article.author}
						date={article.date}
						summary={article.summary}
					/>
				))
			}
		</div>
	)
}

export default Articles;
