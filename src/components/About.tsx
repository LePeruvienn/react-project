import Navbar from "./general/Navbar.tsx"
import Header from "./general/Header.tsx"
import Footer from "./general/Footer.tsx"

import Main from "./about/Main.tsx"


function About () {

	const image = "img/serros3.jpg";
	const heading = "About";
	const text = "More details about me";

	return (
		<main>
			<Navbar/>
			<Header
				image={image}
				heading={heading}
				text={text}
			/>

			<Main/>

			<Footer/>
		</main>
	)
}

export default About;
