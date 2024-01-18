import React from 'react';
import './TopSearch.css';

function TopSearch() {
  const topSearchCategories = [
    { category: 'Top Searches', keywords: ['hoodie', 'phone', 'shoe', 'laptop'] },
    { category: 'Car & Property', keywords: ['Mobil', 'Peralatan Mobil'] },
    { category: 'Fashion', keywords: ['Kemeja Pria', 'Jam Tangan'] },
  ];

  return (
    <div>
      {topSearchCategories.map((category, index) => (
        <div key={index} className="top-search-container">
          <h2>{category.category}</h2>
          <ul className="top-search-list">
            {category.keywords.map((keyword, keywordIndex) => (
              <li key={keywordIndex}>
                {keywordIndex < category.keywords.length - 1 ? (
                  <>
                    {keyword} |{' '}
                  </>
                ) : (
                  keyword
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TopSearch;
