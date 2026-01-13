import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section-clean">
   
      
      <div className="hero-content">
        <div className="profile-image-wrapper">
          <img 
            src="/assets/img/habib.png" 
            alt="Habib Pandya" 
            className="profile-image"
          />
        </div>
        
        <div className="hero-text-content">
          <div className="hero-greeting">
            <h1>saya Habib Pandya</h1>
          </div>
          
          <div className="hero-description">
            <p>Mahasiswa Teknik Informatika Universitas Lampung</p>
          </div>
          
          <div className="hero-buttons">
            <a 
              href="https://drive.google.com/file/d/1kb4Bd15mpRe51c1KS0KsL5XPpnHs0Wyx/view?usp=sharing" 
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-file"></i>
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
