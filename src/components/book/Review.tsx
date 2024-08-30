
interface Props {
	text: string;
	author: string;
}

function Review ({text, author}: Props) {
	
	return (
		<div className="mx-auto mt-10 text-center">
			<p className="mb-5 text-xl"> 
				<i>
					" {text} "
				</i>
			</p>

			<h3 className="text-2xl font-bold">
				- {author}
			</h3>
		</div>
	)
}

export default Review;
