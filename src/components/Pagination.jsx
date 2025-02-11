import { useState } from "react";

const Pagination = ({ items, itemsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;

	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(items.length / itemsPerPage);

	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ol>
				{currentItems.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ol>
		</div>
	);
};
export default Pagination;
