
function Footer () {

	return (
		<footer class="b-0 bg-gray-900">
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Fabiola PINEL</span>
						</a>
				</div>
				<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">
							Quick Links 
						</h2>
						<ul class="text-gray-500 text-gray-400 font-medium">
							<li class="mb-4">
								<a href="/home" class="hover:underline"> Home </a>
							</li>
							<li class="mb-4">
								<a href="/book" class="hover:underline"> Book </a>
							</li>
							<li class="mb-4">
								<a href="/blog" class="hover:underline"> Blog </a>
							</li>
							<li class="mb-4">
								<a href="/about" class="hover:underline"> About </a>
							</li>
							<li class="mb-4">
								<a href="/contact" class="hover:underline"> Contact </a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
						<ul class="text-gray-400 font-medium">
							<li class="mb-4">
								<a href="#" class="hover:underline ">Facebook</a>
							</li>
							<li>
								<a href="#" class="hover:underline">Twitter</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
						<ul class="text-gray-400 font-medium">
							<li class="mb-4">
								<a href="#" class="hover:underline">Privacy Policy</a>
							</li>
							<li>
								<a href="#" class="hover:underline">Terms &amp; Conditions</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm sm:text-center text-gray-400">
					© 2024 Fabiola PINEL. All Rights Reserved.
				</span>
			</div>
			</div>
		</footer>
	)
}

export default Footer;
