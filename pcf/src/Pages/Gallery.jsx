import React, { useState, useEffect, useRef } from 'react';
import '../Pages/Gallery.css';


const Gallery = () => {
  const [mainTab, setMainTab] = useState('Active Projects');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSchoolKitOpen, setIsSchoolKitOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const galleryRef = useRef(null);
  const otherActiveProjects = ['Bolkya Bhinti', 'Winter'];
  const schoolKitYears = ['2021', '2022', '2023', '2024', '2025'];
  
  const pastProjects = [
    { category: 'Gift of Education' },
    { category: 'DnyanSetu' },
    { category: 'Seed Ball Event' },
    { category: 'Antarang' },
    { category: 'Tree Plantation' },
    { category: 'Covid' },
    { category: 'Republic Day' },
  ];

  // Show welcome text when Gallery component is first opened
useEffect(() => {
  setMainTab('Active Projects');
  setIsSchoolKitOpen(true);
  setActiveSubTab('2021');
  setShowWelcome(false);
}, []);


  useEffect(() => {
    if (!activeSubTab) return;

    async function fetchImages() {
      setLoading(true);
      setError(null);
      setImagesData([]);
      try {
        const response = await fetch(
          `http://localhost:5000/api/gallery?category=${encodeURIComponent(activeSubTab)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImagesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [activeSubTab]);

  const handleSubTabClick = (tab) => {
    setActiveSubTab(tab);
    setShowWelcome(false); // Hide welcome message on sub-tab click
    if (window.innerWidth <= 768 && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <div className="gallery-layout">
        <div className="tab-vertical">
        
          <button
            className={`tab-vertical-button ${mainTab === 'Active Projects' ? 'active' : ''}`}
            onClick={() => {
              setMainTab('Active Projects');
              setIsSchoolKitOpen(false);
              setActiveSubTab('');
              setShowWelcome(true);
            }}
          >
            Active Projects
          </button>

          {mainTab === 'Active Projects' && (
            <>
              <div
                className={`tab-sub-button parent-tab ${schoolKitYears.includes(activeSubTab) ? 'active' : ''}`}
                onClick={() => {
                  setIsSchoolKitOpen(true);
                  handleSubTabClick(schoolKitYears[0]); // Auto open first year
                }}
              >
                PCF-School Kit
              </div>

              {isSchoolKitOpen &&
                schoolKitYears.map((year, idx) => (
                  <button
                    key={idx}
                    className={`tab-sub-child-button ${activeSubTab === year ? 'active' : ''}`}
                    onClick={() => handleSubTabClick(year)}
                  >
                    {year}
                  </button>
                ))}

              {otherActiveProjects.map((item, idx) => (
                <button
                  key={idx}
                  className={`tab-sub-button ${activeSubTab === item ? 'active' : ''}`}
                  onClick={() => handleSubTabClick(item)}
                >
                  {item}
                </button>
              ))}
            </>
          )}

          <button
            className={`tab-vertical-button ${mainTab === 'Past Projects' ? 'active' : ''}`}
            onClick={() => {
              setMainTab('Past Projects');
              setIsSchoolKitOpen(false);
              handleSubTabClick(pastProjects[0].category);
            }}
          >
            Past Projects
          </button>

          {mainTab === 'Past Projects' &&
            pastProjects.map((item, idx) => (
              <button
                key={idx}
                className={`tab-sub-button ${activeSubTab === item.category ? 'active' : ''}`}
                onClick={() => handleSubTabClick(item.category)}
              >
                {item.category}
              </button>
            ))}
        </div>

        <div className="gallery-content" ref={galleryRef}>
          {showWelcome && mainTab === 'Active Projects' && !activeSubTab && (
            <div className="welcome-message">
              
            </div>
          )}

          {loading && <p>Loading images...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && imagesData.length === 0 && activeSubTab && <p>No images found.</p>}

          <div className="gallery-items">
            {imagesData.map((img) => (
              <div
                key={img.id}
                className="gallery-item"
                onClick={() => setSelectedImage(`http://localhost:5000${img.url}`)}
              >
                <img src={`http://localhost:5000${img.url}`} alt={img.image_name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fullscreen-modal" onClick={() => setSelectedImage(null)}>
          <div className="fullscreen-image-container" onClick={() => setSelectedImage(null)}>
            <span className="close-button" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="Full" className="fullscreen-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
