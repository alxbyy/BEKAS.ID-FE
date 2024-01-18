import React from 'react'

function Search() {
  return (
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
    >
      <option value="" disabled>
        Select Location
      </option>
      <option value="location1">Location 1</option>
      <option value="location2">Location 2</option>
    </select>
    <button onClick={handleSearch}>Search</button>
  </div>
  )
}

export default Search