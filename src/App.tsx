import Navbar from "./components/Navbar.tsx"
import Welcome from "./components/Welcome.tsx"
import Header from "./components/Header.tsx"
import Books from "./components/Books.tsx"
import About from "./components/About.tsx"
import Footer from "./components/Footer.tsx"

function App() {
	return (
		<main>
			<Navbar/>
			<Welcome/>
			<Header/>
			<About/>
			<Footer/>
		</main>
	)
}

export default App
