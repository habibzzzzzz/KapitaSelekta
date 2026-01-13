import './ResearchSection.css';

const ResearchSection = () => {
  const researchItems = [
    {
      id: 1,
      icon: 'fa fa-globe',
      title: 'Fokus Kekuatan Global',
      description: 'Fokus pada pengembangan teknologi informasi LMS anti Copy-Paste'
    },
    {
      id: 2,
      icon: 'fa fa-star',
      title: 'Kompetensi Utama',
      description: 'Bidang dasar saya adalah Rekayasa Perangkat Lunak (RPL), mencakup analisis kebutuhan, desain sistem, pengembangan antarmuka pengguna, dan yang berkaitan dengan Rekayasa Perangkat Lunak'
    },
    {
      id: 3,
      icon: 'fa fa-file-text',
      title: 'Arah Penelitian Skripsi',
      description: 'Fokus penelitian skripsi pada sistem LMS anti Copy-Paste'
    },
    {
      id: 4,
      icon: 'fa fa-building',
      title: 'Implementasi di Dunia Industri',
      description: 'Saya memiliki pengalaman praktis di Badan Pusat Statistik Kota Bandar Lampung, di mana saya terlibat dalam pengembangan sistem informasi dan analisis data. Pengalaman ini menjadi implementasi nyata tentang bagaimana sistem informasi dapat meningkatkan efisiensi, kontrol, dan transparansi dalam organisasi pemerintahan.'
    }
  ];

  return (
    <section id="research" className="research-section">
      <div className="container">
        <div className="research-header">
          <h2 className="research-title">Arah Riset & Pengembangan Saya</h2>
          <p className="research-intro">
           
          </p>
        </div>

        <div className="research-grid">
          {researchItems.map((item) => (
            <div key={item.id} className="research-card" data-aos="fade-up">
              <div className="research-card-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="research-card-title">{item.title}</h3>
              <p className="research-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

