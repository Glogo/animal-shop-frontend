import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function Pagination({ totalPages, page }) {
    const pages = [];

    for (let i = 1; i <= totalPages; i += 1) {
        const classes = classNames('pagination-link button', {
            'is-current': i === page,
        });

        pages.push((
            <li key={i}>
                <Link
                    to={`/products?page=${i}`}
                    className={classes}
                >{i}
                </Link>
            </li>
        ));
    }

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {pages}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    // itemsPerPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};
