import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">🔍</div>
          <div className="brand">TraceAI</div>
        </div>

        <div className="nav-center">
          <a>Home</a>
          <a>How It Works</a>
          <a>Report Case</a>
          <a>Live Detection</a>
          <a>Authorities</a>
        </div>

        <div className="nav-right">
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Report Now</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>AI Missing Person Detection System</h1>
          <p>
            Find loved ones faster using AI face recognition,
            CCTV scanning, and smart alerts.
          </p>

          <ul>
            <li>✔ Real-time scanning</li>
            <li>✔ Instant alerts</li>
            <li>✔ Safe & secure</li>
          </ul>

          <div className="hero-buttons">
            <button className="btn-primary big">Report Missing Person</button>
            <button className="btn-outline big">How It Works</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="mock-screen">
            <div className="face-box"></div>
            <div className="match">Match 92%</div>
          </div>
        </div>
      </section>

      {/* PROBLEM CARDS */}
      <section className="cards">
        <h2>Why Current Search Is Hard</h2>
        <div className="card-grid">
          <div className="card">Manual CCTV Checking</div>
          <div className="card">Delayed Identification</div>
          <div className="card">Scattered Data</div>
          <div className="card">Human Errors</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>
        <div className="step-row">
          <div className="step">Upload Photo</div>
          <div className="arrow">→</div>
          <div className="step">AI Scan</div>
          <div className="arrow">→</div>
          <div className="step">Face Match</div>
          <div className="arrow">→</div>
          <div className="step">Alert Sent</div>
        </div>
      </section>

      {/* PREVIEW */}
      <section className="preview">
        <h2>Live Detection Preview</h2>
        <div className="preview-box">
          <div className="preview-left">Camera Feed</div>
          <div className="preview-right">
            <p>Match Found</p>
            <button className="btn-primary">View Case</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Act Fast. Save Lives.</h2>
        <button className="btn-primary big">Start Report</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© TraceAI — AI Missing Person Detection System</p>
      </footer>

    </div>
  );
}
