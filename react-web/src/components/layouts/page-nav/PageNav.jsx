import React from 'react';
import './PageNav.scss'

export default props => (
    <nav aria-label="Page navigation example">
        <ul className="page-nav-list pagination pagination-circle pg-blue">
            <li className={`page-item ${ props.page === 1 ? 'disabled' : '' }`}>
                <a className="page-link" aria-label="Previous" onClick={ () => props.prevPage() }>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link">{ props.page }</a></li>
            <li className="page-item">
                <a className="page-link" aria-label="Next" onClick={ () => props.nextPage() } >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
);