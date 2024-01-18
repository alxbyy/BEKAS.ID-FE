import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryList.css";
import FollowingImage from "../Assets/following-icon.png";
import WomenfImage from "../Assets/womenf-icon.png";

const CategoryList = () => {
  const categories = [
    { name: "Following", icon: FollowingImage },
    { name: "Women's Fashion", icon: WomenfImage },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [activeButton, setActiveButton] = useState(null);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("Terbaru");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedDealOptions, setSelectedDealOptions] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveDropdown(null);
    
    navigate(`/shop-category?category=${category.name}`);
  };

  const handleButtonClick = (dropdownType) => {
    setActiveButton((prevButton) =>
      prevButton === dropdownType ? null : dropdownType
    );
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdownType ? null : dropdownType
    );
  };

  const handleSearchInputChange = (value) => {
    setSearchInputValue(value);
  };

  const handleCheckboxChange = (option, type) => {
    switch (type) {
      case "size":
        setSelectedSizes((prevSelectedSizes) =>
          prevSelectedSizes.includes(option)
            ? prevSelectedSizes.filter((size) => size !== option)
            : [...prevSelectedSizes, option]
        );
        break;
      case "condition":
        setSelectedConditions((prevSelectedConditions) =>
          prevSelectedConditions.includes(option)
            ? prevSelectedConditions.filter((condition) => condition !== option)
            : [...prevSelectedConditions, option]
        );
        break;
      case "dealOption":
        setSelectedDealOptions((prevSelectedDealOptions) =>
          prevSelectedDealOptions.includes(option)
            ? prevSelectedDealOptions.filter(
                (dealOption) => dealOption !== option
              )
            : [...prevSelectedDealOptions, option]
        );
        break;
      default:
        break;
    }
  };

  const renderDropdown = (options, dropdownType) => {
    return (
      <div
        className={`dropdown${
          activeDropdown === dropdownType ? " active" : ""
        }`}
      >
        {options.map((option, index) => (
          <div key={index}>
            {option === "Search Input" ? (
              <input
                type="text"
                placeholder="Type to search..."
                onChange={(e) => handleSearchInputChange(e.target.value)}
                className="search-bar-input"
              />
            ) : (
              <label key={option}>
                {dropdownType === "sort" ? (
                  <>
                    <input
                      type="radio"
                      value={option}
                      checked={option === selectedSortOption}
                      onChange={() => setSelectedSortOption(option)}
                    />
                    {option}
                  </>
                ) : (
                  <>
                    {dropdownType !== "category" && (
                      <input
                        type="checkbox"
                        value={option}
                        checked={isChecked(option, dropdownType)}
                        onChange={() =>
                          handleCheckboxChange(option, dropdownType)
                        }
                      />
                    )}
                    {option}
                  </>
                )}
              </label>
            )}
          </div>
        ))}
      </div>
    );
  };

  const isChecked = (option, dropdownType) => {
    switch (dropdownType) {
      case "size":
        return selectedSizes.includes(option);
      case "condition":
        return selectedConditions.includes(option);
      case "dealOption":
        return selectedDealOptions.includes(option);
      default:
        return false;
    }
  };

  return (
    <div className="category-list">
      <div className="category-items">
        {categories.map((category, index) => (
          <div
            className={`category-item${
              selectedCategory === category ? " active" : ""
            }`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="icon-container">
              <img
                className="icon"
                src={category.icon}
                alt={`${category.name} Icon`}
              />
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="selected-category">
          <div
            className={`dropdown-container${
              activeDropdown === "category" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("category")}
              className={activeButton === "category" ? "active" : ""}
            >
              {`Button ${selectedCategory.name}`}
            </button>
            {activeDropdown === "category" &&
              renderDropdown(
                ["Search Input", "All Categories", "Category 1", "Category 2"],
                "category"
              )}
          </div>

          <div
            className={`dropdown-container${
              activeDropdown === "sort" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("sort")}
              className={activeButton === "sort" ? "active" : ""}
            >
              Sort Best Match
            </button>
            {activeDropdown === "sort" &&
              renderDropdown(
                [
                  "Terbaru",
                  "Harga-Rendah Ke Tinggi",
                  "Harga-Tinggi Ke Rendah",
                  "Terdekat",
                ],
                "sort"
              )}
          </div>

          <span>|</span>

          <div
            className={`dropdown-container${
              activeDropdown === "size" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("size")}
              className={activeButton === "size" ? "active" : ""}
            >
              Size
            </button>
            {activeDropdown === "size" &&
              renderDropdown(["Size 1", "Size 2", "Size 3"], "size")}
          </div>

          <div
            className={`dropdown-container${
              activeDropdown === "condition" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("condition")}
              className={activeButton === "condition" ? "active" : ""}
            >
              Condition
            </button>
            {activeDropdown === "condition" &&
              renderDropdown(
                ["Barang Baru", "Seperti Baru", "Sangat Baik", "Baik", "Cukup"],
                "condition"
              )}
          </div>

          <div
            className={`dropdown-container${
              activeDropdown === "price" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("price")}
              className={activeButton === "price" ? "active" : ""}
            >
              Price
            </button>
            {activeDropdown === "price" && (
              <div className="price-dropdown">
                <input type="text" placeholder="Rp. Minimum" />
                <input type="text" placeholder="Rp. Maximum" />
                <button>Batal</button>
                <button>Pilih</button>
              </div>
            )}
          </div>

          <div
            className={`dropdown-container${
              activeDropdown === "dealOption" ? " active" : ""
            }`}
          >
            <button
              onClick={() => handleButtonClick("dealOption")}
              className={activeButton === "dealOption" ? "active" : ""}
            >
              Deal Option
            </button>
            {activeDropdown === "dealOption" &&
              renderDropdown(["Bayar di tempat", "Pengiriman"], "dealOption")}
          </div>

          <span>|</span>

          <button
            onClick={() => handleButtonClick("moreFilter")}
            className={activeButton === "moreFilter" ? "active" : ""}
          >
            More Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
