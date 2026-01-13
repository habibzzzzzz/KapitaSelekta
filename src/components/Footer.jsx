import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-simple">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} <span className="footer-name">Habib Pandya</span>. All rights reserved.
          </p>
        </div>
      </div>
      
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <i className="fa fa-angle-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
