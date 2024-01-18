import React from 'react';
import './Footer.css';
import logo from "../Assets/logo.png";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <div className='footer-logo'>
          <img src={logo} alt="" />
        </div>
        <p>Eskripsi web Anda di sini</p>
      </div>
      <div className='footer-section'>
        <h3>Produk</h3>
        <ul>
          <li>Pakaian</li>
          <li>Kendaraan</li>
          <li>Elektronik</li>
          <li>Rumah</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Perusahaan</h3>
        <ul>
          <li>Tentang Kami</li>
          <li>Contact Us</li>
          <li>Term</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Dukungan</h3>
        <ul>
          <li>Help Center</li>
          <li>Kontak Kami</li>
          <li>Ketentuan</li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <hr />
        <p>&copy; bekas.id | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
