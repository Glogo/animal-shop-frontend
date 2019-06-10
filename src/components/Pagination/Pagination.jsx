import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// TODO: pagination
export default function Pagination() {
    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li>
                    <a className="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 2">2</a>
                </li>
                <li>
                    <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 86">86</a>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};
