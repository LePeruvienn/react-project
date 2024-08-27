import Navbar from "./general/Navbar.tsx"
import Header from "./general/Header.tsx"
import Footer from "./general/Footer.tsx"

import Form from "./contact/Form.tsx"


function Contact () {

	const image = "img/serros3.jpg";
	const heading = "Contact";
	const text = "Get In Touch";

	return (
		<main>
			<Navbar/>
			<Header
				image={image}
				heading={heading}
				text={text}
			/>
			<Form/>
			<Footer/>
		</main>
	)
}

export default Contact;
