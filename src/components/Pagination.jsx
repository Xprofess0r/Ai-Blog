import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8; // Set the total number of pages (adjustable)

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`mx-1 px-3 py-1 rounded-full text-sm font-semibold ${
            currentPage === i
              ? 'bg-blue-800 text-white'
              : 'text-gray-900 hover:text-purple-600'
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center my-6 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => changePage(currentPage - 1)}
        className="text-gray-900 hover:text-black"
        disabled={currentPage === 1}
      >
        ←
      </button>

      {/* Page Numbers */}
      {currentPage > 1 && <button onClick={() => changePage(1)}>1</button>}
      {currentPage > 3 && <span className="px-2">...</span>}

      {renderPageNumbers().slice(
        Math.max(0, currentPage - 2),
        Math.min(totalPages, currentPage + 1)
      )}

      {currentPage < totalPages - 2 && <span className="px-2">...</span>}
      {currentPage < totalPages && (
        <button onClick={() => changePage(totalPages)}>{totalPages}</button>
      )}

      {/* Next Button */}
      <button
        onClick={() => changePage(currentPage + 1)}
        className="text-gray-900 hover:text-black"
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
