import Navbar from "./general/Navbar.tsx"
import Header from "./general/Header.tsx"
import Footer from "./general/Footer.tsx"

function Blog () {

	const image = "img/serros3.jpg";
	const heading = "Blog";
	const text = "All my articles";

	return (
		<main>
			<Navbar/>
			<Header
				image={image}
				heading={heading}
				text={text}
			/>
			<Footer/>
		</main>
	)
}

export default Blog;
