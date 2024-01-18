import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // Import your CSS file for ProductDetail styles
import Image1 from "../Components/Assets/image-test.png";
import Image2 from "../Components/Assets/image_laptop1.jpg";
import Image3 from "../Components/Assets/image_laptop2.jpg";
import Image4 from "../Components/Assets/image-test.png";
import ShopList from "./ShopList";

function ProductDetail() {
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [displayImages, setDisplayImages] = useState([]);

  const productImages = [Image1, Image2, Image3, Image4];

  const totalImages = productImages.length;

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    setDisplayImages(productImages.slice(0, 3));
  }, []);

  return (
    <div className="product-detail">
      <p>Electronics Computers Laptop</p>

      <div className="product-detail-image">
        <div
          className="image-carousel"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {displayImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={index === currentImage ? "active" : ""}
            />
          ))}
        </div>
        <div className="product-detail-arrow next" onClick={handleNextImage}>
          &rarr;
        </div>
        <div className="product-detail-arrow prev" onClick={handlePrevImage}>
          &larr;
        </div>
      </div>

      <div className="product-detail-info">
        <div className="product-detail-description">
          <h3>Product Name</h3>
          <p className="price">Rp. 2.000.000</p>
          <div className="more-detail">
            <div className="icon-nih">
              <i class="icon-light"></i> light use
            </div>
            <div className="icon-nih">
              <i class="icon-light"></i> light use
            </div>
            <div className="icon-nih">
              <i class="icon-light"></i>Seven Eleven Bendungan Hilir
            </div>
          </div>

          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          <h4>Read More</h4>

          <h3>Meet-Up</h3>
          <div className="icon-meetup-nih">
            <i class="icon-light"></i>Seven Eleven Bendungan Hilir
          </div>

          <div className="shop-info">
            <h3>Meet The Seller</h3>
            <div className="seller-profile">
              <div className="profile-image"></div>
              <div className="profile-details">
                <div className="profile-row">
                  <span className="profile-label">Instagram:</span>
                  <span className="profile-value">@instagram_username</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Location:</span>
                  <span className="profile-value">Seller Location</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Status:</span>
                  <span className="profile-value">Verified Seller</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Facebook:</span>
                  <span className="profile-value">
                    facebook.com/seller_username
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-info">
              <hr />
              <p className="no-reviews">Belum ada ulasan untuk @lapaklaptop</p>
            </div>
          </div>
        </div>

        <div className="product-detail-card-button">
          <div className="product-detail-negocard">
            <div className="profile-image-nego-card"></div>

            <div className="profile-details-nego-card">
              <div className="profile-row-nego-card">
                <span className="profile-label-nego-card">Instagram:</span>
                <span className="profile-value-nego-card">
                  @instagram_username
                </span>
              </div>
            </div>

            <button>Discuss in Forum</button>
          </div>

          <div className="product-detail-negocard">
            <div className="title-negocard-2">
              <h3>Masuk untuk membuat penawaran</h3>
            </div>

            <div className="offer-input">
              <input type="text" placeholder="Nominal penawaran" />
              <input type="text" placeholder="Make Offer" />
            </div>
            <button>Buat Penawaran</button>
          </div>
        </div>
      </div>
      <ShopList />
    </div>
  );
}

export default ProductDetail;
