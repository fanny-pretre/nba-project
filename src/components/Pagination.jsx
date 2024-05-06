import { useState } from "react";

import "./styles/Pagination.scss";

function Pagination({ nPages, page, setPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  return (
    <nav className="pagination__nav">
      <ul>
        <li>
          <svg
            onClick={goToPrevPage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="button__svg__nav"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </li>

        <ol className="stepper">
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              type="button"
              onClick={() => setPage(pgNumber)}
              className={`${page === pgNumber ? "active" : ""} `}
            ></li>
          ))}
        </ol>

        <li>
          <svg
            onClick={goToNextPage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="button__svg__nav"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
