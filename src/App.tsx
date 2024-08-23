import Navbar from "./components/Navbar.tsx"
import Welcome from "./components/Welcome.tsx"
import Header from "./components/Header.tsx"
import About from "./components/About.tsx"
import Interview from "./components/Interview.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"

function App() {
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

export default App
