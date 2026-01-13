import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content" data-aos="fade-right">
            <h2 className="about-title">Tentang Saya</h2>
            <div className="about-text">
              <p>
                Saya Habib Pandya, mahasiswa semester 7 Program Studi Teknik Informatika Universitas Lampung
              </p>
           
            </div>
          </div>
          
          <div className="about-image-wrapper" data-aos="fade-left">
            <div className="about-image-frame">
              <img 
                src="/assets/img/habib.png" 
                alt="Habib Pandya" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

