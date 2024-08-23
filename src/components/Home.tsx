import Navbar from "./home/Navbar.tsx"
import Welcome from "./home/Welcome.tsx"
import Header from "./home/Header.tsx"
import About from "./home/About.tsx"
import Interview from "./home/Interview.tsx"
import Contact from "./home/Contact.tsx"
import Footer from "./home/Footer.tsx"

function Home () {

	return (
		<main>
			<Navbar/>
			<Welcome/>
			<Header/>
			<About/>
			<Interview/>
			<Contact/>
			<Footer/>
		</main>
	)
}

export default Home;
