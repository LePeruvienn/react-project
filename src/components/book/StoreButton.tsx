
interface Props {
	name: string;
	type: string;
}

function StoreButton ({name, type}: Props) {

	return (
		<button type="button" className="flex items-center text-white text-xl bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
				<span>
					<b> {name} </b>
				</span>
				<span className="mx-2">
					-
				</span>
				<span>
					<i> {type} </i>
				</span>
		</button>
	)
}

export default StoreButton;
