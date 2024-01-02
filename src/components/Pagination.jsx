

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=" flex justify-center mt-8 py-8">
      <ul className="pagination flex space-x-2 items-center">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 px-3 py-2 rounded-l cursor-pointer"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a
              onClick={() => paginate(number)}
              href="#!"
              className={`page-link px-3 py-2 rounded cursor-pointer ${
                currentPage === number ? "bg-orange-500 text-white" : "bg-gray-300"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            className="bg-gray-300 px-3 py-2 rounded-r cursor-pointer"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
