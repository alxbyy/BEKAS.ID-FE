import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import CategoryList from "../Components/Hero/CategoryList";
import "./ShopList.css";
import FirstProduct from "../Components/Assets/image-test.png";

function Shop() {
  return (
    <div className="shop-list">
      <h1>Recommend For You</h1>
      <div className="product-container-shop-list ">

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>


        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>


        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list">
              <span>&#x2665;</span>
              <p className="love-count-shop-list">10</p>
            </div>
          </Link>
        </div>

        <div className="product-card-shop-list ">
          <Link to="/product/1" className="product-link-shop-list ">
            <div className="seller-info-shop-list ">
              <div className="seller-avatar-shop-list ">
                <img src={FirstProduct} alt="Avatar 4" />
              </div>
              <div className="seller-details-shop-list ">
                <p className="seller-name-shop-list ">Nama Penjual</p>
                <p className="post-time-shop-list ">Waktu Posting</p>
              </div>
            </div>
            <div className="product-image-shop-list ">
              <img src={FirstProduct} alt="Product Image 1" />
            </div>
            <p className="product-name-shop-list ">Nama Produk</p>
            <p className="product-price-shop-list ">Harga Produk</p>
            <p className="product-condition-shop-list ">Kondisi Produk</p>
            <div className="love-icon-shop-list ">
              <span>&#x2665;</span>
              <p className="love-count-shop-list ">10</p>
            </div>
          </Link>
        </div>

      </div>
      <button className="load-more-btn">Lihat Lainnya</button>
    </div>
  );
}

export default Shop;
