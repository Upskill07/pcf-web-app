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
            <strong>🎒PCF-School-Kit-2025</strong><br />
            <span>
              Helping 500 rural students every year with educational School-Kit.{" "}
              
            </span>
          </div>

          <div className="project-entry">
            <strong>🎨 Bolkya Bhinti – Classroom Transformation </strong><br />
            <span>
              Dedicated to transforming classrooms into safe, welcoming spaces for students{" "}
             
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
