import { useRef } from 'react';

import Review from "./Review.tsx"


function Reviews () {

	const datas = [
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius velit id magna viverra malesuada. Integer gravida dui vel metus feugiat congue. Nulla facilisi. Sed et viverra dui. Pellentesque sagittis enim nibh, nec tincidunt velit condimentum vitae. Sed ut velit nec arcu ultricies rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",

			author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius velit id magna viverra malesuada. Integer gravida dui vel metus feugiat congue. Nulla facilisi. Sed et viverra dui. Pellentesque sagittis enim nibh, nec tincidunt velit condimentum vitae. Sed ut velit nec arcu ultricies rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",

			author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
	];

	// Carousel
	
	const carouselRef = useRef (document.createElement("div"));

	const carouselLeft = () => {
		carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
	};

	const carouselRight = () => {
		carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
	};

	return (

		<div className="w-full h-128 bg-gray-200">
			<div className="pt-20 text-center">
				<h2 className="uppercase text-2xl font-bold leading-none tracking-tight text-red-500">
					What readers say
				</h2>
				<h1 className="text-5xl text-gray-900 font-extrabold inline-block border-b-4 border-b-red-500 pb-5">
					Reviews
				</h1>
			</div>

			<div className="flex flex-row justify-center items-center">

				<svg 
					className="mx-5 transform -scale-x-100 fill-current text-red-500 cursor-pointer" 
					onClick={carouselLeft}
					width="24" height="24" viewBox="0 0 24 24"
				>
					<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
				</svg>

				<div 
					ref={carouselRef}
					className="w-1/2 overflow-hidden flex flex-row"
				>
					{datas.map((data, index) => (
						<div className="flex-shrink-0 w-full px-4" key={index}>
							<Review text={data.text} author={data.author} />
						</div>
					))}
				</div>

				<svg 
					className="mx-5 fill-current text-red-500 cursor-pointer" 
					onClick={carouselRight}
					width="24" height="24" viewBox="0 0 24 24"
				>
					<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
				</svg>

			</div>
		</div>
	)
}

export default Reviews;
