import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import CategoryList from "../Components/Hero/CategoryList";
import "./Shop.css";
import FirstProduct from "../Components/Assets/image-test.png";

function Shop() {
  return (
    <div className="shop">
      <Hero />
      <h2>Explore Product</h2>
      <CategoryList />
      <h1>Recommend For You</h1>
      <div className="product-container">
        <div className="product-card">
          <Link to="/product/1" className="product-link">
            <div className="seller-info">
              <div className="seller-avatar">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details">
                <p className="seller-name">Nama Penjual</p>
                <p className="post-time">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name">Nama Produk</p>
            <p className="product-price">Harga Produk</p>
            <p className="product-condition">Kondisi Produk</p>
            <div className="love-icon">
              <span>&#x2665;</span>
              <p className="love-count">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card">
          <div className="seller-info">
            <div className="seller-avatar">
              <img src={FirstProduct} alt="Avatar 3" />
            </div>
            <div className="seller-details">
              <p className="seller-name">Nama Penjual</p>
              <p className="post-time">Waktu Posting</p>
            </div>
          </div>
          <div className="product-image">
            <img src={FirstProduct} alt="Product Image 2" />
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
            <img src={FirstProduct} alt="Product Image 3" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
            <img src={FirstProduct} alt="Product Image 4" />
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
    </div>
  );
}

export default Shop;
