import React from 'react';
import {toast} from 'react-toastify';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">

        <div className="box">
          <h3>Trường Đại học Văn Lang</h3>
          <a href="#"><i className="fas fa-map-marker-alt"></i> Trụ sở: 45 Nguyễn Khắc Nhu, P. Cô Giang, Q.1, TP. HCM</a>
          <a href="#"><i className="fas fa-map-marker-alt"></i> Cơ sở 2: 233A Phan Văn Trị, P.11, Q. Bình Thạnh, TP. HCM</a>
          <a href="#"><i className="fas fa-map-marker-alt"></i> Cơ sở 3: 69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, TP. HCM</a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <a href="https://www.facebook.com/itvlu"><i className="fa-brands fa-facebook"></i> Đại học Văn Lang</a>
          <a href="#"><i className="fas fa-phone"></i> 028. 71099240</a>
          <a href="#"><i className="fas fa-envelope"></i> http://mail.vanlanguni.vn</a>
        </div>
      </div>

      <div className="credit">&copy; <span>Website Car 2PHL</span> | All rights reserved</div>
    </footer>
  );
}
export default Footer;