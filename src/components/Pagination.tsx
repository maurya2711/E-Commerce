import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-6 py-8">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center px-4 h-10 text-sm font-medium transition-colors border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors border border-gray-200 rounded-md hover:bg-gray-100 ${
            currentPage === index + 1 ? "bg-gray-200" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center px-4 h-10 text-sm font-medium transition-colors border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
