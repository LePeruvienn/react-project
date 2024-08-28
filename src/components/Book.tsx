import Navbar from "./general/Navbar.tsx"
import Header from "./general/Header.tsx"
import Footer from "./general/Footer.tsx"

import Main from "./book/Main.tsx"
import Reviews from "./book/Reviews.tsx"

function Book () {

	const image = "img/serros3.jpg";
	const heading = "Book";
	const text = "Danza entre la cenizas";

	return (
		<main>
			<Navbar/>
			<Header
				image={image}
				heading={heading}
				text={text}
			/>

			<Main/>
			<Reviews/>
			
			<Footer/>
		</main>
	)
}

export default Book;
