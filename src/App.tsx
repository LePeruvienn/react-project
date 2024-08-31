import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './i18n.ts'; 

import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import Book from "./components/Book.tsx"
import Blog from "./components/Blog.tsx"
import Contact from "./components/Contact.tsx"

function App() {
	return (
		<BrowserRouter basename="/react-project">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/home" element={<Home/>} />
				<Route path="/book" element={<Book/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/blog" element={<Blog/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
