import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../components/Liveproject.css';

const LiveProjectsWidget = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show sidebar automatically on first load / refresh
  useEffect(() => {
    setSidebarOpen(true);
  }, []);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Blur Background */}
      {sidebarOpen && <div className="backdrop-blur" onClick={closeSidebar} />}

      <div className="live-projects-wrapper">
        {/* Sidebar Button */}
        <button className="sidebar-btn bottom-left" onClick={toggleSidebar}>
          📋 Live Projects
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <span className="closebtn right-top" onClick={closeSidebar}>
            &times;
          </span>

          <h4>PCF Live Projects</h4>

          <div className="project-entry">
            <strong>🎒 PCF – School Kit</strong><br />
            <span>
              Supporting children with educational kits.{" "}
              <span className="badge badge-success">Ongoing</span>
            </span>
          </div>

          <div className="project-entry">
            <strong>🎨 Bolkya Bhinti</strong><br />
            <span>
              Art-driven awareness on public walls.{" "}
              <span className="badge badge-warning">Ongoing</span>
            </span>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://wa.me/919767881946"
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveProjectsWidget;
