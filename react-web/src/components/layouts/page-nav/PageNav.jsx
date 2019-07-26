import React from 'react';
import './PageNav.scss'

export default props => (
    <nav aria-label="Page navigation example">
        <ul className="page-nav-list pagination pagination-circle pg-blue">
            <li className="page-item disabled"><a className="page-link">First</a></li>
            <li className="page-item disabled">
                <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="page-item active"><a className="page-link">1</a></li>
            <li className="page-item"><a className="page-link">2</a></li>
            <li className="page-item"><a className="page-link">3</a></li>
            <li className="page-item"><a className="page-link">4</a></li>
            <li className="page-item"><a className="page-link">5</a></li>
            <li className="page-item">
                <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link">Last</a></li>
        </ul>
    </nav>
);