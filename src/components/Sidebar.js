import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => (
  <div className="col-md-4">
    <aside className="p-4 bg-light rounded">
      <h2>Resources</h2>
      <p>Explore these valuable resources to enhance your understanding of data analysis:</p>
      <ul className="list-unstyled">
        <li className="mb-3">
          <h5>Books</h5>
          <ul>
            <li><a href="https://example.com/book1" target="_blank" rel="noopener noreferrer">Data Science for Business</a> by Foster Provost and Tom Fawcett</li>
            <li><a href="https://example.com/book2" target="_blank" rel="noopener noreferrer">Python for Data Analysis</a> by Wes McKinney</li>
          </ul>
        </li>
        <li className="mb-3">
          <h5>Online Courses</h5>
          <ul>
            <li><a href="https://example.com/course1" target="_blank" rel="noopener noreferrer">Data Analysis with Python</a> on Coursera</li>
            <li><a href="https://example.com/course2" target="_blank" rel="noopener noreferrer">Statistics for Data Science and Business Analysis</a> on Udemy</li>
          </ul>
        </li>
        <li className="mb-3">
          <h5>Tools</h5>
          <ul>
            <li><a href="https://example.com/tool1" target="_blank" rel="noopener noreferrer">Pandas</a> - Python Data Analysis Library</li>
            <li><a href="https://example.com/tool2" target="_blank" rel="noopener noreferrer">Tableau</a> - Data Visualization Tool</li>
          </ul>
        </li>
        <li className="mb-3">
          <h5>Blogs</h5>
          <ul>
            <li><a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">Towards Data Science</a></li>
            <li><a href="https://example.com/blog2" target="_blank" rel="noopener noreferrer">DataCamp Blog</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
);

export default Sidebar;
