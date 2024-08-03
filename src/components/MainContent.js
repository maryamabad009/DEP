import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContent = () => (
  <div className="col-md-8">
    <article>
      <h2>The Importance of Data Analysis in Modern Business</h2>
      <p>
        In today's fast-paced and technology-driven world, data analysis has become a crucial component
        for the success of modern businesses. It involves the process of collecting, processing, and 
        interpreting data to extract valuable insights that can inform decision-making and drive 
        business growth.
      </p>
      <p>
        Data analysis helps organizations to understand their market, customers, and overall business 
        performance. By analyzing patterns and trends, businesses can make informed decisions, optimize 
        operations, and identify new opportunities. This can lead to increased efficiency, improved 
        customer satisfaction, and higher profitability.
      </p>
      <img 
        srcSet={require('../assets/images/1.png') + " 320w," +
                require('../assets/images/2.png') + " 480w," +
                require('../assets/images/3.jpg') + " 800w"}
        sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
        src={require('../assets/images/3.jpg')} 
        alt="Data Analysis" 
        className="img-fluid w-50" 
      />
      <p>
        There are various tools and techniques used in data analysis, ranging from simple statistical 
        methods to complex machine learning algorithms. These tools help in analyzing large datasets to 
        uncover hidden patterns, correlations, and insights that are not immediately apparent.
      </p>
      <p>
        In conclusion, data analysis is an essential practice for any business looking to stay 
        competitive in the modern market. By leveraging data, companies can make smarter decisions, 
        enhance their strategic planning, and ultimately achieve better results.
      </p>
    </article>
  </div>
);

export default MainContent;
