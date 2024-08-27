
// TO DO !!! ACTION FORM

function Form () {

	return (
		<div className="py-32 px-4 mx-auto max-w-screen-md">
			<p className="mb-8 font-bold text-center text-gray-900 text-2xl">
				Got a technical issue? Want to send feedback about a book? Need details about us ? Let us know.
			</p>
			<form action="#" className="space-y-8">
				<div>
					<label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 ">
						Your email
					</label>
					<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@domain.xyz" required/>
				</div>
				<div>
					<label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 ">
						Subject
					</label>
					<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required/>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 ">
						Your message
					</label>
					<textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Write a message ..."></textarea>
				</div>
				<button type="submit" className="text-white text-lg font-bold bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Form;
