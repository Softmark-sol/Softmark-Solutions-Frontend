import React from 'react';
import '../css/footer.css'; // You will create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-left">
          <ul>
            <li><button onClick={() => { window.location.href = '#'; }}>HOME</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>WORK</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>OUR PROCESS</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>COMPANY</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>CAREERS</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>CONTACT US</button></li>
          </ul>
        </div>
        <div className="footer-center">
          <ul>
            <li><button onClick={() => { window.location.href = '#'; }}>WEB APP DEVELOPMENT</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>BUSINESS PROCESS AUTOMATION</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>MOBILE APP DEVELOPMENT</button></li>
            <li><button onClick={() => { window.location.href = '#'; }}>Search Engine Optimization</button></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <p>United States Office</p>
            <p>307, Wyoming</p>
          </div>
          <div className="footer-contact">
            <p>Pakistan office</p>
            <p>705, Noor Trade Tower, Gulshan e Iqbal 13 A</p>
            <p>Karachi</p>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/company/softmark-solutions-llc/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com/SoftMarkSolutionsLLC"><i className="fab fa-facebook"></i></a>
        <a href="https://x.com/SoftMark_sol"><i className="fab fa-twitter"></i></a>
        <p>admin@softmarksolutions.com</p>
      </div>
    </footer>
  );
}

export default Footer;
