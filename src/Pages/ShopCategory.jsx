import React from "react";
import Hero from "../Components/Hero/Hero";
import CategoryList from "../Components/Hero/CategoryList";
import TopSearch from "../Components/Search/TopSearch";
import "./Shop.css";
import FirstProduct from "../Components/Assets/image-test.png";

function ShopCategory() {
  return (
    <div className="shop">
      <div className="header-category">
        <p>Nama Category</p>
        <h1>10.000+ listing in Nama Cateogry</h1>
      </div>
      <CategoryList />
      <div className="product-container">
        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 4"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 1"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 3"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 2"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 2"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 3"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img
                src={FirstProduct}
                alt="Avatar 1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img
              src={FirstProduct}
              alt="Product Image 4"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <p className="product-name">Nama Produk</p>
          <p className="product-price">Harga Produk</p>
          <p className="product-condition">Kondisi Produk</p>
          <div className="love-icon">
            <span>&#x2665;</span>
            <p className="love-count">10</p>
          </div>
        </div>
      </div>
      <button className="load-more-btn">Lihat Lainnya</button>

      <TopSearch />
    </div>
  );
}

export default ShopCategory;
