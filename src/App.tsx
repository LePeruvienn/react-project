import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import Book from "./components/Book.tsx"
import Blog from "./components/Blog.tsx"
import Contact from "./components/Contact.tsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
			  <Route exact path="/" element={<Home/>} />
			  <Route exact path="/home" element={<Home/>} />
			  <Route exact path="/book" element={<Book/>} />
			  <Route exact path="/about" element={<About/>} />
			  <Route exact path="/blog" element={<Blog/>} />
			  <Route exact path="/contact" element={<Contact/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
