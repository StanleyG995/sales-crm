import { useState, useEffect } from "react";
import type { TableProps } from "./Table.types";
import { FaTrashCan, FaPencil, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { formatDate } from "../../utils/helpers/formatDate";

const Table = ({
  companies,
  onDeleteClick,
  onEditClick,
  toggleSort,
  renderSortArrow,
}: TableProps) => {
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(companies.length / rowsPerPage);

  useEffect(() => console.log(page), [page]);

  const handlePageClick = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) setPage(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      if (
        i === 0 ||
        i === totalPages - 1 ||
        (i >= page - 1 && i <= page + 1)
      ) {
        pages.push(
          <li key={i}>
            <button
              className={i === page ? "table-pagination-control table-pagination-control--active" : "table-pagination-control"}
              onClick={() => handlePageClick(i)}
              aria-current={i === page ? "page" : undefined}
            >
              {i + 1}
            </button>
          </li>
        );
      } else if (
        (i === page - 2 && page > 2) ||
        (i === page + 2 && page < totalPages - 3)
      ) {
        pages.push(<li className='table-pagination-control' key={i}>...</li>);
      }
    }

    return pages;
  };

  return (
    <>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="table-header--button" onClick={() => toggleSort("id")}>
              ID {renderSortArrow("id")}
            </th>
            <th className="table-header--button" onClick={() => toggleSort("companyName")}>
              Name {renderSortArrow("companyName")}
            </th>
            <th>Industry</th>
            <th>Email</th>
            <th>Phone number</th>
            <th className="table-header--button" onClick={() => toggleSort("totalSales")}>
              Total (PLN) {renderSortArrow("totalSales")}
            </th>
            <th>Employee</th>
            <th className="table-header--button" onClick={() => toggleSort("createdAt")}>
              Date {renderSortArrow("createdAt")}
            </th>
          </tr>
        </thead>
        <tbody>
          {companies
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((company) => (
              <tr key={company.id} className="table-row">
                <td title={company.id.toString()}>{company.id}</td>
                <td title={company.companyName}>{company.companyName}</td>
                <td title={company.industry}>{company.industry}</td>
                <td title={company.email}>{company.email}</td>
                <td title={company.phone}>{company.phone}</td>
                <td title={company.totalSales.toString()}>
                  {company.totalSales.toLocaleString("pl-PL")}
                </td>
                <td title={company.assignedEmployee}>{company.assignedEmployee}</td>
                <td title={company.createdAt.toString()}>{formatDate(company.createdAt)}</td>
                <td>
                  <button className="button" onClick={() => onEditClick(company)}>
                    <FaPencil className="button-icon" />
                    Edit
                  </button>
                </td>
                <td>
                  <button className="button button--danger--text" onClick={() => onDeleteClick(company)}>
                    <FaTrashCan className="button-icon" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <nav aria-label="table pagination" className="table-pagination">
        <button className='table-pagination-control' onClick={() => handlePageClick(page - 1)} disabled={page === 0}>
          <FaArrowLeft />
        </button>

        <ul className="table-pagination-numbers">{renderPageNumbers()}</ul>

        <button className='table-pagination-control' onClick={() => handlePageClick(page + 1)} disabled={page === totalPages - 1}>
          <FaArrowRight />
        </button>
      </nav>
    </>
  );
};

export default Table;